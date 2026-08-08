const test = require('node:test');
const assert = require('node:assert/strict');
const levels = require('../js/data/levels-index.js');
const { validateAll } = require('../scripts/level-validation.js');
const Icons = require('../js/icons.js');

test('L001-L120 全部通過結構、Solver、槽位與 D4 驗證', () => {
  const report = validateAll(levels);
  assert.equal(levels.length, 120);
  assert.deepEqual(report.results.filter((item) => !item.valid), []);
  assert.equal(report.valid, true);
});
test('L038 依第二章張數，L100 固定 108 張', () => {
  assert.ok(levels[37].tiles.length >= 36 && levels[37].tiles.length <= 54);
  assert.equal(levels[99].tiles.length, 108);
});
test('全部固定關卡的圖案名稱與核准動物圖示一致', () => {
  for (const level of levels) {
    for (const symbol of level.symbols) {
      assert.equal(symbol.label, Icons.label(symbol.id), `${level.id} ${symbol.id}`);
    }
  }
});
