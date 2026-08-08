const levels = require('../js/data/levels-index.js');
const { validateAll } = require('./level-validation.js');
const report = validateAll(levels);
for (const result of report.results) {
  if (!result.valid) process.stderr.write(`${result.id}: ${result.errors.join('；')}\n`);
}
if (!report.valid) {
  process.stderr.write(`驗證失敗：${report.results.filter((item) => !item.valid).length} 關\n`);
  process.exit(1);
}
process.stdout.write(`貓咪三層配對：${levels.length}/${levels.length} 關驗證通過，D4 signature ${levels.length}/${levels.length} 不重複。\n`);
