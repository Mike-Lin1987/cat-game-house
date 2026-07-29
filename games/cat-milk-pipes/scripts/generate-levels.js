'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIRECTORY = path.join(ROOT, 'js', 'data');
const REPOSITORY_ROOT = path.resolve(ROOT, '..', '..');
const WORK_DIRECTORY = path.join(REPOSITORY_ROOT, '.tmp', 'cat-milk-pipes');
const CACHE_DIRECTORY = path.join(WORK_DIRECTORY, 'generator-cache');
const STAGING_DIRECTORY = path.join(WORK_DIRECTORY, 'publish-staging');
const GENERATOR_VERSION = 1;
const CHAPTERS = Object.freeze([
  { number: 1, name: '送奶入門', size: 5, active: [12, 25], bowls: [2, 4], wrongRatio: 0.4, tolerance: [16, 24] },
  { number: 2, name: '分流管線', size: 6, active: [27, 36], bowls: [4, 6], wrongRatio: 0.5, tolerance: [14, 22] },
  { number: 3, name: '貓咪社區', size: 7, active: [36, 49], bowls: [6, 9], wrongRatio: 0.55, tolerance: [12, 20] },
  { number: 4, name: '鮮奶工廠', size: 8, active: [48, 64], bowls: [8, 12], wrongRatio: 0.6, tolerance: [10, 18] },
  { number: 5, name: '全城送奶', size: 10, active: [65, 95], bowls: [10, 16], wrongRatio: 0.65, tolerance: [8, 16] },
]);
const TITLES = Object.freeze([
  ['第一杯鮮奶', '窗邊的早安', '奶香小徑', '轉角遇見碗', '藍瓶出發', '紙箱旁的支線', '兩隻等待貓', '貓掌路標', '彎彎送奶路', '早餐時間', '暖爐邊的碗', '小小分流', '奶滴不迷路', '三碗同歡', '直線練習曲', '鎖定的提示', '午後牛奶', '客廳巡迴', '送奶小隊', '入門畢業日'],
  ['巷口分流站', '四碗早餐會', '毛線球岔路', '紙箱後方', '左右送奶線', '長廊轉運', '貓咪小餐桌', '奶香雙主幹', '盆栽間的小路', '午後分流', '六碗的約定', '藍白轉運站', '彎管集合', '窗台支線', '貓掌交叉口', '兩側都要送', '安靜的長管', '分流值日生', '奶槽新路線', '第二章慶功宴'],
  ['社區早餐鐘', '屋頂下的管線', '七碗俱樂部', '中庭送奶網', '紙箱迷巷', '轉角貓鄰居', '毛線球廣場', '藍瓶巡街', '社區長支線', '盆栽小徑', '九碗早茶', '不規則街廓', '貓掌轉運所', '奶香環城路', '樓梯旁的碗', '三層分流', '窗台到中庭', '社區晚餐鐘', '最後一條街', '全區通奶日'],
  ['工廠晨班', '八碗裝填線', '藍白輸送帶', '狹窄維修道', '十字分流器', '紙箱倉儲區', '奶槽壓力測試', '雙線主幹', '工廠午休', '長管校準', '十二碗訂單', '閥門值日', '鮮奶轉運層', '毛線球禁區', '夜班送奶車', '大型分流台', '管線檢查日', '全廠亮燈', '最後一批鮮奶', '工廠完工宴'],
  ['全城晨光', '十碗出發', '舊城長支線', '新城分流網', '河畔送奶路', '貓咪中央站', '奶香大街', '屋頂與窗台', '十二區配送', '全城午茶', '巷弄交織', '藍瓶環城', '十五碗晚餐', '紙箱迷城', '毛線球大道', '全域轉運', '夜色送奶線', '最後兩條支線', '百碗之前', '全城鮮奶祭'],
]);

