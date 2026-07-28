'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..', '..');

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

test('遊戲 runtime 可由 file 直接載入且不註冊 Service Worker 或 fetch', () => {
  const html = read('games/cat-word-solitaire/index.html');
  const scripts = [
    'games/cat-word-solitaire/js/config.js',
    'games/cat-word-solitaire/js/core.js',
    'games/cat-word-solitaire/js/solver.js',
    'games/cat-word-solitaire/js/storage.js',
    'games/cat-word-solitaire/js/renderer.js',
    'games/cat-word-solitaire/js/app.js',
  ].map(read).join('\n');

  assert.match(html, /<script src="js\/config\.js"><\/script>/);
  assert.match(html, /<script src="js\/data\/levels-index\.js"><\/script>/);
  assert.doesNotMatch(html, /type=["']module["']/i);
  assert.doesNotMatch(`${html}\n${scripts}`, /\bfetch\s*\(/);
  assert.doesNotMatch(`${html}\n${scripts}`, /serviceWorker\.register/);
  assert.doesNotMatch(`${html}\n${scripts}`, /https?:\/\//i);
});

test('五列接龍牌堆上緣對齊並只向下延伸', () => {
  const styles = read('games/cat-word-solitaire/css/app.css');
  const renderer = read('games/cat-word-solitaire/js/renderer.js');

  assert.match(styles, /\.tableau\s*\{[^}]*align-items:\s*start;/s);
  assert.match(styles, /\.tableau-column\s*\{[^}]*align-self:\s*start;/s);
  assert.match(styles, /top:\s*calc\(var\(--stack-index\)\s*\*\s*var\(--card-overlap\)\)/);
  assert.match(styles, /height:\s*calc\(var\(--card-height\)\s*\+\s*var\(--card-overlap\)\s*\*\s*\(var\(--card-count\)\s*-\s*1\)\)/);
  assert.match(renderer, /--card-count/);
  assert.match(renderer, /--stack-index/);
});

test('手機斷點仍保留五槽在左、牌庫在右', () => {
  const styles = read('games/cat-word-solitaire/css/app.css');
  const mobileRule = styles.match(/@media \(max-width: 720px\)\s*\{([\s\S]*?)\n\}/);
  assert.notEqual(mobileRule, null);
  assert.match(mobileRule[1], /\.slots-and-deck\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+auto;/s);
});
