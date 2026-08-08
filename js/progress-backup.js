(function initializeProgressBackup(root, factory) {
  'use strict';

  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatGameProgressBackup = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createApi() {
  'use strict';

  const BACKUP_FORMAT = 'cat-game-house-progress';
  const BACKUP_VERSION = 1;
  const MAX_BACKUP_CHARACTERS = 2 * 1024 * 1024;

  function isDataObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function validateGameProgress(game, data) {
    return typeof game.validateBackup !== 'function' || game.validateBackup(data) === true;
  }

  function createBackup(storage, catalog, exportedAt = new Date().toISOString()) {
    const games = {};

    for (const game of catalog) {
      const rawProgress = storage.getItem(game.storageKey);
      if (rawProgress === null) {
        continue;
      }

      const data = JSON.parse(rawProgress);
      if (!isDataObject(data)) {
        throw new TypeError(`${game.title} 的進度格式無效`);
      }
      if (!validateGameProgress(game, data)) {
        throw new TypeError(`${game.title} 的進度格式無效`);
      }

      games[game.id] = {
        storageKey: game.storageKey,
        data,
      };
    }

    return {
      format: BACKUP_FORMAT,
      version: BACKUP_VERSION,
      exportedAt,
      games,
    };
  }

  function parseBackup(input, catalog) {
    if (
      typeof input === 'string' &&
      input.length > MAX_BACKUP_CHARACTERS
    ) {
      throw new RangeError('備份檔超過 2 MB 上限');
    }

    const parsed = typeof input === 'string' ? JSON.parse(input) : input;
    if (
      !isDataObject(parsed) ||
      parsed.format !== BACKUP_FORMAT ||
      parsed.version !== BACKUP_VERSION ||
      !isDataObject(parsed.games)
    ) {
      throw new TypeError('這不是有效的遊戲小屋進度備份');
    }

    const gamesById = new Map(catalog.map((game) => [game.id, game]));
    const games = {};
    for (const [gameId, entry] of Object.entries(parsed.games)) {
      const game = gamesById.get(gameId);
      if (!game) {
        continue;
      }
      if (
        !isDataObject(entry) ||
        entry.storageKey !== game.storageKey ||
        !isDataObject(entry.data) ||
        !validateGameProgress(game, entry.data)
      ) {
        throw new TypeError(`${game.title} 的備份資料格式無效`);
      }
      games[gameId] = {
        storageKey: game.storageKey,
        data: entry.data,
      };
    }

    if (Object.keys(games).length === 0) {
      throw new TypeError('備份檔沒有目前遊戲可還原的進度');
    }

    return {
      format: BACKUP_FORMAT,
      version: BACKUP_VERSION,
      exportedAt:
        typeof parsed.exportedAt === 'string' ? parsed.exportedAt : null,
      games,
    };
  }

  function restoreBackup(storage, catalog, input) {
    const backup = parseBackup(input, catalog);
    const restoredGameIds = [];
    const previousValues = new Map();
    const updatedGames = [];

    try {
      for (const game of catalog) {
        const entry = backup.games[game.id];
        if (!entry) {
          continue;
        }
        previousValues.set(game.id, storage.getItem(game.storageKey));
        storage.setItem(game.storageKey, JSON.stringify(entry.data));
        updatedGames.push(game);
        restoredGameIds.push(game.id);
      }
    } catch {
      for (const game of updatedGames.reverse()) {
        try {
          const previousValue = previousValues.get(game.id);
          if (previousValue === null) {
            storage.removeItem(game.storageKey);
          } else {
            storage.setItem(game.storageKey, previousValue);
          }
        } catch {
          // Continue attempting to restore the remaining original values.
        }
      }
      throw new Error('儲存空間不足，無法完整還原進度');
    }

    return restoredGameIds;
  }

  async function requestPersistentStorage(storageManager) {
    if (!storageManager || typeof storageManager.persist !== 'function') {
      return {
        supported: false,
        persisted: false,
      };
    }

    try {
      if (
        typeof storageManager.persisted === 'function' &&
        (await storageManager.persisted())
      ) {
        return {
          supported: true,
          persisted: true,
        };
      }

      return {
        supported: true,
        persisted: (await storageManager.persist()) === true,
      };
    } catch {
      return {
        supported: true,
        persisted: false,
      };
    }
  }

  return Object.freeze({
    BACKUP_FORMAT,
    BACKUP_VERSION,
    MAX_BACKUP_CHARACTERS,
    createBackup,
    parseBackup,
    requestPersistentStorage,
    restoreBackup,
  });
});