function createRng(seed) {
  let state = seed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomInteger(rng, minimum, maximum) {
  return minimum + Math.floor(rng() * (maximum - minimum + 1));
}

function shuffled(values, rng) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(rng() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function positionKey(row, column) {
  return `${row},${column}`;
}

function parsePosition(value) {
  const [row, column] = value.split(',').map(Number);
  return { row, column };
}

function neighborsOf(row, column, size) {
  return Core.DIRECTIONS.map((direction) => ({
    direction,
    ...Core.getNeighborPosition(row, column, direction),
  })).filter((position) => Core.isInsideBoard(position.row, position.column, size));
}

function createMask(size, target, rng) {
  const start = {
    row: randomInteger(rng, 1, Math.max(1, size - 2)),
    column: randomInteger(rng, 1, Math.max(1, size - 2)),
  };
  const active = new Set([positionKey(start.row, start.column)]);
  while (active.size < target) {
    const origins = shuffled([...active], rng);
    let added = false;
    for (const originKey of origins) {
      const origin = parsePosition(originKey);
      const options = shuffled(neighborsOf(origin.row, origin.column, size), rng)
        .filter((position) => !active.has(positionKey(position.row, position.column)));
      if (options.length) {
        const choice = options[0];
        active.add(positionKey(choice.row, choice.column));
        added = true;
        break;
      }
    }
    if (!added) throw new Error('無法擴展連通 mask');
  }
  return active;
}

function createDepthFirstTree(mask, size, rng) {
  const adjacency = Object.fromEntries([...mask].map((value) => [value, new Set()]));
  const start = [...mask][Math.floor(rng() * mask.size)];
  const visited = new Set([start]);
  const stack = [start];
  while (stack.length) {
    const currentKey = stack[stack.length - 1];
    const current = parsePosition(currentKey);
    const options = shuffled(neighborsOf(current.row, current.column, size), rng)
      .map((position) => positionKey(position.row, position.column))
      .filter((candidate) => mask.has(candidate) && !visited.has(candidate));
    if (!options.length) {
      stack.pop();
      continue;
    }
    const next = options[0];
    adjacency[currentKey].add(next);
    adjacency[next].add(currentKey);
    visited.add(next);
    stack.push(next);
  }
  if (visited.size !== mask.size) throw new Error('spanning tree 未涵蓋全部有效格');
  return adjacency;
}

function directionBetween(fromKey, toKey) {
  const from = parsePosition(fromKey);
  const to = parsePosition(toKey);
  return Core.DIRECTIONS.find((direction) => {
    const neighbor = Core.getNeighborPosition(from.row, from.column, direction);
    return neighbor.row === to.row && neighbor.column === to.column;
  });
}

function shapeForConnectors(connectors) {
  if (connectors.length === 1) return 'end';
  if (connectors.length === 3) return 'tee';
  if (connectors.length === 4) return 'cross';
  const set = new Set(connectors);
  return (set.has('U') && set.has('D')) || (set.has('R') && set.has('L'))
    ? 'straight'
    : 'elbow';
}

function rotationForConnectors(shape, connectors) {
  const expected = [...connectors].sort().join('');
  for (let rotation = 0; rotation < Core.getRotationStateCount(shape); rotation += 1) {
    if (Core.getTileConnectors({ shape }, rotation).sort().join('') === expected) return rotation;
  }
  throw new Error(`找不到 ${shape} 的 rotation：${expected}`);
}

function createTiles(size, adjacency) {
  const entries = Object.entries(adjacency);
  const leaves = entries.filter(([, neighbors]) => neighbors.size === 1).map(([value]) => value);
  const sourceKey = entries
    .filter(([value]) => !leaves.includes(value))
    .sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0]))[0]?.[0]
    || entries[0][0];
  const tiles = Array.from({ length: size }, () => Array(size).fill(null));
  for (const [currentKey, neighbors] of entries) {
    const { row, column } = parsePosition(currentKey);
    const connectors = [...neighbors].map((neighbor) => directionBetween(currentKey, neighbor));
    const shape = shapeForConnectors(connectors);
    const solutionRotation = rotationForConnectors(shape, connectors);
    tiles[row][column] = {
      role: currentKey === sourceKey ? 'source' : (leaves.includes(currentKey) ? 'bowl' : 'pipe'),
      shape,
      solutionRotation,
      initialRotation: solutionRotation,
      locked: currentKey === sourceKey,
    };
  }
  return { tiles, sourceKey, bowlCount: leaves.length };
}

