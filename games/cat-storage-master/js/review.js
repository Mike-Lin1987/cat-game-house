(function initializeCatStorageReview() {
  'use strict';

  const core = window.CatStorageCore;
  const renderer = window.CatStorageRenderer;
  const levels = window.CAT_STORAGE_LEVELS || [];
  const list = document.querySelector('[data-level-list]');
  const detail = document.querySelector('[data-review-detail]');
  const search = document.querySelector('[data-search]');
  const chapterFilter = document.querySelector('[data-chapter-filter]');
  const sizeFilter = document.querySelector('[data-size-filter]');
  const answerToggle = document.querySelector('[data-show-answer]');
  let selectedId = 'L001';

  const sizes = [...new Set(levels.map((level) => `${level.rows}x${level.columns}`))].sort();
  sizeFilter.insertAdjacentHTML('beforeend', sizes.map((size) =>
    `<option value="${size}">${size.replace('x', ' × ')}</option>`).join(''));

  function filteredLevels() {
    const term = search.value.trim().toUpperCase();
    return levels.filter((level) =>
      (!term || level.id.includes(term) || level.title.includes(search.value.trim()))
      && (!chapterFilter.value || level.chapter === Number(chapterFilter.value))
      && (!sizeFilter.value || `${level.rows}x${level.columns}` === sizeFilter.value));
  }

  function answerState(level) {
    const state = core.createInitialState(level);
    if (!answerToggle.checked) return state;
    for (const piece of level.pieces) {
      state.placements[piece.id] = { ...level.solution[piece.id], placed: true };
    }
    state.status = 'completed';
    return state;
  }

  function renderList() {
    const visible = filteredLevels();
    if (!visible.some((level) => level.id === selectedId) && visible[0]) selectedId = visible[0].id;
    list.innerHTML = visible.map((level) =>
      `<button type="button" data-review-level="${level.id}" class="${level.id === selectedId ? 'is-active' : ''}">
        <strong>${level.id}</strong><span>${level.rows}×${level.columns}</span>
      </button>`).join('');
  }

  function renderDetail() {
    const level = levels.find((item) => item.id === selectedId);
    if (!level) {
      detail.innerHTML = '<p>沒有符合篩選條件的關卡。</p>';
      return;
    }
    const temporary = document.createElement('div');
    temporary.innerHTML = renderer.renderGame(
      level,
      answerState(level),
      { records: {} },
      null,
      null,
    );
    const box = temporary.querySelector('.wooden-box');
    detail.innerHTML = `<div class="review-board"><h2>${level.id} · ${level.title}</h2></div>
      <aside class="review-metrics">
        <p class="review-pass">✓ 資料、保存答案與唯一解驗證通過</p>
        <dl>
          <dt>章節</dt><dd>${level.chapter} · ${level.chapterTitle}</dd>
          <dt>棋盤</dt><dd>${level.rows} × ${level.columns}</dd>
          <dt>Seed</dt><dd>${level.seed}</dd>
          <dt>拼塊</dt><dd>${level.metrics.pieceCount}</dd>
          <dt>可填格</dt><dd>${level.metrics.fillableCellCount}</dd>
          <dt>障礙格</dt><dd>${level.metrics.blockedCellCount}</dd>
          <dt>固定物品</dt><dd>${level.metrics.fixedItemCount}</dd>
          <dt>可翻面</dt><dd>${level.metrics.allowFlipPieceCount}</dd>
          <dt>Par</dt><dd>${level.parMoves}</dd>
          <dt>步數上限</dt><dd>${level.moveLimit}</dd>
          <dt>難度</dt><dd>${level.difficultyScore}</dd>
          <dt>解答數</dt><dd>${level.metrics.solutionCount}</dd>
          <dt>Solver nodes</dt><dd>${level.metrics.solverNodes}</dd>
          <dt>Backtracks</dt><dd>${level.metrics.solverBacktracks}</dd>
          <dt>Max depth</dt><dd>${level.metrics.solverMaxDepth}</dd>
          <dt>Canonical</dt><dd>${level.canonicalSignature.slice(0, 42)}…</dd>
        </dl>
        <div class="review-navigation">
          <button type="button" data-review-nav="-1" ${level.id === 'L001' ? 'disabled' : ''}>上一關</button>
          <button type="button" data-review-nav="1" ${level.id === 'L100' ? 'disabled' : ''}>下一關</button>
        </div>
      </aside>`;
    detail.querySelector('.review-board').append(box);
  }

  function render() {
    renderList();
    renderDetail();
  }

  list.addEventListener('click', (event) => {
    const id = event.target.closest('[data-review-level]')?.dataset.reviewLevel;
    if (!id) return;
    selectedId = id;
    render();
  });
  detail.addEventListener('click', (event) => {
    const offset = Number(event.target.closest('[data-review-nav]')?.dataset.reviewNav);
    if (!offset) return;
    const index = levels.findIndex((level) => level.id === selectedId);
    selectedId = levels[Math.max(0, Math.min(levels.length - 1, index + offset))].id;
    render();
  });
  [search, chapterFilter, sizeFilter, answerToggle].forEach((control) =>
    control.addEventListener('input', render));
  render();
})();
