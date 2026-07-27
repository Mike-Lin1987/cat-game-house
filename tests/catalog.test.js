'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const {
  CAT_GAME_CATALOG,
  normalizeLocalAssetPath,
  validateGameCatalog,
} = require('../js/game-catalog.js');

test('遊戲 catalog 提供穩定、唯一且完整的本機遊戲資料', () => {
  assert.equal(Array.isArray(CAT_GAME_CATALOG), true);
  assert.equal(CAT_GAME_CATALOG.length, 2);

  const [game, secondGame] = CAT_GAME_CATALOG;
  assert.deepEqual(
    {
      id: game.id,
      title: game.title,
      eyebrow: game.eyebrow,
      href: game.href,
      tutorialHref: game.tutorialHref,
      levelCount: game.levelCount,
      offline: game.offline,
    },
    {
      id: 'cat-grid',
      title: '貓咪方格',
      eyebrow: '邏輯益智 · 單人',
      href: './games/cat-grid/index.html',
      tutorialHref: './tutorials/cat-grid.html',
      levelCount: 100,
      offline: true,
    },
  );
  assert.deepEqual(
    {
      id: secondGame.id,
      title: secondGame.title,
      href: secondGame.href,
      tutorialHref: secondGame.tutorialHref,
      levelCount: secondGame.levelCount,
      offline: secondGame.offline,
    },
    {
      id: 'cat-color-connect',
      title: '貓咪彩色連線',
      href: './games/cat-color-connect/index.html',
      tutorialHref: './tutorials/cat-color-connect.html',
      levelCount: 100,
      offline: true,
    },
  );

  assert.equal(validateGameCatalog(CAT_GAME_CATALOG).length, 0);
  assert.equal(new Set(CAT_GAME_CATALOG.map((item) => item.id)).size, CAT_GAME_CATALOG.length);
});

test('catalog 的頁面、封面與離線資源全部位於專案內', () => {
  for (const game of CAT_GAME_CATALOG) {
    const paths = [game.href, game.tutorialHref, game.cover, ...game.offlineAssets];
    for (const relativePath of paths) {
      assert.doesNotMatch(relativePath, /^(?:https?:)?\/\//i);
      const normalized = normalizeLocalAssetPath(relativePath);
      assert.notEqual(normalized, null, `${game.id} 路徑無效：${relativePath}`);
      assert.equal(
        fs.existsSync(path.join(ROOT, normalized)),
        true,
        `${game.id} 缺少 ${normalized}`,
      );
    }
  }
});

test('catalog 驗證器會拒絕重複 id 與不安全的遠端路徑', () => {
  const valid = {
    ...CAT_GAME_CATALOG[0],
    offlineAssets: [...CAT_GAME_CATALOG[0].offlineAssets],
  };
  const duplicate = { ...valid };
  const remote = {
    ...valid,
    id: 'remote-game',
    href: 'https://example.com/game',
  };
  const traversal = {
    ...valid,
    id: 'outside-game',
    href: './../outside/index.html',
  };

  const errors = validateGameCatalog([valid, duplicate, remote, traversal]);
  assert.equal(errors.some((message) => message.includes('重複')), true);
  assert.equal(errors.some((message) => message.includes('本機相對路徑')), true);
  assert.equal(normalizeLocalAssetPath('./../outside/index.html'), null);
});
