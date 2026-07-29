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

  function roleSvgFor(role, variant = 0) {
    if (role === 'source') {
      return `<svg class="role-icon source-icon" viewBox="0 0 100 100" aria-hidden="true">
        <ellipse class="icon-shadow" cx="50" cy="88" rx="27" ry="6"></ellipse>
        <path class="milk-bottle" d="M35 25h30v7c0 5 7 8 7 16v29c0 8-5 12-13 12H41c-8 0-13-4-13-12V48c0-8 7-11 7-16z"></path>
        <path class="milk-wave" d="M32 61c9-5 17 4 27-1 4-2 7-2 9-1v18c0 5-3 8-9 8H41c-6 0-9-3-9-8z"></path>
        <path class="bottle-shade" d="M61 33c7 5 7 9 7 17v25c0 6-3 9-9 10 3-5 4-11 4-18V45c0-5-1-9-2-12z"></path>
        <rect class="bottle-cap" x="34" y="15" width="32" height="14" rx="5"></rect>
        <path class="cap-shine" d="M41 19h17"></path>
        <path class="bottle-highlight" d="M39 37c-5 5-5 11-5 18"></path>
        <circle class="bottle-label" cx="50" cy="51" r="15"></circle>
        <ellipse class="paw-pad" cx="50" cy="55" rx="7" ry="6"></ellipse>
        <circle class="paw-toe" cx="40" cy="47" r="3.5"></circle>
        <circle class="paw-toe" cx="47" cy="44" r="3.5"></circle>
        <circle class="paw-toe" cx="55" cy="44" r="3.5"></circle>
        <circle class="paw-toe" cx="62" cy="48" r="3.5"></circle>
      </svg>`;
    }
    if (role === 'bowl') {
      const normalizedVariant = ((Number(variant) || 0) % 4 + 4) % 4;
      return `<svg class="role-icon bowl-icon bowl-variant-${normalizedVariant}" viewBox="0 0 100 100" aria-hidden="true">
        <ellipse class="icon-shadow" cx="50" cy="88" rx="34" ry="6"></ellipse>
        <path class="cat-ear" d="M25 39l3-25 19 17z"></path>
        <path class="cat-ear" d="M53 31l19-17 3 25z"></path>
        <path class="cat-ear-inner" d="M30 31l2-10 8 8z"></path>
        <path class="cat-ear-inner" d="M60 29l8-8 2 10z"></path>
        <rect class="cat-face" x="23" y="26" width="54" height="43" rx="22"></rect>
        <path class="cat-patch" d="M25 36q8-12 21-9-2 9-12 15z"></path>
        <ellipse class="cat-muzzle" cx="44" cy="55" rx="9" ry="7"></ellipse>
        <ellipse class="cat-muzzle" cx="56" cy="55" rx="9" ry="7"></ellipse>
        <path class="cat-brow" d="M34 41l9-2M57 39l9 2"></path>
        <circle class="cat-eye" cx="39" cy="47" r="3"></circle>
        <circle class="cat-eye" cx="61" cy="47" r="3"></circle>
        <circle class="cat-eye-shine" cx="40" cy="46" r="1"></circle>
        <circle class="cat-eye-shine" cx="62" cy="46" r="1"></circle>
        <path class="cat-nose" d="M46 53h8l-4 4z"></path>
        <path class="cat-mouth waiting-mouth" d="M44 59q6 3 12 0"></path>
        <path class="cat-mouth happy-mouth" d="M42 58q8 10 16 0"></path>
        <path class="cat-whiskers" d="M35 55L17 51M35 60L15 62M65 55l18-4M65 60l20 2"></path>
        <path class="bowl-body" d="M14 61h72l-8 20c-2 6-7 9-14 9H36c-7 0-12-3-14-9z"></path>
        <path class="bowl-milk" d="M18 62q16-7 32 0t32 0l-2 6H20z"></path>
        <path class="bowl-rim" d="M14 61q36 9 72 0"></path>
        <path class="bowl-paw" d="M38 68q5-7 10 0M53 68q5-7 10 0"></path>
        <circle class="bowl-badge" cx="50" cy="78" r="8"></circle>
        <ellipse class="badge-pad" cx="50" cy="80" rx="3.8" ry="3"></ellipse>
        <circle class="badge-toe" cx="45" cy="75" r="1.8"></circle>
        <circle class="badge-toe" cx="50" cy="73.5" r="1.8"></circle>
        <circle class="badge-toe" cx="55" cy="75" r="1.8"></circle>
      </svg>`;
    }
    return '';
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
        cell.insertAdjacentHTML(
          'beforeend',
          roleSvgFor(tile.role, row * level.size + column),
        );
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

  return Object.freeze({ renderBoard, svgFor, roleSvgFor, ariaLabel });
});
