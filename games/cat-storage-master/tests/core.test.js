'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const core = require('../js/core.js');

function levelFixture() {
  return {
    id: 'L001',
    rows: 2,
    columns: 3,
    fillableCells: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]],
    blockedCells: [],
    fixedItems: [],
    moveLimit: 8,
    parMoves: 3,
    pieces: [
      {
        id: 'a',
        label: '魚乾',
        theme: 'dried-fish',
        cells: [[0, 0], [1, 0], [1, 1]],
        initialRotation: 0,
        initialFlipped: false,
        allowRotate: true,
        allowFlip: false,
      },
      {
        id: 'b',
        label: '鮮奶盒',
        theme: 'milk',
        cells: [[0, 0], [0, 1], [1, 1]],
        initialRotation: 0,
        initialFlipped: false,
        allowRotate: true,
        allowFlip: false,
      },
    ],
    solution: {
      a: { row: 0, column: 0, rotation: 0, flipped: false },
      b: { row: 0, column: 1, rotation: 0, flipped: false },
    },
  };
}

test('拼塊座標可正規化、旋轉、翻面並去除對稱變形', () => {
  assert.deepEqual(core.normalizeCells([[2, 1], [1, 1], [2, 2]]), [[0, 0], [1, 0], [1, 1]]);
  assert.deepEqual(core.rotateCells([[0, 0], [1, 0], [1, 1]]), [[0, 0], [0, 1], [1, 0]]);
  assert.deepEqual(core.flipCells([[0, 0], [1, 0], [1, 1]]), [[0, 1], [1, 0], [1, 1]]);
  assert.equal(core.getUniqueTransforms({
    cells: [[0, 0], [0, 1], [1, 0], [1, 1]],
    allowRotate: true,
    allowFlip: true,
  }).length, 1);
});

test('合法放置會建立占用，重疊、越界與非可填格會被拒絕', () => {
  const level = levelFixture();
  let state = core.createInitialState(level);
  assert.equal(core.canPlacePiece(state, level, 'a', { row: 0, column: 0, rotation: 0, flipped: false }).valid, true);
  state = core.placePiece(state, level, 'a', { row: 0, column: 0, rotation: 0, flipped: false });
  assert.equal(core.buildOccupancy(state, level)['0,0'], 'a');
  assert.equal(core.canPlacePiece(state, level, 'b', { row: 0, column: 0, rotation: 0, flipped: false }).valid, false);
  assert.equal(core.canPlacePiece(state, level, 'b', { row: 1, column: 1, rotation: 0, flipped: false }).valid, false);
});

test('全部可填格恰好覆蓋且所有拼塊已使用才完成', () => {
  const level = levelFixture();
  let state = core.createInitialState(level);
  state = core.placePiece(state, level, 'a', level.solution.a);
  assert.equal(core.isPuzzleComplete(state, level), false);
  state = core.placePiece(state, level, 'b', level.solution.b);
  assert.equal(core.isPuzzleComplete(state, level), true);
  assert.equal(state.status, 'completed');
});

test('有效旋轉、翻面、取回與復原遵守步數規則', () => {
  const level = levelFixture();
  level.pieces[0].allowFlip = true;
  let state = core.createInitialState(level);
  state = core.rotatePiece(state, level, 'a');
  assert.equal(state.movesUsed, 1);
  state = core.flipPiece(state, level, 'a');
  assert.equal(state.movesUsed, 2);
  state = core.placePiece(state, level, 'a', { row: 0, column: 0, rotation: 0, flipped: false });
  state = core.removePiece(state, level, 'a');
  assert.equal(state.movesUsed, 4);
  const beforeUndoTime = state.elapsed = 17;
  state = core.undo(state, level);
  assert.equal(state.placements.a.placed, true);
  assert.equal(state.movesUsed, 5);
  assert.equal(state.elapsed, beforeUndoTime);
});

test('parMoves、星級、提示與 session 安全還原符合公開規則', () => {
  const level = levelFixture();
  level.pieces[0].initialRotation = 3;
  assert.equal(core.calculateParMoves(level), 3);
  const state = core.createInitialState(level);
  const hint = core.getHint(state, level);
  assert.equal(Boolean(hint && hint.pieceId), true);
  assert.equal(core.calculateStars({ ...state, status: 'completed', movesUsed: 4, hintsUsed: 0 }, level), 3);
  const restored = core.deserializeSession(core.serializeSession(state), level);
  assert.equal(restored.movesUsed, 0);
  assert.equal(core.deserializeSession({ placements: { bad: {} } }, level), null);
  assert.equal(core.formatElapsedTime(156), '02:36');
});
