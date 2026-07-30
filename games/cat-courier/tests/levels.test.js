'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Levels = require('../js/data/levels-index.js');
const Generator = require('../scripts/generate-levels.js');

test('固定提供 L001～L100、五章各 20 關與指定尺寸', () => {
  assert.equal(Levels.length, 100);
  const ids = new Set();
  const chapters = new Map();
  Levels.forEach((level, index) => {
    assert.equal(level.id, `L${String(index + 1).padStart(3, '0')}`);
    ids.add(level.id);
    chapters.set(level.chapter, (chapters.get(level.chapter) || 0) + 1);
    assert.equal(level.rows, level.chapter + 5);
    assert.equal(level.columns, level.chapter + 5);
  });
  assert.equal(ids.size, 100);
  assert.deepEqual([...chapters.values()], [20, 20, 20, 20, 20]);
});

test('全部關卡資料、保存答案、油量與配送順序合法', () => {
  for (const level of Levels) {
    assert.deepEqual(Core.validateLevelDefinition(level), [], level.id);
    assert.equal(Core.validateStoredSolution(level).valid, true, level.id);
    assert.equal(level.solutionPath.length - 1, level.optimalSteps, level.id);
    assert.ok(level.fuelLimit >= level.optimalSteps, level.id);
    assert.ok(level.stops.length >= 2, level.id);
    assert.ok(level.metrics.branchCellCount >= 1, level.id);
  }
});

test('每關都有較長替代環路而非單一路徑樹，第五章至少兩個環路', () => {
  for (const level of Levels) {
    let passableCells = 0;
    let undirectedEdges = 0;
    for (let row = 0; row < level.rows; row += 1) {
      for (let column = 0; column < level.columns; column += 1) {
        if (!Core.isPassableTerrain(level.terrain[row][column])) continue;
        passableCells += 1;
        if (row + 1 < level.rows
          && Core.isPassableTerrain(level.terrain[row + 1][column])) undirectedEdges += 1;
        if (column + 1 < level.columns
          && Core.isPassableTerrain(level.terrain[row][column + 1])) undirectedEdges += 1;
      }
    }
    const cycleRank = undirectedEdges - passableCells + 1;
    assert.ok(cycleRank >= 1, `${level.id} 不得是單一路徑樹`);
    if (level.chapter === 5) assert.ok(cycleRank >= 2, `${level.id} 應有多個替代環路`);
  }
});

test('獨立 Solver 逐關證明唯一最短解且不讀取保存答案', () => {
  for (const level of Levels) {
    const polluted = { ...level, solutionPath: [[99, 99]] };
    const result = Solver.solveLevel(polluted, { maxSolutions: 2, timeBudgetMs: 5000 });
    assert.equal(result.solved, true, level.id);
    assert.equal(result.optimalSteps, level.optimalSteps, level.id);
    assert.equal(result.optimalSolutionCount, 1, level.id);
  }
});

test('100 關 canonical signature 無 D4 等價重複', () => {
  const signatures = Levels.map((level) => Generator.canonicalSignature(level));
  assert.equal(new Set(signatures).size, 100);
  Levels.forEach((level) => {
    assert.equal(level.metrics.canonicalSignature, Generator.canonicalSignature(level), level.id);
  });
});

test('章節平均難度遞增且後期使用更多站點與單行道', () => {
  const averages = [];
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    const group = Levels.filter((level) => level.chapter === chapter);
    averages.push(group.reduce((sum, level) => sum + level.difficultyScore, 0) / group.length);
    if (chapter >= 3) assert.ok(group.every((level) => level.oneWayEdges.length > 0));
  }
  for (let index = 1; index < averages.length; index += 1) {
    assert.ok(averages[index] > averages[index - 1]);
  }
  assert.ok(Levels[99].stops.length > Levels[0].stops.length);
  assert.ok(Levels[99].difficultyScore > Levels[0].difficultyScore);
});

test('固定 seed 重新建立相同 100 關', () => {
  const regenerated = Generator.generateLevels();
  assert.equal(
    JSON.stringify(regenerated),
    JSON.stringify(Levels),
  );
});

test('resume 使用已驗證前綴接續產生，force 可清除快取', (context) => {
  const cacheDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'cat-courier-cache-'));
  context.after(() => fs.rmSync(cacheDirectory, { recursive: true, force: true }));
  Generator.saveGenerationCache(Levels.slice(0, 12), cacheDirectory);
  const cached = Generator.loadGenerationCache(cacheDirectory);
  assert.equal(cached.length, 12);
  assert.equal(
    JSON.stringify(Generator.generateLevels({ initialLevels: cached })),
    JSON.stringify(Levels),
  );
  assert.deepEqual(
    Generator.parseOptions(['--chapter=3', '--level=L050', '--resume', '--force']),
    { chapter: 3, level: 'L050', resume: true, force: true },
  );
  Generator.clearGenerationCache(cacheDirectory);
  assert.equal(Generator.loadGenerationCache(cacheDirectory), null);
});
