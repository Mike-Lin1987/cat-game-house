(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CAT_COURIER_CONFIG = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  return Object.freeze({
    title: '貓咪快遞員',
    levelCount: 100,
    chapterCount: 5,
    hintsPerLevel: 3,
    historyLimit: 100,
    dataVersion: 1,
    generatorVersion: 1,
    storageKey: 'cat-courier:v1',
    passableTerrain: Object.freeze(['road', 'bridge', 'plaza']),
    items: Object.freeze([
      'milk', 'dried-fish', 'parcel', 'cat-food', 'yarn',
      'mouse', 'cat-grass', 'letter', 'flowers', 'paw-cookie',
    ]),
  });
});
