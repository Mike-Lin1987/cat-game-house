(function (root, factory) {
  const groups = typeof module === 'object' && module.exports
    ? [require('./levels-001-020.js'), require('./levels-021-040.js'), require('./levels-041-060.js'), require('./levels-061-080.js'), require('./levels-081-100.js')]
    : [root.CAT_STORAGE_LEVELS_001_020, root.CAT_STORAGE_LEVELS_021_040, root.CAT_STORAGE_LEVELS_041_060, root.CAT_STORAGE_LEVELS_061_080, root.CAT_STORAGE_LEVELS_081_100];
  const levels = factory(groups);
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_STORAGE_LEVELS = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (groups) {
  'use strict';
  return Object.freeze(groups.flat());
});
