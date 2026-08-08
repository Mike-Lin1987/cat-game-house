const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { makeLevel } = require('./level-factory.js');
const Config = require('../js/config.js');

const gameRoot = path.resolve(__dirname, '..');
const dataRoot = path.join(gameRoot, 'js', 'data');
const stagingRoot = path.join(gameRoot, '.staging-data');
const backupRoot = path.join(gameRoot, '.previous-data');
const args = process.argv.slice(2);
const levelArg = args.indexOf('--level');
const chapterArg = args.indexOf('--chapter');
const resume = args.includes('--resume');
const force = args.includes('--force');
const totalLevels = Config.totalLevels;
if (resume && force) throw new Error('--resume 與 --force 不可同時使用');
const requestedLevel = levelArg >= 0 ? Number(args[levelArg + 1]) : null;
const requestedChapter = chapterArg >= 0 ? Number(args[chapterArg + 1]) : null;
let resumedLevels = new Map();
if (resume && fs.existsSync(path.join(dataRoot, 'levels-index.js'))) {
  const published = require(path.join(dataRoot, 'levels-index.js'));
  resumedLevels = new Map(published.map((level) => [level.number, level]));
}
const levels = [];
const signatures = new Set();
for (let number = 1; number <= totalLevels; number += 1) {
  if (requestedLevel && number !== requestedLevel) continue;
  const chapter = Config.chapterForLevel(number);
  if (requestedChapter && chapter.number !== requestedChapter) continue;
  let level = resumedLevels.get(number);
  if (!level) {
    for (let attempt = 0; attempt < 100; attempt += 1) {
      level = makeLevel(number, attempt);
      if (!signatures.has(level.canonicalSignature)) break;
    }
  }
  if (signatures.has(level.canonicalSignature)) throw new Error(`${level.id} D4 重複`);
  signatures.add(level.canonicalSignature);
  levels.push(level);
}
if (requestedLevel || requestedChapter) {
  process.stdout.write(`${JSON.stringify(levels, null, 2)}\n`);
  process.exit(0);
}
if (fs.existsSync(backupRoot)) {
  if (!fs.existsSync(dataRoot)) fs.renameSync(backupRoot, dataRoot);
  else fs.rmSync(backupRoot, { recursive: true, force: true });
}
fs.rmSync(stagingRoot, { recursive: true, force: true });
fs.mkdirSync(stagingRoot, { recursive: true });
const commonJsChunks = [];
const browserChunks = [];
for (const chapter of Config.chapters) {
  const chapterLevels = levels.filter((level) => level.chapter === chapter.number);
  const start = String(chapter.startLevel).padStart(3, '0');
  const end = String(chapter.endLevel).padStart(3, '0');
  const globalName = `CAT_TRIPLE_LEVELS_${start}_${end}`;
  const source = `(function(root,factory){const data=factory();if(typeof module==='object'&&module.exports)module.exports=data;else root.${globalName}=data;})(typeof globalThis!=='undefined'?globalThis:this,function(){return ${JSON.stringify(chapterLevels, null, 2)};});\n`;
  fs.writeFileSync(path.join(stagingRoot, `levels-${start}-${end}.js`), source);
  commonJsChunks.push(`require('./levels-${start}-${end}.js')`);
  browserChunks.push(`root.${globalName}||[]`);
}
const indexSource = `(function(root,factory){const data=factory(root);if(typeof module==='object'&&module.exports)module.exports=data;else root.CAT_TRIPLE_LEVELS=data;})(typeof globalThis!=='undefined'?globalThis:this,function(root){if(typeof module==='object'&&module.exports)return [].concat(${commonJsChunks.join(',')});return [].concat(${browserChunks.join(',')});});\n`;
fs.writeFileSync(path.join(stagingRoot, 'levels-index.js'), indexSource);
const stagedIndex = path.join(stagingRoot, 'levels-index.js');
delete require.cache[require.resolve(stagedIndex)];
const stagedLevels = require(stagedIndex);
const validation = require('./level-validation.js').validateAll(stagedLevels);
if (!validation.valid) {
  fs.rmSync(stagingRoot, { recursive: true, force: true });
  const failures = validation.results.filter((item) => !item.valid)
    .map((item) => `${item.id}: ${item.errors.join('；')}`).join('\n');
  throw new Error(`staging 完整驗證失敗，正式資料未變更。\n${failures}`);
}
fs.rmSync(backupRoot, { recursive: true, force: true });
let previousMoved = false;
try {
  if (fs.existsSync(dataRoot)) {
    fs.renameSync(dataRoot, backupRoot);
    previousMoved = true;
  }
  fs.renameSync(stagingRoot, dataRoot);
  fs.rmSync(backupRoot, { recursive: true, force: true });
} catch (error) {
  if (!fs.existsSync(dataRoot) && previousMoved && fs.existsSync(backupRoot)) {
    fs.renameSync(backupRoot, dataRoot);
  }
  throw error;
}
const digest = crypto.createHash('sha256').update(JSON.stringify(levels)).digest('hex');
process.stdout.write(`已產生 ${totalLevels} 關，資料 SHA-256 ${digest}\n`);
