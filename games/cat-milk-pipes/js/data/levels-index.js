(function (root, factory) {
  const levels = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_MILK_LEVELS = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    return [
      ...require('./levels-001-020.js'),
      ...require('./levels-021-040.js'),
      ...require('./levels-041-060.js'),
      ...require('./levels-061-080.js'),
      ...require('./levels-081-100.js'),
    ];
  }
  return [
    ...(root.CAT_MILK_LEVELS_001_020 || []),
    ...(root.CAT_MILK_LEVELS_021_040 || []),
    ...(root.CAT_MILK_LEVELS_041_060 || []),
    ...(root.CAT_MILK_LEVELS_061_080 || []),
    ...(root.CAT_MILK_LEVELS_081_100 || []),
  ];
});
