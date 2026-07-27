(function initCatConnectRenderer(root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatConnectRenderer = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createRenderer() {
  'use strict';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function buildBoard(board, level, config, handlers = {}) {
    const { rows, columns } = globalThis.CatConnectCore.getBoardDimensions(level);
    board.style.setProperty('--rows', rows);
    board.style.setProperty('--columns', columns);
    board.dataset.rows = rows;
    board.dataset.columns = columns;
    const cells = document.createElement('div');
    cells.className = 'board-cells';
    const endpoints = new Map();
    for (const pair of level.pairs) {
      endpoints.set(`${pair.start[0]},${pair.start[1]}`, pair);
      endpoints.set(`${pair.end[0]},${pair.end[1]}`, pair);
    }
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'board-cell';
        button.dataset.row = row;
        button.dataset.column = column;
        button.setAttribute('aria-label', `第 ${row + 1} 列，第 ${column + 1} 欄，空白`);
        const pair = endpoints.get(`${row},${column}`);
        if (pair) {
          const color = config.colors[pair.colorIndex % config.colors.length];
          button.classList.add('endpoint');
          button.dataset.pairId = pair.id;
          button.style.setProperty('--pair-dark', color.dark);
          const symbol = document.createElement('span');
          symbol.className = 'endpoint-symbol';
          symbol.textContent = pair.symbol;
          button.append(symbol);
          button.setAttribute(
            'aria-label',
            `第 ${row + 1} 列，第 ${column + 1} 欄，${color.name}${pair.symbol}貓咪端點`,
          );
        }
        button.addEventListener('pointerdown', handlers.pointerdown);
        button.addEventListener('keydown', handlers.keydown);
        cells.append(button);
      }
    }
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.classList.add('route-layer');
    svg.setAttribute('viewBox', `0 0 ${columns} ${rows}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    board.replaceChildren(cells, svg);
    return { cells, svg };
  }

  function renderRoutes(board, level, state, config) {
    const svg = board.querySelector('.route-layer');
    if (!svg) return;
    const fragments = [];
    for (const pair of level.pairs) {
      const path = state.paths[pair.id] || [];
      if (path.length === 0) continue;
      const points = path.map(([row, column]) => `${column + 0.5},${row + 0.5}`).join(' ');
      const color = config.colors[pair.colorIndex % config.colors.length];
      for (const className of ['route-line-shadow', 'route-line']) {
        const line = document.createElementNS(SVG_NS, 'polyline');
        line.setAttribute('points', points);
        line.classList.add(className);
        if (className === 'route-line') {
          line.setAttribute('stroke-width', '0.56');
          line.style.setProperty('--route-color', color.value);
        } else {
          line.setAttribute('stroke-width', '0.72');
        }
        fragments.push(line);
      }
    }
    svg.replaceChildren(...fragments);

    const occupancy = globalThis.CatConnectCore.buildOccupancy(state, level);
    for (const cell of board.querySelectorAll('.board-cell')) {
      if (cell.classList.contains('endpoint')) continue;
      const row = Number(cell.dataset.row);
      const column = Number(cell.dataset.column);
      const pairId = occupancy[row][column];
      const pair = level.pairs.find((item) => item.id === pairId);
      if (pair) {
        const color = config.colors[pair.colorIndex % config.colors.length];
        cell.setAttribute(
          'aria-label',
          `第 ${row + 1} 列，第 ${column + 1} 欄，${color.name}${pair.symbol}路線`,
        );
      } else {
        cell.setAttribute(
          'aria-label',
          `第 ${row + 1} 列，第 ${column + 1} 欄，空白`,
        );
      }
    }
  }

  function getCell(board, row, column) {
    return board.querySelector(
      `.board-cell[data-row="${row}"][data-column="${column}"]`,
    );
  }

  function flashInvalid(board) {
    board.classList.remove('invalid');
    void board.offsetWidth;
    board.classList.add('invalid');
    window.setTimeout(() => board.classList.remove('invalid'), 300);
  }

  return Object.freeze({ buildBoard, renderRoutes, getCell, flashInvalid });
});
