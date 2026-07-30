(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatCourierCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const PASSABLE = new Set(['road', 'bridge', 'plaza']);
  const DIRECTIONS = Object.freeze({
    up: [-1, 0],
    right: [0, 1],
    down: [1, 0],
    left: [0, -1],
  });

  function cellKey(row, column) {
    return `${row},${column}`;
  }

  function sameCell(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a[0] === b[0] && a[1] === b[1];
  }

  function cloneCell(cell) {
    return [cell[0], cell[1]];
  }

  function isInsideBoard(row, column, level) {
    return Number.isInteger(row) && Number.isInteger(column)
      && row >= 0 && column >= 0 && row < level.rows && column < level.columns;
  }

  function isPassableTerrain(terrainType) {
    return PASSABLE.has(terrainType);
  }

  function areOrthogonallyAdjacent(cellA, cellB) {
    if (!Array.isArray(cellA) || !Array.isArray(cellB)) return false;
    return Math.abs(cellA[0] - cellB[0]) + Math.abs(cellA[1] - cellB[1]) === 1;
  }

  function getDirection(cellA, cellB) {
    if (!areOrthogonallyAdjacent(cellA, cellB)) return null;
    const rowDelta = cellB[0] - cellA[0];
    const columnDelta = cellB[1] - cellA[1];
    return Object.keys(DIRECTIONS).find((key) => (
      DIRECTIONS[key][0] === rowDelta && DIRECTIONS[key][1] === columnDelta
    )) || null;
  }

  function getOppositeDirection(direction) {
    return { up: 'down', right: 'left', down: 'up', left: 'right' }[direction] || null;
  }

  function isOneWayMoveAllowed(level, from, to) {
    if (!areOrthogonallyAdjacent(from, to)) return false;
    const edge = (level.oneWayEdges || []).find((candidate) => (
      (sameCell(candidate.from, from) && sameCell(candidate.to, to))
      || (sameCell(candidate.from, to) && sameCell(candidate.to, from))
    ));
    return !edge || (sameCell(edge.from, from) && sameCell(edge.to, to));
  }

  function getStopAtPosition(level, row, column) {
    return (level.stops || []).find((stop) => sameCell(stop.position, [row, column])) || null;
  }

  function calculateStopProgress(level, path) {
    let progress = 0;
    for (const cell of path || []) {
      const stop = getStopAtPosition(level, cell[0], cell[1]);
      if (!stop) continue;
      if (stop.order === progress) progress += 1;
      else if (stop.order > progress) break;
    }
    return progress;
  }

  function createInitialState(level) {
    return {
      levelId: level.id,
      path: [cloneCell(level.start)],
      stopProgress: 0,
      elapsed: 0,
      hintsUsed: 0,
      hintRemaining: 3,
      status: 'playing',
      history: [],
      lastHintKey: '',
    };
  }

  function cloneState(state) {
    return {
      ...state,
      path: (state.path || []).map(cloneCell),
      history: Array.isArray(state.history)
        ? state.history.map((entry) => ({
          ...entry,
          path: Array.isArray(entry.path) ? entry.path.map(cloneCell) : [],
        }))
        : [],
    };
  }

  function validatePath(level, path) {
    const errors = [];
    if (!Array.isArray(path) || path.length === 0) {
      return { valid: false, errors: ['路線不得為空'], stopProgress: 0, fuelUsed: 0 };
    }
    if (!sameCell(path[0], level.start)) errors.push('路線必須從起點開始');
    const visited = new Set();
    let progress = 0;
    for (let index = 0; index < path.length; index += 1) {
      const cell = path[index];
      if (!Array.isArray(cell) || cell.length !== 2
        || !isInsideBoard(cell[0], cell[1], level)) {
        errors.push(`第 ${index + 1} 格超出地圖`);
        continue;
      }
      const key = cellKey(cell[0], cell[1]);
      if (visited.has(key)) errors.push(`第 ${index + 1} 格重複使用道路`);
      visited.add(key);
      if (!isPassableTerrain(level.terrain[cell[0]]?.[cell[1]])) {
        errors.push(`第 ${index + 1} 格不可通行`);
      }
      if (index > 0) {
        if (!areOrthogonallyAdjacent(path[index - 1], cell)) {
          errors.push(`第 ${index + 1} 格不是正交相鄰`);
        } else if (!isOneWayMoveAllowed(level, path[index - 1], cell)) {
          errors.push(`第 ${index + 1} 格逆向進入單行道`);
        }
      }
      const stop = getStopAtPosition(level, cell[0], cell[1]);
      if (stop) {
        if (stop.order === progress) progress += 1;
        else if (stop.order > progress) errors.push(`提前進入第 ${stop.order + 1} 站`);
      }
    }
    const fuelUsed = Math.max(0, path.length - 1);
    if (fuelUsed > level.fuelLimit) errors.push('路線超過油量限制');
    return { valid: errors.length === 0, errors, stopProgress: progress, fuelUsed };
  }

  function getNextRequiredStop(level, path) {
    return level.stops[calculateStopProgress(level, path)] || null;
  }

  function canExtendPath(state, level, nextCell) {
    if (!Array.isArray(nextCell) || nextCell.length !== 2
      || !isInsideBoard(nextCell[0], nextCell[1], level)) {
      return { ok: false, reason: 'outside' };
    }
    const path = state.path || [];
    const end = path[path.length - 1];
    if (!areOrthogonallyAdjacent(end, nextCell)) return { ok: false, reason: 'adjacency' };
    if (!isPassableTerrain(level.terrain[nextCell[0]][nextCell[1]])) {
      return { ok: false, reason: 'terrain' };
    }
    if (!isOneWayMoveAllowed(level, end, nextCell)) return { ok: false, reason: 'one-way' };
    const previousIndex = path.findIndex((cell) => sameCell(cell, nextCell));
    if (previousIndex >= 0) return { ok: false, reason: 'visited', trimIndex: previousIndex };
    const progress = calculateStopProgress(level, path);
    const stop = getStopAtPosition(level, nextCell[0], nextCell[1]);
    if (stop && stop.order > progress) return { ok: false, reason: 'future-stop' };
    if (path.length > level.fuelLimit) return { ok: false, reason: 'fuel' };
    return { ok: true, reason: null };
  }

  function snapshotForHistory(state) {
    return {
      path: (state.path || []).map(cloneCell),
      stopProgress: Number(state.stopProgress) || 0,
      status: state.status || 'playing',
    };
  }

  function withRecalculatedPath(state, level, path, addHistory = true) {
    const next = cloneState(state);
    if (addHistory) {
      next.history.push(snapshotForHistory(state));
      if (next.history.length > 100) next.history.splice(0, next.history.length - 100);
    }
    next.path = path.map(cloneCell);
    next.stopProgress = calculateStopProgress(level, next.path);
    next.status = 'playing';
    return next;
  }

  function extendPath(state, level, nextCell) {
    const check = canExtendPath(state, level, nextCell);
    if (check.reason === 'visited') return trimPathToCell(state, level, nextCell);
    if (!check.ok) return cloneState(state);
    return withRecalculatedPath(state, level, [...state.path, cloneCell(nextCell)]);
  }

  function trimPathToCell(state, level, cell) {
    const index = state.path.findIndex((candidate) => sameCell(candidate, cell));
    if (index < 0) return cloneState(state);
    return withRecalculatedPath(state, level, state.path.slice(0, index + 1));
  }

  function removeLastPathCell(state, level) {
    if (!state.path || state.path.length <= 1) return cloneState(state);
    return withRecalculatedPath(state, level, state.path.slice(0, -1));
  }

  function clearPath(state, level) {
    return withRecalculatedPath(state, level, [cloneCell(level.start)]);
  }

  function calculateFuelUsed(state) {
    return Math.max(0, (state.path?.length || 1) - 1);
  }

  function calculateFuelRemaining(state, level) {
    return Math.max(0, level.fuelLimit - calculateFuelUsed(state));
  }

  function isRouteComplete(state, level) {
    const validation = validatePath(level, state.path);
    return validation.valid
      && validation.stopProgress === level.stops.length
      && sameCell(state.path[state.path.length - 1], level.stops[level.stops.length - 1].position);
  }

  function calculateFinalStars(state, level) {
    if (!isRouteComplete(state, level)) return 0;
    const fuelUsed = calculateFuelUsed(state);
    if ((state.hintsUsed || 0) === 0 && fuelUsed === level.optimalSteps) return 3;
    if ((state.hintsUsed || 0) <= 1) return 2;
    return 1;
  }

  function calculateProjectedStars(state, level) {
    const fuelUsed = calculateFuelUsed(state);
    if ((state.hintsUsed || 0) === 0 && fuelUsed <= level.optimalSteps) return 3;
    if ((state.hintsUsed || 0) <= 1 && fuelUsed <= level.fuelLimit) return 2;
    return 1;
  }

  function getHint(state, level, solver) {
    if (!solver || typeof solver.solveFromPartialPath !== 'function') {
      return { available: false, reason: 'solver-unavailable' };
    }
    const result = solver.solveFromPartialPath(level, state.path, { maxSolutions: 1 });
    if (!result.solved || result.shortestPath.length <= state.path.length) {
      return { available: false, reason: 'dead-end' };
    }
    const nextCell = result.shortestPath[state.path.length];
    return {
      available: true,
      nextCell: cloneCell(nextCell),
      direction: getDirection(state.path[state.path.length - 1], nextCell),
      key: `${cellKey(...state.path[state.path.length - 1])}>${cellKey(...nextCell)}`,
    };
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') return ['關卡必須是物件'];
    if (!/^L\d{3}$/.test(level.id || '')) errors.push('關卡 ID 格式錯誤');
    if (!Number.isInteger(level.rows) || !Number.isInteger(level.columns)
      || level.rows < 1 || level.columns < 1) errors.push('地圖尺寸錯誤');
    if (!Array.isArray(level.terrain) || level.terrain.length !== level.rows
      || level.terrain.some((row) => !Array.isArray(row) || row.length !== level.columns)) {
      errors.push('terrain 尺寸錯誤');
      return errors;
    }
    if (!Array.isArray(level.start) || !isInsideBoard(level.start[0], level.start[1], level)
      || !isPassableTerrain(level.terrain[level.start[0]]?.[level.start[1]])) {
      errors.push('起點必須位於可通行格');
    }
    if (!Array.isArray(level.stops) || level.stops.length < 2) errors.push('至少需要兩個配送站');
    const stopKeys = new Set();
    for (const [index, stop] of (level.stops || []).entries()) {
      if (stop.order !== index) errors.push('配送站 order 必須連續');
      if (!Array.isArray(stop.position)
        || !isInsideBoard(stop.position[0], stop.position[1], level)
        || !isPassableTerrain(level.terrain[stop.position[0]]?.[stop.position[1]])) {
        errors.push(`第 ${index + 1} 站必須位於可通行格`);
        continue;
      }
      const key = cellKey(stop.position[0], stop.position[1]);
      if (stopKeys.has(key) || sameCell(stop.position, level.start)) errors.push('配送站位置重疊');
      stopKeys.add(key);
    }
    const edgeKeys = new Set();
    for (const edge of level.oneWayEdges || []) {
      const key = `${cellKey(...edge.from)}>${cellKey(...edge.to)}`;
      if (!areOrthogonallyAdjacent(edge.from, edge.to)) errors.push('單行道兩端必須相鄰');
      if (!isInsideBoard(edge.from[0], edge.from[1], level)
        || !isInsideBoard(edge.to[0], edge.to[1], level)
        || !isPassableTerrain(level.terrain[edge.from[0]]?.[edge.from[1]])
        || !isPassableTerrain(level.terrain[edge.to[0]]?.[edge.to[1]])) {
        errors.push('單行道兩端必須可通行');
      }
      if (edgeKeys.has(key)) errors.push('單行道不得重複');
      edgeKeys.add(key);
    }
    if (!Number.isInteger(level.fuelLimit) || level.fuelLimit < 1) errors.push('油量限制錯誤');
    return errors;
  }

  function validateStoredSolution(level) {
    const errors = validateLevelDefinition(level);
    const pathResult = validatePath(level, level.solutionPath);
    errors.push(...pathResult.errors);
    if (pathResult.stopProgress !== (level.stops || []).length) errors.push('保存答案未依序完成全部配送');
    if (!sameCell(level.solutionPath?.at(-1), level.stops?.at(-1)?.position)) {
      errors.push('保存答案未停在最後一站');
    }
    if (pathResult.fuelUsed !== level.optimalSteps) errors.push('保存答案步數與 optimalSteps 不符');
    if (level.optimalSteps > level.fuelLimit) errors.push('optimalSteps 超過 fuelLimit');
    return { ...pathResult, valid: errors.length === 0, errors };
  }

  function serializeSession(state) {
    return {
      levelId: state.levelId,
      path: (state.path || []).map(cloneCell),
      elapsed: Math.max(0, Math.floor(Number(state.elapsed) || 0)),
      hintsUsed: Math.max(0, Math.floor(Number(state.hintsUsed) || 0)),
      hintRemaining: Math.max(0, Math.floor(Number(state.hintRemaining) || 0)),
      status: ['playing', 'animating', 'completed'].includes(state.status)
        ? state.status : 'playing',
      history: (state.history || []).slice(-100).map((entry) => ({
        path: (entry.path || []).map(cloneCell),
      })),
    };
  }

  function deserializeSession(data, level) {
    if (!data || typeof data !== 'object' || (data.levelId && data.levelId !== level.id)) return null;
    const pathResult = validatePath(level, data.path);
    if (!pathResult.valid) return null;
    const state = createInitialState(level);
    state.path = data.path.map(cloneCell);
    state.stopProgress = pathResult.stopProgress;
    state.elapsed = Math.max(0, Math.floor(Number(data.elapsed) || 0));
    state.hintsUsed = Math.max(0, Math.floor(Number(data.hintsUsed) || 0));
    state.hintRemaining = Math.max(0, Math.min(3, Math.floor(Number(data.hintRemaining) || 0)));
    state.status = data.status === 'completed' ? 'completed' : 'playing';
    state.history = Array.isArray(data.history)
      ? data.history.slice(-100).filter((entry) => validatePath(level, entry.path).valid)
        .map((entry) => ({ path: entry.path.map(cloneCell) }))
      : [];
    return state;
  }

  function formatElapsedTime(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds) || 0));
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  return Object.freeze({
    DIRECTIONS,
    cellKey,
    sameCell,
    isInsideBoard,
    isPassableTerrain,
    areOrthogonallyAdjacent,
    getDirection,
    getOppositeDirection,
    isOneWayMoveAllowed,
    getStopAtPosition,
    createInitialState,
    cloneState,
    validatePath,
    calculateStopProgress,
    getNextRequiredStop,
    canExtendPath,
    extendPath,
    trimPathToCell,
    removeLastPathCell,
    clearPath,
    calculateFuelUsed,
    calculateFuelRemaining,
    isRouteComplete,
    calculateProjectedStars,
    calculateFinalStars,
    getHint,
    validateLevelDefinition,
    validateStoredSolution,
    serializeSession,
    deserializeSession,
    formatElapsedTime,
  });
});
