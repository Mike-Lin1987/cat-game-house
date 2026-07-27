'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Core = require('../../games/cat-color-connect/js/core.js');
const Config = require('../../games/cat-color-connect/js/config.js');
const {
  createPrng,
  generateCandidate,
  serializeLevelFile,
} = require('./generator.js');

const ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_DIRECTORY = path.join(
  ROOT,
  'games',
  'cat-color-connect',
  'js',
);
const TEMP_DIRECTORY = path.join(ROOT, '.tmp', 'cat-color-connect');

function parseArguments(argv) {
  const options = { packId: null, resume: false, force: false };
  for (const argument of argv) {
    if (argument.startsWith('--size=')) {
      const raw = argument.slice('--size='.length).toLowerCase();
      options.packId = raw.includes('x') ? raw : `${raw}x${raw}`;
    } else if (argument === '--resume') {
      options.resume = true;
    } else if (argument === '--force') {
      options.force = true;
    } else {
      throw new Error(`不支援的參數：${argument}`);
    }
  }
  if (
    options.packId !== null &&
    !Config.packs.some((pack) => pack.id === options.packId)
  ) {
    throw new Error(
      `--size 只能是 ${Config.packs.map((pack) => pack.id).join('、')}`,
    );
  }
  return options;
}

function getChapter(ordinal) {
  return Math.floor((ordinal - 1) / 10) + 1;
}

function getDifficultyTier(pack, ordinal) {
  let boundary = 0;
  for (const tier of pack.tiers) {
    boundary += tier.count;
    if (ordinal <= boundary) {
      return tier.name;
    }
  }
  return pack.tiers[pack.tiers.length - 1].name;
}

function calculateCompetitionScore(level) {
  const { rows, columns } = Core.getBoardDimensions(level);
  const owner = Array.from({ length: rows }, () =>
    Array(columns).fill(null),
  );
  for (const pair of level.pairs) {
    for (const [row, column] of level.solution[pair.id]) {
      owner[row][column] = pair.id;
    }
  }
  let boundaries = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      if (row + 1 < rows && owner[row][column] !== owner[row + 1][column]) {
        boundaries += 1;
      }
      if (
        column + 1 < columns &&
        owner[row][column] !== owner[row][column + 1]
      ) {
        boundaries += 1;
      }
    }
  }
  return boundaries;
}

function calculateDifficulty(level, solved) {
  const pathLengths = Object.values(level.solution).map((route) => route.length);
  const longestPath = Math.max(...pathLengths);
  const averagePathLength =
    pathLengths.reduce((sum, length) => sum + length, 0) / pathLengths.length;
  let totalTurns = 0;
  for (const route of Object.values(level.solution)) {
    for (let index = 2; index < route.length; index += 1) {
      const first = route[index - 2];
      const middle = route[index - 1];
      const last = route[index];
      if (
        middle[0] - first[0] !== last[0] - middle[0] ||
        middle[1] - first[1] !== last[1] - middle[1]
      ) {
        totalTurns += 1;
      }
    }
  }
  const competitionScore = calculateCompetitionScore(level);
  const score = Math.max(
    1,
    solved.nodesVisited +
      solved.backtracks * 12 +
      solved.branchPoints * 4 +
      totalTurns * 3 +
      longestPath * 2 +
      competitionScore * 5 -
      solved.forcedMoves,
  );
  return {
    score,
    stats: {
      nodesVisited: solved.nodesVisited,
      backtracks: solved.backtracks,
      forcedMoves: solved.forcedMoves,
      branchPoints: solved.branchPoints,
      longestPath,
      averagePathLength: Number(averagePathLength.toFixed(2)),
      totalTurns,
      competitionScore,
    },
  };
}

function getTempPath(packId) {
  return path.join(TEMP_DIRECTORY, `generated-${packId}.json`);
}

function loadProgress(packId, resume) {
  const tempPath = getTempPath(packId);
  if (!resume || !fs.existsSync(tempPath)) {
    return {
      attemptsByTier: [],
      acceptedByTier: [],
      endpointSignatures: [],
      solutionSignatures: [],
    };
  }
  return JSON.parse(fs.readFileSync(tempPath, 'utf8'));
}

function saveProgress(packId, progress) {
  fs.mkdirSync(TEMP_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    getTempPath(packId),
    JSON.stringify(progress, null, 2),
    'utf8',
  );
}

