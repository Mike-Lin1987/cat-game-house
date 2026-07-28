const test = require('node:test');
const assert = require('node:assert/strict');

const Storage = require('../../games/cat-word-solitaire/js/storage.js');

function createMemoryStorage(initial = null, throws = false) {
  let value = initial;
  return {
    getItem() {
      if (throws) throw new Error('blocked');
      return value;
    },
    setItem(key, next) {
      if (throws) throw new Error('blocked');
      value = next;
    },
    removeItem() {
      if (throws) throw new Error('blocked');
      value = null;
    },
    read() {
      return value;
    },
  };
}

function fiveColumnSession() {
  return {
    levelId: 'L018',
    layoutSignature: 'layout-hard-v3-l018',
    state: {
      levelId: 'L018',
      columns: [[], [], [], [], []],
      categorySlots: [null, null, null, null, null],
      collectedByCategory: {},
      completedCategoryIds: [],
      drawBatchIndex: 0,
      movesUsed: 3,
      elapsedSeconds: 18,
      hintsUsed: 0,
      invalidAttempts: 0,
      selectedCardId: null,
      completed: false,
      failed: false,
    },
    undoStack: [],
  };
}

test('空資料建立安全預設進度', () => {
  const storage = createMemoryStorage();
  const progress = Storage.loadProgress(storage);
  assert.equal(progress.version, 2);
  assert.equal(progress.unlockedLevel, 1);
  assert.deepEqual(progress.records, {});
  assert.equal(progress.currentSession, null);
  assert.deepEqual(progress.settings, {
    animations: true,
    sound: false,
    largeText: false,
  });
});

test('完成紀錄保存最高星、最佳步數與最佳時間並解鎖下一關', () => {
  const storage = createMemoryStorage();
  let progress = Storage.loadProgress(storage);
  progress = Storage.updateRecord(
    progress,
    { id: 'L001', ordinal: 1 },
    { stars: 2, movesUsed: 25, elapsedSeconds: 90 },
    storage,
  );
  progress = Storage.updateRecord(
    progress,
    { id: 'L001', ordinal: 1 },
    { stars: 3, movesUsed: 27, elapsedSeconds: 80 },
    storage,
  );
  assert.equal(progress.records.L001.stars, 3);
  assert.equal(progress.records.L001.bestMoves, 25);
  assert.equal(progress.records.L001.bestTime, 80);
  assert.equal(progress.unlockedLevel, 2);
});

test('五欄 session 可保存與載回', () => {
  const storage = createMemoryStorage();
  Storage.saveSession(fiveColumnSession(), storage);
  const session = Storage.loadSession(storage);
  assert.equal(session.state.columns.length, 5);
  assert.equal(session.state.categorySlots.length, 5);
  assert.equal(session.layoutSignature, 'layout-hard-v3-l018');
});

test('session 只有在關卡 ID 與 layout signature 都相同時才相容', () => {
  const session = fiveColumnSession();
  const level = {
    id: 'L018',
    layoutSignature: 'layout-hard-v3-l018',
  };

  assert.equal(Storage.isSessionCompatible(session, level), true);
  assert.equal(
    Storage.isSessionCompatible(
      { ...session, layoutSignature: 'layout-old-v2-l018' },
      level,
    ),
    false,
  );
  assert.equal(
    Storage.isSessionCompatible(
      { ...session, layoutSignature: null },
      level,
    ),
    false,
  );
});

test('舊版四欄 session 被清除但完成紀錄與設定保留', () => {
  const legacy = {
    version: 1,
    unlockedLevel: 18,
    records: {
      L001: { completed: true, stars: 3, bestMoves: 20, bestTime: 65 },
    },
    currentSession: {
      levelId: 'L018',
      state: {
        columns: [[], [], [], []],
        categorySlots: [null, null, null, null],
      },
    },
    settings: { animations: false, sound: true, largeText: true },
  };
  const storage = createMemoryStorage(JSON.stringify(legacy));
  const progress = Storage.loadProgress(storage);
  assert.equal(progress.currentSession, null);
  assert.equal(progress.records.L001.stars, 3);
  assert.equal(progress.unlockedLevel, 18);
  assert.equal(progress.settings.sound, true);
  assert.equal(progress.legacySessionReset, true);
});

test('損壞 JSON 與 localStorage 不可用時安全降級', () => {
  const corrupt = Storage.loadProgress(createMemoryStorage('{bad'));
  assert.equal(corrupt.unlockedLevel, 1);
  const blocked = createMemoryStorage(null, true);
  const progress = Storage.loadProgress(blocked);
  assert.equal(progress.version, 2);
  assert.doesNotThrow(() => Storage.saveProgress(progress, blocked));
});

test('重設進度保留動畫、音效與大字設定', () => {
  const storage = createMemoryStorage();
  let progress = Storage.loadProgress(storage);
  progress.settings = { animations: false, sound: true, largeText: true };
  progress.records.L001 = { stars: 3, bestMoves: 20, bestTime: 60 };
  progress.unlockedLevel = 12;
  progress.currentSession = fiveColumnSession();
  const reset = Storage.resetProgress(progress, storage);
  assert.equal(reset.unlockedLevel, 1);
  assert.deepEqual(reset.records, {});
  assert.equal(reset.currentSession, null);
  assert.deepEqual(reset.settings, progress.settings);
});

test('儲存設定會正規化布林值', () => {
  const storage = createMemoryStorage();
  const saved = Storage.saveSettings(
    { animations: false, sound: 1, largeText: true },
    storage,
  );
  assert.deepEqual(saved, {
    animations: false,
    sound: false,
    largeText: true,
  });
});
