(function initializeCatGridGame() {
  'use strict';

  const Core = window.CatPuzzleCore;
  const packs = window.CAT_PUZZLE_PACKS;
  const levels = window.CAT_PUZZLE_LEVELS;
  const STORAGE_KEY = 'cat-grid-game:v1';
  const PAGE_SIZE = 10;
  const REGION_COLORS = [
    '#ffd0ad',
    '#ffe47f',
    '#cce7ad',
    '#aee6dd',
    '#aadcf0',
    '#c9c2f1',
    '#f1bfd2',
    '#f6b5a5',
    '#d6e7a2',
    '#a8d8c3',
    '#b8ccef',
    '#e3c3ed',
  ];
  const CAT_STYLES = [
    { fur: '#45322d', face: '#fff8ee', patch: '#45322d', ear: '#f69a88' },
    { fur: '#e68c3e', face: '#fff8ee', patch: '#e68c3e', ear: '#f78d82' },
    { fur: '#80716c', face: '#fffaf2', patch: '#80716c', ear: '#ef9b9a' },
  ];
  const app = document.querySelector('#app');
  const liveStatus = document.querySelector('#live-status');
  const settingsDialog = document.querySelector('#settings-dialog');
  const confirmDialog = document.querySelector('#confirm-dialog');
  const completionDialog = document.querySelector('#completion-dialog');
  const autoCheckInput = document.querySelector('#setting-auto-check');
  const animationsInput = document.querySelector('#setting-animations');
  const levelsByPack = new Map(
    packs.map((pack) => [
      pack.id,
      levels
        .filter((level) => level.packId === pack.id)
        .sort((left, right) => left.ordinal - right.ordinal),
    ]),
  );

  function createDefaultProgress() {
    return {
      unlockedByPack: Object.fromEntries(
        packs.map((pack) => [
          pack.id,
          Core.normalizeUnlockedLevelIds(levelsByPack.get(pack.id) || [], []),
        ]),
      ),
      records: {},
      settings: {
        autoCheck: true,
        animations: true,
      },
    };
  }

  function sanitizeProgress(rawProgress) {
    const defaults = createDefaultProgress();
    if (!rawProgress || typeof rawProgress !== 'object') {
      return defaults;
    }

    if (rawProgress.records && typeof rawProgress.records === 'object') {
      defaults.records = rawProgress.records;
    }

    for (const pack of packs) {
      defaults.unlockedByPack[pack.id] = Core.normalizeUnlockedLevelIds(
        levelsByPack.get(pack.id) || [],
        rawProgress.unlockedByPack?.[pack.id],
        defaults.records,
      );
    }

    defaults.settings.autoCheck =
      rawProgress.settings?.autoCheck !== false;
    defaults.settings.animations =
      rawProgress.settings?.animations !== false;

    return defaults;
  }

  function readProgress() {
    try {
      return sanitizeProgress(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
    } catch (error) {
      return createDefaultProgress();
    }
  }

  let storageAvailable = true;
  let progress = readProgress();
  let pendingConfirmAction = null;
  let lastDialogTrigger = null;
  let hintTimeout = null;
  const state = {
    screen: 'select',
    expandedPackId: packs[0].id,
    pageByPack: Object.fromEntries(packs.map((pack) => [pack.id, 0])),
    currentLevel: null,
    board: [],
    history: [],
    moves: 0,
    hints: 0,
    startedAt: 0,
    elapsed: 0,
    completed: false,
    hintCell: null,
    lastCellClick: null,
  };

  function saveProgress() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      storageAvailable = true;
      return true;
    } catch (error) {
      storageAvailable = false;
      announce('進度暫時無法儲存，但仍可繼續遊玩。');
      return false;
    }
  }

  function clearStoredProgress() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      storageAvailable = true;
    } catch (error) {
      storageAvailable = false;
    }
  }

  function icon(name, className = '') {
    const symbol = document.querySelector(`#icon-${name}`);
    return `<svg class="ui-icon ${className}" viewBox="${symbol.getAttribute('viewBox')}" aria-hidden="true">${symbol.innerHTML}</svg>`;
  }

  function catIcon(row = 0, column = 0, className = '') {
    const style = CAT_STYLES[(row * 3 + column) % CAT_STYLES.length];
    const symbol = document.querySelector('#icon-cat');
    return `<svg class="cat-icon ${className}" viewBox="${symbol.getAttribute('viewBox')}" style="--cat-fur:${style.fur};--cat-face:${style.face};--cat-patch:${style.patch};--cat-ear:${style.ear}" aria-hidden="true">${symbol.innerHTML}</svg>`;
  }

  function starsMarkup(stars, compact = false) {
    const starSymbol = document.querySelector('#icon-star');
    return Array.from({ length: 3 }, (_, index) =>
      `<svg class="star ${index < stars ? 'is-earned' : ''} ${compact ? 'is-compact' : ''}" viewBox="${starSymbol.getAttribute('viewBox')}" aria-hidden="true">${starSymbol.innerHTML}</svg>`,
    ).join('');
  }

  function hydrateStaticIcons() {
    document.querySelectorAll('[data-static-icon]').forEach((target) => {
      target.innerHTML = icon(target.dataset.staticIcon);
    });
    document.querySelectorAll('[data-static-cat]').forEach((target) => {
      target.innerHTML = catIcon(1, 1);
    });
  }

  function announce(message) {
    liveStatus.textContent = '';
    window.setTimeout(() => {
      liveStatus.textContent = message;
    }, 20);
  }

  function applySettings() {
    document.body.classList.toggle(
      'animations-off',
      !progress.settings.animations,
    );
    autoCheckInput.checked = progress.settings.autoCheck;
    animationsInput.checked = progress.settings.animations;
  }

  function getElapsedSeconds() {
    if (!state.currentLevel) {
      return 0;
    }
    if (state.completed) {
      return state.elapsed;
    }
    return Math.max(0, Math.floor((Date.now() - state.startedAt) / 1000));
  }

  function getPack(packId) {
    return packs.find((pack) => pack.id === packId);
  }

  function renderBrandHeader(title, options = {}) {
    const backButton = options.back
      ? `<button class="icon-button" data-action="back-select" aria-label="返回選關">${icon('back')}</button>`
      : '';

    return `
      <header class="top-bar">
        <div class="brand-zone">
          ${backButton}
          ${catIcon(0, 0, 'brand-cat')}
          <span class="brand-name">貓咪方格</span>
        </div>
        <h1>${title}</h1>
        <button class="icon-button" data-action="settings" aria-label="開啟設定">
          ${icon('gear')}
        </button>
      </header>
    `;
  }

  function renderSelectionScreen() {
    const packMarkup = packs
      .map((pack) => {
        const packLevels = levelsByPack.get(pack.id) || [];
        const completedCount = packLevels.filter(
          (level) => progress.records[level.id]?.completed,
        ).length;
        const isExpanded = state.expandedPackId === pack.id;
        const totalPages = Math.max(1, Math.ceil(packLevels.length / PAGE_SIZE));
        const requestedPage = state.pageByPack[pack.id] || 0;
        const page = Math.min(totalPages - 1, Math.max(0, requestedPage));
        state.pageByPack[pack.id] = page;
        const pageLevels = packLevels.slice(
          page * PAGE_SIZE,
          page * PAGE_SIZE + PAGE_SIZE,
        );
        const accentStars = completedCount
          ? Math.max(
              ...packLevels.map((level) => progress.records[level.id]?.stars || 0),
            )
          : 0;

        const levelButtons = pageLevels
          .map((level) => {
            const record = progress.records[level.id];
            const unlocked =
              progress.unlockedByPack[pack.id].includes(level.id) ||
              record?.completed;
            const status = record?.completed
              ? `已完成，${record.stars} 顆星`
              : unlocked
                ? '已解鎖'
                : '尚未解鎖';

            return `
              <button
                class="level-button ${record?.completed ? 'is-completed' : ''} ${!unlocked ? 'is-locked' : ''}"
                data-action="open-level"
                data-level-id="${level.id}"
                aria-label="${pack.title}第 ${level.ordinal} 關，${status}"
                ${unlocked ? '' : 'disabled'}
              >
                <span class="level-number">${level.ordinal}</span>
                ${
                  unlocked
                    ? `<span class="level-stars" aria-hidden="true">${starsMarkup(record?.stars || 0, true)}</span>`
                    : `<span class="level-lock">${icon('lock')}</span>`
                }
              </button>
            `;
          })
          .join('');

        return `
          <section class="pack-card theme-${pack.theme}">
            <button
              class="pack-header"
              data-action="toggle-pack"
              data-pack-id="${pack.id}"
              aria-expanded="${isExpanded}"
              aria-controls="pack-panel-${pack.id}"
            >
              <span class="pack-title">
                ${icon(pack.motif, 'pack-motif')}
                <strong>${pack.title}</strong>
              </span>
              <span class="pack-progress">
                <span>完成 ${completedCount} / ${pack.levelCount}</span>
                <span class="pack-stars" aria-label="最佳星級 ${accentStars} 顆">${starsMarkup(accentStars, true)}</span>
                ${icon('chevron', isExpanded ? 'is-open' : '')}
              </span>
            </button>
            ${
              isExpanded
                ? `
                  <div id="pack-panel-${pack.id}" class="pack-panel">
                    <div class="level-grid">${levelButtons}</div>
                    <nav class="pagination" aria-label="${pack.title}關卡分頁">
                      <button
                        class="page-button"
                        data-action="page-pack"
                        data-pack-id="${pack.id}"
                        data-direction="-1"
                        aria-label="上一頁"
                        ${page === 0 ? 'disabled' : ''}
                      >${icon('back')}</button>
                      <span>第 ${page + 1} / ${totalPages} 頁</span>
                      <button
                        class="page-button next-page"
                        data-action="page-pack"
                        data-pack-id="${pack.id}"
                        data-direction="1"
                        aria-label="下一頁"
                        ${page === totalPages - 1 ? 'disabled' : ''}
                      >${icon('back')}</button>
                    </nav>
                  </div>
                `
                : ''
            }
          </section>
        `;
      })
      .join('');

    app.innerHTML = `
      <div class="app-shell selection-shell">
        ${renderBrandHeader('選擇關卡')}
        <section class="selection-intro" aria-labelledby="selection-heading">
          <div>
            <p class="section-kicker">${icon('paw')} 四種步調，慢慢解開</p>
            <h2 id="selection-heading">今天想挑戰哪一盤？</h2>
          </div>
          <p>每個尺寸都能從第 1 關開始，完成後會解鎖下一關。</p>
        </section>
        <div class="pack-list">${packMarkup}</div>
        <footer class="storage-note ${storageAvailable ? '' : 'is-warning'}">
          ${catIcon(1, 2)}
          <span>${storageAvailable ? '進度會儲存在這台裝置' : '目前無法儲存進度，但遊戲仍可正常操作'}</span>
          ${icon('paw')}
        </footer>
      </div>
    `;
  }

  function cellBoundaryClasses(level, row, column) {
    const region = level.regions[row][column];
    const classes = [];
    if (row === 0 || level.regions[row - 1][column] !== region) {
      classes.push('region-top');
    }
    if (row === level.size - 1 || level.regions[row + 1][column] !== region) {
      classes.push('region-bottom');
    }
    if (column === 0 || level.regions[row][column - 1] !== region) {
      classes.push('region-left');
    }
    if (column === level.size - 1 || level.regions[row][column + 1] !== region) {
      classes.push('region-right');
    }
    return classes.join(' ');
  }

  function renderBoard() {
    const level = state.currentLevel;
    const conflictKeys = new Set(
      progress.settings.autoCheck
        ? Core.findConflicts(state.board, level).cells.map(
            (cell) => `${cell.row},${cell.column}`,
          )
        : [],
    );

    const cells = [];
    for (let row = 0; row < level.size; row += 1) {
      for (let column = 0; column < level.size; column += 1) {
        const cellState = state.board[row][column];
        const regionId = level.regions[row][column];
        const stateLabel =
          cellState === Core.CELL_STATE.EMPTY
            ? '空白'
            : cellState === Core.CELL_STATE.X
              ? 'X 記號'
              : '貓咪';
        const isConflict = conflictKeys.has(`${row},${column}`);
        const isHint =
          state.hintCell?.row === row && state.hintCell?.column === column;
        const content =
          cellState === Core.CELL_STATE.X
            ? '<span class="x-mark" aria-hidden="true"></span>'
            : cellState === Core.CELL_STATE.CAT
              ? catIcon(row, column, 'board-cat')
              : '';

        cells.push(`
          <button
            class="board-cell ${cellBoundaryClasses(level, row, column)} ${isConflict ? 'is-conflict' : ''} ${isHint ? 'is-hint' : ''}"
            style="--cell-color:${REGION_COLORS[regionId % REGION_COLORS.length]}"
            data-action="cycle-cell"
            data-row="${row}"
            data-column="${column}"
            role="gridcell"
            aria-label="第 ${row + 1} 橫列，第 ${column + 1} 直欄，區域 ${regionId + 1}，${stateLabel}${isConflict ? '，有衝突' : ''}${isHint ? '，提示位置' : ''}"
            ${state.completed ? 'disabled' : ''}
          >${content}</button>
        `);
      }
    }

    return `
      <div class="board-mat">
        <span class="mat-motif motif-top-left">${icon('paw')}</span>
        <span class="mat-motif motif-bottom-right">${icon('fish')}</span>
        <div
          class="game-board board-size-${level.size}"
          style="--board-size:${level.size}"
          role="grid"
          aria-label="${level.size} 乘 ${level.size} 貓咪方格棋盤"
        >${cells.join('')}</div>
      </div>
    `;
  }

  function renderGameScreen() {
    const level = state.currentLevel;
    const pack = getPack(level.packId);
    const validation = Core.validateBoard(state.board, level);
    const nextLevel = (levelsByPack.get(pack.id) || []).find(
      (candidate) => candidate.ordinal === level.ordinal + 1,
    );
    const elapsed = getElapsedSeconds();

    app.innerHTML = `
      <div class="app-shell game-shell">
        <header class="top-bar game-top-bar">
          <div class="brand-zone">
            <button class="icon-button" data-action="back-select" aria-label="返回選關">${icon('back')}</button>
            ${catIcon(0, 0, 'brand-cat')}
            <span class="brand-name">貓咪方格</span>
          </div>
          <div class="game-metrics" aria-label="關卡資訊">
            <strong>${pack.title}－第 ${level.ordinal} 關</strong>
            <span>${catIcon(1, 1)} <b id="hud-cat-count">${validation.catCount}</b> / ${level.size}</span>
            <span>${icon('paw')} 步數 <b id="hud-moves">${state.moves}</b></span>
            <span>${icon('clock')} <b id="hud-time">${Core.formatElapsedTime(elapsed)}</b></span>
          </div>
          <button class="icon-button" data-action="settings" aria-label="開啟設定">${icon('gear')}</button>
        </header>

        <div class="game-layout">
          <details class="rules-panel" open>
            <summary>${icon('book')} <span>遊戲規則</span></summary>
            <ul>
              <li>${icon('fish')}<span>每個顏色區域各放一隻貓</span></li>
              <li>${icon('grid')}<span>每一橫列與直欄各放一隻貓</span></li>
              <li>${icon('paw')}<span>貓咪之間不能互相接觸</span></li>
            </ul>
          </details>

          <section class="board-area" aria-label="遊戲棋盤">
            ${renderBoard()}
            <p class="game-status">
              ${icon(state.completed ? 'star' : 'fish')}
              <span>${state.completed ? '關卡完成！棋盤已鎖定。' : '進行中：點一下標記 X，0.5 秒內再點一下放置貓咪；稍後再點可取消。'}</span>
            </p>
          </section>
        </div>

        <nav class="action-rail" aria-label="遊戲操作">
          <button data-action="hint" class="action-button hint-button" ${state.completed ? 'disabled' : ''}>
            ${icon('fish')}<span>提示</span><small>${state.hints} 次</small>
          </button>
          <button data-action="undo" class="action-button undo-button" ${state.history.length === 0 || state.completed ? 'disabled' : ''}>
            ${icon('undo')}<span>復原</span>
          </button>
          <button data-action="replay" class="action-button replay-button">
            ${icon('yarn')}<span>重玩</span>
          </button>
          <button data-action="back-select" class="action-button select-button">
            ${icon('grid')}<span>返回選關</span>
          </button>
          ${
            state.completed
              ? `<button data-action="next-level" class="action-button next-button">
                  ${icon('fish')}<span>${nextLevel ? '下一關' : '完成關卡包'}</span>
                </button>`
              : ''
          }
        </nav>
      </div>
    `;
  }

  function render() {
    app.setAttribute('aria-busy', 'false');
    if (state.screen === 'game' && state.currentLevel) {
      renderGameScreen();
    } else {
      renderSelectionScreen();
    }
  }

  function createEmptyBoard(size) {
    return Array.from({ length: size }, () =>
      Array(size).fill(Core.CELL_STATE.EMPTY),
    );
  }

  function loadLevel(level) {
    window.clearTimeout(hintTimeout);
    state.screen = 'game';
    state.currentLevel = level;
    state.board = createEmptyBoard(level.size);
    state.history = [];
    state.moves = 0;
    state.hints = 0;
    state.startedAt = Date.now();
    state.elapsed = 0;
    state.completed = false;
    state.hintCell = null;
    state.lastCellClick = null;
    render();
    announce(`${getPack(level.packId).title}第 ${level.ordinal} 關開始。`);
    app.querySelector('.board-cell')?.focus();
  }

  function showDialog(dialog, trigger) {
    lastDialogTrigger = trigger || document.activeElement;
    dialog.returnValue = '';
    dialog.showModal();
    window.requestAnimationFrame(() => {
      const target =
        dialog.querySelector('.primary-button') ||
        dialog.querySelector('input:not([disabled])') ||
        dialog.querySelector('button:not([disabled])');
      target?.focus();
    });
  }

  function restoreDialogTrigger() {
    if (lastDialogTrigger?.isConnected) {
      lastDialogTrigger.focus();
      return;
    }

    const action = lastDialogTrigger?.dataset?.action;
    if (action) {
      app.querySelector(`[data-action="${action}"]`)?.focus();
    }
  }

  function createFocusToken(element = document.activeElement) {
    if (!element || !app.contains(element) || !element.dataset.action) {
      return null;
    }

    const token = { action: element.dataset.action };
    for (const key of ['packId', 'direction', 'levelId', 'row', 'column']) {
      if (element.dataset[key] !== undefined) {
        token[key] = element.dataset[key];
      }
    }
    return token;
  }

  function restoreAppFocus(token, fallbackSelector = '') {
    let target = null;

    if (token) {
      const selector = Object.entries(token)
        .map(([key, value]) => {
          const attribute = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
          return `[data-${attribute}="${value}"]`;
        })
        .join('');
      target = app.querySelector(selector);
    }

    if (!target || target.disabled) {
      target = fallbackSelector ? app.querySelector(fallbackSelector) : null;
    }
    target?.focus();
  }

  function openSettings(trigger) {
    applySettings();
    showDialog(settingsDialog, trigger);
  }

  function openConfirm(options, trigger) {
    document.querySelector('#confirm-kicker').textContent =
      options.kicker || '請確認';
    document.querySelector('#confirm-title').textContent = options.title;
    document.querySelector('#confirm-message').textContent = options.message;
    document.querySelector('#confirm-primary').textContent =
      options.confirmLabel || '確認';
    pendingConfirmAction = options.onConfirm;
    showDialog(confirmDialog, trigger);
  }

  function replayCurrentLevel() {
    if (state.currentLevel) {
      loadLevel(state.currentLevel);
    }
  }

  function requestReplay(trigger) {
    openConfirm(
      {
        title: '要重新開始這一關嗎？',
        message: '目前棋盤、步數、時間、提示與復原紀錄都會清除；已完成的歷史紀錄不受影響。',
        confirmLabel: '重新開始',
        onConfirm: replayCurrentLevel,
      },
      trigger,
    );
  }

  function mergeRecord(levelId, newRecord) {
    const existing = progress.records[levelId];
    if (!existing || newRecord.stars > existing.stars) {
      progress.records[levelId] = newRecord;
      return;
    }

    if (newRecord.stars === existing.stars) {
      progress.records[levelId] = {
        completed: true,
        stars: existing.stars,
        bestTime: Math.min(existing.bestTime, newRecord.bestTime),
        bestMoves: Math.min(existing.bestMoves, newRecord.bestMoves),
      };
    }
  }

  function completeLevel() {
    const level = state.currentLevel;
    const pack = getPack(level.packId);
    const packLevels = levelsByPack.get(pack.id) || [];
    const nextLevel = packLevels.find(
      (candidate) => candidate.ordinal === level.ordinal + 1,
    );
    state.elapsed = getElapsedSeconds();
    state.completed = true;
    const stars = state.hints === 0 ? 3 : state.hints === 1 ? 2 : 1;

    mergeRecord(level.id, {
      completed: true,
      stars,
      bestTime: state.elapsed,
      bestMoves: state.moves,
    });
    if (nextLevel) {
      progress.unlockedByPack[pack.id] = Core.normalizeUnlockedLevelIds(
        packLevels,
        [...progress.unlockedByPack[pack.id], nextLevel.id],
        progress.records,
      );
    }
    saveProgress();
    render();

    document.querySelector('#completion-stars').innerHTML = starsMarkup(stars);
    document
      .querySelector('#completion-stars')
      .setAttribute('aria-label', `獲得 ${stars} 顆星`);
    document.querySelector('#result-time').textContent =
      Core.formatElapsedTime(state.elapsed);
    document.querySelector('#result-moves').textContent = String(state.moves);
    document.querySelector('#result-hints').textContent = String(state.hints);
    document.querySelector('#unlock-message').textContent = nextLevel
      ? `已解鎖第 ${nextLevel.ordinal} 關`
      : `${pack.title}全部完成`;
    document.querySelector('#completion-next').textContent = nextLevel
      ? '下一關'
      : '完成關卡包';
    showDialog(completionDialog, app.querySelector('[data-action="next-level"]'));
    announce(`關卡完成，獲得 ${stars} 顆星。`);
  }

  function cycleCell(row, column) {
    if (state.completed) {
      return;
    }

    const clickedAt = Date.now();
    const isSameCell =
      state.lastCellClick?.row === row &&
      state.lastCellClick?.column === column;
    const elapsedSincePreviousClick = isSameCell
      ? clickedAt - state.lastCellClick.clickedAt
      : Infinity;
    const previousState = state.board[row][column];
    const nextState = Core.resolveTimedCellState(
      previousState,
      elapsedSincePreviousClick,
    );
    state.lastCellClick = { row, column, clickedAt };
    if (nextState === previousState) {
      return;
    }

    state.history.push({ row, column, previousState, nextState });
    state.board[row][column] = nextState;
    state.moves += 1;

    if (Core.isLevelComplete(state.board, state.currentLevel)) {
      completeLevel();
      return;
    }

    render();
    app
      .querySelector(
        `[data-action="cycle-cell"][data-row="${row}"][data-column="${column}"]`,
      )
      ?.focus();
  }

  function useHint(trigger) {
    if (state.completed) {
      return;
    }

    const hintCell = Core.getHintCell(state.board, state.currentLevel);
    if (!hintCell) {
      announce('目前沒有可提供的提示。');
      return;
    }

    state.hints += 1;
    state.hintCell = hintCell;
    const triggerToken = createFocusToken(trigger);
    render();
    restoreAppFocus(triggerToken, '[data-action="hint"]');
    announce(`提示：請留意第 ${hintCell.row + 1} 橫列。`);
    window.clearTimeout(hintTimeout);
    hintTimeout = window.setTimeout(() => {
      state.hintCell = null;
      if (state.screen === 'game') {
        const activeToken = createFocusToken();
        render();
        restoreAppFocus(activeToken);
      }
    }, 4000);
  }

  function undoMove(trigger) {
    const move = state.history.pop();
    if (!move || state.completed) {
      return;
    }

    state.board[move.row][move.column] = move.previousState;
    state.hintCell = null;
    state.lastCellClick = null;
    const triggerToken = createFocusToken(trigger);
    render();
    restoreAppFocus(triggerToken, '[data-action="hint"]');
    announce(`已復原第 ${move.row + 1} 橫列的上一步。`);
  }

  function returnToSelection() {
    window.clearTimeout(hintTimeout);
    state.screen = 'select';
    state.currentLevel = null;
    state.hintCell = null;
    state.lastCellClick = null;
    render();
    app.querySelector('.pack-header')?.focus();
  }

  function goToNextLevel() {
    if (!state.currentLevel) {
      return;
    }

    const packLevels = levelsByPack.get(state.currentLevel.packId) || [];
    const nextLevel = packLevels.find(
      (candidate) => candidate.ordinal === state.currentLevel.ordinal + 1,
    );
    if (nextLevel) {
      loadLevel(nextLevel);
    } else {
      returnToSelection();
      announce(`${getPack(packLevels[0].packId).title}已全部完成。`);
    }
  }

  app.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) {
      state.lastCellClick = null;
      return;
    }

    const action = button.dataset.action;
    if (action !== 'cycle-cell') {
      state.lastCellClick = null;
    }

    if (action === 'settings') {
      openSettings(button);
    } else if (action === 'toggle-pack') {
      const triggerToken = createFocusToken(button);
      state.expandedPackId =
        state.expandedPackId === button.dataset.packId
          ? null
          : button.dataset.packId;
      render();
      restoreAppFocus(triggerToken);
    } else if (action === 'page-pack') {
      const packId = button.dataset.packId;
      const direction = Number(button.dataset.direction);
      const triggerToken = createFocusToken(button);
      state.pageByPack[packId] += Number(button.dataset.direction);
      render();
      restoreAppFocus(
        triggerToken,
        `[data-action="page-pack"][data-pack-id="${packId}"][data-direction="${-direction}"]:not(:disabled)`,
      );
    } else if (action === 'open-level') {
      const level = levels.find(
        (candidate) => candidate.id === button.dataset.levelId,
      );
      if (level) {
        loadLevel(level);
      }
    } else if (action === 'cycle-cell') {
      cycleCell(Number(button.dataset.row), Number(button.dataset.column));
    } else if (action === 'hint') {
      useHint(button);
    } else if (action === 'undo') {
      undoMove(button);
    } else if (action === 'replay') {
      requestReplay(button);
    } else if (action === 'back-select') {
      returnToSelection();
    } else if (action === 'next-level') {
      goToNextLevel();
    }
  });

  autoCheckInput.addEventListener('change', () => {
    progress.settings.autoCheck = autoCheckInput.checked;
    saveProgress();
    if (state.screen === 'game') {
      render();
    }
  });

  animationsInput.addEventListener('change', () => {
    progress.settings.animations = animationsInput.checked;
    saveProgress();
    applySettings();
  });

  document
    .querySelector('#reset-progress-button')
    .addEventListener('click', () => {
      const settingsTrigger = lastDialogTrigger;
      settingsDialog.close();
      window.setTimeout(() => {
        openConfirm(
          {
            kicker: '第一次確認',
            title: '要重設全部進度嗎？',
            message: '所有解鎖、星級、最佳時間與步數都會清除。',
            confirmLabel: '繼續確認',
            onConfirm: () => {
              window.setTimeout(() => {
                openConfirm(
                  {
                    kicker: '最後確認',
                    title: '確定永久重設？',
                    message: '這個動作無法復原。遊戲會回到四個關卡包各只解鎖第 1 關的狀態。',
                    confirmLabel: '永久重設',
                    onConfirm: () => {
                      clearStoredProgress();
                      progress = createDefaultProgress();
                      saveProgress();
                      applySettings();
                      returnToSelection();
                      announce('全部進度已重設。');
                    },
                  },
                  settingsTrigger,
                );
              }, 0);
            },
          },
          settingsTrigger,
        );
      }, 0);
    });

  confirmDialog.addEventListener('close', () => {
    if (confirmDialog.returnValue === 'confirm' && pendingConfirmAction) {
      const action = pendingConfirmAction;
      pendingConfirmAction = null;
      action();
      return;
    }
    pendingConfirmAction = null;
    restoreDialogTrigger();
  });

  settingsDialog.addEventListener('close', () => {
    restoreDialogTrigger();
  });

  completionDialog.addEventListener('close', () => {
    const action = completionDialog.returnValue;
    if (action === 'next') {
      goToNextLevel();
    } else if (action === 'replay') {
      replayCurrentLevel();
    } else if (action === 'select') {
      returnToSelection();
    } else {
      app.querySelector('[data-action="next-level"]')?.focus();
    }
  });

  window.setInterval(() => {
    if (state.screen === 'game' && state.currentLevel && !state.completed) {
      const timeElement = document.querySelector('#hud-time');
      if (timeElement) {
        timeElement.textContent = Core.formatElapsedTime(getElapsedSeconds());
      }
    }
  }, 1000);

  hydrateStaticIcons();
  applySettings();
  render();
})();
