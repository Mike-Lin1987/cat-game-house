const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const { canonicalSignature, tileCountFor } = require('./level-factory.js');

function validateAll(levels) {
  const results = [];
  const signatures = new Set();
  let previousCount = 0;
  for (const level of levels) {
    const errors = Core.validateLevelDefinition(level);
    const expectedNumber = results.length + 1;
    if (level.number !== expectedNumber || level.id !== `L${String(expectedNumber).padStart(3, '0')}`) errors.push('ID 或順序錯誤');
    if (level.chapter !== Math.ceil(expectedNumber / 20)) errors.push('章節錯誤');
    if (level.tiles.length !== tileCountFor(expectedNumber)) errors.push('張數不符章節契約');
    if (expectedNumber === 38 && (level.tiles.length < 36 || level.tiles.length > 54)) errors.push('L038 張數錯誤');
    if (expectedNumber === 100 && level.tiles.length !== 108) errors.push('L100 必須 108 張');
    const signature = canonicalSignature(level);
    if (signature !== level.canonicalSignature) errors.push('canonical signature 不一致');
    if (signatures.has(signature)) errors.push('D4 重複');
    signatures.add(signature);
    const replay = Core.replayKnownSolution(level);
    if (!replay.valid || replay.peakTrayOccupancy >= 9) errors.push('knownSolution 無法安全完成');
    const result = Solver.solveLevel(level, { maxNodes: 750000, deadlineMs: 10000 });
    if (!result.solved) errors.push(`Solver 未通過：${result.budgetReason || 'unsolved'}`);
    if (result.peakTrayOccupancy >= 9) errors.push('Solver 峰值槽位達 9');
    if (level.tiles.length < previousCount && (expectedNumber - 1) % 20 !== 0) errors.push('章內張數未遞增');
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
  return { valid: levels.length === 100 && results.every((item) => item.valid), results };
}
module.exports = { validateAll };
