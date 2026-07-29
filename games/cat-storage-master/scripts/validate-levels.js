'use strict';

const levels = require('../js/data/levels-index.js');
const { canonicalSignature } = require('./generate-levels.js');
const { validateLevelSet } = require('./level-validation.js');

function validateLevels() {
  return validateLevelSet(levels, canonicalSignature);
}

function main() {
  const result = validateLevels();
  process.stdout.write(`Levels: ${result.summary.levels} / 100\n`);
  process.stdout.write(`Unique solutions: ${result.summary.uniqueSolutions} / 100\n`);
  process.stdout.write(`Duplicate canonical levels: ${result.summary.duplicateCanonicalLevels}\n`);
  if (!result.passed) {
    process.stderr.write(`${result.errors.join('\n')}\n`);
    process.exitCode = 1;
  } else {
    process.stdout.write('Cat Storage validation passed.\n');
  }
}

if (require.main === module) main();

module.exports = { validateLevels };
