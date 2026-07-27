'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Core = require('../js/core.js');
const packs = require('../js/packs.js');

const OUTPUT_PATH = path.resolve(__dirname, '..', 'js', 'levels.js');
const MAX_ATTEMPTS_PER_PACK = 250000;

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
  const result = values.slice();

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function generateSolution(size, random) {
  const solution = Array(size).fill(-1);

  function search(row, usedColumnsMask) {
    if (row === size) {
      return true;
    }

    const columns = shuffle(
      Array.from({ length: size }, (_, column) => column),
      random,
    );

    for (const column of columns) {
      const columnBit = 1 << column;
      if ((usedColumnsMask & columnBit) !== 0) {
        continue;
      }
      if (row > 0 && Math.abs(column - solution[row - 1]) <= 1) {
        continue;
      }

      solution[row] = column;
      if (search(row + 1, usedColumnsMask | columnBit)) {
        return true;
      }
      solution[row] = -1;
    }

    return false;
  }

  if (!search(0, 0)) {
    return null;
  }

  return solution;
}

function growRegions(size, solution, random) {
  const regions = Array.from({ length: size }, () => Array(size).fill(-1));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let unassigned = size * size - size;

  solution.forEach((column, row) => {
    regions[row][column] = row;
  });

  while (unassigned > 0) {
    const candidates = [];

    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        if (regions[row][column] !== -1) {
          continue;
        }

        const neighboringRegions = new Set();
        for (const [rowDelta, columnDelta] of directions) {
          const nextRow = row + rowDelta;
          const nextColumn = column + columnDelta;

          if (
            nextRow >= 0 &&
            nextRow < size &&
            nextColumn >= 0 &&
            nextColumn < size &&
            regions[nextRow][nextColumn] !== -1
          ) {
            neighboringRegions.add(regions[nextRow][nextColumn]);
          }
        }

        if (neighboringRegions.size > 0) {
          candidates.push({
            row,
            column,
            neighboringRegions: Array.from(neighboringRegions),
          });
        }
      }
    }

    if (candidates.length === 0) {
      throw new Error('區域擴張提前停止');
    }

    const selectedCell = candidates[Math.floor(random() * candidates.length)];
    regions[selectedCell.row][selectedCell.column] =
      selectedCell.neighboringRegions[
        Math.floor(random() * selectedCell.neighboringRegions.length)
      ];
    unassigned -= 1;
  }

  return regions;
}

function sameSolution(left, right) {
  return (
    Array.isArray(left) &&
    Array.isArray(right) &&
    left.length === right.length &&
    left.every((column, row) => column === right[row])
  );
}

function tryReassignCell(regions, row, column, destinationRegion) {
  const sourceRegion = regions[row][column];
  if (sourceRegion === destinationRegion) {
    return false;
  }

  regions[row][column] = destinationRegion;
  const remainsConnected =
    Core.isRegionConnected(regions, sourceRegion) &&
    Core.isRegionConnected(regions, destinationRegion);

  if (!remainsConnected) {
    regions[row][column] = sourceRegion;
  }

  return remainsConnected;
}

function buildBoundaryMoves(regions, solution, random, alternative = null) {
  const size = regions.length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const moves = [];
  const alternativeRegions = alternative
    ? alternative.map((column, row) => regions[row][column])
    : null;

  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (solution[row] === column) {
        continue;
      }
      if (alternative && alternative[row] !== column) {
        continue;
      }

      const sourceRegion = regions[row][column];
      for (const [rowDelta, columnDelta] of directions) {
        const nextRow = row + rowDelta;
        const nextColumn = column + columnDelta;
        if (
          nextRow < 0 ||
          nextRow >= size ||
          nextColumn < 0 ||
          nextColumn >= size
        ) {
          continue;
        }

        const destinationRegion = regions[nextRow][nextColumn];
        if (destinationRegion === sourceRegion) {
          continue;
        }
        if (
          alternativeRegions &&
          !alternativeRegions.some(
            (regionId, alternativeRow) =>
              alternativeRow !== row && regionId === destinationRegion,
          )
        ) {
          continue;
        }

        moves.push({ row, column, destinationRegion });
      }
    }
  }

  return shuffle(moves, random);
}

