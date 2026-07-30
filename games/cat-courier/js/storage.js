(function (root, factory) {
  const config = typeof module === 'object' && module.exports
    ? require('./config.js') : root.CAT_COURIER_CONFIG;
  const core = typeof module === 'object' && module.exports
    ? require('./core.js') : root.CatCourierCore;
  const api = factory(config, core, root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatCourierStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Config, Core, root) {
  'use strict';

  function createDefaultSettings(settings = {}) {
    return {
      animations: settings.animations !== false,
      sound: false,
      largeMap: settings.largeMap === true,
    };
  }

  function createDefaultProgress(settings) {
    return {
      version: Config.dataVersion,
      unlockedLevel: 1,
      records: {},
      currentSession: null,
      settings: createDefaultSettings(settings),
      totalPlaySeconds: 0,
    };
  }

  function resolveStorage(storage) {
    if (storage) return storage;
    try {
      return root.localStorage || null;
    } catch {
      return null;
    }
  }

  function normalizeRecord(record) {
    if (!record || typeof record !== 'object' || record.completed !== true) return null;
    return {
      completed: true,
      stars: Math.max(1, Math.min(3, Math.floor(Number(record.stars) || 1))),
      bestFuelUsed: Math.max(0, Math.floor(Number(record.bestFuelUsed) || 0)),
      bestTime: Math.max(0, Math.floor(Number(record.bestTime) || 0)),
    };
  }

  function sanitizeProgress(value) {
    if (!value || typeof value !== 'object' || value.version !== Config.dataVersion) {
      return createDefaultProgress(value?.settings);
    }
    const progress = createDefaultProgress(value.settings);
    progress.unlockedLevel = Math.max(
      1,
      Math.min(Config.levelCount, Math.floor(Number(value.unlockedLevel) || 1)),
    );
    if (value.records && typeof value.records === 'object') {
      for (const [levelId, record] of Object.entries(value.records)) {
        const number = Number(levelId.slice(1));
        const normalized = normalizeRecord(record);
        if (/^L\d{3}$/.test(levelId) && number >= 1 && number <= Config.levelCount && normalized) {
          progress.records[levelId] = normalized;
        }
      }
    }
    progress.currentSession = value.currentSession && typeof value.currentSession === 'object'
      ? value.currentSession : null;
    progress.totalPlaySeconds = Math.max(0, Math.floor(Number(value.totalPlaySeconds) || 0));
    return progress;
  }

  function loadProgress(storage) {
    const target = resolveStorage(storage);
    if (!target) return createDefaultProgress();
    try {
      const raw = target.getItem(Config.storageKey);
      return raw ? sanitizeProgress(JSON.parse(raw)) : createDefaultProgress();
    } catch {
      return createDefaultProgress();
    }
  }

  function saveProgress(storage, progress) {
    const target = resolveStorage(storage);
    if (!target) return false;
    try {
      target.setItem(Config.storageKey, JSON.stringify(sanitizeProgress(progress)));
      return true;
    } catch {
      return false;
    }
  }

  function updateRecord(storage, levelId, result) {
    const progress = loadProgress(storage);
    const existing = progress.records[levelId];
    const stars = Math.max(1, Math.min(3, Math.floor(Number(result.stars) || 1)));
    const fuelUsed = Math.max(0, Math.floor(Number(result.fuelUsed) || 0));
    const elapsed = Math.max(0, Math.floor(Number(result.elapsed) || 0));
    progress.records[levelId] = {
      completed: true,
      stars: Math.max(existing?.stars || 0, stars),
      bestFuelUsed: existing
        ? Math.min(existing.bestFuelUsed || fuelUsed, fuelUsed)
        : fuelUsed,
      bestTime: existing
        ? Math.min(existing.bestTime || elapsed, elapsed)
        : elapsed,
    };
    const levelNumber = Number(levelId.slice(1));
    progress.unlockedLevel = Math.max(
      progress.unlockedLevel,
      Math.min(Config.levelCount, levelNumber + 1),
    );
    progress.currentSession = null;
    saveProgress(storage, progress);
    return progress.records[levelId];
  }

  function saveSession(storage, state, level) {
    const progress = loadProgress(storage);
    const serialized = Core.serializeSession(state);
    if (!Core.deserializeSession(serialized, level)) return false;
    progress.currentSession = serialized;
    return saveProgress(storage, progress);
  }

  function loadSession(storage, levels) {
    const progress = loadProgress(storage);
    if (!progress.currentSession) return null;
    const level = (levels || []).find((candidate) => candidate.id === progress.currentSession.levelId);
    if (!level) {
      progress.currentSession = null;
      saveProgress(storage, progress);
      return null;
    }
    const state = Core.deserializeSession(progress.currentSession, level);
    if (!state) {
      progress.currentSession = null;
      saveProgress(storage, progress);
      return null;
    }
    return state;
  }

  function clearSession(storage) {
    const progress = loadProgress(storage);
    progress.currentSession = null;
    return saveProgress(storage, progress);
  }

  function loadSettings(storage) {
    return loadProgress(storage).settings;
  }

  function saveSettings(storage, settings) {
    const progress = loadProgress(storage);
    progress.settings = createDefaultSettings(settings);
    return saveProgress(storage, progress);
  }

  function addPlayTime(storage, seconds) {
    const progress = loadProgress(storage);
    progress.totalPlaySeconds += Math.max(0, Math.floor(Number(seconds) || 0));
    saveProgress(storage, progress);
    return progress.totalPlaySeconds;
  }

  function resetProgress(storage) {
    const existing = loadProgress(storage);
    const fresh = createDefaultProgress(existing.settings);
    saveProgress(storage, fresh);
    return fresh;
  }

  return Object.freeze({
    createDefaultSettings,
    createDefaultProgress,
    loadProgress,
    saveProgress,
    updateRecord,
    saveSession,
    loadSession,
    clearSession,
    loadSettings,
    saveSettings,
    addPlayTime,
    resetProgress,
  });
});
