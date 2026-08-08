const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Config = require('../js/config.js');
const { canonicalSignature, tileCountFor } = require('./level-factory.js');

function validateAll(levels) {
  const results = [];
  const signatures = new Set();
  const secondChapter = Config.chapters[1];
  const fifthChapter = Config.chapters[4];
  const finalChapter = Config.chapters[Config.chapters.length - 1];
  let previousCount = 0;
  for (const level of levels) {
    const errors = Core.validateLevelDefinition(level);
    const expectedNumber = results.length + 1;
    const chapter = Config.chapterForLevel(expectedNumber);
    if (level.number !== expectedNumber || level.id !== `L${String(expectedNumber).padStart(3, '0')}`) errors.push('ID 或順序錯誤');
    if (!chapter || level.chapter !== chapter.number) errors.push('章節錯誤');
    if (level.tiles.length !== tileCountFor(expectedNumber)) errors.push('張數不符章節契約');
    if (expectedNumber === 38
      && (level.tiles.length < secondChapter.minTiles
        || level.tiles.length > secondChapter.maxTiles)) errors.push('L038 張數錯誤');
    if (expectedNumber === fifthChapter.endLevel
      && level.tiles.length !== fifthChapter.maxTiles) {
      errors.push(`L100 必須 ${fifthChapter.maxTiles} 張`);
    }
    if (expectedNumber === finalChapter.endLevel
      && level.tiles.length !== finalChapter.maxTiles) {
      errors.push(`${level.id} 必須 ${finalChapter.maxTiles} 張`);
    }
    const signature = canonicalSignature(level);
    if (signature !== level.canonicalSignature) errors.push('canonical signature 不一致');
    if (signatures.has(signature)) errors.push('D4 重複');
    signatures.add(signature);
    const replay = Core.replayKnownSolution(level);
    if (!replay.valid || replay.peakTrayOccupancy >= Config.trayCapacity) errors.push('knownSolution 無法安全完成');
    const result = Solver.solveLevel(level, { maxNodes: 750000, deadlineMs: 10000 });
    if (!result.solved) errors.push(`Solver 未通過：${result.budgetReason || 'unsolved'}`);
    if (result.peakTrayOccupancy >= Config.trayCapacity) errors.push(`Solver 峰值槽位達 ${Config.trayCapacity}`);
    if (chapter && level.tiles.length < previousCount
      && expectedNumber !== chapter.startLevel) errors.push('章內張數未遞增');
    previousCount = level.tiles.length;
    results.push({
      id: level.id, chapter: level.chapter, tiles: level.tiles.length,
      layers: level.layout.maxLayers, symbols: level.symbols.length,
      solver: {
        solved: result.solved,
        nodesVisited: result.nodesVisited,
        backtracks: result.backtracks,
        maxDepth: result.maxDepth,
        peakTrayOccupancy: result.peakTrayOccupancy,
        budgetExceeded: result.budgetExceeded,
        budgetReason: result.budgetReason,
      },
      knownPeakTrayOccupancy: replay.peakTrayOccupancy,
      signature, valid: errors.length === 0, errors,
    });
  }
  return { valid: levels.length === Config.totalLevels && results.every((item) => item.valid), results };
}
module.exports = { validateAll };
