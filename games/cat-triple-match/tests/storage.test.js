const test = require('node:test');
const assert = require('node:assert/strict');
const Storage = require('../js/storage.js');
const Core = require('../js/core.js');
const levels = require('../js/data/levels-index.js');

function memoryStorage(initial) {
  const values = new Map(Object.entries(initial || {}));
  return {
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
  };
}
test('損壞資料與不可用 LocalStorage 安全降級', () => {
  assert.equal(Storage.createStorage(memoryStorage({ 'cat-triple-match:v1': '{' })).loadProgress().unlockedLevel, 1);
  assert.equal(Storage.createStorage(null).saveProgress({}), false);
});
test('session round-trip 保存三個互斥集合與最多 50 筆歷史', () => {
  const level = levels[0];
  const state = Core.createInitialState(level);
  state.history = Array.from({ length: 70 }, () => Core.createUndoSnapshot(state));
  const restored = Core.deserializeSession(Core.serializeSession(state), level);
  assert.ok(restored);
  assert.equal(restored.history.length, 50);
  assert.equal(new Set([...restored.remainingTileIds, ...restored.trayTileIds, ...restored.clearedTileIds]).size, level.tiles.length);
});
test('最佳紀錄優先星數、輔助次數及時間並逐關解鎖', () => {
  const api = Storage.createStorage(memoryStorage());
  api.updateRecord('L001', { stars: 2, assists: 2, time: 60 });
  api.updateRecord('L001', { stars: 2, assists: 1, time: 80 });
  const progress = api.loadProgress();
  assert.equal(progress.unlockedLevel, 2);
  assert.equal(progress.records.L001.bestAssists, 1);
});
test('第 119 關完成後解鎖第 120 關並保留新版進度上限', () => {
  const api = Storage.createStorage(memoryStorage());
  const progress = api.updateRecord('L119', { stars: 2, assists: 1, time: 180 });
  assert.equal(progress.unlockedLevel, 120);

  const restored = Storage.createStorage(memoryStorage({
    'cat-triple-match:v1': JSON.stringify({
      version: 1,
      unlockedLevel: 120,
      records: {},
    }),
  })).loadProgress();
  assert.equal(restored.unlockedLevel, 120);
});
test('累計遊玩秒數可持久化', () => {
  const api = Storage.createStorage(memoryStorage());
  api.addPlaySeconds(12);
  api.addPlaySeconds(8);
  assert.equal(api.loadProgress().totalPlaySeconds, 20);
});
