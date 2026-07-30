'use strict';

const Core = require('../js/core.js');
const Solver = require('../js/solver.js');
const Levels = require('../js/data/levels-index.js');
const Generator = require('./generate-levels.js');

function analyzeLevels(levels = Levels) {
  const signatures = new Set();
  const rows = levels.map((level) => {
    const definitionErrors = Core.validateLevelDefinition(level);
    const stored = Core.validateStoredSolution(level);
    const solved = Solver.solveLevel({ ...level, solutionPath: undefined }, {
      maxSolutions: 2,
      nodeBudget: 1000000,
      timeBudgetMs: 5000,
    });
    const signature = Generator.canonicalSignature(level);
    const duplicate = signatures.has(signature);
    signatures.add(signature);
    const valid = definitionErrors.length === 0 && stored.valid && solved.solved
      && solved.optimalSteps === level.optimalSteps
      && solved.optimalSolutionCount === 1
      && level.optimalSteps <= level.fuelLimit
      && signature === level.metrics.canonicalSignature
      && !duplicate;
    return {
      id: level.id,
      chapter: level.chapter,
      size: `${level.rows}×${level.columns}`,
      seed: level.seed,
      generatorVersion: level.generatorVersion,
      stopCount: level.stops.length,
      passableCellCount: level.metrics.passableCellCount,
      obstacleCount: level.metrics.obstacleCount,
      oneWayEdgeCount: level.oneWayEdges.length,
      branchCellCount: level.metrics.branchCellCount,
      optimalSteps: level.optimalSteps,
      fuelLimit: level.fuelLimit,
      optimalSolutionCount: solved.optimalSolutionCount,
      difficultyScore: level.difficultyScore,
      solverNodes: solved.nodesVisited,
      solverBacktracks: solved.backtracks,
      solverMaxDepth: solved.maxDepth,
      storedSolutionValid: stored.valid,
      canonicalSignature: signature,
      duplicate,
      valid,
      errors: [...definitionErrors, ...stored.errors],
    };
  });
  const summary = {
    totalLevels: rows.length,
    validData: rows.filter((row) => row.valid).length,
    solvableLevels: rows.filter((row) => row.optimalSolutionCount > 0).length,
    uniqueShortestSolutions: rows.filter((row) => row.optimalSolutionCount === 1).length,
    unsolvableLevels: rows.filter((row) => row.optimalSolutionCount === 0).length,
    multipleShortestSolutions: rows.filter((row) => row.optimalSolutionCount > 1).length,
    invalidStoredSolutions: rows.filter((row) => !row.storedSolutionValid).length,
    exceededFuelLimits: rows.filter((row) => row.optimalSteps > row.fuelLimit).length,
    duplicateCanonicalBoards: rows.filter((row) => row.duplicate).length,
    totalStops: rows.reduce((sum, row) => sum + row.stopCount, 0),
    totalOneWayEdges: rows.reduce((sum, row) => sum + row.oneWayEdgeCount, 0),
    averageOptimalSteps: Number((rows.reduce((sum, row) => sum + row.optimalSteps, 0) / rows.length).toFixed(2)),
  };
  return { summary, levels: rows };
}

function assertValid(analysis) {
  if (analysis.summary.totalLevels !== 100 || analysis.summary.validData !== 100) {
    const failures = analysis.levels.filter((level) => !level.valid)
      .map((level) => `${level.id}：${level.errors.join('、') || '求解或去重驗證失敗'}`);
    throw new Error(failures.join('\n') || '關卡總數或驗證摘要不符');
  }
  return analysis;
}

if (require.main === module) {
  process.stdout.write(`${JSON.stringify(assertValid(analyzeLevels()).summary, null, 2)}\n`);
}

module.exports = { analyzeLevels, assertValid };
