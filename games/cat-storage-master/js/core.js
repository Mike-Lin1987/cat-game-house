(function (root, factory) {
  const config = typeof module === 'object' && module.exports
    ? require('./config.js')
    : root.CAT_STORAGE_CONFIG;
  const api = factory(config);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatStorageCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (config) {
  'use strict';

  const MAX_UNDO = config && config.maxUndoStates ? config.maxUndoStates : 100;

  function coordinateKey(row, column) {
    return `${row},${column}`;
  }

  function normalizeCells(cells) {
    if (!Array.isArray(cells) || cells.length === 0) return [];
    const pairs = cells.map((cell) => [Number(cell[0]), Number(cell[1])]);
    const minRow = Math.min(...pairs.map((cell) => cell[0]));
    const minColumn = Math.min(...pairs.map((cell) => cell[1]));
    return pairs
      .map(([row, column]) => [row - minRow, column - minColumn])
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  }

  function rotateCells(cells) {
    return normalizeCells(cells.map(([row, column]) => [column, -row]));
  }

  function flipCells(cells) {
    return normalizeCells(cells.map(([row, column]) => [row, -column]));
  }

  function cellsSignature(cells) {
    return normalizeCells(cells).map((cell) => cell.join(',')).join(';');
  }

  function normalizeRotation(rotation) {
    const value = Number.isFinite(Number(rotation)) ? Number(rotation) : 0;
    return ((Math.trunc(value) % 4) + 4) % 4;
  }

  function getTransformedCells(piece, rotation, flipped) {
    let cells = normalizeCells(piece.cells || []);
    if (flipped) cells = flipCells(cells);
    for (let index = 0; index < normalizeRotation(rotation); index += 1) {
      cells = rotateCells(cells);
    }
    return normalizeCells(cells);
  }

  function getUniqueTransforms(piece) {
    const seen = new Set();
    const result = [];
    const rotations = piece.allowRotate === false ? [normalizeRotation(piece.initialRotation || 0)] : [0, 1, 2, 3];
    const flips = piece.allowFlip ? [false, true] : [false];
    for (const flipped of flips) {
      for (const rotation of rotations) {
        const cells = getTransformedCells(piece, rotation, flipped);
        const signature = cellsSignature(cells);
        if (seen.has(signature)) continue;
        seen.add(signature);
        result.push({ rotation, flipped, cells, signature });
      }
    }
    return result;
  }

  function getAbsoluteCells(piece, placement) {
    const cells = getTransformedCells(piece, placement.rotation, placement.flipped);
    return cells.map(([row, column]) => [
      row + Number(placement.row),
      column + Number(placement.column),
    ]);
  }

  function isInsideBoard(row, column, level) {
    return Number.isInteger(row) && Number.isInteger(column)
      && row >= 0 && row < level.rows && column >= 0 && column < level.columns;
  }

  function makeCellSet(cells) {
    return new Set((cells || []).map(([row, column]) => coordinateKey(row, column)));
  }

  function isFillableCell(level, row, column) {
    return makeCellSet(level.fillableCells).has(coordinateKey(row, column));
  }

  function isBlockedCell(level, row, column) {
    return makeCellSet(level.blockedCells).has(coordinateKey(row, column));
  }

  function createInitialState(level) {
    const placements = {};
    for (const piece of level.pieces || []) {
      placements[piece.id] = {
        row: null,
        column: null,
        rotation: normalizeRotation(piece.initialRotation || 0),
        flipped: Boolean(piece.initialFlipped && piece.allowFlip),
        placed: false,
      };
    }
    return {
      levelId: level.id,
      placements,
      movesUsed: 0,
      elapsed: 0,
      hintsUsed: 0,
      status: 'playing',
      history: [],
    };
  }

  function cloneState(state) {
    return {
      levelId: state.levelId,
      placements: Object.fromEntries(
        Object.entries(state.placements || {}).map(([id, placement]) => [id, { ...placement }]),
      ),
      movesUsed: Number(state.movesUsed) || 0,
      elapsed: Number(state.elapsed) || 0,
      hintsUsed: Number(state.hintsUsed) || 0,
      status: state.status || 'playing',
      history: Array.isArray(state.history)
        ? state.history.map((snapshot) => ({
          placements: Object.fromEntries(
            Object.entries(snapshot.placements || {}).map(([id, placement]) => [id, { ...placement }]),
          ),
        }))
        : [],
    };
  }

  function historySnapshot(state) {
    return {
      placements: Object.fromEntries(
        Object.entries(state.placements || {}).map(([id, placement]) => [id, { ...placement }]),
      ),
    };
  }

  function findPiece(level, pieceId) {
    return (level.pieces || []).find((piece) => piece.id === pieceId) || null;
  }

  function buildOccupancy(state, level, excludedPieceId) {
    const occupancy = {};
    for (const piece of level.pieces || []) {
      if (piece.id === excludedPieceId) continue;
      const placement = state.placements && state.placements[piece.id];
      if (!placement || !placement.placed) continue;
      for (const [row, column] of getAbsoluteCells(piece, placement)) {
        occupancy[coordinateKey(row, column)] = piece.id;
      }
    }
    return occupancy;
  }

  function canPlacePiece(state, level, pieceId, placement) {
    const piece = findPiece(level, pieceId);
    if (!piece) return { valid: false, reason: 'unknown-piece', cells: [] };
    if (!placement || !Number.isInteger(placement.row) || !Number.isInteger(placement.column)) {
      return { valid: false, reason: 'invalid-placement', cells: [] };
    }
    if (placement.flipped && !piece.allowFlip) {
      return { valid: false, reason: 'flip-disabled', cells: [] };
    }
    const cells = getAbsoluteCells(piece, placement);
    const fillable = makeCellSet(level.fillableCells);
    const occupancy = buildOccupancy(state, level, pieceId);
    for (const [row, column] of cells) {
      const key = coordinateKey(row, column);
      if (!isInsideBoard(row, column, level)) return { valid: false, reason: 'outside', cells };
      if (!fillable.has(key)) {
        if (isBlockedCell(level, row, column)) return { valid: false, reason: 'blocked', cells };
        return { valid: false, reason: 'not-fillable', cells };
      }
      if (occupancy[key]) return { valid: false, reason: 'overlap', cells };
    }
    return { valid: true, reason: null, cells };
  }

  function countFilledCells(state, level) {
    return Object.keys(buildOccupancy(state, level)).length;
  }

  function getRemainingPieces(state, level) {
    return (level.pieces || []).filter((piece) => !state.placements[piece.id]?.placed);
  }

  function isPuzzleComplete(state, level) {
    if (getRemainingPieces(state, level).length > 0) return false;
    const occupancy = buildOccupancy(state, level);
    const fillable = makeCellSet(level.fillableCells);
    if (Object.keys(occupancy).length !== fillable.size) return false;
    return [...fillable].every((key) => Boolean(occupancy[key]));
  }

  function updateTerminalStatus(state, level) {
    if (isPuzzleComplete(state, level)) state.status = 'completed';
    else if (state.movesUsed >= level.moveLimit) state.status = 'failed';
    else state.status = 'playing';
    return state;
  }

  function commitPlacementChange(state, level, mutate) {
    if (!state || state.status !== 'playing') return cloneState(state);
    const next = cloneState(state);
    next.history.push(historySnapshot(state));
    if (next.history.length > MAX_UNDO) next.history.splice(0, next.history.length - MAX_UNDO);
    mutate(next);
    next.movesUsed += 1;
    return updateTerminalStatus(next, level);
  }

  function placementsEqual(left, right) {
    return Boolean(left && right)
      && left.row === right.row
      && left.column === right.column
      && normalizeRotation(left.rotation) === normalizeRotation(right.rotation)
      && Boolean(left.flipped) === Boolean(right.flipped)
      && Boolean(left.placed) === Boolean(right.placed);
  }

  function placePiece(state, level, pieceId, placement) {
    const check = canPlacePiece(state, level, pieceId, placement);
    if (!check.valid) return cloneState(state);
    const normalized = {
      row: placement.row,
      column: placement.column,
      rotation: normalizeRotation(placement.rotation),
      flipped: Boolean(placement.flipped),
      placed: true,
    };
    if (placementsEqual(state.placements[pieceId], normalized)) return cloneState(state);
    return commitPlacementChange(state, level, (next) => {
      next.placements[pieceId] = normalized;
    });
  }

  function removePiece(state, level, pieceId) {
    const current = state.placements && state.placements[pieceId];
    if (!current || !current.placed) return cloneState(state);
    return commitPlacementChange(state, level, (next) => {
      next.placements[pieceId] = {
        ...next.placements[pieceId],
        row: null,
        column: null,
        placed: false,
      };
    });
  }

  function nextDistinctTransform(piece, current, mode) {
    const currentSignature = cellsSignature(
      getTransformedCells(piece, current.rotation, current.flipped),
    );
    if (mode === 'flip') {
      if (!piece.allowFlip) return null;
      const candidate = {
        rotation: normalizeRotation(current.rotation),
        flipped: !current.flipped,
      };
      return cellsSignature(getTransformedCells(piece, candidate.rotation, candidate.flipped))
        === currentSignature ? null : candidate;
    }
    if (piece.allowRotate === false) return null;
    for (let step = 1; step <= 4; step += 1) {
      const candidate = {
        rotation: normalizeRotation(current.rotation + step),
        flipped: Boolean(current.flipped),
      };
      if (cellsSignature(getTransformedCells(piece, candidate.rotation, candidate.flipped))
          !== currentSignature) return candidate;
    }
    return null;
  }

  function transformPiece(state, level, pieceId, mode) {
    const piece = findPiece(level, pieceId);
    const current = state.placements && state.placements[pieceId];
    if (!piece || !current || state.status !== 'playing') return cloneState(state);
    const transform = nextDistinctTransform(piece, current, mode);
    if (!transform) return cloneState(state);
    const candidate = { ...current, ...transform };
    if (current.placed && !canPlacePiece(state, level, pieceId, candidate).valid) {
      return cloneState(state);
    }
    return commitPlacementChange(state, level, (next) => {
      next.placements[pieceId] = { ...next.placements[pieceId], ...transform };
    });
  }

  function rotatePiece(state, level, pieceId) {
    return transformPiece(state, level, pieceId, 'rotate');
  }

  function flipPiece(state, level, pieceId) {
    return transformPiece(state, level, pieceId, 'flip');
  }

  function undo(state, level) {
    if (!state || state.status !== 'playing' || !state.history.length) return cloneState(state);
    const next = cloneState(state);
    const previous = next.history.pop();
    next.placements = Object.fromEntries(
      Object.entries(previous.placements).map(([id, placement]) => [id, { ...placement }]),
    );
    next.movesUsed = state.movesUsed + 1;
    next.elapsed = state.elapsed;
    next.hintsUsed = state.hintsUsed;
    return updateTerminalStatus(next, level);
  }

  function transformDistance(piece, from, target) {
    const targetSignature = cellsSignature(getTransformedCells(piece, target.rotation, target.flipped));
    const start = {
      rotation: normalizeRotation(from.rotation),
      flipped: Boolean(from.flipped && piece.allowFlip),
    };
    const queue = [{ ...start, distance: 0 }];
    const visited = new Set();
    while (queue.length) {
      const current = queue.shift();
      const key = `${current.rotation}:${Number(current.flipped)}`;
      if (visited.has(key)) continue;
      visited.add(key);
      if (cellsSignature(getTransformedCells(piece, current.rotation, current.flipped))
          === targetSignature) return current.distance;
      for (const mode of ['rotate', 'flip']) {
        const next = nextDistinctTransform(piece, current, mode);
        if (next) queue.push({ ...next, distance: current.distance + 1 });
      }
    }
    return 0;
  }

  function calculateParMoves(level) {
    let moves = (level.pieces || []).length;
    for (const piece of level.pieces || []) {
      const solution = level.solution && level.solution[piece.id];
      if (!solution) continue;
      moves += transformDistance(
        piece,
        {
          rotation: normalizeRotation(piece.initialRotation || 0),
          flipped: Boolean(piece.initialFlipped && piece.allowFlip),
        },
        solution,
      );
    }
    return moves;
  }

  function calculateStars(state, level) {
    if (!state || state.status !== 'completed') return 0;
    if (state.hintsUsed === 0 && state.movesUsed <= level.parMoves + 2) return 3;
    if (state.hintsUsed <= 1 && state.movesUsed <= level.moveLimit) return 2;
    return 1;
  }

  function isCorrectPlacement(pieceId, placement, level) {
    const solution = level.solution && level.solution[pieceId];
    if (!placement || !placement.placed || !solution) return false;
    const piece = findPiece(level, pieceId);
    if (!piece) return false;
    return placement.row === solution.row
      && placement.column === solution.column
      && cellsSignature(getTransformedCells(piece, placement.rotation, placement.flipped))
        === cellsSignature(getTransformedCells(piece, solution.rotation, solution.flipped));
  }

  function getHint(state, level, previousPieceIds) {
    const candidates = (level.pieces || [])
      .filter((piece) => !isCorrectPlacement(piece.id, state.placements[piece.id], level))
      .sort((a, b) => {
        const transformDifference = getUniqueTransforms(a).length - getUniqueTransforms(b).length;
        return transformDifference || b.cells.length - a.cells.length || a.id.localeCompare(b.id);
      });
    const excluded = new Set(
      Array.isArray(previousPieceIds) ? previousPieceIds : previousPieceIds ? [previousPieceIds] : [],
    );
    const piece = candidates.find((candidate) => !excluded.has(candidate.id)) || candidates[0];
    if (!piece) return null;
    const solution = level.solution[piece.id];
    const current = state.placements[piece.id];
    let message = `提示：${piece.label || '這個拼塊'}適合先放置。`;
    if (current && current.placed) message = `提示：請重新確認${piece.label || '這個拼塊'}的位置。`;
    else if (current && Boolean(current.flipped) !== Boolean(solution.flipped)) message = `提示：${piece.label || '這個拼塊'}需要翻面。`;
    else if (current && normalizeRotation(current.rotation) !== normalizeRotation(solution.rotation)) message = `提示：請旋轉${piece.label || '這個拼塊'}。`;
    return { pieceId: piece.id, placement: { ...solution }, message };
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') return ['關卡必須是物件'];
    if (!/^L\d{3}$/.test(level.id || '')) errors.push('關卡 ID 格式無效');
    if (!Number.isInteger(level.rows) || !Number.isInteger(level.columns)) errors.push('棋盤尺寸無效');
    const groups = [
      ['fillableCells', level.fillableCells || []],
      ['blockedCells', level.blockedCells || []],
      ['fixedItems', (level.fixedItems || []).flatMap((item) => item.cells || [])],
    ];
    const occupied = new Map();
    for (const [name, cells] of groups) {
      const local = new Set();
      for (const [row, column] of cells) {
        const key = coordinateKey(row, column);
        if (!isInsideBoard(row, column, level)) errors.push(`${name} 超出棋盤：${key}`);
        if (local.has(key)) errors.push(`${name} 座標重複：${key}`);
        if (occupied.has(key)) errors.push(`${name} 與 ${occupied.get(key)} 重疊：${key}`);
        local.add(key);
        occupied.set(key, name);
      }
    }
    const ids = new Set();
    let pieceCells = 0;
    for (const piece of level.pieces || []) {
      if (!piece.id || ids.has(piece.id)) errors.push('拼塊 ID 缺少或重複');
      ids.add(piece.id);
      const normalized = normalizeCells(piece.cells || []);
      if (new Set(normalized.map((cell) => cell.join(','))).size !== normalized.length) {
        errors.push(`${piece.id} 含重複座標`);
      }
      if (!isConnectedCells(normalized)) errors.push(`${piece.id} 不是正交連通`);
      pieceCells += normalized.length;
    }
    if (pieceCells !== makeCellSet(level.fillableCells).size) errors.push('拼塊格數與可填格不一致');
    if (level.moveLimit < level.parMoves) errors.push('moveLimit 小於 parMoves');
    return errors;
  }

  function isConnectedCells(cells) {
    if (!cells.length) return false;
    const remaining = new Set(cells.map((cell) => cell.join(',')));
    const queue = [cells[0]];
    remaining.delete(cells[0].join(','));
    while (queue.length) {
      const [row, column] = queue.shift();
      for (const [nextRow, nextColumn] of [[row - 1, column], [row + 1, column], [row, column - 1], [row, column + 1]]) {
        const key = `${nextRow},${nextColumn}`;
        if (!remaining.has(key)) continue;
        remaining.delete(key);
        queue.push([nextRow, nextColumn]);
      }
    }
    return remaining.size === 0;
  }

  function validateStoredSolution(level) {
    const errors = validateLevelDefinition(level);
    let state = createInitialState(level);
    for (const piece of level.pieces || []) {
      const solution = level.solution && level.solution[piece.id];
      if (!solution) {
        errors.push(`${piece.id} 缺少保存答案`);
        continue;
      }
      const check = canPlacePiece(state, level, piece.id, solution);
      if (!check.valid) errors.push(`${piece.id} 保存答案無效：${check.reason}`);
      else {
        state.placements[piece.id] = {
          ...solution,
          rotation: normalizeRotation(solution.rotation),
          flipped: Boolean(solution.flipped),
          placed: true,
        };
      }
    }
    if (!isPuzzleComplete(state, level)) errors.push('保存答案沒有完整覆蓋');
    return errors;
  }

  function serializeSession(state) {
    return {
      levelId: state.levelId,
      placements: Object.fromEntries(
        Object.entries(state.placements || {}).map(([id, placement]) => [id, { ...placement }]),
      ),
      movesUsed: state.movesUsed,
      elapsed: state.elapsed,
      hintsUsed: state.hintsUsed,
      status: state.status,
      history: (state.history || []).slice(-MAX_UNDO).map((snapshot) => ({
        placements: Object.fromEntries(
          Object.entries(snapshot.placements || {}).map(([id, placement]) => [id, { ...placement }]),
        ),
      })),
    };
  }

  function normalizeSessionPlacements(placements, level) {
    if (!placements || typeof placements !== 'object') return null;
    const pieceIds = new Set((level.pieces || []).map((piece) => piece.id));
    if (Object.keys(placements).some((id) => !pieceIds.has(id))) return null;
    if ([...pieceIds].some((id) => !placements[id] || typeof placements[id] !== 'object')) return null;
    const state = createInitialState(level);
    for (const piece of level.pieces) {
      const placement = placements[piece.id];
      const normalized = {
        row: placement.placed ? Number(placement.row) : null,
        column: placement.placed ? Number(placement.column) : null,
        rotation: normalizeRotation(placement.rotation),
        flipped: Boolean(placement.flipped && piece.allowFlip),
        placed: Boolean(placement.placed),
      };
      if (normalized.placed && !canPlacePiece(state, level, piece.id, normalized).valid) return null;
      state.placements[piece.id] = normalized;
    }
    return state.placements;
  }

  function deserializeSession(data, level) {
    if (!data || typeof data !== 'object' || data.levelId !== level.id) return null;
    const placements = normalizeSessionPlacements(data.placements, level);
    if (!placements) return null;
    const state = createInitialState(level);
    state.movesUsed = Math.max(0, Math.trunc(Number(data.movesUsed) || 0));
    state.elapsed = Math.max(0, Math.trunc(Number(data.elapsed) || 0));
    state.hintsUsed = Math.max(0, Math.trunc(Number(data.hintsUsed) || 0));
    state.placements = placements;
    state.history = (Array.isArray(data.history) ? data.history : [])
      .map((snapshot) => normalizeSessionPlacements(snapshot?.placements, level))
      .filter(Boolean)
      .slice(-MAX_UNDO)
      .map((snapshotPlacements) => ({ placements: snapshotPlacements }));
    state.status = isPuzzleComplete(state, level)
      ? 'completed'
      : state.movesUsed >= level.moveLimit ? 'failed' : 'playing';
    return state;
  }

  function advancePlayTime(state, totalPlaySeconds) {
    const next = cloneState(state);
    next.elapsed = Math.max(0, Math.trunc(Number(next.elapsed) || 0)) + 1;
    return {
      state: next,
      totalPlaySeconds: Math.max(0, Math.trunc(Number(totalPlaySeconds) || 0)) + 1,
    };
  }

  function formatElapsedTime(seconds) {
    const safe = Math.max(0, Math.trunc(Number(seconds) || 0));
    return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
  }

  return {
    coordinateKey,
    normalizeCells,
    rotateCells,
    flipCells,
    cellsSignature,
    getUniqueTransforms,
    getTransformedCells,
    getAbsoluteCells,
    isInsideBoard,
    isFillableCell,
    isBlockedCell,
    createInitialState,
    cloneState,
    canPlacePiece,
    placePiece,
    removePiece,
    rotatePiece,
    flipPiece,
    undo,
    buildOccupancy,
    countFilledCells,
    getRemainingPieces,
    isPuzzleComplete,
    calculateParMoves,
    calculateStars,
    getHint,
    validateLevelDefinition,
    validateStoredSolution,
    serializeSession,
    deserializeSession,
    advancePlayTime,
    formatElapsedTime,
    isConnectedCells,
  };
});
