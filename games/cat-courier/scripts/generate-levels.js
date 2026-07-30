'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');

const GENERATOR_VERSION = 2;
const DATA_DIRECTORY = path.join(__dirname, '..', 'js', 'data');
const STAGING_DIRECTORY = path.join(__dirname, '..', '.staging', 'data');
const CACHE_DIRECTORY = path.join(__dirname, '..', '.generation-cache');

const CHAPTERS = Object.freeze([
  Object.freeze({ number: 1, name: '社區入門', size: 6, steps: [8, 18], stops: [2, 3], branches: [1, 3], slack: [4, 8], oneWays: [0, 0] }),
  Object.freeze({ number: 2, name: '街區配送', size: 7, steps: [15, 28], stops: [3, 4], branches: [3, 6], slack: [3, 7], oneWays: [0, 1] }),
  Object.freeze({ number: 3, name: '巷弄快遞', size: 8, steps: [22, 34], stops: [4, 5], branches: [5, 8], slack: [3, 6], oneWays: [2, 5] }),
  Object.freeze({ number: 4, name: '繁忙城區', size: 9, steps: [30, 47], stops: [5, 6], branches: [7, 11], slack: [2, 5], oneWays: [4, 8] }),
  Object.freeze({ number: 5, name: '全城快遞', size: 10, steps: [40, 52], stops: [6, 8], branches: [9, 14], slack: [2, 4], oneWays: [7, 12] }),
]);

const TITLES = Object.freeze([
  ['第一瓶鮮奶', '轉角魚乾', '小巷包裹', '花園來信', '餅乾小路', '藍屋毛線', '午後罐頭', '樹下花束', '廣場玩鼠', '貓草專送', '木箱旁路', '雙站練習', '晴日配送', '鄰里繞行', '橋前轉彎', '粉屋信件', '奶香早班', '魚乾午班', '包裹晚班', '社區全勤'],
  ['河畔鮮奶', '橋上魚乾', '街角包裹', '水岸來信', '毛線繞路', '施工之前', '黃屋罐頭', '郵筒花束', '巷口餅乾', '池畔玩鼠', '雙橋配送', '木箱岔路', '街區快遞', '河岸三站', '午後繞行', '藍橋任務', '花園四站', '水邊貓草', '忙碌街角', '街區全勤'],
  ['單行鮮奶', '巷弄魚乾', '轉向包裹', '橋邊來信', '逆風毛線', '紅箭罐頭', '窄路花束', '貓草彎道', '餅乾專線', '玩鼠巷口', '三向選擇', '施工單行', '水巷四站', '留路任務', '郵筒轉向', '晚班急件', '巷弄連送', '五站挑戰', '單行迷陣', '巷弄全勤'],
  ['城區鮮奶', '繁忙魚乾', '急件包裹', '花束快線', '毛線交會', '罐頭轉運', '信件環城', '貓草支線', '餅乾捷徑', '玩鼠專車', '五站早班', '障礙午班', '單行晚班', '橋城繞行', '錯路陷阱', '六站快遞', '市中心任務', '繁忙交叉', '全區巡送', '城區全勤'],
  ['全城鮮奶', '長途魚乾', '包裹巡城', '花束遠征', '毛線快線', '罐頭環城', '信件總站', '貓草長路', '餅乾全送', '玩鼠特快', '六站挑戰', '七站早班', '單行密令', '橋梁巡迴', '障礙迷城', '黃昏急送', '八站連送', '全城規劃', '終極快線', '百關大滿貫'],
]);

const ITEMS = Object.freeze([
  ['milk', '鮮奶'], ['dried-fish', '魚乾'], ['parcel', '包裹'],
  ['cat-food', '貓罐頭'], ['yarn', '毛線球'], ['mouse', '玩具老鼠'],
  ['cat-grass', '貓草'], ['letter', '信件'], ['flowers', '花束'],
  ['paw-cookie', '貓掌餅乾'],
]);
const HOUSE_STYLES = Object.freeze(['blue', 'yellow', 'green', 'pink']);
const OBSTACLES = Object.freeze(['grass', 'grass', 'grass', 'water', 'tree', 'crate', 'barrier', 'fence']);

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

