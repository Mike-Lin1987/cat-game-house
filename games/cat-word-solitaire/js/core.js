(function initCatWordCore(root, factory) {
  'use strict';

  const config =
    root?.CAT_WORD_CONFIG ||
    (typeof module === 'object' && module.exports
      ? require('./config.js').CAT_WORD_CONFIG
      : null);
  const api = factory(config);
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatWordCore = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createCore(config) {
  'use strict';

  const COLUMN_COUNT = config?.tableauColumnCount || 5;
  const SLOT_COUNT = config?.categorySlotCount || 5;
  const SPARE_COUNT = config?.spareCellCount || 2;

  const OUTCOME = Object.freeze({
    CATEGORY_ACTIVATED: 'category-activated',
    ITEM_PLACED: 'item-placed',
    CATEGORY_COMPLETED: 'category-completed',
    CARD_STORED: 'card-stored',
    CARD_MOVED_TO_COLUMN: 'card-moved-to-column',
    DEALT: 'dealt',
    UNDONE: 'undone',
    LEVEL_COMPLETED: 'level-completed',
    STEP_LIMIT_REACHED: 'step-limit-reached',
    SLOT_OCCUPIED: 'slot-occupied',
    SPARE_OCCUPIED: 'spare-occupied',
    COLUMN_NOT_EMPTY: 'column-not-empty',
    NO_EMPTY_SLOT: 'no-empty-slot',
    CARD_NOT_PLAYABLE: 'card-not-playable',
    CARD_TYPE_INVALID: 'card-type-invalid',
    CATEGORY_ALREADY_ACTIVE: 'category-already-active',
    CATEGORY_ALREADY_COMPLETED: 'category-already-completed',
    CATEGORY_NOT_ACTIVE: 'category-not-active',
    WRONG_CATEGORY: 'wrong-category',
    DECK_EMPTY: 'deck-empty',
    NOTHING_TO_UNDO: 'nothing-to-undo',
    INVALID_ACTION: 'invalid-action',
  });

  function cloneValue(value) {
    if (Array.isArray(value)) {
      return value.map(cloneValue);
    }
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, cloneValue(item)]),
      );
    }
    return value;
  }

  function cloneState(state) {
    return cloneValue(state);
  }

  function createInitialState(level) {
    const state = {
      levelId: level.id,
      columns: level.layout.initialColumns.map((column) => [...column]),
      categorySlots: Array(SLOT_COUNT).fill(null),
      spareCells: Array(SPARE_COUNT).fill(null),
      collectedByCategory: Object.fromEntries(
        level.categories.map((category) => [category.id, []]),
      ),
      completedCategoryIds: [],
      drawBatchIndex: 0,
      movesUsed: 0,
      elapsedSeconds: 0,
      hintsUsed: 0,
      invalidAttempts: 0,
      selectedCardId: null,
      completed: false,
      failed: false,
    };
    if (state.columns.length !== COLUMN_COUNT) {
      throw new TypeError(`關卡 ${level.id} 必須有 ${COLUMN_COUNT} 個牌堆`);
    }
    return state;
  }

  function getCardById(level, cardId) {
    return level.cards.find((card) => card.id === cardId) || null;
  }

  function getCategoryById(level, categoryId) {
    return (
      level.categories.find((category) => category.id === categoryId) || null
    );
  }

  function getPlayableCard(state, columnIndex) {
    const column = state.columns[columnIndex];
    return Array.isArray(column) && column.length > 0
      ? column[column.length - 1]
      : null;
  }

  function findCardSourceColumn(state, cardId) {
    for (let columnIndex = 0; columnIndex < state.columns.length; columnIndex += 1) {
      if (getPlayableCard(state, columnIndex) === cardId) {
        return columnIndex;
      }
    }
    return -1;
  }

  function findPlayableCardSource(state, cardId) {
    const columnIndex = findCardSourceColumn(state, cardId);
    if (columnIndex >= 0) {
      return { type: 'column', index: columnIndex };
    }
    const spareIndex = state.spareCells.indexOf(cardId);
    return spareIndex >= 0 ? { type: 'spare', index: spareIndex } : null;
  }

  function removeCardFromSource(state, source) {
    if (source.type === 'column') {
      state.columns[source.index].pop();
    } else {
      state.spareCells[source.index] = null;
    }
  }

  function categorySlotIndex(state, categoryId) {
    return state.categorySlots.indexOf(categoryId);
  }

  function canMoveToSpare(state, level, cardId, spareIndex) {
    return Boolean(
      getCardById(level, cardId) &&
        findCardSourceColumn(state, cardId) >= 0 &&
        Number.isInteger(spareIndex) &&
        spareIndex >= 0 &&
        spareIndex < SPARE_COUNT &&
        state.spareCells[spareIndex] === null,
    );
  }

  function moveToSpare(state, level, cardId, spareIndex) {
    const columnIndex = findCardSourceColumn(state, cardId);
    if (columnIndex < 0) {
      return makeResult(state, OUTCOME.CARD_NOT_PLAYABLE);
    }
    if (
      !Number.isInteger(spareIndex) ||
      spareIndex < 0 ||
      spareIndex >= SPARE_COUNT ||
      state.spareCells[spareIndex] !== null
    ) {
      return makeResult(state, OUTCOME.SPARE_OCCUPIED);
    }
    const next = cloneState(state);
    next.columns[columnIndex].pop();
    next.spareCells[spareIndex] = cardId;
    next.movesUsed += 1;
    next.selectedCardId = null;
    const outcome = finalizeState(next, level, OUTCOME.CARD_STORED);
    return makeResult(next, outcome, [
      {
        type: 'card-stored',
        cardId,
        columnIndex,
        spareIndex,
      },
    ]);
  }

  function canMoveToColumn(state, level, cardId, columnIndex) {
    const source = findPlayableCardSource(state, cardId);
    return Boolean(
      getCardById(level, cardId) &&
        source &&
        Number.isInteger(columnIndex) &&
        columnIndex >= 0 &&
        columnIndex < COLUMN_COUNT &&
        state.columns[columnIndex].length === 0 &&
        !(source.type === 'column' && source.index === columnIndex),
    );
  }

  function moveToColumn(state, level, cardId, columnIndex) {
    const source = findPlayableCardSource(state, cardId);
    if (!source) {
      return makeResult(state, OUTCOME.CARD_NOT_PLAYABLE);
    }
    if (
      !Number.isInteger(columnIndex) ||
      columnIndex < 0 ||
      columnIndex >= COLUMN_COUNT ||
      state.columns[columnIndex].length !== 0 ||
      (source.type === 'column' && source.index === columnIndex)
    ) {
      return makeResult(state, OUTCOME.COLUMN_NOT_EMPTY);
    }
    const next = cloneState(state);
    removeCardFromSource(next, source);
    next.columns[columnIndex].push(cardId);
    next.movesUsed += 1;
    next.selectedCardId = null;
    const outcome = finalizeState(next, level, OUTCOME.CARD_MOVED_TO_COLUMN);
    return makeResult(next, outcome, [
      {
        type: 'card-moved-to-column',
        cardId,
        sourceType: source.type,
        sourceColumnIndex: source.type === 'column' ? source.index : undefined,
        sourceSpareIndex: source.type === 'spare' ? source.index : undefined,
        columnIndex,
      },
    ]);
  }

  function canActivateCategory(state, level, cardId, slotIndex) {
    const card = getCardById(level, cardId);
    if (!card || card.cardType !== 'category') {
      return false;
    }
    const source = findPlayableCardSource(state, cardId);
    if (!source) {
      return false;
    }
    if (
      !Number.isInteger(slotIndex) ||
      slotIndex < 0 ||
      slotIndex >= SLOT_COUNT ||
      state.categorySlots[slotIndex] !== null
    ) {
      return false;
    }
    return (
      !state.categorySlots.includes(card.categoryId) &&
      !state.completedCategoryIds.includes(card.categoryId)
    );
  }

  function makeResult(state, outcome, events = []) {
    return Object.freeze({ state, outcome, events: Object.freeze(events) });
  }

  function finalizeState(state, level, fallbackOutcome) {
    state.completed = isLevelComplete(state, level);
    if (state.completed) {
      state.failed = false;
      return OUTCOME.LEVEL_COMPLETED;
    }
    state.failed =
      Number.isFinite(level.moveLimit) && state.movesUsed >= level.moveLimit;
    return state.failed ? OUTCOME.STEP_LIMIT_REACHED : fallbackOutcome;
  }

  function activateCategory(state, level, cardId, slotIndex) {
    const card = getCardById(level, cardId);
    if (!card || card.cardType !== 'category') {
      return makeResult(state, OUTCOME.CARD_TYPE_INVALID);
    }
    const source = findPlayableCardSource(state, cardId);
    if (!source) {
      return makeResult(state, OUTCOME.CARD_NOT_PLAYABLE);
    }
    if (state.completedCategoryIds.includes(card.categoryId)) {
      return makeResult(state, OUTCOME.CATEGORY_ALREADY_COMPLETED);
    }
    if (state.categorySlots.includes(card.categoryId)) {
      return makeResult(state, OUTCOME.CATEGORY_ALREADY_ACTIVE);
    }
    if (state.categorySlots.every((slot) => slot !== null)) {
      return makeResult(state, OUTCOME.NO_EMPTY_SLOT);
    }
    if (
      !Number.isInteger(slotIndex) ||
      slotIndex < 0 ||
      slotIndex >= SLOT_COUNT ||
      state.categorySlots[slotIndex] !== null
    ) {
      return makeResult(state, OUTCOME.SLOT_OCCUPIED);
    }

    const next = cloneState(state);
    removeCardFromSource(next, source);
    next.categorySlots[slotIndex] = card.categoryId;
    next.movesUsed += 1;
    next.selectedCardId = null;
    const outcome = finalizeState(next, level, OUTCOME.CATEGORY_ACTIVATED);
    return makeResult(next, outcome, [
      {
        type: 'category-activated',
        cardId,
        categoryId: card.categoryId,
        slotIndex,
        sourceType: source.type,
        columnIndex: source.type === 'column' ? source.index : undefined,
        spareIndex: source.type === 'spare' ? source.index : undefined,
      },
    ]);
  }

  function canPlaceItem(state, level, cardId, categoryId) {
    const card = getCardById(level, cardId);
    return Boolean(
      card &&
        card.cardType === 'item' &&
        findPlayableCardSource(state, cardId) &&
        card.categoryId === categoryId &&
        categorySlotIndex(state, categoryId) >= 0,
    );
  }

  function calculateCategoryProgress(state, level, categoryId) {
    const category = getCategoryById(level, categoryId);
    const collected = state.collectedByCategory[categoryId] || [];
    return {
      collected: collected.length,
      required: category?.required || 0,
      complete: Boolean(category && collected.length >= category.required),
    };
  }

  function completeFilledCategoriesInPlace(state, level) {
    const completed = [];
    for (let slotIndex = 0; slotIndex < state.categorySlots.length; slotIndex += 1) {
      const categoryId = state.categorySlots[slotIndex];
      if (!categoryId) {
        continue;
      }
      const progress = calculateCategoryProgress(state, level, categoryId);
      if (!progress.complete) {
        continue;
      }
      state.categorySlots[slotIndex] = null;
      state.completedCategoryIds.push(categoryId);
      state.collectedByCategory[categoryId] = [];
      completed.push({ categoryId, slotIndex });
    }
    return completed;
  }

  function completeFilledCategories(state, level) {
    const next = cloneState(state);
    const completed = completeFilledCategoriesInPlace(next, level);
    return makeResult(
      next,
      completed.length > 0 ? OUTCOME.CATEGORY_COMPLETED : OUTCOME.ITEM_PLACED,
      completed.map((entry) => ({ type: 'category-completed', ...entry })),
    );
  }

  function placeItem(state, level, cardId, categoryId) {
    const card = getCardById(level, cardId);
    if (!card || card.cardType !== 'item') {
      return makeResult(state, OUTCOME.CARD_TYPE_INVALID);
    }
    const source = findPlayableCardSource(state, cardId);
    if (!source) {
      return makeResult(state, OUTCOME.CARD_NOT_PLAYABLE);
    }

    if (categorySlotIndex(state, categoryId) < 0) {
      const next = cloneState(state);
      next.movesUsed += 1;
      next.invalidAttempts += 1;
      next.selectedCardId = null;
      const outcome = finalizeState(next, level, OUTCOME.CATEGORY_NOT_ACTIVE);
      return makeResult(next, outcome, [
        { type: 'invalid-drop', reason: OUTCOME.CATEGORY_NOT_ACTIVE, cardId },
      ]);
    }

    if (card.categoryId !== categoryId) {
      const next = cloneState(state);
      next.movesUsed += 1;
      next.invalidAttempts += 1;
      next.selectedCardId = null;
      const outcome = finalizeState(next, level, OUTCOME.WRONG_CATEGORY);
      return makeResult(next, outcome, [
        {
          type: 'invalid-drop',
          reason: OUTCOME.WRONG_CATEGORY,
          cardId,
          categoryId,
        },
      ]);
    }

    const next = cloneState(state);
    removeCardFromSource(next, source);
    next.collectedByCategory[categoryId].push(cardId);
    next.movesUsed += 1;
    next.selectedCardId = null;
    const completed = completeFilledCategoriesInPlace(next, level);
    const fallbackOutcome =
      completed.length > 0 ? OUTCOME.CATEGORY_COMPLETED : OUTCOME.ITEM_PLACED;
    const outcome = finalizeState(next, level, fallbackOutcome);
    const events = [
      {
        type: 'item-placed',
        cardId,
        categoryId,
        sourceType: source.type,
        columnIndex: source.type === 'column' ? source.index : undefined,
        spareIndex: source.type === 'spare' ? source.index : undefined,
      },
      ...completed.map((entry) => ({ type: 'category-completed', ...entry })),
    ];
    return makeResult(next, outcome, events);
  }

  function canDealNextBatch(state, level) {
    return (
      state.drawBatchIndex >= 0 &&
      state.drawBatchIndex < level.layout.drawBatches.length
    );
  }

  function dealNextBatch(state, level) {
    if (!canDealNextBatch(state, level)) {
      return makeResult(state, OUTCOME.DECK_EMPTY);
    }
    const next = cloneState(state);
    const batch = level.layout.drawBatches[next.drawBatchIndex];
    for (let index = 0; index < batch.length; index += 1) {
      next.columns[index].push(batch[index]);
    }
    next.drawBatchIndex += 1;
    next.movesUsed += 1;
    next.selectedCardId = null;
    const outcome = finalizeState(next, level, OUTCOME.DEALT);
    return makeResult(next, outcome, [
      { type: 'dealt', batchIndex: next.drawBatchIndex - 1, cardIds: [...batch] },
    ]);
  }

  function getRemainingDeckCount(state, level) {
    return level.layout.drawBatches
      .slice(state.drawBatchIndex)
      .reduce((total, batch) => total + batch.length, 0);
  }

  function getLegalMoves(state, level) {
    if (state.completed || state.failed) {
      return [];
    }
    const itemMoves = [];
    const categoryMoves = [];
    const spareMoves = [];
    const columnMoves = [];
    const emptySlots = state.categorySlots
      .map((categoryId, slotIndex) => (categoryId === null ? slotIndex : -1))
      .filter((slotIndex) => slotIndex >= 0);
    const emptySpares = state.spareCells
      .map((cardId, spareIndex) => (cardId === null ? spareIndex : -1))
      .filter((spareIndex) => spareIndex >= 0);
    const emptyColumns = state.columns
      .map((column, columnIndex) => (column.length === 0 ? columnIndex : -1))
      .filter((columnIndex) => columnIndex >= 0);
    const sources = [
      ...state.columns
        .map((column, columnIndex) => ({
          type: 'column',
          index: columnIndex,
          cardId: column.at(-1) || null,
        }))
        .filter((source) => source.cardId),
      ...state.spareCells
        .map((cardId, spareIndex) => ({
          type: 'spare',
          index: spareIndex,
          cardId,
        }))
        .filter((source) => source.cardId),
    ];

    for (const source of sources) {
      const { cardId } = source;
      const card = getCardById(level, cardId);
      if (!card) {
        continue;
      }
      if (card.cardType === 'item') {
        const slotIndex = categorySlotIndex(state, card.categoryId);
        if (slotIndex >= 0) {
          const progress = calculateCategoryProgress(
            state,
            level,
            card.categoryId,
          );
          itemMoves.push({
            type: 'placeItem',
            cardId,
            categoryId: card.categoryId,
            slotIndex,
            sourceType: source.type,
            columnIndex: source.type === 'column' ? source.index : undefined,
            spareIndex: source.type === 'spare' ? source.index : undefined,
            completesCategory: progress.collected + 1 >= progress.required,
          });
        }
      } else if (
        card.cardType === 'category' &&
        !state.categorySlots.includes(card.categoryId) &&
        !state.completedCategoryIds.includes(card.categoryId)
      ) {
        for (const slotIndex of emptySlots) {
          categoryMoves.push({
            type: 'activateCategory',
            cardId,
            categoryId: card.categoryId,
            slotIndex,
            sourceType: source.type,
            columnIndex: source.type === 'column' ? source.index : undefined,
            spareIndex: source.type === 'spare' ? source.index : undefined,
          });
        }
      }

      if (source.type === 'column') {
        for (const spareIndex of emptySpares) {
          spareMoves.push({
            type: 'moveToSpare',
            cardId,
            columnIndex: source.index,
            spareIndex,
          });
        }
      }
      for (const columnIndex of emptyColumns) {
        columnMoves.push({
          type: 'moveToColumn',
          cardId,
          sourceType: source.type,
          sourceColumnIndex:
            source.type === 'column' ? source.index : undefined,
          sourceSpareIndex:
            source.type === 'spare' ? source.index : undefined,
          columnIndex,
        });
      }
    }

    itemMoves.sort(
      (left, right) =>
        Number(right.completesCategory) - Number(left.completesCategory) ||
        (left.columnIndex ?? COLUMN_COUNT + left.spareIndex) -
          (right.columnIndex ?? COLUMN_COUNT + right.spareIndex),
    );
    categoryMoves.sort(
      (left, right) =>
        left.slotIndex - right.slotIndex ||
        (left.columnIndex ?? COLUMN_COUNT + left.spareIndex) -
          (right.columnIndex ?? COLUMN_COUNT + right.spareIndex),
    );
    const moves = [...itemMoves, ...categoryMoves];
    if (canDealNextBatch(state, level)) {
      moves.push({
        type: 'deal',
        batchIndex: state.drawBatchIndex,
      });
    }
    return [...moves, ...spareMoves, ...columnMoves];
  }

  function applyLegalAction(state, level, action) {
    if (!action || typeof action !== 'object') {
      return makeResult(state, OUTCOME.INVALID_ACTION);
    }
    if (action.type === 'activateCategory') {
      if (!canActivateCategory(state, level, action.cardId, action.slotIndex)) {
        return makeResult(state, OUTCOME.INVALID_ACTION);
      }
      return activateCategory(state, level, action.cardId, action.slotIndex);
    }
    if (action.type === 'placeItem') {
      if (!canPlaceItem(state, level, action.cardId, action.categoryId)) {
        return makeResult(state, OUTCOME.INVALID_ACTION);
      }
      return placeItem(state, level, action.cardId, action.categoryId);
    }
    if (action.type === 'deal') {
      if (!canDealNextBatch(state, level)) {
        return makeResult(state, OUTCOME.INVALID_ACTION);
      }
      return dealNextBatch(state, level);
    }
    if (action.type === 'moveToSpare') {
      if (!canMoveToSpare(state, level, action.cardId, action.spareIndex)) {
        return makeResult(state, OUTCOME.INVALID_ACTION);
      }
      return moveToSpare(state, level, action.cardId, action.spareIndex);
    }
    if (action.type === 'moveToColumn') {
      if (!canMoveToColumn(state, level, action.cardId, action.columnIndex)) {
        return makeResult(state, OUTCOME.INVALID_ACTION);
      }
      return moveToColumn(state, level, action.cardId, action.columnIndex);
    }
    return makeResult(state, OUTCOME.INVALID_ACTION);
  }

  function detectStalemate(state, level) {
    return !isLevelComplete(state, level) && getLegalMoves(state, level).length === 0;
  }

  function isLevelComplete(state, level) {
    return Boolean(
      state.columns.length === COLUMN_COUNT &&
        state.columns.every((column) => column.length === 0) &&
        state.categorySlots.length === SLOT_COUNT &&
        state.categorySlots.every((slot) => slot === null) &&
        state.spareCells.length === SPARE_COUNT &&
        state.spareCells.every((cardId) => cardId === null) &&
        state.drawBatchIndex === level.layout.drawBatches.length &&
        state.completedCategoryIds.length === level.categories.length &&
        level.categories.every((category) =>
          state.completedCategoryIds.includes(category.id),
        ),
    );
  }

  function calculateParMoves(level) {
    return level.cards.length + level.layout.drawBatches.length;
  }

  function calculateStars(state) {
    if (state.hintsUsed === 0) {
      return 3;
    }
    if (state.hintsUsed === 1) {
      return 2;
    }
    return 1;
  }

  function validateLayout(level) {
    const errors = [];
    if (
      !level.layout ||
      !Array.isArray(level.layout.initialColumns) ||
      level.layout.initialColumns.length !== COLUMN_COUNT ||
      level.layout.initialColumns.some((column) => !Array.isArray(column))
    ) {
      errors.push(`initialColumns 必須有 ${COLUMN_COUNT} 欄`);
      return errors;
    }
    if (
      !Array.isArray(level.layout.drawBatches) ||
      level.layout.drawBatches.some(
        (batch) => !Array.isArray(batch) || batch.length > COLUMN_COUNT,
      )
    ) {
      errors.push(`每個 drawBatch 必須是最多 ${COLUMN_COUNT} 張的陣列`);
      return errors;
    }

    const cardIds = new Set(level.cards.map((card) => card.id));
    const layoutIds = [
      ...level.layout.initialColumns.flat(),
      ...level.layout.drawBatches.flat(),
    ];
    for (const cardId of layoutIds) {
      if (!cardIds.has(cardId)) {
        errors.push(`layout 引用不存在卡牌 ${cardId}`);
      }
    }
    const counts = new Map();
    for (const cardId of layoutIds) {
      counts.set(cardId, (counts.get(cardId) || 0) + 1);
    }
    for (const cardId of cardIds) {
      const count = counts.get(cardId) || 0;
      if (count !== 1) {
        errors.push(`卡牌 ${cardId} 在 layout 出現 ${count} 次`);
      }
    }
    return errors;
  }

  function validateLevelDefinition(level) {
    const errors = [];
    if (!level || typeof level !== 'object') {
      return ['關卡必須是物件'];
    }
    if (typeof level.id !== 'string' || level.id.trim() === '') {
      errors.push('缺少關卡 id');
    }
    if (level.layoutVersion !== 2) {
      errors.push('layoutVersion 必須為 2');
    }
    if (!Array.isArray(level.categories) || level.categories.length === 0) {
      errors.push('categories 必須是非空陣列');
    }
    if (!Array.isArray(level.cards) || level.cards.length === 0) {
      errors.push('cards 必須是非空陣列');
    }
    if (errors.length > 0) {
      return errors;
    }

    const categoryIds = new Set();
    for (const category of level.categories) {
      if (!category?.id || categoryIds.has(category.id)) {
        errors.push(`分類 id 無效或重複：${category?.id || '(空白)'}`);
      }
      categoryIds.add(category.id);
      const itemCount = level.cards.filter(
        (card) =>
          card.cardType === 'item' && card.categoryId === category.id,
      ).length;
      if (category.required !== itemCount) {
        errors.push(
          `分類 ${category.id} required=${category.required}，提示牌=${itemCount}`,
        );
      }
      const categoryCardCount = level.cards.filter(
        (card) =>
          card.cardType === 'category' && card.categoryId === category.id,
      ).length;
      if (categoryCardCount !== 1) {
        errors.push(`分類 ${category.id} 必須恰有一張分類牌`);
      }
    }

    const cardIds = new Set();
    for (const card of level.cards) {
      if (!card?.id || cardIds.has(card.id)) {
        errors.push(`卡牌 id 無效或重複：${card?.id || '(空白)'}`);
      }
      cardIds.add(card.id);
      if (!categoryIds.has(card.categoryId)) {
        errors.push(`卡牌 ${card.id} 使用不存在分類 ${card.categoryId}`);
      }
      if (
        card.cardType === 'item' &&
        (typeof card.label !== 'string' || card.label.trim() === '')
      ) {
        errors.push(`提示牌 ${card.id} 缺少 label`);
      }
    }
    errors.push(...validateLayout(level));
    if (level.parMoves !== calculateParMoves(level)) {
      errors.push('parMoves 公式錯誤');
    }
    if (!Number.isInteger(level.moveLimit) || level.moveLimit < level.parMoves) {
      errors.push('moveLimit 不得低於 parMoves');
    }
    return errors;
  }

  function getHint(state, level) {
    const moves = getLegalMoves(state, level);
    const action = moves[0] || null;
    if (!action) {
      return null;
    }
    const card = action.cardId ? getCardById(level, action.cardId) : null;
    const category = action.categoryId
      ? getCategoryById(level, action.categoryId)
      : null;
    let message = '目前可以從牌庫發牌';
    const sourceLabel = Number.isInteger(action.spareIndex)
      ? `第 ${action.spareIndex + 1} 個暫存格`
      : Number.isInteger(action.columnIndex)
        ? `第 ${action.columnIndex + 1} 個牌堆`
        : '目前位置';
    if (action.type === 'activateCategory') {
      message = `可以將${sourceLabel}的「${category?.label || '分類'}」放入第 ${action.slotIndex + 1} 個分類槽`;
    } else if (action.type === 'placeItem') {
      message = `${sourceLabel}的「${card?.label || '提示牌'}」可以放進「${category?.label || '分類'}」`;
    } else if (action.type === 'moveToSpare') {
      message = `可以先將「${card?.label || category?.label || '這張牌'}」放到第 ${action.spareIndex + 1} 個暫存格`;
    } else if (action.type === 'moveToColumn') {
      message = `可以將「${card?.label || category?.label || '這張牌'}」移到第 ${action.columnIndex + 1} 個空牌堆`;
    }
    return { action, message };
  }

  function serializeSession(state) {
    return JSON.stringify(cloneState(state));
  }

  function deserializeSession(data, level) {
    try {
      const parsed = typeof data === 'string' ? JSON.parse(data) : cloneState(data);
      if (
        !parsed ||
        typeof parsed !== 'object' ||
        parsed.levelId !== level.id ||
        !Array.isArray(parsed.columns) ||
        parsed.columns.length !== COLUMN_COUNT ||
        parsed.columns.some((column) => !Array.isArray(column)) ||
        !Array.isArray(parsed.categorySlots) ||
        parsed.categorySlots.length !== SLOT_COUNT ||
        (parsed.spareCells !== undefined &&
          (!Array.isArray(parsed.spareCells) ||
            parsed.spareCells.length !== SPARE_COUNT))
      ) {
        return null;
      }
      const validCards = new Set(level.cards.map((card) => card.id));
      const columnCards = parsed.columns.flat();
      const spareCards = (parsed.spareCells || Array(SPARE_COUNT).fill(null))
        .filter(Boolean);
      const movableCards = [...columnCards, ...spareCards];
      if (
        movableCards.some((cardId) => !validCards.has(cardId)) ||
        new Set(movableCards).size !== movableCards.length
      ) {
        return null;
      }
      const validCategories = new Set(level.categories.map((category) => category.id));
      if (
        parsed.categorySlots.some(
          (categoryId) => categoryId !== null && !validCategories.has(categoryId),
        )
      ) {
        return null;
      }
      const clean = createInitialState(level);
      clean.columns = parsed.columns.map((column) => [...column]);
      clean.categorySlots = [...parsed.categorySlots];
      clean.spareCells = parsed.spareCells
        ? [...parsed.spareCells]
        : Array(SPARE_COUNT).fill(null);
      clean.collectedByCategory = Object.fromEntries(
        level.categories.map((category) => [
          category.id,
          Array.isArray(parsed.collectedByCategory?.[category.id])
            ? parsed.collectedByCategory[category.id].filter((cardId) =>
                validCards.has(cardId),
              )
            : [],
        ]),
      );
      clean.completedCategoryIds = Array.isArray(parsed.completedCategoryIds)
        ? parsed.completedCategoryIds.filter((id) => validCategories.has(id))
        : [];
      clean.drawBatchIndex = Math.max(
        0,
        Math.min(
          level.layout.drawBatches.length,
          Number.isInteger(parsed.drawBatchIndex) ? parsed.drawBatchIndex : 0,
        ),
      );
      for (const field of ['movesUsed', 'elapsedSeconds', 'hintsUsed', 'invalidAttempts']) {
        clean[field] = Math.max(
          0,
          Number.isFinite(parsed[field]) ? Math.floor(parsed[field]) : 0,
        );
      }
      clean.selectedCardId =
        typeof parsed.selectedCardId === 'string' &&
        validCards.has(parsed.selectedCardId)
          ? parsed.selectedCardId
          : null;
      clean.completed = isLevelComplete(clean, level);
      clean.failed = !clean.completed && clean.movesUsed >= level.moveLimit;
      return clean;
    } catch {
      return null;
    }
  }

  function restoreSnapshot(currentState, snapshot, level) {
    if (!snapshot) {
      return makeResult(currentState, OUTCOME.NOTHING_TO_UNDO);
    }
    const next = cloneState(snapshot);
    next.movesUsed = Math.max(
      currentState.movesUsed,
      (Number(snapshot.movesUsed) || 0) + 1,
    );
    next.elapsedSeconds = currentState.elapsedSeconds;
    next.hintsUsed = currentState.hintsUsed;
    next.invalidAttempts = Math.max(
      currentState.invalidAttempts || 0,
      snapshot.invalidAttempts || 0,
    );
    next.selectedCardId = null;
    finalizeState(next, level, OUTCOME.UNDONE);
    return makeResult(next, OUTCOME.UNDONE, [{ type: 'undone' }]);
  }

  function useHint(state) {
    const next = cloneState(state);
    next.hintsUsed += 1;
    return next;
  }

  function setElapsedSeconds(state, elapsedSeconds) {
    const next = cloneState(state);
    next.elapsedSeconds = Math.max(0, Math.floor(Number(elapsedSeconds) || 0));
    return next;
  }

  function formatElapsedTime(seconds) {
    const safe = Math.max(0, Math.floor(Number(seconds) || 0));
    const minutes = Math.floor(safe / 60);
    const remaining = safe % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remaining).padStart(2, '0')}`;
  }

  return Object.freeze({
    OUTCOME,
    createInitialState,
    cloneState,
    getCardById,
    getCategoryById,
    getPlayableCard,
    findCardSourceColumn,
    findPlayableCardSource,
    canMoveToSpare,
    moveToSpare,
    canMoveToColumn,
    moveToColumn,
    canActivateCategory,
    activateCategory,
    canPlaceItem,
    placeItem,
    completeFilledCategories,
    canDealNextBatch,
    dealNextBatch,
    getRemainingDeckCount,
    calculateCategoryProgress,
    getLegalMoves,
    applyLegalAction,
    detectStalemate,
    isLevelComplete,
    calculateParMoves,
    calculateStars,
    validateLevelDefinition,
    validateLayout,
    getHint,
    serializeSession,
    deserializeSession,
    restoreSnapshot,
    useHint,
    setElapsedSeconds,
    formatElapsedTime,
  });
});