function generatePack(pack, options = {}) {
  const progress = loadProgress(pack.id, options.resume);
  const endpointSignatures = new Set(progress.endpointSignatures || []);
  const solutionSignatures = new Set(progress.solutionSignatures || []);
  const acceptedByTier = pack.tiers.map(
    (tier, index) => (progress.acceptedByTier?.[index] || []).slice(0, tier.count),
  );
  const attemptsByTier = pack.tiers.map(
    (_, index) => progress.attemptsByTier?.[index] || 0,
  );
  const onProgress = options.onProgress || (() => {});

  for (let tierIndex = 0; tierIndex < pack.tiers.length; tierIndex += 1) {
    const tier = pack.tiers[tierIndex];
    const accepted = acceptedByTier[tierIndex];
    while (accepted.length < tier.count) {
      attemptsByTier[tierIndex] += 1;
      const attempt = attemptsByTier[tierIndex];
      if (attempt > pack.maxAttempts) {
        throw new Error(
          `${pack.title} ${tier.name} 僅完成 ${accepted.length}/${tier.count}，已達最大候選數`,
        );
      }
      const seed = pack.seedBase + tierIndex * 1000000 + attempt;
      const random = createPrng(seed ^ Config.masterSeed);
      const mutationSteps =
        tier.mutationMin +
        Math.floor(random() * (tier.mutationMax - tier.mutationMin + 1));
      let candidate;
      try {
        candidate = generateCandidate({
          size: pack.size,
          rows: pack.rows,
          columns: pack.columns,
          pairCount: tier.pairCount,
          seed,
          longPathMinimum: tier.longPathMinimum,
          mutationSteps,
        });
      } catch {
        continue;
      }

      const endpointSignature =
        Core.canonicalizeEndpointSignature(candidate);
      if (endpointSignatures.has(endpointSignature)) {
        continue;
      }

      const solved = Core.countSolutions(candidate, 2, {
        maxNodes: pack.solverMaxNodes,
        timeoutMs: pack.solverTimeoutMs,
      });
      if (solved.timedOut) {
        if (attempt % 25 === 0) {
          onProgress(`[${pack.rows}×${pack.columns}] Rejected: validation timeout`);
        }
        continue;
      }
      if (solved.count !== 1 || !solved.firstSolution) {
        if (attempt % 50 === 0) {
          onProgress(
            `[${pack.rows}×${pack.columns}] Rejected: ${solved.count === 0 ? 'no solution' : 'multiple solutions'}`,
          );
        }
        continue;
      }

      candidate.solution = solved.firstSolution;
      const solutionSignature =
        Core.canonicalizeSolutionSignature(candidate);
      if (solutionSignatures.has(solutionSignature)) {
        continue;
      }
      if (Core.validateStoredSolution(candidate).length > 0) {
        continue;
      }

      const difficulty = calculateDifficulty(candidate, solved);
      candidate.difficultyScore = difficulty.score;
      candidate.solverStats = difficulty.stats;
      candidate.difficultyTier = tier.name;
      candidate.endpointSignature = endpointSignature;
      candidate.solutionSignature = solutionSignature;
      accepted.push(candidate);
      endpointSignatures.add(endpointSignature);
      solutionSignatures.add(solutionSignature);
      onProgress(
        `[${pack.rows}×${pack.columns}] ${acceptedByTier.flat().length} / ${pack.levelCount} completed — ${tier.name}, candidate ${attempt}`,
      );
      saveProgress(pack.id, {
        attemptsByTier,
        acceptedByTier,
        endpointSignatures: [...endpointSignatures],
        solutionSignatures: [...solutionSignatures],
      });
    }
  }

  return acceptedByTier
    .flat()
    .sort(
      (left, right) =>
        left.difficultyScore - right.difficultyScore ||
        left.endpointSignature.localeCompare(right.endpointSignature),
    )
    .map((level, index) => {
      const ordinal = index + 1;
      return {
        ...level,
        id: `${pack.id}-${String(ordinal).padStart(3, '0')}`,
        packId: pack.id,
        ...(pack.rows === pack.columns ? { size: pack.rows } : {}),
        rows: pack.rows,
        columns: pack.columns,
        ordinal,
        chapter: getChapter(ordinal),
        difficultyTier: getDifficultyTier(pack, ordinal),
      };
    });
}

function serializeAggregator() {
  const commonJsSources = Config.packs
    .map((pack) => `        ...require('./levels-${pack.id}.js'),`)
    .join('\n');
  const browserSources = Config.packs
    .map((pack) => {
      const identifier = pack.id.toUpperCase().replace(/[^A-Z0-9]/g, '_');
      return `        ...(root.CAT_CONNECT_LEVELS_${identifier} || []),`;
    })
    .join('\n');
  return `(function initAllCatConnectLevels(root) {
  'use strict';
  const levels = typeof module === 'object' && module.exports
    ? [
${commonJsSources}
      ]
    : [
${browserSources}
      ];
  if (typeof module === 'object' && module.exports) {
    module.exports = levels;
  }
  if (root) {
    root.CAT_CONNECT_LEVELS = levels;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
`;
}

function writePack(packId, levels) {
  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    path.join(OUTPUT_DIRECTORY, `levels-${packId}.js`),
    serializeLevelFile(packId, levels),
    'utf8',
  );
}

function main(argv = process.argv.slice(2)) {
  const options = parseArguments(argv);
  if (options.force) {
    if (options.packId) {
      fs.rmSync(getTempPath(options.packId), { force: true });
    } else if (fs.existsSync(TEMP_DIRECTORY)) {
      fs.rmSync(TEMP_DIRECTORY, { recursive: true, force: true });
    }
  }
  const selected = Config.packs.filter(
    (pack) => options.packId === null || pack.id === options.packId,
  );
  const startedAt = Date.now();
  for (const pack of selected) {
    const levels = generatePack(pack, {
      resume: options.resume,
      onProgress: (message) => process.stdout.write(`${message}\n`),
    });
    if (levels.length !== pack.levelCount) {
      throw new Error(
        `${pack.title} 關卡不足：${levels.length}/${pack.levelCount}`,
      );
    }
    writePack(pack.id, levels);
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIRECTORY, 'levels.js'),
    serializeAggregator(),
    'utf8',
  );
  process.stdout.write(
    `貓咪彩色連線固定關卡產生完成，耗時 ${((Date.now() - startedAt) / 1000).toFixed(1)} 秒\n`,
  );
}

if (require.main === module) {
  main();
}

module.exports = Object.freeze({
  parseArguments,
  calculateCompetitionScore,
  calculateDifficulty,
  generatePack,
  serializeAggregator,
  main,
});
