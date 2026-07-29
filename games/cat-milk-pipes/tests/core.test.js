'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const Core = require('../js/core.js');

function lineLevel() {
  return {
    id: 'L001',
    size: 3,
    optimalMoves: 4,
    moveLimit: 8,
    tiles: [
      [null, null, null],
      [
        { role: 'source', shape: 'end', solutionRotation: 1, initialRotation: 1, locked: true },
        { role: 'pipe', shape: 'straight', solutionRotation: 1, initialRotation: 0, locked: false },
        { role: 'bowl', shape: 'end', solutionRotation: 3, initialRotation: 0, locked: false },
      ],
      [null, null, null],
    ],
  };
}

test('旋轉狀態會消除 straight 與 cross 的等價方向', () => {
  assert.equal(Core.normalizeRotation('straight', 3), 1);
  assert.equal(Core.normalizeRotation('cross', 3), 0);
  assert.deepEqual(Core.getTileConnectors({ shape: 'elbow' }, 2), ['D', 'L']);
});

test('固定格、source 與 cross 不可旋轉，一般管線順時針旋轉', () => {
  const level = lineLevel();
  const state = Core.createInitialState(level);
  assert.equal(Core.canRotateTile(level, 1, 0), false);
  assert.equal(Core.canRotateTile(level, 1, 1), true);
  const next = Core.rotateTile(state, level, 1, 1);
  assert.equal(next.rotations[1][1], 1);
  assert.equal(next.movesUsed, 1);
  assert.equal(state.rotations[1][1], 0);
});

test('只有雙向接口建立連線，未配對接口會成為洩漏', () => {
  const level = lineLevel();
  const state = Core.createInitialState(level);
  const graph = Core.buildConnectionGraph(state, level);
  assert.deepEqual(graph['1,0'], []);
  assert.equal(Core.findLeaks(state, level).length > 0, true);
});

test('完整樹狀網路會點亮全部格與貓咪碗並完成', () => {
  const level = lineLevel();
  const state = Core.createInitialState(level);
  state.rotations[1][1] = 1;
  state.rotations[1][2] = 3;
  assert.deepEqual([...Core.findPoweredTiles(state, level)].sort(), ['1,0', '1,1', '1,2']);
  assert.equal(Core.countConnectedBowls(state, level), 1);
  assert.equal(Core.detectCycle(state, level), false);
  assert.equal(Core.isPuzzleComplete(state, level), true);
});

test('有迴圈或未連接管線時不能完成', () => {
  const level = {
    id: 'LOOP',
    size: 2,
    optimalMoves: 0,
    moveLimit: 4,
    tiles: [
      [
        { role: 'source', shape: 'elbow', solutionRotation: 1, initialRotation: 1, locked: true },
        { role: 'pipe', shape: 'elbow', solutionRotation: 2, initialRotation: 2, locked: true },
      ],
      [
        { role: 'bowl', shape: 'elbow', solutionRotation: 0, initialRotation: 0, locked: true },
        { role: 'pipe', shape: 'elbow', solutionRotation: 3, initialRotation: 3, locked: true },
      ],
    ],
  };
  const state = Core.createInitialState(level);
  assert.equal(Core.detectCycle(state, level), true);
  assert.equal(Core.isPuzzleComplete(state, level), false);
});

test('optimalMoves、星級、提示與 session 安全還原符合規則', () => {
  const level = lineLevel();
  assert.equal(Core.calculateOptimalMoves(level), 4);
  const state = Core.createInitialState(level);
  const hint = Core.getHint(state, level);
  assert.deepEqual({ row: hint.row, column: hint.column }, { row: 1, column: 1 });
  state.completed = true;
  state.movesUsed = 4;
  assert.equal(Core.calculateStars(state, level), 3);
  const restored = Core.deserializeSession(Core.serializeSession(state), level);
  assert.equal(restored.movesUsed, 4);
  assert.equal(Core.deserializeSession({ levelId: 'BAD' }, level), null);
});
