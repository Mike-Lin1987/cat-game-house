'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const ProgressBackup = require('../js/progress-backup.js');

const CATALOG = [
  {
    id: 'cat-grid',
    title: '貓咪方格',
    storageKey: 'cat-grid-game:v1',
  },
  {
    id: 'cat-color-connect',
    title: '貓咪彩色連線',
    storageKey: 'cat-color-connect:v1',
  },
];

function createStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    },
  };
}

test('備份檔收錄 catalog 宣告的全部既有遊戲進度', () => {
  const storage = createStorage({
    'cat-grid-game:v1': JSON.stringify({
      records: { 'beginner-6-001': { stars: 3 } },
    }),
    'cat-color-connect:v1': JSON.stringify({
      records: { '6x6-001': { stars: 2 } },
    }),
    'unrelated:key': JSON.stringify({ private: true }),
  });

  const backup = ProgressBackup.createBackup(
    storage,
    CATALOG,
    '2026-07-28T00:00:00.000Z',
  );

  assert.deepEqual(backup, {
    format: 'cat-game-house-progress',
    version: 1,
    exportedAt: '2026-07-28T00:00:00.000Z',
    games: {
      'cat-grid': {
        storageKey: 'cat-grid-game:v1',
        data: {
          records: { 'beginner-6-001': { stars: 3 } },
        },
      },
      'cat-color-connect': {
        storageKey: 'cat-color-connect:v1',
        data: {
          records: { '6x6-001': { stars: 2 } },
        },
      },
    },
  });
});

test('還原只寫回 catalog 對應的遊戲進度', () => {
  const backupStorage = createStorage({
    'cat-grid-game:v1': JSON.stringify({
      records: { 'beginner-6-004': { stars: 2 } },
    }),
    'cat-color-connect:v1': JSON.stringify({
      records: { '6x6-007': { stars: 3 } },
    }),
  });
  const restoreStorage = createStorage({
    'cat-grid-game:v1': JSON.stringify({ records: {} }),
  });
  const backup = ProgressBackup.createBackup(
    backupStorage,
    CATALOG,
    '2026-07-28T00:00:00.000Z',
  );

  const restoredGameIds = ProgressBackup.restoreBackup(
    restoreStorage,
    CATALOG,
    JSON.stringify(backup),
  );

  assert.deepEqual(restoredGameIds, ['cat-grid', 'cat-color-connect']);
  assert.deepEqual(
    JSON.parse(restoreStorage.getItem('cat-grid-game:v1')),
    backup.games['cat-grid'].data,
  );
  assert.deepEqual(
    JSON.parse(restoreStorage.getItem('cat-color-connect:v1')),
    backup.games['cat-color-connect'].data,
  );
});

test('任一遊戲寫入失敗時會回復所有原有進度', () => {
  const originalGrid = JSON.stringify({ records: { old: { stars: 1 } } });
  const originalConnect = JSON.stringify({ records: { old: { stars: 2 } } });
  const storage = createStorage({
    'cat-grid-game:v1': originalGrid,
    'cat-color-connect:v1': originalConnect,
  });
  const failingStorage = {
    getItem: storage.getItem,
    removeItem: storage.removeItem,
    setItem(key, value) {
      if (key === 'cat-color-connect:v1') {
        throw new Error('quota exceeded');
      }
      storage.setItem(key, value);
    },
  };
  const backup = {
    format: 'cat-game-house-progress',
    version: 1,
    exportedAt: '2026-07-28T00:00:00.000Z',
    games: {
      'cat-grid': {
        storageKey: 'cat-grid-game:v1',
        data: { records: { new: { stars: 3 } } },
      },
      'cat-color-connect': {
        storageKey: 'cat-color-connect:v1',
        data: { records: { new: { stars: 3 } } },
      },
    },
  };

  assert.throws(
    () => ProgressBackup.restoreBackup(failingStorage, CATALOG, backup),
    /無法完整還原進度/,
  );
  assert.equal(storage.getItem('cat-grid-game:v1'), originalGrid);
  assert.equal(storage.getItem('cat-color-connect:v1'), originalConnect);
});

test('自動持久化會先檢查狀態並在需要時提出申請', async () => {
  let persistCalls = 0;
  const result = await ProgressBackup.requestPersistentStorage({
    async persisted() {
      return false;
    },
    async persist() {
      persistCalls += 1;
      return true;
    },
  });

  assert.deepEqual(result, {
    supported: true,
    persisted: true,
  });
  assert.equal(persistCalls, 1);
});

test('遊戲專用 validator 拒絕無效備份且不覆寫原進度', () => {
  const original = JSON.stringify({ version: 1, completedLevelIds: [1] });
  const storage = createStorage({ 'cat-zhuyin-treasure:v1': original });
  const catalog = [{
    id: 'cat-zhuyin-treasure',
    title: '貓咪注音尋寶隊',
    storageKey: 'cat-zhuyin-treasure:v1',
    validateBackup(data) {
      return data.version === 1 && Array.isArray(data.completedLevelIds);
    },
  }];
  const invalidBackup = {
    format: 'cat-game-house-progress',
    version: 1,
    games: {
      'cat-zhuyin-treasure': {
        storageKey: 'cat-zhuyin-treasure:v1',
        data: {},
      },
    },
  };

  assert.throws(
    () => ProgressBackup.restoreBackup(storage, catalog, invalidBackup),
    /備份資料格式無效/,
  );
  assert.equal(storage.getItem('cat-zhuyin-treasure:v1'), original);
});
