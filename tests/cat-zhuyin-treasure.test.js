'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const { levels } = require('../games/cat-zhuyin-treasure/js/levels.js');
const {
  ACCESSORIES,
  completeLevel,
  createInitialProgress,
  sanitizeProgress,
  validateLevels,
} = require('../games/cat-zhuyin-treasure/js/core.js');

test('注音題庫包含 100 個連續關卡與至少 50 個本地插圖詞彙', () => {
  assert.deepEqual(validateLevels(levels), []);
  assert.equal(levels.length, 100);
  assert.deepEqual(levels.map((level) => level.id), Array.from({ length: 100 }, (_, index) => index + 1));
  assert.equal(new Set(levels.map((level) => level.word)).size >= 50, true);
  assert.equal(new Set(levels.filter((level) => level.visual.type === 'image').map((level) => level.visual.value)).size >= 50, true);
});

test('每五條魚依序解鎖一件不重複裝飾', () => {
  let progress = createInitialProgress();
  for (let id = 1; id <= 100; id += 1) {
    progress = completeLevel(progress, id, 0).progress;
  }

  assert.equal(ACCESSORIES.length, 20);
  assert.deepEqual(progress.unlockedAccessories, ACCESSORIES.map((item) => item.id));
  assert.equal(new Set(progress.unlockedAccessories).size, 20);
});

test('第 100 關里程碑順序固定為寶箱、章節、全破且不可重複獎勵', () => {
  let progress = createInitialProgress();
  for (let id = 1; id < 100; id += 1) {
    progress = completeLevel(progress, id, 0).progress;
    progress.pendingMilestones = [];
  }

  const completed = completeLevel(progress, 100, 1);
  assert.deepEqual(completed.addedMilestones.map((item) => item.type), ['reward', 'chapter', 'complete']);
  assert.equal(completed.progress.totalFish, 100);
  assert.equal(completed.progress.levelStars['100'], 2);

  const repeated = completeLevel(completed.progress, 100, 0);
  assert.equal(repeated.progress.totalFish, 100);
  assert.deepEqual(repeated.addedMilestones, []);
});

test('損壞進度會修復成連續、有限且可安全顯示的資料', () => {
  const repaired = sanitizeProgress({
    version: 999,
    completedLevelIds: [1, 2, 4, 500, '3'],
    totalFish: 999,
    unlockedAccessories: ['hat', 'unknown'],
    soundEnabled: 'yes',
  });

  assert.equal(repaired.version, 1);
  assert.deepEqual(repaired.completedLevelIds, [1, 2]);
  assert.equal(repaired.totalFish, 2);
  assert.deepEqual(repaired.unlockedAccessories, []);
  assert.equal(repaired.soundEnabled, true);
});

test('損壞的待顯示里程碑會被丟棄而不進入畫面', () => {
  const repaired = sanitizeProgress({
    completedLevelIds: [1, 2, 3, 4, 5],
    levelStars: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3 },
    pendingMilestones: [
      { type: 'reward' },
      { type: 'chapter', chapter: '<img src=x onerror=alert(1)>', stars: 30 },
      { type: 'complete' },
    ],
  });

  assert.deepEqual(repaired.pendingMilestones, []);
});

test('每題干擾答案只改變一個主要音素', () => {
  const broken = levels.map((level) => ({ ...level }));
  broken[0].distractorZhuyin = 'ㄍㄡˇ';

  assert.deepEqual(validateLevels(levels), []);
  assert.match(validateLevels(broken).join('\n'), /主要音素/);
});