function refineRegionsToUnique(regions, solution, random) {
  const level = {
    size: regions.length,
    regions,
    solution,
  };
  const seenLayouts = new Set();
  const maxSteps = regions.length * regions.length * 8;

  for (let step = 0; step < maxSteps; step += 1) {
    const signature = JSON.stringify(Core.canonicalizeRegions(regions));
    seenLayouts.add(signature);
    const solved = Core.countSolutions(level, 2);

    if (solved.count === 1 && sameSolution(solved.firstSolution, solution)) {
      return solved;
    }

    const alternative =
      solved.solutions.find((candidate) => !sameSolution(candidate, solution)) ||
      solved.solutions[0];
    let changed = false;

    if (alternative) {
      for (const move of buildBoundaryMoves(regions, solution, random, alternative)) {
        const sourceRegion = regions[move.row][move.column];
        if (
          tryReassignCell(
            regions,
            move.row,
            move.column,
            move.destinationRegion,
          )
        ) {
          const nextSignature = JSON.stringify(Core.canonicalizeRegions(regions));
          if (!seenLayouts.has(nextSignature)) {
            changed = true;
            break;
          }
          regions[move.row][move.column] = sourceRegion;
        }
      }
    }

    if (!changed) {
      for (const move of buildBoundaryMoves(regions, solution, random)) {
        const sourceRegion = regions[move.row][move.column];
        if (
          tryReassignCell(
            regions,
            move.row,
            move.column,
            move.destinationRegion,
          )
        ) {
          const nextSignature = JSON.stringify(Core.canonicalizeRegions(regions));
          if (!seenLayouts.has(nextSignature)) {
            changed = true;
            break;
          }
          regions[move.row][move.column] = sourceRegion;
        }
      }
    }

    if (!changed) {
      return null;
    }
  }

  return null;
}

function generatePack(pack) {
  const accepted = [];
  const signatures = new Set();
  let attempts = 0;

  while (accepted.length < pack.levelCount) {
    attempts += 1;
    if (attempts > MAX_ATTEMPTS_PER_PACK) {
      throw new Error(
        `${pack.id} 在 ${MAX_ATTEMPTS_PER_PACK} 次嘗試後仍不足 ${pack.levelCount} 關`,
      );
    }

    const seed = pack.seedBase + attempts - 1;
    const random = createPrng(seed);
    const solution = generateSolution(pack.size, random);
    if (!solution) {
      continue;
    }

    const regions = growRegions(pack.size, solution, random);
    const candidate = {
      id: '',
      packId: pack.id,
      ordinal: 0,
      size: pack.size,
      regions,
      solution,
      difficultyScore: 0,
      seed,
    };
    const refinedSolution = refineRegionsToUnique(regions, solution, random);
    if (!refinedSolution) {
      continue;
    }

    const definition = Core.validateLevelDefinition(candidate);
    if (!definition.valid) {
      continue;
    }

    const signature = JSON.stringify(Core.canonicalizeRegions(regions));
    if (signatures.has(signature)) {
      continue;
    }

    const solved = Core.countSolutions(candidate, 2);
    if (
      solved.count !== 1 ||
      !solved.firstSolution ||
      !sameSolution(solved.firstSolution, solution)
    ) {
      continue;
    }

    signatures.add(signature);
    candidate.solution = solved.firstSolution;
    candidate.difficultyScore =
      solved.nodesVisited + solved.backtracks * pack.size;
    accepted.push(candidate);
    process.stdout.write(
      `${pack.title}：${accepted.length}/${pack.levelCount}（嘗試 ${attempts}）\n`,
    );
  }

  return accepted
    .sort(
      (left, right) =>
        left.difficultyScore - right.difficultyScore || left.seed - right.seed,
    )
    .map((level, index) => ({
      ...level,
      id: `${pack.id}-${String(index + 1).padStart(3, '0')}`,
      ordinal: index + 1,
    }));
}

function serializeLevels(levels) {
  const payload = JSON.stringify(levels, null, 2);

  return `(function initCatPuzzleLevels(root, factory) {
  'use strict';

  const levels = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = levels;
  }

  if (root) {
    root.CAT_PUZZLE_LEVELS = levels;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createLevels() {
  'use strict';

  return ${payload};
});
`;
}

function main() {
  const selectedPacks = process.env.CAT_PACK_ID
    ? packs.filter((pack) => pack.id === process.env.CAT_PACK_ID)
    : packs;

  if (selectedPacks.length === 0) {
    throw new Error(`找不到關卡包：${process.env.CAT_PACK_ID}`);
  }

  const levels = selectedPacks.flatMap(generatePack);
  fs.writeFileSync(OUTPUT_PATH, serializeLevels(levels), 'utf8');
  process.stdout.write(`已寫入 ${levels.length} 關：${OUTPUT_PATH}\n`);
}

main();
