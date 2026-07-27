(function initAllCatConnectLevels(root) {
  'use strict';
  const levels = typeof module === 'object' && module.exports
    ? [
        ...require('./levels-6x6.js'),
        ...require('./levels-8x8.js'),
        ...require('./levels-10x10.js'),
        ...require('./levels-6x8.js'),
        ...require('./levels-6x10.js'),
        ...require('./levels-8x10.js'),
      ]
    : [
        ...(root.CAT_CONNECT_LEVELS_6X6 || []),
        ...(root.CAT_CONNECT_LEVELS_8X8 || []),
        ...(root.CAT_CONNECT_LEVELS_10X10 || []),
        ...(root.CAT_CONNECT_LEVELS_6X8 || []),
        ...(root.CAT_CONNECT_LEVELS_6X10 || []),
        ...(root.CAT_CONNECT_LEVELS_8X10 || []),
      ];
  if (typeof module === 'object' && module.exports) {
    module.exports = levels;
  }
  if (root) {
    root.CAT_CONNECT_LEVELS = levels;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
