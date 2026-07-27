'use strict';

const Core = require('../../games/cat-color-connect/js/core.js');
const Config = require('../../games/cat-color-connect/js/config.js');

function createPrng(seed) {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(values, random) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function getNeighbors(index, size) {
  const row = Math.floor(index / size);
  const column = index % size;
  const neighbors = [];
  if (row > 0) neighbors.push(index - size);
  if (column < size - 1) neighbors.push(index + 1);
  if (row < size - 1) neighbors.push(index + size);
  if (column > 0) neighbors.push(index - 1);
  return neighbors;
}

function isUnvisitedConnected(visited, size) {
  let first = -1;
  let remaining = 0;
  for (let index = 0; index < visited.length; index += 1) {
    if (!visited[index]) {
      remaining += 1;
      if (first < 0) first = index;
    }
  }
  if (remaining <= 1) {
    return true;
  }
  const seen = new Uint8Array(visited.length);
  const queue = [first];
  seen[first] = 1;
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    for (const next of getNeighbors(queue[cursor], size)) {
      if (!visited[next] && !seen[next]) {
        seen[next] = 1;
        queue.push(next);
      }
    }
  }
  return queue.length === remaining;
}

function generateHamiltonianPath(size, random) {
  const total = size * size;
  const maxRestarts = 80;

  for (let restart = 0; restart < maxRestarts; restart += 1) {
    const visited = new Uint8Array(total);
    const path = [];
    let nodes = 0;
    const start = Math.floor(random() * total);

    function search(current) {
      nodes += 1;
      if (nodes > 500000) {
        return false;
      }
      visited[current] = 1;
      path.push(current);
      if (path.length === total) {
        return true;
      }

      if (path.length % 8 === 0 && !isUnvisitedConnected(visited, size)) {
        visited[current] = 0;
        path.pop();
        return false;
      }

      const candidates = getNeighbors(current, size)
        .filter((next) => !visited[next])
        .map((next) => ({
          next,
          degree: getNeighbors(next, size).filter(
            (neighbor) => !visited[neighbor],
          ).length,
          jitter: random(),
        }))
        .sort(
          (left, right) =>
            left.degree - right.degree || left.jitter - right.jitter,
        );

      for (const candidate of candidates) {
        if (search(candidate.next)) {
          return true;
        }
      }

      visited[current] = 0;
      path.pop();
      return false;
    }

    if (search(start)) {
      return path.map((index) => [
        Math.floor(index / size),
        index % size,
      ]);
    }
  }

  const serpentine = [];
  for (let row = 0; row < size; row += 1) {
    const columns = Array.from({ length: size }, (_, column) => column);
    if (row % 2 === 1) columns.reverse();
    for (const column of columns) {
      serpentine.push([row, column]);
    }
  }
  return serpentine;
}

function createSegmentLengths(total, pairCount, longMinimum, random) {
  if (pairCount * 2 > total) {
    throw new Error('配對數過多，無法為每條路線保留兩格');
  }
  const lengths = Array(pairCount).fill(2);
  const longIndex = Math.floor(random() * pairCount);
  const required = Math.max(0, Math.min(total, longMinimum) - 2);
  lengths[longIndex] += required;
  let remaining = total - pairCount * 2 - required;

  while (remaining > 0) {
    lengths[Math.floor(random() * pairCount)] += 1;
    remaining -= 1;
  }
  return shuffle(lengths, random);
}

