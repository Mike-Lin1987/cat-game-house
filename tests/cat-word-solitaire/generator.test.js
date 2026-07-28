'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const Generator = require('../../scripts/cat-word-solitaire/generate-layouts.js');

test('v3 產生器公開五章難度門檻與 25000 節點上限', () => {
  assert.equal(Generator.GENERATOR_VERSION, '3.0.0');
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

test('步數容錯依章節固定為 parMoves 加 5／4／3／2／1', () => {
  assert.deepEqual(Generator.MOVE_BUFFERS, [5, 4, 3, 2, 1]);
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    assert.equal(
      Generator.moveLimitForChapter(61, chapter),
      61 + Generator.MOVE_BUFFERS[chapter - 1],
    );
  }
});

test('發布 seed 可還原成固定候選編號供重現性驗證', () => {
  const ordinal = 42;
  const attempt = 317;
  const seed = 910000 + ordinal * 7919 + attempt * 104729;
  assert.equal(Generator.attemptFromSeed(ordinal, seed), attempt);
  assert.equal(Generator.attemptFromSeed(ordinal, seed + 1), null);
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
