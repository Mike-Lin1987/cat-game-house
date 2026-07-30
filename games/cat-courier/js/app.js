(function (root) {
  'use strict';

  const Config = root.CAT_COURIER_CONFIG;
  const Core = root.CatCourierCore;
  const Solver = root.CatCourierSolver;
  const Storage = root.CatCourierStorage;
  const Renderer = root.CatCourierRenderer;
  const Levels = root.CAT_COURIER_LEVELS || [];
  const app = root.document.getElementById('courier-app');
  const modalRoot = root.document.getElementById('courier-modal-root');
  const live = root.document.getElementById('courier-live');
  const PORTAL_HREF = root.location.protocol === 'file:' ? '../../index.html' : '../../';
  if (!app || !modalRoot || Levels.length !== Config.totalLevels) return;

  let progress = Storage.loadProgress();
  let settings = progress.settings;
  let screen = 'home';
  let chapter = 1;
  let page = 0;
  let currentLevel = null;
  let state = null;
  let message = '依照順序把物品送到每個貓咪家！';
  let hintCell = null;
  let hintTimer = null;
  let modalType = '';
  let lastFocusedElement = null;
  let pointerActive = false;
  let lastPointerCell = null;
  let focusedCell = null;
  let animationIndex = -1;
  let animationTimer = null;
  let saveTick = 0;
  let unsavedPlaySeconds = 0;

  function announce(text) {
    message = text;
    live.textContent = '';
    root.setTimeout(() => { live.textContent = text; }, 10);
  }

  function currentLevelNumber() {
    return currentLevel ? Number(currentLevel.id.slice(1)) : 1;
  }

  function hasValidSession() {
    return Boolean(Storage.loadSession(undefined, Levels));
  }

  function viewModel() {
    const animationPath = state.status === 'animating'
      ? state.path.slice(0, Math.max(1, animationIndex + 1))
      : state.path;
    const animationCell = state.status === 'animating'
      ? animationPath[animationPath.length - 1] : null;
    return {
      fuelUsed: Core.calculateFuelUsed(state),
      fuelRemaining: Core.calculateFuelRemaining(state, currentLevel),
      stopProgress: state.status === 'animating'
        ? Core.calculateStopProgress(currentLevel, animationPath)
        : Core.calculateStopProgress(currentLevel, state.path),
      projectedStars: Core.calculateProjectedStars(state, currentLevel),
      canDepart: Core.isRouteComplete(state, currentLevel),
      elapsedText: Core.formatElapsedTime(state.elapsed),
      message,
      hintCell,
      animating: state.status === 'animating',
      animationCell,
      largeMap: settings.largeMap,
    };
  }

  function restoreGridFocus() {
    if (!currentLevel || screen !== 'game') return;
    const fallback = focusedCell || state.path[state.path.length - 1] || currentLevel.start;
    const cell = app.querySelector(`[data-cell="${fallback[0]},${fallback[1]}"]`);
    if (cell && !cell.hasAttribute('aria-disabled')) {
      cell.tabIndex = 0;
      if (root.document.activeElement?.closest?.('.courier-map')) cell.focus({ preventScroll: true });
    }
  }

  function render() {
    progress = Storage.loadProgress();
    settings = progress.settings;
    if (screen === 'home') Renderer.renderHome(app, progress, hasValidSession());
    if (screen === 'levels') Renderer.renderLevelSelect(app, Levels, progress, chapter, page);
    if (screen === 'game' && currentLevel && state) {
      Renderer.renderGame(app, currentLevel, state, progress, viewModel());
      restoreGridFocus();
    }
    const portalHomeLink = app.querySelector('[data-portal-home]');
    if (portalHomeLink) portalHomeLink.href = PORTAL_HREF;
  }

  function openModal(type, data) {
    modalType = type;
    lastFocusedElement = root.document.activeElement;
    Renderer.renderModal(modalRoot, type, data || settings);
    root.setTimeout(() => modalRoot.querySelector('[role="dialog"]')?.focus(), 0);
  }

  function closeModal() {
    modalType = '';
    Renderer.clearModal(modalRoot);
    lastFocusedElement?.focus?.();
  }

  function saveCurrentSession() {
    if (screen === 'game' && currentLevel && state && state.status !== 'completed') {
      Storage.saveSession(undefined, state, currentLevel);
    }
  }

  function flushPlayTime() {
    if (unsavedPlaySeconds <= 0) return;
    Storage.addPlayTime(undefined, unsavedPlaySeconds);
    unsavedPlaySeconds = 0;
  }

  function showHome() {
    saveCurrentSession();
    flushPlayTime();
    screen = 'home';
    currentLevel = null;
    state = null;
    clearAnimation();
    closeModal();
    render();
  }

  function showLevels() {
    saveCurrentSession();
    flushPlayTime();
    if (currentLevel) {
      const number = currentLevelNumber();
      chapter = Math.ceil(number / 20);
      page = (number - 1) % 20 >= 10 ? 1 : 0;
    }
    screen = 'levels';
    clearAnimation();
    closeModal();
    render();
  }

  function startLevel(levelId, restoredState) {
    const level = Levels.find((candidate) => candidate.id === levelId);
    if (!level || Number(level.id.slice(1)) > progress.unlockedLevel) return;
    currentLevel = level;
    state = restoredState || Core.createInitialState(level);
    state.status = 'playing';
    screen = 'game';
    focusedCell = [...state.path[state.path.length - 1]];
    hintCell = null;
    message = `下一站：${Core.getNextRequiredStop(level, state.path)?.label || '最後一站'}`;
    closeModal();
    render();
    root.setTimeout(restoreGridFocus, 0);
  }

  function restartLevel() {
    if (!currentLevel) return;
    flushPlayTime();
    state = Core.createInitialState(currentLevel);
    message = `重新開始。下一站：${currentLevel.stops[0].label}`;
    hintCell = null;
    focusedCell = [...currentLevel.start];
    Storage.saveSession(undefined, state, currentLevel);
    closeModal();
    render();
    announce(message);
  }

  function reasonMessage(reason) {
    return {
      outside: '這格在社區地圖外。',
      adjacency: '請從目前路線終點延伸相鄰道路。',
      terrain: '這個地形不能通行。',
      'one-way': '這條路不能逆向行駛。',
      visited: '此道路已經使用過。',
      'future-stop': '請先完成目前的配送站。',
      fuel: '油量不足，請縮短路線。',
    }[reason] || '這一步無法加入路線。';
  }

  function interactCell(cell) {
    if (!currentLevel || !state || state.status !== 'playing') return false;
    const existingIndex = state.path.findIndex((candidate) => Core.sameCell(candidate, cell));
    if (existingIndex >= 0) {
      if (existingIndex === state.path.length - 1) return true;
      state = Core.trimPathToCell(state, currentLevel, cell);
      focusedCell = [...cell];
      const next = Core.getNextRequiredStop(currentLevel, state.path);
      announce(next ? `路線已回退。下一站：${next.label}` : '路線已完成，可以出發。');
      saveCurrentSession();
      render();
      return true;
    }
    const check = Core.canExtendPath(state, currentLevel, cell);
    if (!check.ok) {
      announce(reasonMessage(check.reason));
      render();
      return false;
    }
    state = Core.extendPath(state, currentLevel, cell);
    focusedCell = [...cell];
    hintCell = null;
    const next = Core.getNextRequiredStop(currentLevel, state.path);
    if (Core.isRouteComplete(state, currentLevel)) announce('配送路線已完成，可以出發！');
    else if (next) announce(`下一站：${next.label}，還剩 ${Core.calculateFuelRemaining(state, currentLevel)} 格油量。`);
    saveCurrentSession();
    render();
    if (!Core.isRouteComplete(state, currentLevel)
      && Core.calculateFuelRemaining(state, currentLevel) === 0) {
      openModal('failure');
    }
    return true;
  }

  function interpolateCells(from, to) {
    const cells = [];
    let row = from[0];
    let column = from[1];
    const rowStep = Math.sign(to[0] - row);
    const columnStep = Math.sign(to[1] - column);
    let rowRemaining = Math.abs(to[0] - row);
    let columnRemaining = Math.abs(to[1] - column);
    let alternate = rowRemaining >= columnRemaining;
    while (rowRemaining || columnRemaining) {
      if ((alternate && rowRemaining) || !columnRemaining) {
        row += rowStep;
        rowRemaining -= 1;
      } else {
        column += columnStep;
        columnRemaining -= 1;
      }
      cells.push([row, column]);
      alternate = !alternate;
    }
    return cells;
  }

  function cellFromPointer(event) {
    const map = app.querySelector('.courier-map');
    if (!map || !currentLevel) return null;
    const rect = map.getBoundingClientRect();
    const column = Math.floor(((event.clientX - rect.left) / rect.width) * currentLevel.columns);
    const row = Math.floor(((event.clientY - rect.top) / rect.height) * currentLevel.rows);
    return Core.isInsideBoard(row, column, currentLevel) ? [row, column] : null;
  }

  function showHint() {
    if (!state || state.hintRemaining <= 0 || state.status !== 'playing') return;
    const hint = Core.getHint(state, currentLevel, Solver);
    if (!hint.available) {
      announce('目前路線無法抵達下一站，請回退後再試。');
      render();
      return;
    }
    if (hint.duplicate) {
      announce('路線沒有改變，請先調整路線再使用提示。');
      return;
    }
    state.hintsUsed += 1;
    state.hintRemaining -= 1;
    state.lastHintKey = hint.key;
    hintCell = hint.nextCell;
    if (hint.deadEnd) {
      announce('目前路線無法完成，請退回高亮的錯誤轉折。');
    } else {
      const directionLabel = { up: '上', right: '右', down: '下', left: '左' }[hint.direction];
      announce(`提示：下一步可以往${directionLabel}。`);
    }
    saveCurrentSession();
    render();
    root.clearTimeout(hintTimer);
    hintTimer = root.setTimeout(() => {
      hintCell = null;
      if (screen === 'game') render();
    }, 4000);
  }

  function clearRoute() {
    if (!state || state.status !== 'playing') return;
    state = Core.clearPath(state, currentLevel);
    focusedCell = [...currentLevel.start];
    hintCell = null;
    announce(`路線已清除。下一站：${currentLevel.stops[0].label}`);
    saveCurrentSession();
    render();
  }

  function clearAnimation() {
    root.clearTimeout(animationTimer);
    animationTimer = null;
    animationIndex = -1;
    if (state?.status === 'animating') state.status = 'playing';
  }

  function completionData(stars) {
    const completedProgress = Storage.loadProgress();
    const records = completedProgress.records;
    return {
      stars,
      fuelUsed: Core.calculateFuelUsed(state),
      optimalSteps: currentLevel.optimalSteps,
      fuelRemaining: Core.calculateFuelRemaining(state, currentLevel),
      elapsedText: Core.formatElapsedTime(state.elapsed),
      hintsUsed: state.hintsUsed,
      finalLevel: currentLevel.id === 'L100',
      completedCount: Object.values(records).filter((record) => record.completed).length,
      totalStars: Object.values(records).reduce((sum, record) => sum + (record.stars || 0), 0),
      totalPlayText: Core.formatElapsedTime(completedProgress.totalPlaySeconds),
      notThreeStarCount: Config.totalLevels
        - Object.values(records).filter((record) => record.stars === 3).length,
    };
  }

  function finishLevel() {
    if (!state || state.status !== 'animating') return;
    clearAnimation();
    state.status = 'completed';
    flushPlayTime();
    const stars = Core.calculateFinalStars(state, currentLevel);
    Storage.updateRecord(undefined, currentLevel.id, {
      stars,
      fuelUsed: Core.calculateFuelUsed(state),
      elapsed: state.elapsed,
    });
    progress = Storage.loadProgress();
    announce('全部物品已依序送達！');
    render();
    openModal('complete', completionData(stars));
  }

  function animateDeparture() {
    if (!Core.isRouteComplete(state, currentLevel) || state.status !== 'playing') return;
    state.status = 'animating';
    animationIndex = 0;
    announce('快遞員出發囉！');
    render();
    const reduceMotion = root.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const delay = settings.animations && !reduceMotion ? 135 : 30;
    function next() {
      animationIndex += 1;
      if (animationIndex >= state.path.length) {
        finishLevel();
        return;
      }
      const delivered = Core.calculateStopProgress(
        currentLevel,
        state.path.slice(0, animationIndex + 1),
      );
      const justDelivered = currentLevel.stops[delivered - 1];
      if (justDelivered && Core.sameCell(justDelivered.position, state.path[animationIndex])) {
        message = `${justDelivered.label}送達！`;
      }
      render();
      animationTimer = root.setTimeout(next, delay);
    }
    animationTimer = root.setTimeout(next, delay);
  }

  function nextLevel() {
    const nextNumber = currentLevelNumber() + 1;
    if (nextNumber <= Config.totalLevels) {
      startLevel(`L${String(nextNumber).padStart(3, '0')}`);
    } else {
      showLevels();
    }
  }

  function handleAction(target) {
    const action = target.dataset.action;
    if (!action) return;
    if (action === 'home') showHome();
    if (action === 'levels') showLevels();
    if (action === 'start') {
      const targetNumber = Math.min(progress.unlockedLevel, Config.totalLevels);
      startLevel(`L${String(targetNumber).padStart(3, '0')}`);
    }
    if (action === 'continue') {
      const restored = Storage.loadSession(undefined, Levels);
      if (restored) startLevel(restored.levelId, restored);
      else render();
    }
    if (action === 'level') startLevel(target.dataset.level);
    if (action === 'chapter') {
      chapter = Number(target.dataset.chapter);
      page = 0;
      render();
    }
    if (action === 'page') {
      page = Number(target.dataset.page);
      render();
    }
    if (action === 'rules') openModal('rules');
    if (action === 'settings') openModal('settings', settings);
    if (action === 'close-modal') closeModal();
    if (action === 'hint') showHint();
    if (action === 'clear') clearRoute();
    if (action === 'failure-clear') {
      closeModal();
      clearRoute();
    }
    if (action === 'restart') openModal('restart');
    if (action === 'confirm-restart') restartLevel();
    if (action === 'depart') animateDeparture();
    if (action === 'skip-animation') finishLevel();
    if (action === 'next-level') nextLevel();
    if (action === 'large-map') {
      settings.largeMap = !settings.largeMap;
      Storage.saveSettings(undefined, settings);
      render();
    }
    if (action === 'reset-progress') {
      if (root.confirm(`確定要清除 ${Config.totalLevels} 關的完成紀錄與未完成路線嗎？`)) {
        progress = Storage.resetProgress();
        closeModal();
        showHome();
        announce('遊戲進度已重設。');
      }
    }
  }

  app.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('[data-action]');
    if (actionTarget) handleAction(actionTarget);
  });

  modalRoot.addEventListener('click', (event) => {
    const actionTarget = event.target.closest('[data-action]');
    if (actionTarget) handleAction(actionTarget);
  });

  modalRoot.addEventListener('change', (event) => {
    const setting = event.target.dataset.setting;
    if (!setting) return;
    settings[setting] = event.target.checked;
    Storage.saveSettings(undefined, settings);
    if (screen === 'game') render();
  });

  app.addEventListener('pointerdown', (event) => {
    const target = event.target.closest('.map-cell');
    if (!target || state?.status !== 'playing') return;
    event.preventDefault();
    if (typeof target.setPointerCapture === 'function') {
      target.setPointerCapture(event.pointerId);
    }
    pointerActive = true;
    const cell = [Number(target.dataset.row), Number(target.dataset.column)];
    lastPointerCell = cell;
    focusedCell = cell;
    if (!interactCell(cell)) pointerActive = false;
  });

  root.addEventListener('pointermove', (event) => {
    if (!pointerActive || !lastPointerCell) return;
    const targetCell = cellFromPointer(event);
    if (!targetCell || Core.sameCell(targetCell, lastPointerCell)) return;
    for (const cell of interpolateCells(lastPointerCell, targetCell)) {
      if (!interactCell(cell)) {
        pointerActive = false;
        break;
      }
      lastPointerCell = cell;
    }
  }, { passive: false });

  function endPointer() {
    pointerActive = false;
    lastPointerCell = null;
  }
  root.addEventListener('pointerup', endPointer);
  root.addEventListener('pointercancel', endPointer);

  function moveGridFocus(cell, direction) {
    const delta = Core.DIRECTIONS[direction];
    let row = cell[0] + delta[0];
    let column = cell[1] + delta[1];
    while (Core.isInsideBoard(row, column, currentLevel)) {
      if (Core.isPassableTerrain(currentLevel.terrain[row][column])) {
        focusedCell = [row, column];
        render();
        const target = app.querySelector(`[data-cell="${row},${column}"]`);
        target?.focus({ preventScroll: true });
        return;
      }
      row += delta[0];
      column += delta[1];
    }
  }

  root.document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalType) {
      event.preventDefault();
      closeModal();
      return;
    }
    if (modalType) {
      if (event.key === 'Tab') {
        const focusables = [...modalRoot.querySelectorAll('button:not(:disabled),input:not(:disabled)')];
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && root.document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && root.document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
      return;
    }
    if (screen !== 'game' || !state || state.status !== 'playing') return;
    const cellTarget = event.target.closest?.('.map-cell');
    const activeCell = cellTarget
      ? [Number(cellTarget.dataset.row), Number(cellTarget.dataset.column)]
      : (focusedCell || state.path[state.path.length - 1]);
    const keyDirections = { ArrowUp: 'up', ArrowRight: 'right', ArrowDown: 'down', ArrowLeft: 'left' };
    if (keyDirections[event.key]) {
      event.preventDefault();
      moveGridFocus(activeCell, keyDirections[event.key]);
    }
    if ((event.key === 'Enter' || event.key === ' ') && cellTarget) {
      event.preventDefault();
      interactCell(activeCell);
    }
    if (event.key === 'Backspace') {
      event.preventDefault();
      state = Core.removeLastPathCell(state, currentLevel);
      focusedCell = [...state.path[state.path.length - 1]];
      announce('已回退一步。');
      saveCurrentSession();
      render();
    }
    if (event.key === 'Delete') {
      event.preventDefault();
      clearRoute();
    }
    if (event.key.toLowerCase() === 'h') {
      event.preventDefault();
      showHint();
    }
    if (event.key.toLowerCase() === 'r') {
      event.preventDefault();
      openModal('restart');
    }
  });

  root.document.addEventListener('visibilitychange', () => {
    if (root.document.hidden) {
      saveCurrentSession();
      flushPlayTime();
    }
  });
  root.addEventListener('beforeunload', () => {
    saveCurrentSession();
    flushPlayTime();
  });

  root.setInterval(() => {
    if (screen !== 'game' || !state || state.status !== 'playing'
      || modalType || root.document.hidden || pointerActive) return;
    state.elapsed += 1;
    unsavedPlaySeconds += 1;
    saveTick += 1;
    if (saveTick % 5 === 0) {
      saveCurrentSession();
      flushPlayTime();
    }
    render();
  }, 1000);

  render();
})(typeof globalThis !== 'undefined' ? globalThis : this);
