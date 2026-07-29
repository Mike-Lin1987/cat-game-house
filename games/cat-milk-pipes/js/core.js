(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatMilkPipeCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const DIRECTIONS = Object.freeze(['U', 'R', 'D', 'L']);
  const VECTORS = Object.freeze({
    U: [-1, 0], R: [0, 1], D: [1, 0], L: [0, -1],
  });
  const OPPOSITE = Object.freeze({ U: 'D', R: 'L', D: 'U', L: 'R' });
  const BASE = Object.freeze({
    end: ['U'],
    straight: ['U', 'D'],
    elbow: ['U', 'R'],
    tee: ['U', 'R', 'D'],
    cross: ['U', 'R', 'D', 'L'],
  });
  const STATE_COUNTS = Object.freeze({
    end: 4, straight: 2, elbow: 4, tee: 4, cross: 1,
  });

  function getRotationStateCount(shape) {
    return STATE_COUNTS[shape] || 0;
  }

  function normalizeRotation(shape, rotation) {
    const count = getRotationStateCount(shape);
    if (!count || !Number.isInteger(rotation)) return 0;
    return ((rotation % count) + count) % count;
  }

  function getBaseConnectors(shape) {
    return BASE[shape] ? [...BASE[shape]] : [];
  }

  function rotateConnectors(connectors, rotation) {
    const turns = ((rotation % 4) + 4) % 4;
    return connectors
      .map((direction) => DIRECTIONS[(DIRECTIONS.indexOf(direction) + turns) % 4])
      .sort((a, b) => DIRECTIONS.indexOf(a) - DIRECTIONS.indexOf(b));
  }

  function getTileConnectors(tile, rotation) {
    if (!tile) return [];
    return rotateConnectors(
      getBaseConnectors(tile.shape),
      normalizeRotation(tile.shape, rotation),
    );
  }

  function getOppositeDirection(direction) {
    return OPPOSITE[direction] || null;
  }

  function getNeighborPosition(row, column, direction) {
    const vector = VECTORS[direction] || [0, 0];
    return { row: row + vector[0], column: column + vector[1] };
  }

  function isInsideBoard(row, column, size) {
    return Number.isInteger(row) && Number.isInteger(column)
      && row >= 0 && column >= 0 && row < size && column < size;
  }

  function key(row, column) {
    return `${row},${column}`;
  }

  function parseKey(value) {
    const [row, column] = value.split(',').map(Number);
    return { row, column };
  }

  function activePositions(level) {
    const result = [];
    for (let row = 0; row < level.size; row += 1) {
      for (let column = 0; column < level.size; column += 1) {
        if (level.tiles[row][column]) result.push({ row, column });
      }
    }
    return result;
  }

  function createInitialState(level) {
    return {
      levelId: level.id,
      rotations: level.tiles.map((row) => row.map((tile) => (
        tile ? normalizeRotation(tile.shape, tile.initialRotation) : null
      ))),
      movesUsed: 0,
      elapsed: 0,
      hintsUsed: 0,
      completed: false,
      failed: false,
      undoHistory: [],
      lastHintKey: null,
    };
  }

  function cloneState(state) {
    return {
      ...state,
      rotations: state.rotations.map((row) => [...row]),
      undoHistory: Array.isArray(state.undoHistory)
        ? state.undoHistory.map((entry) => ({ ...entry }))
        : [],
    };
  }

  function canRotateTile(level, row, column) {
    if (!isInsideBoard(row, column, level.size)) return false;
    const tile = level.tiles[row][column];
    return Boolean(tile)
      && !tile.locked
      && tile.role !== 'source'
      && tile.shape !== 'cross'
      && getRotationStateCount(tile.shape) > 1;
  }

  function rotateTile(state, level, row, column, maxUndoStates = 100) {
    if (!canRotateTile(level, row, column) || state.completed || state.failed) return state;
    const next = cloneState(state);
    const tile = level.tiles[row][column];
    const previousRotation = next.rotations[row][column];
    const nextRotation = normalizeRotation(tile.shape, previousRotation + 1);
    next.undoHistory.push({
      row, column, previousRotation, nextRotation,
    });
    if (next.undoHistory.length > maxUndoStates) next.undoHistory.shift();
    next.rotations[row][column] = nextRotation;
    next.movesUsed += 1;
    next.lastHintKey = null;
    return next;
  }

  function undoLastRotation(state, level) {
    if (!Array.isArray(state.undoHistory) || state.undoHistory.length === 0
      || state.completed || state.failed) return state;
    const next = cloneState(state);
    const entry = next.undoHistory.pop();
    if (!canRotateTile(level, entry.row, entry.column)) return state;
    next.rotations[entry.row][entry.column] = normalizeRotation(
      level.tiles[entry.row][entry.column].shape,
      entry.previousRotation,
    );
    next.movesUsed += 1;
    next.lastHintKey = null;
    return next;
  }

  function buildConnectionGraph(state, level) {
    const graph = {};
    for (const position of activePositions(level)) {
      graph[key(position.row, position.column)] = [];
    }
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      const connectors = getTileConnectors(tile, state.rotations[row][column]);
      for (const direction of connectors) {
        const neighbor = getNeighborPosition(row, column, direction);
        if (!isInsideBoard(neighbor.row, neighbor.column, level.size)) continue;
        const neighborTile = level.tiles[neighbor.row][neighbor.column];
        if (!neighborTile) continue;
        const neighborConnectors = getTileConnectors(
          neighborTile,
          state.rotations[neighbor.row][neighbor.column],
        );
        if (neighborConnectors.includes(getOppositeDirection(direction))) {
          const from = key(row, column);
          const to = key(neighbor.row, neighbor.column);
          if (!graph[from].includes(to)) graph[from].push(to);
        }
      }
    }
    return graph;
  }

  function findLeaks(state, level) {
    const leaks = [];
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      for (const direction of getTileConnectors(tile, state.rotations[row][column])) {
        const neighbor = getNeighborPosition(row, column, direction);
        let reason = null;
        if (!isInsideBoard(neighbor.row, neighbor.column, level.size)) {
          reason = 'outside';
        } else if (!level.tiles[neighbor.row][neighbor.column]) {
          reason = 'blocked';
        } else {
          const opposite = getOppositeDirection(direction);
          const neighborConnectors = getTileConnectors(
            level.tiles[neighbor.row][neighbor.column],
            state.rotations[neighbor.row][neighbor.column],
          );
          if (!neighborConnectors.includes(opposite)) reason = 'unmatched';
        }
        if (reason) leaks.push({ row, column, direction, reason });
      }
    }
    return leaks;
  }

  function findSourceKey(level) {
    const source = activePositions(level).find(
      ({ row, column }) => level.tiles[row][column].role === 'source',
    );
    return source ? key(source.row, source.column) : null;
  }

  function traverse(graph, start) {
    const visited = new Set();
    if (!start || !graph[start]) return visited;
    const queue = [start];
    visited.add(start);
    while (queue.length) {
      const current = queue.shift();
      for (const next of graph[current]) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return visited;
  }

  function findPoweredTiles(state, level) {
    return traverse(buildConnectionGraph(state, level), findSourceKey(level));
  }

  function countMatchedEdges(state, level) {
    const graph = buildConnectionGraph(state, level);
    return Object.values(graph).reduce((total, neighbors) => total + neighbors.length, 0) / 2;
  }

  function findConnectedComponents(state, level) {
    const graph = buildConnectionGraph(state, level);
    const remaining = new Set(Object.keys(graph));
    const components = [];
    while (remaining.size) {
      const first = remaining.values().next().value;
      const component = traverse(graph, first);
      for (const value of component) remaining.delete(value);
      components.push(component);
    }
    return components;
  }

  function detectCycle(state, level) {
    const graph = buildConnectionGraph(state, level);
    const visited = new Set();
    function visit(current, parent) {
      visited.add(current);
      for (const next of graph[current]) {
        if (!visited.has(next)) {
          if (visit(next, current)) return true;
        } else if (next !== parent) {
          return true;
        }
      }
      return false;
    }
    return Object.keys(graph).some((node) => !visited.has(node) && visit(node, null));
  }

  function countConnectedBowls(state, level) {
    const powered = findPoweredTiles(state, level);
    return activePositions(level).filter(({ row, column }) => (
      level.tiles[row][column].role === 'bowl' && powered.has(key(row, column))
    )).length;
  }

  function analyzeBoard(state, level) {
    const positions = activePositions(level);
    const graph = buildConnectionGraph(state, level);
    const powered = traverse(graph, findSourceKey(level));
    const leaks = findLeaks(state, level);
    const matchedEdgeCount = Object.values(graph)
      .reduce((total, neighbors) => total + neighbors.length, 0) / 2;
    const components = findConnectedComponents(state, level);
    const cycle = detectCycle(state, level);
    const bowls = positions.filter(({ row, column }) => (
      level.tiles[row][column].role === 'bowl'
    ));
    const connectedBowls = bowls.filter(({ row, column }) => powered.has(key(row, column))).length;
    const invalidLeaves = positions.filter(({ row, column }) => {
      const tile = level.tiles[row][column];
      return graph[key(row, column)].length === 1
        && tile.role !== 'source' && tile.role !== 'bowl';
    });
    return {
      graph,
      powered,
      leaks,
      matchedEdgeCount,
      components,
      cycle,
      activeTileCount: positions.length,
      bowlCount: bowls.length,
      connectedBowls,
      invalidLeaves,
    };
  }

  function isPuzzleComplete(state, level) {
    const analysis = analyzeBoard(state, level);
    return analysis.activeTileCount > 1
      && analysis.leaks.length === 0
      && analysis.components.length === 1
      && analysis.powered.size === analysis.activeTileCount
      && analysis.connectedBowls === analysis.bowlCount
      && !analysis.cycle
      && analysis.matchedEdgeCount === analysis.activeTileCount - 1
      && analysis.invalidLeaves.length === 0;
  }

  function clockwiseDistance(shape, from, to) {
    const count = getRotationStateCount(shape);
    return (normalizeRotation(shape, to) - normalizeRotation(shape, from) + count) % count;
  }

  function calculateOptimalMoves(level) {
    let total = 0;
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      if (canRotateTile(level, row, column)) {
        total += clockwiseDistance(tile.shape, tile.initialRotation, tile.solutionRotation);
      }
    }
    return total;
  }

  function calculateStars(state, level) {
    if (!state.completed) return 0;
    if (state.hintsUsed === 0 && state.movesUsed <= level.optimalMoves + 2) return 3;
    if (state.hintsUsed <= 1 && state.movesUsed <= level.moveLimit) return 2;
    return 1;
  }

  function getHint(state, level) {
    const source = parseKey(findSourceKey(level) || '0,0');
    const candidates = activePositions(level)
      .filter(({ row, column }) => {
        const tile = level.tiles[row][column];
        return canRotateTile(level, row, column)
          && normalizeRotation(tile.shape, state.rotations[row][column])
            !== normalizeRotation(tile.shape, tile.solutionRotation);
      })
      .sort((a, b) => {
        const aDistance = Math.abs(a.row - source.row) + Math.abs(a.column - source.column);
        const bDistance = Math.abs(b.row - source.row) + Math.abs(b.column - source.column);
        return aDistance - bDistance || a.row - b.row || a.column - b.column;
      });
    if (!candidates.length) return null;
    const preferred = candidates.find(
      ({ row, column }) => key(row, column) !== state.lastHintKey,
    ) || candidates[0];
    const tile = level.tiles[preferred.row][preferred.column];
    return {
      ...preferred,
      key: key(preferred.row, preferred.column),
      shape: tile.shape,
      message: `提示：第${preferred.row + 1}列第${preferred.column + 1}格的管線方向不正確`,
    };
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') return ['關卡必須是物件'];
    if (!/^L\d{3}$/.test(level.id || '')) errors.push('關卡 ID 格式錯誤');
    if (!Number.isInteger(level.size) || level.size < 2) errors.push('棋盤尺寸錯誤');
    if (!Array.isArray(level.tiles) || level.tiles.length !== level.size
      || level.tiles.some((row) => !Array.isArray(row) || row.length !== level.size)) {
      errors.push('tiles 矩陣尺寸錯誤');
      return errors;
    }
    let sourceCount = 0;
    let bowlCount = 0;
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      if (!BASE[tile.shape]) errors.push(`${key(row, column)} shape 無效`);
      if (!['source', 'bowl', 'pipe'].includes(tile.role)) errors.push(`${key(row, column)} role 無效`);
      if (tile.role === 'source') {
        sourceCount += 1;
        if (!tile.locked) errors.push(`${key(row, column)} source 必須 locked`);
      }
      if (tile.role === 'bowl') {
        bowlCount += 1;
        if (tile.shape !== 'end') errors.push(`${key(row, column)} bowl 必須是 end`);
      }
      for (const field of ['initialRotation', 'solutionRotation']) {
        if (normalizeRotation(tile.shape, tile[field]) !== tile[field]) {
          errors.push(`${key(row, column)} ${field} 無效`);
        }
      }
      if (tile.locked && tile.initialRotation !== tile.solutionRotation) {
        errors.push(`${key(row, column)} locked 方向不一致`);
      }
    }
    if (sourceCount !== 1) errors.push('每關必須剛好一個 source');
    if (bowlCount < 2) errors.push('每關至少需要兩個 bowl');
    if (Number.isFinite(level.optimalMoves)
      && calculateOptimalMoves(level) !== level.optimalMoves) errors.push('optimalMoves 錯誤');
    if (Number.isFinite(level.moveLimit) && level.moveLimit < level.optimalMoves) {
      errors.push('moveLimit 不足');
    }
    return errors;
  }

  function validateStoredSolution(level) {
    const state = createInitialState(level);
    for (const { row, column } of activePositions(level)) {
      state.rotations[row][column] = level.tiles[row][column].solutionRotation;
    }
    const analysis = analyzeBoard(state, level);
    return {
      valid: isPuzzleComplete(state, level),
      ...analysis,
    };
  }

  function serializeSession(state) {
    return JSON.parse(JSON.stringify({
      levelId: state.levelId,
      rotations: state.rotations,
      movesUsed: state.movesUsed,
      elapsed: state.elapsed,
      hintsUsed: state.hintsUsed,
      completed: Boolean(state.completed),
      failed: Boolean(state.failed),
      undoHistory: Array.isArray(state.undoHistory) ? state.undoHistory.slice(-100) : [],
      lastHintKey: state.lastHintKey || null,
    }));
  }

  function deserializeSession(data, level) {
    if (!data || data.levelId !== level.id || !Array.isArray(data.rotations)
      || data.rotations.length !== level.size) return null;
    const state = createInitialState(level);
    for (let row = 0; row < level.size; row += 1) {
      if (!Array.isArray(data.rotations[row]) || data.rotations[row].length !== level.size) return null;
      for (let column = 0; column < level.size; column += 1) {
        const tile = level.tiles[row][column];
        const rotation = data.rotations[row][column];
        if (!tile && rotation !== null) return null;
        if (tile && (!Number.isInteger(rotation)
          || normalizeRotation(tile.shape, rotation) !== rotation)) return null;
        state.rotations[row][column] = rotation;
      }
    }
    for (const field of ['movesUsed', 'elapsed', 'hintsUsed']) {
      if (!Number.isInteger(data[field]) || data[field] < 0) return null;
      state[field] = data[field];
    }
    state.completed = Boolean(data.completed);
    state.failed = Boolean(data.failed);
    state.undoHistory = Array.isArray(data.undoHistory)
      ? data.undoHistory.slice(-100).filter((entry) => (
        Number.isInteger(entry.row) && Number.isInteger(entry.column)
      ))
      : [];
    state.lastHintKey = typeof data.lastHintKey === 'string' ? data.lastHintKey : null;
    return state;
  }

  function formatElapsedTime(seconds) {
    const value = Math.max(0, Math.floor(Number(seconds) || 0));
    return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
  }

  return Object.freeze({
    DIRECTIONS,
    normalizeRotation,
    getRotationStateCount,
    getBaseConnectors,
    rotateConnectors,
    getTileConnectors,
    getOppositeDirection,
    getNeighborPosition,
    isInsideBoard,
    createInitialState,
    cloneState,
    rotateTile,
    undoLastRotation,
    canRotateTile,
    buildConnectionGraph,
    findPoweredTiles,
    findLeaks,
    countMatchedEdges,
    findConnectedComponents,
    detectCycle,
    countConnectedBowls,
    analyzeBoard,
    isPuzzleComplete,
    calculateOptimalMoves,
    calculateStars,
    getHint,
    validateLevelDefinition,
    validateStoredSolution,
    serializeSession,
    deserializeSession,
    formatElapsedTime,
  });
});