function generatePathCover(size, pairCount, longPathMinimum, random) {
  const total = size * size;
  const allCells = shuffle(
    Array.from({ length: total }, (_, index) => index),
    random,
  );

  for (let restart = 0; restart < 120; restart += 1) {
    const occupancy = new Int16Array(total);
    occupancy.fill(-1);
    const paths = Array.from({ length: pairCount }, () => []);
    const seeds = restart === 0 ? allCells : shuffle(allCells, random);
    for (let pairIndex = 0; pairIndex < pairCount; pairIndex += 1) {
      const seed = seeds[pairIndex];
      occupancy[seed] = pairIndex;
      paths[pairIndex].push(seed);
    }
    let filled = pairCount;
    let nodes = 0;

    function endpointSet() {
      const endpoints = new Set();
      for (const path of paths) {
        endpoints.add(path[0]);
        endpoints.add(path[path.length - 1]);
      }
      return endpoints;
    }

    function emptyComponentsReachable() {
      const endpoints = endpointSet();
      const seen = new Uint8Array(total);
      for (let start = 0; start < total; start += 1) {
        if (occupancy[start] !== -1 || seen[start]) {
          continue;
        }
        const queue = [start];
        seen[start] = 1;
        let touchesEndpoint = false;
        for (let cursor = 0; cursor < queue.length; cursor += 1) {
          for (const next of getNeighbors(queue[cursor], size)) {
            if (occupancy[next] === -1 && !seen[next]) {
              seen[next] = 1;
              queue.push(next);
            } else if (endpoints.has(next)) {
              touchesEndpoint = true;
            }
          }
        }
        if (!touchesEndpoint) {
          return false;
        }
      }
      return true;
    }

    function search() {
      nodes += 1;
      if (nodes > 750000) {
        return false;
      }
      if (filled === total) {
        return (
          paths.every((path) => path.length >= 2) &&
          paths.some((path) => path.length >= longPathMinimum)
        );
      }

      const moves = [];
      for (let pairIndex = 0; pairIndex < paths.length; pairIndex += 1) {
        const path = paths[pairIndex];
        const sides = path.length === 1 ? [0] : [0, 1];
        for (const side of sides) {
          const endpoint = side === 0 ? path[0] : path[path.length - 1];
          for (const next of getNeighbors(endpoint, size)) {
            if (occupancy[next] !== -1) {
              continue;
            }
            const emptyDegree = getNeighbors(next, size).filter(
              (neighbor) => occupancy[neighbor] === -1,
            ).length;
            moves.push({
              pairIndex,
              side,
              next,
              emptyDegree,
              jitter: random(),
            });
          }
        }
      }

      moves.sort(
        (left, right) =>
          left.emptyDegree - right.emptyDegree ||
          left.jitter - right.jitter,
      );
      const branchLimit = Math.min(moves.length, 18);
      for (let index = 0; index < branchLimit; index += 1) {
        const move = moves[index];
        const path = paths[move.pairIndex];
        occupancy[move.next] = move.pairIndex;
        if (move.side === 0) {
          path.unshift(move.next);
        } else {
          path.push(move.next);
        }
        filled += 1;

        const viable =
          (filled % 5 !== 0 || emptyComponentsReachable()) && search();
        if (viable) {
          return true;
        }

        filled -= 1;
        if (move.side === 0) {
          path.shift();
        } else {
          path.pop();
        }
        occupancy[move.next] = -1;
      }
      return false;
    }

    if (search()) {
      return paths.map((path) =>
        path.map((index) => [Math.floor(index / size), index % size]),
      );
    }
  }
  return null;
}

function createStripePaths(rows, columns = rows) {
  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, column) => [row, column]),
  );
}

function listEndpointTransfers(paths) {
  const moves = [];
  for (let from = 0; from < paths.length; from += 1) {
    if (paths[from].length <= 2) {
      continue;
    }
    for (const fromSide of [0, 1]) {
      const fromCell =
        fromSide === 0 ? paths[from][0] : paths[from][paths[from].length - 1];
      for (let to = 0; to < paths.length; to += 1) {
        if (to === from) {
          continue;
        }
        for (const toSide of [0, 1]) {
          const toCell =
            toSide === 0 ? paths[to][0] : paths[to][paths[to].length - 1];
          if (
            Math.abs(fromCell[0] - toCell[0]) +
              Math.abs(fromCell[1] - toCell[1]) ===
            1
          ) {
            moves.push({ from, to, fromSide, toSide });
          }
        }
      }
    }
  }
  return moves;
}

function applyEndpointTransfer(paths, move) {
  const source = paths[move.from];
  const destination = paths[move.to];
  const cell = move.fromSide === 0 ? source.shift() : source.pop();
  if (move.toSide === 0) {
    destination.unshift(cell);
  } else {
    destination.push(cell);
  }
}

function mergeAdjacentPaths(paths, random) {
  const moves = [];
  for (let left = 0; left < paths.length; left += 1) {
    for (let right = left + 1; right < paths.length; right += 1) {
      for (const leftSide of [0, 1]) {
        for (const rightSide of [0, 1]) {
          const leftCell =
            leftSide === 0 ? paths[left][0] : paths[left][paths[left].length - 1];
          const rightCell =
            rightSide === 0
              ? paths[right][0]
              : paths[right][paths[right].length - 1];
          if (
            Math.abs(leftCell[0] - rightCell[0]) +
              Math.abs(leftCell[1] - rightCell[1]) ===
            1
          ) {
            moves.push({ left, right, leftSide, rightSide });
          }
        }
      }
    }
  }
  if (moves.length === 0) {
    return false;
  }
  const move = moves[Math.floor(random() * moves.length)];
  const first =
    move.leftSide === 0 ? [...paths[move.left]].reverse() : [...paths[move.left]];
  const second =
    move.rightSide === 1
      ? [...paths[move.right]].reverse()
      : [...paths[move.right]];
  paths[move.left] = [...first, ...second];
  paths.splice(move.right, 1);
  return true;
}

