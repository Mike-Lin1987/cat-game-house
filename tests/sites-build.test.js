'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '..');
const { CAT_GAME_CATALOG } = require('../js/game-catalog.js');
const { buildStaticSite } = require('../scripts/build-site.js');

test('Sites build 產生 client、server 與 hosting contract', () => {
  const result = buildStaticSite();

  assert.equal(result.outputDirectory, path.join(ROOT, 'dist'));
  for (const relativePath of [
    'dist/client/index.html',
    'dist/server/index.js',
    'dist/.openai/hosting.json',
  ]) {
    assert.equal(fs.existsSync(path.join(ROOT, relativePath)), true, relativePath);
  }
});

test('Sites client 包含 catalog 宣告的全部遊戲資源', () => {
  for (const game of CAT_GAME_CATALOG) {
    for (const asset of [game.href, game.cover, ...game.offlineAssets]) {
      const relativePath = asset.replace(/^\.\//, '');
      assert.equal(
        fs.existsSync(path.join(ROOT, 'dist', 'client', relativePath)),
        true,
        `${game.id} build 缺少 ${relativePath}`,
      );
    }
  }
});

test('Sites worker 保留靜態資源並只對 HTML GET 提供入口 fallback', async () => {
  const worker = (await import('../worker/index.mjs')).default;
  const existing = await worker.fetch(
    new Request('https://example.test/assets/icons/icon.svg'),
    {
      ASSETS: {
        fetch: async () => new Response('asset', { status: 200 }),
      },
    },
  );
  assert.equal(existing.status, 200);

  const calls = [];
  const fallback = await worker.fetch(
    new Request('https://example.test/unknown', {
      headers: { accept: 'text/html' },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const pathname = new URL(request.url).pathname;
          calls.push(pathname);
          return new Response(pathname === '/index.html' ? 'portal' : 'missing', {
            status: pathname === '/index.html' ? 200 : 404,
          });
        },
      },
    },
  );
  assert.equal(fallback.status, 200);
  assert.deepEqual(calls, ['/unknown', '/index.html']);
});
