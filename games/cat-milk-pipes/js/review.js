(function () {
  'use strict';
  const Levels = window.CAT_MILK_LEVELS;
  const Core = window.CatMilkPipeCore;
  const Renderer = window.CatMilkPipeRenderer;
  let filtered = [...Levels];
  let selectedIndex = 0;
  let showSolution = false;
  const query = (selector) => document.querySelector(selector);

  function applyFilters() {
    const search = query('[data-review-search]').value.trim().toLowerCase();
    const chapter = query('[data-review-chapter]').value;
    const size = query('[data-review-size]').value;
    filtered = Levels.filter((level) => (
      (!search || `${level.id} ${level.title}`.toLowerCase().includes(search))
      && (!chapter || level.chapter === Number(chapter))
      && (!size || level.size === Number(size))
    ));
    selectedIndex = Math.min(selectedIndex, Math.max(0, filtered.length - 1));
    render();
  }

  function renderList() {
    query('[data-review-list]').replaceChildren(...filtered.map((level, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'level-card';
      button.dataset.reviewIndex = index;
      button.setAttribute('aria-current', String(index === selectedIndex));
      button.innerHTML = `<span class="level-top"><span>${level.id}</span><span>${level.size}×${level.size}</span></span><strong>${level.title}</strong><span class="record">${level.metrics.activeTileCount} 格 · ${level.metrics.bowlCount} 碗</span>`;
      return button;
    }));
  }

  function renderDetail() {
    const level = filtered[selectedIndex];
    const detail = query('[data-review-detail]');
    if (!level) {
      detail.innerHTML = '<p>沒有符合條件的關卡。</p>';
      query('[data-review-position]').textContent = '0 / 0';
      return;
    }
    const state = Core.createInitialState(level);
    if (showSolution) {
      for (let row = 0; row < level.size; row += 1) {
        for (let column = 0; column < level.size; column += 1) {
          if (level.tiles[row][column]) state.rotations[row][column] = level.tiles[row][column].solutionRotation;
        }
      }
    }
    detail.innerHTML = `<p class="eyebrow">第${level.chapter}章 · ${showSolution ? '固定解答' : '初始盤面'}</p><h2>${level.id} ${level.title}</h2>
      <div class="pipe-board" role="grid" data-review-board></div>
      <div class="result-grid" style="margin-top:16px">
        <div><span>有效格／貓碗</span><b>${level.metrics.activeTileCount}／${level.metrics.bowlCount}</b></div>
        <div><span>鎖定格</span><b>${level.metrics.lockedTileCount}</b></div>
        <div><span>直／彎／T／十字</span><b>${level.metrics.straightCount || 0}／${level.metrics.elbowCount || 0}／${level.metrics.teeCount || 0}／${level.metrics.crossCount || 0}</b></div>
        <div><span>最佳／上限</span><b>${level.optimalMoves}／${level.moveLimit}</b></div>
        <div><span>難度分數</span><b>${level.difficultyScore}</b></div>
        <div><span>解答／節點／回溯</span><b>${level.metrics.solutionCount}／${level.metrics.solverNodes}／${level.metrics.solverBacktracks}</b></div>
      </div>
      <p style="word-break:break-all;color:var(--muted);font-size:.7rem"><b>Canonical signature</b><br>${level.metrics.canonicalSignature}</p>`;
    Renderer.renderBoard(query('[data-review-board]'), state, level, { showLeaks: true });
    query('[data-review-position]').textContent = `${selectedIndex + 1} / ${filtered.length}`;
  }

  function render() { renderList(); renderDetail(); }
  document.addEventListener('input', (event) => {
    if (event.target.matches('[data-review-search], [data-review-chapter], [data-review-size]')) applyFilters();
  });
  document.addEventListener('change', (event) => {
    if (event.target.matches('[data-review-chapter], [data-review-size]')) applyFilters();
  });
  document.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    if (target.matches('[data-review-index]')) { selectedIndex = Number(target.dataset.reviewIndex); render(); }
    else if (target.matches('[data-toggle-solution]')) {
      showSolution = !showSolution;
      target.textContent = showSolution ? '隱藏解答' : '顯示解答';
      renderDetail();
    } else if (target.matches('[data-review-previous]')) { selectedIndex = Math.max(0, selectedIndex - 1); render(); }
    else if (target.matches('[data-review-next]')) { selectedIndex = Math.min(filtered.length - 1, selectedIndex + 1); render(); }
  });
  render();
})();
