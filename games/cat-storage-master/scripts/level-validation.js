'use strict';

const core = require('../js/core.js');
const solver = require('../js/solver.js');

const ALLOWED_SIZES = Object.freeze({
  1: new Set([4, 5]),
  2: new Set([5, 6]),
  3: new Set([6, 7]),
  4: new Set([7, 8]),
  5: new Set([8, 9, 10]),
});

function validateLevelSet(levels, canonicalSignature) {
  const errors = [];
  const signatures = new Set();
  let unique = 0;
  const list = Array.isArray(levels) ? levels : [];
  if (list.length !== 100) errors.push(`關卡總數 ${list.length}，應為 100`);

  for (let index = 0; index < list.length; index += 1) {
    const level = list[index];
    const expectedId = `L${String(index + 1).padStart(3, '0')}`;
    const expectedChapter = Math.floor(index / 20) + 1;
    if (level?.id !== expectedId) errors.push(`${level?.id || `index-${index}`}: ID 應為 ${expectedId}`);
    if (level?.chapter !== expectedChapter) errors.push(`${expectedId}: chapter 應為 ${expectedChapter}`);
    if (!ALLOWED_SIZES[level?.chapter]?.has(level?.rows)
        || level?.rows !== level?.columns) errors.push(`${expectedId}: 章節尺寸無效`);
    for (const error of core.validateLevelDefinition(level)) errors.push(`${expectedId}: ${error}`);
    for (const error of core.validateStoredSolution(level)) errors.push(`${expectedId}: ${error}`);
    if (core.calculateParMoves(level) !== level?.parMoves) errors.push(`${expectedId}: parMoves 錯誤`);
    if (level?.moveLimit < level?.parMoves) errors.push(`${expectedId}: moveLimit 錯誤`);
    if (level?.metrics?.fillableCellCount !== level?.fillableCells?.length) {
      errors.push(`${expectedId}: fillableCellCount 錯誤`);
    }
    if (level?.metrics?.pieceCount !== level?.pieces?.length) {
      errors.push(`${expectedId}: pieceCount 錯誤`);
    }
  }

  if (errors.length) {
    return {
      passed: false,
      errors,
      summary: {
        levels: list.length,
        validData: 0,
        uniqueSolutions: 0,
        duplicateCanonicalLevels: 0,
      },
    };
  }

  for (const level of list) {
    const solved = solver.solveLevel({ ...level, solution: null }, { maxSolutions: 2 });
    if (solved.solutionCount === 1) unique += 1;
    else errors.push(`${level.id}: solutionCount=${solved.solutionCount}`);
    const signature = canonicalSignature(level);
    if (signature !== level.canonicalSignature) errors.push(`${level.id}: canonical signature 錯誤`);
    if (signatures.has(signature)) errors.push(`${level.id}: canonical signature 重複`);
    signatures.add(signature);
  }

  const averages = [];
  for (let chapter = 1; chapter <= 5; chapter += 1) {
    const chapterLevels = list.filter((level) => level.chapter === chapter);
    if (chapterLevels.length !== 20) errors.push(`第 ${chapter} 章關卡數不是 20`);
    if (chapter >= 3 && chapterLevels.some((level) =>
      !level.pieces.some((piece) => piece.allowFlip))) {
      errors.push(`第 ${chapter} 章有關卡缺少翻面拼塊`);
    }
    averages.push(
      chapterLevels.reduce((sum, level) => sum + level.difficultyScore, 0)
        / Math.max(1, chapterLevels.length),
    );
  }
  for (let index = 1; index < averages.length; index += 1) {
    if (averages[index] <= averages[index - 1]) errors.push('章節平均難度未遞增');
  }

  return {
    passed: errors.length === 0,
    errors,
    summary: {
      levels: list.length,
      validData: errors.length ? 0 : list.length,
      uniqueSolutions: unique,
      duplicateCanonicalLevels: list.length - signatures.size,
    },
  };
}

module.exports = { validateLevelSet };
