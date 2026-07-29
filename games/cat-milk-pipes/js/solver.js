(function (root, factory) {
  const core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatMilkPipeCore;
  const api = factory(core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatMilkPipeSolver = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Core) {
  'use strict';

  function positionKey(row, column) {
    return `${row},${column}`;
  }

  function activePositions(level) {
    const positions = [];
    for (let row = 0; row < level.size; row += 1) {
      for (let column = 0; column < level.size; column += 1) {
        if (level.tiles[row][column]) positions.push({ row, column });
      }
    }
    return positions;
  }

  function hasConnector(tile, rotation, direction) {
    return Core.getTileConnectors(tile, rotation).includes(direction);
  }

  function buildDomains(level) {
    const domains = {};
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      const candidates = tile.locked
        ? [Core.normalizeRotation(tile.shape, tile.initialRotation)]
        : Array.from({ length: Core.getRotationStateCount(tile.shape) }, (_, index) => index);
      domains[positionKey(row, column)] = candidates.filter((rotation) => (
        Core.getTileConnectors(tile, rotation).every((direction) => {
          const neighbor = Core.getNeighborPosition(row, column, direction);
          return Core.isInsideBoard(neighbor.row, neighbor.column, level.size)
            && Boolean(level.tiles[neighbor.row][neighbor.column]);
        })
      ));
    }
    return domains;
  }

  function cloneDomains(domains) {
    return Object.fromEntries(
      Object.entries(domains).map(([key, domain]) => [key, [...domain]]),
    );
  }

  function propagate(level, domains) {
    let changed = true;
    while (changed) {
      changed = false;
      for (const { row, column } of activePositions(level)) {
        const tile = level.tiles[row][column];
        const currentKey = positionKey(row, column);
        for (const direction of Core.DIRECTIONS) {
          const neighbor = Core.getNeighborPosition(row, column, direction);
          if (!Core.isInsideBoard(neighbor.row, neighbor.column, level.size)
            || !level.tiles[neighbor.row][neighbor.column]) continue;
          const neighborKey = positionKey(neighbor.row, neighbor.column);
          const neighborTile = level.tiles[neighbor.row][neighbor.column];
          const opposite = Core.getOppositeDirection(direction);
          const filtered = domains[currentKey].filter((rotation) => {
            const connected = hasConnector(tile, rotation, direction);
            return domains[neighborKey].some((neighborRotation) => (
              connected === hasConnector(neighborTile, neighborRotation, opposite)
            ));
          });
          if (filtered.length !== domains[currentKey].length) {
            domains[currentKey] = filtered;
            changed = true;
            if (filtered.length === 0) return false;
          }
        }
      }
    }
    return true;
  }

  function possibleGraph(level, domains) {
    const graph = {};
    for (const { row, column } of activePositions(level)) {
      graph[positionKey(row, column)] = [];
    }
    for (const { row, column } of activePositions(level)) {
      const tile = level.tiles[row][column];
      const from = positionKey(row, column);
      for (const direction of ['R', 'D']) {
        const neighbor = Core.getNeighborPosition(row, column, direction);
        if (!Core.isInsideBoard(neighbor.row, neighbor.column, level.size)
          || !level.tiles[neighbor.row][neighbor.column]) continue;
        const to = positionKey(neighbor.row, neighbor.column);
        const opposite = Core.getOppositeDirection(direction);
        const possible = domains[from].some((rotation) => (
          hasConnector(tile, rotation, direction)
          && domains[to].some((neighborRotation) => (
            hasConnector(level.tiles[neighbor.row][neighbor.column], neighborRotation, opposite)
          ))
        ));
        if (possible) {
          graph[from].push(to);
          graph[to].push(from);
        }
      }
    }
    return graph;
  }

  function canStillConnect(level, domains) {
    const graph = possibleGraph(level, domains);
    const nodes = Object.keys(graph);
    if (!nodes.length) return false;
    const visited = new Set([nodes[0]]);
    const queue = [nodes[0]];
    while (queue.length) {
      for (const next of graph[queue.shift()]) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return visited.size === nodes.length;
  }

  function materialize(level, domains) {
    const rotations = level.tiles.map((row) => row.map(() => null));
    for (const { row, column } of activePositions(level)) {
      rotations[row][column] = domains[positionKey(row, column)][0];
    }
    return {
      levelId: level.id,
      rotations,
      movesUsed: 0,
      elapsed: 0,
      hintsUsed: 0,
      completed: false,
      failed: false,
      undoHistory: [],
    };
  }

  function solve(level, options = {}) {
    const limit = Math.max(1, Math.min(2, options.limit || 2));
    const initial = buildDomains(level);
    const solutions = [];
    const memo = new Set();
    let nodesVisited = 0;
    let backtracks = 0;
    let maxDepth = 0;

    function signature(domains) {
      return Object.keys(domains).sort()
        .map((key) => `${key}:${domains[key].join('')}`).join('|');
    }

    function search(inputDomains, depth) {
      if (solutions.length >= limit) return;
      nodesVisited += 1;
      maxDepth = Math.max(maxDepth, depth);
      const domains = cloneDomains(inputDomains);
      if (!propagate(level, domains) || !canStillConnect(level, domains)) {
        backtracks += 1;
        return;
      }
      const stateKey = signature(domains);
      if (memo.has(stateKey)) return;
      memo.add(stateKey);
      const unresolved = Object.entries(domains)
        .filter(([, domain]) => domain.length > 1)
        .sort((a, b) => a[1].length - b[1].length || a[0].localeCompare(b[0]));
      if (!unresolved.length) {
        const state = materialize(level, domains);
        if (Core.isStrictNetworkSolution(state, level)) {
          solutions.push(state.rotations);
        } else {
          backtracks += 1;
        }
        return;
      }
      const [chosenKey, domain] = unresolved[0];
      for (const rotation of domain) {
        const branch = cloneDomains(domains);
        branch[chosenKey] = [rotation];
        search(branch, depth + 1);
        if (solutions.length >= limit) return;
      }
    }

    search(initial, 0);
    return {
      solutionCount: solutions.length,
      solution: solutions[0] || null,
      solutions,
      nodesVisited,
      backtracks,
      maxDepth,
    };
  }

  return Object.freeze({ solve, buildDomains });
});
