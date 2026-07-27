'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Config = require('../../games/cat-color-connect/js/config.js');
const Core = require('../../games/cat-color-connect/js/core.js');
const levels = require('../../games/cat-color-connect/js/levels.js');

test('100 關分布符合最終核准配置', () => {
  assert.equal(levels.length, 100);
  assert.deepEqual(
    Object.fromEntries(
      Config.packs.map((pack) => [
        pack.id,
        levels.filter((level) => level.packId === pack.id).length,
      ]),
    ),
    {
      '6x6': 40,
      '8x8': 35,
      '10x10': 3,
      '6x8': 10,
      '6x10': 6,
      '8x10': 6,
    },
  );
});

test('關卡 ID、端點與 D4 完整解答 signature 皆不重複', () => {
  const ids = new Set();
  const endpoints = new Set();
  const solutions = new Set();
  for (const level of levels) {
    assert.deepEqual(Core.validateStoredSolution(level), [], level.id);
    ids.add(level.id);
    endpoints.add(Core.canonicalizeEndpointSignature(level));
    solutions.add(Core.canonicalizeSolutionSignature(level));
  }
  assert.equal(ids.size, 100);
  assert.equal(endpoints.size, 100);
  assert.equal(solutions.size, 100);
});

test('每個關卡包按固定分數由簡至難排序', () => {
  for (const pack of Config.packs) {
    const scores = levels
      .filter((level) => level.packId === pack.id)
      .map((level) => level.difficultyScore);
    assert.deepEqual(scores, [...scores].sort((left, right) => left - right));
  }
});
