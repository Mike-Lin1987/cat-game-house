'use strict';

const levels = require('../js/data/levels-index.js');
const core = require('../js/core.js');
const solver = require('../js/solver.js');
const { canonicalSignature } = require('./generate-levels.js');

function validateLevels() {
  const errors = [];
  const signatures = new Set();
  let unique = 0;
  for (const level of levels) {
    for (const error of core.validateLevelDefinition(level)) errors.push(`${level.id}: ${error}`);
    for (const error of core.validateStoredSolution(level)) errors.push(`${level.id}: ${error}`);
    const solved = solver.solveLevel({ ...level, solution: null }, { maxSolutions: 2 });
    if (solved.solutionCount === 1) unique += 1;
    else errors.push(`${level.id}: solutionCount=${solved.solutionCount}`);
    const signature = canonicalSignature(level);
    if (signatures.has(signature)) errors.push(`${level.id}: canonical signature 重複`);
    signatures.add(signature);
    if (core.calculateParMoves(level) !== level.parMoves) errors.push(`${level.id}: parMoves 錯誤`);
    if (level.moveLimit < level.parMoves) errors.push(`${level.id}: moveLimit 錯誤`);
  }
  if (levels.length !== 100) errors.push(`關卡總數 ${levels.length}，應為 100`);
  return {
    passed: errors.length === 0,
    errors,
    summary: {
      levels: levels.length,
      validData: levels.length - new Set(errors.map((error) => error.split(':')[0])).size,
      uniqueSolutions: unique,
      duplicateCanonicalLevels: levels.length - signatures.size,
    },
  };
}

function main() {
  const result = validateLevels();
  process.stdout.write(`Levels: ${result.summary.levels} / 100\n`);
  process.stdout.write(`Unique solutions: ${result.summary.uniqueSolutions} / 100\n`);
  process.stdout.write(`Duplicate canonical levels: ${result.summary.duplicateCanonicalLevels}\n`);
  if (!result.passed) {
    process.stderr.write(`${result.errors.join('\n')}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write('Cat Storage validation passed.\n');
  }
}

if (require.main === module) main();

module.exports = { validateLevels };
