'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const Motion = require('../../games/cat-word-solitaire/js/motion.js');

test('落點動效只映射 Core 回傳的合法性', () => {
  assert.equal(Motion.getDropState(true), 'valid');
  assert.equal(Motion.getDropState(false), 'invalid');
});

test('五張發牌依欄位錯開並從牌庫中心飛向目標', () => {
  const deck = { left: 280, top: 20, width: 60, height: 84 };
  const card = { left: 20, top: 180, width: 52, height: 96 };
  const first = Motion.createDealMotion(deck, card, 0);
  const fifth = Motion.createDealMotion(deck, card, 4);

  assert.match(first.keyframes[0].transform, /translate3d\(264px, -166px, 0\)/);
  assert.equal(first.options.delay, 0);
  assert.equal(fifth.options.delay, 280);
  assert.equal(first.keyframes.at(-1).transform, 'translate3d(0, 0, 0) rotate(0deg) scale(1)');
});

test('拖曳轉換限制旋轉幅度並保留精確位移', () => {
  assert.equal(
    Motion.createDragTransform(
      { x: 100, y: 80 },
      { x: 124, y: 115 },
    ),
    'translate3d(24px, 35px, 0) rotate(2.4deg) scale(1.045)',
  );
  assert.match(
    Motion.createDragTransform(
      { x: 0, y: 0 },
      { x: -200, y: 20 },
    ),
    /rotate\(-6deg\)/,
  );
});

test('吸附位移以浮牌與分類槽中心對齊', () => {
  assert.deepEqual(
    Motion.calculateSnapDelta(
      { left: 40, top: 160, width: 60, height: 90 },
      { left: 150, top: 20, width: 80, height: 100 },
    ),
    { x: 120, y: -135 },
  );
});