function addMinimumClues(level) {
  let result = Solver.solve(level);
  let guard = 0;
  while (result.solutionCount !== 1 && guard < level.size * level.size) {
    if (result.solutionCount === 0) throw new Error(`${level.id} 生成的保存答案無法求解`);
    const differences = [];
    for (let row = 0; row < level.size; row += 1) {
      for (let column = 0; column < level.size; column += 1) {
        const tile = level.tiles[row][column];
        if (tile && !tile.locked && tile.shape !== 'cross'
          && result.solutions[0][row][column] !== result.solutions[1][row][column]) {
          differences.push({ row, column });
        }
      }
    }
    if (!differences.length) throw new Error(`${level.id} 多解卻找不到差異格`);
    const choice = differences[0];
    const tile = level.tiles[choice.row][choice.column];
    tile.locked = true;
    tile.initialRotation = tile.solutionRotation;
    result = Solver.solve(level);
    guard += 1;
  }
  if (result.solutionCount !== 1) throw new Error(`${level.id} 無法以最少線索收斂唯一解`);
  return result;
}

function scrambleLevel(level, chapter, rng) {
  const rotatable = [];
  for (let row = 0; row < level.size; row += 1) {
    for (let column = 0; column < level.size; column += 1) {
      if (Core.canRotateTile(level, row, column)) rotatable.push({ row, column });
    }
  }
  const desiredWrong = Math.ceil(rotatable.length * chapter.wrongRatio);
  const order = shuffled(rotatable, rng);
  for (const [index, position] of order.entries()) {
    const tile = level.tiles[position.row][position.column];
    if (index < desiredWrong) {
      const count = Core.getRotationStateCount(tile.shape);
      const deltas = shuffled(Array.from({ length: count - 1 }, (_, value) => value + 1), rng);
      const delta = deltas[(index + chapter.number) % deltas.length];
      tile.initialRotation = Core.normalizeRotation(tile.shape, tile.solutionRotation - delta);
    } else {
      tile.initialRotation = tile.solutionRotation;
    }
  }
}

function transformedSignature(level, transform) {
  const size = level.size;
  const cells = Array(size * size).fill('0');
  const vectorToDirection = {
    '-1,0': 'U', '0,1': 'R', '1,0': 'D', '0,-1': 'L',
  };
  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      const tile = level.tiles[row][column];
      if (!tile) continue;
      const target = transform(row, column, size);
      const originTarget = transform(row, column, size);
      const transformedConnectors = Core.getTileConnectors(tile, tile.solutionRotation)
        .map((direction) => {
          const neighbor = Core.getNeighborPosition(row, column, direction);
          const neighborTarget = transform(neighbor.row, neighbor.column, size);
          return vectorToDirection[
            `${neighborTarget.row - originTarget.row},${neighborTarget.column - originTarget.column}`
          ];
        }).sort().join('');
      cells[target.row * size + target.column] = [
        tile.role[0], tile.shape[0], transformedConnectors, tile.locked ? '1' : '0',
      ].join('');
    }
  }
  return `${size}:${cells.join('|')}`;
}

const TRANSFORMS = Object.freeze([
  (row, column) => ({ row, column }),
  (row, column, size) => ({ row: column, column: size - 1 - row }),
  (row, column, size) => ({ row: size - 1 - row, column: size - 1 - column }),
  (row, column, size) => ({ row: size - 1 - column, column: row }),
  (row, column, size) => ({ row, column: size - 1 - column }),
  (row, column, size) => ({ row: size - 1 - row, column }),
  (row, column) => ({ row: column, column: row }),
  (row, column, size) => ({ row: size - 1 - column, column: size - 1 - row }),
]);

