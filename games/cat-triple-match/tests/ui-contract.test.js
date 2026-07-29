const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

test('file runtime、UMD、Pointer Events 與九格暫存槽契約完整', () => {
  const html = read('index.html');
  const app = read('js/app.js');
  const css = read('css/app.css');
  assert.doesNotMatch(html + app, /\bfetch\s*\(|type=["']module["']|https?:\/\//);
  assert.match(app, /addEventListener\('pointerup'/);
  assert.match(app, /addEventListener\('pointercancel'/);
  assert.match(app, /ArrowLeft/);
  assert.match(css, /grid-template-columns:repeat\(9,minmax\(0,1fr\)\)/);
  assert.match(css, /@media\(max-width:390px\)/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /id="settings-modal"/);
  assert.match(app, /settingsModal\.open/);
  assert.match(app, /state\.status !== 'completed'/);
  assert.match(app, /querySelector\('\.game-tile\.exposed'\)\?\.focus/);
});
test('共用 Canvas 產生器可重現第六支原創教學影片', () => {
  const generatorHtml = fs.readFileSync(path.resolve(ROOT, '..', '..', 'scripts', 'tutorial-videos', 'generator.html'), 'utf8');
  const generatorScript = fs.readFileSync(path.resolve(ROOT, '..', '..', 'scripts', 'tutorial-videos', 'generator.js'), 'utf8');
  assert.match(generatorHtml, /data-render="cat-triple-match"/);
  assert.match(generatorScript, /drawTripleTutorial/);
});
test('review 提供搜尋、章節／張數篩選、metrics 與 known solution 播放', () => {
  const html = read('review.html');
  const script = read('js/review.js');
  assert.match(html, /id="search"/);
  assert.match(html, /id="chapter"/);
  assert.match(html, /id="tiles"/);
  assert.match(script, /knownSolution/);
  assert.match(script, /buildBlockerMap/);
  assert.match(script, /nodesVisited/);
});
test('新遊戲不註冊 Service Worker 且只引用本機資源', () => {
  const tutorial = fs.readFileSync(
    path.resolve(ROOT, '..', '..', 'tutorials', 'cat-triple-match', 'index.html'),
    'utf8',
  );
  const runtime = [...['index.html', 'review.html', 'js/app.js'].map(read), tutorial].join('\n');
  assert.doesNotMatch(runtime, /serviceWorker|navigator\.serviceWorker/);
  assert.doesNotMatch(runtime.replaceAll('http://www.w3.org/2000/svg', ''), /https?:\/\//);
});
