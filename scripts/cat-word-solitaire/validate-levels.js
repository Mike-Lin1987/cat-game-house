'use strict';

const Core = require('../../games/cat-word-solitaire/js/core.js');
const Solver = require('../../games/cat-word-solitaire/js/solver.js');

const EXPECTED_HEIGHTS = Object.freeze([2, 3, 4, 5, 6]);
const EXPECTED_TOTAL_CARDS = 54;
const PLACEHOLDER_PATTERN = /\b(?:TODO|TBD|placeholder|lorem ipsum)\b/i;
const SIMPLIFIED_PATTERN = /[这发后为从个们门车书画东乐云风鱼鸟马麦万与业产历压广厅县区号叶听园图圆场块坏声处头实导层师应总户术机极标样桥检气汉济温点炉炼热爱猫环电线网罗药视设证词该语贝买卖质软边过还远连进选阳阴队际难题页飞饮馆]/;

function replayKnownSolution(level) {
  let state = Core.createInitialState(level);
  for (const action of level.knownSolution || []) {
    const result = Core.applyLegalAction(state, level, action);
    if (result.state === state || result.outcome === Core.OUTCOME.INVALID_ACTION) {
      return { solved: false, state, invalidAction: action };
    }
    state = result.state;
  }
  return {
    solved: Core.isLevelComplete(state, level),
    state,
    invalidAction: null,
  };
}

function loadPublishedLevels() {
  return require('../../games/cat-word-solitaire/js/data/levels-index.js');
}

