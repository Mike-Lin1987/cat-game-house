'use strict';

const fs = require('node:fs');
const path = require('node:path');
const Core = require('../../games/cat-color-connect/js/core.js');
const Config = require('../../games/cat-color-connect/js/config.js');
const levels = require('../../games/cat-color-connect/js/levels.js');

const ROOT = path.resolve(__dirname, '..', '..');
const REPORT_DIRECTORY = path.join(ROOT, 'reports', 'cat-color-connect');

function validateAll() {
  const errors = [];
  const endpointSignatures = new Set();
  const solutionSignatures = new Set();
  const rows = [];
  const startedAt = Date.now();

  if (levels.length !== 100) {
    errors.push(`總關卡數應為 100，實際為 ${levels.length}`);
  }

  for (const pack of Config.packs) {
    const packLevels = levels.filter((level) => level.packId === pack.id);
    if (packLevels.length !== pack.levelCount) {
      errors.push(`${pack.id} 應有 ${pack.levelCount} 關，實際為 ${packLevels.length}`);
    }
    for (let index = 1; index < packLevels.length; index += 1) {
      if (packLevels[index].difficultyScore < packLevels[index - 1].difficultyScore) {
        errors.push(`${pack.id} 難度分數未由低至高排序`);
        break;
      }
    }
  }

  for (const level of levels) {
    const validationErrors = Core.validateStoredSolution(level);
    errors.push(...validationErrors.map((message) => `${level.id}: ${message}`));
    const endpointSignature = Core.canonicalizeEndpointSignature(level);
    const solutionSignature = Core.canonicalizeSolutionSignature(level);
    if (endpointSignatures.has(endpointSignature)) {
      errors.push(`${level.id}: 端點配置重複`);
    }
    if (solutionSignatures.has(solutionSignature)) {
      errors.push(`${level.id}: 完整解答 D4 重複`);
    }
    endpointSignatures.add(endpointSignature);
    solutionSignatures.add(solutionSignature);

    const verifyStartedAt = Date.now();
    const solved = Core.countSolutions(level, 2, {
      maxNodes: 10000000,
      timeoutMs: 120000,
    });
    if (solved.timedOut || solved.count !== 1) {
      errors.push(
        `${level.id}: 獨立求解器解答數 ${solved.count}${solved.timedOut ? '（逾時）' : ''}`,
      );
    }
    rows.push({
      id: level.id,
      packId: level.packId,
      seed: level.seed,
      generatorVersion: level.generatorVersion,
      endpointSignature,
      solutionSignature,
      solutionCount: solved.count,
      timedOut: solved.timedOut,
      nodesVisited: solved.nodesVisited,
      backtracks: solved.backtracks,
      difficultyScore: level.difficultyScore,
      coverage: Core.validateStoredSolution(level).length === 0 ? 100 : 0,
      validationMs: Date.now() - verifyStartedAt,
    });
  }

  return {
    generatedAt: new Date().toISOString(),
    generatorVersion: Config.generatorVersion,
    masterSeed: Config.masterSeed,
    expectedCount: 100,
    actualCount: levels.length,
    uniqueEndpointCount: endpointSignatures.size,
    uniqueSolutionCount: solutionSignatures.size,
    failureCount: errors.length,
    durationMs: Date.now() - startedAt,
    distribution: Object.fromEntries(
      Config.packs.map((pack) => [
        pack.id,
        levels.filter((level) => level.packId === pack.id).length,
      ]),
    ),
    errors,
    levels: rows,
  };
}

function writeReport(report) {
  fs.mkdirSync(REPORT_DIRECTORY, { recursive: true });
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.json'),
    `${JSON.stringify(report, null, 2)}\n`,
    'utf8',
  );
  const lines = [
    '# 貓咪彩色連線關卡驗證報告',
    '',
    `- 固定關卡：${report.actualCount}/${report.expectedCount}`,
    `- 分布：${Object.entries(report.distribution).map(([id, count]) => `${id} ${count}`).join('、')}`,
    `- 唯一端點配置：${report.uniqueEndpointCount}`,
    `- 唯一完整解答：${report.uniqueSolutionCount}`,
    `- 失敗：${report.failureCount}`,
    `- 驗證時間：${(report.durationMs / 1000).toFixed(2)} 秒`,
    '',
    '| 關卡 | 解答數 | 節點 | 回溯 | 分數 | 驗證 ms |',
    '|---|---:|---:|---:|---:|---:|',
    ...report.levels.map(
      (level) =>
        `| ${level.id} | ${level.solutionCount}${level.timedOut ? ' timeout' : ''} | ${level.nodesVisited} | ${level.backtracks} | ${level.difficultyScore} | ${level.validationMs} |`,
    ),
  ];
  if (report.errors.length > 0) {
    lines.push('', '## 錯誤', '', ...report.errors.map((error) => `- ${error}`));
  }
  fs.writeFileSync(
    path.join(REPORT_DIRECTORY, 'level-validation-report.md'),
    `${lines.join('\n')}\n`,
    'utf8',
  );
}

function main() {
  const report = validateAll();
  writeReport(report);
  if (report.errors.length > 0) {
    process.stderr.write(`${report.errors.join('\n')}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write(
      `100 關驗證通過：${Object.entries(report.distribution).map(([id, count]) => `${id}=${count}`).join(', ')}；唯一解 ${report.actualCount}，重複 0，失敗 0。\n`,
    );
  }
}

if (require.main === module) main();

module.exports = { validateAll, writeReport, main };
