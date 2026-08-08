'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../js/core.js');
const packs = require('../js/packs.js');
const levels = require('../js/levels.js');

test('365 個固定關卡與各包擴充分布正確', () => {
  assert.equal(levels.length, 365);

  for (const pack of packs) {
    assert.equal(
      levels.filter((level) => level.packId === pack.id).length,
      pack.levelCount,
      `${pack.id} 關卡數`,
    );
  }
});

test('全部關卡皆連通、合法、唯一解且不重複', () => {
  const ids = new Set();
  const canonicalLayouts = new Set();

  for (const level of levels) {
    assert.equal(ids.has(level.id), false, `重複 ID：${level.id}`);
    ids.add(level.id);

    const definition = Core.validateLevelDefinition(level);
    assert.deepEqual(definition.errors, [], `${level.id}: ${definition.errors.join('、')}`);

    const solved = Core.countSolutions(level, 2);
    assert.equal(solved.count, 1, `${level.id} 必須唯一解`);
    assert.deepEqual(solved.firstSolution, level.solution, `${level.id} 保存答案不符`);

    const signature = JSON.stringify(Core.canonicalizeRegions(level.regions));
    assert.equal(canonicalLayouts.has(signature), false, `${level.id} 區域配置重複`);
    canonicalLayouts.add(signature);
  }
});

test('每個關卡包依 difficultyScore 由簡至難排列', () => {
  for (const pack of packs) {
    const packLevels = levels.filter((level) => level.packId === pack.id);

    packLevels.forEach((level, index) => {
      assert.equal(level.ordinal, index + 1);
      assert.match(level.id, new RegExp(`^${pack.id}-\\d{3}$`));
      if (index > 0) {
        assert.ok(
          level.difficultyScore >= packLevels[index - 1].difficultyScore,
          `${level.id} 難度排序錯誤`,
        );
      }
    });
  }
});

test('舊數字解鎖進度只遷移目前排序的前 N 關', () => {
  for (const pack of packs) {
    const packLevels = levels.filter((level) => level.packId === pack.id);

    assert.equal(
      Core.normalizeUnlockedLevelIds(packLevels, 1).length,
      1,
      `${pack.id} 的舊預設值只能解鎖 1 關`,
    );
    assert.equal(
      Core.normalizeUnlockedLevelIds(packLevels, 2).length,
      2,
      `${pack.id} 的舊 frontier 2 只能解鎖 2 關`,
    );
  }
});