function generateStructuredPaths(
  rows,
  columns,
  pairCount,
  longPathMinimum,
  random,
  mutationSteps,
) {
  const paths = createStripePaths(rows, columns);
  for (let step = 0; step < mutationSteps; step += 1) {
    const moves = listEndpointTransfers(paths);
    if (moves.length === 0) {
      break;
    }
    applyEndpointTransfer(paths, moves[Math.floor(random() * moves.length)]);
  }

  while (paths.length > pairCount) {
    if (!mergeAdjacentPaths(paths, random)) {
      return null;
    }
  }

  let guard = rows * columns * 4;
  while (
    Math.max(...paths.map((path) => path.length)) < longPathMinimum &&
    guard > 0
  ) {
    guard -= 1;
    const longest = paths.reduce(
      (best, path, index) =>
        path.length > paths[best].length ? index : best,
      0,
    );
    const moves = listEndpointTransfers(paths);
    const preferred = moves.filter((move) => move.to === longest);
    const candidates = preferred.length > 0 ? preferred : moves;
    if (candidates.length === 0) {
      break;
    }
    applyEndpointTransfer(
      paths,
      candidates[Math.floor(random() * candidates.length)],
    );
  }
  return paths;
}

function countTurns(path) {
  let turns = 0;
  for (let index = 2; index < path.length; index += 1) {
    const previous = path[index - 2];
    const current = path[index - 1];
    const next = path[index];
    if (
      current[0] - previous[0] !== next[0] - current[0] ||
      current[1] - previous[1] !== next[1] - current[1]
    ) {
      turns += 1;
    }
  }
  return turns;
}

function generateCandidate({
  size,
  rows = size,
  columns = size,
  pairCount,
  seed,
  longPathMinimum,
  mutationSteps,
}) {
  const random = createPrng(seed);
  const generatedPaths = generateStructuredPaths(
    rows,
    columns,
    pairCount,
    longPathMinimum,
    random,
    mutationSteps ?? rows * 2 + (seed % (columns * 4)),
  );
  if (!generatedPaths) {
    throw new Error(`無法為 ${rows}×${columns} seed ${seed} 建立完整路線覆蓋`);
  }
  const pairs = [];
  const solution = {};

  generatedPaths.forEach((path, index) => {
    const id = String.fromCharCode(65 + index);
    pairs.push({
      id,
      colorIndex: index,
      symbol: Config.symbols[index],
      start: [...path[0]],
      end: [...path[path.length - 1]],
    });
    solution[id] = path;
  });

  const pathLengths = Object.values(solution).map((path) => path.length);
  const totalTurns = Object.values(solution).reduce(
    (sum, path) => sum + countTurns(path),
    0,
  );

  return {
    id: `candidate-${rows}x${columns}-${seed}`,
    ...(rows === columns ? { size: rows } : {}),
    rows,
    columns,
    ordinal: 0,
    chapter: 0,
    difficultyTier: 'candidate',
    seed,
    generatorVersion: Config.generatorVersion,
    pairs,
    solution,
    difficultyScore: 0,
    solverStats: {
      nodesVisited: 0,
      backtracks: 0,
      forcedMoves: 0,
      branchPoints: 0,
      longestPath: Math.max(...pathLengths),
      averagePathLength:
        pathLengths.reduce((sum, length) => sum + length, 0) /
        pathLengths.length,
      totalTurns,
      competitionScore: 0,
    },
  };
}

function serializeLevelFile(packId, levels) {
  const identifier = packId.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const globalName = `CAT_CONNECT_LEVELS_${identifier}`;
  return `(function initCatConnectLevels${identifier}(root, factory) {
  'use strict';
  const levels = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = levels;
  }
  if (root) {
    root.${globalName} = levels;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createLevels() {
  'use strict';
  return ${JSON.stringify(levels, null, 2)};
});
`;
}

module.exports = Object.freeze({
  createPrng,
  shuffle,
  generateHamiltonianPath,
  generatePathCover,
  createStripePaths,
  listEndpointTransfers,
  applyEndpointTransfer,
  mergeAdjacentPaths,
  generateStructuredPaths,
  createSegmentLengths,
  generateCandidate,
  serializeLevelFile,
  countTurns,
  Core,
});