function canonicalSignature(level) {
  return TRANSFORMS.map((transform) => transformedSignature(level, transform))
    .sort()[0];
}

function countShapes(level) {
  const counts = { straightCount: 0, elbowCount: 0, teeCount: 0, crossCount: 0 };
  for (const row of level.tiles) {
    for (const tile of row) {
      if (tile && tile.role === 'pipe') {
        counts[`${tile.shape}Count`] = (counts[`${tile.shape}Count`] || 0) + 1;
      }
    }
  }
  return counts;
}

function buildCandidate(chapter, seed, ordinal) {
  const rng = createRng(seed);
  const progress = ordinal / 19;
  const target = Math.round(
    chapter.active[0] + (chapter.active[1] - chapter.active[0]) * progress,
  );
  const mask = createMask(chapter.size, target, rng);
  const adjacency = createDepthFirstTree(mask, chapter.size, rng);
  const created = createTiles(chapter.size, adjacency);
  if (created.bowlCount < chapter.bowls[0] || created.bowlCount > chapter.bowls[1]) return null;
  const level = {
    id: 'L000',
    chapter: chapter.number,
    title: TITLES[chapter.number - 1][ordinal],
    size: chapter.size,
    difficulty: chapter.number,
    difficultyScore: 0,
    seed,
    generatorVersion: GENERATOR_VERSION,
    optimalMoves: 0,
    moveLimit: 0,
    tiles: created.tiles,
    metrics: {},
  };
  if (!Core.validateStoredSolution(level).valid) throw new Error('spanning tree 保存答案無效');
  const solverResult = addMinimumClues(level);
  scrambleLevel(level, chapter, rng);
  level.optimalMoves = Core.calculateOptimalMoves(level);
  level.moveLimit = level.optimalMoves + randomInteger(
    rng, chapter.tolerance[0], chapter.tolerance[1],
  );
  const activeTileCount = mask.size;
  const lockedTileCount = level.tiles.flat().filter((tile) => tile?.locked).length;
  const shapes = countShapes(level);
  level.difficultyScore = chapter.number * 10000
    + activeTileCount * 19
    + created.bowlCount * 47
    + (shapes.teeCount || 0) * 61
    + (shapes.crossCount || 0) * 89
    + level.optimalMoves * 13
    + Math.min(999, solverResult.nodesVisited * 3)
    - lockedTileCount * 17;
  level.metrics = {
    activeTileCount,
    bowlCount: created.bowlCount,
    lockedTileCount,
    ...shapes,
    solutionCount: solverResult.solutionCount,
    solverNodes: solverResult.nodesVisited,
    solverBacktracks: solverResult.backtracks,
    solverMaxDepth: solverResult.maxDepth,
    canonicalSignature: '',
  };
  level.metrics.canonicalSignature = canonicalSignature(level);
  return level;
}

function cachePath(chapterNumber, ordinal) {
  return path.join(
    CACHE_DIRECTORY,
    `chapter-${chapterNumber}-ordinal-${String(ordinal + 1).padStart(2, '0')}.json`,
  );
}

function readCachedCandidate(chapter, ordinal) {
  const filename = cachePath(chapter.number, ordinal);
  if (!fs.existsSync(filename)) return null;
  try {
    const candidate = JSON.parse(fs.readFileSync(filename, 'utf8'));
    if (candidate.chapter !== chapter.number || candidate.size !== chapter.size) return null;
    if (Core.validateLevelDefinition(candidate).length) return null;
    if (!Core.validateStoredSolution(candidate).valid) return null;
    if (Solver.solve(candidate).solutionCount !== 1) return null;
    candidate.metrics.canonicalSignature = canonicalSignature(candidate);
    return candidate;
  } catch {
    return null;
  }
}

