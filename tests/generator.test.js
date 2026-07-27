'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { generatePack } = require('../scripts/generate-levels.js');

test('增加 levelCount 時既有關卡 ID 仍指向相同內容', () => {
  const basePack = {
    id: 'expansion-check',
    size: 4,
    levelCount: 2,
    title: '擴充檢查',
    seedBase: 440000,
    theme: 'apricot',
    motif: 'fish',
  };
  const original = generatePack(basePack);
  const expanded = generatePack({ ...basePack, levelCount: 3 });

  for (const originalLevel of original) {
    const expandedLevel = expanded.find(
      (level) => level.id === originalLevel.id,
    );
    assert.ok(expandedLevel, `${originalLevel.id} 應保留`);
    assert.equal(expandedLevel.seed, originalLevel.seed);
    assert.deepEqual(expandedLevel.regions, originalLevel.regions);
    assert.deepEqual(expandedLevel.solution, originalLevel.solution);
  }
});
