(function initCatConnectStorage(root, factory) {
  'use strict';
  const api = factory(root);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatConnectStorage = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createStorage(root) {
  'use strict';

  const STORAGE_KEY = 'cat-color-connect:v1';
  let memoryValue = null;

  function defaultData(packs = []) {
    return {
      version: 1,
      unlockedByPack: Object.fromEntries(packs.map((pack) => [pack.id, 1])),
      records: {},
      settings: { animations: true, gridLines: true },
      session: null,
    };
  }

  function clampInteger(value, minimum, maximum, fallback = minimum) {
    const number = Number(value);
    return Number.isFinite(number)
      ? Math.min(maximum, Math.max(minimum, Math.floor(number)))
      : fallback;
  }

  function migrateLegacyLevelId(levelId) {
    if (typeof levelId !== 'string') {
      return levelId;
    }
    const legacy = levelId.match(/^(\d+)-(\d{1,2})$/);
    if (!legacy) {
      return levelId;
    }
    return `${legacy[1]}x${legacy[1]}-${legacy[2].padStart(3, '0')}`;
  }

  function sanitize(raw, packs = []) {
    const clean = defaultData(packs);
    if (!raw || typeof raw !== 'object') {
      return clean;
    }
    for (const pack of packs) {
      clean.unlockedByPack[pack.id] = clampInteger(
        raw.unlockedByPack?.[pack.id] ?? raw.unlockedBySize?.[pack.rows],
        1,
        pack.levelCount,
      );
    }
    for (const [rawId, record] of Object.entries(raw.records || {})) {
      const id = migrateLegacyLevelId(rawId);
      const pack = packs.find((item) => id.startsWith(`${item.id}-`));
      const ordinal = Number(id.slice((pack?.id.length || 0) + 1));
      if (
        !pack ||
        !Number.isInteger(ordinal) ||
        ordinal < 1 ||
        ordinal > pack.levelCount
      ) {
        continue;
      }
      clean.records[id] = {
        stars: clampInteger(record?.stars, 1, 3, 1),
        bestTime: clampInteger(record?.bestTime, 0, 86400, 0),
        bestMoves: clampInteger(record?.bestMoves, 0, 100000, 0),
        hintsUsed: clampInteger(record?.hintsUsed, 0, 100000, 0),
      };
    }
    clean.settings = {
      animations: raw.settings?.animations !== false,
      gridLines: raw.settings?.gridLines !== false,
    };
    if (raw.session && typeof raw.session === 'object') {
      clean.session = {
        ...raw.session,
        levelId: migrateLegacyLevelId(raw.session.levelId),
      };
    }
    return clean;
  }

  function readStorage() {
    try {
      return root?.localStorage?.getItem(STORAGE_KEY) ?? memoryValue;
    } catch {
      return memoryValue;
    }
  }

  function writeStorage(value) {
    memoryValue = value;
    try {
      root?.localStorage?.setItem(STORAGE_KEY, value);
    } catch {
      // Memory fallback keeps the complete game playable for this visit.
    }
  }

  function load(packs = []) {
    try {
      return sanitize(JSON.parse(readStorage() || 'null'), packs);
    } catch {
      return defaultData(packs);
    }
  }

  function save(data, packs = []) {
    const clean = sanitize(data, packs);
    writeStorage(JSON.stringify(clean));
    return clean;
  }

  function saveRecord(data, level, result, packs = []) {
    const next = sanitize(data, packs);
    const previous = next.records[level.id];
    const stars = clampInteger(result.stars, 1, 3, 1);
    next.records[level.id] = {
      stars: Math.max(previous?.stars || 0, stars),
      bestTime:
        previous?.bestTime > 0
          ? Math.min(previous.bestTime, clampInteger(result.elapsed, 0, 86400))
          : clampInteger(result.elapsed, 0, 86400),
      bestMoves:
        previous?.bestMoves > 0
          ? Math.min(previous.bestMoves, clampInteger(result.moves, 0, 100000))
          : clampInteger(result.moves, 0, 100000),
      hintsUsed: Math.min(
        previous?.hintsUsed ?? Number.POSITIVE_INFINITY,
        clampInteger(result.hintsUsed, 0, 100000),
      ),
    };
    const pack = packs.find((item) => item.id === level.packId);
    if (pack) {
      next.unlockedByPack[pack.id] = Math.max(
        next.unlockedByPack[pack.id] || 1,
        Math.min(pack.levelCount, level.ordinal + 1),
      );
    }
    return save(next, packs);
  }

  function resetProgress(data, packs = []) {
    const next = defaultData(packs);
    next.settings = sanitize(data, packs).settings;
    return save(next, packs);
  }

  return Object.freeze({
    STORAGE_KEY,
    defaultData,
    sanitize,
    migrateLegacyLevelId,
    load,
    save,
    saveRecord,
    resetProgress,
  });
});
