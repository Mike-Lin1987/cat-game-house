'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../../games/cat-color-connect/js/core.js');

const LEVEL = Object.freeze({
  id: '3-001',
  size: 3,
  pairs: [
    { id: 'A', colorIndex: 0, symbol: '●', start: [0, 0], end: [0, 2] },
    { id: 'B', colorIndex: 1, symbol: '★', start: [1, 0], end: [2, 0] },
  ],
  solution: {
    A: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    B: [
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 2],
      [2, 1],
      [2, 0],
    ],
  },
});

const UNIQUE_LEVEL = Object.freeze({
  id: '2-001',
  size: 2,
  pairs: [
    { id: 'A', colorIndex: 0, symbol: '●', start: [0, 0], end: [0, 1] },
    { id: 'B', colorIndex: 1, symbol: '★', start: [1, 0], end: [1, 1] },
  ],
  solution: {
    A: [
      [0, 0],
      [0, 1],
    ],
    B: [
      [1, 0],
      [1, 1],
    ],
  },
});

const RECTANGULAR_LEVEL = Object.freeze({
  id: '2x3-001',
  rows: 2,
  columns: 3,
  pairs: [
    { id: 'A', colorIndex: 0, symbol: '●', start: [0, 0], end: [0, 2] },
    { id: 'B', colorIndex: 1, symbol: '★', start: [1, 0], end: [1, 2] },
  ],
  solution: {
    A: [[0, 0], [0, 1], [0, 2]],
    B: [[1, 0], [1, 1], [1, 2]],
  },
});

function playPath(state, pairId, path) {
  let next = Core.beginPath(state, LEVEL, pairId, path[0]).state;
  for (const cell of path.slice(1)) {
    const result = Core.extendPath(next, LEVEL, pairId, cell);
    assert.equal(result.changed, true, `${pairId} 應可延伸至 ${cell}`);
    next = result.state;
  }
  return next;
}

test('正交相鄰合法，斜角與跳格不合法', () => {
  assert.equal(Core.areOrthogonallyAdjacent([0, 0], [1, 0]), true);
  assert.equal(Core.areOrthogonallyAdjacent([1, 1], [1, 2]), true);
  assert.equal(Core.areOrthogonallyAdjacent([0, 0], [1, 1]), false);
  assert.equal(Core.areOrthogonallyAdjacent([0, 0], [0, 2]), false);
});

test('核心規則、唯一解與 D4 signature 支援長方形棋盤', () => {
  assert.deepEqual(Core.getBoardDimensions(RECTANGULAR_LEVEL), {
    rows: 2,
    columns: 3,
  });
  assert.deepEqual(Core.validateStoredSolution(RECTANGULAR_LEVEL), []);
  const solved = Core.countSolutions(RECTANGULAR_LEVEL, 2);
  assert.equal(solved.count, 1);
  assert.match(
    Core.canonicalizeEndpointSignature(RECTANGULAR_LEVEL),
    /2x3|3x2/,
  );
});

test('路線只能從自己的端點或既有路線開始', () => {
  const empty = Core.createEmptyState(LEVEL);
  assert.equal(Core.beginPath(empty, LEVEL, 'A', [0, 0]).changed, true);
  assert.equal(Core.beginPath(empty, LEVEL, 'A', [1, 1]).changed, false);

  const started = playPath(empty, 'A', [[0, 0], [0, 1]]);
  const trimmed = Core.beginPath(started, LEVEL, 'A', [0, 1]);
  assert.equal(trimmed.changed, false);
  assert.deepEqual(trimmed.state.paths.A, [[0, 0], [0, 1]]);
});

test('路線不能進入其他端點或其他路線', () => {
  let state = Core.createEmptyState(LEVEL);
  state = playPath(state, 'A', [[0, 0], [0, 1]]);

  const endpointCollision = Core.extendPath(state, LEVEL, 'A', [1, 1]);
  assert.equal(endpointCollision.changed, true);
  const intoOtherEndpoint = Core.extendPath(
    endpointCollision.state,
    LEVEL,
    'A',
    [1, 0],
  );
  assert.equal(intoOtherEndpoint.changed, false);
  assert.equal(intoOtherEndpoint.reason, 'other-endpoint');

  state = playPath(Core.createEmptyState(LEVEL), 'B', [
    [1, 0],
    [1, 1],
  ]);
  const otherLine = Core.extendPath(
    Core.beginPath(state, LEVEL, 'A', [0, 0]).state,
    LEVEL,
    'A',
    [1, 0],
  );
  assert.equal(otherLine.changed, false);
});

