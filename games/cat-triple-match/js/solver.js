(function (root, factory) {
  const Core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatTripleCore;
  const api = factory(Core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleSolver = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Core) {
  'use strict';

  function solveLevel(level, options) {
    const settings = options || {};
    const maxNodes = Number.isFinite(settings.maxNodes) ? settings.maxNodes : 150000;
    const deadlineMs = Number.isFinite(settings.deadlineMs) ? settings.deadlineMs : 300;
    const startedAt = Date.now();
    const initial = settings.state ? Core.cloneState(settings.state) : Core.createInitialState(level);
    const tileIndex = new Map(level.tiles.map((tile, index) => [tile.id, index]));
    const blockerMap = Core.buildBlockerMap(level).blockers;
    const blockerMasks = level.tiles.map((tile) =>
      (blockerMap[tile.id] || []).reduce((mask, id) =>
        mask | (1n << BigInt(tileIndex.get(id))), 0n));
    const symbolIds = [...new Set(level.tiles.map((tile) =>
      initial.symbolByTileId[tile.id]))].sort();
    const symbolIndex = new Map(symbolIds.map((id, index) => [id, index]));
    const symbols = level.tiles.map((tile) => symbolIndex.get(initial.symbolByTileId[tile.id]));
    let startMask = 0n;
    for (const id of initial.remainingTileIds) startMask |= 1n << BigInt(tileIndex.get(id));
    const startCounts = Array(symbolIds.length).fill(0);
    for (const id of initial.trayTileIds) {
      const index = tileIndex.get(id);
      if (index !== undefined) startCounts[symbols[index]] += 1;
    }
    let nodesVisited = 0;
    let backtracks = 0;
    let maxDepth = 0;
    let peakTrayOccupancy = initial.trayTileIds.length;
    let budgetReason = '';
    const memo = new Set();
    const sequence = [];

    function dfs(mask, counts, occupancy, depth) {
      if (nodesVisited >= maxNodes) {
        budgetReason = 'nodes';
        return false;
      }
      if (deadlineMs >= 0 && Date.now() - startedAt > deadlineMs) {
        budgetReason = 'time';
        return false;
      }
      nodesVisited += 1;
      maxDepth = Math.max(maxDepth, depth);
      peakTrayOccupancy = Math.max(peakTrayOccupancy, occupancy);
      if (mask === 0n) return occupancy === 0;
      const key = `${mask.toString(36)}|${counts.join('')}`;
      if (memo.has(key)) return false;
      const exposed = [];
      for (let index = 0; index < level.tiles.length; index += 1) {
        const bit = 1n << BigInt(index);
        if ((mask & bit) !== 0n && (blockerMasks[index] & mask) === 0n) exposed.push(index);
      }
      exposed.sort((a, b) => {
        const aMatch = counts[symbols[a]] === 2 ? 1 : 0;
        const bMatch = counts[symbols[b]] === 2 ? 1 : 0;
        if (aMatch !== bMatch) return bMatch - aMatch;
        const aUnlocks = blockerMasks.filter((blockers) =>
          (blockers & (1n << BigInt(a))) !== 0n && (blockers & mask) === (1n << BigInt(a))).length;
        const bUnlocks = blockerMasks.filter((blockers) =>
          (blockers & (1n << BigInt(b))) !== 0n && (blockers & mask) === (1n << BigInt(b))).length;
        return bUnlocks - aUnlocks || level.tiles[a].id.localeCompare(level.tiles[b].id);
      });
      const seen = new Set();
      for (const index of exposed) {
        const equivalence = `${symbols[index]}:${blockerMasks[index] & mask}`;
        if (seen.has(equivalence)) continue;
        seen.add(equivalence);
        const nextCounts = counts.slice();
        const symbol = symbols[index];
        let nextOccupancy = occupancy + 1;
        nextCounts[symbol] += 1;
        if (nextCounts[symbol] === 3) {
          nextCounts[symbol] = 0;
          nextOccupancy -= 3;
        }
        if (nextOccupancy >= 9) continue;
        sequence.push(level.tiles[index].id);
        if (dfs(mask & ~(1n << BigInt(index)), nextCounts, nextOccupancy, depth + 1)) return true;
        sequence.pop();
        if (budgetReason) return false;
      }
      memo.add(key);
      backtracks += 1;
      return false;
    }

    const solved = dfs(startMask, startCounts, initial.trayTileIds.length, 0);
    return {
      solved,
      sequence: solved ? sequence.slice() : [],
      nodesVisited,
      backtracks,
      maxDepth,
      peakTrayOccupancy,
      budgetExceeded: Boolean(budgetReason),
      budgetReason: budgetReason || null,
      elapsedMs: Date.now() - startedAt,
    };
  }

  return { solveLevel };
});
