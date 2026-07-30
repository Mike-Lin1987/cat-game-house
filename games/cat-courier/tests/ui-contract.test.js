'use strict';

const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../js/core.js');
const Renderer = require('../js/renderer.js');
const Storage = require('../js/storage.js');
const Levels = require('../js/data/levels-index.js');

const root = path.join(__dirname, '..');
const read = (filename) => fs.readFileSync(path.join(root, filename), 'utf8');

test('遊戲 runtime 可由 file 直接載入且不使用網路、fetch、ES Module 或 Service Worker', () => {
  const html = read('index.html');
  const runtimeFiles = [
    html, read('js/app.js'), read('js/renderer.js'), read('js/core.js'),
    read('js/solver.js'), read('js/storage.js'), read('js/icons.js'),
  ].join('\n');
  assert.doesNotMatch(runtimeFiles, /type=["']module|(?:^|\s)(?:import|export)\s|fetch\s*\(|serviceWorker|https?:\/\//m);
  assert.equal((html.match(/<script defer src=/g) || []).length, 13);
  assert.match(html, /js\/data\/levels-001-020\.js/);
  assert.match(html, /js\/data\/levels-081-100\.js/);
});

test('Pointer Events、快速拖曳、鍵盤 grid 與完整工具列契約存在', () => {
  const app = read('js/app.js');
  const html = read('index.html');
  const renderer = read('js/renderer.js');
  for (const eventName of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel']) {
    assert.match(app, new RegExp(eventName));
  }
  assert.match(app, /setPointerCapture/);
  assert.match(app, /interpolateCells/);
  assert.match(app, /state\.status !== 'animating'/);
  assert.match(app, /ArrowUp/);
  assert.match(app, /Backspace/);
  assert.match(renderer, /role="grid"/);
  assert.match(renderer, /role="gridcell"/);
  for (const action of ['hint', 'clear', 'restart', 'depart', 'skip-animation']) {
    assert.match(renderer, new RegExp(`data-action="${action}"`));
  }
  assert.match(html, /aria-live="polite"/);
});

test('木質 CSS Grid、SVG route、320px 與 reduced motion 規格完整', () => {
  const css = read('css/app.css');
  const renderer = read('js/renderer.js');
  const level = Levels[0];
  const state = Core.createInitialState(level);
  const game = Renderer.gameMarkup(level, state, Storage.createDefaultProgress(), {
    animationCell: null,
    animating: false,
    canDepart: false,
    elapsedText: '00:00',
    fuelRemaining: level.fuelLimit,
    fuelUsed: 0,
    hintCell: null,
    largeMap: false,
    message: '下一站',
    projectedStars: 3,
    stopProgress: 0,
  });
  assert.match(css, /\.courier-map\s*\{/);
  assert.match(css, /grid-template-columns:\s*repeat\(var\(--map-columns\)/);
  assert.match(
    css,
    /grid-template-rows:[^;]*var\(--map-rows\)[^;]*minmax\(0,\s*1fr\)/,
    '棋盤必須明確等分每一列，不能由 SVG 或配送站內容決定 implicit row 高度',
  );
  assert.match(game, /style="--map-rows:6;--map-columns:6"/);
  assert.equal((game.match(/role="gridcell"/g) || []).length, 36);
  assert.match(css, /@media \(max-width: 370px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /overflow-x:\s*hidden/);
  assert.match(renderer, /class="route-overlay"/);
  assert.match(renderer, /<polyline class="route-glow"/);
});

test('首頁、選關、結果與 review 提供完整可離線流程', () => {
  const progress = Storage.createDefaultProgress();
  const home = Renderer.homeMarkup(progress, false);
  const levels = [{
    id: 'L001', chapter: 1, title: '第一瓶鮮奶', rows: 6, columns: 6, stops: [{}, {}],
  }];
  const select = Renderer.levelSelectMarkup(levels, progress, 1, 0);
  const result = Renderer.modalMarkup('complete', {
    stars: 3, fuelUsed: 8, optimalSteps: 8, fuelRemaining: 4,
    elapsedText: '00:12', hintsUsed: 0, finalLevel: false,
  });
  assert.match(home, /開始遊戲/);
  assert.match(home, /href="\.\.\/\.\.\/index\.html"[^>]*data-portal-home/);
  assert.match(select, /第 1 關/);
  assert.match(result, /下一關/);
  const failure = Renderer.modalMarkup('failure');
  assert.match(failure, /油量用完了/);
  assert.match(failure, /data-action="failure-clear"/);
  const finalResult = Renderer.modalMarkup('complete', {
    stars: 3, fuelUsed: 52, optimalSteps: 52, fuelRemaining: 2,
    elapsedText: '04:12', hintsUsed: 0, finalLevel: true,
    completedCount: 100, totalStars: 287, totalPlayText: '180:04', notThreeStarCount: 9,
  });
  assert.match(finalResult, /總遊玩時間 180:04/);
  assert.match(finalResult, /未滿 3 星關卡 9 關/);
  const review = read('review.html') + read('js/review.js');
  assert.match(review, /review-search/);
  assert.match(review, /review-chapter/);
  assert.match(review, /review-solution/);
  assert.match(review, /逐格播放/);
  assert.match(review, /canonicalSignature/);
});
