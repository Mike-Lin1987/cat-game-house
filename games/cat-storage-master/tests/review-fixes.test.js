'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const levels = require('../js/data/levels-index.js');
const renderer = require('../js/renderer.js');
const generator = require('../scripts/generate-levels.js');

test('Renderer 的 CommonJS renderLevelSelect 不依賴 window', () => {
  const markup = renderer.renderLevelSelect({ records: {}, unlockedLevel: 1 }, 1, 0, levels);
  assert.match(markup, /4×4/);
  assert.match(markup, /data-level-id="L001"/);
});

test('staging 驗證失敗時不得覆寫已發布資料', () => {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'cat-storage-publish-'));
  const dataDirectory = path.join(temporaryRoot, 'data');
  const stagingDirectory = path.join(temporaryRoot, 'staging');
  const backupDirectory = path.join(temporaryRoot, 'backup');
  fs.mkdirSync(dataDirectory, { recursive: true });
  const sentinelPath = path.join(dataDirectory, 'sentinel.txt');
  fs.writeFileSync(sentinelPath, 'published-data');
  const corrupted = levels.map((level) => JSON.parse(JSON.stringify(level)));
  delete corrupted[0].solution;

  try {
    assert.throws(
      () => generator.publish(corrupted, { dataDirectory, stagingDirectory, backupDirectory }),
      /staging 驗證失敗/,
    );
    assert.equal(fs.readFileSync(sentinelPath, 'utf8'), 'published-data');
    assert.deepEqual(fs.readdirSync(dataDirectory), ['sentinel.txt']);
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }
});
