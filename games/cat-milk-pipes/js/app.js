(function () {
  'use strict';

  const Config = window.CAT_MILK_PIPE_CONFIG;
  const Core = window.CatMilkPipeCore;
  const Storage = window.CatMilkPipeStorage;
  const Renderer = window.CatMilkPipeRenderer;
  const Levels = window.CAT_MILK_LEVELS;
  const CHAPTER_NAMES = ['送奶入門', '分流管線', '貓咪社區', '鮮奶工廠', '全城送奶'];
  const screens = Object.fromEntries(
    [...document.querySelectorAll('[data-screen]')].map((element) => [element.dataset.screen, element]),
  );
  const board = document.querySelector('[data-board]');
  const boardHome = document.querySelector('[data-board-home]');
  const resultDialog = document.querySelector('[data-result-dialog]');
  const settingsDialog = document.querySelector('[data-settings-dialog]');
  const largeDialog = document.querySelector('[data-large-dialog]');
  let progress = Storage.loadProgress();
  let currentLevel = null;
  let state = null;
  let currentScreen = 'home';
  let selectedChapter = 1;
  let selectedPage = 1;
  let hintTimeout = null;
  let lastFocused = null;

  function query(selector) { return document.querySelector(selector); }
  function levelNumber(id) { return Number(id.slice(1)); }
  function totalStars() {
    return Object.values(progress.records).reduce((sum, record) => sum + record.stars, 0);
  }
  function completedCount() {
    return Object.values(progress.records).filter((record) => record.completed).length;
  }

  function showScreen(name) {
    currentScreen = name;
    for (const [screenName, element] of Object.entries(screens)) {
      element.classList.toggle('is-active', screenName === name);
    }
    window.scrollTo(0, 0);
    if (name === 'home') renderHome();
    if (name === 'levels') renderLevels();
  }

  function renderHome() {
    query('[data-home-progress]').textContent = `${completedCount()} / ${Config.totalLevels}`;
    query('[data-home-stars]').textContent = `${totalStars()} / 300 顆星`;
    const saved = progress.currentSession;
    query('[data-continue]').hidden = !saved
      || !Levels.some((level) => level.id === saved.levelId);
  }

  function renderChapterTabs() {
    const tabs = query('[data-chapter-tabs]');
    tabs.replaceChildren(...CHAPTER_NAMES.map((name, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.role = 'tab';
      button.dataset.chapter = index + 1;
      button.setAttribute('aria-selected', String(selectedChapter === index + 1));
      button.textContent = `第${index + 1}章　${name}`;
      return button;
    }));
  }

  function renderLevels() {
    renderChapterTabs();
    const group = Levels.filter((level) => level.chapter === selectedChapter);
    const pageLevels = group.slice((selectedPage - 1) * 10, selectedPage * 10);
    query('[data-level-grid]').replaceChildren(...pageLevels.map((level) => {
      const index = levelNumber(level.id);
      const record = progress.records[level.id];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'level-card';
      button.dataset.levelId = level.id;
      button.disabled = index > progress.unlockedLevel;
      button.innerHTML = `<span class="level-top"><span>${level.id}</span><span>${level.size}×${level.size}</span></span>
        <strong>${level.title}</strong>
        <span class="stars" aria-label="${record?.stars || 0} 顆星">${'★'.repeat(record?.stars || 0)}${'☆'.repeat(3 - (record?.stars || 0))}</span>
        <span class="record">${button.disabled ? '尚未解鎖' : record ? `最佳 ${record.bestMoves} 步 · ${Core.formatElapsedTime(record.bestTime)}` : '等待送奶'}</span>`;
      return button;
    }));
    query('[data-page-label]').textContent = `第 ${selectedPage} / 2 頁`;
    query('[data-page-previous]').disabled = selectedPage === 1;
    query('[data-page-next]').disabled = selectedPage === 2;
  }

  function persistSession() {
    if (!currentLevel || !state || state.completed) return;
    progress.currentSession = Core.serializeSession(state);
    Storage.saveProgress(progress);
  }

  function loadLevel(levelId, resume = false) {
    const level = Levels.find((item) => item.id === levelId);
    if (!level || levelNumber(levelId) > progress.unlockedLevel) return;
    currentLevel = level;
    const restored = resume ? Core.deserializeSession(progress.currentSession, level) : null;
    if (resume && progress.currentSession && !restored) {
      progress.currentSession = null;
      Storage.saveProgress(progress);
    }
    state = restored || Core.createInitialState(level);
    showScreen('game');
    renderGame();
    if (progress.settings.largeBoard) openLargeBoard();
  }

  function statusMessage(analysis) {
    if (state.completed) return '所有貓咪都喝到鮮奶了！';
    if (analysis.connectedBowls < analysis.bowlCount) {
      return `還有 ${analysis.bowlCount - analysis.connectedBowls} 個貓咪碗沒有鮮奶。`;
    }
    if (analysis.leaks.length) return `目前有 ${analysis.leaks.length} 個管線接口洩漏。`;
    if (analysis.components.length > 1) return '有一組管線尚未連接。';
    if (analysis.cycle) return '管線形成迴圈，請重新調整。';
    return '管線快接好了，繼續檢查每一個接口。';
  }

  function renderGame(hintKey = null) {
    if (!currentLevel || !state) return;
    document.body.classList.toggle('no-animations', !progress.settings.animations);
    query('[data-chapter-name]').textContent = `第${currentLevel.chapter}章 · ${CHAPTER_NAMES[currentLevel.chapter - 1]}`;
    query('[data-level-title]').textContent = currentLevel.title;
    query('[data-level-number]').textContent = currentLevel.id;
    query('[data-board-size]').textContent = `${currentLevel.size}×${currentLevel.size}`;
    query('[data-moves]').textContent = `${Math.max(0, currentLevel.moveLimit - state.movesUsed)} / ${currentLevel.moveLimit}`;
    query('[data-time]').textContent = Core.formatElapsedTime(state.elapsed);
    query('[data-total-stars]').textContent = totalStars();
    const analysis = Renderer.renderBoard(board, state, currentLevel, progress.settings, hintKey);
    query('[data-bowls]').textContent = `${analysis.connectedBowls} / ${analysis.bowlCount}`;
    query('[data-powered]').textContent = `${analysis.powered.size} / ${analysis.activeTileCount}`;
    query('[data-leaks]').textContent = analysis.leaks.length;
    query('[data-status-message]').textContent = statusMessage(analysis);
    query('[data-undo]').disabled = state.undoHistory.length === 0 || state.completed || state.failed;
    query('[data-hint]').disabled = state.completed || state.failed;
    return analysis;
  }

  function finishLevel() {
    state.completed = true;
    const stars = Core.calculateStars(state, currentLevel);
    progress = Storage.updateRecord(progress, currentLevel.id, {
      stars, moves: state.movesUsed, time: state.elapsed,
    });
    Storage.saveProgress(progress);
    renderGame();
    query('[data-result-eyebrow]').textContent = currentLevel.id === 'L100' ? '全部送達' : '送奶成功';
    query('[data-result-title]').textContent = currentLevel.id === 'L100' ? '恭喜完成全部 100 關' : '關卡完成';
    query('[data-result-stars]').textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars);
    query('[data-result-details]').innerHTML = currentLevel.id === 'L100'
      ? `<div><span>完成總數</span><b>${completedCount()} / 100</b></div><div><span>總星數</span><b>${totalStars()} / 300</b></div><div><span>累計遊玩</span><b>${Core.formatElapsedTime(progress.stats.totalPlaySeconds)}</b></div><div><span>未滿三星</span><b>${Object.values(progress.records).filter((record) => record.stars < 3).length}</b></div>`
      : `<div><span>使用步數</span><b>${state.movesUsed}</b></div><div><span>最佳旋轉</span><b>${currentLevel.optimalMoves}</b></div><div><span>完成時間</span><b>${Core.formatElapsedTime(state.elapsed)}</b></div><div><span>提示次數</span><b>${state.hintsUsed}</b></div>`;
    query('[data-result-next]').hidden = currentLevel.id === 'L100';
    lastFocused = document.activeElement;
    resultDialog.showModal();
  }

  function failLevel() {
    state.failed = true;
    persistSession();
    query('[data-result-eyebrow]').textContent = '步數用完';
    query('[data-result-title]').textContent = '這次還沒送到';
    query('[data-result-stars]').textContent = '☆☆☆';
    query('[data-result-details]').innerHTML = '<div><span>建議</span><b>從貓咪碗反推方向</b></div><div><span>下一步</span><b>重新開始這一關</b></div>';
    query('[data-result-next]').hidden = true;
    resultDialog.showModal();
    renderGame();
  }

  function evaluateAfterAction() {
    if (Core.isPuzzleComplete(state, currentLevel)) finishLevel();
    else if (state.movesUsed >= currentLevel.moveLimit) failLevel();
    else {
      renderGame();
      persistSession();
    }
  }

  function restartLevel(skipConfirmation = false) {
    if (!skipConfirmation && !window.confirm('確定要重新開始這一關嗎？目前的管線方向會被重設。')) return;
    state = Core.createInitialState(currentLevel);
    if (resultDialog.open) resultDialog.close();
    renderGame();
    persistSession();
  }

  function useHint() {
    const hint = Core.getHint(state, currentLevel);
    if (!hint) {
      query('[data-status-message]').textContent = '目前方向都正確，再檢查是否有尚未接通的管線。';
      return;
    }
    state.hintsUsed += 1;
    state.lastHintKey = hint.key;
    query('[data-announcer]').textContent = hint.message;
    query('[data-status-message]').textContent = hint.message;
    renderGame(hint.key);
    persistSession();
    clearTimeout(hintTimeout);
    hintTimeout = setTimeout(() => renderGame(), 4000);
  }

  function focusNeighbor(cell, direction) {
    const row = Number(cell.dataset.row);
    const column = Number(cell.dataset.column);
    const target = Core.getNeighborPosition(row, column, direction);
    const candidates = [...board.querySelectorAll('button.pipe-cell:not([aria-disabled="true"])')];
    const next = candidates.find((element) => (
      Number(element.dataset.row) === target.row && Number(element.dataset.column) === target.column
    ));
    if (next) next.focus();
  }

  function openLargeBoard() {
    if (!currentLevel || largeDialog.open) return;
    query('[data-large-host]').append(board);
    largeDialog.showModal();
    query('[data-close-large]').focus();
  }

  function closeLargeBoard() {
    if (!largeDialog.open) return;
    boardHome.append(board);
    largeDialog.close();
    query('[data-large-board]').focus();
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('button, a');
    if (!target) return;
    if (target.matches('[data-start]')) loadLevel(`L${String(Math.min(progress.unlockedLevel, 100)).padStart(3, '0')}`);
    else if (target.matches('[data-continue]')) loadLevel(progress.currentSession.levelId, true);
    else if (target.matches('[data-open-levels], [data-back-levels], [data-result-levels]')) {
      if (resultDialog.open) resultDialog.close();
      showScreen('levels');
    } else if (target.matches('[data-home]')) showScreen('home');
    else if (target.matches('[data-chapter]')) {
      selectedChapter = Number(target.dataset.chapter); selectedPage = 1; renderLevels();
    } else if (target.matches('[data-page-previous]')) { selectedPage = 1; renderLevels(); }
    else if (target.matches('[data-page-next]')) { selectedPage = 2; renderLevels(); }
    else if (target.matches('[data-level-id]')) loadLevel(target.dataset.levelId);
    else if (target.matches('[data-hint]')) useHint();
    else if (target.matches('[data-undo]')) { state = Core.undoLastRotation(state, currentLevel); evaluateAfterAction(); }
    else if (target.matches('[data-restart]')) restartLevel();
    else if (target.matches('[data-large-board]')) openLargeBoard();
    else if (target.matches('[data-close-large]')) closeLargeBoard();
    else if (target.matches('[data-open-settings]')) {
      lastFocused = target;
      query('[data-setting-animations]').checked = progress.settings.animations;
      query('[data-setting-leaks]').checked = progress.settings.showLeaks;
      query('[data-setting-large]').checked = progress.settings.largeBoard;
      settingsDialog.showModal();
    } else if (target.matches('[data-save-settings]')) {
      progress.settings = {
        animations: query('[data-setting-animations]').checked,
        showLeaks: query('[data-setting-leaks]').checked,
        largeBoard: query('[data-setting-large]').checked,
      };
      Storage.saveProgress(progress);
      if (state) renderGame();
    } else if (target.matches('[data-close-result]')) resultDialog.close();
    else if (target.matches('[data-result-replay]')) restartLevel(true);
    else if (target.matches('[data-result-next]')) {
      resultDialog.close();
      loadLevel(`L${String(levelNumber(currentLevel.id) + 1).padStart(3, '0')}`);
    } else if (target.matches('button.pipe-cell') && !target.matches('[aria-disabled="true"]')) {
      state = Core.rotateTile(
        state, currentLevel, Number(target.dataset.row), Number(target.dataset.column),
        Config.maxUndoStates,
      );
      evaluateAfterAction();
    }
  });

  board.addEventListener('keydown', (event) => {
    const cell = event.target.closest('button.pipe-cell');
    if (!cell) return;
    const map = { ArrowUp: 'U', ArrowRight: 'R', ArrowDown: 'D', ArrowLeft: 'L' };
    if (map[event.key]) {
      event.preventDefault();
      focusNeighbor(cell, map[event.key]);
    }
  });

  settingsDialog.addEventListener('close', () => {
    if (lastFocused) lastFocused.focus();
  });
  resultDialog.addEventListener('close', () => {
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  });
  largeDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeLargeBoard();
  });
  document.addEventListener('visibilitychange', persistSession);
  window.addEventListener('beforeunload', persistSession);
  setInterval(() => {
    if (currentScreen === 'game' && state && !state.completed && !state.failed
      && !document.hidden && !settingsDialog.open && !resultDialog.open) {
      state.elapsed += 1;
      progress.stats.totalPlaySeconds += 1;
      query('[data-time]').textContent = Core.formatElapsedTime(state.elapsed);
      if (state.elapsed % 5 === 0) persistSession();
    }
  }, 1000);

  const portalLink = query('[data-portal-home]');
  if (window.location.protocol !== 'file:') portalLink.href = '../../';
  query('[data-game-title]').textContent = Config.gameTitle;
  renderHome();
})();
