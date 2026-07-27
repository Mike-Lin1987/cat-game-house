'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const packs = require('../js/packs.js');

test('四個關卡包合計 100 關且分布符合規格', () => {
  assert.deepEqual(
    packs.map(({ id, size, levelCount }) => ({ id, size, levelCount })),
    [
      { id: 'beginner-6', size: 6, levelCount: 15 },
      { id: 'advanced-8', size: 8, levelCount: 20 },
      { id: 'challenge-10', size: 10, levelCount: 30 },
      { id: 'master-12', size: 12, levelCount: 35 },
    ],
  );
  assert.equal(
    packs.reduce((total, pack) => total + pack.levelCount, 0),
    100,
  );
});

test('關卡包設定可由 UI 與產生器安全共用', () => {
  const ids = new Set();

  for (const pack of packs) {
    assert.match(pack.id, /^[a-z0-9-]+$/);
    assert.ok(Number.isInteger(pack.size) && pack.size >= 4 && pack.size <= 12);
    assert.ok(Number.isInteger(pack.levelCount) && pack.levelCount > 0);
    assert.ok(Number.isInteger(pack.seedBase) && pack.seedBase > 0);
    assert.equal(typeof pack.title, 'string');
    assert.equal(typeof pack.theme, 'string');
    assert.equal(ids.has(pack.id), false);
    ids.add(pack.id);
  }
});
