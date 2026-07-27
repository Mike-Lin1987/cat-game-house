'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const CLIENT = path.join(DIST, 'client');
const STATIC_ENTRIES = [
  'index.html',
  'portal.css',
  'styles.css',
  'manifest.webmanifest',
  'service-worker.js',
  'js',
  'games',
  'assets',
];

function assertInsideRoot(targetPath) {
  const resolved = path.resolve(targetPath);
  if (!resolved.startsWith(`${ROOT}${path.sep}`)) {
    throw new Error(`拒絕操作專案外路徑：${resolved}`);
  }
  return resolved;
}

function copyEntry(relativePath) {
  const source = assertInsideRoot(path.join(ROOT, relativePath));
  const destination = assertInsideRoot(path.join(CLIENT, relativePath));
  if (!fs.existsSync(source)) {
    throw new Error(`缺少 Sites 靜態來源：${relativePath}`);
  }
  fs.cpSync(source, destination, { recursive: true });
}

function buildStaticSite() {
  assertInsideRoot(DIST);
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(CLIENT, { recursive: true });

  for (const entry of STATIC_ENTRIES) {
    copyEntry(entry);
  }

  const serverDirectory = path.join(DIST, 'server');
  const metadataDirectory = path.join(DIST, '.openai');
  fs.mkdirSync(serverDirectory, { recursive: true });
  fs.mkdirSync(metadataDirectory, { recursive: true });
  fs.copyFileSync(
    path.join(ROOT, 'worker', 'index.mjs'),
    path.join(serverDirectory, 'index.js'),
  );
  fs.copyFileSync(
    path.join(ROOT, '.openai', 'hosting.json'),
    path.join(metadataDirectory, 'hosting.json'),
  );

  return {
    outputDirectory: DIST,
    staticEntries: [...STATIC_ENTRIES],
  };
}

if (require.main === module) {
  const result = buildStaticSite();
  process.stdout.write(`Sites 靜態建置完成：${result.outputDirectory}\n`);
}

module.exports = {
  buildStaticSite,
};
