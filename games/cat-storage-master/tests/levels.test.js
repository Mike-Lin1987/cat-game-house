'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const core = require('../js/core.js');
const solver = require('../js/solver.js');
const levels = require('../js/data/levels-index.js');
const generator = require('../scripts/generate-levels.js');

test('固定提供 L001～L100 且五章各 20 關', () => {
  assert.equal(levels.length, 100);
  assert.deepEqual(
    levels.map((level) => level.id),
    Array.from({ length: 100 }, (_, index) => `L${String(index + 1).padStart(3, '0')}`),
  );
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    assert.equal(levels.filter((level) => level.chapter === chapter).length, 20);
  }
});
test('全部關卡資料與保存答案合法且 parMoves／moveLimit 正確', () => {
  for (const level of levels) {
    assert.deepEqual(core.validateLevelDefinition(level), [], level.id);
    assert.deepEqual(core.validateStoredSolution(level), [], level.id);
    assert.equal(core.calculateParMoves(level), level.parMoves, level.id);
    assert.equal(level.moveLimit >= level.parMoves, true, level.id);
    assert.equal(level.metrics.fillableCellCount, level.fillableCells.length, level.id);
    assert.equal(level.metrics.pieceCount, level.pieces.length, level.id);
  }
});

test('獨立求解器逐關證明唯一解且不讀取保存答案', () => {
  for (const level of levels) {
    const polluted = { ...level, solution: { wrong: { row: 99, column: 99 } } };
    const result = solver.solveLevel(polluted, { maxSolutions: 2 });
    assert.equal(result.solutionCount, 1, level.id);
  }
});

test('100 關 canonical signature 無 D4 等價重複', () => {
  const signatures = levels.map((level) => generator.canonicalSignature(level));
  assert.equal(new Set(signatures).size, 100);
  levels.forEach((level, index) => assert.equal(level.canonicalSignature, signatures[index], level.id));
});

test('章節尺寸、翻面與平均難度符合遞進配置', () => {
  const allowedSizes = {
    1: new Set([4, 5]),
    2: new Set([5, 6]),
    3: new Set([6, 7]),
    4: new Set([7, 8]),
    5: new Set([8, 9, 10]),
  };
  const averages = [];
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    const chapterLevels = levels.filter((level) => level.chapter === chapter);
    assert.equal(chapterLevels.every((level) => allowedSizes[chapter].has(level.rows)), true);
    if (chapter >= 3) {
      assert.equal(chapterLevels.every((level) => level.pieces.some((piece) => piece.allowFlip)), true);
    }
    averages.push(chapterLevels.reduce((sum, level) => sum + level.difficultyScore, 0) / 20);
  }
  for (let index = 1; index < averages.length; index += 1) {
    assert.equal(averages[index] > averages[index - 1], true, `${averages.join(', ')}`);
  }
  assert.equal(levels[99].difficultyScore > levels[0].difficultyScore, true);
});

test('固定 seed 可重新建立相同候選與 signature', () => {
  const sample = levels[0];
  const chapterIndex = sample.seed % 100000 >= 1000
    ? Math.floor((sample.seed % 100000) / 1000)
    : 0;
  const attempt = sample.seed - sample.chapter * 100000 - chapterIndex * 1000;
  const candidate = generator.buildCandidate(
    generator.CHAPTERS[sample.chapter - 1],
    chapterIndex,
    attempt,
  );
  assert.notEqual(candidate, null);
  assert.equal(candidate.canonicalSignature, sample.canonicalSignature);
});