function integer(rng, minimum, maximum) {
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

function baseCorridor(size) {
  const pathCells = [];
  const travelRows = [];
  for (let row = 0; row < size; row += 2) travelRows.push(row);
  travelRows.forEach((row, rowIndex) => {
    const leftToRight = rowIndex % 2 === 0;
    const columns = Array.from({ length: size }, (_, column) => column);
    if (!leftToRight) columns.reverse();
    for (const column of columns) pathCells.push([row, column]);
    if (rowIndex < travelRows.length - 1) {
      pathCells.push([row + 1, leftToRight ? size - 1 : 0]);
    }
  });
  return pathCells;
}

const TRANSFORMS = Object.freeze([
  (row, column) => [row, column],
  (row, column, size) => [column, size - 1 - row],
  (row, column, size) => [size - 1 - row, size - 1 - column],
  (row, column, size) => [size - 1 - column, row],
  (row, column, size) => [row, size - 1 - column],
  (row, column, size) => [size - 1 - row, column],
  (row, column) => [column, row],
  (row, column, size) => [size - 1 - column, size - 1 - row],
]);

function transformCell(cell, size, transformIndex) {
  return TRANSFORMS[transformIndex](cell[0], cell[1], size);
}

function passableNeighborCount(terrain, row, column) {
  return [[-1, 0], [0, 1], [1, 0], [0, -1]].filter(([dr, dc]) => {
    const targetRow = row + dr;
    const targetColumn = column + dc;
    return targetRow >= 0 && targetColumn >= 0
      && targetRow < terrain.length && targetColumn < terrain.length
      && Core.isPassableTerrain(terrain[targetRow][targetColumn]);
  }).length;
}

function addBranches(terrain, desired, rng) {
  const added = [];
  for (let count = 0; count < desired; count += 1) {
    const candidates = [];
    for (let row = 0; row < terrain.length; row += 1) {
      for (let column = 0; column < terrain.length; column += 1) {
        if (Core.isPassableTerrain(terrain[row][column])) continue;
        if (passableNeighborCount(terrain, row, column) === 1) candidates.push([row, column]);
      }
    }
    if (!candidates.length) break;
    const choice = shuffled(candidates, rng)[0];
    terrain[choice[0]][choice[1]] = rng() < 0.12 ? 'plaza' : 'road';
    added.push(choice);
  }
  return added;
}

function passableNeighbors(terrain, cell) {
  return [[-1, 0], [0, 1], [1, 0], [0, -1]].map(([dr, dc]) => (
    [cell[0] + dr, cell[1] + dc]
  )).filter(([row, column]) => (
    row >= 0 && column >= 0 && row < terrain.length && column < terrain.length
      && Core.isPassableTerrain(terrain[row][column])
  ));
}

function addDetourLoops(terrain, desired, rng) {
  const added = [];
  for (let count = 0; count < desired; count += 1) {
    const candidates = [];
    for (let row = 0; row < terrain.length; row += 1) {
      for (let column = 0; column < terrain.length; column += 1) {
        const start = [row, column];
        if (!Core.isPassableTerrain(terrain[row][column])) continue;
        for (const [dr, dc, sideRow, sideColumn] of [
          [0, 1, -1, 0], [0, 1, 1, 0],
          [1, 0, 0, -1], [1, 0, 0, 1],
        ]) {
          const end = [row + dr, column + dc];
          const detourStart = [row + sideRow, column + sideColumn];
          const detourEnd = [end[0] + sideRow, end[1] + sideColumn];
          const cells = [end, detourStart, detourEnd];
          if (cells.some(([targetRow, targetColumn]) => (
            targetRow < 0 || targetColumn < 0
              || targetRow >= terrain.length || targetColumn >= terrain.length
          ))) continue;
          if (!Core.isPassableTerrain(terrain[end[0]][end[1]])
            || Core.isPassableTerrain(terrain[detourStart[0]][detourStart[1]])
            || Core.isPassableTerrain(terrain[detourEnd[0]][detourEnd[1]])) continue;
          const startNeighbors = passableNeighbors(terrain, detourStart);
          const endNeighbors = passableNeighbors(terrain, detourEnd);
          if (startNeighbors.length === 1 && endNeighbors.length === 1
            && Core.sameCell(startNeighbors[0], start) && Core.sameCell(endNeighbors[0], end)) {
            candidates.push([detourStart, detourEnd]);
          }
        }
      }
    }
    if (!candidates.length) break;
    const loop = shuffled(candidates, rng)[0];
    for (const cell of loop) terrain[cell[0]][cell[1]] = 'road';
    added.push(loop);
  }
  return added;
}

function addGuardedDetourLoop(terrain, corridor, rng) {
  const corridorIndex = new Map(corridor.map((cell, index) => [cell.join(','), index]));
  const candidates = [];
  for (let row = 0; row < terrain.length; row += 1) {
    for (let column = 0; column < terrain.length; column += 1) {
      const start = [row, column];
      const startIndex = corridorIndex.get(start.join(','));
      if (startIndex === undefined) continue;
      for (const [dr, dc, sideRow, sideColumn] of [
        [0, 1, -1, 0], [0, 1, 1, 0],
        [1, 0, 0, -1], [1, 0, 0, 1],
      ]) {
        const end = [row + dr, column + dc];
        const endIndex = corridorIndex.get(end.join(','));
        const detourStart = [row + sideRow, column + sideColumn];
        const detourEnd = [end[0] + sideRow, end[1] + sideColumn];
        if (endIndex === undefined || Math.abs(startIndex - endIndex) !== 1) continue;
        if ([detourStart, detourEnd].some(([targetRow, targetColumn]) => (
          targetRow < 0 || targetColumn < 0
            || targetRow >= terrain.length || targetColumn >= terrain.length
            || Core.isPassableTerrain(terrain[targetRow][targetColumn])
        ))) continue;
        const startNeighbors = passableNeighbors(terrain, detourStart);
        const endNeighbors = passableNeighbors(terrain, detourEnd);
        if (!startNeighbors.some((cell) => Core.sameCell(cell, start))
          || !endNeighbors.some((cell) => Core.sameCell(cell, end))) continue;
        const maximumAnchorIndex = Math.max(startIndex, endIndex);
        const extras = [
          ...startNeighbors.filter((cell) => !Core.sameCell(cell, start))
            .map((cell) => ({ from: cell, to: detourStart })),
          ...endNeighbors.filter((cell) => !Core.sameCell(cell, end))
            .map((cell) => ({ from: cell, to: detourEnd })),
        ];
        if (!extras.length || extras.some((edge) => (
          (corridorIndex.get(edge.from.join(',')) ?? -1) <= maximumAnchorIndex
        ))) continue;
        candidates.push({ cells: [detourStart, detourEnd], guardEdges: extras });
      }
    }
  }
  if (!candidates.length) return null;
  const chosen = shuffled(candidates, rng)[0];
  for (const cell of chosen.cells) terrain[cell[0]][cell[1]] = 'road';
  return chosen;
}

function transformedSignature(level, transformIndex) {
  const size = level.rows;
  const transformedTerrain = Array.from({ length: size }, () => Array(size).fill(''));
  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      const target = transformCell([row, column], size, transformIndex);
      transformedTerrain[target[0]][target[1]] = level.terrain[row][column];
    }
  }
  const start = transformCell(level.start, size, transformIndex);
  const stops = level.stops.map((stop) => (
    `${stop.order}@${transformCell(stop.position, size, transformIndex).join(',')}`
  ));
  const edges = level.oneWayEdges.map((edge) => (
    `${transformCell(edge.from, size, transformIndex).join(',')}>`
    + `${transformCell(edge.to, size, transformIndex).join(',')}`
  )).sort();
  const solution = level.solutionPath.map((cell) => transformCell(cell, size, transformIndex).join(','));
  return [
    `${size}x${size}`,
    transformedTerrain.map((row) => row.join(',')).join('/'),
    `S:${start.join(',')}`,
    `P:${stops.join('|')}`,
    `O:${edges.join('|')}`,
    `R:${solution.join('>')}`,
  ].join(';');
}

