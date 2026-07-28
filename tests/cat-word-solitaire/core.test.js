const test = require('node:test');
const assert = require('node:assert/strict');

const Core = require('../../games/cat-word-solitaire/js/core.js');

function createLevel(overrides = {}) {
  const categories = [
    { id: 'fruit', label: '水果', required: 2, symbol: '🍎' },
    { id: 'travel', label: '交通工具', required: 2, symbol: '🚌' },
    { id: 'music', label: '樂器', required: 2, symbol: '🎵' },
    { id: 'weather', label: '天氣', required: 2, symbol: '☀️' },
    { id: 'school', label: '學校用品', required: 2, symbol: '✏️' },
    { id: 'kitchen', label: '廚房用品', required: 2, symbol: '🍳' },
  ];
  const cards = categories.flatMap((category) => [
    {
      id: `category-${category.id}`,
      cardType: 'category',
      categoryId: category.id,
    },
    {
      id: `${category.id}-1`,
      cardType: 'item',
      displayType: 'text',
      text: `${category.label}甲`,
      label: `${category.label}甲`,
      categoryId: category.id,
    },
    {
      id: `${category.id}-2`,
      cardType: 'item',
      displayType: 'text',
      text: `${category.label}乙`,
      label: `${category.label}乙`,
      categoryId: category.id,
    },
  ]);
  return {
    id: 'LTEST',
    chapter: 1,
    title: '核心測試',
    layoutVersion: 2,
    categories,
    cards,
    layout: {
      initialColumns: [
        ['fruit-1', 'category-fruit'],
        ['fruit-2', 'category-travel'],
        ['travel-1', 'category-music'],
        ['travel-2', 'category-weather'],
        ['music-1', 'category-school'],
      ],
      drawBatches: [
        ['music-2', 'weather-1', 'weather-2', 'school-1', 'school-2'],
        ['category-kitchen', 'kitchen-1', 'kitchen-2'],
      ],
    },
    parMoves: 20,
    moveLimit: 30,
    ...overrides,
  };
}

test('初始 state 固定建立五欄、五個分類槽與兩個備用格', () => {
  const state = Core.createInitialState(createLevel());
  assert.equal(state.columns.length, 5);
  assert.equal(state.categorySlots.length, 5);
  assert.deepEqual(state.categorySlots, [null, null, null, null, null]);
  assert.deepEqual(state.spareCells, [null, null]);
  assert.equal(state.drawBatchIndex, 0);
});

test('每欄只有最後一張露出牌可操作，第五欄同等支援', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);
  assert.equal(Core.getPlayableCard(state, 0), 'category-fruit');
  assert.equal(Core.findCardSourceColumn(state, 'fruit-1'), -1);
  assert.equal(Core.findCardSourceColumn(state, 'category-fruit'), 0);
  assert.equal(Core.findCardSourceColumn(state, 'category-school'), 4);
});

test('露出牌可移入兩個備用格，被覆蓋牌與已占用格會拒絕', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);

  assert.equal(
    Core.moveToSpare(state, level, 'fruit-1', 0).outcome,
    Core.OUTCOME.CARD_NOT_PLAYABLE,
  );

  const stored = Core.moveToSpare(
    state,
    level,
    'category-fruit',
    0,
  );
  assert.equal(stored.outcome, Core.OUTCOME.CARD_STORED);
  assert.deepEqual(stored.state.spareCells, ['category-fruit', null]);
  assert.deepEqual(stored.state.columns[0], ['fruit-1']);
  assert.equal(stored.state.movesUsed, 1);

  const occupied = Core.moveToSpare(
    stored.state,
    level,
    'category-travel',
    0,
  );
  assert.equal(occupied.outcome, Core.OUTCOME.SPARE_OCCUPIED);
  assert.strictEqual(occupied.state, stored.state);
});

test('分類牌與提示牌都能從備用格移入合法分類槽', () => {
  const level = createLevel({
    layout: {
      initialColumns: [
        ['category-fruit'],
        ['fruit-1'],
        ['fruit-2'],
        [],
        [],
      ],
      drawBatches: [],
    },
  });
  let state = Core.createInitialState(level);
  state = Core.moveToSpare(
    state,
    level,
    'category-fruit',
    0,
  ).state;
  const activated = Core.activateCategory(
    state,
    level,
    'category-fruit',
    0,
  );
  assert.equal(activated.outcome, Core.OUTCOME.CATEGORY_ACTIVATED);
  assert.deepEqual(activated.state.spareCells, [null, null]);
  assert.equal(activated.state.categorySlots[0], 'fruit');

  state = Core.moveToSpare(
    activated.state,
    level,
    'fruit-1',
    1,
  ).state;
  const placed = Core.placeItem(state, level, 'fruit-1', 'fruit');
  assert.equal(placed.outcome, Core.OUTCOME.ITEM_PLACED);
  assert.deepEqual(placed.state.spareCells, [null, null]);
  assert.deepEqual(placed.state.collectedByCategory.fruit, ['fruit-1']);
});

