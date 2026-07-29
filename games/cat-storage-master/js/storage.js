(function (root, factory) {
  const config = typeof module === 'object' && module.exports
    ? require('./config.js')
    : root.CAT_STORAGE_CONFIG;
  const api = factory(config, typeof localStorage === 'undefined' ? null : localStorage);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatStorageStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (config, defaultStorage) {
  'use strict';

  function defaultProgress() {
    return {
      version: config.dataVersion,
      unlockedLevel: 1,
      records: {},
      currentSession: null,
      totalPlaySeconds: 0,
      settings: {
        animations: true,
        sound: false,
        largeBoard: false,
      },
    };
  }

  function normalizeSettings(settings) {
    const defaults = defaultProgress().settings;
    return {
      animations: typeof settings?.animations === 'boolean' ? settings.animations : defaults.animations,
      sound: typeof settings?.sound === 'boolean' ? settings.sound : defaults.sound,
      largeBoard: typeof settings?.largeBoard === 'boolean' ? settings.largeBoard : defaults.largeBoard,
    };
  }

  function normalizeRecord(record) {
    if (!record || record.completed !== true) return null;
    const stars = Math.max(1, Math.min(3, Math.trunc(Number(record.stars) || 1)));
    const bestMoves = Math.max(0, Math.trunc(Number(record.bestMoves) || 0));
    const bestTime = Math.max(0, Math.trunc(Number(record.bestTime) || 0));
    return { completed: true, stars, bestMoves, bestTime };
  }

  function sanitizeProgress(value) {
    const safe = defaultProgress();
    if (!value || typeof value !== 'object') return safe;
    safe.unlockedLevel = Math.max(
      1,
      Math.min(config.totalLevels, Math.trunc(Number(value.unlockedLevel) || 1)),
    );
    for (const [id, record] of Object.entries(value.records || {})) {
      const match = /^L(\d{3})$/.exec(id);
      const number = match ? Number(match[1]) : 0;
      const normalized = normalizeRecord(record);
      if (number >= 1 && number <= config.totalLevels && normalized) safe.records[id] = normalized;
    }
    safe.currentSession = value.currentSession && typeof value.currentSession === 'object'
      ? JSON.parse(JSON.stringify(value.currentSession))
      : null;
    safe.totalPlaySeconds = Math.max(0, Math.trunc(Number(value.totalPlaySeconds) || 0));
    safe.settings = normalizeSettings(value.settings);
    return safe;
  }

  function createStorage(storage) {
    const target = storage || null;

    function loadProgress() {
      if (!target) return defaultProgress();
      try {
        const raw = target.getItem(config.storageKey);
        return raw ? sanitizeProgress(JSON.parse(raw)) : defaultProgress();
      } catch {
        return defaultProgress();
      }
    }

    function saveProgress(progress) {
      if (!target) return false;
      try {
        target.setItem(config.storageKey, JSON.stringify(sanitizeProgress(progress)));
        return true;
      } catch {
        return false;
      }
    }

    function loadSession() {
      return loadProgress().currentSession;
    }

    function saveSession(session) {
      const progress = loadProgress();
      progress.currentSession = session && typeof session === 'object'
        ? JSON.parse(JSON.stringify(session))
        : null;
      return saveProgress(progress);
    }

    function clearSession() {
      const progress = loadProgress();
      progress.currentSession = null;
      return saveProgress(progress);
    }

    function updateRecord(levelId, result) {
      const progress = loadProgress();
      const existing = progress.records[levelId];
      const candidate = normalizeRecord({
        completed: true,
        stars: result.stars,
        bestMoves: result.moves,
        bestTime: result.time,
      });
      if (!candidate) return progress;
      const replace = !existing
        || candidate.stars > existing.stars
        || (candidate.stars === existing.stars && candidate.bestMoves < existing.bestMoves)
        || (candidate.stars === existing.stars
          && candidate.bestMoves === existing.bestMoves
          && candidate.bestTime < existing.bestTime);
      if (replace) progress.records[levelId] = candidate;
      const match = /^L(\d{3})$/.exec(levelId);
      if (match) progress.unlockedLevel = Math.max(
        progress.unlockedLevel,
        Math.min(config.totalLevels, Number(match[1]) + 1),
      );
      progress.currentSession = null;
      saveProgress(progress);
      return progress;
    }

    function resetProgress() {
      const current = loadProgress();
      const reset = defaultProgress();
      reset.settings = current.settings;
      saveProgress(reset);
      return reset;
    }

    function loadSettings() {
      return loadProgress().settings;
    }

    function saveSettings(settings) {
      const progress = loadProgress();
      progress.settings = normalizeSettings({ ...progress.settings, ...settings });
      saveProgress(progress);
      return progress.settings;
    }

    return {
      loadProgress,
      saveProgress,
      loadSession,
      saveSession,
      clearSession,
      updateRecord,
      resetProgress,
      loadSettings,
      saveSettings,
    };
  }

  return {
    defaultProgress,
    sanitizeProgress,
    createStorage,
    ...createStorage(defaultStorage),
  };
});
