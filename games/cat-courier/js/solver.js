(function (root, factory) {
  const core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatCourierCore;
  const api = factory(core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatCourierSolver = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Core) {
  'use strict';

  const DELTAS = Object.freeze([[-1, 0], [0, 1], [1, 0], [0, -1]]);

  function prepare(level) {
    const cells = [];
    const indexByKey = new Map();
    for (let row = 0; row < level.rows; row += 1) {
      for (let column = 0; column < level.columns; column += 1) {
        if (!Core.isPassableTerrain(level.terrain[row][column])) continue;
        indexByKey.set(Core.cellKey(row, column), cells.length);
        cells.push([row, column]);
      }
    }
    const neighbors = cells.map((cell) => DELTAS
      .map(([dr, dc]) => [cell[0] + dr, cell[1] + dc])
      .filter((target) => {
        const index = indexByKey.get(Core.cellKey(target[0], target[1]));
        return index !== undefined && Core.isOneWayMoveAllowed(level, cell, target);
      })
      .map((target) => indexByKey.get(Core.cellKey(target[0], target[1]))));
    const stopIndexByCell = new Map((level.stops || []).map((stop) => [
      Core.cellKey(stop.position[0], stop.position[1]), stop.order,
    ]));
    return { cells, indexByKey, neighbors, stopIndexByCell };
  }

  function shortestDistances(prepared, sourceIndex, blockedMask = 0n) {
    const distances = Array(prepared.cells.length).fill(Infinity);
    const queue = [sourceIndex];
    distances[sourceIndex] = 0;
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const current = queue[cursor];
      for (const next of prepared.neighbors[current]) {
        const bit = 1n << BigInt(next);
        if ((blockedMask & bit) !== 0n || distances[next] !== Infinity) continue;
        distances[next] = distances[current] + 1;
        queue.push(next);
      }
    }
    return distances;
  }

  function remainingLowerBound(level, prepared, positionIndex, nextStopIndex, visitedMask) {
    if (nextStopIndex >= level.stops.length) return 0;
    let lowerBound = 0;
    let currentIndex = positionIndex;
    let blocked = visitedMask & ~(1n << BigInt(positionIndex));
    for (let index = nextStopIndex; index < level.stops.length; index += 1) {
      const stop = level.stops[index];
      const targetIndex = prepared.indexByKey.get(Core.cellKey(stop.position[0], stop.position[1]));
      const distances = shortestDistances(prepared, currentIndex, blocked);
      if (!Number.isFinite(distances[targetIndex])) return Infinity;
      lowerBound += distances[targetIndex];
      currentIndex = targetIndex;
      blocked = 0n;
    }
    return lowerBound;
  }

  function solve(level, currentPath, options = {}) {
    const startedAt = Date.now();
    const maxSolutions = Math.max(1, Number(options.maxSolutions) || 2);
    const nodeBudget = Math.max(1, Number(options.nodeBudget) || 500000);
    const timeBudgetMs = Math.max(1, Number(options.timeBudgetMs) || 3000);
    const prepared = prepare(level);
    const validation = Core.validatePath(level, currentPath);
    if (!validation.valid) {
      return {
        solved: false,
        shortestPath: [],
        optimalSteps: null,
        optimalSolutionCount: 0,
        nodesVisited: 0,
        backtracks: 0,
        maxDepth: 0,
        budgetStatus: 'invalid-partial',
      };
    }
    const startCell = currentPath[currentPath.length - 1];
    const positionIndex = prepared.indexByKey.get(Core.cellKey(startCell[0], startCell[1]));
    let visitedMask = 0n;
    for (const cell of currentPath) {
      const index = prepared.indexByKey.get(Core.cellKey(cell[0], cell[1]));
      visitedMask |= 1n << BigInt(index);
    }
    let bestSteps = Infinity;
    let bestPath = null;
    let solutionCount = 0;
    let nodesVisited = 0;
    let backtracks = 0;
    let maxDepth = currentPath.length - 1;
    let budgetStatus = 'complete';
    const memo = new Map();
    const pathIndices = currentPath.map((cell) => (
      prepared.indexByKey.get(Core.cellKey(cell[0], cell[1]))
    ));

    function search(currentIndex, nextStopIndex, mask, stepsUsed) {
      if (solutionCount >= maxSolutions && stepsUsed >= bestSteps) return;
      if (nodesVisited >= nodeBudget || Date.now() - startedAt > timeBudgetMs) {
        budgetStatus = nodesVisited >= nodeBudget ? 'node-budget' : 'time-budget';
        return;
      }
      nodesVisited += 1;
      maxDepth = Math.max(maxDepth, stepsUsed);
      const currentCell = prepared.cells[currentIndex];
      if (nextStopIndex >= level.stops.length) {
        if (Core.sameCell(currentCell, level.stops[level.stops.length - 1].position)) {
          if (stepsUsed < bestSteps) {
            bestSteps = stepsUsed;
            solutionCount = 1;
            bestPath = pathIndices.map((index) => [...prepared.cells[index]]);
          } else if (stepsUsed === bestSteps) {
            solutionCount += 1;
          }
        }
        return;
      }
      const lowerBound = remainingLowerBound(level, prepared, currentIndex, nextStopIndex, mask);
      if (!Number.isFinite(lowerBound)
        || stepsUsed + lowerBound > level.fuelLimit
        || stepsUsed + lowerBound > bestSteps) {
        backtracks += 1;
        return;
      }
      const memoKey = `${currentIndex}|${nextStopIndex}|${mask}`;
      const knownSteps = memo.get(memoKey);
      if (knownSteps !== undefined && knownSteps < stepsUsed) {
        backtracks += 1;
        return;
      }
      memo.set(memoKey, stepsUsed);
      const candidates = prepared.neighbors[currentIndex]
        .filter((nextIndex) => (mask & (1n << BigInt(nextIndex))) === 0n)
        .map((nextIndex) => {
          const cell = prepared.cells[nextIndex];
          const stopOrder = prepared.stopIndexByCell.get(Core.cellKey(cell[0], cell[1]));
          if (stopOrder !== undefined && stopOrder > nextStopIndex) return null;
          const advanced = stopOrder === nextStopIndex ? nextStopIndex + 1 : nextStopIndex;
          const estimate = remainingLowerBound(
            level,
            prepared,
            nextIndex,
            advanced,
            mask | (1n << BigInt(nextIndex)),
          );
          return { nextIndex, advanced, estimate };
        })
        .filter(Boolean)
        .sort((a, b) => a.estimate - b.estimate || a.nextIndex - b.nextIndex);
      for (const candidate of candidates) {
        if (budgetStatus !== 'complete') return;
        pathIndices.push(candidate.nextIndex);
        search(
          candidate.nextIndex,
          candidate.advanced,
          mask | (1n << BigInt(candidate.nextIndex)),
          stepsUsed + 1,
        );
        pathIndices.pop();
      }
      if (!candidates.length) backtracks += 1;
    }

    search(positionIndex, validation.stopProgress, visitedMask, currentPath.length - 1);
    return {
      solved: Boolean(bestPath),
      shortestPath: bestPath || [],
      optimalSteps: Number.isFinite(bestSteps) ? bestSteps : null,
      optimalSolutionCount: solutionCount,
      nodesVisited,
      backtracks,
      maxDepth,
      budgetStatus,
    };
  }

  function solveLevel(level, options = {}) {
    return solve(level, [[...level.start]], options);
  }

  function solveFromPartialPath(level, currentPath, options = {}) {
    return solve(level, currentPath, options);
  }

  return Object.freeze({ solveLevel, solveFromPartialPath });
});
