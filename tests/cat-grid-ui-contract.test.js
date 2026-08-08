'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), 'utf8');

test('滑動標記提供公開 Pointer Events、玩家指引與觸控樣式契約', () => {
  const app = read('js/app.js');
  const css = read('styles.css');

  for (const eventName of [
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
  ]) {
    assert.match(app, new RegExp(eventName));
  }
  assert.match(app, /setPointerCapture/);
  assert.match(app, /滑過多格可連續標記 X/);
  assert.match(css, /\.game-board\s*\{[\s\S]*touch-action:\s*none/);
});
