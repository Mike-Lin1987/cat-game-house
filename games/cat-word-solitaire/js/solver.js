(function initCatWordSolver(root, factory) {
  'use strict';

  const core =
    root?.CatWordCore ||
    (typeof module === 'object' && module.exports ? require('./core.js') : null);
  const api = factory(core);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatWordSolver = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createSolver(Core) {
  'use strict';

  if (!Core) {
    throw new Error('CatWordSolver 需要 CatWordCore');
  }

  function normalizeState(state, level) {
    const collected = level.categories
      .map((category) => [
        category.id,
        [...(state.collectedByCategory[category.id] || [])].sort(),
      ])
      .filter(([, cardIds]) => cardIds.length > 0);
    return JSON.stringify({
      columns: state.columns,
      spare: state.spareCells.filter(Boolean).sort(),
      active: state.categorySlots.filter(Boolean).sort(),
      collected,
      completed: [...state.completedCategoryIds].sort(),
      drawBatchIndex: state.drawBatchIndex,
    });
  }

  function remainingMinimumMoves(state, level) {
    const tableauCards = state.columns.reduce(
      (total, column) => total + column.length,
      0,
    );
    const spareCards = state.spareCells.filter(Boolean).length;
    const deckCards = level.layout.drawBatches
      .slice(state.drawBatchIndex)
      .reduce((total, batch) => total + batch.length, 0);
    const remainingDeals =
      level.layout.drawBatches.length - state.drawBatchIndex;
    return tableauCards + spareCards + deckCards + remainingDeals;
  }

  function canonicalLegalMoves(state, level, includeRelocations = true) {
    const moves = Core.getLegalMoves(state, level);
    const firstEmptySlot = state.categorySlots.indexOf(null);
    const firstEmptySpare = state.spareCells.indexOf(null);
    return moves.filter(
      (move) =>
        (includeRelocations ||
          (move.type !== 'moveToSpare' && move.type !== 'moveToColumn')) &&
        (move.type !== 'activateCategory' ||
          move.slotIndex === firstEmptySlot) &&
        (move.type !== 'moveToSpare' ||
          move.spareIndex === firstEmptySpare),
    );
  }

  function solveFromState(initialState, level, options = {}) {
    const startedAt = Date.now();
    const initial = Core.cloneState(initialState);
    const maxNodes = Number.isInteger(options.maxNodes)
      ? Math.max(1, options.maxNodes)
      : 250000;
    const initialMaxActiveCategories =
      initial.categorySlots.filter(Boolean).length;

    if (
      initial.movesUsed + remainingMinimumMoves(initial, level) >
      level.moveLimit
    ) {
      return {
        solved: false,
        reason: 'move-limit',
        actions: [],
        movesUsed: initial.movesUsed,
        finalState: initial,
        nodesVisited: 0,
        backtracks: 0,
        maxDepth: 0,
        maxActiveCategories: initialMaxActiveCategories,
        branchingStates: 0,
        dealDecisionStates: 0,
        forcedMoves: 0,
        durationMs: Date.now() - startedAt,
      };
    }

    function runSearch(includeRelocations) {
      const memo = new Map();
      let nodesVisited = 0;
      let backtracks = 0;
      let maxDepth = 0;
      let maxActiveCategories = initialMaxActiveCategories;
      let branchingStates = 0;
      let dealDecisionStates = 0;
      let forcedMoves = 0;
      let limitReached = false;
      let nodeLimitReached = false;

      function visit(state, actions) {
        nodesVisited += 1;
        maxDepth = Math.max(maxDepth, actions.length);
        maxActiveCategories = Math.max(
          maxActiveCategories,
          state.categorySlots.filter(Boolean).length,
        );
        if (nodesVisited > maxNodes) {
          nodeLimitReached = true;
          return null;
        }
        if (Core.isLevelComplete(state, level)) {
          return { state, actions };
        }
        if (state.movesUsed >= level.moveLimit || state.failed) {
          limitReached = true;
          return null;
        }
        if (
          state.movesUsed + remainingMinimumMoves(state, level) >
          level.moveLimit
        ) {
          limitReached = true;
          return null;
        }

        const key = normalizeState(state, level);
        const previousMoves = memo.get(key);
        if (previousMoves !== undefined && previousMoves <= state.movesUsed) {
          backtracks += 1;
          return null;
        }
        memo.set(key, state.movesUsed);

        const moves = canonicalLegalMoves(
          state,
          level,
          includeRelocations,
        );
        if (moves.length === 1) {
          forcedMoves += 1;
        } else if (moves.length > 1) {
          branchingStates += 1;
        }
        if (
          moves.some((move) => move.type === 'deal') &&
          moves.some((move) => move.type !== 'deal')
        ) {
          dealDecisionStates += 1;
        }
        for (const move of moves) {
          const result = Core.applyLegalAction(state, level, move);
          if (
            result.state === state ||
            result.outcome === Core.OUTCOME.INVALID_ACTION
          ) {
            continue;
          }
          const solved = visit(result.state, [...actions, move]);
          if (solved) {
            return solved;
          }
          if (nodeLimitReached) {
            return null;
          }
        }
        backtracks += 1;
        return null;
      }

      const solved = visit(initial, []);
      return {
        solved: Boolean(solved),
        reason: solved
          ? null
          : nodeLimitReached
            ? 'node-limit'
            : limitReached
              ? 'move-limit'
              : 'unsolvable',
        actions: solved?.actions || [],
        movesUsed: solved?.state.movesUsed ?? initial.movesUsed,
        finalState: solved?.state || initial,
        nodesVisited,
        backtracks,
        maxDepth,
        maxActiveCategories,
        branchingStates,
        dealDecisionStates,
        forcedMoves,
      };
    }

    // 先沿用原本的策略動作搜尋，讓既有 100 關的難度統計保持穩定。
    // 玩家真的利用備用格或空牌堆造成新局面時，才啟用搬牌分支。
    const strategicResult = runSearch(false);
    const result = strategicResult.solved
      ? strategicResult
      : runSearch(true);
    return {
      ...result,
      durationMs: Date.now() - startedAt,
    };
  }

  function solveLevel(level, options) {
    return solveFromState(Core.createInitialState(level), level, options);
  }

  function getHint(state, level, options) {
    const solution = solveFromState(state, level, options);
    if (!solution.solved || solution.actions.length === 0) {
      return Core.getHint(state, level);
    }
    const action = solution.actions[0];
    const card = action.cardId ? Core.getCardById(level, action.cardId) : null;
    const category = action.categoryId
      ? Core.getCategoryById(level, action.categoryId)
      : null;
    let message = '目前可以從牌庫發牌';
    const sourceLabel = Number.isInteger(action.spareIndex)
      ? `第 ${action.spareIndex + 1} 個備用格`
      : Number.isInteger(action.columnIndex)
        ? `第 ${action.columnIndex + 1} 個牌堆`
        : '目前位置';
    if (action.type === 'activateCategory') {
      message = `可以將${sourceLabel}的「${category.label}」放入第 ${action.slotIndex + 1} 個分類槽`;
    } else if (action.type === 'placeItem') {
      message = `${sourceLabel}的「${card.label}」可以放進「${category.label}」`;
    } else if (action.type === 'moveToSpare') {
      message = `可以先將「${card.label || category?.label || '這張牌'}」放到第 ${action.spareIndex + 1} 個備用格`;
    } else if (action.type === 'moveToColumn') {
      message = `可以將「${card.label || category?.label || '這張牌'}」移到第 ${action.columnIndex + 1} 個空牌堆`;
    }
    return { action, message, solution };
  }

  function permutations(values) {
    if (values.length <= 1) {
      return [values];
    }
    const result = [];
    for (let index = 0; index < values.length; index += 1) {
      const head = values[index];
      const tail = [...values.slice(0, index), ...values.slice(index + 1)];
      for (const rest of permutations(tail)) {
        result.push([head, ...rest]);
      }
    }
    return result;
  }

  const COLUMN_PERMUTATIONS = permutations([0, 1, 2, 3, 4]);

  function serializeLayoutWithPermutation(level, permutation) {
    const cards = new Map(level.cards.map((card) => [card.id, card]));
    const categories = new Map(
      level.categories.map((category) => [category.id, category]),
    );
    const canonicalCategoryIds = new Map();

    function token(cardId) {
      if (cardId === null || cardId === undefined) {
        return '_';
      }
      const card = cards.get(cardId);
      if (!card) {
        return '?';
      }
      if (!canonicalCategoryIds.has(card.categoryId)) {
        canonicalCategoryIds.set(
          card.categoryId,
          canonicalCategoryIds.size.toString(36),
        );
      }
      const categoryToken = canonicalCategoryIds.get(card.categoryId);
      const required = categories.get(card.categoryId)?.required || 0;
      return `${card.cardType === 'category' ? 'C' : 'I'}${categoryToken}.${required}`;
    }

    const columnPart = permutation
      .map((oldIndex) =>
        level.layout.initialColumns[oldIndex].map(token).join(','),
      )
      .join('|');
    const drawPart = level.layout.drawBatches
      .map((batch) =>
        permutation.map((oldIndex) => token(batch[oldIndex] ?? null)).join(','),
      )
      .join('|');
    return `${level.categories.length}#${columnPart}#${drawPart}`;
  }

  function createLayoutSignature(level) {
    let smallest = null;
    for (const permutation of COLUMN_PERMUTATIONS) {
      const candidate = serializeLayoutWithPermutation(level, permutation);
      if (smallest === null || candidate < smallest) {
        smallest = candidate;
      }
    }
    return smallest;
  }

  return Object.freeze({
    solveLevel,
    solveFromState,
    getHint,
    normalizeState,
    createLayoutSignature,
    remainingMinimumMoves,
  });
});
