'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../../games/cat-color-connect/js/core.js');
const {
  createPrng,
  generateCandidate,
  serializeLevelFile,
} = require('../../scripts/cat-color-connect/generator.js');

test('seeded PRNG 與候選產生可重現', () => {
  const first = generateCandidate({
    size: 4,
    pairCount: 3,
    seed: 44001,
    longPathMinimum: 4,
  });
  const second = generateCandidate({
    size: 4,
    pairCount: 3,
    seed: 44001,
    longPathMinimum: 4,
  });
  assert.deepEqual(first, second);
  assert.equal(createPrng(7)(), createPrng(7)());
});

test('候選固定解答完整覆蓋且 signature 穩定', () => {
  const candidate = generateCandidate({
    size: 4,
    pairCount: 3,
    seed: 44002,
    longPathMinimum: 4,
  });
  assert.deepEqual(Core.validateStoredSolution(candidate), []);
  assert.equal(
    typeof Core.canonicalizeEndpointSignature(candidate),
    'string',
  );
  assert.equal(
    typeof Core.canonicalizeSolutionSignature(candidate),
    'string',
  );
});

test('關卡檔序列化同時支援瀏覽器全域與 CommonJS', () => {
  const output = serializeLevelFile('6x8', []);
  assert.match(output, /CAT_CONNECT_LEVELS_6X8/);
  assert.match(output, /module\.exports/);
});

test('候選產生器支援長方形棋盤', () => {
  const candidate = generateCandidate({
    rows: 3,
    columns: 4,
    pairCount: 3,
    seed: 34001,
    longPathMinimum: 4,
  });
  assert.equal(candidate.rows, 3);
  assert.equal(candidate.columns, 4);
  assert.equal(candidate.size, undefined);
  assert.deepEqual(Core.validateStoredSolution(candidate), []);
});
