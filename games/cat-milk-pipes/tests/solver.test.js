'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const Solver = require('../js/solver.js');

function puzzle() {
  return {
    id: 'S001',
    size: 3,
    tiles: [
      [null, null, null],
      [
        { role: 'source', shape: 'end', solutionRotation: 0, initialRotation: 1, locked: true },
        { role: 'pipe', shape: 'straight', solutionRotation: 0, initialRotation: 0, locked: false },
        { role: 'bowl', shape: 'end', solutionRotation: 0, initialRotation: 0, locked: false },
      ],
      [null, null, null],
    ],
  };
}

test('求解器從 shape、role 與 locked 方向找出唯一解', () => {
  const level = puzzle();
  level.tiles[1][0].initialRotation = 1;
  const result = Solver.solve(level);
  assert.equal(result.solutionCount, 1);
  assert.deepEqual(result.solution[1], [1, 1, 3]);
  assert.equal(result.nodesVisited > 0, true);
});

test('污染 solutionRotation 不會改變求解結果', () => {
  const level = puzzle();
  level.tiles[1][0].initialRotation = 1;
  for (const row of level.tiles) {
    for (const tile of row) if (tile) tile.solutionRotation = 99;
  }
  assert.deepEqual(Solver.solve(level).solution[1], [1, 1, 3]);
});

test('無解回傳 0，多解最多回傳 2', () => {
  const impossible = puzzle();
  impossible.tiles[1][0].initialRotation = 0;
  assert.equal(Solver.solve(impossible).solutionCount, 0);

  const multiple = {
    id: 'MULTI',
    size: 2,
    tiles: [
      [
        { role: 'source', shape: 'end', initialRotation: 1, locked: true },
        { role: 'bowl', shape: 'end', initialRotation: 0, locked: false },
      ],
      [null, null],
    ],
  };
  assert.equal(Solver.solve(multiple).solutionCount, 1);
});
