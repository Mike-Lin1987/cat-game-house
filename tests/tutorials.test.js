'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const { CAT_GAME_CATALOG } = require('../js/game-catalog.js');

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

test('入口依 catalog 在遊戲名稱旁建立教學影片連結', () => {
  const portalScript = read('js/portal.js');
  const portalStyles = read('portal.css');
  const tutorialScript = read('js/tutorial-page.js');

  assert.match(portalScript, /game\.tutorialHref/);
  assert.match(portalScript, /tutorial-link/);
  assert.match(portalStyles, /\.game-title-row/);
  assert.match(portalStyles, /\.tutorial-link/);
  assert.match(tutorialScript, /window\.location\.protocol\s*===\s*['"]file:['"]/);
});

test('八款遊戲各有可離線播放的教學頁與 WebM', () => {
  assert.deepEqual(
    CAT_GAME_CATALOG.map((game) => game.tutorialHref),
    [
      './tutorials/cat-grid/index.html',
      './tutorials/cat-color-connect/index.html',
      './tutorials/cat-word-solitaire/index.html',
      './tutorials/cat-milk-pipes/index.html',
      './tutorials/cat-storage-master/index.html',
      './tutorials/cat-triple-match/index.html',
      './tutorials/cat-courier/index.html',
      './tutorials/cat-zhuyin-treasure/index.html',
    ],
    '教學頁應使用不與遊戲 index 路由衝突的獨立 hosted 路徑',
  );

  for (const game of CAT_GAME_CATALOG) {
    assert.match(game.tutorialHref, /^\.\/tutorials\/[^/]+\/index\.html$/);
    const tutorialPath = path.join(ROOT, game.tutorialHref.slice(2));
    assert.equal(fs.existsSync(tutorialPath), true, `${game.id} 缺少教學頁`);

    const page = fs.readFileSync(tutorialPath, 'utf8');
    assert.match(page, /<video\b[^>]*\bcontrols\b/);
    assert.match(page, /<source\b[^>]*type="video\/webm"/);
    assert.match(page, /返回遊戲小屋/);
    assert.match(page, /開始遊戲/);
    assert.doesNotMatch(page, /https?:\/\//i);

    const match = page.match(/<source\b[^>]*src="([^"]+\.webm)"/);
    assert.notEqual(match, null, `${game.id} 教學頁缺少 WebM source`);
    const videoPath = path.resolve(path.dirname(tutorialPath), match[1]);
    assert.equal(fs.existsSync(videoPath), true, `${game.id} 缺少 WebM`);
    assert.equal(fs.statSync(videoPath).size > 100_000, true, `${game.id} WebM 太小`);

    assert.equal(
      game.offlineAssets.includes(game.tutorialHref),
      true,
      `${game.id} 教學頁未加入離線資源`,
    );
    const videoRelative = `./${path.relative(ROOT, videoPath).replaceAll('\\', '/')}`;
    assert.equal(
      game.offlineAssets.includes(videoRelative),
      true,
      `${game.id} WebM 未加入離線資源`,
    );
  }
});
