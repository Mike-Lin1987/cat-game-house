(function (root, factory) {
  const core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatMilkPipeCore;
  const api = factory(core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatMilkPipeRenderer = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Core) {
  'use strict';

  const SHAPE_NAMES = {
    end: '端點管', straight: '直線管', elbow: '彎管', tee: 'T 型管', cross: '十字管',
  };
  const DIRECTION_NAMES = { U: '上方', R: '右方', D: '下方', L: '左方' };
  const ENDPOINTS = {
    U: [50, 0], R: [100, 50], D: [50, 100], L: [0, 50],
  };

  function svgFor(tile, rotation) {
    const connectors = Core.getTileConnectors(tile, rotation);
    const paths = connectors.map((direction) => {
      const [x, y] = ENDPOINTS[direction];
      return `<path class="pipe-outline" d="M50 50L${x} ${y}"></path><path class="pipe-fill" d="M50 50L${x} ${y}"></path>`;
    }).join('');
    return `<svg class="pipe-svg" viewBox="0 0 100 100" aria-hidden="true">${paths}<circle class="pipe-center" cx="50" cy="50" r="9"></circle></svg>`;
  }

  function ariaLabel(level, state, row, column, powered) {
    const tile = level.tiles[row][column];
    if (!tile) return `第${row + 1}列第${column + 1}格，障礙格`;
    const connectors = Core.getTileConnectors(tile, state.rotations[row][column])
      .map((direction) => DIRECTION_NAMES[direction]).join('與');
    const role = tile.role === 'source' ? '鮮奶槽'
      : tile.role === 'bowl' ? '貓咪碗' : SHAPE_NAMES[tile.shape];
    const status = tile.role === 'bowl' ? `，目前${powered ? '已' : '尚未'}收到鮮奶` : '';
    const action = Core.canRotateTile(level, row, column) ? '，可旋轉' : '，固定方向';
    return `第${row + 1}列第${column + 1}格，${role}，目前連接${connectors}${status}${action}`;
  }

  function renderBoard(element, state, level, settings = {}, hintKey = null) {
    const analysis = Core.analyzeBoard(state, level);
    const leaksByTile = new Map();
    for (const leak of analysis.leaks) {
      const key = `${leak.row},${leak.column}`;
      if (!leaksByTile.has(key)) leaksByTile.set(key, []);
      leaksByTile.get(key).push(leak.direction);
    }
    element.style.setProperty('--board-size', level.size);
    element.setAttribute('aria-rowcount', String(level.size));
    element.setAttribute('aria-colcount', String(level.size));
    const fragment = document.createDocumentFragment();
    for (let row = 0; row < level.size; row += 1) {
      for (let column = 0; column < level.size; column += 1) {
        const tile = level.tiles[row][column];
        const key = `${row},${column}`;
        if (!tile) {
          const blocked = document.createElement('div');
          blocked.className = 'pipe-cell blocked';
          blocked.setAttribute('role', 'gridcell');
          blocked.setAttribute('aria-label', ariaLabel(level, state, row, column, false));
          fragment.append(blocked);
          continue;
        }
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'pipe-cell';
        cell.dataset.row = row;
        cell.dataset.column = column;
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-rowindex', String(row + 1));
        cell.setAttribute('aria-colindex', String(column + 1));
        const powered = analysis.powered.has(key);
        if (powered) cell.classList.add('powered');
        if (hintKey === key) cell.classList.add('hinted');
        const rotatable = Core.canRotateTile(level, row, column);
        cell.setAttribute('aria-disabled', String(!rotatable));
        cell.tabIndex = rotatable ? 0 : -1;
        cell.setAttribute('aria-label', ariaLabel(level, state, row, column, powered));
        cell.innerHTML = svgFor(tile, state.rotations[row][column]);
        if (tile.role === 'source') {
          cell.insertAdjacentHTML('beforeend', '<span class="role-icon source" aria-hidden="true">奶</span>');
        } else if (tile.role === 'bowl') {
          cell.insertAdjacentHTML('beforeend', '<span class="role-icon bowl" aria-hidden="true"></span>');
        }
        if (tile.locked || tile.role === 'source' || tile.shape === 'cross') {
          cell.insertAdjacentHTML('beforeend', '<span class="locked-mark" aria-hidden="true">◆</span>');
        }
        if (settings.showLeaks !== false) {
          for (const direction of leaksByTile.get(key) || []) {
            cell.insertAdjacentHTML(
              'beforeend',
              `<span class="leak-drop leak-${direction}" aria-hidden="true"></span>`,
            );
          }
        }
        fragment.append(cell);
      }
    }
    element.replaceChildren(fragment);
    return analysis;
  }

  return Object.freeze({ renderBoard, svgFor, ariaLabel });
});
