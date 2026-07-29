'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const storageApi = require('../js/storage.js');

function memoryStorage(initial) {
  let value = initial || null;
  return {
    getItem() { return value; },
    setItem(_key, next) { value = next; },
    removeItem() { value = null; },
    value() { return value; },
  };
}

test('空資料與損壞 JSON 會建立安全預設進度', () => {
  const empty = storageApi.createStorage(memoryStorage()).loadProgress();
  assert.equal(empty.unlockedLevel, 1);
  assert.deepEqual(empty.records, {});
  const broken = storageApi.createStorage(memoryStorage('{bad')).loadProgress();
  assert.equal(broken.version, 1);
});
test('完成紀錄保留高星、少步與短時間並解鎖下一關', () => {
  const memory = memoryStorage();
  const api = storageApi.createStorage(memory);
  api.updateRecord('L001', { stars: 2, moves: 12, time: 80 });
  api.updateRecord('L001', { stars: 2, moves: 10, time: 90 });
  api.updateRecord('L001', { stars: 3, moves: 14, time: 100 });
  const progress = api.loadProgress();
  assert.equal(progress.records.L001.stars, 3);
  assert.equal(progress.records.L001.bestMoves, 14);
  assert.equal(progress.unlockedLevel, 2);
});

test('session 與設定可以保存，無效紀錄會安全清除', () => {
  const memory = memoryStorage(JSON.stringify({
    version: 1,
    unlockedLevel: 999,
    records: { L001: { completed: true, stars: 9 }, L999: { completed: true } },
    settings: { animations: false, sound: true, largeBoard: true },
  }));
  const api = storageApi.createStorage(memory);
  assert.equal(api.loadProgress().unlockedLevel, 100);
  assert.equal(api.loadProgress().records.L999, undefined);
  api.saveSession({ levelId: 'L002', placements: {} });
  assert.equal(api.loadSession().levelId, 'L002');
  assert.deepEqual(api.saveSettings({ sound: false }), {
    animations: false,
    sound: false,
    largeBoard: true,
  });
});

test('LocalStorage 拋錯時讀寫安全降級', () => {
  const broken = {
    getItem() { throw new Error('blocked'); },
    setItem() { throw new Error('blocked'); },
  };
  const api = storageApi.createStorage(broken);
  assert.equal(api.loadProgress().unlockedLevel, 1);
  assert.equal(api.saveProgress({}), false);
});

test('不相容或缺少資料版本時不沿用舊進度', () => {
  for (const value of [
    { version: 999, unlockedLevel: 100, records: { L100: { completed: true } } },
    { unlockedLevel: 100 },
  ]) {
    const progress = storageApi.createStorage(memoryStorage(JSON.stringify(value))).loadProgress();
    assert.equal(progress.version, 1);
    assert.equal(progress.unlockedLevel, 1);
    assert.deepEqual(progress.records, {});
  }
});
