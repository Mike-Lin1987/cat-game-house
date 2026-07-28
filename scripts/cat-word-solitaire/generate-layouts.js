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
const GENERATOR_VERSION = '3.0.0';
const TOTAL_CARDS_PER_LEVEL = 54;
const INITIAL_COLUMN_HEIGHTS = Object.freeze([2, 3, 4, 5, 6]);
const MAX_CANDIDATE_ATTEMPTS = 500;
const MAX_SOLVER_NODES = 25000;
const CANDIDATE_SEARCH_NODE_LIMITS = Object.freeze([
  1500,
  3000,
  5000,
  8000,
  12000,
]);
const MOVE_BUFFERS = Object.freeze([5, 4, 3, 2, 1]);
const DIFFICULTY_PROFILES = Object.freeze([
  Object.freeze({
    minNodes: 90,
    minBacktracks: 1,
    minBranchingStates: 1,
  }),
  Object.freeze({
    minNodes: 180,
    minBacktracks: 5,
    minBranchingStates: 2,
  }),
  Object.freeze({
    minNodes: 350,
    minBacktracks: 15,
    minBranchingStates: 3,
  }),
  Object.freeze({
    minNodes: 700,
    minBacktracks: 40,
    minBranchingStates: 4,
  }),
  Object.freeze({
    minNodes: 1200,
    minBacktracks: 80,
    minBranchingStates: 5,
  }),
]);
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

function moveLimitForChapter(parMoves, chapter) {
  return parMoves + MOVE_BUFFERS[chapter - 1];
}

function meetsDifficultyProfile(stats, profile) {
  return Boolean(
    stats?.solved &&
      stats.nodesVisited >= profile.minNodes &&
      stats.nodesVisited <= MAX_SOLVER_NODES &&
      stats.backtracks >= profile.minBacktracks &&
      stats.branchingStates >= profile.minBranchingStates,
  );
}

function calculateDifficultyScore(stats, profile = null) {
  return Math.max(
    0,
    Math.round(
      (profile?.minNodes || 0) * 100 +
        stats.nodesVisited +
        stats.backtracks * 8 +
        stats.branchingStates * 30 +
        stats.dealDecisionStates * 45 +
        stats.maxActiveCategories * 25 -
        Math.min(stats.forcedMoves, 250) * 2,
    ),
  );
}

function difficultyDistance(stats, profile) {
  return (
    stats.nodesVisited - profile.minNodes +
    (stats.backtracks - profile.minBacktracks) * 8 +
    (stats.branchingStates - profile.minBranchingStates) * 30
  );
}

function attemptFromSeed(ordinal, seed) {
  const attempt = (seed - 910000 - ordinal * 7919) / 104729;
  return Number.isInteger(attempt) &&
    attempt >= 0 &&
    attempt < MAX_CANDIDATE_ATTEMPTS
    ? attempt
    : null;
}

