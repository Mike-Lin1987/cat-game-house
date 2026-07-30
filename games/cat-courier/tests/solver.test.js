'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Solver = require('../js/solver.js');

function uniqueLevel() {
  return {
    id: 'L001',
    rows: 3,
    columns: 4,
    terrain: [
      ['grass', 'grass', 'grass', 'road'],
      ['grass', 'road', 'road', 'road'],
      ['road', 'road', 'grass', 'grass'],
    ],
    start: [2, 0],
    stops: [
      { order: 0, position: [1, 2] },
      { order: 1, position: [0, 3] },
    ],
    oneWayEdges: [],
    fuelLimit: 6,
    solutionPath: [[99, 99]],
  };
}

test('Solver 不讀取 solutionPath 並找出唯一最短路線', () => {
  const result = Solver.solveLevel(uniqueLevel(), { maxSolutions: 2 });
  assert.equal(result.solved, true);
  assert.equal(result.optimalSteps, 5);
  assert.equal(result.optimalSolutionCount, 1);
  assert.deepEqual(result.shortestPath, [[2, 0], [2, 1], [1, 1], [1, 2], [1, 3], [0, 3]]);
});

test('兩條同長最短路線會計數到 2 後停止', () => {
  const level = {
    rows: 3,
    columns: 3,
    terrain: Array.from({ length: 3 }, () => Array(3).fill('road')),
    start: [2, 1],
    stops: [{ order: 0, position: [0, 1] }],
    oneWayEdges: [],
    fuelLimit: 6,
  };
  level.terrain[1][1] = 'grass';
  const result = Solver.solveLevel(level, { maxSolutions: 2 });
  assert.equal(result.solved, true);
  assert.equal(result.optimalSolutionCount, 2);
});

test('Solver 遵守單行道、油量與配送順序', () => {
  const level = uniqueLevel();
  level.oneWayEdges = [{ from: [1, 3], to: [1, 2] }];
  assert.equal(Solver.solveLevel(level).solved, false);
  level.oneWayEdges = [];
  level.fuelLimit = 4;
  assert.equal(Solver.solveLevel(level).solved, false);
});

test('部分路線求解保留已使用格並回傳完整後續', () => {
  const level = uniqueLevel();
  const currentPath = [[2, 0], [2, 1], [1, 1]];
  const result = Solver.solveFromPartialPath(level, currentPath);
  assert.equal(result.solved, true);
  assert.deepEqual(result.shortestPath.slice(0, 3), currentPath);
  assert.deepEqual(result.shortestPath.at(-1), [0, 3]);
});

test('非法或已成死路的部分路線回傳 solved=false', () => {
  const level = uniqueLevel();
  assert.equal(Solver.solveFromPartialPath(level, [[9, 9]]).solved, false);
  const dead = uniqueLevel();
  dead.terrain[0][0] = 'road';
  dead.terrain[1][0] = 'road';
  assert.equal(
    Solver.solveFromPartialPath(dead, [[2, 0], [1, 0], [0, 0]]).solved,
    false,
  );
});
