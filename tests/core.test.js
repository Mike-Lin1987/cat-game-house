'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../js/core.js');

const sampleLevel = {
  id: 'sample-4-001',
  packId: 'sample-4',
  ordinal: 1,
  size: 4,
  regions: [
    [2, 0, 1, 1],
    [2, 3, 1, 1],
    [2, 3, 3, 1],
    [2, 2, 3, 3],
  ],
  solution: [1, 3, 0, 2],
  difficultyScore: 1,
  seed: 1,
};

function emptyBoard(size = sampleLevel.size) {
  return Array.from({ length: size }, () => Array(size).fill(Core.CELL_STATE.EMPTY));
}

function boardWithCats(cells) {
  const board = emptyBoard();
  for (const [row, column] of cells) {
    board[row][column] = Core.CELL_STATE.CAT;
  }
  return board;
}

function reasonSet(result, row, column) {
  const cell = result.cells.find((candidate) => candidate.row === row && candidate.column === column);
  return new Set(cell ? cell.reasons : []);
}

test('單擊空白格會標記 X，只有 0.5 秒內再次點擊 X 才放置貓咪', () => {
  const { CELL_STATE, cycleCellState } = Core;

  assert.equal(cycleCellState(CELL_STATE.EMPTY), CELL_STATE.X);
  assert.equal(cycleCellState(CELL_STATE.X, 500), CELL_STATE.CAT);
  assert.equal(cycleCellState(CELL_STATE.X, 501), CELL_STATE.EMPTY);
});

test('再次點擊貓咪會取消為空白', () => {
  const { CELL_STATE, cycleCellState } = Core;

  assert.equal(cycleCellState(CELL_STATE.CAT, 100), CELL_STATE.EMPTY);
  assert.equal(cycleCellState(CELL_STATE.CAT), CELL_STATE.EMPTY);
});

test('同一橫列的所有貓咪都被標示為衝突', () => {
  const result = Core.findConflicts(boardWithCats([[0, 0], [0, 2]]), sampleLevel);

  assert.equal(result.hasConflicts, true);
  assert.ok(reasonSet(result, 0, 0).has('row'));
  assert.ok(reasonSet(result, 0, 2).has('row'));
});

test('同一直欄的所有貓咪都被標示為衝突', () => {
  const result = Core.findConflicts(boardWithCats([[0, 0], [2, 0]]), sampleLevel);

  assert.ok(reasonSet(result, 0, 0).has('column'));
  assert.ok(reasonSet(result, 2, 0).has('column'));
});

test('同一區域的所有貓咪都被標示為衝突', () => {
  const result = Core.findConflicts(boardWithCats([[0, 2], [1, 3]]), sampleLevel);

  assert.ok(reasonSet(result, 0, 2).has('region'));
  assert.ok(reasonSet(result, 1, 3).has('region'));
});

test('水平與垂直接觸會標示 adjacent 衝突', () => {
  const horizontal = Core.findConflicts(boardWithCats([[2, 1], [2, 2]]), sampleLevel);
  const vertical = Core.findConflicts(boardWithCats([[1, 3], [2, 3]]), sampleLevel);

  assert.ok(reasonSet(horizontal, 2, 1).has('adjacent'));
  assert.ok(reasonSet(horizontal, 2, 2).has('adjacent'));
  assert.ok(reasonSet(vertical, 1, 3).has('adjacent'));
  assert.ok(reasonSet(vertical, 2, 3).has('adjacent'));
});

test('四種斜角接觸都會標示 adjacent 衝突', () => {
  const cases = [
    [[2, 2], [1, 1]],
    [[2, 1], [1, 2]],
    [[1, 2], [2, 1]],
    [[1, 1], [2, 2]],
  ];

  for (const cells of cases) {
    const result = Core.findConflicts(boardWithCats(cells), sampleLevel);
    for (const [row, column] of cells) {
      assert.ok(reasonSet(result, row, column).has('adjacent'));
    }
  }
});

test('X 筆記不會被當成貓咪', () => {
  const board = emptyBoard();
  board[0][0] = Core.CELL_STATE.X;
  board[0][1] = Core.CELL_STATE.X;

  const validation = Core.validateBoard(board, sampleLevel);

  assert.equal(validation.catCount, 0);
  assert.equal(validation.conflicts.hasConflicts, false);
});

test('正確盤面完成，即使其他格保留 X 筆記', () => {
  const board = emptyBoard();
  sampleLevel.solution.forEach((column, row) => {
    board[row][column] = Core.CELL_STATE.CAT;
  });
  board[0][0] = Core.CELL_STATE.X;

  assert.equal(Core.isLevelComplete(board, sampleLevel), true);
  assert.equal(Core.validateBoard(board, sampleLevel).complete, true);
});

test('貓咪數量不足時不會完成', () => {
  const board = boardWithCats([[0, 1], [1, 3], [2, 0]]);

  assert.equal(Core.isLevelComplete(board, sampleLevel), false);
});

test('提示不會選到已正確放置的格子', () => {
  const board = boardWithCats([[0, 1], [1, 0]]);

  assert.deepEqual(Core.getHintCell(board, sampleLevel), { row: 1, column: 3 });
});

test('區域正規化會消除純編號差異', () => {
  const left = [
    [7, 7, 4],
    [2, 4, 4],
  ];
  const right = [
    [0, 0, 1],
    [2, 1, 1],
  ];

  assert.deepEqual(Core.canonicalizeRegions(left), right);
});

test('區域連通檢查與關卡定義驗證會回報結果', () => {
  assert.equal(Core.isRegionConnected(sampleLevel.regions, 0), true);
  assert.deepEqual(Core.validateLevelDefinition(sampleLevel), { valid: true, errors: [] });
});

test('求解器會重新找出 sample 關卡唯一解', () => {
  const result = Core.countSolutions(sampleLevel, 2);

  assert.equal(result.count, 1);
  assert.deepEqual(result.firstSolution, sampleLevel.solution);
  assert.ok(result.nodesVisited > 0);
});

test('經過時間使用分鐘與秒數格式化', () => {
  assert.equal(Core.formatElapsedTime(0), '00:00');
  assert.equal(Core.formatElapsedTime(125), '02:05');
  assert.equal(Core.formatElapsedTime(3605), '60:05');
});

test('解鎖 ID 在新增關卡與難度重排後不會倒退', () => {
  const expandedLevels = [
    { id: 'pack-001', ordinal: 1 },
    { id: 'pack-016', ordinal: 2 },
    { id: 'pack-002', ordinal: 3 },
    { id: 'pack-003', ordinal: 4 },
  ];

  assert.deepEqual(
    Core.normalizeUnlockedLevelIds(expandedLevels, ['pack-002']),
    ['pack-001', 'pack-016', 'pack-002'],
  );
  assert.deepEqual(
    Core.normalizeUnlockedLevelIds(expandedLevels, 2),
    ['pack-001', 'pack-016'],
  );
});
