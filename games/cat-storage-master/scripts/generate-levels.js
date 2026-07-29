'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const core = require('../js/core.js');
const solver = require('../js/solver.js');

const GAME_ROOT = path.resolve(__dirname, '..');
const REPOSITORY_ROOT = path.resolve(GAME_ROOT, '..', '..');
const DATA_DIRECTORY = path.join(GAME_ROOT, 'js', 'data');
const STAGING_DIRECTORY = path.join(REPOSITORY_ROOT, '.tmp', 'cat-storage-master', 'publish-staging');
const CACHE_PATH = path.join(REPOSITORY_ROOT, '.tmp', 'cat-storage-master', 'generation-cache.json');
const GENERATOR_VERSION = 1;

const THEMES = Object.freeze([
  ['dried-fish', '魚乾'],
  ['cat-can', '貓罐頭'],
  ['yarn', '毛線球'],
  ['milk', '鮮奶盒'],
  ['paw-cookie', '貓掌餅乾'],
  ['scratcher', '貓抓板'],
  ['sleep-mat', '睡墊'],
  ['fish-toy', '小魚玩具'],
  ['cardboard', '紙箱'],
  ['grass-mat', '草墊'],
  ['teaser', '逗貓棒'],
  ['cat-pillow', '貓咪靠枕'],
]);

const CHAPTERS = Object.freeze([
  { chapter: 1, title: '整理入門', sizes: [4, 5], pieces: [4, 5], removals: [0, 1], maxPiece: 5, flipRate: 0, rotateRate: 0.8, slack: [10, 16] },
  { chapter: 2, title: '紙箱派對', sizes: [5, 6], pieces: [5, 7], removals: [1, 3], maxPiece: 7, flipRate: 0, rotateRate: 0.88, slack: [9, 14] },
  { chapter: 3, title: '房間整理', sizes: [6, 7], pieces: [7, 9], removals: [2, 5], maxPiece: 8, flipRate: 0.3, rotateRate: 0.92, slack: [8, 13] },
  { chapter: 4, title: '搬家挑戰', sizes: [7, 8], pieces: [9, 12], removals: [4, 8], maxPiece: 9, flipRate: 0.22, rotateRate: 0.76, slack: [7, 12] },
  { chapter: 5, title: '終極收納', sizes: [8, 9, 10], pieces: [11, 15], removals: [6, 12], maxPiece: 10, flipRate: 0.12, rotateRate: 0.45, slack: [6, 10] },
]);

