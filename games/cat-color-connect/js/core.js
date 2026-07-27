(function initCatConnectCore(root, factory) {
  'use strict';

  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatConnectCore = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createCore() {
  'use strict';

  const DIRECTIONS = Object.freeze([
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]);

  function sameCell(left, right) {
    return (
      Array.isArray(left) &&
      Array.isArray(right) &&
      left[0] === right[0] &&
      left[1] === right[1]
    );
  }

  function cellKey(cell) {
    return `${cell[0]},${cell[1]}`;
  }

  function clonePaths(paths) {
    return Object.fromEntries(
      Object.entries(paths || {}).map(([pairId, path]) => [
        pairId,
        Array.isArray(path) ? path.map((cell) => [...cell]) : [],
      ]),
    );
  }

  function getBoardDimensions(level) {
    const rows = Number.isInteger(level?.rows) ? level.rows : level?.size;
    const columns = Number.isInteger(level?.columns)
      ? level.columns
      : level?.size;
    return { rows, columns };
  }

  function createEmptyState(level) {
    const { rows, columns } = getBoardDimensions(level);
    return {
      levelId: level.id,
      size: rows === columns ? rows : undefined,
      rows,
      columns,
      paths: Object.fromEntries(level.pairs.map((pair) => [pair.id, []])),
      selectedPairId: null,
      moves: 0,
      elapsed: 0,
      hintsUsed: 0,
      completed: false,
    };
  }

  function cloneGameState(state) {
    return {
      ...state,
      paths: clonePaths(state.paths),
    };
  }

  function isInsideBoard(row, column, rows, columns = rows) {
    return (
      Number.isInteger(row) &&
      Number.isInteger(column) &&
      row >= 0 &&
      column >= 0 &&
      row < rows &&
      column < columns
    );
  }

  function areOrthogonallyAdjacent(cellA, cellB) {
    if (!Array.isArray(cellA) || !Array.isArray(cellB)) {
      return false;
    }
    return (
      Math.abs(cellA[0] - cellB[0]) + Math.abs(cellA[1] - cellB[1]) ===
      1
    );
  }

  function getPairById(level, pairId) {
    return level.pairs.find((pair) => pair.id === pairId) || null;
  }

  function getEndpoint(level, row, column) {
    for (const pair of level.pairs) {
      if (sameCell(pair.start, [row, column])) {
        return { pairId: pair.id, side: 'start' };
      }
      if (sameCell(pair.end, [row, column])) {
        return { pairId: pair.id, side: 'end' };
      }
    }
    return null;
  }

  function isEndpoint(level, row, column) {
    return getEndpoint(level, row, column) !== null;
  }

  function getEndpointPairId(level, row, column) {
    return getEndpoint(level, row, column)?.pairId || null;
  }

  function buildOccupancy(state, level) {
    const { rows, columns } = getBoardDimensions(level);
    const occupancy = Array.from({ length: rows }, () =>
      Array(columns).fill(null),
    );

    for (const pair of level.pairs) {
      occupancy[pair.start[0]][pair.start[1]] = pair.id;
      occupancy[pair.end[0]][pair.end[1]] = pair.id;
    }

    for (const [pairId, path] of Object.entries(state.paths || {})) {
      for (const cell of path || []) {
        if (isInsideBoard(cell?.[0], cell?.[1], rows, columns)) {
          occupancy[cell[0]][cell[1]] = pairId;
        }
      }
    }
    return occupancy;
  }

  function operationResult(state, changed, reason = null) {
    return { state, changed, reason };
  }

  function beginPath(state, level, pairId, cell) {
    const { rows, columns } = getBoardDimensions(level);
    const pair = getPairById(level, pairId);
    if (!pair || !isInsideBoard(cell?.[0], cell?.[1], rows, columns)) {
      return operationResult(cloneGameState(state), false, 'invalid-start');
    }

    const existing = state.paths[pairId] || [];
    const existingIndex = existing.findIndex((pathCell) =>
      sameCell(pathCell, cell),
    );
    const isOwnEndpoint =
      sameCell(pair.start, cell) || sameCell(pair.end, cell);
    if (!isOwnEndpoint && existingIndex < 0) {
      return operationResult(cloneGameState(state), false, 'invalid-start');
    }

    const next = cloneGameState(state);
    const nextPath = isOwnEndpoint
      ? [[...cell]]
      : existing.slice(0, existingIndex + 1).map((pathCell) => [...pathCell]);
    const changed =
      existing.length !== nextPath.length ||
      existing.some((pathCell, index) => !sameCell(pathCell, nextPath[index]));
    next.paths[pairId] = nextPath;
    next.selectedPairId = pairId;
    next.completed = false;
    return operationResult(next, changed);
  }

  function trimPathToCell(state, pairId, cell) {
    const next = cloneGameState(state);
    const path = next.paths[pairId] || [];
    const index = path.findIndex((pathCell) => sameCell(pathCell, cell));
    if (index >= 0) {
      next.paths[pairId] = path.slice(0, index + 1);
      next.completed = false;
    }
    return next;
  }

  function extendPath(state, level, pairId, nextCell) {
    const { rows, columns } = getBoardDimensions(level);
    const pair = getPairById(level, pairId);
    const path = state.paths[pairId] || [];
    if (
      !pair ||
      path.length === 0 ||
      !isInsideBoard(nextCell?.[0], nextCell?.[1], rows, columns)
    ) {
      return operationResult(cloneGameState(state), false, 'no-active-path');
    }
    if (isPairConnected(state, level, pairId)) {
      return operationResult(cloneGameState(state), false, 'pair-connected');
    }

    const lastCell = path[path.length - 1];
    if (!areOrthogonallyAdjacent(lastCell, nextCell)) {
      return operationResult(cloneGameState(state), false, 'not-adjacent');
    }

    const ownIndex = path.findIndex((cell) => sameCell(cell, nextCell));
    if (ownIndex >= 0) {
      const next = trimPathToCell(state, pairId, nextCell);
      return operationResult(next, ownIndex !== path.length - 1);
    }

    const endpoint = getEndpoint(level, nextCell[0], nextCell[1]);
    if (endpoint && endpoint.pairId !== pairId) {
      return operationResult(
        cloneGameState(state),
        false,
        'other-endpoint',
      );
    }

    const occupancy = buildOccupancy(state, level);
    const occupant = occupancy[nextCell[0]][nextCell[1]];
    const isOtherOwnEndpoint =
      endpoint?.pairId === pairId &&
      !sameCell(nextCell, path[0]);
    if (occupant && !isOtherOwnEndpoint) {
      return operationResult(cloneGameState(state), false, 'other-line');
    }

    const next = cloneGameState(state);
    next.paths[pairId].push([...nextCell]);
    next.selectedPairId = pairId;
    next.completed = false;
    return operationResult(next, true);
  }

  function canExtendPath(state, level, pairId, nextCell) {
    return extendPath(state, level, pairId, nextCell).changed;
  }

  function removeLastPathCell(state, pairId) {
    const next = cloneGameState(state);
    const path = next.paths[pairId] || [];
    if (path.length > 1) {
      path.pop();
      next.completed = false;
    }
    return next;
  }

  function clearPath(state, pairId) {
    const next = cloneGameState(state);
    next.paths[pairId] = [];
    next.completed = false;
    if (next.selectedPairId === pairId) {
      next.selectedPairId = null;
    }
    return next;
  }

  function pathConnectsPair(path, pair) {
    if (!Array.isArray(path) || path.length < 2) {
      return false;
    }
    const forward =
      sameCell(path[0], pair.start) &&
      sameCell(path[path.length - 1], pair.end);
    const reverse =
      sameCell(path[0], pair.end) &&
      sameCell(path[path.length - 1], pair.start);
    return forward || reverse;
  }

  function isPairConnected(state, level, pairId) {
    const pair = getPairById(level, pairId);
    return Boolean(pair && pathConnectsPair(state.paths[pairId], pair));
  }

  function countConnectedPairs(state, level) {
    return level.pairs.filter((pair) =>
      isPairConnected(state, level, pair.id),
    ).length;
  }

  function calculateCoverage(state, level) {
    const { rows, columns } = getBoardDimensions(level);
    const occupancy = buildOccupancy(state, level);
    const occupied = occupancy.flat().filter(Boolean).length;
    return Math.round((occupied / (rows * columns)) * 100);
  }

  function validateCurrentState(state, level) {
    const { rows, columns } = getBoardDimensions(level);
    const errors = [];
    const occupied = new Map();

    for (const pair of level.pairs) {
      const path = state.paths?.[pair.id] || [];
      if (path.length === 0) {
        continue;
      }
      if (!sameCell(path[0], pair.start) && !sameCell(path[0], pair.end)) {
        errors.push(`${pair.id} 路線不是從自己的端點開始`);
      }

      const seen = new Set();
      for (let index = 0; index < path.length; index += 1) {
        const cell = path[index];
        if (!isInsideBoard(cell?.[0], cell?.[1], rows, columns)) {
          errors.push(`${pair.id} 路線超出棋盤`);
          continue;
        }
        const key = cellKey(cell);
        if (seen.has(key)) {
          errors.push(`${pair.id} 路線形成迴圈`);
        }
        seen.add(key);

        if (index > 0 && !areOrthogonallyAdjacent(path[index - 1], cell)) {
          errors.push(`${pair.id} 路線包含非正交步驟`);
        }
        const endpoint = getEndpoint(level, cell[0], cell[1]);
        if (endpoint && endpoint.pairId !== pair.id) {
          errors.push(`${pair.id} 路線進入其他端點`);
        }
        if (occupied.has(key) && occupied.get(key) !== pair.id) {
          errors.push(`${pair.id} 路線與其他路線重疊`);
        }
        occupied.set(key, pair.id);
      }
    }
    return errors;
  }

  function isPuzzleComplete(state, level) {
    return (
      validateCurrentState(state, level).length === 0 &&
      countConnectedPairs(state, level) === level.pairs.length &&
      calculateCoverage(state, level) === 100
    );
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') {
      return ['關卡必須是物件'];
    }
    const { rows, columns } = getBoardDimensions(level);
    if (
      !Number.isInteger(rows) ||
      !Number.isInteger(columns) ||
      rows < 2 ||
      columns < 2
    ) {
      errors.push('棋盤尺寸無效');
    }
    if (!Array.isArray(level.pairs) || level.pairs.length < 1) {
      errors.push('pairs 無效');
      return errors;
    }

    const pairIds = new Set();
    const endpoints = new Set();
    for (const pair of level.pairs) {
      if (typeof pair.id !== 'string' || pairIds.has(pair.id)) {
        errors.push('pair id 缺少或重複');
      }
      pairIds.add(pair.id);
      for (const [label, cell] of [
        ['start', pair.start],
        ['end', pair.end],
      ]) {
        if (!isInsideBoard(cell?.[0], cell?.[1], rows, columns)) {
          errors.push(`${pair.id} ${label} 超出棋盤`);
          continue;
        }
        const key = cellKey(cell);
        if (endpoints.has(key)) {
          errors.push(`端點重疊：${key}`);
        }
        endpoints.add(key);
      }
      if (sameCell(pair.start, pair.end)) {
        errors.push(`${pair.id} 端點不可相同`);
      }
    }
    return errors;
  }

  function validateStoredSolution(level) {
    const errors = [...validateLevelDefinition(level)];
    if (errors.length > 0) {
      return errors;
    }
    if (!level.solution || typeof level.solution !== 'object') {
      return ['缺少 solution'];
    }

    const { rows, columns } = getBoardDimensions(level);
    const occupied = new Set();
    for (const pair of level.pairs) {
      const path = level.solution[pair.id];
      if (!Array.isArray(path) || path.length < 2) {
        errors.push(`${pair.id} 缺少完整解答`);
        continue;
      }
      if (!sameCell(path[0], pair.start)) {
        errors.push(`${pair.id} 解答起點錯誤`);
      }
      if (!sameCell(path[path.length - 1], pair.end)) {
        errors.push(`${pair.id} 解答終點錯誤`);
      }
      const own = new Set();
      for (let index = 0; index < path.length; index += 1) {
        const cell = path[index];
        if (!isInsideBoard(cell?.[0], cell?.[1], rows, columns)) {
          errors.push(`${pair.id} 解答超出棋盤`);
          continue;
        }
        if (index > 0 && !areOrthogonallyAdjacent(path[index - 1], cell)) {
          errors.push(`${pair.id} 解答含非正交步驟`);
        }
        const key = cellKey(cell);
        if (own.has(key)) {
          errors.push(`${pair.id} 解答重複使用格子`);
        }
        if (occupied.has(key)) {
          errors.push(`不同解答路線重疊：${key}`);
        }
        own.add(key);
        occupied.add(key);
      }
    }
    if (occupied.size !== rows * columns) {
      errors.push(
        `解答覆蓋 ${occupied.size}/${rows * columns} 格`,
      );
    }
    return errors;
  }

  function orientSolutionPath(path, currentPath) {
    if (
      currentPath.length > 0 &&
      sameCell(currentPath[0], path[path.length - 1])
    ) {
      return [...path].reverse();
    }
    return path;
  }

  function getHint(state, level, excludedHintKey = null) {
    const candidates = [];
    for (const pair of level.pairs) {
      const solution = level.solution?.[pair.id];
      if (!solution || isPairConnected(state, level, pair.id)) {
        continue;
      }
      const current = state.paths[pair.id] || [];
      const oriented = orientSolutionPath(solution, current);
      let prefix = 0;
      while (
        prefix < current.length &&
        prefix < oriented.length &&
        sameCell(current[prefix], oriented[prefix])
      ) {
        prefix += 1;
      }
      const nextIndex =
        current.length === 0 ? 1 : Math.min(prefix, oriented.length - 1);
      const from = oriented[Math.max(0, nextIndex - 1)];
      const cell = oriented[nextIndex];
      const key = `${pair.id}:${cellKey(cell)}`;
      candidates.push({ pairId: pair.id, from: [...from], cell: [...cell], key });
    }
    return (
      candidates.find((candidate) => candidate.key !== excludedHintKey) ||
      candidates[0] ||
      null
    );
  }

  function serializeState(state) {
    return JSON.stringify(state);
  }

  function deserializeState(data, level) {
    try {
      const raw = typeof data === 'string' ? JSON.parse(data) : data;
      const { rows, columns } = getBoardDimensions(level);
      if (
        !raw ||
        raw.levelId !== level.id ||
        (raw.rows ?? raw.size) !== rows ||
        (raw.columns ?? raw.size) !== columns ||
        !raw.paths ||
        typeof raw.paths !== 'object'
      ) {
        return null;
      }
      const next = createEmptyState(level);
      next.paths = Object.fromEntries(
        level.pairs.map((pair) => [
          pair.id,
          Array.isArray(raw.paths[pair.id])
            ? raw.paths[pair.id].map((cell) => [cell?.[0], cell?.[1]])
            : [],
        ]),
      );
      next.selectedPairId = getPairById(level, raw.selectedPairId)
        ? raw.selectedPairId
        : null;
      for (const field of ['moves', 'elapsed', 'hintsUsed']) {
        next[field] = Number.isFinite(raw[field])
          ? Math.max(0, Math.floor(raw[field]))
          : 0;
      }
      if (validateCurrentState(next, level).length > 0) {
        return null;
      }
      next.completed = isPuzzleComplete(next, level);
      return next;
    } catch {
      return null;
    }
  }

  function formatElapsedTime(seconds) {
    const safe = Math.max(0, Math.floor(Number(seconds) || 0));
    const minutes = Math.floor(safe / 60);
    const remainder = safe % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  }

  function transformCell(cell, rows, columns, transform) {
    const [row, column] = cell;
    switch (transform) {
      case 1:
        return [column, rows - 1 - row];
      case 2:
        return [rows - 1 - row, columns - 1 - column];
      case 3:
        return [columns - 1 - column, row];
      case 4:
        return [row, columns - 1 - column];
      case 5:
        return [rows - 1 - row, column];
      case 6:
        return [column, row];
      case 7:
        return [columns - 1 - column, rows - 1 - row];
      default:
        return [row, column];
    }
  }

  function canonicalizeEndpointSignature(level) {
    const { rows, columns } = getBoardDimensions(level);
    const signatures = [];
    for (let transform = 0; transform < 8; transform += 1) {
      const swapsAxes = [1, 3, 6, 7].includes(transform);
      const outputRows = swapsAxes ? columns : rows;
      const outputColumns = swapsAxes ? rows : columns;
      const pairs = level.pairs
        .map((pair) => {
          const endpoints = [
            transformCell(pair.start, rows, columns, transform),
            transformCell(pair.end, rows, columns, transform),
          ]
            .map(cellKey)
            .sort();
          return endpoints.join('~');
        })
        .sort();
      signatures.push(`${outputRows}x${outputColumns}:${pairs.join('|')}`);
    }
    return signatures.sort()[0];
  }

  function canonicalizeSolutionSignature(level) {
    const { rows, columns } = getBoardDimensions(level);
    const signatures = [];
    for (let transform = 0; transform < 8; transform += 1) {
      const swapsAxes = [1, 3, 6, 7].includes(transform);
      const outputRows = swapsAxes ? columns : rows;
      const outputColumns = swapsAxes ? rows : columns;
      const paths = level.pairs
        .map((pair) => {
          const transformed = level.solution[pair.id].map((cell) =>
            transformCell(cell, rows, columns, transform),
          );
          const forward = transformed.map(cellKey).join(';');
          const reverse = [...transformed].reverse().map(cellKey).join(';');
          return forward < reverse ? forward : reverse;
        })
        .sort();
      signatures.push(`${outputRows}x${outputColumns}:${paths.join('|')}`);
    }
    return signatures.sort()[0];
  }

  function countSolutions(level, limit = 2, options = {}) {
    const { rows, columns } = getBoardDimensions(level);
    const pairs = level.pairs;
    const cellCount = rows * columns;
    const occupancy = new Int16Array(cellCount);
    occupancy.fill(-1);
    const endpointOwner = new Int16Array(cellCount);
    endpointOwner.fill(-1);
    const paths = [];
    const targets = [];
    const connected = new Uint8Array(pairs.length);
    let occupiedCount = 0;

    const indexOf = (cell) => cell[0] * columns + cell[1];
    const cellOf = (index) => [
      Math.floor(index / columns),
      index % columns,
    ];

    pairs.forEach((pair, pairIndex) => {
      const start = indexOf(pair.start);
      const end = indexOf(pair.end);
      occupancy[start] = pairIndex;
      occupancy[end] = pairIndex;
      endpointOwner[start] = pairIndex;
      endpointOwner[end] = pairIndex;
      paths[pairIndex] = [start];
      targets[pairIndex] = end;
      occupiedCount += 2;
    });

    const metrics = {
      count: 0,
      firstSolution: null,
      nodesVisited: 0,
      backtracks: 0,
      forcedMoves: 0,
      branchPoints: 0,
      memoHits: 0,
      timedOut: false,
    };
    const memo = new Set();
    const maxNodes = options.maxNodes || 5000000;
    const deadline = options.timeoutMs
      ? Date.now() + options.timeoutMs
      : Number.POSITIVE_INFINITY;

    function neighbors(index) {
      const row = Math.floor(index / columns);
      const column = index % columns;
      const result = [];
      if (row > 0) result.push(index - columns);
      if (column < columns - 1) result.push(index + 1);
      if (row < rows - 1) result.push(index + columns);
      if (column > 0) result.push(index - 1);
      return result;
    }

    function legalMoves(pairIndex) {
      const path = paths[pairIndex];
      const head = path[path.length - 1];
      const target = targets[pairIndex];
      return neighbors(head).filter((next) => {
        if (next === target) {
          return true;
        }
        return occupancy[next] === -1 && endpointOwner[next] === -1;
      });
    }

    function targetReachable(pairIndex) {
      if (connected[pairIndex]) {
        return true;
      }
      const target = targets[pairIndex];
      const queue = [paths[pairIndex][paths[pairIndex].length - 1]];
      const seen = new Uint8Array(cellCount);
      seen[queue[0]] = 1;
      for (let cursor = 0; cursor < queue.length; cursor += 1) {
        for (const next of neighbors(queue[cursor])) {
          if (next === target) {
            return true;
          }
          if (
            !seen[next] &&
            occupancy[next] === -1 &&
            endpointOwner[next] === -1
          ) {
            seen[next] = 1;
            queue.push(next);
          }
        }
      }
      return false;
    }

    function emptyCellsRemainViable() {
      for (let index = 0; index < cellCount; index += 1) {
        if (occupancy[index] !== -1) {
          continue;
        }
        let exits = 0;
        for (const next of neighbors(index)) {
          if (occupancy[next] === -1) {
            exits += 1;
            continue;
          }
          const owner = occupancy[next];
          if (
            owner >= 0 &&
            !connected[owner] &&
            (paths[owner][paths[owner].length - 1] === next ||
              targets[owner] === next)
          ) {
            exits += 1;
          }
        }
        if (exits < 2) {
          return false;
        }
      }
      return true;
    }

    function makeMemoKey() {
      const heads = paths.map((path, index) =>
        connected[index] ? `c${targets[index]}` : path[path.length - 1],
      );
      return `${Array.from(occupancy).join(',')}/${heads.join(',')}`;
    }

    function captureSolution() {
      return Object.fromEntries(
        pairs.map((pair, index) => [
          pair.id,
          paths[index].map((cellIndex) => cellOf(cellIndex)),
        ]),
      );
    }

    function search() {
      if (
        metrics.count >= limit ||
        metrics.nodesVisited >= maxNodes ||
        Date.now() > deadline
      ) {
        if (metrics.nodesVisited >= maxNodes || Date.now() > deadline) {
          metrics.timedOut = true;
        }
        return;
      }
      metrics.nodesVisited += 1;

      if (connected.every(Boolean)) {
        if (occupiedCount === cellCount) {
          metrics.count += 1;
          if (!metrics.firstSolution) {
            metrics.firstSolution = captureSolution();
          }
        }
        return;
      }

      for (let index = 0; index < pairs.length; index += 1) {
        if (!connected[index] && !targetReachable(index)) {
          metrics.backtracks += 1;
          return;
        }
      }
      if (!emptyCellsRemainViable()) {
        metrics.backtracks += 1;
        return;
      }

      const memoKey = makeMemoKey();
      if (memo.has(memoKey)) {
        metrics.memoHits += 1;
        return;
      }
      memo.add(memoKey);

      let selected = -1;
      let moves = null;
      for (let index = 0; index < pairs.length; index += 1) {
        if (connected[index]) {
          continue;
        }
        const optionsForPair = legalMoves(index);
        if (optionsForPair.length === 0) {
          metrics.backtracks += 1;
          return;
        }
        if (!moves || optionsForPair.length < moves.length) {
          selected = index;
          moves = optionsForPair;
        }
      }

      if (moves.length === 1) {
        metrics.forcedMoves += 1;
      } else {
        metrics.branchPoints += 1;
      }

      const target = targets[selected];
      moves.sort((left, right) => {
        const [leftRow, leftColumn] = cellOf(left);
        const [rightRow, rightColumn] = cellOf(right);
        const [targetRow, targetColumn] = cellOf(target);
        return (
          Math.abs(leftRow - targetRow) +
          Math.abs(leftColumn - targetColumn) -
          (Math.abs(rightRow - targetRow) +
            Math.abs(rightColumn - targetColumn)) ||
          left - right
        );
      });

      for (const next of moves) {
        const reachesTarget = next === target;
        paths[selected].push(next);
        if (!reachesTarget) {
          occupancy[next] = selected;
          occupiedCount += 1;
        } else {
          connected[selected] = 1;
        }

        search();

        if (!reachesTarget) {
          occupancy[next] = -1;
          occupiedCount -= 1;
        } else {
          connected[selected] = 0;
        }
        paths[selected].pop();
        if (metrics.count >= limit || metrics.timedOut) {
          break;
        }
      }
    }

    search();
    return metrics;
  }

  return Object.freeze({
    DIRECTIONS,
    sameCell,
    getBoardDimensions,
    createEmptyState,
    cloneGameState,
    buildOccupancy,
    isInsideBoard,
    areOrthogonallyAdjacent,
    getPairById,
    isEndpoint,
    getEndpointPairId,
    beginPath,
    canExtendPath,
    extendPath,
    trimPathToCell,
    removeLastPathCell,
    clearPath,
    isPairConnected,
    countConnectedPairs,
    calculateCoverage,
    validateCurrentState,
    isPuzzleComplete,
    validateLevelDefinition,
    validateStoredSolution,
    countSolutions,
    getHint,
    serializeState,
    deserializeState,
    canonicalizeEndpointSignature,
    canonicalizeSolutionSignature,
    formatElapsedTime,
  });
});
