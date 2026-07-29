(function (root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  else root.CAT_TRIPLE_CONFIG = config;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  return Object.freeze({
    gameTitle: '貓咪三層配對',
    totalLevels: 100,
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
