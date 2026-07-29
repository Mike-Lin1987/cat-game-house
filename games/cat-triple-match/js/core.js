(function (root, factory) {
  const config = typeof module === 'object' && module.exports
    ? require('./config.js')
    : root.CAT_TRIPLE_CONFIG;
  const api = factory(config);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (config) {
  'use strict';

  const TILE_UNITS = 2;

  function rectanglesOverlap(tileA, tileB) {
    return tileA.x < tileB.x + TILE_UNITS
      && tileA.x + TILE_UNITS > tileB.x
      && tileA.y < tileB.y + TILE_UNITS
      && tileA.y + TILE_UNITS > tileB.y;
  }

  function buildBlockerMap(level) {
    const blockers = {};
    const blockedTiles = {};
    for (const tile of level.tiles || []) {
      blockers[tile.id] = [];
      blockedTiles[tile.id] = [];
    }
    for (const lower of level.tiles || []) {
      for (const upper of level.tiles || []) {
        if (upper.layer <= lower.layer || !rectanglesOverlap(lower, upper)) continue;
        blockers[lower.id].push(upper.id);
        blockedTiles[upper.id].push(lower.id);
      }
    }
    for (const values of Object.values(blockers)) values.sort();
    for (const values of Object.values(blockedTiles)) values.sort();
    return { blockers, blockedTiles };
  }

  function tileById(level) {
    return new Map((level.tiles || []).map((tile) => [tile.id, tile]));
  }

  function symbolMap(level) {
    return Object.fromEntries((level.tiles || []).map((tile) => [tile.id, tile.symbol]));
  }

  function createInitialState(level) {
    return {
      levelId: level.id,
      levelSignature: level.canonicalSignature || '',
      remainingTileIds: (level.tiles || []).map((tile) => tile.id),
      trayTileIds: [],
      clearedTileIds: [],
      symbolByTileId: symbolMap(level),
      toolRemaining: { ...config.defaultToolUses },
      toolUsed: { hint: 0, undo: 0, shuffle: 0 },
      elapsed: 0,
      status: 'playing',
      history: [],
    };
  }

  function copyRecord(record) {
    return Object.fromEntries(Object.entries(record || {}).map(([key, value]) => [key, value]));
  }

  function cloneSnapshot(snapshot) {
    return {
      remainingTileIds: [...(snapshot.remainingTileIds || [])],
      trayTileIds: [...(snapshot.trayTileIds || [])],
      clearedTileIds: [...(snapshot.clearedTileIds || [])],
      symbolByTileId: copyRecord(snapshot.symbolByTileId),
      status: snapshot.status || 'playing',
    };
  }

  function cloneState(state) {
    return {
      levelId: state.levelId,
      levelSignature: state.levelSignature || '',
      remainingTileIds: [...(state.remainingTileIds || [])],
      trayTileIds: [...(state.trayTileIds || [])],
      clearedTileIds: [...(state.clearedTileIds || [])],
      symbolByTileId: copyRecord(state.symbolByTileId),
      toolRemaining: { ...config.defaultToolUses, ...(state.toolRemaining || {}) },
      toolUsed: { hint: 0, undo: 0, shuffle: 0, ...(state.toolUsed || {}) },
      elapsed: Math.max(0, Math.trunc(Number(state.elapsed) || 0)),
      status: state.status || 'playing',
      history: (state.history || []).map(cloneSnapshot),
    };
  }

  function createUndoSnapshot(state) {
    return cloneSnapshot(state);
  }

  function isTileRemaining(state, tileId) {
    return (state.remainingTileIds || []).includes(tileId);
  }

  function isTileExposed(state, level, tileId) {
    if (!isTileRemaining(state, tileId)) return false;
    const remaining = new Set(state.remainingTileIds);
    const map = buildBlockerMap(level);
    return (map.blockers[tileId] || []).every((blockerId) => !remaining.has(blockerId));
  }

  function getExposedTileIds(state, level) {
    return (state.remainingTileIds || []).filter((tileId) =>
      isTileExposed(state, level, tileId));
  }

  function insertTileIntoTray(trayTileIds, tileId, symbolByTileId) {
    const result = [...trayTileIds];
    const symbol = symbolByTileId[tileId];
    let insertAt = result.length;
    for (let index = result.length - 1; index >= 0; index -= 1) {
      if (symbolByTileId[result[index]] === symbol) {
        insertAt = index + 1;
        break;
      }
    }
    result.splice(insertAt, 0, tileId);
    return result;
  }

  function resolveMatches(state) {
    const next = cloneState(state);
    const effects = [];
    let resolved = true;
    while (resolved) {
      resolved = false;
      const symbols = [];
      for (const tileId of next.trayTileIds) {
        const symbol = next.symbolByTileId[tileId];
        if (!symbols.includes(symbol)) symbols.push(symbol);
      }
      for (const symbol of symbols) {
        const matches = next.trayTileIds
          .filter((tileId) => next.symbolByTileId[tileId] === symbol)
          .slice(0, config.matchSize);
        if (matches.length < config.matchSize) continue;
        const matchSet = new Set(matches);
        next.trayTileIds = next.trayTileIds.filter((tileId) => !matchSet.has(tileId));
        next.clearedTileIds = [...new Set([...next.clearedTileIds, ...matches])];
        effects.push({ type: 'match', symbol, tileIds: matches });
        resolved = true;
        break;
      }
    }
    return { state: next, effects };
  }

  function isTrayFull(state) {
    return (state.trayTileIds || []).length >= config.trayCapacity;
  }

  function isLevelComplete(state) {
    return (state.remainingTileIds || []).length === 0
      && (state.trayTileIds || []).length === 0
      && state.status !== 'failed';
  }

  function isLevelFailed(state) {
    return state.status === 'failed';
  }

  function calculateRemainingTileCount(state) {
    return (state.remainingTileIds || []).length + (state.trayTileIds || []).length;
  }

  function updateTerminalStatus(state) {
    if (state.remainingTileIds.length === 0 && state.trayTileIds.length === 0) {
      state.status = 'completed';
    } else if (state.trayTileIds.length >= config.trayCapacity) {
      state.status = 'failed';
    } else {
      state.status = 'playing';
    }
    return state;
  }

  function selectTile(state, level, tileId) {
    if (!state || state.status !== 'playing' || !isTileExposed(state, level, tileId)) {
      return { state: cloneState(state), effects: [] };
    }
    const next = cloneState(state);
    next.history.push(createUndoSnapshot(state));
    if (next.history.length > config.maxUndoStates) {
      next.history.splice(0, next.history.length - config.maxUndoStates);
    }
    next.remainingTileIds = next.remainingTileIds.filter((id) => id !== tileId);
    next.trayTileIds = insertTileIntoTray(next.trayTileIds, tileId, next.symbolByTileId);
    const resolved = resolveMatches(next, level);
    updateTerminalStatus(resolved.state);
    const effects = [{ type: 'select', tileId }, ...resolved.effects];
    if (resolved.state.status === 'completed') effects.push({ type: 'complete' });
    if (resolved.state.status === 'failed') effects.push({ type: 'fail' });
    return { state: resolved.state, effects };
  }

  function restoreUndoSnapshot(state, snapshot) {
    const next = cloneState(state);
    const restored = cloneSnapshot(snapshot);
    next.remainingTileIds = restored.remainingTileIds;
    next.trayTileIds = restored.trayTileIds;
    next.clearedTileIds = restored.clearedTileIds;
    next.symbolByTileId = restored.symbolByTileId;
    next.status = restored.status;
    return next;
  }

  function undo(state) {
    if (!state || !state.history.length || state.toolRemaining.undo <= 0) {
      return { state: cloneState(state), effects: [] };
    }
    const next = cloneState(state);
    const snapshot = next.history.pop();
    const remainingUndo = next.toolRemaining.undo - 1;
    const usedUndo = next.toolUsed.undo + 1;
    const elapsed = next.elapsed;
    const hintsRemaining = next.toolRemaining.hint;
    const hintsUsed = next.toolUsed.hint;
    const shufflesRemaining = next.toolRemaining.shuffle;
    const shufflesUsed = next.toolUsed.shuffle;
    const restored = restoreUndoSnapshot(next, snapshot);
    restored.history = next.history;
    restored.elapsed = elapsed;
    restored.toolRemaining = {
      hint: hintsRemaining,
      undo: remainingUndo,
      shuffle: shufflesRemaining,
    };
    restored.toolUsed = {
      hint: hintsUsed,
      undo: usedUndo,
      shuffle: shufflesUsed,
    };
    restored.status = 'playing';
    return { state: restored, effects: [{ type: 'undo' }] };
  }

  function calculateStars(state) {
    if (!state || state.status !== 'completed') return 0;
    const assists = Number(state.toolUsed.hint || 0) + Number(state.toolUsed.shuffle || 0);
    if (assists === 0) return 3;
    if (assists <= 2) return 2;
    return 1;
  }

  function validateLayerLayout(level) {
    const errors = [];
    const tiles = level.tiles || [];
    for (let index = 0; index < tiles.length; index += 1) {
      const tile = tiles[index];
      if (!Number.isInteger(tile.x) || !Number.isInteger(tile.y)
          || !Number.isInteger(tile.layer) || tile.layer < 0 || tile.layer >= config.maxLayers) {
        errors.push(`${tile.id || index} 座標或 layer 無效`);
      }
      if (tile.x < 0 || tile.y < 0
          || tile.x + TILE_UNITS > level.layout.unitColumns
          || tile.y + TILE_UNITS > level.layout.unitRows) {
        errors.push(`${tile.id || index} 超出牌區`);
      }
      for (let otherIndex = index + 1; otherIndex < tiles.length; otherIndex += 1) {
        const other = tiles[otherIndex];
        if (tile.layer === other.layer && rectanglesOverlap(tile, other)) {
          errors.push(`${tile.id} 與 ${other.id} 同層重疊`);
        }
      }
      if (tile.layer > 0) {
        const supported = tiles.some((lower) =>
          lower.layer === tile.layer - 1 && rectanglesOverlap(lower, tile));
        if (!supported) errors.push(`${tile.id} 上層懸空`);
      }
    }
    return errors;
  }

  function replayKnownSolution(level) {
    let state = createInitialState(level);
    let peakTrayOccupancy = 0;
    for (const tileId of level.knownSolution || []) {
      const result = selectTile(state, level, tileId);
      if (result.state.remainingTileIds.length === state.remainingTileIds.length) {
        return { valid: false, state, peakTrayOccupancy, failedTileId: tileId };
      }
      state = result.state;
      peakTrayOccupancy = Math.max(peakTrayOccupancy, state.trayTileIds.length);
      if (state.status === 'failed') return { valid: false, state, peakTrayOccupancy, failedTileId: tileId };
    }
    return { valid: isLevelComplete(state), state, peakTrayOccupancy };
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') return ['關卡必須是物件'];
    if (!/^L\d{3}$/.test(level.id || '')) errors.push('關卡 ID 無效');
    if (!level.layout || !Number.isInteger(level.layout.unitColumns)
        || !Number.isInteger(level.layout.unitRows)) errors.push('牌區尺寸無效');
    const tileIds = new Set();
    const symbolIds = new Set((level.symbols || []).map((symbol) => symbol.id));
    const counts = {};
    for (const tile of level.tiles || []) {
      if (!tile.id || tileIds.has(tile.id)) errors.push('tile ID 缺少或重複');
      tileIds.add(tile.id);
      if (!symbolIds.has(tile.symbol)) errors.push(`${tile.id} 圖案無效`);
      counts[tile.symbol] = (counts[tile.symbol] || 0) + 1;
    }
    if ((level.tiles || []).length % config.matchSize !== 0) errors.push('卡牌總數不是 3 的倍數');
    for (const [symbol, count] of Object.entries(counts)) {
      if (count < config.matchSize || count % config.matchSize !== 0) {
        errors.push(`${symbol} 數量不是 3 的倍數`);
      }
    }
    errors.push(...validateLayerLayout(level));
    const known = level.knownSolution || [];
    if (known.length !== tileIds.size || new Set(known).size !== tileIds.size
        || known.some((id) => !tileIds.has(id))) errors.push('knownSolution 不完整');
    return errors;
  }

  function getHint(state, level, solverResult, previousTileIds) {
    if (!solverResult?.solved || !solverResult.sequence?.length) return null;
    const excluded = new Set(Array.isArray(previousTileIds) ? previousTileIds : []);
    const exposed = new Set(getExposedTileIds(state, level));
    const tileId = solverResult.sequence.find((id) => exposed.has(id) && !excluded.has(id))
      || solverResult.sequence.find((id) => exposed.has(id));
    if (!tileId) return null;
    const tile = tileById(level).get(tileId);
    const label = (level.symbols || []).find((symbol) =>
      symbol.id === state.symbolByTileId[tileId])?.label || '卡牌';
    return { tileId, message: `提示：可以先選取${tile.layer === 2 ? '上層' : tile.layer === 1 ? '中層' : '底層'}的${label}。` };
  }

  function serializeSession(state) {
    const copy = cloneState(state);
    copy.history = copy.history.slice(-config.maxUndoStates);
    return copy;
  }

  function deserializeSession(data, level) {
    if (!data || typeof data !== 'object' || data.levelId !== level.id) return null;
    if ((data.levelSignature || '') !== (level.canonicalSignature || '')) return null;
    const allIds = new Set((level.tiles || []).map((tile) => tile.id));
    const groups = [data.remainingTileIds, data.trayTileIds, data.clearedTileIds];
    if (groups.some((group) => !Array.isArray(group))) return null;
    const combined = groups.flat();
    if (combined.length !== allIds.size || new Set(combined).size !== allIds.size
        || combined.some((id) => !allIds.has(id))) return null;
    if (!data.symbolByTileId || [...allIds].some((id) => typeof data.symbolByTileId[id] !== 'string')) return null;
    const state = createInitialState(level);
    state.remainingTileIds = [...data.remainingTileIds];
    state.trayTileIds = [...data.trayTileIds];
    state.clearedTileIds = [...data.clearedTileIds];
    state.symbolByTileId = copyRecord(data.symbolByTileId);
    state.toolRemaining = {
      hint: Math.max(0, Math.min(config.defaultToolUses.hint, Math.trunc(Number(data.toolRemaining?.hint) || 0))),
      undo: Math.max(0, Math.min(config.defaultToolUses.undo, Math.trunc(Number(data.toolRemaining?.undo) || 0))),
      shuffle: Math.max(0, Math.min(config.defaultToolUses.shuffle, Math.trunc(Number(data.toolRemaining?.shuffle) || 0))),
    };
    state.toolUsed = {
      hint: Math.max(0, Math.trunc(Number(data.toolUsed?.hint) || 0)),
      undo: Math.max(0, Math.trunc(Number(data.toolUsed?.undo) || 0)),
      shuffle: Math.max(0, Math.trunc(Number(data.toolUsed?.shuffle) || 0)),
    };
    state.elapsed = Math.max(0, Math.trunc(Number(data.elapsed) || 0));
    state.status = data.status === 'failed' ? 'failed' : data.status === 'completed' ? 'completed' : 'playing';
    state.history = (Array.isArray(data.history) ? data.history : [])
      .filter((snapshot) => {
        const ids = [
          ...(snapshot.remainingTileIds || []),
          ...(snapshot.trayTileIds || []),
          ...(snapshot.clearedTileIds || []),
        ];
        return ids.length === allIds.size && new Set(ids).size === allIds.size
          && ids.every((id) => allIds.has(id));
      })
      .slice(-config.maxUndoStates)
      .map(cloneSnapshot);
    if (state.trayTileIds.length > config.trayCapacity) return null;
    return state;
  }

  function formatElapsedTime(seconds) {
    const safe = Math.max(0, Math.trunc(Number(seconds) || 0));
    return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
  }

  return {
    rectanglesOverlap,
    validateLayerLayout,
    buildBlockerMap,
    isTileRemaining,
    isTileExposed,
    getExposedTileIds,
    createInitialState,
    cloneState,
    insertTileIntoTray,
    resolveMatches,
    selectTile,
    calculateRemainingTileCount,
    isTrayFull,
    isLevelComplete,
    isLevelFailed,
    createUndoSnapshot,
    restoreUndoSnapshot,
    undo,
    calculateStars,
    validateLevelDefinition,
    replayKnownSolution,
    getHint,
    serializeSession,
    deserializeSession,
    formatElapsedTime,
  };
});
