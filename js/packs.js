(function initCatPuzzlePacks(root, factory) {
  'use strict';

  const packs = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = packs;
  }

  if (root) {
    root.CAT_PUZZLE_PACKS = packs;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createPacks() {
  'use strict';

  return Object.freeze(
    [
      {
        id: 'beginner-6',
        size: 6,
        levelCount: 100,
        title: '6×6 入門',
        seedBase: 610000,
        theme: 'apricot',
        motif: 'fish',
      },
      {
        id: 'advanced-8',
        size: 8,
        levelCount: 100,
        title: '8×8 進階',
        seedBase: 820000,
        theme: 'sage',
        motif: 'paw',
      },
      {
        id: 'challenge-10',
        size: 10,
        levelCount: 100,
        title: '10×10 挑戰',
        seedBase: 1030000,
        theme: 'lavender',
        motif: 'yarn',
      },
      {
        id: 'master-12',
        size: 12,
        levelCount: 65,
        title: '12×12 大師',
        seedBase: 1235000,
        theme: 'rose',
        motif: 'fish',
      },
    ].map((pack) => Object.freeze(pack)),
  );
});
