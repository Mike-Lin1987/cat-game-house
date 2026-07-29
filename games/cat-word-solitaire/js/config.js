(function initCatWordConfig(root, factory) {
  'use strict';

  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CAT_WORD_CONFIG = api.CAT_WORD_CONFIG;
    root.CatWordConfig = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createConfig() {
  'use strict';

  const CAT_WORD_CONFIG = Object.freeze({
    gameTitle: '喵語分類接龍',
    totalLevels: 100,
    totalCardsPerLevel: 54,
    initialTableauCards: 20,
    initialStockCards: 34,
    categorySlotCount: 5,
    tableauColumnCount: 5,
    spareCellCount: 2,
    dataVersion: 2,
    storageKey: 'cat-word-solitaire:v2',
    maxUndoStates: 50,
    hintMaxNodes: 5000,
    hintMaxDurationMs: 120,
    chapters: Object.freeze([
      Object.freeze({ id: 1, title: '日常入門', range: Object.freeze([1, 20]) }),
      Object.freeze({ id: 2, title: '生活聯想', range: Object.freeze([21, 40]) }),
      Object.freeze({ id: 3, title: '知識分類', range: Object.freeze([41, 60]) }),
      Object.freeze({ id: 4, title: '語意進階', range: Object.freeze([61, 80]) }),
      Object.freeze({ id: 5, title: '綜合挑戰', range: Object.freeze([81, 100]) }),
    ]),
    theme: Object.freeze({
      background: '#071c30',
      backgroundRaised: '#0b2945',
      card: '#fff7e7',
      gold: '#dcae56',
      panel: '#16324b',
      error: '#e85d5d',
      focus: '#42a5ff',
    }),
  });

  return Object.freeze({ CAT_WORD_CONFIG });
});
