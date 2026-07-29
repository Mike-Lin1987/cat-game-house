(function (root, factory) {
  const core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatStorageCore;
  const api = factory(core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatStorageSolver = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (core) {
  'use strict';

  function bitIndex(level, row, column) {
    return BigInt(row * level.columns + column);
  }

  function cellsMask(level, cells) {
    let mask = 0n;
    for (const [row, column] of cells) mask |= 1n << bitIndex(level, row, column);
    return mask;
  }

  function buildCandidates(level) {
    const fillableSet = new Set(
      (level.fillableCells || []).map(([row, column]) => core.coordinateKey(row, column)),
    );
    const candidates = [];
    const byPiece = new Map();
    const byCell = new Map();
    for (const [row, column] of level.fillableCells || []) {
      byCell.set(core.coordinateKey(row, column), []);
    }
    for (const piece of level.pieces || []) {
      const pieceCandidates = [];
      for (const transform of core.getUniqueTransforms(piece)) {
        const height = Math.max(...transform.cells.map((cell) => cell[0])) + 1;
        const width = Math.max(...transform.cells.map((cell) => cell[1])) + 1;
        for (let row = 0; row <= level.rows - height; row += 1) {
          for (let column = 0; column <= level.columns - width; column += 1) {
            const absoluteCells = transform.cells.map(([cellRow, cellColumn]) => [
              cellRow + row,
              cellColumn + column,
            ]);
            if (!absoluteCells.every(([cellRow, cellColumn]) =>
              fillableSet.has(core.coordinateKey(cellRow, cellColumn)))) continue;
            const candidate = {
              pieceId: piece.id,
              group: piece.equivalenceGroup || null,
              mask: cellsMask(level, absoluteCells),
              cells: absoluteCells,
              placement: {
                row,
                column,
                rotation: transform.rotation,
                flipped: transform.flipped,
              },
              signature: `${String(row).padStart(2, '0')},${String(column).padStart(2, '0')},${transform.signature}`,
            };
            candidates.push(candidate);
            pieceCandidates.push(candidate);
            for (const [cellRow, cellColumn] of absoluteCells) {
              byCell.get(core.coordinateKey(cellRow, cellColumn)).push(candidate);
            }
          }
        }
      }
      byPiece.set(piece.id, pieceCandidates);
    }
    return { candidates, byPiece, byCell };
  }

  function connectedComponentSizes(level, mask) {
    const remaining = new Set();
    for (const [row, column] of level.fillableCells || []) {
      const bit = 1n << bitIndex(level, row, column);
      if ((mask & bit) !== 0n) remaining.add(core.coordinateKey(row, column));
    }
    const sizes = [];
    while (remaining.size) {
      const first = remaining.values().next().value;
      const queue = [first];
      remaining.delete(first);
      let size = 0;
      while (queue.length) {
        const current = queue.shift();
        const [row, column] = current.split(',').map(Number);
        size += 1;
        for (const [nextRow, nextColumn] of [[row - 1, column], [row + 1, column], [row, column - 1], [row, column + 1]]) {
          const key = core.coordinateKey(nextRow, nextColumn);
          if (!remaining.has(key)) continue;
          remaining.delete(key);
          queue.push(key);
        }
      }
      sizes.push(size);
    }
    return sizes.sort((a, b) => a - b);
  }

  function subsetCanSum(sizes, target) {
    let sums = new Set([0]);
    for (const size of sizes) {
      const next = new Set(sums);
      for (const value of sums) {
        if (value + size <= target) next.add(value + size);
      }
      sums = next;
      if (sums.has(target)) return true;
    }
    return sums.has(target);
  }

  function componentsRemainFeasible(level, uncoveredMask, remainingPieces) {
    const components = connectedComponentSizes(level, uncoveredMask);
    if (components.length <= 1) return true;
    const sizes = remainingPieces.map((piece) => piece.cells.length);
    return components.every((size) => subsetCanSum(sizes, size));
  }

  function normalizeSolution(level, solution) {
    const groups = new Map();
    const result = {};
    for (const piece of level.pieces || []) {
      const placement = solution[piece.id];
      if (!piece.equivalenceGroup) {
        result[piece.id] = placement;
        continue;
      }
      if (!groups.has(piece.equivalenceGroup)) groups.set(piece.equivalenceGroup, []);
      groups.get(piece.equivalenceGroup).push({ id: piece.id, placement });
    }
    for (const entries of groups.values()) {
      const ids = entries.map((entry) => entry.id).sort();
      const placements = entries.map((entry) => entry.placement).sort((a, b) =>
        a.row - b.row || a.column - b.column || a.rotation - b.rotation || Number(a.flipped) - Number(b.flipped));
      ids.forEach((id, index) => { result[id] = placements[index]; });
    }
    return result;
  }

  function solutionSignature(level, solution) {
    const normalized = normalizeSolution(level, solution);
    return Object.keys(normalized).sort().map((id) => {
      const placement = normalized[id];
      return `${id}:${placement.row},${placement.column},${placement.rotation},${Number(placement.flipped)}`;
    }).join('|');
  }

  function solveLevel(level, options) {
    const maxSolutions = Math.max(1, Number(options && options.maxSolutions) || 2);
    const search = buildCandidates(level);
    const piecesById = new Map((level.pieces || []).map((piece) => [piece.id, piece]));
    const fillMask = cellsMask(level, level.fillableCells || []);
    const allPieceIds = (level.pieces || []).map((piece) => piece.id);
    const deadStates = new Set();
    const solutionSignatures = new Set();
    let firstSolution = null;
    let nodesVisited = 0;
    let backtracks = 0;
    let maxDepth = 0;

    function compatible(candidate, uncoveredMask, remaining) {
      return remaining.has(candidate.pieceId)
        && (candidate.mask & uncoveredMask) === candidate.mask;
    }

    function chooseColumn(uncoveredMask, remaining) {
      let best = null;
      for (const pieceId of remaining) {
        const choices = (search.byPiece.get(pieceId) || []).filter((candidate) =>
          compatible(candidate, uncoveredMask, remaining));
        if (choices.length === 0) return { choices: [] };
        if (!best || choices.length < best.choices.length) best = { choices };
      }
      for (const [row, column] of level.fillableCells || []) {
        const bit = 1n << bitIndex(level, row, column);
        if ((uncoveredMask & bit) === 0n) continue;
        const choices = (search.byCell.get(core.coordinateKey(row, column)) || []).filter((candidate) =>
          compatible(candidate, uncoveredMask, remaining));
        if (choices.length === 0) return { choices: [] };
        if (!best || choices.length < best.choices.length) best = { choices };
      }
      return best || { choices: [] };
    }

    function visit(uncoveredMask, remaining, selected, depth) {
      if (solutionSignatures.size >= maxSolutions) return;
      nodesVisited += 1;
      maxDepth = Math.max(maxDepth, depth);
      if (uncoveredMask === 0n && remaining.size === 0) {
        const solution = Object.fromEntries(
          selected.map((candidate) => [candidate.pieceId, { ...candidate.placement }]),
        );
        const signature = solutionSignature(level, solution);
        if (!solutionSignatures.has(signature)) {
          solutionSignatures.add(signature);
          if (!firstSolution) firstSolution = normalizeSolution(level, solution);
        }
        return;
      }
      if (uncoveredMask === 0n || remaining.size === 0) {
        backtracks += 1;
        return;
      }
      const key = `${uncoveredMask.toString(36)}:${[...remaining].sort().join(',')}`;
      if (deadStates.has(key)) {
        backtracks += 1;
        return;
      }
      const remainingPieces = [...remaining].map((id) => piecesById.get(id));
      if (!componentsRemainFeasible(level, uncoveredMask, remainingPieces)) {
        deadStates.add(key);
        backtracks += 1;
        return;
      }
      const before = solutionSignatures.size;
      const { choices } = chooseColumn(uncoveredMask, remaining);
      for (const candidate of choices) {
        if (solutionSignatures.size >= maxSolutions) break;
        const nextRemaining = new Set(remaining);
        nextRemaining.delete(candidate.pieceId);
        visit(uncoveredMask ^ candidate.mask, nextRemaining, [...selected, candidate], depth + 1);
      }
      if (solutionSignatures.size === before) deadStates.add(key);
      if (choices.length === 0 || solutionSignatures.size === before) backtracks += 1;
    }

    visit(fillMask, new Set(allPieceIds), [], 0);
    return {
      solutionCount: solutionSignatures.size,
      solution: firstSolution,
      nodesVisited,
      backtracks,
      maxDepth,
      candidateCount: search.candidates.length,
    };
  }

  return {
    buildCandidates,
    solveLevel,
    solutionSignature,
  };
});
