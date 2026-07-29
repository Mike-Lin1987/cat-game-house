(function (root, factory) {
  const config = typeof module === 'object' && module.exports ? require('./config.js') : root.CAT_TRIPLE_CONFIG;
  const api = factory(config, typeof localStorage === 'undefined' ? null : localStorage);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (config, defaultStorage) {
  'use strict';
  function defaults() {
    return {
      version: config.dataVersion, unlockedLevel: 1, records: {}, currentSession: null,
      totalPlaySeconds: 0, settings: { animations: true, sound: false },
    };
  }
  function sanitize(value) {
    const result = defaults();
    if (!value || typeof value !== 'object' || value.version !== config.dataVersion) return result;
    result.unlockedLevel = Math.max(1, Math.min(100, Math.trunc(Number(value.unlockedLevel) || 1)));
    result.totalPlaySeconds = Math.max(0, Math.trunc(Number(value.totalPlaySeconds) || 0));
    result.settings.animations = value.settings?.animations !== false;
    for (const [id, record] of Object.entries(value.records || {})) {
      if (/^L\d{3}$/.test(id) && record?.completed === true) {
        result.records[id] = {
          completed: true,
          stars: Math.max(1, Math.min(3, Math.trunc(Number(record.stars) || 1))),
          bestTime: Math.max(0, Math.trunc(Number(record.bestTime) || 0)),
          bestAssists: Math.max(0, Math.trunc(Number(record.bestAssists) || 0)),
        };
      }
    }
    result.currentSession = value.currentSession && typeof value.currentSession === 'object'
      ? JSON.parse(JSON.stringify(value.currentSession)) : null;
    return result;
  }
  function createStorage(storage) {
    function loadProgress() {
      try {
        const raw = storage?.getItem(config.storageKey);
        return raw ? sanitize(JSON.parse(raw)) : defaults();
      } catch { return defaults(); }
    }
    function saveProgress(progress) {
      try { storage?.setItem(config.storageKey, JSON.stringify(sanitize(progress))); return Boolean(storage); }
      catch { return false; }
    }
    function saveSession(session) {
      const progress = loadProgress();
      progress.currentSession = session ? JSON.parse(JSON.stringify(session)) : null;
      return saveProgress(progress);
    }
    function clearSession() { return saveSession(null); }
    function updateRecord(levelId, result) {
      const progress = loadProgress();
      const candidate = {
        completed: true, stars: result.stars, bestTime: result.time, bestAssists: result.assists,
      };
      const old = progress.records[levelId];
      if (!old || candidate.stars > old.stars
        || (candidate.stars === old.stars && candidate.bestAssists < old.bestAssists)
        || (candidate.stars === old.stars && candidate.bestAssists === old.bestAssists
          && candidate.bestTime < old.bestTime)) progress.records[levelId] = candidate;
      const number = Number(levelId.slice(1));
      progress.unlockedLevel = Math.max(progress.unlockedLevel, Math.min(100, number + 1));
      progress.currentSession = null;
      saveProgress(progress);
      return progress;
    }
    function saveSettings(settings) {
      const progress = loadProgress();
      progress.settings.animations = settings?.animations !== false;
      saveProgress(progress);
      return progress.settings;
    }
    return { loadProgress, saveProgress, saveSession, clearSession, updateRecord, saveSettings };
  }
  return { defaultProgress: defaults, sanitizeProgress: sanitize, createStorage, ...createStorage(defaultStorage) };
});
