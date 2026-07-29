'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

test('遊戲 runtime 可由 file 直接載入且不使用外部資源、fetch 或 ES Module', () => {
  const html = read('index.html');
  const scripts = ['js/config.js', 'js/core.js', 'js/solver.js', 'js/storage.js', 'js/renderer.js', 'js/app.js']
    .map(read).join('\n');
  assert.doesNotMatch(html, /type=["']module["']/i);
  assert.doesNotMatch(`${html}\n${scripts}`, /\bfetch\s*\(/);
  assert.doesNotMatch(`${html}\n${scripts}`, /https?:\/\//i);
  assert.doesNotMatch(scripts, /^\s*(?:import|export)\s/m);
  assert.match(html, /levels-001-020\.js/);
  assert.match(html, /levels-index\.js/);
});
test('Pointer Events、鍵盤、工具列與 Modal 契約完整', () => {
  const app = read('js/app.js');
  const html = read('index.html');
  for (const token of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'setPointerCapture']) {
    assert.match(app, new RegExp(token));
  }
  for (const action of ['hint', 'undo', 'rotate', 'flip', 'replay', 'zoom']) {
    assert.match(read('js/renderer.js'), new RegExp(`data-action="${action}"`));
  }
  assert.match(app, /ArrowUp/);
  assert.match(app, /Delete/);
  assert.match(app, /event\.key\.toLowerCase\(\) === 'r'/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /<dialog/);
});

test('木製 CSS Grid、連續拼塊、320px 與 reduced motion 規格存在', () => {
  const css = read('css/app.css');
  const renderer = read('js/renderer.js');
  assert.match(css, /\.board\s*\{[\s\S]*display:\s*grid/);
  assert.match(css, /min-width:\s*320px/);
  assert.match(css, /@media \(max-width: 350px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.join-top/);
  assert.match(renderer, /role="grid"/);
  assert.match(renderer, /role="gridcell"/);
  assert.match(renderer, /themeArt/);
  assert.match(renderer, /<svg/);
});

test('review 頁可直接載入、搜尋、篩選、切換答案與前後關', () => {
  const html = read('review.html');
  const script = read('js/review.js');
  assert.match(html, /data-search/);
  assert.match(html, /data-chapter-filter/);
  assert.match(html, /data-size-filter/);
  assert.match(html, /data-show-answer/);
  assert.match(script, /data-review-nav/);
  assert.doesNotMatch(`${html}\n${script}`, /\bfetch\s*\(/);
});
