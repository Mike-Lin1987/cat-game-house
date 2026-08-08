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
  assert.equal(CAT_GAME_CATALOG.length, 7);

  const [game, secondGame, thirdGame] = CAT_GAME_CATALOG;
  assert.deepEqual(
    {
      id: game.id,
      title: game.title,
      eyebrow: game.eyebrow,
      href: game.href,
      tutorialHref: game.tutorialHref,
      storageKey: game.storageKey,
      levelCount: game.levelCount,
      offline: game.offline,
    },
    {
      id: 'cat-grid',
      title: '貓咪方格',
      eyebrow: '邏輯益智 · 單人',
      href: './games/cat-grid/index.html',
      tutorialHref: './tutorials/cat-grid/index.html',
      storageKey: 'cat-grid-game:v1',
      levelCount: 365,
      offline: true,
    },
  );
  const fourthGame = CAT_GAME_CATALOG[3];
  assert.deepEqual(
    {
      id: fourthGame.id,
      title: fourthGame.title,
      href: fourthGame.href,
      tutorialHref: fourthGame.tutorialHref,
      storageKey: fourthGame.storageKey,
      levelCount: fourthGame.levelCount,
      offline: fourthGame.offline,
    },
    {
      id: 'cat-milk-pipes',
      title: '貓咪鮮奶管線',
      href: './games/cat-milk-pipes/index.html',
      tutorialHref: './tutorials/cat-milk-pipes/index.html',
      storageKey: 'cat-milk-pipes:v1',
      levelCount: 100,
      offline: true,
    },
  );
  const fifthGame = CAT_GAME_CATALOG[4];
  assert.deepEqual(
    {
      id: fifthGame.id,
      title: fifthGame.title,
      href: fifthGame.href,
      tutorialHref: fifthGame.tutorialHref,
      storageKey: fifthGame.storageKey,
      levelCount: fifthGame.levelCount,
      offline: fifthGame.offline,
    },
    {
      id: 'cat-storage-master',
      title: '貓咪收納大師',
      href: './games/cat-storage-master/index.html',
      tutorialHref: './tutorials/cat-storage-master/index.html',
      storageKey: 'cat-storage-master:v1',
      levelCount: 100,
      offline: true,
    },
  );
  const sixthGame = CAT_GAME_CATALOG[5];
  assert.deepEqual(
    {
      id: sixthGame.id,
      title: sixthGame.title,
      href: sixthGame.href,
      tutorialHref: sixthGame.tutorialHref,
      storageKey: sixthGame.storageKey,
      levelCount: sixthGame.levelCount,
      offline: sixthGame.offline,
    },
    {
      id: 'cat-triple-match',
      title: '貓咪三層配對',
      href: './games/cat-triple-match/index.html',
      tutorialHref: './tutorials/cat-triple-match/index.html',
      storageKey: 'cat-triple-match:v1',
      levelCount: 100,
      offline: true,
    },
  );
  const seventhGame = CAT_GAME_CATALOG[6];
  assert.deepEqual(
    {
      id: seventhGame.id,
      title: seventhGame.title,
      href: seventhGame.href,
      tutorialHref: seventhGame.tutorialHref,
      storageKey: seventhGame.storageKey,
      levelCount: seventhGame.levelCount,
      offline: seventhGame.offline,
    },
    {
      id: 'cat-courier',
      title: '貓咪快遞員',
      href: './games/cat-courier/index.html',
      tutorialHref: './tutorials/cat-courier/index.html',
      storageKey: 'cat-courier:v1',
      levelCount: 100,
      offline: true,
    },
  );
  assert.deepEqual(
    {
      id: thirdGame.id,
      title: thirdGame.title,
      href: thirdGame.href,
      tutorialHref: thirdGame.tutorialHref,
      storageKey: thirdGame.storageKey,
      levelCount: thirdGame.levelCount,
      offline: thirdGame.offline,
    },
    {
      id: 'cat-word-solitaire',
      title: '喵語分類接龍',
      href: './games/cat-word-solitaire/index.html',
      tutorialHref: './tutorials/cat-word-solitaire/index.html',
      storageKey: 'cat-word-solitaire:v2',
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
      storageKey: secondGame.storageKey,
      levelCount: secondGame.levelCount,
      offline: secondGame.offline,
    },
    {
      id: 'cat-color-connect',
      title: '貓咪彩色連線',
      href: './games/cat-color-connect/index.html',
      tutorialHref: './tutorials/cat-color-connect/index.html',
      storageKey: 'cat-color-connect:v1',
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
