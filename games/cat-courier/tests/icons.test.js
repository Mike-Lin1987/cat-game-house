'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Icons = require('../js/icons.js');

test('配送物品、地形與工具都有原創安全 inline SVG', () => {
  const required = [
    'courier', 'milk', 'dried-fish', 'parcel', 'cat-food', 'yarn', 'mouse',
    'cat-grass', 'letter', 'flowers', 'paw-cookie', 'tree', 'crate', 'barrier',
    'fence', 'water', 'bridge', 'hint', 'eraser', 'restart', 'depart', 'settings',
  ];
  for (const name of required) {
    const markup = Icons.get(name);
    assert.match(markup, /^<svg /, name);
    assert.match(markup, /aria-label="[^"]+"/, name);
    assert.doesNotMatch(markup, /<script|https?:|on\w+=/i, name);
  }
  assert.equal(new Set(required.map((name) => Icons.get(name))).size, required.length);
});

test('十種配送物品提供穩定中文標籤', () => {
  const labels = [
    Icons.getLabel('milk'), Icons.getLabel('dried-fish'), Icons.getLabel('parcel'),
    Icons.getLabel('cat-food'), Icons.getLabel('yarn'), Icons.getLabel('mouse'),
    Icons.getLabel('cat-grass'), Icons.getLabel('letter'), Icons.getLabel('flowers'),
    Icons.getLabel('paw-cookie'),
  ];
  assert.equal(new Set(labels).size, 10);
  assert.ok(labels.every(Boolean));
});
