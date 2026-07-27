(function initCatPuzzleCore(root, factory) {
  'use strict';

  const api = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CatPuzzleCore = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createCatPuzzleCore() {
  'use strict';

  const CELL_STATE = Object.freeze({
    EMPTY: 0,
    X: 1,
    CAT: 2,
  });

  function cycleCellState(currentState) {
    if (currentState === CELL_STATE.EMPTY) {
      return CELL_STATE.X;
    }

    if (currentState === CELL_STATE.X) {
      return CELL_STATE.CAT;
    }

    return CELL_STATE.EMPTY;
  }

  function canonicalizeRegions(regions) {
    const labels = new Map();
    let nextLabel = 0;

    return regions.map((row) =>
      row.map((regionId) => {
        if (!labels.has(regionId)) {
          labels.set(regionId, nextLabel);
          nextLabel += 1;
        }

        return labels.get(regionId);
      }),
    );
  }

  function isRegionConnected(regions, regionId) {
    if (!Array.isArray(regions) || regions.length === 0) {
      return false;
    }

    const height = regions.length;
    const width = Array.isArray(regions[0]) ? regions[0].length : 0;
    const cells = [];

    for (let row = 0; row < height; row += 1) {
      for (let column = 0; column < width; column += 1) {
        if (regions[row][column] === regionId) {
          cells.push([row, column]);
        }
      }
    }

    if (cells.length === 0) {
      return false;
    }

    const queue = [cells[0]];
    const visited = new Set([`${cells[0][0]},${cells[0][1]}`]);
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let index = 0; index < queue.length; index += 1) {
      const [row, column] = queue[index];

      for (const [rowDelta, columnDelta] of directions) {
        const nextRow = row + rowDelta;
        const nextColumn = column + columnDelta;
        const key = `${nextRow},${nextColumn}`;

        if (
          nextRow >= 0 &&
          nextRow < height &&
          nextColumn >= 0 &&
          nextColumn < width &&
          regions[nextRow][nextColumn] === regionId &&
          !visited.has(key)
        ) {
          visited.add(key);
          queue.push([nextRow, nextColumn]);
        }
      }
    }

    return visited.size === cells.length;
  }

  function collectCats(board) {
    const cats = [];

    for (let row = 0; row < board.length; row += 1) {
      for (let column = 0; column < board[row].length; column += 1) {
        if (board[row][column] === CELL_STATE.CAT) {
          cats.push({ row, column });
        }
      }
    }

    return cats;
  }

  function findConflicts(board, level) {
    const cats = collectCats(board);
    const reasonMap = new Map();

    function addReason(cat, reason) {
      const key = `${cat.row},${cat.column}`;
      if (!reasonMap.has(key)) {
        reasonMap.set(key, {
          row: cat.row,
          column: cat.column,
          reasons: new Set(),
        });
      }
      reasonMap.get(key).reasons.add(reason);
    }

    function markDuplicateGroups(keyForCat, reason) {
      const groups = new Map();

      for (const cat of cats) {
        const key = keyForCat(cat);
        if (!groups.has(key)) {
          groups.set(key, []);
        }
        groups.get(key).push(cat);
      }

      for (const group of groups.values()) {
        if (group.length > 1) {
          for (const cat of group) {
            addReason(cat, reason);
          }
        }
      }
    }

    markDuplicateGroups((cat) => cat.row, 'row');
    markDuplicateGroups((cat) => cat.column, 'column');
    markDuplicateGroups((cat) => level.regions[cat.row][cat.column], 'region');

    for (let leftIndex = 0; leftIndex < cats.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < cats.length; rightIndex += 1) {
        const left = cats[leftIndex];
        const right = cats[rightIndex];
        const rowDistance = Math.abs(left.row - right.row);
        const columnDistance = Math.abs(left.column - right.column);

        if (rowDistance <= 1 && columnDistance <= 1) {
          addReason(left, 'adjacent');
          addReason(right, 'adjacent');
        }
      }
    }

    const reasonOrder = ['row', 'column', 'region', 'adjacent'];
    const cells = Array.from(reasonMap.values())
      .map((cell) => ({
        row: cell.row,
        column: cell.column,
        reasons: Array.from(cell.reasons).sort(
          (left, right) => reasonOrder.indexOf(left) - reasonOrder.indexOf(right),
        ),
      }))
      .sort((left, right) => left.row - right.row || left.column - right.column);

    return {
      hasConflicts: cells.length > 0,
      cells,
    };
  }

  function validateBoard(board, level) {
    const errors = [];
    const size = level && level.size;

    if (
      !Array.isArray(board) ||
      board.length !== size ||
      board.some((row) => !Array.isArray(row) || row.length !== size)
    ) {
      errors.push('棋盤尺寸與關卡不符');
    }

    if (errors.length > 0) {
      return {
        valid: false,
        complete: false,
        catCount: 0,
        conflicts: { hasConflicts: false, cells: [] },
        errors,
      };
    }

    const catCount = collectCats(board).length;
    const conflicts = findConflicts(board, level);
    const complete = catCount === size && !conflicts.hasConflicts;

    return {
      valid: errors.length === 0,
      complete,
      catCount,
      conflicts,
      errors,
    };
  }

  function isLevelComplete(board, level) {
    return validateBoard(board, level).complete;
  }

  function getHintCell(board, level) {
    for (let row = 0; row < level.size; row += 1) {
      const column = level.solution[row];
      if (!board[row] || board[row][column] !== CELL_STATE.CAT) {
        return { row, column };
      }
    }

    return null;
  }

  function validateLevelDefinition(level) {
    const errors = [];

    if (!level || typeof level !== 'object') {
      return { valid: false, errors: ['關卡必須是物件'] };
    }

    const size = level.size;
    if (!Number.isInteger(size) || size < 4 || size > 12) {
      errors.push('size 必須是 4 到 12 的整數');
    }

    const hasSquareRegions =
      Number.isInteger(size) &&
      Array.isArray(level.regions) &&
      level.regions.length === size &&
      level.regions.every((row) => Array.isArray(row) && row.length === size);

    if (!hasSquareRegions) {
      errors.push('regions 必須是 size × size 矩陣');
    }

    if (!Array.isArray(level.solution) || level.solution.length !== size) {
      errors.push('solution 長度必須等於 size');
    }

    if (hasSquareRegions) {
      const regionIds = new Set(level.regions.flat());
      const expectedIds = Array.from({ length: size }, (_, index) => index);

      if (
        regionIds.size !== size ||
        expectedIds.some((regionId) => !regionIds.has(regionId))
      ) {
        errors.push('區域編號必須完整涵蓋 0 到 size - 1');
      } else {
        for (const regionId of expectedIds) {
          if (!isRegionConnected(level.regions, regionId)) {
            errors.push(`區域 ${regionId} 未連通`);
          }
        }
      }
    }

    if (Array.isArray(level.solution) && level.solution.length === size) {
      const usedColumns = new Set();
      const usedRegions = new Set();

      for (let row = 0; row < size; row += 1) {
        const column = level.solution[row];
        if (!Number.isInteger(column) || column < 0 || column >= size) {
          errors.push(`solution 第 ${row + 1} 列欄位無效`);
          continue;
        }
        if (usedColumns.has(column)) {
          errors.push('solution 欄位不可重複');
        }
        usedColumns.add(column);

        if (hasSquareRegions) {
          const regionId = level.regions[row][column];
          if (usedRegions.has(regionId)) {
            errors.push('solution 每個區域必須剛好一隻貓');
          }
          usedRegions.add(regionId);
        }

        if (row > 0 && Math.abs(column - level.solution[row - 1]) <= 1) {
          errors.push('solution 中相鄰列的貓咪不可接觸');
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  function countSolutions(level, limit = 2) {
    const size = level.size;
    const solution = Array(size).fill(-1);
    let count = 0;
    let firstSolution = null;
    const solutions = [];
    let nodesVisited = 0;
    let backtracks = 0;

    function search(row, usedColumnsMask, usedRegionsMask, previousColumn) {
      if (count >= limit) {
        return;
      }

      if (row === size) {
        count += 1;
        const foundSolution = solution.slice();
        solutions.push(foundSolution);
        firstSolution = firstSolution || foundSolution;
        return;
      }

      let placed = false;

      for (let column = 0; column < size; column += 1) {
        const columnBit = 1 << column;
        const regionId = level.regions[row][column];
        const regionBit = 1 << regionId;
        nodesVisited += 1;

        if (
          (usedColumnsMask & columnBit) !== 0 ||
          (usedRegionsMask & regionBit) !== 0 ||
          (row > 0 && Math.abs(column - previousColumn) <= 1)
        ) {
          continue;
        }

        placed = true;
        solution[row] = column;
        search(
          row + 1,
          usedColumnsMask | columnBit,
          usedRegionsMask | regionBit,
          column,
        );
        solution[row] = -1;

        if (count >= limit) {
          return;
        }
      }

      if (!placed) {
        backtracks += 1;
      }
    }

    search(0, 0, 0, -10);

    return {
      count,
      firstSolution,
      solutions,
      nodesVisited,
      backtracks,
    };
  }

  function formatElapsedTime(seconds) {
    const safeSeconds = Math.max(0, Math.floor(Number(seconds) || 0));
    const minutes = Math.floor(safeSeconds / 60);
    const remainder = safeSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  }

  return Object.freeze({
    CELL_STATE,
    cycleCellState,
    canonicalizeRegions,
    isRegionConnected,
    findConflicts,
    validateBoard,
    isLevelComplete,
    validateLevelDefinition,
    countSolutions,
    getHintCell,
    formatElapsedTime,
  });
});
