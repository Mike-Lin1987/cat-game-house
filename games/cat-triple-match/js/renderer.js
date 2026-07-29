(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleRenderer = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function createRenderer(elements, icons) {
    function tileMarkup(tile, symbol, exposed, size) {
      const left = tile.x / size * 100;
      const top = tile.y / size * 100;
      const tileSize = 2 / size * 100;
      return `<button role="gridcell" class="game-tile layer-${tile.layer}${exposed ? ' exposed' : ' blocked'}"`
        + ` data-tile-id="${tile.id}" style="--x:${left}%;--y:${top}%;--s:${tileSize}%;--layer:${tile.layer}"`
        + ` aria-label="${icons.label(symbol)}，${exposed ? '可選取' : '被上層卡牌遮住'}" ${exposed ? '' : 'disabled'}>`
        + `${icons.markup(symbol)}<span class="layer-mark">${tile.layer + 1}</span></button>`;
    }
    function renderBoard(level, state, exposedIds) {
      const exposed = new Set(exposedIds);
      const tileMap = new Map(level.tiles.map((tile) => [tile.id, tile]));
      elements.board.style.setProperty('--units', level.layout.unitColumns);
      elements.board.innerHTML = state.remainingTileIds.map((id) => {
        const tile = tileMap.get(id);
        return tileMarkup(tile, state.symbolByTileId[id], exposed.has(id), level.layout.unitColumns);
      }).join('');
    }
    function renderTray(state) {
      const slots = Array.from({ length: 9 }, (_, index) => {
        const id = state.trayTileIds[index];
        return `<div class="tray-slot${id ? ' occupied' : ''}" aria-label="暫存槽 ${index + 1}">`
          + (id ? icons.markup(state.symbolByTileId[id]) : '') + '</div>';
      });
      elements.tray.innerHTML = slots.join('');
    }
    function playEffects(effects) {
      if (effects.some((effect) => effect.type === 'match')) {
        elements.tray.classList.remove('is-matching');
        void elements.tray.offsetWidth;
        elements.tray.classList.add('is-matching');
      }
    }
    return { renderBoard, renderTray, playEffects };
  }
  return { createRenderer };
});
