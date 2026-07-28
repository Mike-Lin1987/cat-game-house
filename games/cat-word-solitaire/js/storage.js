(function initCatWordStorage(root, factory) {
  'use strict';

  const config =
    root?.CAT_WORD_CONFIG ||
    (typeof module === 'object' && module.exports
      ? require('./config.js').CAT_WORD_CONFIG
      : null);
  const api = factory(root, config);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatWordStorage = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createStorage(
  root,
  config,
) {
  'use strict';

  const STORAGE_KEY = config?.storageKey || 'cat-word-solitaire:v2';
  const TOTAL_LEVELS = config?.totalLevels || 100;
  const MAX_UNDO = config?.maxUndoStates || 50;
  let memoryValue = null;

  function defaultProgress() {
    return {
      version: 2,
      unlockedLevel: 1,
      records: {},
      currentSession: null,
      settings: {
        animations: true,
        sound: false,
        largeText: false,
      },
      legacySessionReset: false,
    };
  }

  function clampInteger(value, minimum, maximum, fallback = minimum) {
    const number = Number(value);
    return Number.isFinite(number)
      ? Math.min(maximum, Math.max(minimum, Math.floor(number)))
      : fallback;
  }

  function normalizeLevelId(levelId) {
    if (typeof levelId !== 'string') {
      return null;
    }
    const match = levelId.match(/^L?(\d{1,3})$/i);
    if (!match) {
      return null;
    }
    const ordinal = clampInteger(match[1], 1, TOTAL_LEVELS, 0);
    return ordinal > 0 ? `L${String(ordinal).padStart(3, '0')}` : null;
  }

  function sanitizeSettings(settings) {
    return {
      animations: settings?.animations !== false,
      sound: settings?.sound === true,
      largeText: settings?.largeText === true,
    };
  }

  function isFiveColumnSession(session) {
    return Boolean(
      session &&
        typeof session === 'object' &&
        session.state &&
        typeof session.state === 'object' &&
        Array.isArray(session.state.columns) &&
        session.state.columns.length === 5 &&
        session.state.columns.every(Array.isArray) &&
        Array.isArray(session.state.categorySlots) &&
        session.state.categorySlots.length === 5,
    );
  }

  function sanitizeRecord(record) {
    return {
      completed: record?.completed !== false,
      stars: clampInteger(record?.stars, 1, 3, 1),
      bestMoves: clampInteger(record?.bestMoves, 0, 100000, 0),
      bestTime: clampInteger(record?.bestTime, 0, 864000, 0),
    };
  }

  function migrateLegacyData(raw) {
    const clean = defaultProgress();
    if (!raw || typeof raw !== 'object') {
      return clean;
    }
    clean.unlockedLevel = clampInteger(
      raw.unlockedLevel,
      1,
      TOTAL_LEVELS,
      1,
    );
    for (const [rawId, record] of Object.entries(raw.records || {})) {
      const id = normalizeLevelId(rawId);
      if (id && record && typeof record === 'object') {
        clean.records[id] = sanitizeRecord(record);
      }
    }
    clean.settings = sanitizeSettings(raw.settings);
    if (raw.currentSession) {
      if (isFiveColumnSession(raw.currentSession)) {
        const levelId = normalizeLevelId(
          raw.currentSession.levelId || raw.currentSession.state?.levelId,
        );
        if (levelId) {
          clean.currentSession = {
            levelId,
            state: raw.currentSession.state,
            undoStack: Array.isArray(raw.currentSession.undoStack)
              ? raw.currentSession.undoStack
                  .filter((entry) =>
                    isFiveColumnSession({ state: entry }),
                  )
                  .slice(-MAX_UNDO)
              : [],
          };
        }
      } else {
        clean.legacySessionReset = true;
      }
    }
    return clean;
  }

  function readRaw(storage) {
    try {
      const target = storage || root?.localStorage;
      return target?.getItem(STORAGE_KEY) ?? memoryValue;
    } catch {
      return memoryValue;
    }
  }

  function writeRaw(value, storage) {
    memoryValue = value;
    try {
      const target = storage || root?.localStorage;
      target?.setItem(STORAGE_KEY, value);
      return true;
    } catch {
      return false;
    }
  }

  function loadProgress(storage) {
    try {
      return migrateLegacyData(JSON.parse(readRaw(storage) || 'null'));
    } catch {
      return defaultProgress();
    }
  }

  function saveProgress(progress, storage) {
    const clean = migrateLegacyData(progress);
    writeRaw(JSON.stringify(clean), storage);
    return clean;
  }

  function loadSession(storage) {
    return loadProgress(storage).currentSession;
  }

  function saveSession(session, storage) {
    const progress = loadProgress(storage);
    if (isFiveColumnSession(session)) {
      progress.currentSession = {
        levelId:
          normalizeLevelId(session.levelId || session.state.levelId) || 'L001',
        state: session.state,
        undoStack: Array.isArray(session.undoStack)
          ? session.undoStack.slice(-MAX_UNDO)
          : [],
      };
    }
    return saveProgress(progress, storage).currentSession;
  }

  function clearSession(storage) {
    const progress = loadProgress(storage);
    progress.currentSession = null;
    progress.legacySessionReset = false;
    return saveProgress(progress, storage);
  }

  function updateRecord(progress, level, result, storage) {
    const next = migrateLegacyData(progress);
    const levelId = normalizeLevelId(level.id);
    if (!levelId) {
      return saveProgress(next, storage);
    }
    const previous = next.records[levelId];
    const stars = clampInteger(result.stars, 1, 3, 1);
    const moves = clampInteger(result.movesUsed, 0, 100000, 0);
    const time = clampInteger(result.elapsedSeconds, 0, 864000, 0);
    next.records[levelId] = {
      completed: true,
      stars: Math.max(previous?.stars || 0, stars),
      bestMoves:
        previous?.bestMoves > 0 ? Math.min(previous.bestMoves, moves) : moves,
      bestTime:
        previous?.bestTime > 0 ? Math.min(previous.bestTime, time) : time,
    };
    const ordinal =
      Number.isInteger(level.ordinal) && level.ordinal > 0
        ? level.ordinal
        : Number(levelId.slice(1));
    next.unlockedLevel = Math.max(
      next.unlockedLevel,
      Math.min(TOTAL_LEVELS, ordinal + 1),
    );
    next.currentSession = null;
    return saveProgress(next, storage);
  }

  function resetProgress(progress, storage) {
    const next = defaultProgress();
    next.settings = sanitizeSettings(progress?.settings);
    return saveProgress(next, storage);
  }

  function loadSettings(storage) {
    return loadProgress(storage).settings;
  }

  function saveSettings(settings, storage) {
    const progress = loadProgress(storage);
    progress.settings = sanitizeSettings(settings);
    return saveProgress(progress, storage).settings;
  }

  return Object.freeze({
    STORAGE_KEY,
    defaultProgress,
    migrateLegacyData,
    loadProgress,
    saveProgress,
    loadSession,
    saveSession,
    clearSession,
    updateRecord,
    resetProgress,
    loadSettings,
    saveSettings,
    normalizeLevelId,
    isFiveColumnSession,
  });
});