function analyzeLevels(levels = null, generatorContract = null) {
  const {
    GENERATOR_VERSION,
    DIFFICULTY_PROFILES,
    MAX_SOLVER_NODES,
    MOVE_BUFFERS,
    calculateDifficultyScore,
    difficultyProfileErrors,
  } = generatorContract || require('./generate-layouts.js');
  const analyzedLevels = levels || loadPublishedLevels();
  const globalErrors = [];
  const levelResults = [];
  const ids = new Set();
  const signatures = new Set();
  const categoryUsage = new Map();
  const hintUsage = new Map();
  const chapterCounts = new Map();
  const combinationSignatures = new Set();
  let itemCardCount = 0;
  let imageCardCount = 0;

  if (analyzedLevels.length !== 100) {
    globalErrors.push(`關卡總數應為 100，實際 ${analyzedLevels.length}`);
  }

  for (const [index, level] of analyzedLevels.entries()) {
    const errors = [];
    const expectedId = `L${String(index + 1).padStart(3, '0')}`;
    if (level.id !== expectedId) {
      errors.push(`預期 id ${expectedId}，實際 ${level.id}`);
    }
    if (ids.has(level.id)) {
      errors.push('關卡 id 重複');
    }
    ids.add(level.id);
    chapterCounts.set(level.chapter, (chapterCounts.get(level.chapter) || 0) + 1);

    errors.push(...Core.validateLevelDefinition(level));
    const columnHeights = level.layout.initialColumns.map(
      (column) => column.length,
    );
    if (JSON.stringify(columnHeights) !== JSON.stringify(EXPECTED_HEIGHTS)) {
      errors.push(`開局欄高必須是 2/3/4/5/6，實際 ${columnHeights.join('/')}`);
    }
    if (level.layoutVersion !== 2) {
      errors.push('layoutVersion 不是 2');
    }
    if (level.generatorVersion !== GENERATOR_VERSION) {
      errors.push(
        `generatorVersion 應為 ${GENERATOR_VERSION}，實際 ${level.generatorVersion}`,
      );
    }
    if (level.cards.length !== EXPECTED_TOTAL_CARDS) {
      errors.push(`每關必須正好 ${EXPECTED_TOTAL_CARDS} 張牌，實際 ${level.cards.length}`);
    }
    if (level.categories.length < 3 || level.categories.length > 10) {
      errors.push(`分類數量超出 3～10：${level.categories.length}`);
    }
    if (
      level.categories.some(
        (category) => category.required < 3 || category.required > 5,
      )
    ) {
      errors.push('每分類提示牌必須是 3～5 張');
    }

    const localLabels = new Set();
    for (const category of level.categories) {
      categoryUsage.set(
        category.label,
        (categoryUsage.get(category.label) || 0) + 1,
      );
      if (localLabels.has(`category:${category.label}`)) {
        errors.push(`同關重複分類 ${category.label}`);
      }
      localLabels.add(`category:${category.label}`);
    }
    const itemCards = level.cards.filter((card) => card.cardType === 'item');
    itemCardCount += itemCards.length;
    for (const card of itemCards) {
      hintUsage.set(card.label, (hintUsage.get(card.label) || 0) + 1);
      if (localLabels.has(`item:${card.label}`)) {
        errors.push(`同關重複提示詞 ${card.label}`);
      }
      localLabels.add(`item:${card.label}`);
      if (card.displayType === 'icon') {
        imageCardCount += 1;
        if (
          typeof card.icon !== 'string' ||
          card.icon.trim() === '' ||
          card.ariaLabel !== card.label
        ) {
          errors.push(`圖片牌 ${card.id} 缺少清楚 icon／ariaLabel`);
        }
      }
    }

    const allPlayerText = [
      level.title,
      ...level.categories.flatMap((category) => [
        category.label,
        category.symbol,
      ]),
      ...itemCards.flatMap((card) => [card.label, card.text]),
    ].join('');
    if (PLACEHOLDER_PATTERN.test(allPlayerText)) {
      errors.push('包含 placeholder 文字');
    }
    if (SIMPLIFIED_PATTERN.test(allPlayerText)) {
      errors.push('包含疑似簡體中文字');
    }
    if (level.contentReview?.checked !== true) {
      errors.push('尚未完成人工內容審核');
    }

    const combination = level.categories
      .map((category) => {
        const hints = itemCards
          .filter((card) => card.categoryId === category.id)
          .map((card) => card.label)
          .sort();
        return `${category.label}:${hints.join(',')}`;
      })
      .sort()
      .join('|');
    if (combinationSignatures.has(combination)) {
      errors.push('分類與提示組合重複');
    }
    combinationSignatures.add(combination);

    const signature = Solver.createLayoutSignature(level);
    if (signature !== level.layoutSignature) {
      errors.push('保存的 layout signature 與重新計算不符');
    }
    if (signatures.has(signature)) {
      errors.push('layout signature 重複');
    }
    signatures.add(signature);

    const known = replayKnownSolution(level);
    if (!known.solved) {
      errors.push('knownSolution 無法依實際規則完成');
    }
    const solution = Solver.solveLevel(level, { maxNodes: MAX_SOLVER_NODES });
    if (!solution.solved) {
      errors.push(`獨立求解失敗：${solution.reason}`);
    }
    if (solution.movesUsed > level.moveLimit) {
      errors.push('求解步數超過 moveLimit');
    }
    if (solution.maxActiveCategories > 5) {
      errors.push('求解時同時啟用超過 5 個分類');
    }
    if (level.parMoves !== Core.calculateParMoves(level)) {
      errors.push('parMoves 公式錯誤');
    }
    const profile = DIFFICULTY_PROFILES[level.chapter - 1];
    const expectedMoveLimit =
      level.parMoves + MOVE_BUFFERS[level.chapter - 1];
    if (level.moveLimit !== expectedMoveLimit) {
      errors.push(
        `moveLimit 應為 parMoves + ${MOVE_BUFFERS[level.chapter - 1]}`,
      );
    }
    errors.push(...difficultyProfileErrors(solution, profile));
    for (const field of [
      'nodesVisited',
      'backtracks',
      'branchingStates',
      'dealDecisionStates',
      'forcedMoves',
    ]) {
      if (level.solverStats?.[field] !== solution[field]) {
        errors.push(`保存的 solverStats.${field} 與重新求解不符`);
      }
    }
    if (
      level.difficultyScore !== calculateDifficultyScore(solution, profile)
    ) {
      errors.push('difficultyScore 與真實搜尋統計不符');
    }

    levelResults.push({
      id: level.id,
      ordinal: level.ordinal,
      chapter: level.chapter,
      difficulty: level.difficulty,
      difficultyScore: level.difficultyScore,
      layoutVersion: level.layoutVersion,
      categoryCount: level.categories.length,
      itemCardCount: itemCards.length,
      totalCardCount: level.cards.length,
      imageCardCount: itemCards.filter((card) => card.displayType === 'icon').length,
      initialColumnCount: level.layout.initialColumns.length,
      columnHeights,
      fifthColumnCount: level.layout.initialColumns[4].length,
      drawBatchCount: level.layout.drawBatches.length,
      parMoves: level.parMoves,
      moveLimit: level.moveLimit,
      solverSolved: solution.solved,
      solverMoves: solution.movesUsed,
      solverNodes: solution.nodesVisited,
      solverBacktracks: solution.backtracks,
      solverBranchingStates: solution.branchingStates,
      solverDealDecisionStates: solution.dealDecisionStates,
      solverForcedMoves: solution.forcedMoves,
      solverMaxDepth: solution.maxDepth,
      solverDurationMs: solution.durationMs,
      maxActiveCategories: solution.maxActiveCategories,
      fiveSlotLimitValid: solution.maxActiveCategories <= 5,
      contentReviewChecked: level.contentReview?.checked === true,
      ambiguityNotes: level.contentReview?.ambiguityNotes || '',
      layoutSignature: signature,
      errors,
    });
  }

  for (let chapter = 1; chapter <= 5; chapter += 1) {
    if (chapterCounts.get(chapter) !== 20) {
      globalErrors.push(
        `第 ${chapter} 章應為 20 關，實際 ${chapterCounts.get(chapter) || 0}`,
      );
    }
  }

  const distinctCategoryCount = categoryUsage.size;
  if (distinctCategoryCount < 180) {
    globalErrors.push(`不同分類名稱少於 180：${distinctCategoryCount}`);
  }
  const maximumCategoryUsage = Math.max(...categoryUsage.values());
  if (maximumCategoryUsage > 5) {
    globalErrors.push(`分類名稱最多出現 ${maximumCategoryUsage} 關`);
  }
  const maximumHintUsage = Math.max(...hintUsage.values());
  if (maximumHintUsage > 3) {
    globalErrors.push(`提示詞最多出現 ${maximumHintUsage} 關`);
  }

  for (let index = 0; index < analyzedLevels.length; index += 1) {
    const current = new Set(analyzedLevels[index].categories.map((category) => category.label));
    for (
      let neighbor = Math.max(0, index - 9);
      neighbor < index;
      neighbor += 1
    ) {
      const repeated = analyzedLevels[neighbor].categories.find((category) =>
        current.has(category.label),
      );
      if (repeated) {
        globalErrors.push(
          `${analyzedLevels[index].id} 與 ${analyzedLevels[neighbor].id} 在相鄰 10 關重複分類 ${repeated.label}`,
        );
      }
    }
  }

  const imageRatio = itemCardCount > 0 ? imageCardCount / itemCardCount : 0;
  if (imageRatio < 0.1 || imageRatio > 0.2) {
    globalErrors.push(
      `圖片牌比例必須為 10%～20%，實際 ${(imageRatio * 100).toFixed(1)}%`,
    );
  }

  const chapterAverages = Array.from({ length: 5 }, (_, index) => {
    const scores = analyzedLevels
      .filter((level) => level.chapter === index + 1)
      .map((level) => level.difficultyScore);
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
  });
  for (let index = 1; index < chapterAverages.length; index += 1) {
    if (chapterAverages[index] <= chapterAverages[index - 1]) {
      globalErrors.push('後一章平均 difficultyScore 未高於前一章');
      break;
    }
  }
  if (
    analyzedLevels[0]?.difficultyScore >=
    analyzedLevels.at(-1)?.difficultyScore
  ) {
    globalErrors.push('L001 difficultyScore 必須低於 L100');
  }

  const failedLevels = levelResults.filter((result) => result.errors.length > 0);
  const summary = {
    totalLevels: analyzedLevels.length,
    fiveColumnLayouts: levelResults.filter(
      (result) =>
        JSON.stringify(result.columnHeights) === JSON.stringify(EXPECTED_HEIGHTS),
    ).length,
    exactCardCountLevels: levelResults.filter(
      (result) => result.totalCardCount === EXPECTED_TOTAL_CARDS,
    ).length,
    solvableWithFiveSlots: levelResults.filter(
      (result) => result.solverSolved && result.fiveSlotLimitValid,
    ).length,
    validDefinitions: levelResults.filter((result) => result.errors.length === 0)
      .length,
    unsolved: levelResults.filter((result) => !result.solverSolved).length,
    overMoveLimit: levelResults.filter(
      (result) => result.solverMoves > result.moveLimit,
    ).length,
    invalidFourColumnLayouts: levelResults.filter(
      (result) => result.initialColumnCount === 4,
    ).length,
    invalidFifthColumns: levelResults.filter(
      (result) => result.fifthColumnCount !== 6,
    ).length,
    duplicateLayouts: analyzedLevels.length - signatures.size,
    missingCards: levelResults.filter((result) =>
      result.errors.some((error) => error.includes('layout 出現 0 次')),
    ).length,
    duplicateCards: levelResults.filter((result) =>
      result.errors.some((error) => /layout 出現 [2-9]\d* 次/.test(error)),
    ).length,
    invalidCategories: levelResults.filter((result) =>
      result.errors.some((error) => error.includes('分類')),
    ).length,
    placeholders: levelResults.filter((result) =>
      result.errors.some((error) => error.includes('placeholder')),
    ).length,
    uncheckedContent: levelResults.filter((result) =>
      result.errors.some((error) => error.includes('人工內容審核')),
    ).length,
    distinctCategoryCount,
    maximumCategoryUsage,
    maximumHintUsage,
    itemCardCount,
    imageCardCount,
    imageRatio,
    chapterAverages,
    failedLevels: failedLevels.length,
    globalErrors,
  };

  return { summary, levels: levelResults };
}

function assertValid(analysis) {
  const errors = [
    ...analysis.summary.globalErrors,
    ...analysis.levels.flatMap((level) =>
      level.errors.map((error) => `${level.id}: ${error}`),
    ),
  ];
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
  return analysis;
}

function main() {
  const analysis = assertValid(analyzeLevels());
  console.log(
    `100 關驗證通過：54張牌 ${analysis.summary.exactCardCountLevels}/100，` +
      `5欄階梯 ${analysis.summary.fiveColumnLayouts}/100，` +
      `5槽可解 ${analysis.summary.solvableWithFiveSlots}/100，` +
      `不同分類 ${analysis.summary.distinctCategoryCount}，` +
      `圖片牌 ${(analysis.summary.imageRatio * 100).toFixed(1)}%，失敗 0。`,
  );
}

if (require.main === module) {
  main();
}

module.exports = Object.freeze({
  EXPECTED_HEIGHTS,
  EXPECTED_TOTAL_CARDS,
  loadPublishedLevels,
  analyzeLevels,
  assertValid,
  replayKnownSolution,
});
