const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');

function levelFixture() {
  return {
    id: 'L001',
    layout: { unitColumns: 8, unitRows: 4 },
    symbols: [
      { id: 'fishbone', label: '魚骨' },
      { id: 'milk', label: '鮮奶' },
    ],
    tiles: [
      { id: 'a1', x: 0, y: 0, layer: 0, symbol: 'fishbone' },
      { id: 'a2', x: 2, y: 0, layer: 0, symbol: 'fishbone' },
      { id: 'a3', x: 4, y: 0, layer: 0, symbol: 'fishbone' },
      { id: 'b1', x: 0, y: 2, layer: 0, symbol: 'milk' },
      { id: 'b2', x: 2, y: 2, layer: 0, symbol: 'milk' },
      { id: 'b3', x: 4, y: 2, layer: 0, symbol: 'milk' },
    ],
    knownSolution: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3'],
  };
}

test('Solver 可完成關卡並回傳完整 metrics', () => {
  const level = levelFixture();
  const result = Solver.solveLevel(level, { maxNodes: 1000, deadlineMs: 1000 });
  assert.equal(result.solved, true);
  assert.equal(result.sequence.length, 6);
  assert.equal(new Set(result.sequence).size, 6);
  assert.ok(result.nodesVisited > 0);
  assert.ok(result.peakTrayOccupancy < 9);
  let state = Core.createInitialState(level);
  for (const tileId of result.sequence) state = Core.selectTile(state, level, tileId).state;
  assert.equal(state.status, 'completed');
});

test('Solver 不得讀取 knownSolution', () => {
  const level = new Proxy(levelFixture(), {
    get(target, property, receiver) {
      if (property === 'knownSolution') throw new Error('答案污染');
      return Reflect.get(target, property, receiver);
    },
  });
  assert.equal(Solver.solveLevel(level, { maxNodes: 1000 }).solved, true);
});

test('節點預算耗盡會明確回報且不偽裝為無解', () => {
  const result = Solver.solveLevel(levelFixture(), { maxNodes: 0 });
  assert.equal(result.solved, false);
  assert.equal(result.budgetExceeded, true);
  assert.equal(result.budgetReason, 'nodes');
});
