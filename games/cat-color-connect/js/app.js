(function initializeCatConnectApp() {
  'use strict';

  const Config = window.CAT_CONNECT_CONFIG;
  const Core = window.CatConnectCore;
  const Storage = window.CatConnectStorage;
  const Renderer = window.CatConnectRenderer;
  const levels = window.CAT_CONNECT_LEVELS || [];
  if (!Config || !Core || !Storage || !Renderer || levels.length === 0) {
    document.body.textContent = '關卡資料載入失敗，請確認所有離線檔案都在同一資料夾。';
    return;
  }

  const screens = Object.fromEntries(
    [...document.querySelectorAll('[data-screen]')].map((element) => [
      element.dataset.screen,
      element,
    ]),
  );
  const board = document.querySelector('[data-board]');
  const liveRegion = document.querySelector('[data-live-region]');
  const settingsDialog = document.querySelector('[data-settings-dialog]');
  const completionDialog = document.querySelector('[data-completion-dialog]');
  let progress = Storage.load(Config.packs);
  let currentLevel = null;
  let state = null;
  let history = [];
  let gesture = null;
  let timerId = null;
  let lastTick = null;
  let openPackId = Config.packs[0].id;
  const chapterByPack = Object.fromEntries(Config.packs.map((pack) => [pack.id, 1]));
  let resetArmed = false;

  function announce(message) {
    liveRegion.textContent = '';
    window.setTimeout(() => {
      liveRegion.textContent = message;
    }, 20);
  }

  function showScreen(name) {
    for (const [key, element] of Object.entries(screens)) {
      element.hidden = key !== name;
    }
    if (name !== 'game') {
      stopTimer();
    } else {
      startTimer();
    }
    window.scrollTo({ top: 0, behavior: progress.settings.animations ? 'smooth' : 'auto' });
  }

  function packForLevel(level) {
    return Config.packs.find((pack) => pack.id === level.packId);
  }

  function levelsForPack(packId) {
    return levels.filter((level) => level.packId === packId);
  }

  function completedCount(packId = null) {
    return Object.keys(progress.records).filter(
      (id) => !packId || id.startsWith(`${packId}-`),
    ).length;
  }

  function starCount(packId = null) {
    return Object.entries(progress.records)
      .filter(([id]) => !packId || id.startsWith(`${packId}-`))
      .reduce((sum, [, record]) => sum + record.stars, 0);
  }

  function renderHome() {
    document.querySelector('[data-progress-complete]').textContent =
      `${completedCount()}/${levels.length}`;
    document.querySelector('[data-progress-stars]').textContent =
      `${starCount()}/${levels.length * 3}`;
    const continueButton = document.querySelector('[data-action="continue"]');
    continueButton.hidden = !progress.session ||
      !levels.some((level) => level.id === progress.session.levelId);
    const container = document.querySelector('[data-pack-progress]');
    container.replaceChildren(
      ...Config.packs.map((pack) => {
        const article = document.createElement('article');
        const strong = document.createElement('strong');
        strong.textContent = `${pack.rows}×${pack.columns}`;
        const span = document.createElement('span');
        span.textContent = `${completedCount(pack.id)}/${pack.levelCount} 完成 · ${starCount(pack.id)}★`;
        article.append(strong, span);
        return article;
      }),
    );
  }

  function makeLevelButton(level, pack) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'level-button';
    const unlocked = level.ordinal <= (progress.unlockedByPack[pack.id] || 1);
    const record = progress.records[level.id];
    button.disabled = !unlocked;
    button.setAttribute(
      'aria-label',
      unlocked
        ? `${pack.rows}×${pack.columns} 第 ${level.ordinal} 關${record ? `，${record.stars} 星完成` : ''}`
        : `${pack.rows}×${pack.columns} 第 ${level.ordinal} 關，尚未解鎖`,
    );
    const number = document.createElement('span');
    number.textContent = unlocked ? level.ordinal : '🔒';
    button.append(number);
    if (record) {
      button.classList.add('completed');
      const stars = document.createElement('span');
      stars.className = 'level-stars';
      stars.textContent = '★'.repeat(record.stars);
      button.append(stars);
    }
    button.addEventListener('click', () => startLevel(level));
    return button;
  }

  function renderPackBody(pack, body) {
    const chapter = chapterByPack[pack.id] || 1;
    const chapterCount = pack.chapters.length;
    const tabs = document.createElement('div');
    tabs.className = 'chapter-tabs';
    tabs.setAttribute('role', 'tablist');
    for (let index = 1; index <= chapterCount; index += 1) {
      const tab = document.createElement('button');
      tab.type = 'button';
      const chapterStart = (index - 1) * 10;
      const chapterLevels = levelsForPack(pack.id).slice(
        chapterStart,
        chapterStart + pack.chapters[index - 1],
      );
      const chapterComplete = chapterLevels.filter(
        (level) => progress.records[level.id],
      ).length;
      const chapterStars = chapterLevels.reduce(
        (sum, level) => sum + (progress.records[level.id]?.stars || 0),
        0,
      );
      tab.textContent = `章節 ${index} · ${chapterComplete}/${chapterLevels.length} · ${chapterStars}★`;
      tab.setAttribute('aria-selected', String(index === chapter));
      tab.addEventListener('click', () => {
        chapterByPack[pack.id] = index;
        renderLevels();
      });
      tabs.append(tab);
    }
    const grid = document.createElement('div');
    grid.className = 'level-grid';
    const start = (chapter - 1) * 10;
    for (const level of levelsForPack(pack.id).slice(start, start + 10)) {
      grid.append(makeLevelButton(level, pack));
    }
    body.replaceChildren(tabs, grid);
  }

  function renderLevels() {
    const list = document.querySelector('[data-pack-list]');
    list.replaceChildren(
      ...Config.packs.map((pack) => {
        const panel = document.createElement('article');
        panel.className = 'pack-panel';
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'pack-toggle';
        toggle.setAttribute('aria-expanded', String(openPackId === pack.id));
        const label = document.createElement('span');
        const title = document.createElement('strong');
        title.textContent = pack.title;
        const meta = document.createElement('small');
        meta.textContent = `${completedCount(pack.id)}/${pack.levelCount} 完成 · ${starCount(pack.id)}/${pack.levelCount * 3} 星`;
        label.append(title, meta);
        const icon = document.createElement('span');
        icon.textContent = openPackId === pack.id ? '−' : '+';
        toggle.append(label, icon);
        const body = document.createElement('div');
        body.className = 'pack-body';
        body.hidden = openPackId !== pack.id;
        if (!body.hidden) renderPackBody(pack, body);
        toggle.addEventListener('click', () => {
          openPackId = pack.id;
          renderLevels();
        });
        panel.append(toggle, body);
        return panel;
      }),
    );
  }

  function saveSession() {
    if (!currentLevel || !state || state.completed) return;
    progress.session = {
      levelId: currentLevel.id,
      state: Core.serializeState(state),
      savedAt: Date.now(),
    };
    progress = Storage.save(progress, Config.packs);
  }

  function startTimer() {
    if (!currentLevel || state?.completed || timerId) return;
    lastTick = Date.now();
    timerId = window.setInterval(() => {
      if (document.hidden || screens.game.hidden) {
        lastTick = Date.now();
        return;
      }
      const now = Date.now();
      const delta = Math.floor((now - lastTick) / 1000);
      if (delta > 0) {
        state.elapsed += delta;
        lastTick += delta * 1000;
        updateStats();
        if (state.elapsed % 5 === 0) saveSession();
      }
    }, 250);
  }

  function stopTimer() {
    if (timerId) window.clearInterval(timerId);
    timerId = null;
    lastTick = null;
    saveSession();
  }

  function updateStats() {
    document.querySelector('[data-time]').textContent = Core.formatElapsedTime(state?.elapsed || 0);
    document.querySelector('[data-moves]').textContent = state?.moves || 0;
    document.querySelector('[data-coverage]').textContent =
      `${state && currentLevel ? Core.calculateCoverage(state, currentLevel) : 0}%`;
  }

  function redraw() {
    Renderer.renderRoutes(board, currentLevel, state, Config);
    board.classList.toggle('no-grid', !progress.settings.gridLines);
    updateStats();
  }

  function startLevel(level, restoredState = null) {
    stopTimer();
    currentLevel = level;
    state = restoredState || Core.createEmptyState(level);
    history = [];
    gesture = null;
    const pack = packForLevel(level);
    document.querySelector('[data-level-pack]').textContent = `${pack.rows}×${pack.columns} · ${level.difficultyTier}`;
    document.querySelector('[data-level-title]').textContent = `第 ${level.ordinal} 關`;
    Renderer.buildBoard(board, level, Config, {
      pointerdown: onPointerDown,
      keydown: onCellKeyDown,
    });
    board.addEventListener('pointermove', onPointerMove);
    board.addEventListener('pointerup', onPointerUp);
    board.addEventListener('pointercancel', cancelGesture);
    redraw();
    showScreen('game');
    saveSession();
    board.querySelector('.board-cell')?.focus();
  }

  function cellFromPoint(clientX, clientY) {
    const rect = board.getBoundingClientRect();
    const { rows, columns } = Core.getBoardDimensions(currentLevel);
    const column = Math.floor(((clientX - rect.left) / rect.width) * columns);
    const row = Math.floor(((clientY - rect.top) / rect.height) * rows);
    return Core.isInsideBoard(row, column, rows, columns) ? [row, column] : null;
  }

  function pairAtCell(cell) {
    return Core.getEndpointPairId(currentLevel, cell[0], cell[1]) ||
      Core.buildOccupancy(state, currentLevel)[cell[0]][cell[1]];
  }

  function onPointerDown(event) {
    if (state.completed || event.button > 0) return;
    event.preventDefault();
    const cell = [Number(event.currentTarget.dataset.row), Number(event.currentTarget.dataset.column)];
    const pairId = pairAtCell(cell);
    if (!pairId) return;
    const before = Core.cloneGameState(state);
    const result = Core.beginPath(state, currentLevel, pairId, cell);
    state = result.state;
    gesture = { pointerId: event.pointerId, pairId, before, changed: result.changed, lastCell: cell };
    board.setPointerCapture?.(event.pointerId);
    redraw();
  }

  function candidateSteps(from, to) {
    const candidates = [];
    if (from[0] !== to[0]) {
      candidates.push([from[0] + Math.sign(to[0] - from[0]), from[1]]);
    }
    if (from[1] !== to[1]) {
      candidates.push([from[0], from[1] + Math.sign(to[1] - from[1])]);
    }
    return candidates.sort((left, right) => {
      const leftDistance =
        (to[0] - left[0]) ** 2 + (to[1] - left[1]) ** 2;
      const rightDistance =
        (to[0] - right[0]) ** 2 + (to[1] - right[1]) ** 2;
      return leftDistance - rightDistance;
    });
  }

  function onPointerMove(event) {
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const cell = cellFromPoint(event.clientX, event.clientY);
    if (!cell || Core.sameCell(cell, gesture.lastCell)) return;
    let guard = currentLevel.rows * currentLevel.columns;
    while (!Core.sameCell(gesture.lastCell, cell) && guard > 0) {
      guard -= 1;
      let chosen = null;
      for (const nextCell of candidateSteps(gesture.lastCell, cell)) {
        const result = Core.extendPath(
          state,
          currentLevel,
          gesture.pairId,
          nextCell,
        );
        if (result.changed) {
          chosen = { result, nextCell };
          break;
        }
      }
      if (!chosen) {
        Renderer.flashInvalid(board);
        break;
      }
      state = chosen.result.state;
      gesture.changed = true;
      gesture.lastCell = chosen.nextCell;
    }
    redraw();
  }

  function finishOperation(before) {
    history.push(before);
    if (history.length > 100) history.shift();
    state.moves += 1;
    redraw();
    saveSession();
    checkCompletion();
  }

  function onPointerUp(event) {
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const completedGesture = gesture;
    gesture = null;
    board.releasePointerCapture?.(event.pointerId);
    if (completedGesture.changed) finishOperation(completedGesture.before);
  }

  function cancelGesture() {
    if (!gesture) return;
    state = gesture.before;
    gesture = null;
    redraw();
  }

  function onCellKeyDown(event) {
    const cell = [Number(event.currentTarget.dataset.row), Number(event.currentTarget.dataset.column)];
    const direction = {
      ArrowUp: [-1, 0],
      ArrowRight: [0, 1],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
    }[event.key];
    if (direction) {
      event.preventDefault();
      const next = [cell[0] + direction[0], cell[1] + direction[1]];
      const target = Renderer.getCell(board, next[0], next[1]);
      if (!target) return;
      if (state.selectedPairId) {
        const before = Core.cloneGameState(state);
        const result = Core.extendPath(state, currentLevel, state.selectedPairId, next);
        if (result.changed) {
          state = result.state;
          finishOperation(before);
        } else {
          target.focus();
        }
      } else {
        target.focus();
      }
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const pairId = pairAtCell(cell);
      if (!pairId) return;
      const before = Core.cloneGameState(state);
      const result = Core.beginPath(state, currentLevel, pairId, cell);
      state = result.state;
      if (result.changed) finishOperation(before);
      else redraw();
    } else if (event.key === 'Backspace' && state.selectedPairId) {
      event.preventDefault();
      const before = Core.cloneGameState(state);
      const previousLength = state.paths[state.selectedPairId]?.length || 0;
      state = Core.removeLastPathCell(state, state.selectedPairId);
      if ((state.paths[state.selectedPairId]?.length || 0) !== previousLength) finishOperation(before);
    } else if (event.key === 'Delete' && state.selectedPairId) {
      event.preventDefault();
      clearSelectedPath();
    } else if (event.key === 'Escape') {
      state.selectedPairId = null;
      redraw();
    }
  }

  function undo() {
    const previous = history.pop();
    if (!previous) return;
    const moves = state.moves;
    state = previous;
    state.moves = moves;
    redraw();
    saveSession();
    announce('已復原上一個操作');
  }

  function clearSelectedPath() {
    const pairId = state.selectedPairId ||
      Object.keys(state.paths).find((id) => state.paths[id].length > 0);
    if (!pairId || state.paths[pairId].length === 0) return;
    const before = Core.cloneGameState(state);
    state = Core.clearPath(state, pairId);
    finishOperation(before);
  }

  function showHint() {
    const hint = Core.getHint(state, currentLevel, state.lastHintKey);
    if (!hint) {
      announce('目前沒有可顯示的提示');
      return;
    }
    state.lastHintKey = hint.key;
    state.hintsUsed += 1;
    const cell = Renderer.getCell(board, hint.cell[0], hint.cell[1]);
    cell?.classList.add('hint');
    window.setTimeout(() => cell?.classList.remove('hint'), 4000);
    const direction =
      hint.cell[0] < hint.from[0] ? '上方' :
        hint.cell[0] > hint.from[0] ? '下方' :
          hint.cell[1] < hint.from[1] ? '左方' : '右方';
    announce(`${hint.pairId} 貓咪的下一格在${direction}，第 ${hint.cell[0] + 1} 列第 ${hint.cell[1] + 1} 欄`);
    saveSession();
  }

  function checkCompletion() {
    if (!Core.isPuzzleComplete(state, currentLevel)) return;
    stopTimer();
    state.completed = true;
    const stars = state.hintsUsed === 0 ? 3 : state.hintsUsed === 1 ? 2 : 1;
    progress = Storage.saveRecord(progress, currentLevel, {
      stars,
      elapsed: state.elapsed,
      moves: state.moves,
      hintsUsed: state.hintsUsed,
    }, Config.packs);
    progress.session = null;
    progress = Storage.save(progress, Config.packs);
    document.querySelector('[data-completion-stars]').textContent =
      `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
    document.querySelector('[data-completion-time]').textContent = Core.formatElapsedTime(state.elapsed);
    document.querySelector('[data-completion-moves]').textContent = state.moves;
    document.querySelector('[data-completion-hints]').textContent = state.hintsUsed;
    const packLevels = levelsForPack(currentLevel.packId);
    const next = packLevels[currentLevel.ordinal] || null;
    const nextButton = document.querySelector('[data-action="next-level"]');
    nextButton.textContent = next ? '下一關' : '完成關卡包';
    nextButton.dataset.nextLevelId = next?.id || '';
    completionDialog.showModal();
    nextButton.focus();
  }

  function restartLevel() {
    if (currentLevel) startLevel(currentLevel);
  }

  function showSettings() {
    resetArmed = false;
    document.querySelector('[data-reset-confirm]').hidden = true;
    for (const input of settingsDialog.querySelectorAll('[data-setting]')) {
      input.checked = progress.settings[input.dataset.setting] !== false;
    }
    settingsDialog.showModal();
    settingsDialog.querySelector('[data-setting]')?.focus();
  }

  function handleAction(action) {
    if (action === 'home') {
      renderHome();
      showScreen('home');
    } else if (action === 'levels') {
      completionDialog.open && completionDialog.close();
      renderLevels();
      showScreen('levels');
    } else if (action === 'start') {
      const firstIncomplete = levels.find((level) =>
        level.ordinal <= (progress.unlockedByPack[level.packId] || 1) &&
        !progress.records[level.id],
      ) || levels[0];
      startLevel(firstIncomplete);
    } else if (action === 'continue') {
      const level = levels.find((item) => item.id === progress.session?.levelId);
      const restored = level && Core.deserializeState(progress.session.state, level);
      if (level && restored) startLevel(level, restored);
      else startLevel(levels[0]);
    } else if (action === 'settings') {
      showSettings();
    } else if (action === 'restart') {
      restartLevel();
    } else if (action === 'undo') {
      undo();
    } else if (action === 'clear') {
      clearSelectedPath();
    } else if (action === 'hint') {
      showHint();
    } else if (action === 'next-level') {
      completionDialog.close();
      const id = document.querySelector('[data-action="next-level"]').dataset.nextLevelId;
      const next = levels.find((level) => level.id === id);
      if (next) startLevel(next);
      else {
        renderLevels();
        showScreen('levels');
      }
    } else if (action === 'reset-progress') {
      if (!resetArmed) {
        resetArmed = true;
        document.querySelector('[data-reset-confirm]').hidden = false;
      } else {
        progress = Storage.resetProgress(progress, Config.packs);
        settingsDialog.close();
        renderHome();
        announce('全部進度已重設');
      }
    }
  }

  document.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action) handleAction(action);
  });
  settingsDialog.addEventListener('change', (event) => {
    const setting = event.target.dataset.setting;
    if (!setting) return;
    progress.settings[setting] = event.target.checked;
    progress = Storage.save(progress, Config.packs);
    board.classList.toggle('no-grid', !progress.settings.gridLines);
  });
  window.addEventListener('blur', cancelGesture);
  document.addEventListener('visibilitychange', () => {
    lastTick = Date.now();
    if (document.hidden) saveSession();
  });
  window.addEventListener('beforeunload', saveSession);

  renderHome();
  showScreen('home');
})();
