'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Levels = require('../js/data/levels-index.js');
const Generator = require('../scripts/generate-levels.js');

test('固定提供 L001～L100 且五章各 20 關', () => {
  assert.equal(Levels.length, 100);
  assert.deepEqual(Levels.map((level) => level.id), Array.from(
    { length: 100 },
    (_, index) => `L${String(index + 1).padStart(3, '0')}`,
  ));
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    const group = Levels.filter((level) => level.chapter === chapter);
    assert.equal(group.length, 20);
    assert.equal(group.every((level) => level.size === [5, 6, 7, 8, 10][chapter - 1]), true);
  }
});

test('全部保存答案是無洩漏、無迴圈的連通樹', () => {
  for (const level of Levels) {
    assert.deepEqual(Core.validateLevelDefinition(level), [], level.id);
    const validation = Core.validateStoredSolution(level);
    assert.equal(validation.valid, true, level.id);
    assert.equal(validation.leaks.length, 0, level.id);
    assert.equal(validation.cycle, false, level.id);
    assert.equal(validation.matchedEdgeCount, validation.activeTileCount - 1, level.id);
  }
});

test('獨立求解器逐關證明唯一解且不讀取保存答案', () => {
  for (const level of Levels) {
    const sanitized = JSON.parse(JSON.stringify(level));
    for (const row of sanitized.tiles) {
      for (const tile of row) if (tile) tile.solutionRotation = 99;
    }
    assert.equal(Solver.solve(sanitized).solutionCount, 1, level.id);
  }
});

test('100 關 canonical signature 無 D4 等價重複', () => {
  const signatures = Levels.map(Generator.canonicalSignature);
  assert.equal(new Set(signatures).size, 100);
  for (const level of Levels) {
    assert.equal(level.metrics.canonicalSignature, Generator.canonicalSignature(level));
  }
});

test('章節平均難度遞增且 L001 明顯低於 L100', () => {
  const averages = [1, 2, 3, 4, 5].map((chapter) => {
    const values = Levels.filter((level) => level.chapter === chapter)
      .map((level) => level.difficultyScore);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });
  assert.equal(averages.every((value, index) => index === 0 || value > averages[index - 1]), true);
  assert.equal(Levels[0].difficultyScore < Levels[99].difficultyScore, true);
});

test('產生器可從快取恢復指定正式關卡，force 與 resume 結果相同', () => {
  const forced = Generator.generateLevels({ level: 'L001', force: true });
  const resumed = Generator.generateLevels({ level: 'L001', resume: true });
  assert.equal(forced.length, 1);
  assert.equal(forced[0].id, 'L001');
  assert.deepEqual(resumed, forced);
});
