'use strict';

const fs = require('node:fs');
const path = require('node:path');
const {
  CAT_GAME_CATALOG,
  normalizeLocalAssetPath,
  validateGameCatalog,
} = require('../js/game-catalog.js');

const ROOT = path.resolve(__dirname, '..');
const BASE_RUNTIME_FILES = [
  'index.html',
  'portal.css',
  'manifest.webmanifest',
  'service-worker.js',
  'games/cat-grid/index.html',
  'styles.css',
  'js/game-catalog.js',
  'js/progress-backup.js',
  'js/progress-ui.js',
  'js/portal.js',
  'js/pwa.js',
  'js/packs.js',
  'js/core.js',
  'js/levels.js',
  'js/app.js',
  'assets/icons/icon.svg',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/game-covers/cat-grid.svg',
  'games/cat-color-connect/index.html',
  'games/cat-color-connect/styles.css',
  'games/cat-color-connect/js/config.js',
  'games/cat-color-connect/js/core.js',
  'games/cat-color-connect/js/storage.js',
  'games/cat-color-connect/js/renderer.js',
  'games/cat-color-connect/js/app.js',
  'games/cat-color-connect/js/levels-6x6.js',
  'games/cat-color-connect/js/levels-8x8.js',
  'games/cat-color-connect/js/levels-10x10.js',
  'games/cat-color-connect/js/levels-6x8.js',
  'games/cat-color-connect/js/levels-6x10.js',
  'games/cat-color-connect/js/levels-8x10.js',
  'games/cat-color-connect/js/levels.js',
  'assets/game-covers/cat-color-connect.svg',
];
const CATALOG_RUNTIME_FILES = CAT_GAME_CATALOG.flatMap((game) =>
  [game.href, game.tutorialHref, game.cover, ...game.offlineAssets]
    .map(normalizeLocalAssetPath)
    .filter(Boolean),
);
const REQUIRED_FILES = [
  ...new Set([...BASE_RUNTIME_FILES, ...CATALOG_RUNTIME_FILES]),
];
const TEXT_RUNTIME_FILES = REQUIRED_FILES.filter(
  (relativePath) => /\.(?:css|html|js|svg)$/i.test(relativePath),
);
const errors = [];

for (const relativePath of REQUIRED_FILES) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    errors.push(`缺少 runtime 檔案：${relativePath}`);
  }
}

for (const relativePath of TEXT_RUNTIME_FILES) {
  const absolutePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(absolutePath)) {
    continue;
  }

  const content = fs
    .readFileSync(absolutePath, 'utf8')
    .replaceAll('http://www.w3.org/2000/svg', '');

  if (/https?:\/\//i.test(content)) {
    errors.push(`${relativePath} 包含外部 HTTP(S) URL`);
  }
  if (/\bfetch\s*\(/.test(content) && relativePath !== 'service-worker.js') {
    errors.push(`${relativePath} 使用 fetch()；只有 Service Worker 可使用同來源 fetch`);
  }
  if (/\bXMLHttpRequest\b/.test(content)) {
    errors.push(`${relativePath} 使用 XMLHttpRequest`);
  }
  if (/\b(?:WebSocket|EventSource)\s*\(/.test(content)) {
    errors.push(`${relativePath} 使用持續網路連線 API`);
  }
  if (/\bnavigator\s*\.\s*sendBeacon\s*\(/.test(content)) {
    errors.push(`${relativePath} 使用 sendBeacon()`);
  }
  if (/(?:src|href)\s*=\s*["']\s*\/\//i.test(content)) {
    errors.push(`${relativePath} 包含 protocol-relative 外部資源`);
  }
  if (/type\s*=\s*["']module["']/i.test(content)) {
    errors.push(`${relativePath} 使用 ES Module`);
  }
  if (/\bimport\s*\(/.test(content)) {
    errors.push(`${relativePath} 使用 dynamic import()`);
  }
  if (/^\s*(?:import|export)\s/m.test(content)) {
    errors.push(`${relativePath} 包含 import/export`);
  }
}

const serviceWorker = fs.existsSync(path.join(ROOT, 'service-worker.js'))
  ? fs.readFileSync(path.join(ROOT, 'service-worker.js'), 'utf8')
  : '';
if (
  serviceWorker &&
  !/url\.origin\s*!==\s*self\.location\.origin/.test(serviceWorker)
) {
  errors.push('Service Worker fetch 必須拒絕跨來源 request');
}

errors.push(...validateGameCatalog(CAT_GAME_CATALOG));
for (const game of CAT_GAME_CATALOG) {
  const gamePaths = [game.href, game.tutorialHref, game.cover, ...game.offlineAssets];
  for (const relativePath of gamePaths) {
    const normalized = normalizeLocalAssetPath(relativePath);
    if (!normalized) {
      continue;
    }

    const absolutePath = path.resolve(ROOT, normalized);
    if (!absolutePath.startsWith(`${ROOT}${path.sep}`)) {
      errors.push(`${game.id} catalog 指向專案外：${relativePath}`);
      continue;
    }

    if (!fs.existsSync(absolutePath)) {
      errors.push(`${game.id} catalog 指向不存在的檔案：${normalized}`);
    }
  }
}

const packageJson = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'),
);
if (
  (packageJson.dependencies && Object.keys(packageJson.dependencies).length > 0) ||
  (packageJson.devDependencies && Object.keys(packageJson.devDependencies).length > 0)
) {
  errors.push('package.json 不得包含外部 dependencies');
}

if (errors.length > 0) {
  process.stderr.write(`${errors.join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `離線稽核通過：${CAT_GAME_CATALOG.length} 款遊戲皆為本機資源，頁面無外部 URL、ES Module 或 dependencies；Service Worker 僅代理同來源 GET。\n`,
  );
}
