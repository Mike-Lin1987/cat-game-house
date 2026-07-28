const test = require('node:test');
const assert = require('node:assert/strict');

const LEVELS = require('../../games/cat-word-solitaire/js/data/levels-index.js');
const {
  analyzeLevels,
  assertValid,
} = require('../../scripts/cat-word-solitaire/validate-levels.js');
const {
  GENERATOR_VERSION,
  DIFFICULTY_PROFILES,
  MAX_SOLVER_NODES,
  MOVE_BUFFERS,
} = require('../../scripts/cat-word-solitaire/generate-layouts.js');

const analysis = analyzeLevels(LEVELS);

test('固定提供 L001～L100 且五章各 20 關', () => {
  assert.equal(LEVELS.length, 100);
  assert.deepEqual(
    LEVELS.map((level) => level.id),
    Array.from(
      { length: 100 },
      (_, index) => `L${String(index + 1).padStart(3, '0')}`,
    ),
  );
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    assert.equal(
      LEVELS.filter((level) => level.chapter === chapter).length,
      20,
    );
  }
});

test('全部開局都是五欄 2／3／4／5／6 張接龍階梯', () => {
  assert.equal(analysis.summary.fiveColumnLayouts, 100);
  assert.equal(analysis.summary.invalidFourColumnLayouts, 0);
  assert.equal(analysis.summary.invalidFifthColumns, 0);
});

test('全部關卡都固定 54 張牌，開局 20 張且牌庫 34 張', () => {
  assert.equal(analysis.summary.exactCardCountLevels, 100);
  for (const level of LEVELS) {
    assert.equal(level.cards.length, 54);
    assert.equal(
      level.layout.initialColumns.reduce((sum, column) => sum + column.length, 0),
      20,
    );
    assert.equal(
      level.layout.drawBatches.reduce((sum, batch) => sum + batch.length, 0),
      34,
    );
  }
});

test('全部卡牌、分類引用、parMoves 與內容審核都有效', () => {
  assert.equal(analysis.summary.missingCards, 0);
  assert.equal(analysis.summary.duplicateCards, 0);
  assert.equal(analysis.summary.invalidCategories, 0);
  assert.equal(analysis.summary.placeholders, 0);
  assert.equal(analysis.summary.uncheckedContent, 0);
});

test('獨立求解器逐關完成且不超過五槽與步數上限', () => {
  assert.equal(analysis.summary.solvableWithFiveSlots, 100);
  assert.equal(analysis.summary.unsolved, 0);
  assert.equal(analysis.summary.overMoveLimit, 0);
});

test('v3 全關卡符合各章節分支、回溯、節點與步數門檻', () => {
  for (const [index, level] of LEVELS.entries()) {
    const result = analysis.levels[index];
    const profile = DIFFICULTY_PROFILES[level.chapter - 1];
    assert.equal(level.generatorVersion, GENERATOR_VERSION);
    assert.equal(level.moveLimit, level.parMoves + MOVE_BUFFERS[level.chapter - 1]);
    assert.equal(result.solverNodes >= profile.minNodes, true, level.id);
    assert.equal(
      result.solverBacktracks >= profile.minBacktracks,
      true,
      level.id,
    );
    assert.equal(
      result.solverBranchingStates >= profile.minBranchingStates,
      true,
      level.id,
    );
    assert.equal(result.solverNodes <= MAX_SOLVER_NODES, true, level.id);
  }
});

test('分類與提示重複限制、相鄰十關及牌局去重皆通過', () => {
  assert.equal(analysis.summary.distinctCategoryCount >= 180, true);
  assert.equal(analysis.summary.maximumCategoryUsage <= 5, true);
  assert.equal(analysis.summary.maximumHintUsage <= 3, true);
  assert.equal(analysis.summary.duplicateLayouts, 0);
  assert.deepEqual(analysis.summary.globalErrors, []);
});

test('圖片牌比例介於 10%～20% 且都有中文替代文字', () => {
  assert.equal(analysis.summary.imageRatio >= 0.1, true);
  assert.equal(analysis.summary.imageRatio <= 0.2, true);
  assert.equal(
    LEVELS.flatMap((level) => level.cards)
      .filter((card) => card.displayType === 'icon')
      .every((card) => card.label && card.ariaLabel === card.label),
    true,
  );
});

test('後一章平均難度上升，L001 明顯低於 L100', () => {
  for (let index = 1; index < analysis.summary.chapterAverages.length; index += 1) {
    assert.equal(
      analysis.summary.chapterAverages[index] >
        analysis.summary.chapterAverages[index - 1],
      true,
    );
  }
  assert.equal(LEVELS[0].difficultyScore < LEVELS.at(-1).difficultyScore, true);
});

test('完整驗證器沒有任何逐關或全域失敗', () => {
  assert.doesNotThrow(() => assertValid(analysis));
  assert.equal(analysis.summary.failedLevels, 0);
});
