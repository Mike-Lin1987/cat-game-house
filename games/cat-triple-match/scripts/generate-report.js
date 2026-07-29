const fs = require('node:fs');
const path = require('node:path');
const levels = require('../js/data/levels-index.js');
const { validateAll } = require('./level-validation.js');
const report = validateAll(levels);
if (!report.valid) throw new Error('驗證未通過，拒絕產生通過報告');
const reports = path.resolve(__dirname, '..', 'reports');
fs.mkdirSync(reports, { recursive: true });
const json = {
  game: '貓咪三層配對', generatedFromFixedData: true, passed: true,
  summary: {
    levels: 100, solved: 100, d4Unique: 100,
    minTiles: Math.min(...report.results.map((item) => item.tiles)),
    maxTiles: Math.max(...report.results.map((item) => item.tiles)),
    maxPeakTrayOccupancy: Math.max(...report.results.map((item) => item.solver.peakTrayOccupancy)),
  },
  levels: report.results,
};
fs.writeFileSync(path.join(reports, 'level-validation-report.json'), `${JSON.stringify(json, null, 2)}\n`);
const rows = report.results.map((item) =>
  `| ${item.id} | ${item.chapter} | ${item.tiles} | ${item.layers} | ${item.symbols} | ${item.solver.nodesVisited} | ${item.solver.backtracks} | ${item.solver.peakTrayOccupancy} | 通過 |`);
const markdown = `# 《貓咪三層配對》關卡驗證報告\n\n`
  + `- 固定關卡：100/100\n- Solver 可解：100/100\n- D4 不重複：100/100\n- 峰值槽位：${json.summary.maxPeakTrayOccupancy}/8\n\n`
  + `| 關卡 | 章 | 張數 | 層 | 圖案 | 節點 | 回溯 | 峰值槽 | 結果 |\n|---|---:|---:|---:|---:|---:|---:|---:|---|\n${rows.join('\n')}\n`;
fs.writeFileSync(path.join(reports, 'level-validation-report.md'), markdown);
process.stdout.write('驗證報告已產生。\n');