test('露出牌與備用格牌可移到完全空白牌堆，非空牌堆會拒絕', () => {
  const level = createLevel({
    layout: {
      initialColumns: [
        ['category-fruit'],
        ['fruit-1'],
        [],
        ['category-travel'],
        [],
      ],
      drawBatches: [],
    },
  });
  let state = Core.createInitialState(level);

  assert.equal(
    Core.moveToColumn(state, level, 'fruit-1', 0).outcome,
    Core.OUTCOME.COLUMN_NOT_EMPTY,
  );

  const moved = Core.moveToColumn(state, level, 'fruit-1', 2);
  assert.equal(moved.outcome, Core.OUTCOME.CARD_MOVED_TO_COLUMN);
  assert.deepEqual(moved.state.columns[1], []);
  assert.deepEqual(moved.state.columns[2], ['fruit-1']);
  assert.equal(moved.state.movesUsed, 1);

  state = Core.moveToSpare(
    moved.state,
    level,
    'category-fruit',
    0,
  ).state;
  const restored = Core.moveToColumn(
    state,
    level,
    'category-fruit',
    0,
  );
  assert.equal(restored.outcome, Core.OUTCOME.CARD_MOVED_TO_COLUMN);
  assert.deepEqual(restored.state.spareCells, [null, null]);
  assert.deepEqual(restored.state.columns[0], ['category-fruit']);
});

test('合法動作公開備用格與空牌堆目標並可由 applyLegalAction 套用', () => {
  const level = createLevel({
    layout: {
      initialColumns: [
        ['category-fruit'],
        ['fruit-1'],
        [],
        [],
        [],
      ],
      drawBatches: [],
    },
  });
  const state = Core.createInitialState(level);
  const moves = Core.getLegalMoves(state, level);
  assert.equal(
    moves.some(
      (move) =>
        move.type === 'moveToSpare' &&
        move.cardId === 'category-fruit' &&
        move.spareIndex === 1,
    ),
    true,
  );
  const columnMove = moves.find(
    (move) =>
      move.type === 'moveToColumn' &&
      move.cardId === 'fruit-1' &&
      move.columnIndex === 4,
  );
  assert.ok(columnMove);
  const result = Core.applyLegalAction(state, level, columnMove);
  assert.equal(result.outcome, Core.OUTCOME.CARD_MOVED_TO_COLUMN);
  assert.deepEqual(result.state.columns[4], ['fruit-1']);
});

test('黃框分類牌可放入第五星槽，已占用槽不可再使用', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);
  const result = Core.activateCategory(
    state,
    level,
    'category-school',
    4,
  );
  assert.equal(result.outcome, Core.OUTCOME.CATEGORY_ACTIVATED);
  assert.equal(result.state.categorySlots[4], 'school');
  assert.equal(result.state.movesUsed, 1);
  const rejected = Core.activateCategory(
    result.state,
    level,
    'category-fruit',
    4,
  );
  assert.equal(rejected.outcome, Core.OUTCOME.SLOT_OCCUPIED);
  assert.strictEqual(rejected.state, result.state);
});

test('五槽全滿時不能啟用第六個分類', () => {
  const level = createLevel();
  let state = Core.createInitialState(level);
  for (let index = 0; index < 5; index += 1) {
    const cardId = state.columns[index].at(-1);
    state = Core.activateCategory(state, level, cardId, index).state;
  }
  state.columns[0].push('category-kitchen');
  const result = Core.activateCategory(
    state,
    level,
    'category-kitchen',
    0,
  );
  assert.equal(result.outcome, Core.OUTCOME.NO_EMPTY_SLOT);
  assert.strictEqual(result.state, state);
});

