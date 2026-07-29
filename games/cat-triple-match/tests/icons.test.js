const test = require('node:test');
const assert = require('node:assert/strict');
const Icons = require('../js/icons.js');

const expectedAnimals = [
  ['fishbone', '貓咪'],
  ['milk', '狗狗'],
  ['yarn', '兔子'],
  ['can', '狐狸'],
  ['paw', '棕熊'],
  ['box', '熊貓'],
  ['mouse', '獅子'],
  ['bell', '老虎'],
  ['fish', '企鵝'],
  ['scratcher', '貓頭鷹'],
  ['cushion', '無尾熊'],
  ['blue-cushion', '梅花鹿'],
  ['salmon', '浣熊'],
  ['grass', '水獺'],
  ['bowl', '倉鼠'],
  ['feather', '羊駝'],
];

test('16 種穩定圖案 ID 依核准順序改為辨識度明顯的動物', () => {
  assert.deepEqual(
    Icons.icons.map(({ id, label }) => [id, label]),
    expectedAnimals,
  );
});

test('每種動物提供安全且互不相同的原創 SVG markup', () => {
  const markups = expectedAnimals.map(([id]) => Icons.markup(id));
  assert.equal(new Set(markups).size, expectedAnimals.length);
  for (const markup of markups) {
    assert.match(markup, /^<svg class="tile-icon"/);
    assert.match(markup, /aria-hidden="true"/);
    assert.doesNotMatch(markup, /<script|on\w+=|javascript:/i);
  }
});

test('未知圖案安全回退為第一個動物圖示與名稱', () => {
  assert.equal(Icons.label('not-a-symbol'), '貓咪');
  assert.equal(Icons.markup('not-a-symbol'), Icons.markup('fishbone'));
});