function canonicalSignature(level) {
  return TRANSFORMS.map((_, index) => transformedSignature(level, index)).sort()[0];
}

function buildCandidate(chapter, ordinal, attempt = 0) {
  const absoluteIndex = (chapter.number - 1) * 20 + ordinal + 1;
  const seed = chapter.number * 100000 + absoluteIndex * 997 + attempt * 7919;
  const rng = createRng(seed);
  const progress = ordinal / 19;
  const desiredSteps = Math.round(chapter.steps[0]
    + (chapter.steps[1] - chapter.steps[0]) * progress);
  const transformIndex = integer(rng, 0, 7);
  const corridor = baseCorridor(chapter.size)
    .slice(0, desiredSteps + 1)
    .map((cell) => transformCell(cell, chapter.size, transformIndex));
  const terrain = Array.from({ length: chapter.size }, () => (
    Array.from({ length: chapter.size }, () => OBSTACLES[integer(rng, 0, OBSTACLES.length - 1)])
  ));
  corridor.forEach((cell, index) => {
    terrain[cell[0]][cell[1]] = index > 0 && index % 13 === 0 && chapter.number >= 2
      ? 'bridge' : 'road';
  });
  const desiredLoops = Math.min(3, chapter.number);
  const desiredBranches = Math.round(chapter.branches[0]
    + (chapter.branches[1] - chapter.branches[0]) * progress);
  const branchCells = addBranches(terrain, desiredBranches, rng);
  const detourLoops = addDetourLoops(terrain, desiredLoops, rng);
  const guardOneWayEdges = [];
  if (!detourLoops.length) {
    const guardedLoop = addGuardedDetourLoop(terrain, corridor, rng);
    if (guardedLoop) {
      detourLoops.push(guardedLoop.cells);
      guardOneWayEdges.push(...guardedLoop.guardEdges);
    }
  }
  const stopCount = Math.round(chapter.stops[0]
    + (chapter.stops[1] - chapter.stops[0]) * progress);
  const stopIndices = [];
  for (let stopIndex = 0; stopIndex < stopCount; stopIndex += 1) {
    stopIndices.push(Math.floor(((stopIndex + 1) * desiredSteps) / stopCount));
  }
  stopIndices[stopIndices.length - 1] = desiredSteps;
  const stops = stopIndices.map((pathIndex, stopIndex) => {
    const item = ITEMS[(absoluteIndex + stopIndex * 3) % ITEMS.length];
    terrain[corridor[pathIndex][0]][corridor[pathIndex][1]] = 'plaza';
    return {
      id: `stop-${stopIndex + 1}`,
      order: stopIndex,
      item: item[0],
      label: item[1],
      position: [...corridor[pathIndex]],
      houseStyle: HOUSE_STYLES[(absoluteIndex + stopIndex) % HOUSE_STYLES.length],
    };
  });
  const oneWayCount = chapter.number < 3 ? 0 : Math.round(
    chapter.oneWays[0] + (chapter.oneWays[1] - chapter.oneWays[0]) * progress,
  );
  const availableEdges = corridor.slice(1, -1).map((cell, index) => ({
    from: corridor[index + 0],
    to: cell,
    index: index + 1,
  })).filter((edge) => !stopIndices.includes(edge.index));
  const oneWayEdges = guardOneWayEdges.concat(shuffled(availableEdges, rng)
    .slice(0, Math.max(0, oneWayCount - guardOneWayEdges.length))
    .sort((a, b) => a.index - b.index)
    .map((edge) => ({ from: [...edge.from], to: [...edge.to] })));
  const level = {
    id: `L${String(absoluteIndex).padStart(3, '0')}`,
    chapter: chapter.number,
    title: TITLES[chapter.number - 1][ordinal],
    rows: chapter.size,
    columns: chapter.size,
    difficulty: chapter.number,
    difficultyScore: 0,
    seed,
    generatorVersion: GENERATOR_VERSION,
    terrain,
    start: [...corridor[0]],
    stops,
    oneWayEdges,
    solutionPath: corridor.map((cell) => [...cell]),
    optimalSteps: desiredSteps,
    optimalSolutionCount: 1,
    fuelLimit: desiredSteps + integer(rng, chapter.slack[0], chapter.slack[1]),
    metrics: {},
  };
  const solved = Solver.solveLevel({ ...level, solutionPath: undefined }, {
    maxSolutions: 2,
    nodeBudget: 1000000,
    timeBudgetMs: 5000,
  });
  if (!solved.solved || solved.optimalSteps !== desiredSteps || solved.optimalSolutionCount !== 1) {
    return null;
  }
  const passableCellCount = terrain.flat().filter(Core.isPassableTerrain).length;
  const bridgeCount = terrain.flat().filter((cell) => cell === 'bridge').length;
  level.difficultyScore = chapter.number * 100000
    + desiredSteps * 211
    + stopCount * 317
    + branchCells.length * 173
    + detourLoops.length * 283
    + oneWayEdges.length * 401
    + bridgeCount * 97
    + solved.nodesVisited * 3
    + solved.backtracks * 7;
  level.metrics = {
    passableCellCount,
    stopCount,
    obstacleCount: chapter.size * chapter.size - passableCellCount,
    oneWayEdgeCount: oneWayEdges.length,
    branchCellCount: branchCells.length,
    detourLoopCount: detourLoops.length,
    bridgeCount,
    solverNodes: solved.nodesVisited,
    solverBacktracks: solved.backtracks,
    solverMaxDepth: solved.maxDepth,
    canonicalSignature: '',
  };
  level.metrics.canonicalSignature = canonicalSignature(level);
  return level;
}