test('正確提示牌增加進度，達標後完成分類並釋放原槽', () => {
  const level = createLevel({
    layout: {
      initialColumns: [
        ['fruit-1', 'category-fruit'],
        ['fruit-2'],
        [],
        [],
        [],
      ],
      drawBatches: [],
    },
  });
  let state = Core.createInitialState(level);
  state = Core.activateCategory(
    state,
    level,
    'category-fruit',
    0,
  ).state;
  state = Core.placeItem(state, level, 'fruit-1', 'fruit').state;
  assert.deepEqual(state.collectedByCategory.fruit, ['fruit-1']);
  const result = Core.placeItem(state, level, 'fruit-2', 'fruit');
  assert.equal(result.outcome, Core.OUTCOME.CATEGORY_COMPLETED);
  assert.equal(result.state.categorySlots[0], null);
  assert.deepEqual(result.state.completedCategoryIds, ['fruit']);
  assert.equal(result.state.movesUsed, 3);
});

test('錯誤分類不移除牌但會消耗一步並記錄錯誤', () => {
  const level = createLevel();
  let state = Core.createInitialState(level);
  state = Core.activateCategory(
    state,
    level,
    'category-fruit',
    0,
  ).state;
  state = Core.activateCategory(
    state,
    level,
    'category-travel',
    1,
  ).state;
  const beforeColumns = structuredClone(state.columns);
  const result = Core.placeItem(state, level, 'fruit-1', 'travel');
  assert.equal(result.outcome, Core.OUTCOME.WRONG_CATEGORY);
  assert.deepEqual(result.state.columns, beforeColumns);
  assert.equal(result.state.movesUsed, state.movesUsed + 1);
  assert.equal(result.state.invalidAttempts, 1);
});

test('尚未啟用的分類不能接收提示牌', () => {
  const level = createLevel({
    layout: {
      initialColumns: [['fruit-1'], [], [], [], []],
      drawBatches: [],
    },
  });
  const state = Core.createInitialState(level);
  const result = Core.placeItem(state, level, 'fruit-1', 'fruit');
  assert.equal(result.outcome, Core.OUTCOME.CATEGORY_NOT_ACTIVE);
  assert.equal(result.state.movesUsed, 1);
  assert.deepEqual(result.state.columns[0], state.columns[0]);
});

test('發牌批次五張時五欄各收到一張，第五欄成為露出牌', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);
  const beforeLengths = state.columns.map((column) => column.length);
  const result = Core.dealNextBatch(state, level);
  assert.equal(result.outcome, Core.OUTCOME.DEALT);
  assert.deepEqual(
    result.state.columns.map((column, index) => column.length - beforeLengths[index]),
    [1, 1, 1, 1, 1],
  );
  assert.equal(Core.getPlayableCard(result.state, 4), 'school-2');
  assert.equal(result.state.movesUsed, 1);
});

test('不足五張的發牌批次依左至右放置', () => {
  const level = createLevel();
  let state = Core.createInitialState(level);
  state = Core.dealNextBatch(state, level).state;
  const beforeLengths = state.columns.map((column) => column.length);
  const result = Core.dealNextBatch(state, level);
  assert.deepEqual(
    result.state.columns.map((column, index) => column.length - beforeLengths[index]),
    [1, 1, 1, 0, 0],
  );
  assert.equal(result.state.drawBatchIndex, 2);
  assert.equal(Core.getRemainingDeckCount(result.state, level), 0);
  assert.equal(
    Core.dealNextBatch(result.state, level).outcome,
    Core.OUTCOME.DECK_EMPTY,
  );
});

test('牌庫、第五欄或未完成分類仍有內容時不能完成', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);
  assert.equal(Core.isLevelComplete(state, level), false);
  const almost = {
    ...state,
    columns: [[], [], [], [], ['school-1']],
    categorySlots: [null, null, null, null, null],
    completedCategoryIds: level.categories.map((category) => category.id),
    drawBatchIndex: level.layout.drawBatches.length,
  };
  assert.equal(Core.isLevelComplete(almost, level), false);
  const spareOccupied = {
    ...almost,
    columns: [[], [], [], [], []],
    spareCells: ['school-1', null],
  };
  assert.equal(Core.isLevelComplete(spareOccupied, level), false);
});

test('牌庫仍有牌時發牌是合法動作且不會誤判卡關', () => {
  const level = createLevel({
    layout: {
      initialColumns: [[], [], [], [], []],
      drawBatches: [['category-fruit']],
    },
  });
  const state = Core.createInitialState(level);
  assert.equal(Core.detectStalemate(state, level), false);
  assert.equal(
    Core.getLegalMoves(state, level).some((move) => move.type === 'deal'),
    true,
  );
});

