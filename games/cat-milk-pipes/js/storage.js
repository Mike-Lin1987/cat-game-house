(function (root, factory) {
  const config = typeof module === 'object' && module.exports
    ? require('./config.js')
    : root.CAT_MILK_PIPE_CONFIG;
  const api = factory(config);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatMilkPipeStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Config) {
  'use strict';

  function createDefaultProgress() {
    return {
      version: Config.dataVersion,
      unlockedLevel: 1,
      records: {},
      currentSession: null,
      settings: {
        animations: true,
        showLeaks: true,
        largeBoard: false,
      },
      stats: { totalPlaySeconds: 0 },
    };
  }

  function resolveStorage(storage) {
    if (storage) return storage;
    try {
      return typeof localStorage !== 'undefined' ? localStorage : null;
    } catch {
      return null;
    }
  }

  function normalizeProgress(value) {
    const fallback = createDefaultProgress();
    if (!value || typeof value !== 'object' || value.version !== Config.dataVersion) return fallback;
    const progress = {
      ...fallback,
      unlockedLevel: Number.isInteger(value.unlockedLevel)
        ? Math.min(Config.totalLevels, Math.max(1, value.unlockedLevel))
        : 1,
      records: {},
      currentSession: value.currentSession && typeof value.currentSession === 'object'
        ? value.currentSession
        : null,
      settings: {
        animations: value.settings?.animations !== false,
        showLeaks: value.settings?.showLeaks !== false,
        largeBoard: value.settings?.largeBoard === true,
      },
      stats: {
        totalPlaySeconds: Number.isInteger(value.stats?.totalPlaySeconds)
          ? Math.max(0, value.stats.totalPlaySeconds)
          : 0,
      },
    };
    for (const [id, record] of Object.entries(value.records || {})) {
      const index = /^L\d{3}$/.test(id) ? Number(id.slice(1)) : 0;
      if (index >= 1 && index <= Config.totalLevels && record?.completed) {
        progress.records[id] = {
          completed: true,
          stars: Math.min(3, Math.max(1, Number(record.stars) || 1)),
          bestMoves: Math.max(0, Number(record.bestMoves) || 0),
          bestTime: Math.max(0, Number(record.bestTime) || 0),
        };
      }
    }
    return progress;
  }

  function loadProgress(storage) {
    const target = resolveStorage(storage);
    if (!target) return createDefaultProgress();
    try {
      const raw = target.getItem(Config.storageKey);
      return raw ? normalizeProgress(JSON.parse(raw)) : createDefaultProgress();
    } catch {
      return createDefaultProgress();
    }
  }

  function saveProgress(progress, storage) {
    const target = resolveStorage(storage);
    if (!target) return false;
    try {
      target.setItem(Config.storageKey, JSON.stringify(normalizeProgress(progress)));
      return true;
    } catch {
      return false;
    }
  }

  function loadSession(storage) {
    return loadProgress(storage).currentSession;
  }

  function saveSession(session, storage) {
    const progress = loadProgress(storage);
    progress.currentSession = session;
    return saveProgress(progress, storage);
  }

  function clearSession(storage) {
    const progress = loadProgress(storage);
    progress.currentSession = null;
    return saveProgress(progress, storage);
  }

  function updateRecord(progress, levelId, result) {
    const next = normalizeProgress(progress);
    const old = next.records[levelId];
    const stars = Math.min(3, Math.max(1, Number(result.stars) || 1));
    const moves = Math.max(0, Number(result.moves) || 0);
    const time = Math.max(0, Number(result.time) || 0);
    const candidate = {
      completed: true,
      stars,
      bestMoves: moves,
      bestTime: time,
    };
    const candidateIsBetter = !old
      || candidate.stars > old.stars
      || (candidate.stars === old.stars && candidate.bestMoves < old.bestMoves)
      || (candidate.stars === old.stars && candidate.bestMoves === old.bestMoves
        && candidate.bestTime < old.bestTime);
    next.records[levelId] = candidateIsBetter ? candidate : old;
    const index = Number(levelId.slice(1));
    next.unlockedLevel = Math.max(
      next.unlockedLevel,
      Math.min(Config.totalLevels, index + 1),
    );
    next.currentSession = null;
    return next;
  }

  function resetProgress(storage) {
    const progress = createDefaultProgress();
    return saveProgress(progress, storage) ? progress : createDefaultProgress();
  }

  function loadSettings(storage) {
    return loadProgress(storage).settings;
  }

  function saveSettings(settings, storage) {
    const progress = loadProgress(storage);
    progress.settings = {
      animations: settings?.animations !== false,
      showLeaks: settings?.showLeaks !== false,
      largeBoard: settings?.largeBoard === true,
    };
    return saveProgress(progress, storage);
  }

  return Object.freeze({
    createDefaultProgress,
    normalizeProgress,
    loadProgress,
    saveProgress,
    loadSession,
    saveSession,
    clearSession,
    updateRecord,
    resetProgress,
    loadSettings,
    saveSettings,
  });
});