function generateLevels(options = {}) {
  const levels = Array.isArray(options.initialLevels)
    ? options.initialLevels.map((level) => JSON.parse(JSON.stringify(level))) : [];
  const signatures = new Set(levels.map((level) => level.metrics.canonicalSignature));
  for (const chapter of CHAPTERS) {
    for (let ordinal = 0; ordinal < 20; ordinal += 1) {
      const absoluteIndex = (chapter.number - 1) * 20 + ordinal;
      if (levels[absoluteIndex]) continue;
      let level = null;
      for (let attempt = 0; attempt < 200 && !level; attempt += 1) {
        const candidate = buildCandidate(chapter, ordinal, attempt);
        if (candidate && !signatures.has(candidate.metrics.canonicalSignature)) level = candidate;
      }
      if (!level) throw new Error(`無法產生第 ${chapter.number} 章第 ${ordinal + 1} 關`);
      signatures.add(level.metrics.canonicalSignature);
      levels.push(level);
      if (options.onProgress) options.onProgress(levels.length, level, levels);
    }
  }
  return levels;
}

function loadGenerationCache(directory = CACHE_DIRECTORY) {
  try {
    const levels = JSON.parse(fs.readFileSync(path.join(directory, 'levels.json'), 'utf8'));
    if (!Array.isArray(levels) || levels.length > 100) return null;
    const signatures = new Set();
    for (const [index, level] of levels.entries()) {
      if (level.id !== `L${String(index + 1).padStart(3, '0')}`
        || Core.validateLevelDefinition(level).length
        || !level.metrics?.canonicalSignature
        || signatures.has(level.metrics.canonicalSignature)) return null;
      signatures.add(level.metrics.canonicalSignature);
    }
    return levels;
  } catch {
    return null;
  }
}

