(function initCatConnectConfig(root, factory) {
  'use strict';

  const config = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = config;
  }
  if (root) {
    root.CAT_CONNECT_CONFIG = config;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createConfig() {
  'use strict';

  return Object.freeze({
    gameTitle: '貓咪彩色連線',
    storageKey: 'cat-color-connect:v1',
    generatorVersion: '1.0.0',
    masterSeed: 0x43415432,
    colors: Object.freeze([
      Object.freeze({ name: '珊瑚紅', value: '#e45151', dark: '#a82f38' }),
      Object.freeze({ name: '海洋藍', value: '#287bc1', dark: '#185283' }),
      Object.freeze({ name: '森林綠', value: '#3b9363', dark: '#23623f' }),
      Object.freeze({ name: '蜂蜜黃', value: '#d79a18', dark: '#8f630c' }),
      Object.freeze({ name: '葡萄紫', value: '#8256b3', dark: '#59367f' }),
      Object.freeze({ name: '橘子橙', value: '#e56e2f', dark: '#a7461c' }),
      Object.freeze({ name: '湖水青', value: '#178d91', dark: '#0c5c61' }),
      Object.freeze({ name: '莓果粉', value: '#d84f8c', dark: '#96315f' }),
      Object.freeze({ name: '可可棕', value: '#8f6545', dark: '#61432d' }),
      Object.freeze({ name: '夜空藍', value: '#4455a8', dark: '#2c376f' }),
    ]),
    symbols: Object.freeze(['●', '★', '◆', '☾', '♥', '◈', '♟', '✿', '♣', '▲']),
    packs: Object.freeze([
      Object.freeze({
        id: '6x6',
        size: 6,
        rows: 6,
        columns: 6,
        title: '6×6 入門',
        levelCount: 40,
        chapters: Object.freeze([10, 10, 10, 10]),
        seedBase: 600000,
        tiers: Object.freeze([
          Object.freeze({ count: 10, name: '教學與簡單', pairCount: 4, longPathMinimum: 8, mutationMin: 12, mutationMax: 44 }),
          Object.freeze({ count: 10, name: '普通', pairCount: 5, longPathMinimum: 9, mutationMin: 24, mutationMax: 72 }),
          Object.freeze({ count: 10, name: '中等', pairCount: 5, longPathMinimum: 10, mutationMin: 48, mutationMax: 112 }),
          Object.freeze({ count: 10, name: '困難', pairCount: 6, longPathMinimum: 11, mutationMin: 80, mutationMax: 176 }),
        ]),
        maxAttempts: 100000,
        solverMaxNodes: 1000000,
        solverTimeoutMs: 10000,
      }),
      Object.freeze({
        id: '8x8',
        size: 8,
        rows: 8,
        columns: 8,
        title: '8×8 進階',
        levelCount: 35,
        chapters: Object.freeze([10, 10, 10, 5]),
        seedBase: 800000,
        tiers: Object.freeze([
          Object.freeze({ count: 10, name: '簡單', pairCount: 6, longPathMinimum: 12, mutationMin: 24, mutationMax: 88 }),
          Object.freeze({ count: 10, name: '普通', pairCount: 7, longPathMinimum: 14, mutationMin: 48, mutationMax: 144 }),
          Object.freeze({ count: 10, name: '困難', pairCount: 8, longPathMinimum: 16, mutationMin: 88, mutationMax: 216 }),
          Object.freeze({ count: 5, name: '專家', pairCount: 8, longPathMinimum: 18, mutationMin: 152, mutationMax: 304 }),
        ]),
        maxAttempts: 250000,
        solverMaxNodes: 5000000,
        solverTimeoutMs: 30000,
      }),
      Object.freeze({
        id: '10x10',
        size: 10,
        rows: 10,
        columns: 10,
        title: '10×10 挑戰',
        levelCount: 3,
        chapters: Object.freeze([3]),
        seedBase: 1000000,
        tiers: Object.freeze([
          Object.freeze({ count: 3, name: '大師', pairCount: 10, longPathMinimum: 18, mutationMin: 32, mutationMax: 128 }),
        ]),
        maxAttempts: 50000,
        solverMaxNodes: 5000000,
        solverTimeoutMs: 30000,
      }),
      Object.freeze({
        id: '6x8',
        rows: 6,
        columns: 8,
        title: '6×8 寬幅',
        levelCount: 10,
        chapters: Object.freeze([10]),
        seedBase: 680000,
        tiers: Object.freeze([
          Object.freeze({ count: 5, name: '普通', pairCount: 6, longPathMinimum: 10, mutationMin: 20, mutationMax: 72 }),
          Object.freeze({ count: 5, name: '困難', pairCount: 6, longPathMinimum: 12, mutationMin: 72, mutationMax: 160 }),
        ]),
        maxAttempts: 50000,
        solverMaxNodes: 3000000,
        solverTimeoutMs: 15000,
      }),
      Object.freeze({
        id: '6x10',
        rows: 6,
        columns: 10,
        title: '6×10 長廊',
        levelCount: 6,
        chapters: Object.freeze([6]),
        seedBase: 610000,
        tiers: Object.freeze([
          Object.freeze({ count: 3, name: '普通', pairCount: 6, longPathMinimum: 12, mutationMin: 24, mutationMax: 88 }),
          Object.freeze({ count: 3, name: '困難', pairCount: 6, longPathMinimum: 15, mutationMin: 88, mutationMax: 184 }),
        ]),
        maxAttempts: 50000,
        solverMaxNodes: 4000000,
        solverTimeoutMs: 20000,
      }),
      Object.freeze({
        id: '8x10',
        rows: 8,
        columns: 10,
        title: '8×10 專家',
        levelCount: 6,
        chapters: Object.freeze([6]),
        seedBase: 810000,
        tiers: Object.freeze([
          Object.freeze({ count: 3, name: '困難', pairCount: 8, longPathMinimum: 14, mutationMin: 32, mutationMax: 112 }),
          Object.freeze({ count: 3, name: '專家', pairCount: 8, longPathMinimum: 18, mutationMin: 112, mutationMax: 224 }),
        ]),
        maxAttempts: 100000,
        solverMaxNodes: 5000000,
        solverTimeoutMs: 30000,
      }),
    ]),
  });
});
