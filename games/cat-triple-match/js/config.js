(function (root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  else root.CAT_TRIPLE_CONFIG = config;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const chapters = Object.freeze([
    { number: 1, title: '暖爐初遇', startLevel: 1, endLevel: 20, minTiles: 18, maxTiles: 36 },
    { number: 2, title: '窗邊午後', startLevel: 21, endLevel: 40, minTiles: 36, maxTiles: 54 },
    { number: 3, title: '毛線小徑', startLevel: 41, endLevel: 60, minTiles: 54, maxTiles: 72 },
    { number: 4, title: '月光閣樓', startLevel: 61, endLevel: 80, minTiles: 72, maxTiles: 90 },
    { number: 5, title: '星夜貓屋', startLevel: 81, endLevel: 100, minTiles: 90, maxTiles: 108 },
    { number: 6, title: '銀河天台', startLevel: 101, endLevel: 120, minTiles: 108, maxTiles: 126 },
  ].map((chapter) => Object.freeze(chapter)));

  return Object.freeze({
    gameTitle: '貓咪三層配對',
    chapters,
    totalLevels: chapters[chapters.length - 1].endLevel,
    trayCapacity: 9,
    matchSize: 3,
    maxLayers: 3,
    dataVersion: 1,
    storageKey: 'cat-triple-match:v1',
    maxUndoStates: 50,
    defaultToolUses: Object.freeze({
      hint: 3,
      undo: 3,
      shuffle: 3,
    }),
    hintMaxNodes: 150000,
    hintDeadlineMs: 300,
    shuffleMaxAttempts: 200,
    shuffleDeadlineMs: 800,
  });
});
