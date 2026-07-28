(function initCatWordRenderer(root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.CatWordRenderer = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function createRenderer() {
  'use strict';

  function formatRecord(record, Core) {
    if (!record) {
      return { stars: '☆ ☆ ☆', meta: '尚未完成' };
    }
    return {
      stars: `${'★'.repeat(record.stars)}${'☆'.repeat(3 - record.stars)}`,
      meta: `${record.bestMoves} 步 · ${Core.formatElapsedTime(record.bestTime)}`,
    };
  }

  function calculateProgress(progress) {
    const records = Object.values(progress.records || {});
    return {
      completed: records.filter((record) => record.completed !== false).length,
      stars: records.reduce((total, record) => total + (record.stars || 0), 0),
    };
  }

  function renderHome(elements, progress, chapters, handlers) {
    const summary = calculateProgress(progress);
    elements.homeCompleted.textContent = `${summary.completed} / 100`;
    elements.homeStars.textContent = `${summary.stars} / 300`;
    elements.continueButton.hidden = !progress.currentSession;
    elements.continueButton.onclick = handlers.continueGame;
    elements.startButton.onclick = handlers.startGame;
    elements.chooseButton.onclick = handlers.openLevels;
    elements.rulesButton.onclick = handlers.openRules;
    elements.homeSettingsButton.onclick = handlers.openSettings;
    elements.chapterProgress.replaceChildren(
      ...chapters.map((chapter) => {
        const start = chapter.range[0];
        const end = chapter.range[1];
        const completed = Object.keys(progress.records || {}).filter((id) => {
          const ordinal = Number(id.slice(1));
          return ordinal >= start && ordinal <= end;
        }).length;
        const row = document.createElement('div');
        row.className = 'chapter-progress-row';
        row.innerHTML = `<span>第 ${chapter.id} 章 · ${chapter.title}</span><strong>${completed} / 20</strong>`;
        return row;
      }),
    );
  }

  function renderLevelSelect(
    elements,
    levels,
    progress,
    chapter,
    page,
    Core,
    handlers,
  ) {
    elements.chapterTabs.replaceChildren(
      ...Array.from({ length: 5 }, (_, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'chapter-tab';
        button.textContent = `第 ${index + 1} 章`;
        button.dataset.selected = String(chapter === index + 1);
        button.setAttribute('aria-pressed', String(chapter === index + 1));
        button.onclick = () => handlers.changeChapter(index + 1);
        return button;
      }),
    );
    const chapterLevels = levels.filter((level) => level.chapter === chapter);
    const pageLevels = chapterLevels.slice(page * 10, page * 10 + 10);
    elements.levelGrid.replaceChildren(
      ...pageLevels.map((level) => {
        const locked = level.ordinal > progress.unlockedLevel;
        const record = progress.records[level.id];
        const formatted = formatRecord(record, Core);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'level-button';
        button.disabled = locked;
        button.setAttribute('aria-disabled', String(locked));
        button.innerHTML = `
          <span class="level-id">${level.id}</span>
          <span class="level-stars" aria-label="${record?.stars || 0} 顆星">${locked ? '🔒' : formatted.stars}</span>
          <span class="level-meta">${locked ? '完成前一關解鎖' : formatted.meta}</span>
        `;
        if (!locked) {
          button.onclick = () => handlers.openLevel(level.id);
        }
        return button;
      }),
    );
    elements.levelPage.textContent = `第 ${page + 1} / 2 頁`;
    elements.previousLevelPage.disabled = page === 0;
    elements.nextLevelPage.disabled = page === 1;
    elements.previousLevelPage.onclick = () => handlers.changePage(page - 1);
    elements.nextLevelPage.onclick = () => handlers.changePage(page + 1);
    elements.levelBack.onclick = handlers.backHome;
  }

  function createCard(level, cardId, playable, selected, highlighted, handlers) {
    const card = globalThis.CatWordCore.getCardById(level, cardId);
    const category = globalThis.CatWordCore.getCategoryById(
      level,
      card.categoryId,
    );
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `playing-card ${card.cardType}-card`;
    button.dataset.cardId = card.id;
    button.dataset.categoryId = card.categoryId;
    button.dataset.selected = String(selected);
    button.dataset.highlighted = String(highlighted);
    button.disabled = !playable;
    button.tabIndex = playable ? 0 : -1;
    const visibleLabel =
      card.cardType === 'category' ? category.label : card.label;
    button.setAttribute(
      'aria-label',
      `${visibleLabel}，${card.cardType === 'category' ? '分類牌' : '提示牌'}${playable ? '，可操作' : '，被覆蓋'}`,
    );
    if (card.cardType === 'category') {
      button.innerHTML = `
        <span class="card-symbol" aria-hidden="true">${category.symbol}</span>
        <strong class="card-label">${category.label}</strong>
        <span class="card-kind">分類牌 · ${category.required} 張</span>
      `;
    } else {
      button.innerHTML = `
        ${card.displayType === 'icon' ? `<span class="card-icon" aria-hidden="true">${card.icon}</span>` : ''}
        <strong class="card-label">${card.label}</strong>
        <span class="card-kind">提示牌</span>
      `;
    }
    if (playable) {
      button.addEventListener('pointerdown', handlers.cardPointerDown);
      button.addEventListener('click', handlers.cardClick);
      button.addEventListener('keydown', handlers.cardKeyDown);
    }
    return button;
  }

  function createCardBack(index) {
    const back = document.createElement('div');
    back.className = 'card-back';
    back.style.setProperty('--stack-index', index);
    back.setAttribute('aria-hidden', 'true');
    back.innerHTML =
      '<span class="card-back-paw">🐾</span><span class="card-back-yarn"></span>';
    return back;
  }

  function renderSlots(elements, level, state, highlightedAction, handlers) {
    elements.categorySlots.replaceChildren(
      ...state.categorySlots.map((categoryId, slotIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'category-slot';
        button.dataset.slotIndex = slotIndex;
        button.dataset.categoryId = categoryId || '';
        const highlighted =
          highlightedAction?.type === 'activateCategory' &&
          highlightedAction.slotIndex === slotIndex;
        button.dataset.highlighted = String(highlighted);
        if (!categoryId) {
          button.innerHTML =
            '<span class="slot-paw" aria-hidden="true">🐾</span><span>分類槽</span>';
          button.setAttribute(
            'aria-label',
            `第 ${slotIndex + 1} 個分類槽，空白`,
          );
        } else {
          const category = globalThis.CatWordCore.getCategoryById(
            level,
            categoryId,
          );
          const progress = globalThis.CatWordCore.calculateCategoryProgress(
            state,
            level,
            categoryId,
          );
          button.innerHTML = `
            <span class="slot-symbol" aria-hidden="true">${category.symbol}</span>
            <strong>${category.label}</strong>
            <span>${progress.collected} / ${progress.required}</span>
          `;
          button.setAttribute(
            'aria-label',
            `第 ${slotIndex + 1} 個分類槽，${category.label}，${progress.collected} / ${progress.required}`,
          );
        }
        button.addEventListener('click', handlers.slotClick);
        button.addEventListener('keydown', handlers.slotKeyDown);
        return button;
      }),
    );
  }

  function renderSpareCells(
    elements,
    level,
    state,
    highlightedAction,
    handlers,
  ) {
    elements.spareCells.replaceChildren(
      ...state.spareCells.map((cardId, spareIndex) => {
        if (!cardId) {
          const empty = document.createElement('button');
          empty.type = 'button';
          empty.className = 'spare-cell';
          empty.dataset.spareIndex = spareIndex;
          empty.dataset.highlighted = String(
            highlightedAction?.type === 'moveToSpare' &&
              highlightedAction.spareIndex === spareIndex,
          );
          empty.innerHTML =
            '<span aria-hidden="true">＋</span><small>暫放</small>';
          empty.setAttribute(
            'aria-label',
            `第 ${spareIndex + 1} 個備用格，空白`,
          );
          empty.addEventListener('click', handlers.spareClick);
          empty.addEventListener('keydown', handlers.targetKeyDown);
          return empty;
        }

        const cell = document.createElement('section');
        cell.className = 'spare-cell';
        cell.dataset.spareIndex = spareIndex;
        cell.dataset.occupied = 'true';
        cell.setAttribute(
          'aria-label',
          `第 ${spareIndex + 1} 個備用格，已有一張牌`,
        );
        const highlighted =
          highlightedAction?.cardId === cardId &&
          highlightedAction?.spareIndex === spareIndex &&
          highlightedAction?.type !== 'moveToSpare';
        const card = createCard(
          level,
          cardId,
          true,
          state.selectedCardId === cardId,
          highlighted,
          handlers,
        );
        card.style.setProperty('--stack-index', 0);
        card.dataset.spareIndex = spareIndex;
        cell.append(card);
        return cell;
      }),
    );
  }

  function renderTableau(elements, level, state, highlightedAction, handlers) {
    elements.tableau.replaceChildren(
      ...state.columns.map((column, columnIndex) => {
        const pile = document.createElement('section');
        pile.className = 'tableau-column';
        pile.dataset.columnIndex = columnIndex;
        pile.style.setProperty('--card-count', Math.max(column.length, 1));
        pile.setAttribute(
          'aria-label',
          `第 ${columnIndex + 1} 個牌堆，共 ${column.length} 張`,
        );
        if (column.length === 0) {
          const empty = document.createElement('button');
          empty.type = 'button';
          empty.className = 'empty-pile';
          empty.dataset.columnIndex = columnIndex;
          empty.dataset.highlighted = String(
            highlightedAction?.type === 'moveToColumn' &&
              highlightedAction.columnIndex === columnIndex,
          );
          empty.innerHTML = '<span aria-hidden="true">🐾</span><small>空牌堆</small>';
          empty.addEventListener('click', handlers.columnClick);
          empty.addEventListener('keydown', handlers.targetKeyDown);
          pile.append(empty);
          return pile;
        }
        for (let index = 0; index < column.length - 1; index += 1) {
          pile.append(createCardBack(index));
        }
        const cardId = column.at(-1);
        const highlighted =
          highlightedAction?.cardId === cardId &&
          highlightedAction?.columnIndex === columnIndex;
        const card = createCard(
          level,
          cardId,
          true,
          state.selectedCardId === cardId,
          highlighted,
          handlers,
        );
        card.style.setProperty('--stack-index', column.length - 1);
        card.dataset.columnIndex = columnIndex;
        pile.append(card);
        return pile;
      }),
    );
  }

  function renderGame(
    elements,
    level,
    state,
    undoCount,
    settings,
    highlightedAction,
    handlers,
  ) {
    const chapterTitle = globalThis.CAT_WORD_CONFIG.chapters.find(
      (chapter) => chapter.id === level.chapter,
    )?.title;
    elements.gameLevel.textContent = `第 ${level.chapter} 章 · ${level.id}`;
    elements.gameChapter.textContent = chapterTitle || '';
    elements.remainingMoves.textContent = String(
      Math.max(0, level.moveLimit - state.movesUsed),
    );
    elements.elapsed.textContent =
      globalThis.CatWordCore.formatElapsedTime(state.elapsedSeconds);
    elements.hints.textContent = String(state.hintsUsed);
    elements.deckCount.textContent = String(
      globalThis.CatWordCore.getRemainingDeckCount(state, level),
    );
    elements.dealButton.disabled =
      !globalThis.CatWordCore.canDealNextBatch(state, level) ||
      state.completed ||
      state.failed;
    elements.dealButton.onclick = handlers.deal;
    elements.undoButton.disabled = undoCount === 0 || state.completed;
    elements.undoButton.onclick = handlers.undo;
    elements.hintButton.disabled = state.completed || state.failed;
    elements.hintButton.onclick = handlers.hint;
    elements.replayButton.onclick = handlers.replay;
    elements.gameBack.onclick = handlers.backLevels;
    elements.gameSettingsButton.onclick = handlers.openSettings;
    elements.gameScreen.dataset.animations = String(settings.animations);
    elements.gameScreen.dataset.largeText = String(settings.largeText);
    renderSlots(elements, level, state, highlightedAction, handlers);
    renderSpareCells(
      elements,
      level,
      state,
      highlightedAction,
      handlers,
    );
    renderTableau(elements, level, state, highlightedAction, handlers);
  }

  function updateClock(elements, state, level) {
    elements.elapsed.textContent =
      globalThis.CatWordCore.formatElapsedTime(state.elapsedSeconds);
    elements.remainingMoves.textContent = String(
      Math.max(0, level.moveLimit - state.movesUsed),
    );
  }

  function showScreen(elements, name) {
    for (const screen of elements.screens) {
      screen.hidden = screen.id !== `${name}-screen`;
    }
    document.body.dataset.screen = name;
  }

  return Object.freeze({
    calculateProgress,
    renderHome,
    renderLevelSelect,
    renderGame,
    updateClock,
    showScreen,
  });
});
