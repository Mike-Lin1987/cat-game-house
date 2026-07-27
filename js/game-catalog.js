(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.CAT_GAME_CATALOG = api.CAT_GAME_CATALOG;
    root.CatGameCatalog = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const CAT_GAME_CATALOG = Object.freeze([
    Object.freeze({
      id: 'cat-grid',
      title: '貓咪方格',
      eyebrow: '邏輯益智 · 單人',
      description: '在每列、每欄與每個彩色區域放入一隻貓咪',
      href: './games/cat-grid/index.html',
      tutorialHref: './tutorials/cat-grid.html',
      cover: './assets/game-covers/cat-grid.svg',
      levelCount: 100,
      offline: true,
      accent: '#ff8e68',
      offlineAssets: Object.freeze([
        './games/cat-grid/index.html',
        './tutorials/cat-grid.html',
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
      tutorialHref: './tutorials/cat-color-connect.html',
      cover: './assets/game-covers/cat-color-connect.svg',
      levelCount: 100,
      offline: true,
      accent: '#118a83',
      offlineAssets: Object.freeze([
        './games/cat-color-connect/index.html',
        './tutorials/cat-color-connect.html',
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