function loadPublishedAttemptHints() {
  try {
    const published = require(path.join(OUTPUT_DIRECTORY, 'levels-index.js'));
    if (
      published.length !== 100 ||
      published.some((level) => level.generatorVersion !== GENERATOR_VERSION)
    ) {
      return new Map();
    }
    return new Map(
      published
        .map((level) => [
          level.ordinal,
          attemptFromSeed(level.ordinal, level.seed),
        ])
        .filter(([, attempt]) => attempt !== null),
    );
  } catch {
    return new Map();
  }
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

function buildSemanticCardOrder(selections, idsByCategory, random, chapter) {
  const inactive = shuffle(
    selections.map((selection) => {
      const ids = idsByCategory.get(selection.definition.id);
      return {
        categoryId: selection.definition.id,
        categoryCardId: ids.categoryCardId,
        remainingItemIds: shuffle(ids.itemCardIds, random),
      };
    }),
    random,
  );
  const active = [];
  const cardOrder = [];
  const activationProbability =
    0.1 + random() * 0.3 + chapter * 0.015;

  while (inactive.length > 0 || active.length > 0) {
    const canActivate = inactive.length > 0 && active.length < 5;
    const shouldActivate =
      canActivate &&
      (active.length === 0 ||
        random() < activationProbability);

    if (shouldActivate) {
      const next = inactive.shift();
      active.push(next);
      cardOrder.push(next.categoryCardId);
      continue;
    }

    const categoryIndex = Math.floor(random() * active.length);
    const category = active[categoryIndex];
    cardOrder.push(category.remainingItemIds.pop());
    if (category.remainingItemIds.length === 0) {
      active.splice(categoryIndex, 1);
    }
  }

  return cardOrder;
}

function buildPhysicalSchedule(random, chapter) {
  let tokenOrdinal = 0;
  const initialColumns = INITIAL_COLUMN_HEIGHTS.map((height) =>
    Array.from({ length: height }, () => `t${tokenOrdinal++}`),
  );
  const drawBatches = chunk(
    Array.from(
      { length: TOTAL_CARDS_PER_LEVEL - 20 },
      () => `t${tokenOrdinal++}`,
    ),
    5,
  );
  const columns = initialColumns.map((column) => [...column]);
  const schedule = [];
  let drawBatchIndex = 0;
  let poppedCards = 0;
  const earlyDealProbability =
    0.025 + random() * 0.12 + chapter * 0.008;

  while (poppedCards < TOTAL_CARDS_PER_LEVEL) {
    const playableColumns = columns
      .map((column, columnIndex) => (column.length > 0 ? columnIndex : -1))
      .filter((columnIndex) => columnIndex >= 0);
    const canDeal = drawBatchIndex < drawBatches.length;
    const shouldDeal =
      canDeal &&
      (playableColumns.length === 0 ||
        (poppedCards >= 3 && random() < earlyDealProbability));

    if (shouldDeal) {
      const batch = drawBatches[drawBatchIndex];
      batch.forEach((token, columnIndex) => columns[columnIndex].push(token));
      schedule.push({ type: 'deal', batchIndex: drawBatchIndex });
      drawBatchIndex += 1;
      continue;
    }

    const columnIndex =
      playableColumns[Math.floor(random() * playableColumns.length)];
    schedule.push({
      type: 'pop',
      columnIndex,
      token: columns[columnIndex].pop(),
    });
    poppedCards += 1;
  }

  return { initialColumns, drawBatches, schedule };
}

function buildLayout(levelId, selections, idsByCategory, seed, chapter = 1) {
  const random = createPrng(seed);
  const cardOrder = buildSemanticCardOrder(
    selections,
    idsByCategory,
    random,
    chapter,
  );
  const physical = buildPhysicalSchedule(random, chapter);
  const cardByToken = new Map();
  let cardIndex = 0;

  for (const step of physical.schedule) {
    if (step.type === 'pop') {
      cardByToken.set(step.token, cardOrder[cardIndex]);
      cardIndex += 1;
    }
  }

  if (cardIndex !== TOTAL_CARDS_PER_LEVEL) {
    throw new Error(`${levelId} 實體牌序沒有涵蓋全部卡牌`);
  }

  return {
    initialColumns: physical.initialColumns.map((column) =>
      column.map((token) => cardByToken.get(token)),
    ),
    drawBatches: physical.drawBatches.map((batch) =>
      batch.map((token) => cardByToken.get(token)),
    ),
    solutionSchedule: physical.schedule,
  };
}

function replaySolutionSchedule(level, solutionSchedule) {
  let state = Core.createInitialState(level);
  const actions = [];

  for (const step of solutionSchedule) {
    let action;
    if (step.type === 'deal') {
      action = { type: 'deal', batchIndex: state.drawBatchIndex };
    } else {
      const cardId = state.columns[step.columnIndex].at(-1);
      const card = Core.getCardById(level, cardId);
      if (card?.cardType === 'category') {
        action = {
          type: 'activateCategory',
          cardId,
          categoryId: card.categoryId,
          slotIndex: state.categorySlots.indexOf(null),
          columnIndex: step.columnIndex,
        };
      } else {
        action = {
          type: 'placeItem',
          cardId,
          categoryId: card?.categoryId,
          columnIndex: step.columnIndex,
        };
      }
    }
    const result = Core.applyLegalAction(state, level, action);
    if (
      result.state === state ||
      result.outcome === Core.OUTCOME.INVALID_ACTION
    ) {
      return null;
    }
    state = result.state;
    actions.push(action);
  }

  return Core.isLevelComplete(state, level) ? actions : null;
}

function createCandidate(ordinal, selections, attempt, options = {}) {
  const levelId = `L${String(ordinal).padStart(3, '0')}`;
  const chapter = Math.ceil(ordinal / 20);
  const seed = 910000 + ordinal * 7919 + attempt * 104729;
  const { categories, cards, idsByCategory } = buildContent(
    levelId,
    selections,
  );
  const generatedLayout = buildLayout(
    levelId,
    selections,
    idsByCategory,
    seed,
    chapter,
  );
  const solutionSchedule = generatedLayout.solutionSchedule;
  const layout = {
    initialColumns: generatedLayout.initialColumns,
    drawBatches: generatedLayout.drawBatches,
  };
  const parMoves = cards.length + layout.drawBatches.length;
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
    moveLimit: moveLimitForChapter(parMoves, chapter),
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
  const knownSolution = replaySolutionSchedule(level, solutionSchedule);
  if (!knownSolution) {
    return null;
  }
  const solution = Solver.solveLevel(level, {
    maxNodes: Math.min(
      MAX_SOLVER_NODES,
      Number.isInteger(options.maxNodes) ? options.maxNodes : MAX_SOLVER_NODES,
    ),
  });
  const profile = DIFFICULTY_PROFILES[chapter - 1];
  if (!meetsDifficultyProfile(solution, profile)) {
    return null;
  }
  level.knownSolution = knownSolution;
  level.solverStats = {
    solved: true,
    movesUsed: solution.movesUsed,
    nodesVisited: solution.nodesVisited,
    backtracks: solution.backtracks,
    maxDepth: solution.maxDepth,
    maxActiveCategories: solution.maxActiveCategories,
    branchingStates: solution.branchingStates,
    dealDecisionStates: solution.dealDecisionStates,
    forcedMoves: solution.forcedMoves,
  };
  level.difficultyScore = calculateDifficultyScore(
    level.solverStats,
    profile,
  );
  level.difficultyDistance = difficultyDistance(level.solverStats, profile);
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
  const publishedAttemptHints = loadPublishedAttemptHints();

  for (let ordinal = 1; ordinal <= 100; ordinal += 1) {
    let accepted = null;
    let usedPublishedHint = false;
    const chapter = Math.ceil(ordinal / 20);
    const publishedAttempt = publishedAttemptHints.get(ordinal);
    if (publishedAttempt !== undefined) {
      const candidate = createCandidate(
        ordinal,
        categorySelections[ordinal - 1],
        publishedAttempt,
        { maxNodes: MAX_SOLVER_NODES },
      );
      if (candidate) {
        const signature = Solver.createLayoutSignature(candidate);
        if (!signatures.has(signature)) {
          candidate.layoutSignature = signature;
          accepted = candidate;
          usedPublishedHint = true;
        }
      }
    }
    const baseNodeLimit = CANDIDATE_SEARCH_NODE_LIMITS[chapter - 1];
    const nodeLimits = [
      baseNodeLimit,
      Math.min(MAX_SOLVER_NODES, baseNodeLimit * 2),
      MAX_SOLVER_NODES,
    ].filter((limit, index, limits) => limits.indexOf(limit) === index);
    for (const nodeLimit of accepted ? [] : nodeLimits) {
      for (
        let attempt = 0;
        attempt < MAX_CANDIDATE_ATTEMPTS;
        attempt += 1
      ) {
        const candidate = createCandidate(
          ordinal,
          categorySelections[ordinal - 1],
          attempt,
          { maxNodes: nodeLimit },
        );
        if (!candidate) {
          continue;
        }
        const signature = Solver.createLayoutSignature(candidate);
        if (signatures.has(signature)) {
          continue;
        }
        candidate.layoutSignature = signature;
        if (
          !accepted ||
          candidate.difficultyDistance < accepted.difficultyDistance
        ) {
          accepted = candidate;
        }
        const profile = DIFFICULTY_PROFILES[candidate.chapter - 1];
        const closeEnough =
          candidate.solverStats.nodesVisited <= profile.minNodes * 1.5 &&
          candidate.solverStats.backtracks <=
            Math.max(profile.minBacktracks + 20, profile.minBacktracks * 2.5);
        if (closeEnough) {
          break;
        }
      }
      if (accepted) {
        break;
      }
    }
    if (!accepted) {
      throw new Error(`無法為 L${String(ordinal).padStart(3, '0')} 產生不重複可解牌局`);
    }
    signatures.add(accepted.layoutSignature);
    delete accepted.difficultyDistance;
    levels.push(accepted);
    console.log(
      `${accepted.id}：節點 ${accepted.solverStats.nodesVisited}、` +
        `回溯 ${accepted.solverStats.backtracks}、` +
        `分支 ${accepted.solverStats.branchingStates}` +
        (usedPublishedHint ? '（已驗證發布 seed）' : ''),
    );
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
  MAX_CANDIDATE_ATTEMPTS,
  MAX_SOLVER_NODES,
  CANDIDATE_SEARCH_NODE_LIMITS,
  MOVE_BUFFERS,
  DIFFICULTY_PROFILES,
  categoryCountForLevel,
  itemCountForLevel,
  selectContent,
  moveLimitForChapter,
  meetsDifficultyProfile,
  calculateDifficultyScore,
  attemptFromSeed,
  loadPublishedAttemptHints,
  buildSemanticCardOrder,
  buildPhysicalSchedule,
  buildLayout,
  createCandidate,
  generateLevels,
  writeLevels,
});