function createPrng(seed) {
  let state = seed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomInteger(random, minimum, maximum) {
  return minimum + Math.floor(random() * (maximum - minimum + 1));
}

function shuffle(random, values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function sortCells(cells) {
  return [...cells].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function adjacentCells([row, column]) {
  return [[row - 1, column], [row + 1, column], [row, column - 1], [row, column + 1]];
}

function chooseBoard(chapter, chapterIndex) {
  if (chapter.chapter === 5) {
    if (chapterIndex < 6) return 8;
    if (chapterIndex < 13) return 9;
    return 10;
  }
  return chapter.sizes[chapterIndex % chapter.sizes.length];
}

function createFillableArea(rows, columns, removalCount, random) {
  const allCells = [];
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) allCells.push([row, column]);
  }
  const fillable = new Map(allCells.map((cell) => [cell.join(','), cell]));
  const centerRow = (rows - 1) / 2;
  const centerColumn = (columns - 1) / 2;
  const candidates = shuffle(random, allCells).sort((a, b) => {
    const edgeA = Math.min(a[0], rows - 1 - a[0], a[1], columns - 1 - a[1]);
    const edgeB = Math.min(b[0], rows - 1 - b[0], b[1], columns - 1 - b[1]);
    const centerA = Math.abs(a[0] - centerRow) + Math.abs(a[1] - centerColumn);
    const centerB = Math.abs(b[0] - centerRow) + Math.abs(b[1] - centerColumn);
    return edgeA - edgeB || centerB - centerA;
  });
  const removed = [];
  for (const cell of candidates) {
    if (removed.length >= removalCount) break;
    const key = cell.join(',');
    fillable.delete(key);
    if (core.isConnectedCells([...fillable.values()])) removed.push(cell);
    else fillable.set(key, cell);
  }
  return { fillableCells: sortCells([...fillable.values()]), removedCells: sortCells(removed) };
}

function partitionCells(fillableCells, pieceCount, random) {
  const byKey = new Map(fillableCells.map((cell) => [cell.join(','), cell]));
  const seeds = [];
  for (const cell of shuffle(random, fillableCells)) {
    if (seeds.length >= pieceCount) break;
    const distance = seeds.length
      ? Math.min(...seeds.map((seed) => Math.abs(seed[0] - cell[0]) + Math.abs(seed[1] - cell[1])))
      : Infinity;
    if (distance > 1 || fillableCells.length < pieceCount * 4) seeds.push(cell);
  }
  if (seeds.length < pieceCount) {
    for (const cell of shuffle(random, fillableCells)) {
      if (seeds.length >= pieceCount) break;
      if (!seeds.some((seed) => seed[0] === cell[0] && seed[1] === cell[1])) seeds.push(cell);
    }
  }
  const regions = seeds.map((cell) => [cell]);
  const owners = new Map(seeds.map((cell, index) => [cell.join(','), index]));
  const unassigned = new Set(fillableCells.map((cell) => cell.join(',')).filter((key) => !owners.has(key)));

  while (unassigned.size) {
    let progress = false;
    for (const regionIndex of shuffle(random, regions.map((_, index) => index))) {
      const frontier = [];
      for (const cell of regions[regionIndex]) {
        for (const adjacent of adjacentCells(cell)) {
          const key = adjacent.join(',');
          if (unassigned.has(key)) frontier.push(byKey.get(key));
        }
      }
      if (!frontier.length) continue;
      const chosen = frontier[Math.floor(random() * frontier.length)];
      const key = chosen.join(',');
      unassigned.delete(key);
      owners.set(key, regionIndex);
      regions[regionIndex].push(chosen);
      progress = true;
    }
    if (progress) continue;
    const key = unassigned.values().next().value;
    const cell = byKey.get(key);
    const neighbor = adjacentCells(cell).map((adjacent) => owners.get(adjacent.join(','))).find(Number.isInteger);
    if (!Number.isInteger(neighbor)) return null;
    unassigned.delete(key);
    owners.set(key, neighbor);
    regions[neighbor].push(cell);
  }
  return regions.map(sortCells);
}

function regionPlacement(cells) {
  const minRow = Math.min(...cells.map((cell) => cell[0]));
  const minColumn = Math.min(...cells.map((cell) => cell[1]));
  return {
    cells: core.normalizeCells(cells),
    placement: { row: minRow, column: minColumn, rotation: 0, flipped: false },
  };
}

function transformBoardPoint(transformIndex, row, column) {
  const transforms = [
    [row, column],
    [row, -column],
    [-row, column],
    [-row, -column],
    [column, row],
    [column, -row],
    [-column, row],
    [-column, -row],
  ];
  return transforms[transformIndex];
}

function canonicalSignature(level) {
  const boardCells = [];
  for (let row = 0; row < level.rows; row += 1) {
    for (let column = 0; column < level.columns; column += 1) boardCells.push([row, column]);
  }
  const fixedCells = (level.fixedItems || []).flatMap((item) => item.cells);
  const solutionRegions = level.pieces.map((piece) =>
    core.getAbsoluteCells(piece, { ...level.solution[piece.id], placed: true }));
  const variants = [];
  for (let transformIndex = 0; transformIndex < 8; transformIndex += 1) {
    const transformedBoard = boardCells.map(([row, column]) =>
      transformBoardPoint(transformIndex, row, column));
    const minRow = Math.min(...transformedBoard.map((cell) => cell[0]));
    const minColumn = Math.min(...transformedBoard.map((cell) => cell[1]));
    const transformCells = (cells) => sortCells(cells.map(([row, column]) => {
      const point = transformBoardPoint(transformIndex, row, column);
      return [point[0] - minRow, point[1] - minColumn];
    })).map((cell) => cell.join(',')).join(';');
    const maxRow = Math.max(...transformedBoard.map((cell) => cell[0])) - minRow + 1;
    const maxColumn = Math.max(...transformedBoard.map((cell) => cell[1])) - minColumn + 1;
    const regions = solutionRegions.map(transformCells).sort().join('|');
    variants.push([
      `${maxRow}x${maxColumn}`,
      transformCells(level.fillableCells),
      transformCells(level.blockedCells),
      transformCells(fixedCells),
      regions,
      level.pieces.map((piece) => `${piece.cells.length}:${Number(piece.allowFlip)}`).sort().join(','),
    ].join('#'));
  }
  return variants.sort()[0];
}

function createFixedItems(removedCells, random) {
  const fixedCount = removedCells.length ? Math.max(1, Math.floor(removedCells.length / 2)) : 0;
  const fixedCells = shuffle(random, removedCells).slice(0, fixedCount);
  return fixedCells.map((cell, index) => ({
    id: `fixed-${index + 1}`,
    type: ['sleeping-cat', 'yarn', 'cardboard'][index % 3],
    label: ['睡覺中的貓咪', '毛線球', '紙箱隔板'][index % 3],
    cells: [cell],
  }));
}

function buildCandidate(chapter, chapterIndex, attempt) {
  const seed = chapter.chapter * 100000 + chapterIndex * 1000 + attempt;
  const random = createPrng(seed);
  const size = chooseBoard(chapter, chapterIndex);
  const rows = size;
  const columns = size;
  const removalCount = randomInteger(random, chapter.removals[0], chapter.removals[1]);
  const area = createFillableArea(rows, columns, removalCount, random);
  const maxPossiblePieces = Math.floor(area.fillableCells.length / 2);
  const pieceCount = Math.min(
    maxPossiblePieces,
    randomInteger(random, chapter.pieces[0], chapter.pieces[1]),
  );
  const regions = partitionCells(area.fillableCells, pieceCount, random);
  if (!regions || regions.some((region) => region.length < 2 || region.length > chapter.maxPiece)) return null;
  const fixedItems = createFixedItems(area.removedCells, random);
  const fixedKeys = new Set(fixedItems.flatMap((item) => item.cells.map((cell) => cell.join(','))));
  const blockedCells = area.removedCells.filter((cell) => !fixedKeys.has(cell.join(',')));
  const pieces = [];
  const solution = {};
  regions.forEach((region, index) => {
    const shape = regionPlacement(region);
    const theme = THEMES[(index + chapterIndex + chapter.chapter) % THEMES.length];
    const allowFlip = chapter.chapter >= 3 && random() < chapter.flipRate
      && core.cellsSignature(core.flipCells(shape.cells)) !== core.cellsSignature(shape.cells);
    const allowRotate = random() < chapter.rotateRate
      && core.getUniqueTransforms({ cells: shape.cells, allowRotate: true, allowFlip: false }).length > 1;
    const id = `piece-${String(index + 1).padStart(2, '0')}`;
    pieces.push({
      id,
      label: theme[1],
      theme: theme[0],
      cells: shape.cells,
      initialRotation: allowRotate ? randomInteger(random, 0, 3) : 0,
      initialFlipped: allowFlip ? random() < 0.5 : false,
      allowRotate,
      allowFlip,
      equivalenceGroup: null,
    });
    solution[id] = shape.placement;
  });
  if (chapter.chapter >= 3 && !pieces.some((piece) => piece.allowFlip)) {
    const flippable = pieces.find((piece) =>
      core.cellsSignature(core.flipCells(piece.cells)) !== core.cellsSignature(piece.cells));
    if (!flippable) return null;
    flippable.allowFlip = true;
  }
  const draft = {
    id: 'L000',
    chapter: chapter.chapter,
    chapterTitle: chapter.title,
    title: `${chapter.title} ${chapterIndex + 1}`,
    rows,
    columns,
    difficulty: chapter.chapter,
    difficultyScore: 0,
    seed,
    generatorVersion: GENERATOR_VERSION,
    parMoves: 0,
    moveLimit: 0,
    fillableCells: area.fillableCells,
    blockedCells,
    fixedItems,
    pieces,
    solution,
    metrics: {},
  };
  draft.parMoves = core.calculateParMoves(draft);
  draft.moveLimit = draft.parMoves + randomInteger(random, chapter.slack[0], chapter.slack[1]);
  if (core.validateStoredSolution(draft).length) return null;
  const solved = solver.solveLevel(draft, { maxSolutions: 2 });
  if (solved.solutionCount !== 1) return null;
  const flipCount = pieces.filter((piece) => piece.allowFlip).length;
  const irregularCount = pieces.filter((piece) => {
    const height = Math.max(...piece.cells.map((cell) => cell[0])) + 1;
    const width = Math.max(...piece.cells.map((cell) => cell[1])) + 1;
    return piece.cells.length !== height * width;
  }).length;
  draft.difficultyScore = Math.round(
    rows * columns * 2
      + pieces.length * 11
      + flipCount * 13
      + irregularCount * 5
      + area.removedCells.length * 4
      + Math.log2(solved.nodesVisited + 1) * 18
      + Math.log2(solved.backtracks + 1) * 12,
  );
  draft.metrics = {
    fillableCellCount: area.fillableCells.length,
    pieceCount: pieces.length,
    blockedCellCount: blockedCells.length,
    fixedItemCount: fixedItems.length,
    allowFlipPieceCount: flipCount,
    irregularPieceCount: irregularCount,
    solutionCount: solved.solutionCount,
    solverNodes: solved.nodesVisited,
    solverBacktracks: solved.backtracks,
    solverMaxDepth: solved.maxDepth,
    solverCandidateCount: solved.candidateCount,
  };
  draft.canonicalSignature = canonicalSignature(draft);
  return draft;
}

function generateAll(options) {
  const cached = options.resume && fs.existsSync(CACHE_PATH)
    ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
    : [];
  const levels = Array.isArray(cached) ? cached : [];
  const signatures = new Set(levels.map((level) => level.canonicalSignature));
  const wantedChapter = options.chapter || null;
  const wantedLevelNumber = options.level ? Number(options.level.replace(/^L/, '')) : null;

  for (const chapter of CHAPTERS) {
    for (let chapterIndex = 0; chapterIndex < 20; chapterIndex += 1) {
      const provisionalNumber = (chapter.chapter - 1) * 20 + chapterIndex + 1;
      if (wantedChapter && chapter.chapter !== wantedChapter) continue;
      if (wantedLevelNumber && provisionalNumber !== wantedLevelNumber) continue;
      const existingIndex = levels.findIndex((level) =>
        level.chapter === chapter.chapter && level._chapterIndex === chapterIndex);
      if (existingIndex >= 0 && !options.force) continue;
      let accepted = null;
      for (let attempt = 1; attempt <= 5000; attempt += 1) {
        const candidate = buildCandidate(chapter, chapterIndex, attempt);
        if (!candidate || signatures.has(candidate.canonicalSignature)) continue;
        candidate._chapterIndex = chapterIndex;
        accepted = candidate;
        break;
      }
      if (!accepted) throw new Error(`無法產生第 ${chapter.chapter} 章第 ${chapterIndex + 1} 關`);
      if (existingIndex >= 0) {
        signatures.delete(levels[existingIndex].canonicalSignature);
        levels.splice(existingIndex, 1);
      }
      levels.push(accepted);
      signatures.add(accepted.canonicalSignature);
      fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
      fs.writeFileSync(CACHE_PATH, `${JSON.stringify(levels)}\n`);
      process.stdout.write(`Generated chapter ${chapter.chapter}: ${chapterIndex + 1}/20\r`);
    }
    if (!wantedLevelNumber && (!wantedChapter || wantedChapter === chapter.chapter)) process.stdout.write('\n');
  }

  if (wantedChapter || wantedLevelNumber) return levels;
  if (levels.length !== 100) throw new Error(`需要 100 關，實際 ${levels.length} 關`);
  const ordered = [];
  for (const chapter of CHAPTERS) {
    const chapterLevels = levels
      .filter((level) => level.chapter === chapter.chapter)
      .sort((a, b) => a.difficultyScore - b.difficultyScore || a.canonicalSignature.localeCompare(b.canonicalSignature));
    chapterLevels.forEach((level, index) => {
      delete level._chapterIndex;
      const number = (chapter.chapter - 1) * 20 + index + 1;
      level.id = `L${String(number).padStart(3, '0')}`;
      level.title = index === 0 && chapter.chapter === 1
        ? '第一次收納'
        : index === 19 && chapter.chapter === 5 ? '終極收納大師' : `${chapter.title} ${index + 1}`;
    });
    ordered.push(...chapterLevels);
  }
  return ordered;
}

function serializeLevelGroup(globalName, levels) {
  return `(function (root, factory) {\n`
    + `  const levels = factory();\n`
    + `  if (typeof module === 'object' && module.exports) module.exports = levels;\n`
    + `  else root.${globalName} = levels;\n`
    + `})(typeof globalThis !== 'undefined' ? globalThis : this, function () {\n`
    + `  'use strict';\n`
    + `  return Object.freeze(${JSON.stringify(levels, null, 2)});\n`
    + `});\n`;
}

function buildDataFiles(levels, directory) {
  fs.mkdirSync(directory, { recursive: true });
  for (let start = 0; start < 100; start += 20) {
    const lower = String(start + 1).padStart(3, '0');
    const upper = String(start + 20).padStart(3, '0');
    const globalName = `CAT_STORAGE_LEVELS_${lower.replace(/^0+/, '').padStart(3, '0')}_${upper.replace(/^0+/, '').padStart(3, '0')}`;
    fs.writeFileSync(
      path.join(directory, `levels-${lower}-${upper}.js`),
      serializeLevelGroup(globalName, levels.slice(start, start + 20)),
    );
  }
  const indexSource = `(function (root, factory) {\n`
    + `  const groups = typeof module === 'object' && module.exports\n`
    + `    ? [require('./levels-001-020.js'), require('./levels-021-040.js'), require('./levels-041-060.js'), require('./levels-061-080.js'), require('./levels-081-100.js')]\n`
    + `    : [root.CAT_STORAGE_LEVELS_001_020, root.CAT_STORAGE_LEVELS_021_040, root.CAT_STORAGE_LEVELS_041_060, root.CAT_STORAGE_LEVELS_061_080, root.CAT_STORAGE_LEVELS_081_100];\n`
    + `  const levels = factory(groups);\n`
    + `  if (typeof module === 'object' && module.exports) module.exports = levels;\n`
    + `  else root.CAT_STORAGE_LEVELS = levels;\n`
    + `})(typeof globalThis !== 'undefined' ? globalThis : this, function (groups) {\n`
    + `  'use strict';\n`
    + `  return Object.freeze(groups.flat());\n`
    + `});\n`;
  fs.writeFileSync(path.join(directory, 'levels-index.js'), indexSource);
}

function hashDirectory(directory) {
  const hash = crypto.createHash('sha256');
  for (const name of fs.readdirSync(directory).sort()) {
    hash.update(name);
    hash.update(fs.readFileSync(path.join(directory, name)));
  }
  return hash.digest('hex');
}

function parseOptions(argumentsList) {
  const options = { chapter: null, level: null, resume: false, force: false };
  for (const argument of argumentsList) {
    if (argument.startsWith('--chapter=')) options.chapter = Number(argument.split('=')[1]);
    else if (argument.startsWith('--level=')) options.level = argument.split('=')[1].toUpperCase();
    else if (argument === '--resume') options.resume = true;
    else if (argument === '--force') options.force = true;
  }
  return options;
}

function publish(levels) {
  fs.rmSync(STAGING_DIRECTORY, { recursive: true, force: true });
  buildDataFiles(levels, STAGING_DIRECTORY);
  const stagedLevels = require(path.join(STAGING_DIRECTORY, 'levels-index.js'));
  if (stagedLevels.length !== 100) throw new Error('staging 關卡數不是 100');
  fs.mkdirSync(DATA_DIRECTORY, { recursive: true });
  for (const name of fs.readdirSync(STAGING_DIRECTORY)) {
    fs.copyFileSync(path.join(STAGING_DIRECTORY, name), path.join(DATA_DIRECTORY, name));
  }
  return hashDirectory(DATA_DIRECTORY);
}

function main() {
  const options = parseOptions(process.argv.slice(2));
  const levels = generateAll(options);
  if (options.chapter || options.level) {
    process.stdout.write(`Generated cache entries: ${levels.length}\n`);
    return;
  }
  const hash = publish(levels);
  process.stdout.write(`Published 100 deterministic levels. SHA-256: ${hash}\n`);
}

if (require.main === module) main();

module.exports = {
  CHAPTERS,
  THEMES,
  createPrng,
  buildCandidate,
  canonicalSignature,
  generateAll,
  buildDataFiles,
  hashDirectory,
  parseOptions,
};
