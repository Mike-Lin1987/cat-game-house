'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Storage = require('../js/storage.js');

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
  };
}

const level = {
  id: 'L001',
  rows: 2,
  columns: 3,
  terrain: [['grass', 'road', 'road'], ['road', 'road', 'grass']],
  start: [1, 0],
  stops: [
    { order: 0, position: [0, 1] },
    { order: 1, position: [0, 2] },
  ],
  oneWayEdges: [],
  fuelLimit: 5,
};

test('沒有資料與損壞 JSON 會建立安全預設進度', () => {
  assert.deepEqual(Storage.loadProgress(memoryStorage()).records, {});
  assert.deepEqual(
    Storage.loadProgress(memoryStorage({ 'cat-courier:v1': '{broken' })).records,
    {},
  );
});

test('完成紀錄保留高星、少油量與短時間並解鎖下一關', () => {
  const store = memoryStorage();
  Storage.updateRecord(store, 'L001', { stars: 2, fuelUsed: 5, elapsed: 40 });
  Storage.updateRecord(store, 'L001', { stars: 3, fuelUsed: 6, elapsed: 60 });
  Storage.updateRecord(store, 'L001', { stars: 3, fuelUsed: 4, elapsed: 55 });
  Storage.updateRecord(store, 'L001', { stars: 3, fuelUsed: 4, elapsed: 30 });
  Storage.updateRecord(store, 'L001', { stars: 2, fuelUsed: 1, elapsed: 1 });
  const progress = Storage.loadProgress(store);
  assert.equal(progress.unlockedLevel, 2);
  assert.deepEqual(progress.records.L001, {
    completed: true,
    stars: 3,
    bestFuelUsed: 4,
    bestTime: 30,
  });
});

test('session 只恢復存在且合法的關卡路線', () => {
  const store = memoryStorage();
  const levels = [level];
  const state = {
    levelId: 'L001',
    path: [[1, 0], [1, 1], [0, 1]],
    elapsed: 12,
    hintsUsed: 1,
    hintRemaining: 2,
    history: [],
  };
  assert.equal(Storage.saveSession(store, state, level), true);
  assert.deepEqual(Storage.loadSession(store, levels).path, state.path);
  const progress = Storage.loadProgress(store);
  progress.currentSession.path = [[9, 9]];
  Storage.saveProgress(store, progress);
  assert.equal(Storage.loadSession(store, levels), null);
});

test('設定與累計遊玩秒數可保存，重設進度保留設定', () => {
  const store = memoryStorage();
  Storage.saveSettings(store, { animations: false, largeMap: true, sound: true });
  Storage.addPlayTime(store, 17);
  Storage.resetProgress(store);
  const progress = Storage.loadProgress(store);
  assert.deepEqual(progress.settings, { animations: false, sound: false, largeMap: true });
  assert.equal(progress.totalPlaySeconds, 0);
});

test('LocalStorage 拋錯時所有讀寫安全降級', () => {
  const broken = {
    getItem() { throw new Error('blocked'); },
    setItem() { throw new Error('blocked'); },
    removeItem() { throw new Error('blocked'); },
  };
  assert.deepEqual(Storage.loadProgress(broken).records, {});
  assert.equal(Storage.saveProgress(broken, Storage.createDefaultProgress()), false);
  assert.equal(Storage.clearSession(broken), false);
});
