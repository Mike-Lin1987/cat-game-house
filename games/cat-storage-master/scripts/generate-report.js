'use strict';

const fs = require('node:fs');
const path = require('node:path');

const levels = require('../js/data/levels-index.js');
const { validateLevels } = require('./validate-levels.js');

const REPORT_DIRECTORY = path.resolve(__dirname, '..', 'reports');

function createReport() {
  const validation = validateLevels();
  if (!validation.passed) throw new Error(`驗證失敗，拒絕產生通過報告：\n${validation.errors.join('\n')}`);
  const chapterSummary = Array.from({ length: 5 }, (_, index) => {
    const chapter = index + 1;
    const selected = levels.filter((level) => level.chapter === chapter);
    return {
      chapter,
      levels: selected.length,
      averageDifficulty: Math.round(selected.reduce((sum, level) => sum + level.difficultyScore, 0) / selected.length),
    };
  });
  const report = {
    generatedFromDataVersion: 1,
    summary: {
      totalLevels: levels.length,
      validData: 100,
      uniqueSolutions: 100,
      unsolvable: 0,
      multipleSolutions: 0,
      duplicateCanonicalLevels: 0,
      overlappingSolutions: 0,
      incompleteCoverage: 0,
      invalidPieces: 0,
      invalidParMoves: 0,
      invalidMoveLimits: 0,
      totalPieces: levels.reduce((sum, level) => sum + level.pieces.length, 0),
      totalFillableCells: levels.reduce((sum, level) => sum + level.fillableCells.length, 0),
      totalFixedItems: levels.reduce((sum, level) => sum + level.fixedItems.length, 0),
    },
    chapters: chapterSummary,
    levels: levels.map((level) => ({
      id: level.id,
      chapter: level.chapter,
      size: `${level.rows}x${level.columns}`,
      seed: level.seed,
      generatorVersion: level.generatorVersion,
      difficultyScore: level.difficultyScore,
      fillableCellCount: level.metrics.fillableCellCount,
      blockedCellCount: level.metrics.blockedCellCount,
      fixedItemCount: level.metrics.fixedItemCount,
      pieceCount: level.metrics.pieceCount,
      pieceSizes: level.pieces.map((piece) => piece.cells.length).sort((a, b) => a - b),
      allowFlipPieceCount: level.metrics.allowFlipPieceCount,
      parMoves: level.parMoves,
      moveLimit: level.moveLimit,
      solutionCount: level.metrics.solutionCount,
      solverNodes: level.metrics.solverNodes,
      solverBacktracks: level.metrics.solverBacktracks,
      solverMaxDepth: level.metrics.solverMaxDepth,
      canonicalSignature: level.canonicalSignature,
      completeCoverage: true,
      overlaps: false,
      invalidPieces: false,
      passed: true,
    })),
  };
  const markdown = [
    '# 《貓咪收納大師》關卡驗證報告',
    '',
    `- 總關卡數：${report.summary.totalLevels}`,
    `- 資料有效：${report.summary.validData} / 100`,
    `- 唯一解：${report.summary.uniqueSolutions} / 100`,
    '- 無解：0',
    '- 多解：0',
    '- 重複盤面：0',
    '- 解答重疊：0',
    '- 解答漏格：0',
    '- 無效拼塊：0',
    '- parMoves 錯誤：0',
    '- moveLimit 錯誤：0',
    '',
    '| 關卡 | 章節 | 棋盤 | 拼塊 | 可填格 | 難度 | Solver nodes | Backtracks |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...report.levels.map((level) =>
      `| ${level.id} | ${level.chapter} | ${level.size} | ${level.pieceCount} | ${level.fillableCellCount} | ${level.difficultyScore} | ${level.solverNodes} | ${level.solverBacktracks} |`),
    '',
  ].join('\n');
  fs.mkdirSync(REPORT_DIRECTORY, { recursive: true });
  fs.writeFileSync(path.join(REPORT_DIRECTORY, 'level-validation-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(path.join(REPORT_DIRECTORY, 'level-validation-report.md'), markdown);
  return report;
}

if (require.main === module) {
  const report = createReport();
  process.stdout.write(`Report created for ${report.summary.totalLevels} levels.\n`);
}

module.exports = { createReport };
