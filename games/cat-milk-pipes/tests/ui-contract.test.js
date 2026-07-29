'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const Renderer = require('../js/renderer.js');

const ROOT = path.resolve(__dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

test('遊戲 runtime 可由 file 直接載入且不使用網路或 ES Module', () => {
  const runtimeFiles = [
    'index.html', 'review.html', 'css/app.css',
    'js/config.js', 'js/core.js', 'js/solver.js', 'js/storage.js',
    'js/renderer.js', 'js/app.js', 'js/review.js',
  ];
  for (const relativePath of runtimeFiles) {
    const content = read(relativePath).replaceAll('http://www.w3.org/2000/svg', '');
    assert.doesNotMatch(content, /https?:\/\//i, relativePath);
    assert.doesNotMatch(content, /\bfetch\s*\(/, relativePath);
    assert.doesNotMatch(content, /type\s*=\s*["']module["']/i, relativePath);
    assert.doesNotMatch(content, /^\s*(?:import|export)\s/m, relativePath);
    assert.doesNotMatch(content, /serviceWorker/i, relativePath);
  }
  const page = read('index.html');
  const expectedOrder = [
    'js/config.js', 'js/core.js', 'js/solver.js', 'js/storage.js', 'js/renderer.js',
    'js/data/levels-001-020.js', 'js/data/levels-021-040.js',
    'js/data/levels-041-060.js', 'js/data/levels-061-080.js',
    'js/data/levels-081-100.js', 'js/data/levels-index.js', 'js/app.js',
  ];
  let previous = -1;
  for (const script of expectedOrder) {
    const current = page.indexOf(`src="${script}"`);
    assert.equal(current > previous, true, `${script} 載入順序錯誤`);
    previous = current;
  }
});

test('畫面提供完整操作、Modal 與 review 契約', () => {
  const page = read('index.html');
  for (const hook of [
    'data-start', 'data-continue', 'data-open-levels', 'data-board',
    'data-hint', 'data-undo', 'data-restart', 'data-large-board',
    'data-result-dialog', 'data-settings-dialog', 'data-large-dialog',
  ]) {
    assert.match(page, new RegExp(hook));
  }
  assert.match(page, /role="grid"/);
  assert.match(page, /aria-live="polite"/);
  assert.match(read('review.html'), /data-review-search/);
  assert.match(read('review.html'), /data-toggle-solution/);
});

test('首頁清楚說明所有貓咪喝到牛奶即通關', () => {
  const page = read('index.html');
  assert.match(page, /只要每隻貓都喝到牛奶，就能立即通關/);
  assert.match(page, /全亮立即通關/);
  assert.doesNotMatch(page, /零個漏點|不形成迴圈/);
});

test('響應式棋盤保留 CSS Grid、320px 與 reduced motion', () => {
  const styles = read('css/app.css');
  assert.match(styles, /\.pipe-board\s*\{[^}]*display:\s*grid/s);
  assert.match(styles, /repeat\(var\(--board-size\),\s*minmax\(0,\s*1fr\)\)/);
  assert.match(styles, /@media \(max-width:\s*340px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)/);
  assert.match(styles, /\.pipe-board\s*\{[^}]*width:\s*min\(100%,\s*620px\)/s);
  assert.match(styles, /\.pipe-cell\s*\{[^}]*min-width:\s*0/s);
  assert.match(styles, /body\s*\{[^}]*overflow-x:\s*hidden/s);
});

test('鮮奶槽與貓咪碗使用可縮放的原創 SVG 圖示', () => {
  const renderer = read('js/renderer.js');
  assert.match(renderer, /class="role-icon source-icon"/);
  assert.match(renderer, /class="role-icon bowl-icon\b/);
  assert.match(renderer, /class="cat-whiskers"/);
  assert.doesNotMatch(renderer, /role-icon source"[^>]*>奶</);
});

test('貓咪碗提供四種固定配色但不改變關卡資料', () => {
  for (let variant = 0; variant < 4; variant += 1) {
    assert.match(Renderer.roleSvgFor('bowl', variant), new RegExp(`bowl-variant-${variant}`));
  }
  assert.equal(Renderer.roleSvgFor('pipe', 0), '');
});