test('第五欄有合法牌或第五槽可用時不誤判卡關', () => {
  const level = createLevel({
    layout: {
      initialColumns: [[], [], [], [], ['category-fruit']],
      drawBatches: [],
    },
  });
  const state = Core.createInitialState(level);
  assert.equal(Core.detectStalemate(state, level), false);
  const move = Core.getLegalMoves(state, level).find(
    (candidate) => candidate.cardId === 'category-fruit',
  );
  assert.equal(move.columnIndex, 4);
  assert.equal(move.slotIndex, 0);
});

test('提示可指出第五欄動作且不直接替玩家操作', () => {
  const level = createLevel({
    layout: {
      initialColumns: [[], [], [], [], ['category-fruit']],
      drawBatches: [],
    },
  });
  const state = Core.createInitialState(level);
  const hint = Core.getHint(state, level);
  assert.equal(hint.action.columnIndex, 4);
  assert.equal(hint.action.cardId, 'category-fruit');
  assert.deepEqual(state.columns[4], ['category-fruit']);
});

test('提示能描述從備用格與移往空牌堆的動作', () => {
  const level = createLevel({
    layout: {
      initialColumns: [['category-fruit'], ['fruit-1'], [], [], []],
      drawBatches: [],
    },
  });
  let state = Core.createInitialState(level);
  state = Core.activateCategory(
    state,
    level,
    'category-fruit',
    0,
  ).state;
  state = Core.moveToSpare(state, level, 'fruit-1', 0).state;
  const spareHint = Core.getHint(state, level);
  assert.equal(spareHint.action.spareIndex, 0);
  assert.match(spareHint.message, /備用格/);

  state.categorySlots = [null, null, null, null, null];
  const relocationOnly = Core.getLegalMoves(state, level).filter(
    (move) => move.type === 'moveToColumn',
  )[0];
  assert.ok(relocationOnly);
});

test('撤回恢復盤面但不回退時間、提示，且不能增加剩餘步數', () => {
  const level = createLevel();
  const snapshot = {
    ...Core.createInitialState(level),
    movesUsed: 19,
    elapsedSeconds: 30,
    hintsUsed: 0,
  };
  const current = {
    ...snapshot,
    columns: snapshot.columns.map((column) => [...column]),
    movesUsed: 20,
    elapsedSeconds: 55,
    hintsUsed: 2,
  };
  current.columns[0].pop();
  const result = Core.restoreSnapshot(current, snapshot, level);
  assert.equal(result.outcome, Core.OUTCOME.UNDONE);
  assert.equal(result.state.movesUsed, 20);
  assert.equal(result.state.elapsedSeconds, 55);
  assert.equal(result.state.hintsUsed, 2);
  assert.deepEqual(result.state.columns, snapshot.columns);
});

test('序列化保留五欄、五槽與備用格，舊 session 會補空備用格', () => {
  const level = createLevel();
  const initial = Core.createInitialState(level);
  const state = Core.moveToSpare(
    initial,
    level,
    'category-fruit',
    0,
  ).state;
  const serialized = Core.serializeSession(state);
  const restored = Core.deserializeSession(serialized, level);
  assert.equal(restored.columns.length, 5);
  assert.equal(restored.categorySlots.length, 5);
  assert.deepEqual(restored.spareCells, ['category-fruit', null]);

  const legacy = structuredClone(initial);
  delete legacy.spareCells;
  assert.deepEqual(
    Core.deserializeSession(legacy, level).spareCells,
    [null, null],
  );

  assert.equal(Core.deserializeSession('{bad json', level), null);
  assert.equal(
    Core.deserializeSession(
      { ...state, columns: [[], [], [], []], categorySlots: [null, null, null, null] },
      level,
    ),
    null,
  );
  assert.equal(
    Core.deserializeSession(
      { ...initial, spareCells: ['category-fruit'] },
      level,
    ),
    null,
  );
});

test('星級依提示次數固定為三、二、一星', () => {
  const level = createLevel();
  const state = Core.createInitialState(level);
  assert.equal(Core.calculateStars({ ...state, hintsUsed: 0 }, level), 3);
  assert.equal(Core.calculateStars({ ...state, hintsUsed: 1 }, level), 2);
  assert.equal(Core.calculateStars({ ...state, hintsUsed: 2 }, level), 1);
});

test('經過時間固定格式化為分秒', () => {
  assert.equal(Core.formatElapsedTime(0), '00:00');
  assert.equal(Core.formatElapsedTime(65), '01:05');
  assert.equal(Core.formatElapsedTime(3605), '60:05');
});
