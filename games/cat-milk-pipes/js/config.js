(function (root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  else root.CAT_MILK_PIPE_CONFIG = config;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze({
    gameTitle: '貓咪鮮奶管線',
    totalLevels: 100,
    dataVersion: 1,
    storageKey: 'cat-milk-pipes:v1',
    maxUndoStates: 100,
  });
});
