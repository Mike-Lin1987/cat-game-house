'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const solver = require('../js/solver.js');

function exactLevel() {
  return {
    id: 'T001',
    rows: 2,
    columns: 3,
    fillableCells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1]],
    blockedCells: [],
    fixedItems: [],
    pieces: [
      { id: 'line', cells: [[0, 0], [1, 0]], allowRotate: false, allowFlip: false },
      { id: 'square', cells: [[0, 0], [0, 1], [1, 0]], allowRotate: false, allowFlip: false },
    ],
    solution: {
      polluted: { row: 99, column: 99, rotation: 3, flipped: true },
    },
  };
}

test('Exact Cover Solver 不讀取保存答案並找出唯一解', () => {
  const result = solver.solveLevel(exactLevel(), { maxSolutions: 2 });
  assert.equal(result.solutionCount, 1);
  assert.deepEqual(Object.keys(result.solution).sort(), ['line', 'square']);
  assert.equal(result.nodesVisited > 0, true);
});

test('Solver 對無解回傳 0、對多解找到第二解即停止', () => {
  const impossible = exactLevel();
  impossible.fillableCells.pop();
  assert.equal(solver.solveLevel(impossible).solutionCount, 0);

  const multiple = {
    id: 'T002',
    rows: 1,
    columns: 2,
    fillableCells: [[0, 0], [0, 1]],
    blockedCells: [],
    fixedItems: [],
    pieces: [
      { id: 'a', cells: [[0, 0]], allowRotate: false, allowFlip: false },
      { id: 'b', cells: [[0, 0]], allowRotate: false, allowFlip: false },
    ],
  };
  assert.equal(solver.solveLevel(multiple, { maxSolutions: 2 }).solutionCount, 2);
});
