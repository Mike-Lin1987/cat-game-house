'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../js/core.js');

function level(overrides = {}) {
  return {
    id: 'L001',
    chapter: 1,
    title: '第一趟配送',
    rows: 3,
    columns: 4,
    terrain: [
      ['road', 'road', 'grass', 'road'],
      ['grass', 'road', 'road', 'road'],
      ['road', 'road', 'water', 'road'],
    ],
    start: [2, 0],
    stops: [
      { id: 's1', order: 0, item: 'milk', label: '鮮奶', position: [1, 2], houseStyle: 'blue' },
      { id: 's2', order: 1, item: 'parcel', label: '包裹', position: [0, 3], houseStyle: 'pink' },
    ],
    oneWayEdges: [{ from: [1, 2], to: [1, 3] }],
    solutionPath: [[2, 0], [2, 1], [1, 1], [1, 2], [1, 3], [0, 3]],
    optimalSteps: 5,
    optimalSolutionCount: 1,
    fuelLimit: 6,
    ...overrides,
  };
}

test('正交相鄰合法，斜角與跳格不合法', () => {
  assert.equal(Core.areOrthogonallyAdjacent([1, 1], [1, 2]), true);
  assert.equal(Core.areOrthogonallyAdjacent([1, 1], [2, 1]), true);
  assert.equal(Core.areOrthogonallyAdjacent([1, 1], [2, 2]), false);
  assert.equal(Core.areOrthogonallyAdjacent([1, 1], [1, 3]), false);
});

test('只有 road、bridge、plaza 可通行', () => {
  for (const type of ['road', 'bridge', 'plaza']) assert.equal(Core.isPassableTerrain(type), true);
  for (const type of ['grass', 'water', 'tree', 'crate', 'barrier', 'fence']) {
    assert.equal(Core.isPassableTerrain(type), false);
  }
});

test('單行道路正向可行、反向禁止、未標示道路雙向', () => {
  const sample = level();
  assert.equal(Core.isOneWayMoveAllowed(sample, [1, 2], [1, 3]), true);
  assert.equal(Core.isOneWayMoveAllowed(sample, [1, 3], [1, 2]), false);
  assert.equal(Core.isOneWayMoveAllowed(sample, [2, 0], [2, 1]), true);
  assert.equal(Core.isOneWayMoveAllowed(sample, [2, 1], [2, 0]), true);
});

test('路線必須從起點開始並依序進入配送站', () => {
  const sample = level();
  assert.equal(Core.validatePath(sample, [[1, 1]]).valid, false);
  assert.equal(Core.validatePath(sample, [[2, 0], [2, 1], [1, 1], [1, 2]]).valid, true);
  const futureStop = [[2, 0], [2, 1], [1, 1], [0, 1], [0, 0]];
  assert.equal(Core.validatePath(sample, futureStop).valid, true);
  assert.equal(
    Core.validatePath(sample, [[2, 0], [2, 1], [1, 1], [0, 1], [0, 0], [0, 1]]).valid,
    false,
  );
});

test('提前進入後續配送站會被拒絕', () => {
  const sample = level({
    terrain: [
      ['road', 'road', 'road', 'road'],
      ['road', 'road', 'road', 'road'],
      ['road', 'road', 'road', 'road'],
    ],
    stops: [
      { id: 's1', order: 0, item: 'milk', label: '鮮奶', position: [0, 0] },
      { id: 's2', order: 1, item: 'parcel', label: '包裹', position: [1, 2] },
    ],
    oneWayEdges: [],
  });
  const state = Core.createInitialState(sample);
  state.path = [[2, 0], [2, 1], [1, 1]];
  const result = Core.canExtendPath(state, sample, [1, 2]);
  assert.equal(result.ok, false);
  assert.equal(result.reason, 'future-stop');
});

test('延伸、回退與裁切都由目前 path 重算配送進度', () => {
  const sample = level();
  let state = Core.createInitialState(sample);
  for (const cell of sample.solutionPath.slice(1, 5)) state = Core.extendPath(state, sample, cell);
  assert.equal(state.stopProgress, 1);
  state = Core.removeLastPathCell(state, sample);
  state = Core.removeLastPathCell(state, sample);
  assert.equal(state.stopProgress, 0);
  state = Core.trimPathToCell(state, sample, [2, 0]);
  assert.deepEqual(state.path, [[2, 0]]);
});

test('油量與完整路線判定只依實際 path', () => {
  const sample = level();
  const complete = Core.createInitialState(sample);
  complete.path = sample.solutionPath.map((cell) => [...cell]);
  complete.stopProgress = Core.calculateStopProgress(sample, complete.path);
  assert.equal(Core.calculateFuelUsed(complete), 5);
  assert.equal(Core.calculateFuelRemaining(complete, sample), 1);
  assert.equal(Core.isRouteComplete(complete, sample), true);
  assert.equal(Core.calculateFinalStars(complete, sample), 3);
  complete.hintsUsed = 1;
  assert.equal(Core.calculateFinalStars(complete, sample), 2);
});

test('超過油量與進入障礙不得延伸', () => {
  const sample = level({ fuelLimit: 1 });
  let state = Core.createInitialState(sample);
  state = Core.extendPath(state, sample, [2, 1]);
  assert.equal(Core.canExtendPath(state, sample, [1, 1]).reason, 'fuel');
  assert.equal(Core.canExtendPath(Core.createInitialState(level()), level(), [1, 0]).reason, 'terrain');
});

test('session round-trip 保留合法路線並拒絕損壞資料', () => {
  const sample = level();
  const state = Core.createInitialState(sample);
  state.path = [[2, 0], [2, 1], [1, 1]];
  state.elapsed = 17;
  const restored = Core.deserializeSession(Core.serializeSession(state), sample);
  assert.deepEqual(restored.path, state.path);
  assert.equal(restored.elapsed, 17);
  assert.equal(Core.deserializeSession({ path: [[9, 9]] }, sample), null);
});

test('stored solution 驗證會檢查最佳步數、順序與單行道', () => {
  assert.equal(Core.validateStoredSolution(level()).valid, true);
  assert.equal(Core.validateStoredSolution(level({ optimalSteps: 4 })).valid, false);
  assert.equal(Core.validateStoredSolution(level({ oneWayEdges: [{ from: [1, 3], to: [1, 2] }] })).valid, false);
});
