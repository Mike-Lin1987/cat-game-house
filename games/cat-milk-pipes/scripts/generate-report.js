'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { analyzeLevels, assertValid } = require('./validate-levels.js');

const ROOT = path.resolve(__dirname, '..');
const REPORT_DIRECTORY = path.join(ROOT, 'reports');

function markdownFor(analysis) {
  const summary = analysis.summary;
  return `# 《貓咪鮮奶管線》關卡驗證報告

- 總關卡數：${summary.totalLevels}
- 資料有效：${summary.validData} / 100
- 唯一解：${summary.uniqueSolutions} / 100
- 無解：${summary.unsolvable}
- 多解：${summary.multipleSolutions}
- 重複盤面：${summary.duplicateCanonicalBoards}
- 有洩漏的固定解答：${summary.storedSolutionLeaks}
- 有迴圈的固定解答：${summary.storedSolutionCycles}
- 未連通固定解答：${summary.disconnectedStoredSolutions}
- optimalMoves 錯誤：${summary.invalidOptimalMoves}
- moveLimit 錯誤：${summary.invalidMoveLimits}
- 自動測試：${summary.automatedTestsPassed} / ${summary.automatedTests}
- 自動測試失敗：${summary.automatedTestFailures}

| 關卡 | 章 | 尺寸 | 有效格 | 貓碗 | 鎖定 | 最佳旋轉 | 上限 | 解答 | 節點 | 回溯 | 深度 | 驗證 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
${analysis.levels.map((level) => `| ${level.id} | ${level.chapter} | ${level.size}×${level.size} | ${level.activeTileCount} | ${level.bowlCount} | ${level.lockedTileCount} | ${level.optimalMoves} | ${level.moveLimit} | ${level.solutionCount} | ${level.solverNodes} | ${level.solverBacktracks} | ${level.solverMaxDepth} | ${level.valid ? '通過' : '失敗'} |`).join('\n')}
`;
}

function writeReport() {
  const analysis = assertValid(analyzeLevels());
  const testFiles = fs.readdirSync(path.join(ROOT, 'tests'))
    .filter((filename) => filename.endsWith('.test.js'))
    .map((filename) => path.join('tests', filename));
  const testResult = spawnSync(
    process.execPath,
    ['--test', '--test-reporter=tap', ...testFiles],
    { cwd: ROOT, encoding: 'utf8' },
  );
  const output = `${testResult.stdout || ''}\n${testResult.stderr || ''}`;
  const count = (label) => Number(output.match(new RegExp(`# ${label} (\\d+)`))?.[1] || 0);
  analysis.summary.automatedTests = count('tests');
  analysis.summary.automatedTestsPassed = count('pass');
  analysis.summary.automatedTestFailures = count('fail');
  if (testResult.status !== 0 || analysis.summary.automatedTestFailures !== 0
    || analysis.summary.automatedTests === 0) {
    throw new Error(`自動測試未通過，拒絕產生成功報告。\n${output}`);
  }
  fs.mkdirSync(REPORT_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.json'),
    `${JSON.stringify(analysis, null, 2)}\n`,
  );
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.md'),
    markdownFor(analysis),
  );
  return analysis;
}

if (require.main === module) {
  const analysis = writeReport();
  process.stdout.write(`驗證報告已產生：${analysis.summary.validData}/100 通過。\n`);
}

module.exports = { markdownFor, writeReport };
