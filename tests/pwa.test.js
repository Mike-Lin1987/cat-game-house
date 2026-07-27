'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const { CAT_GAME_CATALOG } = require('../js/game-catalog.js');

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

test('Web App Manifest 可由網站根目錄安裝並使用本機圖示', () => {
  const manifest = JSON.parse(read('manifest.webmanifest'));

  assert.equal(manifest.name, '遊戲小屋');
  assert.equal(manifest.short_name, '遊戲小屋');
  assert.equal(manifest.lang, 'zh-Hant');
  assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.theme_color, '#fff9ef');
  assert.equal(manifest.background_color, '#fff9ef');
  assert.equal(manifest.icons.length >= 2, true);
  assert.deepEqual(
    manifest.icons.map((icon) => icon.sizes).sort(),
    ['192x192', '512x512'],
  );

  for (const icon of manifest.icons) {
    assert.match(icon.src, /^\.\//);
    assert.doesNotMatch(icon.src, /^(?:https?:)?\/\//i);
    assert.equal(fs.existsSync(path.join(ROOT, icon.src)), true, `缺少 ${icon.src}`);
  }
});

test('入口與遊戲頁共用 manifest 並以正確相對路徑註冊 Service Worker', () => {
  const portal = read('index.html');
  const game = read('games/cat-grid/index.html');

  assert.match(portal, /href="\.\/manifest\.webmanifest"/);
  assert.match(portal, /src="\.\/js\/pwa\.js"/);
  assert.match(portal, /data-service-worker="\.\/service-worker\.js"/);

  assert.match(game, /href="\.\.\/\.\.\/manifest\.webmanifest"/);
  assert.match(game, /src="\.\.\/\.\.\/js\/pwa\.js"/);
  assert.match(game, /data-service-worker="\.\.\/\.\.\/service-worker\.js"/);
  assert.match(portal, /href="\.\/games\/cat-grid\/index\.html"/);
});

test('Service Worker 從 catalog 衍生遊戲快取且只代理同來源 GET', () => {
  const serviceWorker = read('service-worker.js');

  assert.match(serviceWorker, /importScripts\(['"]\.\/js\/game-catalog\.js['"]\)/);
  assert.match(serviceWorker, /CAT_GAME_CATALOG/);
  assert.match(serviceWorker, /request\.method\s*!==\s*['"]GET['"]/);
  assert.match(serviceWorker, /url\.origin\s*!==\s*self\.location\.origin/);

  for (const game of CAT_GAME_CATALOG) {
    for (const asset of game.offlineAssets) {
      assert.equal(
        serviceWorker.includes(asset),
        false,
        '遊戲資源應由 catalog 取得，不應逐項硬編碼在 Service Worker',
      );
    }
  }
});

test('PWA 腳本在 file 協定不註冊，並支援原生安裝提示', () => {
  const pwa = read('js/pwa.js');

  assert.match(pwa, /window\.location\.protocol\s*===\s*['"]file:['"]/);
  assert.match(pwa, /beforeinstallprompt/);
  assert.match(pwa, /navigator\.serviceWorker\.register/);
  assert.match(pwa, /data-install-app/);
});

test('入口與遊戲返回連結避開 Sites 的 index.html 重新導向', () => {
  const portalScript = read('js/portal.js');
  const gameScript = read('js/app.js');
  const connectPage = read('games/cat-color-connect/index.html');
  const connectScript = read('games/cat-color-connect/js/app.js');

  assert.match(portalScript, /window\.location\.protocol\s*===\s*['"]file:['"]/);
  assert.match(portalScript, /\/index\\\.html/);
  assert.match(gameScript, /window\.location\.protocol\s*===\s*['"]file:['"]/);
  assert.match(gameScript, /const PORTAL_HREF/);
  assert.match(connectScript, /window\.location\.protocol\s*===\s*['"]file:['"]/);
  assert.match(connectScript, /const PORTAL_HREF/);
  assert.match(connectPage, /data-portal-home/);
  assert.match(connectPage, /class="home-cat-icon"/);
  assert.doesNotMatch(connectPage, /class="icon-button home-link"[^>]*>⌂<\/a>/);
});
