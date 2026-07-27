'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const REQUIRED_FILES = [
  'index.html',
  'styles.css',
  'js/packs.js',
  'js/core.js',
  'js/levels.js',
  'js/app.js',
];
const RUNTIME_FILES = REQUIRED_FILES.map((relativePath) => ({
  relativePath,
  content: fs.readFileSync(path.join(ROOT, relativePath), 'utf8'),
}));
const errors = [];

for (const relativePath of REQUIRED_FILES) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    errors.push(`缺少 runtime 檔案：${relativePath}`);
  }
}

for (const { relativePath, content } of RUNTIME_FILES) {
  if (/https?:\/\//i.test(content)) {
    errors.push(`${relativePath} 包含外部 HTTP(S) URL`);
  }
  if (/\bfetch\s*\(/.test(content)) {
    errors.push(`${relativePath} 使用 fetch()`);
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
  process.stdout.write('離線稽核通過：無外部 URL、fetch、ES Module 或 dependencies。\n');
}