function saveGenerationCache(levels, directory = CACHE_DIRECTORY) {
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'levels.json'), `${JSON.stringify(levels, null, 2)}\n`);
}

function clearGenerationCache(directory = CACHE_DIRECTORY) {
  fs.rmSync(directory, { recursive: true, force: true });
}

function validateGeneratedLevels(levels) {
  const errors = [];
  const signatures = new Set();
  if (!Array.isArray(levels) || levels.length !== 100) errors.push(`關卡總數不是 100：${levels?.length}`);
  for (const [index, level] of (levels || []).entries()) {
    const expectedId = `L${String(index + 1).padStart(3, '0')}`;
    if (level.id !== expectedId) errors.push(`${level.id} 應為 ${expectedId}`);
    errors.push(...Core.validateLevelDefinition(level).map((error) => `${level.id}：${error}`));
    const stored = Core.validateStoredSolution(level);
    if (!stored.valid) errors.push(`${level.id}：${stored.errors.join('、')}`);
    const solved = Solver.solveLevel({ ...level, solutionPath: undefined }, {
      maxSolutions: 2,
      nodeBudget: 1000000,
      timeBudgetMs: 5000,
    });
    if (!solved.solved || solved.optimalSteps !== level.optimalSteps
      || solved.optimalSolutionCount !== 1) errors.push(`${level.id}：獨立求解結果不符`);
    const signature = canonicalSignature(level);
    if (signatures.has(signature)) errors.push(`${level.id}：D4 canonical signature 重複`);
    signatures.add(signature);
    if (level.metrics.canonicalSignature !== signature) errors.push(`${level.id}：signature 未同步`);
  }
  if (errors.length) throw new Error(errors.join('\n'));
  return true;
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
  else root.CAT_COURIER_LEVELS = levels;
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
    ...(root.CAT_COURIER_LEVELS_001_020 || []),
    ...(root.CAT_COURIER_LEVELS_021_040 || []),
    ...(root.CAT_COURIER_LEVELS_041_060 || []),
    ...(root.CAT_COURIER_LEVELS_061_080 || []),
    ...(root.CAT_COURIER_LEVELS_081_100 || []),
  ];
});
`;
}

function writeLevels(levels) {
  validateGeneratedLevels(levels);
  const groups = [
    [0, 20, 'CAT_COURIER_LEVELS_001_020', 'levels-001-020.js'],
    [20, 40, 'CAT_COURIER_LEVELS_021_040', 'levels-021-040.js'],
    [40, 60, 'CAT_COURIER_LEVELS_041_060', 'levels-041-060.js'],
    [60, 80, 'CAT_COURIER_LEVELS_061_080', 'levels-061-080.js'],
    [80, 100, 'CAT_COURIER_LEVELS_081_100', 'levels-081-100.js'],
  ];
  const output = new Map(groups.map(([start, end, globalName, filename]) => [
    filename,
    serializeGroup(globalName, levels.slice(start, end)),
  ]));
  output.set('levels-index.js', serializeIndex());
  fs.mkdirSync(STAGING_DIRECTORY, { recursive: true });
  for (const [filename, content] of output) {
    fs.writeFileSync(path.join(STAGING_DIRECTORY, filename), content);
  }
  for (const filename of output.keys()) {
    const staged = path.join(STAGING_DIRECTORY, filename);
    delete require.cache[require.resolve(staged)];
  }
  const stagedLevels = require(path.join(STAGING_DIRECTORY, 'levels-index.js'));
  validateGeneratedLevels(stagedLevels);
  fs.mkdirSync(DATA_DIRECTORY, { recursive: true });
  for (const filename of output.keys()) {
    fs.copyFileSync(path.join(STAGING_DIRECTORY, filename), path.join(DATA_DIRECTORY, filename));
  }
  fs.rmSync(path.dirname(STAGING_DIRECTORY), { recursive: true, force: true });
}

function parseOptions(argv) {
  const options = {};
  for (const argument of argv) {
    if (argument.startsWith('--chapter=')) options.chapter = Number(argument.split('=')[1]);
    if (argument.startsWith('--level=')) options.level = argument.split('=')[1].toUpperCase();
    if (argument === '--resume') options.resume = true;
    if (argument === '--force') options.force = true;
  }
  return options;
}

if (require.main === module) {
  const options = parseOptions(process.argv.slice(2));
  if (options.force) clearGenerationCache();
  const cachedLevels = options.resume && !options.force ? loadGenerationCache() : null;
  const levels = generateLevels({
    initialLevels: cachedLevels || [],
    onProgress(index, level, progressLevels) {
      saveGenerationCache(progressLevels);
      process.stdout.write(`${level.id}：${level.rows}×${level.columns}、${level.stops.length} 站、最佳 ${level.optimalSteps} 步\n`);
    },
  });
  saveGenerationCache(levels);
  if (cachedLevels?.length) {
    process.stdout.write(`已從快取恢復 ${cachedLevels.length} 關並接續產生。\n`);
  }
  const selected = levels.filter((level) => (
    (!options.chapter || level.chapter === options.chapter)
    && (!options.level || level.id === options.level)
  ));
  if (selected.length !== 100) {
    fs.mkdirSync(CACHE_DIRECTORY, { recursive: true });
    fs.writeFileSync(
      path.join(CACHE_DIRECTORY, 'selected-levels.json'),
      `${JSON.stringify(selected, null, 2)}\n`,
    );
    process.stdout.write(`已驗證 ${selected.length} 關；部分模式不覆寫正式資料。\n`);
  } else {
    writeLevels(levels);
    process.stdout.write('已由 staging 固定發布 L001～L100。\n');
  }
}

module.exports = {
  CHAPTERS,
  GENERATOR_VERSION,
  createRng,
  buildCandidate,
  addDetourLoops,
  addGuardedDetourLoop,
  canonicalSignature,
  generateLevels,
  loadGenerationCache,
  saveGenerationCache,
  clearGenerationCache,
  validateGeneratedLevels,
  writeLevels,
  parseOptions,
};
