(function (root, factory) {
  const core = typeof module === 'object' && module.exports
    ? require('./core.js')
    : root.CatStorageCore;
  const api = factory(core);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatStorageRenderer = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (core) {
  'use strict';

  const CHAPTERS = ['整理入門', '紙箱派對', '房間整理', '搬家挑戰', '終極收納'];

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
  }

  function icon(name, className) {
    const paths = {
      back: '<path d="M30 10 14 24l16 14"/><path d="M15 24h25"/>',
      gear: '<path d="m24 8 3 5 6-1 2 6 5 3-3 6 3 5-5 4-2 6-6-2-3 5-5-5-6 2-2-6-5-3 3-6-3-5 5-4 2-6 6 2Z"/><circle cx="24" cy="24" r="7"/>',
      hint: '<path d="M16 22a10 10 0 1 1 16 8c-3 2-3 4-3 6H19c0-2 0-4-3-6a10 10 0 0 1 0-8Z"/><path d="M20 41h8"/>',
      undo: '<path d="m19 13-9 8 9 8"/><path d="M11 21h18a10 10 0 0 1 0 20h-6"/>',
      rotate: '<path d="M38 18a15 15 0 1 0 1 14"/><path d="m37 8 1 10-10-1"/>',
      flip: '<path d="M24 6v36"/><path d="m19 11-11 8 11 8Zm10 0 11 8-11 8Z"/>',
      replay: '<path d="M38 18a15 15 0 1 0 1 14"/><path d="m37 8 1 10-10-1"/>',
      zoom: '<circle cx="21" cy="21" r="12"/><path d="m30 30 10 10M21 14v14M14 21h14"/>',
      paw: '<ellipse cx="24" cy="31" rx="10" ry="8"/><circle cx="12" cy="22" r="4"/><circle cx="20" cy="14" r="4"/><circle cx="28" cy="14" r="4"/><circle cx="36" cy="22" r="4"/>',
      star: '<path d="m24 5 6 12 13 2-10 9 3 13-12-7-12 7 3-13-10-9 13-2Z"/>',
      clock: '<circle cx="24" cy="24" r="17"/><path d="M24 13v12l8 5"/>',
    };
    return `<svg class="${className || 'icon'}" viewBox="0 0 48 48" aria-hidden="true">${paths[name] || paths.paw}</svg>`;
  }

  function themeArt(theme) {
    const art = {
      'dried-fish': '<path d="M8 23c8-10 19-10 27 0-8 10-19 10-27 0Z"/><path d="m35 23 8-7v14Z"/><circle cx="16" cy="21" r="1.5"/>',
      'cat-can': '<ellipse cx="24" cy="13" rx="14" ry="5"/><path d="M10 13v22c0 3 28 3 28 0V13"/><path d="M17 26c4-4 10-4 14 0"/><circle cx="19" cy="23" r="1"/><circle cx="29" cy="23" r="1"/>',
      yarn: '<circle cx="24" cy="24" r="16"/><path d="M11 19c9-5 18-2 25 5M13 30c8-7 17-10 25-8M19 10c-1 11 6 19 17 24"/>',
      milk: '<path d="M15 10h17l5 8v21H13V15Z"/><path d="m15 10 8 6h14M23 16v23"/><path d="M16 28h18"/><circle cx="20" cy="23" r="1.5"/><circle cx="29" cy="23" r="1.5"/>',
      'paw-cookie': '<circle cx="24" cy="29" r="10"/><circle cx="12" cy="20" r="4"/><circle cx="20" cy="13" r="4"/><circle cx="29" cy="13" r="4"/><circle cx="37" cy="20" r="4"/>',
      scratcher: '<rect x="13" y="7" width="22" height="34" rx="4"/><path d="M18 10v28M23 10v28M28 10v28M33 10v28"/><circle cx="37" cy="31" r="5"/><path d="M37 26V16"/>',
      'sleep-mat': '<rect x="7" y="15" width="34" height="23" rx="8"/><path d="M16 28c3-9 13-9 16 0M18 22l3-5 3 5 3-5 3 5"/><circle cx="21" cy="27" r="1"/><circle cx="28" cy="27" r="1"/>',
      'fish-toy': '<path d="M8 25c8-9 18-9 26 0-8 8-18 8-26 0Z"/><path d="m34 25 9-8v16Z"/><path d="M17 22c5 1 8 4 10 8"/><circle cx="15" cy="23" r="1.5"/>',
      cardboard: '<path d="M7 18h34v22H7Z"/><path d="m7 18 7-9h20l7 9M14 9l10 9L34 9"/><path d="M19 29h10"/>',
      'grass-mat': '<rect x="7" y="13" width="34" height="28" rx="5"/><path d="M14 35c0-11 4-16 4-16 2 8 1 12 1 12 2-10 7-15 7-15 0 9-2 14-2 14 4-8 9-10 9-10-2 10-6 15-6 15"/>',
      teaser: '<path d="M10 38 34 12"/><path d="M34 12c5-5 10 1 6 6-4 4-10 1-8-4"/><circle cx="9" cy="39" r="3"/>',
      'cat-pillow': '<rect x="7" y="11" width="34" height="28" rx="9"/><path d="m15 22 3-7 5 6 7-6 3 7"/><path d="M17 29c4 5 10 5 14 0"/><circle cx="18" cy="27" r="1.5"/><circle cx="30" cy="27" r="1.5"/>',
    };
    return `<svg viewBox="0 0 48 48" aria-hidden="true">${art[theme] || art['paw-cookie']}</svg>`;
  }

  function catDecoration() {
    return `<svg viewBox="0 0 180 130" aria-hidden="true">
      <path class="cat-tail" d="M137 89c27 1 31 22 12 30"/>
      <path class="cat-body" d="M54 59c-1-27 13-43 36-43s39 17 37 44c24 8 33 32 22 53H42C28 91 35 68 54 59Z"/>
      <path class="cat-ear" d="m58 35 2-27 22 18m39 9-2-27-22 18"/>
      <ellipse class="cat-muzzle" cx="90" cy="62" rx="29" ry="25"/>
      <circle cx="78" cy="57" r="5"/><circle cx="103" cy="57" r="5"/>
      <path class="cat-nose" d="m90 65-4 4h8Z"/><path d="M90 70c-2 6-8 7-12 4m12-4c2 6 8 7 12 4"/>
      <ellipse class="cat-paw" cx="50" cy="105" rx="20" ry="13"/><ellipse class="cat-paw" cx="130" cy="105" rx="20" ry="13"/>
    </svg>`;
  }

  function pieceDimensions(cells) {
    return {
      rows: Math.max(...cells.map((cell) => cell[0])) + 1,
      columns: Math.max(...cells.map((cell) => cell[1])) + 1,
    };
  }

  function pieceMarkup(piece, placement, options) {
    const transformed = core.getTransformedCells(piece, placement.rotation, placement.flipped);
    const dimensions = pieceDimensions(transformed);
    const cellSet = new Set(transformed.map((cell) => cell.join(',')));
    const cells = [];
    for (let row = 0; row < dimensions.rows; row += 1) {
      for (let column = 0; column < dimensions.columns; column += 1) {
        const key = `${row},${column}`;
        if (!cellSet.has(key)) {
          cells.push('<span class="piece-void" aria-hidden="true"></span>');
          continue;
        }
        const neighbors = [
          cellSet.has(`${row - 1},${column}`) ? 'join-top' : '',
          cellSet.has(`${row + 1},${column}`) ? 'join-bottom' : '',
          cellSet.has(`${row},${column - 1}`) ? 'join-left' : '',
          cellSet.has(`${row},${column + 1}`) ? 'join-right' : '',
        ].filter(Boolean).join(' ');
        const art = row === transformed[0][0] && column === transformed[0][1]
          ? `<span class="piece-art">${themeArt(piece.theme)}</span>` : '';
        cells.push(`<span class="piece-cell ${neighbors}">${art}</span>`);
      }
    }
    const boardStyle = options.board
      ? `--piece-row:${placement.row};--piece-column:${placement.column};--shape-rows:${dimensions.rows};--shape-columns:${dimensions.columns};`
      : `--shape-rows:${dimensions.rows};--shape-columns:${dimensions.columns};`;
    const stateClass = [
      options.board ? 'piece-on-board' : 'piece-in-tray',
      options.selected ? 'is-selected' : '',
      options.hinted ? 'is-hinted' : '',
    ].filter(Boolean).join(' ');
    return `<button class="puzzle-piece ${stateClass}" type="button"
      style="${boardStyle}" data-piece-id="${escapeHtml(piece.id)}"
      aria-label="${escapeHtml(piece.label)}，${options.board ? '已放入收納箱' : '待放拼塊'}">
      <span class="piece-grid" style="--shape-rows:${dimensions.rows};--shape-columns:${dimensions.columns};">${cells.join('')}</span>
    </button>`;
  }

  function renderHome(progress) {
    const completed = Object.values(progress.records || {}).filter((record) => record.completed).length;
    const stars = Object.values(progress.records || {}).reduce((sum, record) => sum + (record.stars || 0), 0);
    return `<main class="home-screen screen">
      <a class="round-button portal-home" href="../../index.html" data-portal-home aria-label="返回遊戲小屋">${icon('back')}</a>
      <button class="round-button home-settings" type="button" data-action="settings" aria-label="設定">${icon('gear')}</button>
      <section class="home-card">
        <div class="home-cat">${catDecoration()}</div>
        <p class="eyebrow">暖呼呼空間拼圖</p>
        <h1>貓咪收納大師</h1>
        <p class="home-lead">旋轉、翻面、仔細安排，把每件貓咪用品完整收進木箱裡！</p>
        <div class="home-stats">
          <span>${icon('paw')}<strong>${completed}</strong> / 100 關</span>
          <span>${icon('star')}<strong>${stars}</strong> / 300 星</span>
        </div>
        <div class="home-actions">
          <button class="primary-button" type="button" data-action="start">開始遊戲</button>
          ${progress.currentSession ? '<button class="secondary-button" type="button" data-action="continue">繼續遊戲</button>' : ''}
          <button class="secondary-button" type="button" data-action="levels">選擇關卡</button>
          <button class="text-button" type="button" data-action="rules">遊戲規則</button>
        </div>
      </section>
      <div class="home-props" aria-hidden="true"><span class="yarn-ball"></span><span class="cardboard-box"></span></div>
    </main>`;
  }

  function renderLevelSelect(progress, chapter, page) {
    const start = (chapter - 1) * 20 + page * 10;
    const buttons = Array.from({ length: 10 }, (_, offset) => {
      const number = start + offset + 1;
      const id = `L${String(number).padStart(3, '0')}`;
      const record = progress.records[id];
      const locked = number > progress.unlockedLevel;
      return `<button class="level-button ${locked ? 'is-locked' : ''}" type="button"
        data-level-id="${id}" ${locked ? 'disabled aria-disabled="true"' : ''}>
        <span class="level-number">${number}</span>
        <span class="level-size">${escapeHtml((window.CAT_STORAGE_LEVELS || []).find((level) => level.id === id)?.rows || '')}×${escapeHtml((window.CAT_STORAGE_LEVELS || []).find((level) => level.id === id)?.columns || '')}</span>
        <span class="level-stars" aria-label="${record?.stars || 0} 顆星">${'★'.repeat(record?.stars || 0)}${'☆'.repeat(3 - (record?.stars || 0))}</span>
        <span class="level-record">${record ? `${record.bestMoves} 步 · ${core.formatElapsedTime(record.bestTime)}` : locked ? '尚未解鎖' : '等待收納'}</span>
      </button>`;
    }).join('');
    return `<main class="level-screen screen">
      <header class="page-header">
        <button class="round-button" type="button" data-action="home" aria-label="返回首頁">${icon('back')}</button>
        <div><p class="eyebrow">選擇你的收納挑戰</p><h1>選擇關卡</h1></div>
        <button class="round-button" type="button" data-action="settings" aria-label="設定">${icon('gear')}</button>
      </header>
      <nav class="chapter-tabs" aria-label="章節">
        ${CHAPTERS.map((name, index) => `<button type="button" data-chapter="${index + 1}" class="${chapter === index + 1 ? 'is-active' : ''}">${index + 1}<span>${name}</span></button>`).join('')}
      </nav>
      <section class="level-panel">
        <div class="chapter-heading"><span>第 ${chapter} 章</span><h2>${CHAPTERS[chapter - 1]}</h2></div>
        <div class="level-grid">${buttons}</div>
        <div class="pagination">
          <button type="button" data-page="0" class="${page === 0 ? 'is-active' : ''}">1–10</button>
          <button type="button" data-page="1" class="${page === 1 ? 'is-active' : ''}">11–20</button>
        </div>
      </section>
    </main>`;
  }

  function fixedMarkup(item, level) {
    return item.cells.map(([row, column], index) => `<div class="fixed-item fixed-${escapeHtml(item.type)}"
      style="--fixed-row:${row};--fixed-column:${column}" aria-label="${escapeHtml(item.label)}">
      ${index === 0 ? themeArt(item.type === 'yarn' ? 'yarn' : item.type === 'cardboard' ? 'cardboard' : 'sleep-mat') : ''}
    </div>`).join('');
  }

  function renderGame(level, state, progress, selectedPieceId, hintPieceId) {
    const occupancy = core.buildOccupancy(state, level);
    const stars = Object.values(progress.records || {}).reduce((sum, record) => sum + (record.stars || 0), 0);
    const baseCells = [];
    const blocked = new Set(level.blockedCells.map((cell) => cell.join(',')));
    const fixed = new Set(level.fixedItems.flatMap((item) => item.cells.map((cell) => cell.join(','))));
    const fillable = new Set(level.fillableCells.map((cell) => cell.join(',')));
    for (let row = 0; row < level.rows; row += 1) {
      for (let column = 0; column < level.columns; column += 1) {
        const key = `${row},${column}`;
        const type = blocked.has(key) ? 'blocked' : fixed.has(key) ? 'fixed' : fillable.has(key) ? 'fillable' : 'outside';
        baseCells.push(`<div class="board-cell cell-${type}" role="gridcell" tabindex="${row === 0 && column === 0 ? '0' : '-1'}"
          data-board-row="${row}" data-board-column="${column}" aria-label="第 ${row + 1} 列，第 ${column + 1} 欄，${type === 'fillable' ? occupancy[key] ? '已有拼塊' : '空格' : type === 'blocked' ? '障礙格' : type === 'fixed' ? '固定物品' : '不可放置'}"></div>`);
      }
    }
    const placed = level.pieces.filter((piece) => state.placements[piece.id].placed)
      .map((piece) => pieceMarkup(piece, state.placements[piece.id], {
        board: true,
        selected: piece.id === selectedPieceId,
        hinted: piece.id === hintPieceId,
      })).join('');
    const tray = level.pieces.filter((piece) => !state.placements[piece.id].placed)
      .map((piece) => pieceMarkup(piece, state.placements[piece.id], {
        board: false,
        selected: piece.id === selectedPieceId,
        hinted: piece.id === hintPieceId,
      })).join('');
    const remaining = core.getRemainingPieces(state, level).length;
    return `<main class="game-screen screen" data-game-status="${state.status}">
      <header class="game-header">
        <button class="round-button" type="button" data-action="levels" aria-label="返回選關">${icon('back')}</button>
        <div class="level-plaque"><span>第</span><strong>${Number(level.id.slice(1))}</strong><span>關</span></div>
        <button class="round-button" type="button" data-action="settings" aria-label="設定">${icon('gear')}</button>
      </header>
      <section class="status-row" aria-label="遊戲狀態">
        <div class="status-card">${icon('star')}<span>星星總數<strong>${stars} / 300</strong></span></div>
        <div class="status-card">${icon('paw')}<span>步數<strong>${state.movesUsed} / ${level.moveLimit}</strong></span></div>
        <div class="status-card">${icon('clock')}<span>時間<strong>${core.formatElapsedTime(state.elapsed)}</strong></span></div>
      </section>
      <section class="storage-stage">
        <div class="peek-cat">${catDecoration()}</div>
        <div class="wooden-box">
          <div class="board" role="grid" aria-label="${level.rows} 乘 ${level.columns} 收納箱"
            style="--board-rows:${level.rows};--board-columns:${level.columns}" data-board>
            ${baseCells.join('')}
            ${level.fixedItems.map((item) => fixedMarkup(item, level)).join('')}
            ${placed}
            <div class="placement-preview" data-placement-preview hidden></div>
          </div>
        </div>
        ${level.rows >= 8 ? `<button class="zoom-button" type="button" data-action="zoom">${icon('zoom')}放大收納箱</button>` : ''}
      </section>
      <section class="tray-panel" aria-label="待放拼塊區">
        <h2>待放拼塊區 <span>${remaining} 件</span></h2>
        <div class="piece-tray" data-piece-tray>${tray || '<p class="tray-empty">所有用品都放進箱子了！</p>'}</div>
      </section>
      <nav class="tool-bar" aria-label="遊戲工具">
        <button type="button" data-action="hint">${icon('hint')}<span>提示</span></button>
        <button type="button" data-action="undo" ${state.history.length ? '' : 'disabled'}>${icon('undo')}<span>復原</span></button>
        <button type="button" data-action="rotate" ${selectedPieceId ? '' : 'disabled'}>${icon('rotate')}<span>旋轉</span></button>
        <button type="button" data-action="flip" ${selectedPieceId && level.pieces.find((piece) => piece.id === selectedPieceId)?.allowFlip ? '' : 'disabled aria-disabled="true"'}>${icon('flip')}<span>翻面</span></button>
        <button type="button" data-action="replay">${icon('replay')}<span>重玩</span></button>
      </nav>
      <p class="instruction-bar" data-instruction>${remaining ? `還有 ${remaining} 個拼塊尚未放置。` : '檢查每個空格是否都完整填滿。'}</p>
    </main>`;
  }

  function showPreview(board, level, cells, valid) {
    clearPreview(board);
    for (const [row, column] of cells || []) {
      const cell = board.querySelector(`[data-board-row="${row}"][data-board-column="${column}"]`);
      if (cell) cell.classList.add(valid ? 'preview-valid' : 'preview-invalid');
    }
  }

  function clearPreview(board) {
    board?.querySelectorAll('.preview-valid,.preview-invalid').forEach((cell) =>
      cell.classList.remove('preview-valid', 'preview-invalid'));
  }

  return {
    CHAPTERS,
    escapeHtml,
    icon,
    themeArt,
    catDecoration,
    pieceMarkup,
    renderHome,
    renderLevelSelect,
    renderGame,
    showPreview,
    clearPreview,
  };
});
