'use strict';

const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Levels = require('../js/data/levels-index.js');
const Generator = require('./generate-levels.js');

function analyzeLevels(levels = Levels) {
  const signatures = new Set();
  const rows = [];
  for (const level of levels) {
    const definitionErrors = Core.validateLevelDefinition(level);
    const stored = Core.validateStoredSolution(level);
    const solution = Solver.solve(level);
    const canonicalSignature = Generator.canonicalSignature(level);
    const duplicate = signatures.has(canonicalSignature);
    signatures.add(canonicalSignature);
    rows.push({
      id: level.id,
      chapter: level.chapter,
      size: level.size,
      seed: level.seed,
      generatorVersion: level.generatorVersion,
      difficultyScore: level.difficultyScore,
      optimalMoves: level.optimalMoves,
      moveLimit: level.moveLimit,
      ...level.metrics,
      solutionCount: solution.solutionCount,
      solverNodes: solution.nodesVisited,
      solverBacktracks: solution.backtracks,
      solverMaxDepth: solution.maxDepth,
      matchedEdgeCount: stored.matchedEdgeCount,
      connected: stored.components.length === 1,
      leakCount: stored.leaks.length,
      cycle: stored.cycle,
      allBowlsConnected: stored.connectedBowls === stored.bowlCount,
      canonicalSignature,
      duplicate,
      valid: definitionErrors.length === 0 && stored.valid
        && solution.solutionCount === 1 && !duplicate
        && level.optimalMoves === Core.calculateOptimalMoves(level)
        && level.moveLimit >= level.optimalMoves,
      errors: definitionErrors,
    });
  }
  const summary = {
    totalLevels: rows.length,
    validData: rows.filter((row) => row.valid).length,
    uniqueSolutions: rows.filter((row) => row.solutionCount === 1).length,
    unsolvable: rows.filter((row) => row.solutionCount === 0).length,
    multipleSolutions: rows.filter((row) => row.solutionCount > 1).length,
    duplicateCanonicalBoards: rows.filter((row) => row.duplicate).length,
    storedSolutionLeaks: rows.filter((row) => row.leakCount > 0).length,
    storedSolutionCycles: rows.filter((row) => row.cycle).length,
    disconnectedStoredSolutions: rows.filter((row) => !row.connected).length,
    invalidOptimalMoves: levels.filter(
      (level) => level.optimalMoves !== Core.calculateOptimalMoves(level),
    ).length,
    invalidMoveLimits: levels.filter((level) => level.moveLimit < level.optimalMoves).length,
  };
  return { summary, levels: rows };
}

function assertValid(analysis) {
  if (analysis.summary.totalLevels !== 100 || analysis.summary.validData !== 100) {
    const failures = analysis.levels.filter((level) => !level.valid)
      .map((level) => `${level.id}：${level.errors.join('、') || '驗證失敗'}`);
    throw new Error(failures.join('\n') || '關卡總數或驗證摘要不符');
  }
  return analysis;
}

if (require.main === module) {
  const analysis = assertValid(analyzeLevels());
  process.stdout.write(`${JSON.stringify(analysis.summary, null, 2)}\n`);
}

module.exports = { analyzeLevels, assertValid };
