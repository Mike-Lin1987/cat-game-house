(function (root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  else root.CAT_STORAGE_CONFIG = config;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze({
    gameTitle: '貓咪收納大師',
    totalLevels: 100,
    dataVersion: 1,
    storageKey: 'cat-storage-master:v1',
    maxUndoStates: 100,
  });
});
