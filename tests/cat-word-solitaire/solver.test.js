const test = require('node:test');
const assert = require('node:assert/strict');

const Core = require('../../games/cat-word-solitaire/js/core.js');
const Solver = require('../../games/cat-word-solitaire/js/solver.js');

function createWaveLevel(categoryCount = 6, moveLimitOffset = 4) {
  const categories = Array.from({ length: categoryCount }, (_, index) => ({
    id: `category-${index + 1}`,
    label: `分類${index + 1}`,
    required: 2,
    symbol: '🐾',
  }));
  const cards = categories.flatMap((category) => [
    {
      id: `card-${category.id}`,
      cardType: 'category',
      categoryId: category.id,
    },
    {
      id: `item-${category.id}-1`,
      cardType: 'item',
      displayType: 'text',
      text: `${category.label}甲`,
      label: `${category.label}甲`,
      categoryId: category.id,
    },
    {
      id: `item-${category.id}-2`,
      cardType: 'item',
      displayType: 'text',
      text: `${category.label}乙`,
      label: `${category.label}乙`,
      categoryId: category.id,
    },
  ]);
  const waves = [];
  for (let index = 0; index < categories.length; index += 5) {
    waves.push(categories.slice(index, index + 5));
  }
  const columns = Array.from({ length: 5 }, () => []);
  for (const wave of [...waves].reverse()) {
    const items = wave.flatMap((category) => [
      `item-${category.id}-1`,
      `item-${category.id}-2`,
    ]);
    items.forEach((cardId, index) => {
      columns[index % 5].push(cardId);
    });
  }
  const drawBatches = waves.map((wave) =>
    wave.map((category) => `card-${category.id}`),
  );
  const parMoves = cards.length + drawBatches.length;
  return {
    id: 'LTEST-SOLVER',
    chapter: 1,
    title: '求解器測試',
    layoutVersion: 2,
    categories,
    cards,
    layout: { initialColumns: columns, drawBatches },
    parMoves,
    moveLimit: parMoves + moveLimitOffset,
  };
}

test('求解器依實際牌序完成五欄與固定發牌', () => {
  const level = createWaveLevel(5);
  const result = Solver.solveLevel(level);
  assert.equal(result.solved, true);
  assert.equal(result.movesUsed, level.parMoves);
  assert.equal(result.actions[0].type, 'deal');
  const finalState = result.finalState;
  assert.equal(Core.isLevelComplete(finalState, level), true);
  assert.equal(finalState.columns.every((column) => column.length === 0), true);
  assert.equal(finalState.drawBatchIndex, level.layout.drawBatches.length);
});

test('求解器可完成六分類牌局並遵守最多五槽', () => {
  const level = createWaveLevel(6);
  const result = Solver.solveLevel(level);
  assert.equal(result.solved, true);
  assert.equal(result.maxActiveCategories <= 5, true);
  assert.equal(
    result.actions.filter((action) => action.type === 'activateCategory').length,
    6,
  );
});

test('求解器會使用第五欄與第五槽', () => {
  const level = createWaveLevel(5);
  level.categories.forEach((category) => {
    category.required = 1;
  });
  level.layout.drawBatches = [];
  level.parMoves = 1;
  level.moveLimit = 10;
  const state = Core.createInitialState(level);
  state.columns = [
    [],
    [],
    [],
    [],
    ['item-category-5-1', 'card-category-5'],
  ];
  state.categorySlots = [
    'category-1',
    'category-2',
    'category-3',
    'category-4',
    null,
  ];
  for (let index = 1; index <= 4; index += 1) {
    state.collectedByCategory[`category-${index}`] = [
      `item-category-${index}-1`,
    ];
  }
  const result = Solver.solveFromState(state, level);
  assert.equal(result.solved, true);
  assert.equal(
    result.actions.some(
      (action) => action.type === 'activateCategory' && action.columnIndex === 4,
    ),
    true,
  );
  assert.equal(
    result.actions.some(
      (action) => action.type === 'activateCategory' && action.slotIndex === 4,
    ),
    true,
  );
});

test('求解器不能操作被覆蓋牌或跳過發牌', () => {
  const level = createWaveLevel(5);
  const state = Core.createInitialState(level);
  const result = Solver.solveFromState(state, level);
  assert.equal(result.solved, true);
  assert.equal(result.actions[0].type, 'deal');
  assert.equal(
    result.actions.findIndex((action) => action.type === 'placeItem') >
      result.actions.findIndex((action) => action.type === 'activateCategory'),
    true,
  );
});

test('無分類牌可啟用的牌局回傳無解', () => {
  const level = createWaveLevel(1);
  level.layout = {
    initialColumns: [['item-category-1-1'], [], [], [], []],
    drawBatches: [],
  };
  level.parMoves = 1;
  level.moveLimit = 5;
  const result = Solver.solveLevel(level);
  assert.equal(result.solved, false);
});

test('低於必要步數的上限會停止求解', () => {
  const level = createWaveLevel(5);
  level.moveLimit = level.parMoves - 1;
  const result = Solver.solveLevel(level);
  assert.equal(result.solved, false);
  assert.equal(result.reason, 'move-limit');
});

test('狀態正規化忽略分類槽純位置差異', () => {
  const level = createWaveLevel(2);
  const first = Core.createInitialState(level);
  first.categorySlots = ['category-1', 'category-2', null, null, null];
  const second = Core.cloneState(first);
  second.categorySlots = [null, 'category-2', null, 'category-1', null];
  assert.equal(
    Solver.normalizeState(first, level),
    Solver.normalizeState(second, level),
  );
});

test('layout signature 忽略欄位純交換但辨識實質牌序差異', () => {
  const level = createWaveLevel(5);
  const swapped = structuredClone(level);
  [swapped.layout.initialColumns[0], swapped.layout.initialColumns[4]] = [
    swapped.layout.initialColumns[4],
    swapped.layout.initialColumns[0],
  ];
  for (const batch of swapped.layout.drawBatches) {
    [batch[0], batch[4]] = [batch[4], batch[0]];
  }
  assert.equal(
    Solver.createLayoutSignature(level),
    Solver.createLayoutSignature(swapped),
  );

  const changed = structuredClone(level);
  changed.layout.initialColumns[0].reverse();
  assert.notEqual(
    Solver.createLayoutSignature(level),
    Solver.createLayoutSignature(changed),
  );
});