test('拖回上一格或自身較前格會裁切且不形成迴圈', () => {
  let state = playPath(Core.createEmptyState(LEVEL), 'B', [
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 2],
  ]);
  state = Core.extendPath(state, LEVEL, 'B', [1, 2]).state;
  assert.deepEqual(state.paths.B, [
    [1, 0],
    [1, 1],
    [1, 2],
  ]);

  state = playPath(state, 'B', [[1, 0], [1, 1], [1, 2], [2, 2]]);
  state = Core.extendPath(state, LEVEL, 'B', [1, 2]).state;
  const trimmed = Core.extendPath(state, LEVEL, 'B', [1, 1]);
  assert.deepEqual(trimmed.state.paths.B, [
    [1, 0],
    [1, 1],
  ]);
});

test('同色端點連接才算完成', () => {
  const connected = playPath(Core.createEmptyState(LEVEL), 'A', LEVEL.solution.A);
  assert.equal(Core.isPairConnected(connected, LEVEL, 'A'), true);
  assert.equal(Core.countConnectedPairs(connected, LEVEL), 1);

  const partial = playPath(Core.createEmptyState(LEVEL), 'A', [
    [0, 0],
    [0, 1],
  ]);
  assert.equal(Core.isPairConnected(partial, LEVEL, 'A'), false);
});

test('完成條件同時要求所有配對連接與百分之百覆蓋', () => {
  let state = Core.createEmptyState(LEVEL);
  state = playPath(state, 'A', LEVEL.solution.A);
  state = playPath(state, 'B', LEVEL.solution.B);
  assert.equal(Core.calculateCoverage(state, LEVEL), 100);
  assert.equal(Core.isPuzzleComplete(state, LEVEL), true);

  const incomplete = playPath(
    Core.createEmptyState(LEVEL),
    'A',
    LEVEL.solution.A,
  );
  assert.equal(Core.calculateCoverage(incomplete, LEVEL) < 100, true);
  assert.equal(Core.isPuzzleComplete(incomplete, LEVEL), false);
});

test('清除路線後 occupancy 只保留端點', () => {
  const state = playPath(
    Core.createEmptyState(LEVEL),
    'A',
    LEVEL.solution.A,
  );
  const cleared = Core.clearPath(state, 'A');
  const occupancy = Core.buildOccupancy(cleared, LEVEL);
  assert.equal(occupancy[0][0], 'A');
  assert.equal(occupancy[0][1], null);
  assert.equal(occupancy[0][2], 'A');
});

test('序列化與安全還原保持合法狀態', () => {
  const state = playPath(Core.createEmptyState(LEVEL), 'A', [
    [0, 0],
    [0, 1],
  ]);
  state.moves = 3;
  state.elapsed = 18;
  const restored = Core.deserializeState(Core.serializeState(state), LEVEL);
  assert.deepEqual(restored, state);
  assert.equal(Core.deserializeState('{broken', LEVEL), null);
});

test('提示跳過已正確完成路線並指出下一格', () => {
  let state = playPath(
    Core.createEmptyState(LEVEL),
    'A',
    LEVEL.solution.A,
  );
  state = playPath(state, 'B', [[1, 0], [1, 1]]);
  const hint = Core.getHint(state, LEVEL);
  assert.equal(hint.pairId, 'B');
  assert.deepEqual(hint.cell, [1, 2]);
});

test('關卡與固定解答驗證可發現錯誤', () => {
  assert.deepEqual(Core.validateLevelDefinition(LEVEL), []);
  assert.deepEqual(Core.validateStoredSolution(LEVEL), []);
  const invalid = { ...LEVEL, pairs: [...LEVEL.pairs, LEVEL.pairs[0]] };
  assert.equal(Core.validateLevelDefinition(invalid).length > 0, true);
});

test('獨立求解器從端點找出唯一解', () => {
  const solved = Core.countSolutions(UNIQUE_LEVEL, 2);
  assert.equal(solved.count, 1);
  assert.equal(solved.firstSolution !== null, true);
  assert.equal(solved.nodesVisited > 0, true);
});

test('端點與解答 signatures 忽略配對編號並正規化 D4 對稱', () => {
  const renamed = {
    ...LEVEL,
    pairs: LEVEL.pairs.map((pair, index) => ({
      ...pair,
      id: index === 0 ? 'Z' : 'Y',
    })),
    solution: {
      Z: LEVEL.solution.A,
      Y: LEVEL.solution.B,
    },
  };
  assert.equal(
    Core.canonicalizeEndpointSignature(LEVEL),
    Core.canonicalizeEndpointSignature(renamed),
  );
  assert.equal(
    Core.canonicalizeSolutionSignature(LEVEL),
    Core.canonicalizeSolutionSignature(renamed),
  );
});

test('經過時間格式固定為分秒', () => {
  assert.equal(Core.formatElapsedTime(0), '00:00');
  assert.equal(Core.formatElapsedTime(65), '01:05');
});
