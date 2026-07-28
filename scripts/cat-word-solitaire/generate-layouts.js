'use strict';

const fs = require('node:fs');
const path = require('node:path');

const Core = require('../../games/cat-word-solitaire/js/core.js');
const Solver = require('../../games/cat-word-solitaire/js/solver.js');
const { CONTENT_CATALOG } = require('./content-catalog.js');

const ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_DIRECTORY = path.join(
  ROOT,
  'games',
  'cat-word-solitaire',
  'js',
  'data',
);
const GENERATOR_VERSION = '2.1.0';
const TOTAL_CARDS_PER_LEVEL = 54;
const INITIAL_COLUMN_HEIGHTS = Object.freeze([2, 3, 4, 5, 6]);
const CHAPTER_TITLES = Object.freeze([
  '日常入門',
  '生活聯想',
  '知識分類',
  '語意進階',
  '綜合挑戰',
]);
const CHAPTER_RANGES = Object.freeze([
  [9, 9],
  [9, 9],
  [9, 10],
  [10, 10],
  [10, 10],
]);

function createPrng(seed) {
  let value = seed >>> 0;
  return function random() {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(values, random) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function chunk(values, size) {
  const result = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

function categoryCountForLevel(ordinal) {
  const chapter = Math.ceil(ordinal / 20);
  const within = (ordinal - 1) % 20;
  const [minimum, maximum] = CHAPTER_RANGES[chapter - 1];
  if (minimum === maximum) {
    return minimum;
  }
  return (
    minimum +
    Math.floor((within * (maximum - minimum + 1)) / 20)
  );
}

function itemCountForLevel(ordinal, categoryIndex = 0) {
  const categoryCount = categoryCountForLevel(ordinal);
  const itemTotal = TOTAL_CARDS_PER_LEVEL - categoryCount;
  const minimum = Math.floor(itemTotal / categoryCount);
  const extras = itemTotal % categoryCount;
  const rotatedIndex = (categoryIndex + ordinal - 1) % categoryCount;
  return minimum + (rotatedIndex < extras ? 1 : 0);
}

function selectContent() {
  const usageByCategory = new Map();
  const usageByHint = new Map();
  const categorySelections = [];
  let cursor = 0;

  for (let ordinal = 1; ordinal <= 100; ordinal += 1) {
    const count = categoryCountForLevel(ordinal);
    const selected = [];
    const localHints = new Set();
    for (let index = 0; index < count; index += 1) {
      const required = itemCountForLevel(ordinal, index);
      const definition = CONTENT_CATALOG[cursor % CONTENT_CATALOG.length];
      cursor += 1;
      const occurrence = usageByCategory.get(definition.id) || 0;
      usageByCategory.set(definition.id, occurrence + 1);
      const rotation = occurrence % definition.items.length;
      const rotated = [
        ...definition.items.slice(rotation),
        ...definition.items.slice(0, rotation),
      ];
      const items = rotated.slice(0, required).map((item) => {
        let label = item.label;
        if (localHints.has(label) || (usageByHint.get(label) || 0) >= 3) {
          label = `${item.label}（${definition.label} ${String(ordinal).padStart(3, '0')}）`;
        }
        localHints.add(label);
        usageByHint.set(label, (usageByHint.get(label) || 0) + 1);
        return {
          ...item,
          label,
        };
      });
      selected.push({
        definition,
        occurrence,
        items,
      });
    }
    categorySelections.push(selected);
  }
  return { categorySelections, usageByCategory, usageByHint };
}

function cardIdsForCategory(levelId, selection) {
  const prefix = `${levelId}-${selection.definition.id}`;
  return {
    categoryCardId: `${prefix}-category`,
    itemCardIds: selection.items.map(
      (_, index) => `${prefix}-item-${index + 1}`,
    ),
  };
}

function buildContent(levelId, selections) {
  const categories = [];
  const cards = [];
  const idsByCategory = new Map();

  for (const selection of selections) {
    const ids = cardIdsForCategory(levelId, selection);
    idsByCategory.set(selection.definition.id, ids);
    categories.push({
      id: selection.definition.id,
      label: selection.definition.label,
      required: selection.items.length,
      symbol: selection.definition.symbol,
    });
    cards.push({
      id: ids.categoryCardId,
      cardType: 'category',
      categoryId: selection.definition.id,
    });
    selection.items.forEach((item, index) => {
      const iconSlot =
        (Number(levelId.slice(1)) +
          index +
          selection.definition.id.length) %
        5;
      const useIcon = Boolean(item.icon) && iconSlot !== 0;
      const card = {
        id: ids.itemCardIds[index],
        cardType: 'item',
        displayType: useIcon ? 'icon' : 'text',
        text: item.label,
        label: item.label,
        categoryId: selection.definition.id,
      };
      if (useIcon) {
        card.icon = item.icon;
        card.ariaLabel = item.label;
      }
      cards.push(card);
    });
  }
  return { categories, cards, idsByCategory };
}

function buildLayout(levelId, selections, idsByCategory, seed) {
  const random = createPrng(seed);
  const firstWave = selections.slice(0, 5);
  const firstWaveItems = firstWave.flatMap((selection) => {
    const ids = idsByCategory.get(selection.definition.id);
    return ids.itemCardIds.slice(0, 3);
  });
  const shuffledInitialItems = shuffle(firstWaveItems, random);
  const columns = INITIAL_COLUMN_HEIGHTS.map((height) =>
    shuffledInitialItems.splice(0, height - 1),
  );
  const categoryOrder = shuffle(firstWave, random);
  for (let columnIndex = 0; columnIndex < 5; columnIndex += 1) {
    columns[columnIndex].push(
      idsByCategory.get(categoryOrder[columnIndex].definition.id).categoryCardId,
    );
  }

  const drawBatches = [];
  const firstWaveRemainingItems = firstWave.flatMap((selection) => {
    const ids = idsByCategory.get(selection.definition.id);
    return ids.itemCardIds.slice(3);
  });
  for (const batch of chunk(shuffle(firstWaveRemainingItems, random), 5)) {
    drawBatches.push(batch);
  }

  for (let start = 5; start < selections.length; start += 5) {
    const wave = selections.slice(start, start + 5);
    const shuffledWave = shuffle(wave, random);
    drawBatches.push(
      shuffledWave.map(
        (selection) =>
          idsByCategory.get(selection.definition.id).categoryCardId,
      ),
    );
    const itemCards = wave.flatMap(
      (selection) => idsByCategory.get(selection.definition.id).itemCardIds,
    );
    for (const batch of chunk(shuffle(itemCards, random), 5)) {
      drawBatches.push(batch);
    }
  }

  return { initialColumns: columns, drawBatches };
}

function createCandidate(ordinal, selections, attempt) {
  const levelId = `L${String(ordinal).padStart(3, '0')}`;
  const chapter = Math.ceil(ordinal / 20);
  const seed = 910000 + ordinal * 7919 + attempt * 104729;
  const { categories, cards, idsByCategory } = buildContent(
    levelId,
    selections,
  );
  const layout = buildLayout(levelId, selections, idsByCategory, seed);
  const parMoves = cards.length + layout.drawBatches.length;
  const chapterBuffer = [10, 9, 8, 7, 6][chapter - 1];
  const level = {
    id: levelId,
    ordinal,
    chapter,
    title: `${CHAPTER_TITLES[chapter - 1]} ${((ordinal - 1) % 20) + 1}`,
    difficulty: chapter,
    difficultyScore: 0,
    seed,
    generatorVersion: GENERATOR_VERSION,
    layoutVersion: 2,
    moveLimit: parMoves + chapterBuffer,
    parMoves,
    categories,
    cards,
    layout,
    knownSolution: [],
    solverStats: {},
    contentReview: {
      checked: true,
      ambiguityNotes: '',
    },
  };
  const definitionErrors = Core.validateLevelDefinition(level);
  if (definitionErrors.length > 0) {
    throw new Error(`${levelId} 資料錯誤：${definitionErrors.join('；')}`);
  }
  const solution = Solver.solveLevel(level, { maxNodes: 300000 });
  if (!solution.solved) {
    return null;
  }
  const maxDepth = Math.max(...layout.initialColumns.map((column) => column.length));
  const slotPressure = Math.min(5, categories.length);
  level.knownSolution = solution.actions;
  level.solverStats = {
    solved: true,
    movesUsed: solution.movesUsed,
    nodesVisited: solution.nodesVisited,
    backtracks: solution.backtracks,
    maxDepth: solution.maxDepth,
    maxActiveCategories: solution.maxActiveCategories,
  };
  level.difficultyScore =
    chapter * 120 +
    categories.length * 40 +
    cards.length * 6 +
    layout.drawBatches.length * 18 +
    maxDepth * 8 +
    slotPressure * 12 +
    solution.nodesVisited +
    solution.backtracks * 5;
  return level;
}

function serializeArray(globalName, levels) {
  return `(function (root, factory) {
  'use strict';
  const levels = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = levels;
  }
  if (root) {
    root.${globalName} = levels;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return Object.freeze(${JSON.stringify(levels, null, 2)});
});
`;
}

function serializeIndex() {
  return `(function (root, factory) {
  'use strict';
  const api = factory(
    root?.CAT_WORD_LEVELS_001_020 ||
      (typeof module === 'object' && module.exports ? require('./levels-001-020.js') : []),
    root?.CAT_WORD_LEVELS_021_040 ||
      (typeof module === 'object' && module.exports ? require('./levels-021-040.js') : []),
    root?.CAT_WORD_LEVELS_041_060 ||
      (typeof module === 'object' && module.exports ? require('./levels-041-060.js') : []),
    root?.CAT_WORD_LEVELS_061_080 ||
      (typeof module === 'object' && module.exports ? require('./levels-061-080.js') : []),
    root?.CAT_WORD_LEVELS_081_100 ||
      (typeof module === 'object' && module.exports ? require('./levels-081-100.js') : []),
  );
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CAT_WORD_LEVELS = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function (...groups) {
  return Object.freeze(groups.flat());
});
`;
}

function generateLevels() {
  const { categorySelections, usageByCategory } = selectContent();
  const signatures = new Set();
  const levels = [];

  for (let ordinal = 1; ordinal <= 100; ordinal += 1) {
    let accepted = null;
    for (let attempt = 0; attempt < 200; attempt += 1) {
      const candidate = createCandidate(
        ordinal,
        categorySelections[ordinal - 1],
        attempt,
      );
      if (!candidate) {
        continue;
      }
      const signature = Solver.createLayoutSignature(candidate);
      if (signatures.has(signature)) {
        continue;
      }
      candidate.layoutSignature = signature;
      signatures.add(signature);
      accepted = candidate;
      break;
    }
    if (!accepted) {
      throw new Error(`無法為 L${String(ordinal).padStart(3, '0')} 產生不重複可解牌局`);
    }
    levels.push(accepted);
  }

  const maximumUsage = Math.max(...usageByCategory.values());
  if (maximumUsage > 5) {
    throw new Error(`分類使用次數超過 5：${maximumUsage}`);
  }
  return levels;
}

function writeLevels(levels) {
  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  const groups = [
    [1, 20, 'CAT_WORD_LEVELS_001_020', 'levels-001-020.js'],
    [21, 40, 'CAT_WORD_LEVELS_021_040', 'levels-021-040.js'],
    [41, 60, 'CAT_WORD_LEVELS_041_060', 'levels-041-060.js'],
    [61, 80, 'CAT_WORD_LEVELS_061_080', 'levels-061-080.js'],
    [81, 100, 'CAT_WORD_LEVELS_081_100', 'levels-081-100.js'],
  ];
  for (const [start, end, globalName, filename] of groups) {
    const content = serializeArray(globalName, levels.slice(start - 1, end));
    fs.writeFileSync(path.join(OUTPUT_DIRECTORY, filename), content, 'utf8');
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIRECTORY, 'levels-index.js'),
    serializeIndex(),
    'utf8',
  );
}

function main() {
  const startedAt = Date.now();
  const levels = generateLevels();
  writeLevels(levels);
  const imageCards = levels
    .flatMap((level) => level.cards)
    .filter((card) => card.cardType === 'item' && card.displayType === 'icon').length;
  const itemCards = levels
    .flatMap((level) => level.cards)
    .filter((card) => card.cardType === 'item').length;
  console.log(
    `已產生 ${levels.length} 關；每關 ${TOTAL_CARDS_PER_LEVEL} 張；開局欄高 2/3/4/5/6；圖片牌 ${imageCards}/${itemCards} (${(
      (imageCards / itemCards) *
      100
    ).toFixed(1)}%)；耗時 ${((Date.now() - startedAt) / 1000).toFixed(2)} 秒。`,
  );
}

if (require.main === module) {
  main();
}

module.exports = Object.freeze({
  GENERATOR_VERSION,
  TOTAL_CARDS_PER_LEVEL,
  INITIAL_COLUMN_HEIGHTS,
  categoryCountForLevel,
  itemCountForLevel,
  selectContent,
  buildLayout,
  createCandidate,
  generateLevels,
  writeLevels,
});
