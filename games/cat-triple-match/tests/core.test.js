'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const core = require('../js/core.js');

function levelFixture() {
  return {
    id: 'L001',
    chapter: 1,
    title: '第一次配對',
    layout: { unitColumns: 6, unitRows: 6, maxLayer: 2 },
    symbols: [
      { id: 'fishbone', label: '魚骨頭' },
      { id: 'milk', label: '鮮奶瓶' },
      { id: 'yarn', label: '毛線球' },
    ],
    tiles: [
      { id: 'a1', symbol: 'fishbone', layer: 0, x: 0, y: 0 },
      { id: 'a2', symbol: 'fishbone', layer: 0, x: 2, y: 0 },
      { id: 'a3', symbol: 'fishbone', layer: 1, x: 1, y: 1 },
      { id: 'b1', symbol: 'milk', layer: 0, x: 4, y: 0 },
      { id: 'b2', symbol: 'milk', layer: 1, x: 3, y: 1 },
      { id: 'b3', symbol: 'milk', layer: 2, x: 2, y: 2 },
    ],
    knownSolution: ['b3', 'a3', 'b2', 'a1', 'a2', 'b1'],
  };
}

test('矩形只有正面積交集才算重疊', () => {
  assert.equal(core.rectanglesOverlap({ x: 0, y: 0 }, { x: 2, y: 0 }), false);
  assert.equal(core.rectanglesOverlap({ x: 0, y: 0 }, { x: 1, y: 1 }), true);
  assert.equal(core.rectanglesOverlap({ x: 0, y: 0 }, { x: 0, y: 0 }), true);
});

test('高層 blocker 移除後底層卡牌才可選', () => {
  const level = levelFixture();
  const initial = core.createInitialState(level);
  assert.equal(core.isTileExposed(initial, level, 'a1'), false);
  assert.equal(core.isTileExposed(initial, level, 'b3'), true);
  const selected = core.selectTile(initial, level, 'b3').state;
  assert.equal(core.isTileExposed(selected, level, 'b2'), true);
});

test('同圖案自動靠攏且第三張同步消除', () => {
  const level = levelFixture();
  let state = core.createInitialState(level);
  state.remainingTileIds = [];
  state.trayTileIds = ['a1', 'b1'];
  state.clearedTileIds = ['a2', 'a3'];
  state.symbolByTileId = Object.fromEntries(level.tiles.map((tile) => [tile.id, tile.symbol]));
  assert.deepEqual(core.insertTileIntoTray(state.trayTileIds, 'a2', state.symbolByTileId), ['a1', 'a2', 'b1']);
  state.trayTileIds = ['a1', 'a2', 'b1'];
  const resolved = core.resolveMatches({ ...state, trayTileIds: [...state.trayTileIds, 'a3'] }, level);
  assert.deepEqual(resolved.state.trayTileIds, ['b1']);
  assert.deepEqual(resolved.effects[0].tileIds, ['a1', 'a2', 'a3']);
});

test('第九張形成配對時先消除，不會誤判失敗', () => {
  const level = levelFixture();
  const state = core.createInitialState(level);
  state.remainingTileIds = ['b3'];
  state.trayTileIds = ['b1', 'b2', 'a1', 'a2', 'extra-1', 'extra-2', 'extra-3', 'extra-4'];
  state.symbolByTileId = {
    ...state.symbolByTileId,
    'b1': 'milk', 'b2': 'milk', 'b3': 'milk',
    'a1': 'fishbone', 'a2': 'yarn',
    'extra-1': 'a', 'extra-2': 'b', 'extra-3': 'c', 'extra-4': 'd',
  };
  const result = core.selectTile(state, level, 'b3');
  assert.notEqual(result.state.status, 'failed');
  assert.equal(result.state.trayTileIds.length, 6);
});
