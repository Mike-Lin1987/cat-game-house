'use strict';

const fs = require('node:fs');
const path = require('node:path');

const { analyzeLevels, assertValid } = require('./validate-levels.js');

const ROOT = path.resolve(__dirname, '..', '..');
const REPORT_DIRECTORY = path.join(ROOT, 'reports', 'cat-word-solitaire');

function csvCell(value) {
  const text = Array.isArray(value) ? value.join('/') : String(value ?? '');
  return `"${text.replaceAll('"', '""')}"`;
}

function writeReports(analysis) {
  fs.mkdirSync(REPORT_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.json'),
    `${JSON.stringify(analysis, null, 2)}\n`,
    'utf8',
  );

  const summary = analysis.summary;
  const markdown = `# 喵語分類接龍關卡驗證報告

- 總關卡數：${summary.totalLevels}
- 固定54張牌：${summary.exactCardCountLevels} / 100
- 5欄階梯關卡：${summary.fiveColumnLayouts} / 100
- 5槽可解關卡：${summary.solvableWithFiveSlots} / 100
- 通過資料驗證：${summary.validDefinitions} / 100
- 通過牌局求解：${summary.totalLevels - summary.unsolved} / 100
- 無法求解：${summary.unsolved}
- 超過步數限制：${summary.overMoveLimit}
- 舊版4欄關卡：${summary.invalidFourColumnLayouts}
- 無效第5欄：${summary.invalidFifthColumns}
- 重複牌局：${summary.duplicateLayouts}
- 缺少卡牌：${summary.missingCards}
- 重複卡牌：${summary.duplicateCards}
- 分類數量錯誤：${summary.invalidCategories}
- Placeholder：${summary.placeholders}
- 未完成人工內容審核：${summary.uncheckedContent}
- 不同分類名稱：${summary.distinctCategoryCount}
- 圖片牌：${summary.imageCardCount} / ${summary.itemCardCount}（${(
    summary.imageRatio * 100
  ).toFixed(1)}%）
- 全部失敗關卡：${summary.failedLevels}

## 章節平均難度

${summary.chapterAverages
  .map((average, index) => `- 第 ${index + 1} 章：${average.toFixed(1)}`)
  .join('\n')}

## 逐關摘要

| 關卡 | 章 | 總牌 | 分類 | 提示 | 圖片 | 開局欄高 | 發牌批次 | par | 上限 | 求解步數 | 節點 | 回溯 | 分支 | 發牌選擇 | 強制步 | 分數 | 結果 |
| --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
${analysis.levels
  .map(
    (level) =>
      `| ${level.id} | ${level.chapter} | ${level.totalCardCount} | ${level.categoryCount} | ${level.itemCardCount} | ${level.imageCardCount} | ${level.columnHeights.join('/')} | ${level.drawBatchCount} | ${level.parMoves} | ${level.moveLimit} | ${level.solverMoves} | ${level.solverNodes} | ${level.solverBacktracks} | ${level.solverBranchingStates} | ${level.solverDealDecisionStates} | ${level.solverForcedMoves} | ${level.difficultyScore} | ${level.errors.length === 0 ? '通過' : '失敗'} |`,
  )
  .join('\n')}
`;
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.md'),
    markdown,
    'utf8',
  );

  const headers = [
    'levelId',
    'chapter',
    'totalCardCount',
    'categoryCount',
    'itemCardCount',
    'imageCardCount',
    'columnHeights',
    'fifthColumnCount',
    'drawBatchCount',
    'parMoves',
    'moveLimit',
    'solverSolved',
    'solverMoves',
    'solverNodes',
    'solverBacktracks',
    'solverBranchingStates',
    'solverDealDecisionStates',
    'solverForcedMoves',
    'maxActiveCategories',
    'contentReviewChecked',
    'ambiguityNotes',
    'layoutSignature',
  ];
  const csv = [
    headers.map(csvCell).join(','),
    ...analysis.levels.map((level) =>
      headers.map((header) => csvCell(level[header])).join(','),
    ),
  ].join('\n');
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'content-review.csv'),
    `${csv}\n`,
    'utf8',
  );
}

function main() {
  const analysis = assertValid(analyzeLevels());
  writeReports(analysis);
  console.log(
    `驗證報告已輸出：${path.relative(ROOT, REPORT_DIRECTORY)}（${analysis.levels.length} 關，失敗 0）。`,
  );
}

if (require.main === module) {
  main();
}

module.exports = Object.freeze({ writeReports });
