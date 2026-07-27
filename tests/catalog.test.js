'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const { CAT_GAME_CATALOG, validateGameCatalog } = require('../js/game-catalog.js');

test('遊戲 catalog 提供穩定、唯一且完整的本機遊戲資料', () => {
  assert.equal(Array.isArray(CAT_GAME_CATALOG), true);
  assert.equal(CAT_GAME_CATALOG.length, 1);

  const [game] = CAT_GAME_CATALOG;
  assert.deepEqual(
    {
      id: game.id,
      title: game.title,
      href: game.href,
      levelCount: game.levelCount,
      offline: game.offline,
    },
    {
      id: 'cat-grid',
      title: '貓咪方格',
      href: './games/cat-grid/',
      levelCount: 100,
      offline: true,
    },
  );

  assert.equal(validateGameCatalog(CAT_GAME_CATALOG).length, 0);
  assert.equal(new Set(CAT_GAME_CATALOG.map((item) => item.id)).size, CAT_GAME_CATALOG.length);
});

test('catalog 的頁面、封面與離線資源全部位於專案內', () => {
  for (const game of CAT_GAME_CATALOG) {
    const paths = [game.href, game.cover, ...game.offlineAssets];
    for (const relativePath of paths) {
      assert.doesNotMatch(relativePath, /^(?:https?:)?\/\//i);
      const normalized = relativePath
        .replace(/^\.\//, '')
        .replace(/\/$/, '/index.html');
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

  const errors = validateGameCatalog([valid, duplicate, remote]);
  assert.equal(errors.some((message) => message.includes('重複')), true);
  assert.equal(errors.some((message) => message.includes('本機相對路徑')), true);
});
