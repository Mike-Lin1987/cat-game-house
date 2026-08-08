const Icons = require('../js/icons.js');
const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Config = require('../js/config.js');

function mulberry32(seed) {
  return function random() {
    let value = seed += 0x6D2B79F5;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}
function shuffle(values, random) {
  const copy = values.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function chapterFor(levelNumber) {
  const chapter = Config.chapters.find(
    (item) => levelNumber >= item.startLevel && levelNumber <= item.endLevel,
  );
  if (!chapter) throw new RangeError(`關卡編號超出設定範圍：${levelNumber}`);
  return chapter.number;
}
function tileCountFor(levelNumber) {
  const chapter = Config.chapters[chapterFor(levelNumber) - 1];
  const within = levelNumber - chapter.startLevel;
  const chapterSpan = chapter.endLevel - chapter.startLevel;
  return Math.min(
    chapter.maxTiles,
    chapter.minTiles
      + 3 * Math.floor((within * ((chapter.maxTiles - chapter.minTiles) / 3)) / chapterSpan),
  );
}
function positions(offset, columns, rows, layer) {
  const result = [];
  for (let y = offset; y <= rows - 2; y += 2) {
    for (let x = offset; x <= columns - 2; x += 2) result.push({ x, y, layer });
  }
  return result;
}
function overlaps(a, b) {
  return Core.rectanglesOverlap(a, b);
}
function selectSupported(candidates, count, supporting, random) {
  return shuffle(candidates.filter((candidate) => supporting.some((tile) => overlaps(candidate, tile))), random)
    .slice(0, count);
}
function canonicalSignature(level) {
  const size = level.layout.unitColumns;
  const transforms = [
    (x, y) => [x, y], (x, y) => [size - 2 - y, x],
    (x, y) => [size - 2 - x, size - 2 - y], (x, y) => [y, size - 2 - x],
    (x, y) => [size - 2 - x, y], (x, y) => [x, size - 2 - y],
    (x, y) => [y, x], (x, y) => [size - 2 - y, size - 2 - x],
  ];
  return transforms.map((transform) => {
    const symbolNames = new Map();
    let nextSymbol = 0;
    return level.tiles.map((tile) => {
      const [x, y] = transform(tile.x, tile.y);
      return { x, y, layer: tile.layer, symbol: tile.symbol };
    }).sort((a, b) => a.layer - b.layer || a.y - b.y || a.x - b.x)
      .map((tile) => {
        if (!symbolNames.has(tile.symbol)) symbolNames.set(tile.symbol, `s${nextSymbol++}`);
        return `${tile.layer}:${tile.x}:${tile.y}:${symbolNames.get(tile.symbol)}`;
      }).join('|');
  }).sort()[0];
}
function makeLevel(levelNumber, attempt = 0) {
  const random = mulberry32(0xC47A0000 + levelNumber * 977 + attempt * 65537);
  const chapter = chapterFor(levelNumber);
  const chapterConfig = Config.chapters[chapter - 1];
  const count = tileCountFor(levelNumber);
  const size = chapter <= 2 ? 14 : 16;
  let layer2Count = levelNumber === 1 ? 3 : Math.max(3, Math.floor(count * (0.18 + chapter * 0.015) / 3) * 3);
  let layer1Count = levelNumber === 1 ? 6 : Math.max(6, Math.floor(count * 0.32 / 3) * 3);
  let layer0Count = count - layer1Count - layer2Count;
  if (layer0Count < layer1Count) {
    const correction = Math.ceil((layer1Count - layer0Count) / 6) * 3;
    layer1Count -= correction;
    layer0Count += correction;
  }
  const baseCandidates = positions(0, size, size, 0);
  const base = shuffle(baseCandidates, random).slice(0, layer0Count);
  let middle = selectSupported(positions(1, size, size, 1), layer1Count, base, random);
  if (middle.length < layer1Count) {
    const baseAll = baseCandidates.slice(0, Math.max(layer0Count, layer1Count));
    base.splice(0, base.length, ...baseAll);
    middle = selectSupported(positions(1, size, size, 1), layer1Count, base, random);
  }
  let top = selectSupported(positions(0, size, size, 2), layer2Count, middle, random);
  if (top.length < layer2Count) top = selectSupported(positions(1, size, size, 2), layer2Count, middle, random);
  if (base.length + middle.length + top.length !== count) throw new Error(`L${levelNumber} 版面容量不足`);
  const orderedRemoval = [...top, ...middle, ...base];
  const symbolCount = levelNumber === 1 ? 3 : Math.min(
    16,
    4 + chapter * 2 + Math.floor((levelNumber - chapterConfig.startLevel) / 5),
  );
  const iconIds = shuffle(Icons.icons.map((icon) => icon.id), random).slice(0, symbolCount);
  const tripleSymbols = [];
  for (let triple = 0; triple < count / 3; triple += 1) tripleSymbols.push(iconIds[triple % iconIds.length]);
  const tiles = orderedRemoval.map((position, index) => ({
    id: `t${String(index + 1).padStart(3, '0')}`,
    x: position.x, y: position.y, layer: position.layer,
    symbol: tripleSymbols[Math.floor(index / 3)],
  }));
  const level = {
    id: `L${String(levelNumber).padStart(3, '0')}`,
    number: levelNumber,
    chapter,
    title: chapterConfig.title,
    layout: { unitColumns: size, unitRows: size, maxLayers: Math.max(...tiles.map((tile) => tile.layer)) + 1 },
    symbols: iconIds.map((id) => ({ id, label: Icons.label(id) })),
    tiles,
    knownSolution: tiles.map((tile) => tile.id),
    parSeconds: 35 + count * 3 + chapter * 12,
  };
  level.canonicalSignature = canonicalSignature(level);
  const replay = Core.replayKnownSolution(level);
  if (!replay.valid) throw new Error(`${level.id} knownSolution 無效`);
  const solve = Solver.solveLevel(level, { maxNodes: 500000, deadlineMs: 5000 });
  if (!solve.solved) throw new Error(`${level.id} solver 未通過: ${solve.budgetReason || 'unsolved'}`);
  level.metrics = {
    nodesVisited: solve.nodesVisited,
    backtracks: solve.backtracks,
    maxDepth: solve.maxDepth,
    peakTrayOccupancy: solve.peakTrayOccupancy,
    knownPeakTrayOccupancy: replay.peakTrayOccupancy,
  };
  return level;
}
module.exports = { makeLevel, chapterFor, tileCountFor, canonicalSignature };
