(function (root) {
  'use strict';

  const Core = root.CatCourierCore;
  const Solver = root.CatCourierSolver;
  const Icons = root.CatCourierIcons;
  const Levels = root.CAT_COURIER_LEVELS || [];
  const content = root.document.getElementById('review-content');
  const search = root.document.getElementById('review-search');
  const chapter = root.document.getElementById('review-chapter');
  const size = root.document.getElementById('review-size');
  const stops = root.document.getElementById('review-stops');
  const solutionButton = root.document.getElementById('review-solution');
  const playButton = root.document.getElementById('review-play');
  const prev = root.document.getElementById('review-prev');
  const next = root.document.getElementById('review-next');
  const position = root.document.getElementById('review-position');
  let filtered = Levels;
  let index = 0;
  let showSolution = false;
  let playbackStep = Infinity;
  let playbackTimer = null;

  function terrainIcon(terrain) {
    return ['tree', 'crate', 'barrier', 'fence', 'water', 'bridge'].includes(terrain)
      ? Icons.get(terrain) : '';
  }

  function render() {
    if (!filtered.length) {
      content.innerHTML = '<div class="review-empty">沒有符合條件的關卡。</div>';
      position.textContent = '0 / 0';
      return;
    }
    index = Math.max(0, Math.min(index, filtered.length - 1));
    const level = filtered[index];
    const stored = Core.validateStoredSolution(level);
    const solved = Solver.solveLevel({ ...level, solutionPath: undefined }, { maxSolutions: 2 });
    const visiblePath = showSolution
      ? level.solutionPath.slice(0, Math.min(level.solutionPath.length, playbackStep + 1)) : [];
    const points = visiblePath.map((cell) => `${cell[1] + .5},${cell[0] + .5}`).join(' ');
    position.textContent = `${level.id} · ${index + 1} / ${filtered.length}`;
    prev.disabled = index === 0;
    next.disabled = index === filtered.length - 1;
    content.innerHTML = `<article class="review-card">
      <section class="review-map-panel">
        <div class="review-map" style="--columns:${level.columns}">
          ${level.terrain.map((row, rowIndex) => row.map((terrain, columnIndex) => {
            const stop = level.stops.find((candidate) => (
              candidate.position[0] === rowIndex && candidate.position[1] === columnIndex
            ));
            const edge = level.oneWayEdges.find((candidate) => (
              candidate.from[0] === rowIndex && candidate.from[1] === columnIndex
            ));
            const isStart = level.start[0] === rowIndex && level.start[1] === columnIndex;
            return `<div class="review-cell ${terrain} ${isStart ? 'start' : ''}" title="${terrain}">
              ${terrainIcon(terrain)}
              ${stop ? `${Icons.get(stop.item)}<span class="order">${stop.order + 1}</span>` : ''}
              ${edge ? '<span class="arrow">➜</span>' : ''}
            </div>`;
          }).join('')).join('')}
          <svg class="review-route" viewBox="0 0 ${level.columns} ${level.rows}" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="${points}"></polyline>
          </svg>
        </div>
      </section>
      <section class="review-metrics">
        <p class="eyebrow">第 ${level.chapter} 章 · ${level.rows}×${level.columns}</p>
        <h2>${level.id} · ${level.title}</h2>
        <p class="validation-pass">${stored.valid && solved.optimalSolutionCount === 1 ? '✓ 資料、保存答案與獨立求解通過' : '驗證未通過'}</p>
        <dl class="metric-grid">
          <div><dt>配送站</dt><dd>${level.stops.length}</dd></div>
          <div><dt>最佳步數</dt><dd>${level.optimalSteps}</dd></div>
          <div><dt>油量上限</dt><dd>${level.fuelLimit}</dd></div>
          <div><dt>唯一最短解</dt><dd>${solved.optimalSolutionCount}</dd></div>
          <div><dt>難度分數</dt><dd>${level.difficultyScore}</dd></div>
          <div><dt>單行道</dt><dd>${level.oneWayEdges.length}</dd></div>
          <div><dt>Solver nodes</dt><dd>${solved.nodesVisited}</dd></div>
          <div><dt>Backtracks</dt><dd>${solved.backtracks}</dd></div>
          <div><dt>Max depth</dt><dd>${solved.maxDepth}</dd></div>
          <div><dt>Seed</dt><dd>${level.seed}</dd></div>
          <div><dt>Passable</dt><dd>${level.metrics.passableCellCount}</dd></div>
          <div><dt>Branches</dt><dd>${level.metrics.branchCellCount}</dd></div>
          <div style="grid-column:1/-1"><dt>Canonical signature</dt><dd>${level.metrics.canonicalSignature}</dd></div>
        </dl>
      </section>
    </article>`;
  }

  function applyFilters() {
    const query = search.value.trim().toUpperCase();
    filtered = Levels.filter((level) => (
      (!query || level.id.includes(query))
      && (!chapter.value || level.chapter === Number(chapter.value))
      && (!size.value || level.rows === Number(size.value))
      && (!stops.value || level.stops.length === Number(stops.value))
    ));
    index = 0;
    playbackStep = Infinity;
    render();
  }

  [search, chapter, size, stops].forEach((element) => element.addEventListener('input', applyFilters));
  solutionButton.addEventListener('click', () => {
    showSolution = !showSolution;
    solutionButton.setAttribute('aria-pressed', String(showSolution));
    solutionButton.textContent = showSolution ? '隱藏答案' : '顯示答案';
    playbackStep = Infinity;
    render();
  });
  playButton.addEventListener('click', () => {
    if (!filtered.length) return;
    root.clearInterval(playbackTimer);
    showSolution = true;
    solutionButton.setAttribute('aria-pressed', 'true');
    solutionButton.textContent = '隱藏答案';
    playbackStep = 0;
    render();
    playbackTimer = root.setInterval(() => {
      playbackStep += 1;
      if (playbackStep >= filtered[index].solutionPath.length - 1) root.clearInterval(playbackTimer);
      render();
    }, 110);
  });
  prev.addEventListener('click', () => { index -= 1; playbackStep = Infinity; render(); });
  next.addEventListener('click', () => { index += 1; playbackStep = Infinity; render(); });
  render();
})(typeof globalThis !== 'undefined' ? globalThis : this);
