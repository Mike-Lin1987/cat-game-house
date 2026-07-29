'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const Storage = require('../js/storage.js');

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
  };
}

test('空資料與損壞 JSON 會回到安全預設進度', () => {
  assert.equal(Storage.loadProgress(memoryStorage()).unlockedLevel, 1);
  assert.equal(Storage.loadProgress(memoryStorage({ 'cat-milk-pipes:v1': '{' })).unlockedLevel, 1);
});

test('完成紀錄保留高星、少步與短時間並解鎖下一關', () => {
  const store = memoryStorage();
  let progress = Storage.loadProgress(store);
  progress = Storage.updateRecord(progress, 'L001', { stars: 2, moves: 12, time: 80 });
  progress = Storage.updateRecord(progress, 'L001', { stars: 2, moves: 10, time: 90 });
  assert.equal(progress.unlockedLevel, 2);
  assert.deepEqual(progress.records.L001, {
    completed: true, stars: 2, bestMoves: 10, bestTime: 90,
  });
  progress = Storage.updateRecord(progress, 'L001', { stars: 1, moves: 4, time: 20 });
  assert.deepEqual(progress.records.L001, {
    completed: true, stars: 2, bestMoves: 10, bestTime: 90,
  });
});

test('LocalStorage 拋錯時儲存安全失敗而不崩潰', () => {
  const broken = {
    getItem() { throw new Error('blocked'); },
    setItem() { throw new Error('blocked'); },
  };
  assert.equal(Storage.loadProgress(broken).version, 1);
  assert.equal(Storage.saveProgress(Storage.createDefaultProgress(), broken), false);
});

test('累計遊玩秒數可保存與還原', () => {
  const store = memoryStorage();
  const progress = Storage.createDefaultProgress();
  progress.stats.totalPlaySeconds = 42;
  assert.equal(Storage.saveProgress(progress, store), true);
  assert.equal(Storage.loadProgress(store).stats.totalPlaySeconds, 42);
});
