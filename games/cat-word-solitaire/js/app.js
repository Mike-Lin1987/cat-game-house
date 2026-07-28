(function initializeCatWordGame() {
  'use strict';

  const PORTAL_HREF =
    window.location.protocol === 'file:' ? '../../index.html' : '../../';
  const portalHomeLink = document.querySelector('[data-portal-home]');
  if (portalHomeLink) {
    portalHomeLink.href = PORTAL_HREF;
  }

  const Config = window.CAT_WORD_CONFIG;
  const Core = window.CatWordCore;
  const Solver = window.CatWordSolver;
  const Storage = window.CatWordStorage;
  const Motion = window.CatWordMotion;
  const Renderer = window.CatWordRenderer;
  const levels = window.CAT_WORD_LEVELS;
  const levelsById = new Map(levels.map((level) => [level.id, level]));

  const byId = (id) => document.getElementById(id);
  const elements = {
    screens: [...document.querySelectorAll('.screen')],
    homeCompleted: byId('home-completed'),
    homeStars: byId('home-stars'),
    chapterProgress: byId('chapter-progress'),
    startButton: byId('start-button'),
    continueButton: byId('continue-button'),
    chooseButton: byId('choose-button'),
    rulesButton: byId('rules-button'),
    homeSettingsButton: byId('home-settings-button'),
    levelBack: byId('level-back'),
    chapterTabs: byId('chapter-tabs'),
    levelGrid: byId('level-grid'),
    levelPage: byId('level-page'),
    previousLevelPage: byId('previous-level-page'),
    nextLevelPage: byId('next-level-page'),
    gameScreen: byId('game-screen'),
    gameBack: byId('game-back'),
    gameLevel: byId('game-level'),
    gameChapter: byId('game-chapter'),
    remainingMoves: byId('remaining-moves'),
    elapsed: byId('elapsed'),
    hints: byId('hints'),
    gameSettingsButton: byId('game-settings-button'),
    gameTable: byId('game-table'),
    categorySlots: byId('category-slots'),
    deckCount: byId('deck-count'),
    dealButton: byId('deal-button'),
    tableau: byId('tableau'),
    undoButton: byId('undo-button'),
    hintButton: byId('hint-button'),
    replayButton: byId('replay-button'),
    liveRegion: byId('live-region'),
    toast: byId('toast'),
  };

  const dialogs = {
    settings: byId('settings-dialog'),
    rules: byId('rules-dialog'),
    zoom: byId('zoom-dialog'),
    result: byId('result-dialog'),
    message: byId('message-dialog'),
  };

  let progress = Storage.loadProgress();
  let settings = progress.settings;
  let currentScreen = 'home';
  let currentLevel = null;
  let gameState = null;
  let undoStack = [];
  let selectedChapter = 1;
  let selectedPage = 0;
  let highlightedAction = null;
  let highlightTimer = null;
  let toastTimer = null;
  let lastHintSignature = null;
  let gesture = null;
  let suppressClickUntil = 0;
  let motionBusy = false;
  let audioContext = null;
  let previousDialogFocus = null;
  let resetArmed = false;
  const reducedMotionQuery = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  );

  function announce(message) {
    elements.liveRegion.textContent = '';
    window.setTimeout(() => {
      elements.liveRegion.textContent = message;
    }, 20);
  }

  function showToast(message, tone = 'neutral') {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.dataset.tone = tone;
    elements.toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 2600);
    announce(message);
  }

  function playTone(kind) {
    if (!settings.sound) return;
    try {
      audioContext ||= new (
        window.AudioContext || window.webkitAudioContext
      )();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = kind === 'error' ? 'sawtooth' : 'sine';
      oscillator.frequency.value =
        kind === 'complete' ? 720 : kind === 'error' ? 180 : 440;
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.08,
        audioContext.currentTime + 0.02,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.16,
      );
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.18);
    } catch {
      // Audio is optional. Browser policy must never interrupt the game.
    }
  }

  function getFocusable(dialog) {
    return [
      ...dialog.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ];
  }

  function openDialog(dialog) {
    if (!dialog || dialog.open) return;
    previousDialogFocus = document.activeElement;
    dialog.showModal();
    getFocusable(dialog)[0]?.focus();
  }

  function closeDialog(dialog) {
    if (dialog?.open) {
      dialog.close();
    }
  }

  for (const dialog of Object.values(dialogs)) {
    dialog.addEventListener('keydown', (event) => {
      if (event.key !== 'Tab') return;
      const focusable = getFocusable(dialog);
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    dialog.addEventListener('close', () => {
      previousDialogFocus?.focus?.();
      previousDialogFocus = null;
    });
  }

  for (const button of document.querySelectorAll('[data-close-dialog]')) {
    button.addEventListener('click', () => closeDialog(button.closest('dialog')));
  }

  function saveSession() {
    if (!currentLevel || !gameState || gameState.completed) return;
    Storage.saveSession({
      levelId: currentLevel.id,
      layoutSignature: currentLevel.layoutSignature,
      state: gameState,
      undoStack: undoStack.slice(-Config.maxUndoStates),
    });
    progress = Storage.loadProgress();
  }

  function motionEnabled() {
    return settings.animations && !reducedMotionQuery.matches;
  }

  function setMotionBusy(busy) {
    motionBusy = Boolean(busy);
    elements.gameScreen.dataset.dealing = String(motionBusy);
    elements.gameTable.setAttribute('aria-busy', String(motionBusy));
    elements.dealButton.disabled =
      motionBusy ||
      !currentLevel ||
      !gameState ||
      !Core.canDealNextBatch(gameState, currentLevel) ||
      gameState.completed ||
      gameState.failed;
  }

  function findRenderedCard(cardId) {
    return [...elements.tableau.querySelectorAll('.playing-card')].find(
      (card) => card.dataset.cardId === cardId,
    );
  }

  async function animateDeal(cardIds) {
    if (!motionEnabled() || !Array.isArray(cardIds) || cardIds.length === 0) {
      return;
    }
    const deckArt = elements.dealButton.querySelector('.deck-art');
    const cards = cardIds
      .map((cardId) => findRenderedCard(cardId))
      .filter(Boolean);
    if (!deckArt || cards.length === 0) return;

    setMotionBusy(true);
    await new Promise((resolve) => window.requestAnimationFrame(resolve));
    const deckRect = deckArt.getBoundingClientRect();
    const animations = cards.map((card) => {
      const columnIndex = Number(card.dataset.columnIndex);
      const motion = Motion.createDealMotion(
        deckRect,
        card.getBoundingClientRect(),
        columnIndex,
      );
      card.classList.add('dealt-card');
      if (typeof card.animate !== 'function') {
        return Promise.resolve();
      }
      return card.animate(motion.keyframes, motion.options).finished.catch(
        () => undefined,
      );
    });
    await Promise.all(animations);
    for (const card of cards) {
      card.classList.remove('dealt-card');
    }
    setMotionBusy(false);
  }

  function renderHome() {
    clearGesture();
    progress = Storage.loadProgress();
    settings = progress.settings;
    currentScreen = 'home';
    Renderer.showScreen(elements, 'home');
    Renderer.renderHome(elements, progress, Config.chapters, handlers);
  }

  function renderLevels() {
    clearGesture();
    progress = Storage.loadProgress();
    currentScreen = 'levels';
    Renderer.showScreen(elements, 'levels');
    Renderer.renderLevelSelect(
      elements,
      levels,
      progress,
      selectedChapter,
      selectedPage,
      Core,
      handlers,
    );
  }

  function renderGame() {
    if (!currentLevel || !gameState) return;
    clearGesture();
    currentScreen = 'game';
    Renderer.showScreen(elements, 'game');
    Renderer.renderGame(
      elements,
      currentLevel,
      gameState,
      undoStack.length,
      settings,
      highlightedAction,
      handlers,
    );
    elements.gameScreen.dataset.dealing = String(motionBusy);
    elements.gameTable.setAttribute('aria-busy', String(motionBusy));
    if (motionBusy) {
      elements.dealButton.disabled = true;
    }
  }

  function startFresh(levelId) {
    const level = levelsById.get(levelId);
    if (!level || level.ordinal > progress.unlockedLevel) return;
    currentLevel = level;
    gameState = Core.createInitialState(level);
    undoStack = [];
    highlightedAction = null;
    lastHintSignature = null;
    saveSession();
    renderGame();
    announce(`${level.id} 開始，五個牌堆由左至右有 2、3、4、5、6 張牌`);
  }

  function resumeSession() {
    progress = Storage.loadProgress();
    const session = progress.currentSession;
    if (!session) {
      startFresh(`L${String(progress.unlockedLevel).padStart(3, '0')}`);
      return;
    }
    const level = levelsById.get(session.levelId);
    const compatible = level && Storage.isSessionCompatible(session, level);
    const restored = compatible
      ? Core.deserializeSession(session.state, level)
      : null;
    if (!level || !compatible || !restored) {
      Storage.clearSession();
      showToast(
        compatible
          ? '未完成牌局格式已更新，已安全重新開始。'
          : '關卡難度已更新，未完成牌局已重新開始。',
      );
      startFresh(`L${String(progress.unlockedLevel).padStart(3, '0')}`);
      return;
    }
    currentLevel = level;
    gameState = restored;
    undoStack = Array.isArray(session.undoStack)
      ? session.undoStack
          .map((snapshot) => Core.deserializeSession(snapshot, level))
          .filter(Boolean)
          .slice(-Config.maxUndoStates)
      : [];
    renderGame();
    announce(`繼續 ${level.id}`);
  }

  function pushHistory(snapshot) {
    undoStack.push(Core.cloneState(snapshot));
    if (undoStack.length > Config.maxUndoStates) {
      undoStack.shift();
    }
  }

  function outcomeMessage(outcome) {
    return {
      [Core.OUTCOME.SLOT_OCCUPIED]: '這個分類槽已被占用',
      [Core.OUTCOME.NO_EMPTY_SLOT]: '五個分類槽都已使用，請先完成一個分類',
      [Core.OUTCOME.CARD_NOT_PLAYABLE]: '只能操作每個牌堆露出的最後一張',
      [Core.OUTCOME.CATEGORY_NOT_ACTIVE]: '這個分類還沒有出現',
      [Core.OUTCOME.WRONG_CATEGORY]: '這張牌不屬於這個分類',
      [Core.OUTCOME.DECK_EMPTY]: '牌庫已經發完',
      [Core.OUTCOME.INVALID_ACTION]: '目前不能這樣移動',
    }[outcome] || '目前不能執行這個動作';
  }

  function completeCurrentLevel() {
    const stars = Core.calculateStars(gameState, currentLevel);
    progress = Storage.updateRecord(
      progress,
      currentLevel,
      {
        stars,
        movesUsed: gameState.movesUsed,
        elapsedSeconds: gameState.elapsedSeconds,
      },
    );
    const allComplete = currentLevel.ordinal === 100;
    byId('result-title').textContent = allComplete
      ? '恭喜完成全部 100 關'
      : `${currentLevel.id} 關卡完成`;
    byId('result-stars').textContent =
      `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}`;
    const totalStars = Object.values(progress.records).reduce(
      (sum, record) => sum + record.stars,
      0,
    );
    const totalTime = Object.values(progress.records).reduce(
      (sum, record) => sum + record.bestTime,
      0,
    );
    const stats = [
      ['使用步數', `${gameState.movesUsed} / ${currentLevel.moveLimit}`],
      [
        '剩餘步數',
        String(Math.max(0, currentLevel.moveLimit - gameState.movesUsed)),
      ],
      ['完成時間', Core.formatElapsedTime(gameState.elapsedSeconds)],
      ['提示次數', String(gameState.hintsUsed)],
    ];
    if (allComplete) {
      stats.push(
        ['完成關卡', `${Object.keys(progress.records).length} / 100`],
        ['總星數', `${totalStars} / 300`],
        ['總遊玩時間', Core.formatElapsedTime(totalTime)],
        [
          '未滿三星',
          String(
            Object.values(progress.records).filter(
              (record) => record.stars < 3,
            ).length,
          ),
        ],
      );
    }
    byId('result-stats').replaceChildren(
      ...stats.flatMap(([term, detail]) => {
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = term;
        dd.textContent = detail;
        return [dt, dd];
      }),
    );
    byId('result-next').textContent = allComplete ? '重新挑戰' : '下一關';
    openDialog(dialogs.result);
    playTone('complete');
    announce(`${currentLevel.id} 完成，獲得 ${stars} 顆星`);
  }

  function showBlockedDialog(title, message) {
    byId('message-title').textContent = title;
    byId('message-text').textContent = message;
    byId('message-undo').disabled = undoStack.length === 0;
    openDialog(dialogs.message);
  }

  function afterStateChange(result) {
    const completedEvent = result.events.find(
      (event) => event.type === 'category-completed',
    );
    const dealtEvent = result.events.find(
      (event) => event.type === 'dealt',
    );
    const invalidEvent = result.events.find(
      (event) => event.type === 'invalid-drop',
    );
    if (completedEvent) {
      const category = Core.getCategoryById(
        currentLevel,
        completedEvent.categoryId,
      );
      showToast(`完成分類：${category.label}`, 'success');
      playTone('complete');
    } else if (invalidEvent) {
      showToast(outcomeMessage(invalidEvent.reason), 'error');
      playTone('error');
    } else {
      playTone('move');
    }

    saveSession();
    renderGame();
    if (dealtEvent) {
      void animateDeal(dealtEvent.cardIds);
    }
    if (gameState.completed) {
      completeCurrentLevel();
    } else if (gameState.failed) {
      showBlockedDialog(
        '步數用盡',
        '本局已用完可用步數，可以撤回最後一步或重新開始。',
      );
    } else if (Core.detectStalemate(gameState, currentLevel)) {
      showBlockedDialog(
        '目前沒有可執行的動作',
        '目前沒有可執行的動作，可以撤回或重新開始。',
      );
    }
  }

  function applyResult(result) {
    if (result.state === gameState) {
      showToast(outcomeMessage(result.outcome), 'error');
      playTone('error');
      return;
    }
    const snapshot = gameState;
    pushHistory(snapshot);
    gameState = result.state;
    highlightedAction = null;
    afterStateChange(result);
  }

  function performSelectedOnSlot(slotIndex) {
    if (!gameState.selectedCardId) {
      showToast('請先選擇一張露出的牌');
      return;
    }
    const card = Core.getCardById(currentLevel, gameState.selectedCardId);
    const targetCategoryId = gameState.categorySlots[slotIndex];
    const result =
      card.cardType === 'category'
        ? Core.activateCategory(
            gameState,
            currentLevel,
            card.id,
            slotIndex,
          )
        : Core.placeItem(
            gameState,
            currentLevel,
            card.id,
            targetCategoryId,
          );
    applyResult(result);
  }

  function selectCard(cardId) {
    const next = Core.cloneState(gameState);
    next.selectedCardId =
      gameState.selectedCardId === cardId ? null : cardId;
    gameState = next;
    renderGame();
    if (gameState.selectedCardId) {
      const card = Core.getCardById(currentLevel, cardId);
      announce(`已選擇 ${card.label || Core.getCategoryById(currentLevel, card.categoryId).label}`);
    } else {
      announce('已取消選取');
    }
  }

  function openZoom(cardId) {
    const card = Core.getCardById(currentLevel, cardId);
    const category = Core.getCategoryById(currentLevel, card.categoryId);
    const content = byId('zoom-content');
    content.replaceChildren();
    const icon = document.createElement('span');
    icon.className = 'zoom-icon';
    icon.textContent =
      card.cardType === 'category' ? category.symbol : card.icon || '🐾';
    const title = document.createElement('strong');
    title.textContent =
      card.cardType === 'category' ? category.label : card.label;
    const meta = document.createElement('span');
    meta.textContent =
      card.cardType === 'category'
        ? `分類牌 · 需要 ${category.required} 張提示`
        : `提示牌 · 分類：${category.label}`;
    content.append(icon, title, meta);
    openDialog(dialogs.zoom);
  }

  function resetDropTargets() {
    for (const slot of elements.categorySlots.querySelectorAll(
      '.category-slot',
    )) {
      delete slot.dataset.dropState;
      delete slot.dataset.dropHover;
    }
  }

  function prepareDropTargets(card) {
    for (const slot of elements.categorySlots.querySelectorAll(
      '.category-slot',
    )) {
      const slotIndex = Number(slot.dataset.slotIndex);
      const isLegal =
        card.cardType === 'category'
          ? Core.canActivateCategory(
              gameState,
              currentLevel,
              card.id,
              slotIndex,
            )
          : Core.canPlaceItem(
              gameState,
              currentLevel,
              card.id,
              slot.dataset.categoryId || null,
            );
      slot.dataset.dropState = Motion.getDropState(isLegal);
    }
  }

  function beginDrag(activeGesture) {
    const card = Core.getCardById(currentLevel, activeGesture.cardId);
    const rect = activeGesture.element.getBoundingClientRect();
    const ghost = activeGesture.element.cloneNode(true);
    ghost.classList.add('drag-ghost');
    ghost.classList.remove('drag-source');
    ghost.removeAttribute('id');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.tabIndex = -1;
    ghost.style.top = `${rect.top}px`;
    ghost.style.left = `${rect.left}px`;
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.transform =
      'translate3d(0, 0, 0) rotate(0deg) scale(1)';
    document.body.append(ghost);

    activeGesture.originRect = rect;
    activeGesture.ghost = ghost;
    activeGesture.element.classList.add('dragging', 'drag-source');
    document.body.dataset.dragging = 'true';
    prepareDropTargets(card);
  }

  function updateDrag(activeGesture, event) {
    activeGesture.ghost.style.transform = Motion.createDragTransform(
      { x: activeGesture.startX, y: activeGesture.startY },
      { x: event.clientX, y: event.clientY },
    );
    const hoveredSlot = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest('.category-slot');
    for (const slot of elements.categorySlots.querySelectorAll(
      '.category-slot',
    )) {
      if (slot === hoveredSlot) {
        slot.dataset.dropHover = 'true';
      } else {
        delete slot.dataset.dropHover;
      }
    }
    if (hoveredSlot) {
      activeGesture.ghost.dataset.dropState =
        hoveredSlot.dataset.dropState;
    } else {
      delete activeGesture.ghost.dataset.dropState;
    }
    activeGesture.hoveredSlot = hoveredSlot || null;
  }

  function cleanupGesture(activeGesture) {
    if (!activeGesture) return;
    window.clearTimeout(activeGesture.longPressTimer);
    activeGesture.element?.classList.remove('dragging', 'drag-source');
    activeGesture.ghost?.remove();
    resetDropTargets();
    delete document.body.dataset.dragging;
    if (gesture === activeGesture) {
      gesture = null;
    }
  }

  function clearGesture() {
    if (!gesture) return;
    const activeGesture = gesture;
    activeGesture.cancelled = true;
    cleanupGesture(activeGesture);
  }

  async function settleDrag(activeGesture, slot) {
    activeGesture.finishing = true;
    window.clearTimeout(activeGesture.longPressTimer);
    const ghost = activeGesture.ghost;
    const dropState = slot?.dataset.dropState || null;

    if (motionEnabled() && ghost && typeof ghost.animate === 'function') {
      const currentTransform = ghost.style.transform;
      let targetTransform =
        'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      let opacity = 1;
      let duration = 190;
      let easing = 'cubic-bezier(0.2, 0.85, 0.25, 1.25)';
      if (slot && dropState === Motion.DROP_STATE.VALID) {
        const snap = Motion.calculateSnapDelta(
          activeGesture.originRect,
          slot.getBoundingClientRect(),
        );
        targetTransform =
          `translate3d(${snap.x}px, ${snap.y}px, 0) rotate(0deg) scale(0.88)`;
        opacity = 0.35;
        duration = 150;
        easing = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
      }
      await ghost.animate(
        [
          { transform: currentTransform, opacity: 1 },
          { transform: targetTransform, opacity },
        ],
        { duration, easing, fill: 'forwards' },
      ).finished.catch(() => undefined);
    }

    if (activeGesture.cancelled || gesture !== activeGesture) return;
    const cardId = activeGesture.cardId;
    cleanupGesture(activeGesture);
    if (!slot) return;

    if (gameState.selectedCardId !== cardId) {
      const next = Core.cloneState(gameState);
      next.selectedCardId = cardId;
      gameState = next;
    }
    performSelectedOnSlot(Number(slot.dataset.slotIndex));
  }

  const handlers = {
    continueGame: resumeSession,
    startGame() {
      progress = Storage.loadProgress();
      startFresh(`L${String(progress.unlockedLevel).padStart(3, '0')}`);
    },
    openLevels() {
      selectedChapter = Math.ceil(progress.unlockedLevel / 20);
      selectedPage = ((progress.unlockedLevel - 1) % 20) >= 10 ? 1 : 0;
      renderLevels();
    },
    openRules() {
      openDialog(dialogs.rules);
    },
    openSettings() {
      settings = Storage.loadSettings();
      byId('animations-setting').checked = settings.animations;
      byId('sound-setting').checked = settings.sound;
      byId('large-text-setting').checked = settings.largeText;
      resetArmed = false;
      byId('reset-progress-button').textContent = '重設全部進度';
      openDialog(dialogs.settings);
    },
    backHome: renderHome,
    changeChapter(chapter) {
      selectedChapter = chapter;
      selectedPage = 0;
      renderLevels();
    },
    changePage(page) {
      selectedPage = Math.max(0, Math.min(1, page));
      renderLevels();
    },
    openLevel: startFresh,
    backLevels() {
      saveSession();
      selectedChapter = currentLevel?.chapter || selectedChapter;
      selectedPage = currentLevel && ((currentLevel.ordinal - 1) % 20) >= 10 ? 1 : 0;
      renderLevels();
    },
    deal() {
      if (motionBusy) return;
      applyResult(Core.dealNextBatch(gameState, currentLevel));
    },
    undo() {
      const snapshot = undoStack.pop();
      const result = Core.restoreSnapshot(
        gameState,
        snapshot,
        currentLevel,
      );
      if (result.state === gameState) {
        showToast('目前沒有可以撤回的動作');
        return;
      }
      gameState = result.state;
      highlightedAction = null;
      saveSession();
      renderGame();
      announce('已撤回上一個盤面，撤回消耗一步');
    },
    hint() {
      const stateSignature = Solver.normalizeState(gameState, currentLevel);
      const hint = Solver.getHint(gameState, currentLevel);
      if (!hint) {
        showToast('目前找不到可行提示');
        return;
      }
      const key = `${stateSignature}:${JSON.stringify(hint.action)}`;
      if (lastHintSignature === key) {
        showToast('盤面尚未改變，請先依照目前提示操作');
        return;
      }
      lastHintSignature = key;
      gameState = Core.useHint(gameState);
      highlightedAction = hint.action;
      saveSession();
      renderGame();
      showToast(hint.message);
      window.clearTimeout(highlightTimer);
      highlightTimer = window.setTimeout(() => {
        highlightedAction = null;
        if (currentScreen === 'game') renderGame();
      }, 4000);
    },
    replay() {
      if (!currentLevel) return;
      startFresh(currentLevel.id);
    },
    cardPointerDown(event) {
      if (motionBusy) return;
      const element = event.currentTarget;
      try {
        element.setPointerCapture?.(event.pointerId);
      } catch {
        // Synthetic and accessibility-driven pointer events may not be capturable.
      }
      gesture = {
        element,
        pointerId: event.pointerId,
        cardId: element.dataset.cardId,
        startX: event.clientX,
        startY: event.clientY,
        dragged: false,
        finishing: false,
        cancelled: false,
        longPressTimer: window.setTimeout(() => {
          if (gesture && !gesture.dragged) {
            suppressClickUntil = performance.now() + 500;
            openZoom(gesture.cardId);
          }
        }, 580),
      };
    },
    cardPointerMove(event) {
      if (
        !gesture ||
        gesture.pointerId !== event.pointerId ||
        gesture.finishing
      ) {
        return;
      }
      const distance = Math.hypot(
        event.clientX - gesture.startX,
        event.clientY - gesture.startY,
      );
      if (distance > 8) {
        window.clearTimeout(gesture.longPressTimer);
        if (!gesture.dragged) {
          gesture.dragged = true;
          beginDrag(gesture);
        }
        updateDrag(gesture, event);
      }
    },
    cardPointerUp(event) {
      if (
        !gesture ||
        gesture.pointerId !== event.pointerId ||
        gesture.finishing
      ) {
        return;
      }
      window.clearTimeout(gesture.longPressTimer);
      if (gesture.dragged) {
        const slot = document
          .elementFromPoint(event.clientX, event.clientY)
          ?.closest('.category-slot');
        suppressClickUntil = performance.now() + 500;
        void settleDrag(gesture, slot || null);
        return;
      }
      clearGesture();
    },
    cardPointerCancel: clearGesture,
    cardClick(event) {
      if (performance.now() < suppressClickUntil) return;
      selectCard(event.currentTarget.dataset.cardId);
    },
    cardKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectCard(event.currentTarget.dataset.cardId);
        return;
      }
      if (event.key === 'Escape') {
        const next = Core.cloneState(gameState);
        next.selectedCardId = null;
        gameState = next;
        renderGame();
        return;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' ? -1 : 1;
        const current = Number(event.currentTarget.dataset.columnIndex);
        for (let step = 1; step <= 5; step += 1) {
          const target = (current + direction * step + 5) % 5;
          const candidate = elements.tableau.querySelector(
            `.playing-card[data-column-index="${target}"]`,
          );
          if (candidate) {
            candidate.focus();
            break;
          }
        }
      }
    },
    slotClick(event) {
      performSelectedOnSlot(Number(event.currentTarget.dataset.slotIndex));
    },
    slotKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        performSelectedOnSlot(Number(event.currentTarget.dataset.slotIndex));
        return;
      }
      if (event.key === 'Escape') {
        const next = Core.cloneState(gameState);
        next.selectedCardId = null;
        gameState = next;
        renderGame();
        return;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' ? -1 : 1;
        const current = Number(event.currentTarget.dataset.slotIndex);
        const target = (current + direction + 5) % 5;
        elements.categorySlots
          .querySelector(`[data-slot-index="${target}"]`)
          ?.focus();
      }
    },
  };

  byId('global-settings').addEventListener('click', handlers.openSettings);
  byId('animations-setting').addEventListener('change', (event) => {
    settings = Storage.saveSettings({
      ...settings,
      animations: event.target.checked,
    });
    if (currentScreen === 'game') renderGame();
  });
  byId('sound-setting').addEventListener('change', (event) => {
    settings = Storage.saveSettings({
      ...settings,
      sound: event.target.checked,
    });
  });
  byId('large-text-setting').addEventListener('change', (event) => {
    settings = Storage.saveSettings({
      ...settings,
      largeText: event.target.checked,
    });
    if (currentScreen === 'game') renderGame();
  });
  byId('reset-progress-button').addEventListener('click', (event) => {
    if (!resetArmed) {
      resetArmed = true;
      event.currentTarget.textContent = '再按一次確認重設';
      window.setTimeout(() => {
        resetArmed = false;
        event.currentTarget.textContent = '重設全部進度';
      }, 4000);
      return;
    }
    progress = Storage.resetProgress(progress);
    currentLevel = null;
    gameState = null;
    undoStack = [];
    closeDialog(dialogs.settings);
    renderHome();
    showToast('全部進度已重設，設定已保留');
  });

  byId('result-replay').addEventListener('click', () => {
    closeDialog(dialogs.result);
    handlers.replay();
  });
  byId('result-levels').addEventListener('click', () => {
    closeDialog(dialogs.result);
    handlers.backLevels();
  });
  byId('result-next').addEventListener('click', () => {
    const nextOrdinal =
      currentLevel.ordinal === 100 ? 1 : currentLevel.ordinal + 1;
    closeDialog(dialogs.result);
    startFresh(`L${String(nextOrdinal).padStart(3, '0')}`);
  });
  byId('message-undo').addEventListener('click', () => {
    closeDialog(dialogs.message);
    handlers.undo();
  });
  byId('message-replay').addEventListener('click', () => {
    closeDialog(dialogs.message);
    handlers.replay();
  });
  byId('message-levels').addEventListener('click', () => {
    closeDialog(dialogs.message);
    handlers.backLevels();
  });

  window.addEventListener('pointermove', handlers.cardPointerMove);
  window.addEventListener('pointerup', handlers.cardPointerUp);
  window.addEventListener('pointercancel', handlers.cardPointerCancel);
  window.addEventListener('blur', clearGesture);
  document.addEventListener('visibilitychange', clearGesture);
  window.setInterval(() => {
    if (
      currentScreen !== 'game' ||
      document.visibilityState !== 'visible' ||
      !gameState ||
      gameState.completed ||
      gameState.failed
    ) {
      return;
    }
    gameState = Core.setElapsedSeconds(
      gameState,
      gameState.elapsedSeconds + 1,
    );
    Renderer.updateClock(elements, gameState, currentLevel);
    if (gameState.elapsedSeconds % 5 === 0) {
      saveSession();
    }
  }, 1000);

  if (progress.legacySessionReset) {
    window.setTimeout(() => {
      showToast('牌局已更新為 5 個牌堆，未完成的舊牌局已重新開始。');
      progress.legacySessionReset = false;
      Storage.saveProgress(progress);
    }, 350);
  }
  const startupSession = progress.currentSession;
  const startupLevel = startupSession
    ? levelsById.get(startupSession.levelId)
    : null;
  const staleDifficultySession = Boolean(
    startupSession &&
      (!startupLevel ||
        !Storage.isSessionCompatible(startupSession, startupLevel)),
  );
  if (staleDifficultySession) {
    Storage.clearSession();
    progress = Storage.loadProgress();
  }
  renderHome();
  if (staleDifficultySession) {
    window.setTimeout(() => {
      showToast('關卡難度已更新，未完成牌局已重新開始。');
    }, 350);
  }
})();
