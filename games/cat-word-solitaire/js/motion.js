(function initCatWordMotion(root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatWordMotion = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createMotion() {
  'use strict';

  const DROP_STATE = Object.freeze({
    VALID: 'valid',
    INVALID: 'invalid',
  });

  function getDropState(card, slotCategoryId) {
    if (!card || (card.cardType !== 'category' && card.cardType !== 'item')) {
      return DROP_STATE.INVALID;
    }
    if (card.cardType === 'category') {
      return slotCategoryId ? DROP_STATE.INVALID : DROP_STATE.VALID;
    }
    return slotCategoryId === card.categoryId
      ? DROP_STATE.VALID
      : DROP_STATE.INVALID;
  }

  function center(rect) {
    return {
      x: Number(rect.left) + Number(rect.width) / 2,
      y: Number(rect.top) + Number(rect.height) / 2,
    };
  }

  function createDealMotion(deckRect, cardRect, columnIndex) {
    const source = center(deckRect);
    const target = center(cardRect);
    const index = Math.max(0, Number(columnIndex) || 0);
    const x = Math.round(source.x - target.x);
    const y = Math.round(source.y - target.y);
    const rotation = -8 + index * 3.5;

    return {
      keyframes: [
        {
          transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(0.82)`,
          opacity: 0.25,
          offset: 0,
        },
        {
          transform: 'translate3d(0, -4px, 0) rotate(1deg) scale(1.035)',
          opacity: 1,
          offset: 0.78,
        },
        {
          transform: 'translate3d(0, 0, 0) rotate(0deg) scale(1)',
          opacity: 1,
          offset: 1,
        },
      ],
      options: {
        duration: 360,
        delay: index * 70,
        easing: 'cubic-bezier(0.22, 0.78, 0.18, 1)',
        fill: 'both',
      },
    };
  }

  function createDragTransform(startPoint, currentPoint) {
    const x = Math.round(Number(currentPoint.x) - Number(startPoint.x));
    const y = Math.round(Number(currentPoint.y) - Number(startPoint.y));
    const rotation = Math.max(-6, Math.min(6, x / 10));
    return `translate3d(${x}px, ${y}px, 0) rotate(${Number(rotation.toFixed(1))}deg) scale(1.045)`;
  }

  function calculateSnapDelta(currentRect, targetRect) {
    const current = center(currentRect);
    const target = center(targetRect);
    return {
      x: Math.round(target.x - current.x),
      y: Math.round(target.y - current.y),
    };
  }

  return Object.freeze({
    DROP_STATE,
    getDropState,
    createDealMotion,
    createDragTransform,
    calculateSnapDelta,
  });
});