function writeCachedCandidate(chapter, ordinal, candidate) {
  fs.mkdirSync(CACHE_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    cachePath(chapter.number, ordinal),
    `${JSON.stringify(candidate, null, 2)}\n`,
  );
}

function generateLevels(options = {}) {
  const selectedLevel = options.level ? Number(String(options.level).replace(/^L/, '')) : null;
  if (selectedLevel && (!Number.isInteger(selectedLevel) || selectedLevel < 1 || selectedLevel > 100)) {
    throw new Error(`無效關卡：${options.level}`);
  }
  const levelChapter = selectedLevel ? Math.ceil(selectedLevel / 20) : null;
  if (options.chapter && levelChapter && Number(options.chapter) !== levelChapter) {
    throw new Error(`L${String(selectedLevel).padStart(3, '0')} 不屬於第 ${options.chapter} 章`);
  }
  const selectedChapter = options.chapter || levelChapter
    ? CHAPTERS.filter((chapter) => chapter.number === Number(options.chapter || levelChapter))
    : CHAPTERS;
  if (!selectedChapter.length) throw new Error(`無效章節：${options.chapter}`);
  const signatures = new Set();
  const levels = [];
  for (const chapter of selectedChapter) {
    for (let ordinal = 0; ordinal < 20; ordinal += 1) {
      const absoluteIndex = (chapter.number - 1) * 20 + ordinal + 1;
      let accepted = options.resume && !options.force
        ? readCachedCandidate(chapter, ordinal)
        : null;
      if (accepted && signatures.has(accepted.metrics.canonicalSignature)) accepted = null;
      for (let attempt = 0; attempt < 500 && !accepted; attempt += 1) {
        const seed = chapter.number * 100000 + absoluteIndex * 997 + attempt * 7919;
        const candidate = buildCandidate(chapter, seed, ordinal);
        if (candidate && !signatures.has(candidate.metrics.canonicalSignature)) {
          accepted = candidate;
          signatures.add(candidate.metrics.canonicalSignature);
        }
      }
      if (!accepted) throw new Error(`無法產生 L${String(absoluteIndex).padStart(3, '0')}`);
      signatures.add(accepted.metrics.canonicalSignature);
      writeCachedCandidate(chapter, ordinal, accepted);
      levels.push(accepted);
      if (options.onProgress) options.onProgress(absoluteIndex, accepted);
    }
  }
  for (const chapter of selectedChapter) {
    const group = levels.filter((level) => level.chapter === chapter.number)
      .sort((a, b) => a.difficultyScore - b.difficultyScore
        || a.metrics.canonicalSignature.localeCompare(b.metrics.canonicalSignature));
    group.forEach((level, index) => {
      const absoluteIndex = (chapter.number - 1) * 20 + index + 1;
      level.id = `L${String(absoluteIndex).padStart(3, '0')}`;
      level.title = TITLES[chapter.number - 1][index];
    });
  }
  levels.sort((a, b) => a.id.localeCompare(b.id));
  return selectedLevel
    ? levels.filter((level) => level.id === `L${String(selectedLevel).padStart(3, '0')}`)
    : levels;
}

function serializeGroup(globalName, levels) {
  return `(function (root, factory) {
  const levels = factory();
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.${globalName} = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return ${JSON.stringify(levels, null, 2)};
});
`;
}

function serializeIndex() {
  return `(function (root, factory) {
  const levels = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = levels;
  else root.CAT_MILK_LEVELS = levels;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (root) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    return [
      ...require('./levels-001-020.js'),
      ...require('./levels-021-040.js'),
      ...require('./levels-041-060.js'),
      ...require('./levels-061-080.js'),
      ...require('./levels-081-100.js'),
    ];
  }
  return [
    ...(root.CAT_MILK_LEVELS_001_020 || []),
    ...(root.CAT_MILK_LEVELS_021_040 || []),
    ...(root.CAT_MILK_LEVELS_041_060 || []),
    ...(root.CAT_MILK_LEVELS_061_080 || []),
    ...(root.CAT_MILK_LEVELS_081_100 || []),
  ];
});
`;
}

