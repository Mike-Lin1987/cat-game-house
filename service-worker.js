'use strict';

importScripts('./js/packs.js', './js/game-catalog.js');

const CACHE_PREFIX = 'game-house';
const CACHE_VERSION = 'v25';
const CACHE_NAME = `${CACHE_PREFIX}:${CACHE_VERSION}`;
const PORTAL_ASSETS = [
  './',
  './index.html',
  './portal.css',
  './manifest.webmanifest',
  './js/game-catalog.js',
  './js/progress-backup.js',
  './js/progress-ui.js',
  './js/portal.js',
  './js/pwa.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
];
const GAME_ASSETS = self.CAT_GAME_CATALOG.flatMap(
  (game) => game.offlineAssets,
);
const OFFLINE_ASSETS = [...new Set([...PORTAL_ASSETS, ...GAME_ASSETS])];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(OFFLINE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter(
              (name) => name.startsWith(`${CACHE_PREFIX}:`) && name !== CACHE_NAME,
            )
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseCopy = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseCopy));
        return networkResponse;
      });
    }),
  );
});
