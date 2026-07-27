'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Storage = require('../../games/cat-color-connect/js/storage.js');

const PACKS = [
  { id: '6x6', rows: 6, columns: 6, levelCount: 40 },
  { id: '6x8', rows: 6, columns: 8, levelCount: 8 },
];

test('各關卡包預設只解鎖第一關', () => {
  assert.deepEqual(Storage.defaultData(PACKS).unlockedByPack, {
    '6x6': 1,
    '6x8': 1,
  });
});

test('舊兩位數方形 ID 會遷移且數值依關卡包夾限', () => {
  const data = Storage.sanitize(
    {
      unlockedBySize: { 6: 999 },
      records: {
        '6-01': { stars: 9, bestTime: -1, bestMoves: 22, hintsUsed: 0 },
      },
    },
    PACKS,
  );
  assert.equal(data.unlockedByPack['6x6'], 40);
  assert.deepEqual(data.records['6x6-001'], {
    stars: 3,
    bestTime: 0,
    bestMoves: 22,
    hintsUsed: 0,
  });
});

test('保存紀錄採最高星、最短時間與最少操作並解鎖下一關', () => {
  const level = { id: '6x8-001', packId: '6x8', ordinal: 1 };
  let data = Storage.defaultData(PACKS);
  data = Storage.saveRecord(
    data,
    level,
    { stars: 2, elapsed: 90, moves: 30, hintsUsed: 1 },
    PACKS,
  );
  data = Storage.saveRecord(
    data,
    level,
    { stars: 3, elapsed: 100, moves: 20, hintsUsed: 0 },
    PACKS,
  );
  assert.deepEqual(data.records[level.id], {
    stars: 3,
    bestTime: 90,
    bestMoves: 20,
    hintsUsed: 0,
  });
  assert.equal(data.unlockedByPack['6x8'], 2);
});

test('超出關卡包數量的紀錄 ID 會被捨棄', () => {
  const data = Storage.sanitize(
    {
      records: {
        '6x8-008': { stars: 2 },
        '6x8-999': { stars: 3 },
      },
    },
    PACKS,
  );
  assert.equal(Boolean(data.records['6x8-008']), true);
  assert.equal(Boolean(data.records['6x8-999']), false);
});
