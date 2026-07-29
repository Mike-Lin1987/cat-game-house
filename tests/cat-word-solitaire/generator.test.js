'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const Generator = require('../../scripts/cat-word-solitaire/generate-layouts.js');

test('v3.1 產生器公開五章難度門檻與 25000 節點上限', () => {
  assert.equal(Generator.GENERATOR_VERSION, '3.1.0');
  assert.equal(Generator.MAX_CANDIDATE_ATTEMPTS, 500);
  assert.equal(Generator.MAX_SOLVER_NODES, 25000);
  assert.deepEqual(
    Generator.DIFFICULTY_PROFILES.map((profile) => ({
      minNodes: profile.minNodes,
      minBacktracks: profile.minBacktracks,
      minBranchingStates: profile.minBranchingStates,
    })),
    [
      { minNodes: 90, minBacktracks: 1, minBranchingStates: 1 },
      { minNodes: 180, minBacktracks: 5, minBranchingStates: 2 },
      { minNodes: 350, minBacktracks: 15, minBranchingStates: 3 },
      { minNodes: 700, minBacktracks: 40, minBranchingStates: 4 },
      { minNodes: 1200, minBacktracks: 80, minBranchingStates: 5 },
    ],
  );
});

test('三星步數門檻依章節固定為 parMoves 加 5／4／3／2／1', () => {
  assert.deepEqual(Generator.THREE_STAR_BUFFERS, [5, 4, 3, 2, 1]);
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    assert.equal(
      Generator.threeStarMovesForChapter(61, chapter),
      61 + Generator.THREE_STAR_BUFFERS[chapter - 1],
    );
  }
});

test('發布用固定候選索引完整保留 100 關既有牌局', () => {
  assert.equal(Generator.PUBLISHED_ATTEMPTS.length, 100);
  assert.equal(Generator.PUBLISHED_ATTEMPTS[0], 2);
  assert.equal(Generator.PUBLISHED_ATTEMPTS.at(-1), 492);
  assert.equal(
    Generator.PUBLISHED_ATTEMPTS.every(
      (attempt) =>
        Number.isInteger(attempt) &&
        attempt >= 0 &&
        attempt < Generator.MAX_CANDIDATE_ATTEMPTS,
    ),
    true,
  );
});

test('正式檔寫入前必須先通過完整關卡驗證', () => {
  assert.equal(typeof Generator.validateReleaseCandidate, 'function');
  assert.throws(
    () => Generator.validateReleaseCandidate([]),
    /關卡總數應為 100/,
  );
});

test('完整驗證失敗時不覆寫任何正式關卡檔', () => {
  const dataDirectory = path.resolve(
    __dirname,
    '..',
    '..',
    'games',
    'cat-word-solitaire',
    'js',
    'data',
  );
  const before = new Map(
    fs
      .readdirSync(dataDirectory)
      .filter((filename) => filename.endsWith('.js'))
      .map((filename) => [
        filename,
        fs.readFileSync(path.join(dataDirectory, filename), 'utf8'),
      ]),
  );
  assert.throws(() => Generator.writeLevels([]), /關卡總數應為 100/);
  for (const [filename, content] of before) {
    assert.equal(
      fs.readFileSync(path.join(dataDirectory, filename), 'utf8'),
      content,
      filename,
    );
  }
});

test('staging CommonJS 冷讀不會誤用既有全域關卡群組', () => {
  const levels = require('../../games/cat-word-solitaire/js/data/levels-index.js');
  const files = Generator.buildReleaseFiles(levels);
  const stagingDirectory = fs.mkdtempSync(
    path.join(os.tmpdir(), 'cat-word-staging-'),
  );
  const globalNames = [
    'CAT_WORD_LEVELS_001_020',
    'CAT_WORD_LEVELS_021_040',
    'CAT_WORD_LEVELS_041_060',
    'CAT_WORD_LEVELS_061_080',
    'CAT_WORD_LEVELS_081_100',
  ];
  const previous = new Map(
    globalNames.map((name) => [name, globalThis[name]]),
  );
  try {
    for (const [filename, content] of files) {
      fs.writeFileSync(path.join(stagingDirectory, filename), content, 'utf8');
    }
    for (const name of globalNames) {
      globalThis[name] = Object.freeze([{ id: 'stale-global' }]);
    }
    const staged = require(path.join(stagingDirectory, 'levels-index.js'));
    assert.equal(staged.length, 100);
    assert.equal(staged[0].id, 'L001');
    assert.equal(staged.at(-1).id, 'L100');
  } finally {
    for (const [name, value] of previous) {
      if (value === undefined) {
        delete globalThis[name];
      } else {
        globalThis[name] = value;
      }
    }
    fs.rmSync(stagingDirectory, { recursive: true, force: true });
  }
});

test('候選必須同時通過節點、回溯、分支與效能門檻', () => {
  const profile = Generator.DIFFICULTY_PROFILES[2];
  const passing = {
    solved: true,
    nodesVisited: 350,
    backtracks: 15,
    branchingStates: 3,
  };
  assert.equal(Generator.meetsDifficultyProfile(passing, profile), true);
  assert.equal(
    Generator.meetsDifficultyProfile(
      { ...passing, branchingStates: 2 },
      profile,
    ),
    false,
  );
  assert.equal(
    Generator.meetsDifficultyProfile(
      { ...passing, nodesVisited: Generator.MAX_SOLVER_NODES + 1 },
      profile,
    ),
    false,
  );
  assert.equal(
    Generator.meetsDifficultyProfile({ ...passing, solved: false }, profile),
    false,
  );
});

test('難度分數由真實搜尋與槽位壓力統計決定', () => {
  const easierStats = {
    nodesVisited: 100,
    backtracks: 10,
    branchingStates: 2,
    dealDecisionStates: 1,
    forcedMoves: 30,
    maxActiveCategories: 3,
  };
  const harderStats = {
    nodesVisited: 500,
    backtracks: 80,
    branchingStates: 8,
    dealDecisionStates: 5,
    forcedMoves: 10,
    maxActiveCategories: 5,
  };
  const easier = Generator.calculateDifficultyScore(easierStats);
  const harder = Generator.calculateDifficultyScore(harderStats);
  assert.equal(Number.isInteger(easier), true);
  assert.equal(harder > easier, true);
  assert.equal(
    Generator.calculateDifficultyScore(
      easierStats,
      Generator.DIFFICULTY_PROFILES[4],
    ) >
      Generator.calculateDifficultyScore(
        easierStats,
        Generator.DIFFICULTY_PROFILES[0],
      ),
    true,
  );
});
