(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.CatZhuyinCore = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const ACCESSORIES = Object.freeze([
    ['hat', '探險帽'], ['scarf', '紅領巾'], ['backpack', '探險書包'], ['glasses', '圓眼鏡'], ['bow', '蝴蝶結'],
    ['crown', '皇冠'], ['badge', '星星徽章'], ['cape', '小斗篷'], ['magnifier', '放大鏡'], ['compass', '指南針'],
    ['binoculars', '望遠鏡'], ['rain-boots', '雨靴'], ['lantern', '露營燈'], ['map-pouch', '藏寶圖袋'], ['flower-garland', '花環'],
    ['sailor-cap', '水手帽'], ['feather', '幸運羽毛'], ['bell-collar', '鈴鐺項圈'], ['magic-wand', '星星魔法棒'], ['treasure-key', '寶藏鑰匙'],
  ].map(([id, label], index) => Object.freeze({ id, label, index })));

  const TONE_MARKS = new Set(['ˊ', 'ˇ', 'ˋ', '˙']);

  function phonemeDistance(left, right) {
    function tokens(value) {
      const characters = [...value];
      const tone = TONE_MARKS.has(characters.at(-1)) ? characters.pop() : 'ˉ';
      return [...characters, tone];
    }
    const leftTokens = tokens(left);
    const rightTokens = tokens(right);
    if (leftTokens.length !== rightTokens.length) return Number.POSITIVE_INFINITY;
    return leftTokens.reduce(
      (total, value, index) => total + (value === rightTokens[index] ? 0 : 1),
      0,
    );
  }

  function createInitialProgress() {
    return {
      version: 1,
      currentLevelId: 1,
      completedLevelIds: [],
      totalFish: 0,
      unlockedAccessories: [],
      equippedAccessory: null,
      levelStars: {},
      soundEnabled: true,
      gameComplete: false,
      pendingMilestones: [],
    };
  }

  function sanitizeProgress(input) {
    const source = input && typeof input === 'object' ? input : {};
    const numericIds = new Set(
      Array.isArray(source.completedLevelIds)
        ? source.completedLevelIds.filter((id) => Number.isInteger(id) && id >= 1 && id <= 100)
        : [],
    );
    const completedLevelIds = [];
    for (let id = 1; id <= 100 && numericIds.has(id); id += 1) {
      completedLevelIds.push(id);
    }

    const totalFish = completedLevelIds.length;
    const unlockedCount = Math.min(ACCESSORIES.length, Math.floor(totalFish / 5));
    const unlockedAccessories = ACCESSORIES.slice(0, unlockedCount).map((item) => item.id);
    const levelStars = {};
    const sourceStars = source.levelStars && typeof source.levelStars === 'object' ? source.levelStars : {};
    for (const id of completedLevelIds) {
      const value = Number(sourceStars[String(id)]);
      levelStars[String(id)] = Number.isInteger(value) ? Math.max(1, Math.min(3, value)) : 1;
    }

    const pendingMilestones = Array.isArray(source.pendingMilestones)
      ? source.pendingMilestones.flatMap((item) => {
        if (!item || typeof item !== 'object') return [];
        if (item.type === 'reward') {
          const accessory = ACCESSORIES[(totalFish / 5) - 1];
          return totalFish % 5 === 0
            && item.fish === totalFish
            && accessory
            && item.accessoryId === accessory.id
            ? [{ type: 'reward', accessoryId: accessory.id, fish: totalFish }]
            : [];
        }
        if (item.type === 'chapter') {
          const chapter = totalFish / 10;
          if (!Number.isInteger(chapter) || item.chapter !== chapter) return [];
          const start = totalFish - 9;
          const stars = Array.from({ length: 10 }, (_, offset) => levelStars[String(start + offset)] || 1)
            .reduce((sum, value) => sum + value, 0);
          return item.stars === stars ? [{ type: 'chapter', chapter, stars }] : [];
        }
        return item.type === 'complete' && totalFish === 100 ? [{ type: 'complete' }] : [];
      }).slice(0, 3)
      : [];
    const equippedAccessory = unlockedAccessories.includes(source.equippedAccessory)
      ? source.equippedAccessory
      : null;

    return {
      version: 1,
      currentLevelId: totalFish >= 100 ? 100 : totalFish + 1,
      completedLevelIds,
      totalFish,
      unlockedAccessories,
      equippedAccessory,
      levelStars,
      soundEnabled: source.soundEnabled !== false,
      gameComplete: totalFish === 100,
      pendingMilestones,
    };
  }

  function validateLevels(levels) {
    const errors = [];
    if (!Array.isArray(levels) || levels.length !== 100) {
      return ['題庫必須剛好包含 100 關'];
    }

    const ids = new Set();
    const words = new Set();
    const images = new Set();
    for (const [index, level] of levels.entries()) {
      if (!level || typeof level !== 'object') {
        errors.push(`第 ${index + 1} 關資料無效`);
        continue;
      }
      if (level.id !== index + 1 || ids.has(level.id)) {
        errors.push(`第 ${index + 1} 關 ID 必須唯一且連續`);
      }
      ids.add(level.id);
      if (!level.word || !level.zhuyin || !level.distractorZhuyin || !level.learningFocus) {
        errors.push(`第 ${index + 1} 關缺少必要欄位`);
      }
      if (level.zhuyin === level.distractorZhuyin) {
        errors.push(`第 ${index + 1} 關的兩個選項不可相同`);
      }
      if (level.zhuyin && level.distractorZhuyin && phonemeDistance(level.zhuyin, level.distractorZhuyin) !== 1) {
        errors.push(`第 ${index + 1} 關的干擾答案只能改變一個主要音素`);
      }
      if (!level.visual || !['image', 'emoji'].includes(level.visual.type) || !level.visual.value || !level.visual.alt) {
        errors.push(`第 ${index + 1} 關缺少圖片資料`);
      }
      words.add(level.word);
      if (level.visual && level.visual.type === 'image') images.add(level.visual.value);
    }
    if (words.size < 50) errors.push('題庫必須至少包含 50 個不同詞彙');
    if (images.size < 50) errors.push('題庫必須至少包含 50 張不同插圖');
    return errors;
  }

  function completeLevel(input, levelId, wrongAttempts) {
    const progress = sanitizeProgress(input);
    if (
      !Number.isInteger(levelId) ||
      levelId !== progress.currentLevelId ||
      progress.completedLevelIds.includes(levelId)
    ) {
      return { progress, addedMilestones: [] };
    }

    const stars = wrongAttempts <= 0 ? 3 : wrongAttempts === 1 ? 2 : 1;
    const completedLevelIds = [...progress.completedLevelIds, levelId];
    const totalFish = completedLevelIds.length;
    const levelStars = { ...progress.levelStars, [String(levelId)]: stars };
    const unlockedAccessories = [...progress.unlockedAccessories];
    const addedMilestones = [];

    if (totalFish % 5 === 0) {
      const accessory = ACCESSORIES[(totalFish / 5) - 1];
      if (accessory && !unlockedAccessories.includes(accessory.id)) {
        unlockedAccessories.push(accessory.id);
        addedMilestones.push({ type: 'reward', accessoryId: accessory.id, fish: totalFish });
      }
    }

    if (levelId % 10 === 0) {
      const start = levelId - 9;
      const chapterStars = Array.from({ length: 10 }, (_, offset) => levelStars[String(start + offset)] || 1)
        .reduce((sum, value) => sum + value, 0);
      addedMilestones.push({ type: 'chapter', chapter: levelId / 10, stars: chapterStars });
    }

    if (levelId === 100) {
      addedMilestones.push({ type: 'complete' });
    }

    return {
      progress: {
        ...progress,
        currentLevelId: levelId === 100 ? 100 : levelId + 1,
        completedLevelIds,
        totalFish,
        unlockedAccessories,
        levelStars,
        gameComplete: levelId === 100,
        pendingMilestones: [...progress.pendingMilestones, ...addedMilestones],
      },
      addedMilestones,
    };
  }

  return Object.freeze({
    ACCESSORIES,
    completeLevel,
    createInitialProgress,
    sanitizeProgress,
    validateLevels,
  });
});
