'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const {
  encodeVint,
  patchWebmDuration,
  readWebmDuration,
  readVint,
} = require('../scripts/tutorial-videos/fix-webm-duration.js');

const ROOT = path.resolve(__dirname, '..');

test('EBML VINT 編解碼保持數值與長度', () => {
  for (const [value, length] of [[8, 1], [36, 1], [500, 2], [65_000, 3]]) {
    const encoded = encodeVint(value, length);
    assert.deepEqual(readVint(encoded, 0), { value, length });
  }
});

test('WebM duration 修正器新增 8-byte Duration 並可重複執行', () => {
  const fixture = Buffer.from([
    0x15, 0x49, 0xa9, 0x66,
    0x87,
    0x2a, 0xd7, 0xb1, 0x83, 0x0f, 0x42, 0x40,
    0x1f, 0x43, 0xb6, 0x75, 0x80,
  ]);
  const patched = patchWebmDuration(fixture, 24_500);

  assert.equal(patched.indexOf(Buffer.from([0x44, 0x89, 0x88])) > 0, true);
  assert.equal(patched.length, fixture.length + 11);
  assert.deepEqual(patchWebmDuration(patched, 24_500), patched);
});

test('三支發布用 WebM 都有 24.5 秒 duration metadata', () => {
  for (const relativePath of [
    'games/cat-grid/tutorial.webm',
    'games/cat-color-connect/tutorial.webm',
    'games/cat-word-solitaire/tutorial.webm',
  ]) {
    const buffer = fs.readFileSync(path.join(ROOT, relativePath));
    assert.equal(readWebmDuration(buffer), 24_500, relativePath);
  }
});
