(function (root, factory) {
  'use strict';
  const api = factory(
    root?.CAT_WORD_LEVELS_001_020 ||
      (typeof module === 'object' && module.exports ? require('./levels-001-020.js') : []),
    root?.CAT_WORD_LEVELS_021_040 ||
      (typeof module === 'object' && module.exports ? require('./levels-021-040.js') : []),
    root?.CAT_WORD_LEVELS_041_060 ||
      (typeof module === 'object' && module.exports ? require('./levels-041-060.js') : []),
    root?.CAT_WORD_LEVELS_061_080 ||
      (typeof module === 'object' && module.exports ? require('./levels-061-080.js') : []),
    root?.CAT_WORD_LEVELS_081_100 ||
      (typeof module === 'object' && module.exports ? require('./levels-081-100.js') : []),
  );
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CAT_WORD_LEVELS = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (...groups) {
  return Object.freeze(groups.flat());
});