function validateGeneratedLevels(levels) {
  const errors = [];
  if (levels.length !== 100) errors.push(`關卡總數不是 100：${levels.length}`);
  const signatures = new Set();
  for (const [index, level] of levels.entries()) {
    const expectedId = `L${String(index + 1).padStart(3, '0')}`;
    if (level.id !== expectedId) errors.push(`${level.id} 應為 ${expectedId}`);
    errors.push(...Core.validateLevelDefinition(level).map((message) => `${level.id}：${message}`));
    if (!Core.validateStoredSolution(level).valid) errors.push(`${level.id}：保存答案無效`);
    const solved = Solver.solve(level);
    if (solved.solutionCount !== 1) errors.push(`${level.id}：解答數 ${solved.solutionCount}`);
    const signature = canonicalSignature(level);
    if (signatures.has(signature)) errors.push(`${level.id}：canonical signature 重複`);
    signatures.add(signature);
  }
  if (errors.length) throw new Error(errors.join('\n'));
  return true;
}

function writeLevels(levels) {
  validateGeneratedLevels(levels);
  const groups = [
    [1, 20, 'CAT_MILK_LEVELS_001_020', 'levels-001-020.js'],
    [21, 40, 'CAT_MILK_LEVELS_021_040', 'levels-021-040.js'],
    [41, 60, 'CAT_MILK_LEVELS_041_060', 'levels-041-060.js'],
    [61, 80, 'CAT_MILK_LEVELS_061_080', 'levels-061-080.js'],
    [81, 100, 'CAT_MILK_LEVELS_081_100', 'levels-081-100.js'],
  ];
  const output = new Map(groups.map(([start, end, globalName, filename]) => [
    filename,
    serializeGroup(globalName, levels.slice(start - 1, end)),
  ]));
  output.set('levels-index.js', serializeIndex());

  fs.mkdirSync(STAGING_DIRECTORY, { recursive: true });
  for (const [filename, content] of output) {
    fs.writeFileSync(path.join(STAGING_DIRECTORY, filename), content);
  }

  const stagedIndexPath = path.join(STAGING_DIRECTORY, 'levels-index.js');
  delete require.cache[require.resolve(stagedIndexPath)];
  const stagedLevels = require(stagedIndexPath);
  validateGeneratedLevels(stagedLevels);

  fs.mkdirSync(DATA_DIRECTORY, { recursive: true });
  for (const filename of output.keys()) {
    fs.copyFileSync(path.join(STAGING_DIRECTORY, filename), path.join(DATA_DIRECTORY, filename));
  }
}

function parseOptions(argv) {
  const options = {};
  for (const argument of argv) {
    if (argument.startsWith('--chapter=')) options.chapter = Number(argument.split('=')[1]);
    else if (argument.startsWith('--level=')) options.level = argument.split('=')[1];
    else if (argument === '--resume') options.resume = true;
    else if (argument === '--force') options.force = true;
  }
  return options;
}

if (require.main === module) {
  const options = parseOptions(process.argv.slice(2));
  const levels = generateLevels({
    ...options,
    onProgress(index, level) {
      process.stdout.write(
        `${level.id === 'L000' ? `候選 ${index}` : level.id}：${level.size}×${level.size}、`
        + `${level.metrics.activeTileCount} 格、${level.metrics.bowlCount} 碗、`
        + `${level.metrics.lockedTileCount} 鎖定\n`,
      );
    },
  });
  if (levels.length === 100) {
    writeLevels(levels);
    process.stdout.write('已固定發布 L001～L100。\n');
  } else {
    process.stdout.write(`已驗證 ${levels.length} 個選定候選；部分模式不覆寫正式 100 關。\n`);
  }
}

module.exports = {
  CHAPTERS,
  GENERATOR_VERSION,
  createRng,
  canonicalSignature,
  generateLevels,
  validateGeneratedLevels,
  writeLevels,
};
