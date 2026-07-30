'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { analyzeLevels, assertValid } = require('./validate-levels.js');

function buildMarkdown(analysis) {
  const summary = analysis.summary;
  const lines = [
    '# 《貓咪快遞員》關卡驗證報告',
    '',
    `- 總關卡數：${summary.totalLevels}`,
    `- 資料有效：${summary.validData} / 100`,
    `- 可解關卡：${summary.solvableLevels} / 100`,
    `- 唯一最短解：${summary.uniqueShortestSolutions} / 100`,
    `- 無解關卡：${summary.unsolvableLevels}`,
    `- 多個最短解關卡：${summary.multipleShortestSolutions}`,
    `- 無效 stored solution：${summary.invalidStoredSolutions}`,
    `- 超過油量限制：${summary.exceededFuelLimits}`,
    `- 配送順序錯誤：${summary.stopOrderFailures}`,
    `- 單行道錯誤：${summary.oneWayFailures}`,
    `- 重複地圖：${summary.duplicateCanonicalBoards}`,
    `- 缺少配送站：${summary.missingStops}`,
    `- Placeholder：${summary.placeholderCount}`,
    `- 自動測試失敗：${summary.automatedTestFailures}`,
    `- 配送站總數：${summary.totalStops}`,
    `- 單行道總數：${summary.totalOneWayEdges}`,
    `- 平均 optimalSteps：${summary.averageOptimalSteps}`,
    '',
    '| ID | 章節 | 尺寸 | 站點 | 岔路 | 環路 | 單行道 | 最佳步數 | 油量 | 唯一解 | 難度 | Solver nodes | 結果 |',
    '| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |',
    ...analysis.levels.map((level) => (
      `| ${level.id} | ${level.chapter} | ${level.size} | ${level.stopCount} | ${level.branchCellCount} | ${level.detourLoopCount} | ${level.oneWayEdgeCount} | ${level.optimalSteps} | ${level.fuelLimit} | ${level.optimalSolutionCount} | ${level.difficultyScore} | ${level.solverNodes} | ${level.valid ? '通過' : '失敗'} |`
    )),
    '',
    '全部結論由固定資料、Core stored solution 驗證及不讀取答案的獨立 Solver 重新計算。',
    '',
  ];
  return lines.join('\n');
}

function writeReport() {
  const analysis = assertValid(analyzeLevels());
  const testDirectory = path.join(__dirname, '..', 'tests');
  const testFiles = fs.readdirSync(testDirectory)
    .filter((filename) => filename.endsWith('.test.js'))
    .map((filename) => path.join(testDirectory, filename));
  const testResult = spawnSync(process.execPath, ['--test', ...testFiles], {
    cwd: path.join(__dirname, '..'),
    encoding: 'utf8',
  });
  if (testResult.status !== 0) {
    throw new Error(`專屬自動測試失敗，拒絕輸出通過報告。\n${testResult.stdout}\n${testResult.stderr}`);
  }
  analysis.summary.automatedTestFailures = 0;
  const directory = path.join(__dirname, '..', 'reports');
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(
    path.join(directory, 'level-validation-report.json'),
    `${JSON.stringify(analysis, null, 2)}\n`,
  );
  fs.writeFileSync(
    path.join(directory, 'level-validation-report.md'),
    buildMarkdown(analysis),
  );
  return analysis;
}

if (require.main === module) {
  const analysis = writeReport();
  process.stdout.write(`已產生 100 關驗證報告；${analysis.summary.validData}/100 通過。\n`);
}

module.exports = { buildMarkdown, writeReport };
