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
      description: '在每列、每欄與每個彩色區域放入一隻貓咪',
      href: './games/cat-grid/',
      cover: './assets/game-covers/cat-grid.svg',
      levelCount: 100,
      offline: true,
      accent: '#ff8e68',
      offlineAssets: Object.freeze([
        './games/cat-grid/',
        './games/cat-grid/index.html',
        './styles.css',
        './js/packs.js',
        './js/core.js',
        './js/levels.js',
        './js/app.js',
        './assets/game-covers/cat-grid.svg',
      ]),
    }),
  ]);

  function isLocalRelativePath(value) {
    return (
      typeof value === 'string' &&
      value.startsWith('./') &&
      !/^(?:https?:)?\/\//i.test(value) &&
      !value.includes('\\')
    );
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

      for (const field of ['title', 'description']) {
        if (typeof game[field] !== 'string' || game[field].trim() === '') {
          errors.push(`${label} 缺少 ${field}`);
        }
      }

      for (const field of ['href', 'cover']) {
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
    validateGameCatalog,
  };
});
