(function (root, factory) {
  const commonJs = typeof module === 'object' && module.exports;
  const packs =
    commonJs
      ? require('./packs.js')
      : root.CAT_PUZZLE_PACKS;
  const tripleConfig = commonJs
    ? require('../games/cat-triple-match/js/config.js')
    : root.CAT_TRIPLE_CONFIG;
  const api = factory(packs, tripleConfig);
  if (commonJs) {
    module.exports = api;
  } else {
    root.CAT_GAME_CATALOG = api.CAT_GAME_CATALOG;
    root.CatGameCatalog = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (packs, tripleConfig) {
  'use strict';

  if (!Array.isArray(packs)) {
    throw new Error('貓咪方格關卡包尚未載入');
  }
  if (!tripleConfig || !Number.isInteger(tripleConfig.totalLevels)) {
    throw new Error('貓咪三層配對設定尚未載入');
  }

  const catGridLevelCount = packs.reduce(
    (total, pack) => total + pack.levelCount,
    0,
  );

  const CAT_GAME_CATALOG = Object.freeze([
    Object.freeze({
      id: 'cat-grid',
      title: '貓咪方格',
      eyebrow: '邏輯益智 · 單人',
      description: '在每列、每欄與每個彩色區域放入一隻貓咪',
      href: './games/cat-grid/index.html',
      tutorialHref: './tutorials/cat-grid/index.html',
      storageKey: 'cat-grid-game:v1',
      cover: './assets/game-covers/cat-grid.svg',
      levelCount: catGridLevelCount,
      offline: true,
      accent: '#ff8e68',
      offlineAssets: Object.freeze([
        './games/cat-grid/index.html',
        './tutorials/cat-grid/index.html',
        './games/cat-grid/tutorial.webm',
        './styles.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './js/packs.js',
        './js/core.js',
        './js/levels.js',
        './js/app.js',
        './assets/game-covers/cat-grid.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-color-connect',
      title: '貓咪彩色連線',
      eyebrow: '路線益智 · 單人',
      description: '連接相同貓咪，讓繽紛路線填滿每一格',
      href: './games/cat-color-connect/index.html',
      tutorialHref: './tutorials/cat-color-connect/index.html',
      storageKey: 'cat-color-connect:v1',
      cover: './assets/game-covers/cat-color-connect.svg',
      levelCount: 100,
      offline: true,
      accent: '#118a83',
      offlineAssets: Object.freeze([
        './games/cat-color-connect/index.html',
        './tutorials/cat-color-connect/index.html',
        './games/cat-color-connect/tutorial.webm',
        './games/cat-color-connect/styles.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-color-connect/js/config.js',
        './games/cat-color-connect/js/core.js',
        './games/cat-color-connect/js/storage.js',
        './games/cat-color-connect/js/renderer.js',
        './games/cat-color-connect/js/app.js',
        './games/cat-color-connect/js/levels-6x6.js',
        './games/cat-color-connect/js/levels-8x8.js',
        './games/cat-color-connect/js/levels-10x10.js',
        './games/cat-color-connect/js/levels-6x8.js',
        './games/cat-color-connect/js/levels-6x10.js',
        './games/cat-color-connect/js/levels-8x10.js',
        './games/cat-color-connect/js/levels.js',
        './assets/game-covers/cat-color-connect.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-word-solitaire',
      title: '喵語分類接龍',
      eyebrow: '分類接龍 · 單人',
      description: '翻開階梯牌堆，把提示牌送回正確的貓咪分類',
      href: './games/cat-word-solitaire/index.html',
      tutorialHref: './tutorials/cat-word-solitaire/index.html',
      storageKey: 'cat-word-solitaire:v2',
      cover: './assets/game-covers/cat-word-solitaire.svg',
      levelCount: 100,
      offline: true,
      accent: '#dcae56',
      offlineAssets: Object.freeze([
        './games/cat-word-solitaire/index.html',
        './games/cat-word-solitaire/review.html',
        './tutorials/cat-word-solitaire/index.html',
        './games/cat-word-solitaire/tutorial.webm',
        './games/cat-word-solitaire/css/app.css',
        './games/cat-word-solitaire/css/review.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-word-solitaire/js/config.js',
        './games/cat-word-solitaire/js/core.js',
        './games/cat-word-solitaire/js/solver.js',
        './games/cat-word-solitaire/js/storage.js',
        './games/cat-word-solitaire/js/motion.js',
        './games/cat-word-solitaire/js/renderer.js',
        './games/cat-word-solitaire/js/app.js',
        './games/cat-word-solitaire/js/review.js',
        './games/cat-word-solitaire/js/data/levels-001-020.js',
        './games/cat-word-solitaire/js/data/levels-021-040.js',
        './games/cat-word-solitaire/js/data/levels-041-060.js',
        './games/cat-word-solitaire/js/data/levels-061-080.js',
        './games/cat-word-solitaire/js/data/levels-081-100.js',
        './games/cat-word-solitaire/js/data/levels-index.js',
        './assets/game-covers/cat-word-solitaire.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-milk-pipes',
      title: '貓咪鮮奶管線',
      eyebrow: '旋轉管線 · 單人',
      description: '轉動管線，把鮮奶送到每一只貓咪碗',
      href: './games/cat-milk-pipes/index.html',
      tutorialHref: './tutorials/cat-milk-pipes/index.html',
      storageKey: 'cat-milk-pipes:v1',
      cover: './assets/game-covers/cat-milk-pipes.svg',
      levelCount: 100,
      offline: true,
      accent: '#4d91a8',
      offlineAssets: Object.freeze([
        './games/cat-milk-pipes/index.html',
        './games/cat-milk-pipes/review.html',
        './tutorials/cat-milk-pipes/index.html',
        './games/cat-milk-pipes/tutorial.webm',
        './games/cat-milk-pipes/css/app.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-milk-pipes/js/config.js',
        './games/cat-milk-pipes/js/core.js',
        './games/cat-milk-pipes/js/solver.js',
        './games/cat-milk-pipes/js/storage.js',
        './games/cat-milk-pipes/js/renderer.js',
        './games/cat-milk-pipes/js/app.js',
        './games/cat-milk-pipes/js/review.js',
        './games/cat-milk-pipes/js/data/levels-001-020.js',
        './games/cat-milk-pipes/js/data/levels-021-040.js',
        './games/cat-milk-pipes/js/data/levels-041-060.js',
        './games/cat-milk-pipes/js/data/levels-061-080.js',
        './games/cat-milk-pipes/js/data/levels-081-100.js',
        './games/cat-milk-pipes/js/data/levels-index.js',
        './assets/game-covers/cat-milk-pipes.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-storage-master',
      title: '貓咪收納大師',
      eyebrow: '空間拼圖 · 單人',
      description: '旋轉與翻面貓咪用品，把每件物品完整收進木箱',
      href: './games/cat-storage-master/index.html',
      tutorialHref: './tutorials/cat-storage-master/index.html',
      storageKey: 'cat-storage-master:v1',
      cover: './assets/game-covers/cat-storage-master.svg',
      levelCount: 100,
      offline: true,
      accent: '#d59059',
      offlineAssets: Object.freeze([
        './games/cat-storage-master/index.html',
        './games/cat-storage-master/review.html',
        './tutorials/cat-storage-master/index.html',
        './games/cat-storage-master/tutorial.webm',
        './games/cat-storage-master/css/app.css',
        './games/cat-storage-master/css/review.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-storage-master/js/config.js',
        './games/cat-storage-master/js/core.js',
        './games/cat-storage-master/js/solver.js',
        './games/cat-storage-master/js/storage.js',
        './games/cat-storage-master/js/renderer.js',
        './games/cat-storage-master/js/app.js',
        './games/cat-storage-master/js/review.js',
        './games/cat-storage-master/js/data/levels-001-020.js',
        './games/cat-storage-master/js/data/levels-021-040.js',
        './games/cat-storage-master/js/data/levels-041-060.js',
        './games/cat-storage-master/js/data/levels-061-080.js',
        './games/cat-storage-master/js/data/levels-081-100.js',
        './games/cat-storage-master/js/data/levels-index.js',
        './assets/game-covers/cat-storage-master.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-triple-match',
      title: '貓咪三層配對',
      eyebrow: '三消配對 · 單人',
      description: '挑出沒有被遮住的卡牌，集滿三張相同圖案',
      href: './games/cat-triple-match/index.html',
      tutorialHref: './tutorials/cat-triple-match/index.html',
      storageKey: 'cat-triple-match:v1',
      cover: './assets/game-covers/cat-triple-match.svg',
      levelCount: tripleConfig.totalLevels,
      offline: true,
      accent: '#bd7441',
      offlineAssets: Object.freeze([
        './games/cat-triple-match/index.html',
        './games/cat-triple-match/review.html',
        './tutorials/cat-triple-match/index.html',
        './games/cat-triple-match/tutorial.webm',
        './games/cat-triple-match/css/app.css',
        './games/cat-triple-match/css/review.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-triple-match/js/config.js',
        './games/cat-triple-match/js/icons.js',
        './games/cat-triple-match/js/core.js',
        './games/cat-triple-match/js/solver.js',
        './games/cat-triple-match/js/storage.js',
        './games/cat-triple-match/js/renderer.js',
        './games/cat-triple-match/js/app.js',
        './games/cat-triple-match/js/review.js',
        './games/cat-triple-match/js/data/levels-001-020.js',
        './games/cat-triple-match/js/data/levels-021-040.js',
        './games/cat-triple-match/js/data/levels-041-060.js',
        './games/cat-triple-match/js/data/levels-061-080.js',
        './games/cat-triple-match/js/data/levels-081-100.js',
        './games/cat-triple-match/js/data/levels-101-120.js',
        './games/cat-triple-match/js/data/levels-index.js',
        './assets/game-covers/cat-triple-match.svg',
      ]),
    }),
    Object.freeze({
      id: 'cat-courier',
      title: '貓咪快遞員',
      eyebrow: '路線規劃 · 單人',
      description: '依照順序畫出不回頭的道路，把物品送到每個貓咪家',
      href: './games/cat-courier/index.html',
      tutorialHref: './tutorials/cat-courier/index.html',
      storageKey: 'cat-courier:v1',
      cover: './assets/game-covers/cat-courier.svg',
      levelCount: 100,
      offline: true,
      accent: '#d8893f',
      offlineAssets: Object.freeze([
        './games/cat-courier/index.html',
        './games/cat-courier/review.html',
        './tutorials/cat-courier/index.html',
        './games/cat-courier/tutorial.webm',
        './games/cat-courier/css/app.css',
        './games/cat-courier/css/review.css',
        './assets/tutorials/tutorial.css',
        './js/tutorial-page.js',
        './games/cat-courier/js/config.js',
        './games/cat-courier/js/icons.js',
        './games/cat-courier/js/core.js',
        './games/cat-courier/js/solver.js',
        './games/cat-courier/js/storage.js',
        './games/cat-courier/js/renderer.js',
        './games/cat-courier/js/app.js',
        './games/cat-courier/js/review.js',
        './games/cat-courier/js/data/levels-001-020.js',
        './games/cat-courier/js/data/levels-021-040.js',
        './games/cat-courier/js/data/levels-041-060.js',
        './games/cat-courier/js/data/levels-061-080.js',
        './games/cat-courier/js/data/levels-081-100.js',
        './games/cat-courier/js/data/levels-index.js',
        './assets/game-covers/cat-courier.svg',
      ]),
    }),
  ]);

  function normalizeLocalAssetPath(value) {
    if (
      typeof value !== 'string' ||
      !value.startsWith('./') ||
      /^(?:https?:)?\/\//i.test(value) ||
      /[\\?#:]/.test(value)
    ) {
      return null;
    }

    const segments = value.slice(2).split('/');
    if (
      segments.length === 0 ||
      segments.some(
        (segment) => segment === '' || segment === '.' || segment === '..',
      )
    ) {
      return null;
    }

    return segments.join('/');
  }

  function isLocalRelativePath(value) {
    return normalizeLocalAssetPath(value) !== null;
  }

  function validateGameCatalog(catalog) {
    const errors = [];
    const ids = new Set();
    const storageKeys = new Set();

    if (!Array.isArray(catalog)) {
      return ['catalog 必須是陣列'];
    }

    for (const [index, game] of catalog.entries()) {
      const label = game?.id || `第 ${index + 1} 筆`;
      if (!game || typeof game !== 'object') {
        errors.push(`${label} 必須是物件`);
        continue;
      }

      if (typeof game.id !== 'string' || !/^[a-z0-9-]+$/.test(game.id)) {
        errors.push(`${label} 的 id 格式無效`);
      } else if (ids.has(game.id)) {
        errors.push(`${label} 的 id 重複`);
      } else {
        ids.add(game.id);
      }

      for (const field of ['title', 'eyebrow', 'description']) {
        if (typeof game[field] !== 'string' || game[field].trim() === '') {
          errors.push(`${label} 缺少 ${field}`);
        }
      }

      if (
        typeof game.storageKey !== 'string' ||
        !/^[a-z0-9-]+:v[1-9]\d*$/.test(game.storageKey)
      ) {
        errors.push(`${label} 的 storageKey 格式無效`);
      } else if (storageKeys.has(game.storageKey)) {
        errors.push(`${label} 的 storageKey 重複`);
      } else {
        storageKeys.add(game.storageKey);
      }

      for (const field of ['href', 'tutorialHref', 'cover']) {
        if (!isLocalRelativePath(game[field])) {
          errors.push(`${label} 的 ${field} 必須是本機相對路徑`);
        }
      }

      if (!Number.isInteger(game.levelCount) || game.levelCount < 0) {
        errors.push(`${label} 的 levelCount 必須是非負整數`);
      }

      if (!Array.isArray(game.offlineAssets)) {
        errors.push(`${label} 缺少 offlineAssets`);
      } else {
        for (const asset of game.offlineAssets) {
          if (!isLocalRelativePath(asset)) {
            errors.push(`${label} 的 offlineAssets 必須是本機相對路徑`);
          }
        }
      }
    }

    return errors;
  }

  return {
    CAT_GAME_CATALOG,
    normalizeLocalAssetPath,
    validateGameCatalog,
  };
});
