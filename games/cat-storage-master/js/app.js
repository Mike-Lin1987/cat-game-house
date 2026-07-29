(function initializeCatStorageMaster() {
  'use strict';

  const config = window.CAT_STORAGE_CONFIG;
  const core = window.CatStorageCore;
  const storage = window.CatStorageStorage;
  const renderer = window.CatStorageRenderer;
  const levels = window.CAT_STORAGE_LEVELS || [];
  const levelById = new Map(levels.map((level) => [level.id, level]));
  const app = document.querySelector('#app');
  const dialog = document.querySelector('[data-dialog]');
  const dialogContent = document.querySelector('[data-dialog-content]');
  const liveRegion = document.querySelector('[data-live-region]');
  const dragLayer = document.querySelector('[data-drag-layer]');
  const FILE_PORTAL_HREF = '../../index.html';
  const HOST_PORTAL_HREF = '../../';

  let screen = 'home';
  let progress = storage.loadProgress();
  let selectedChapter = 1;
  let selectedPage = 0;
  let currentLevel = null;
  let gameState = null;
  let selectedPieceId = null;
  let hintPieceId = null;
  let previousHintPieceId = null;
  let hintTimer = null;
  let drag = null;
  let sessionStartElapsed = 0;
  let timerTicks = 0;
  let dialogReturnFocus = null;

  function resolvePortalHref() {
    return window.location.protocol === 'file:' ? FILE_PORTAL_HREF : HOST_PORTAL_HREF;
  }

  function announce(message) {
    if (liveRegion) {
      liveRegion.textContent = '';
      window.setTimeout(() => { liveRegion.textContent = message; }, 10);
    }
    const instruction = document.querySelector('[data-instruction]');
    if (instruction) instruction.textContent = message;
  }

  function applySettings() {
    document.body.dataset.animations = progress.settings.animations ? 'on' : 'off';
    document.body.classList.toggle('animations-off', !progress.settings.animations);
  }

  function render() {
    if (screen === 'home') app.innerHTML = renderer.renderHome(progress);
    else if (screen === 'levels') {
      app.innerHTML = renderer.renderLevelSelect(progress, selectedChapter, selectedPage);
    } else if (screen === 'game' && currentLevel && gameState) {
      app.innerHTML = renderer.renderGame(
        currentLevel,
        gameState,
        progress,
        selectedPieceId,
        hintPieceId,
      );
    }
    const portalLink = app.querySelector('[data-portal-home]');
    if (portalLink) portalLink.href = resolvePortalHref();
    applySettings();
  }

  function openDialog(markup, returnFocus) {
    dialogReturnFocus = returnFocus || document.activeElement;
    dialogContent.innerHTML = markup;
    if (!dialog.open) dialog.showModal();
    const first = dialogContent.querySelector('button, input, [tabindex]');
    first?.focus();
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  dialog.addEventListener('close', () => {
    if (dialogContent.querySelector('[data-zoom-content]')) dialogContent.replaceChildren();
    if (screen === 'game') render();
    dialogReturnFocus?.focus?.();
    dialogReturnFocus = null;
  });

  function rulesDialog() {
    openDialog(`<div class="dialog-cat">${renderer.catDecoration()}</div>
      <h2 class="dialog-title">收納守則</h2>
      <p>把待放區的所有拼塊拖進木製收納箱，完整蓋住每個可填格。</p>
      <p>拼塊不能重疊、越界，也不能壓到毛線球、紙箱或睡覺中的貓咪。第三章起，部分拼塊需要翻面。</p>
      <p><strong>鍵盤：</strong>Tab 選拼塊，R 旋轉，F 翻面，Delete 取回，方向鍵移動棋盤焦點，Enter 放置。</p>
      <div class="dialog-actions"><button class="dialog-primary" value="close">開始收納</button></div>`);
  }

  function settingsDialog() {
    openDialog(`<h2 class="dialog-title">設定</h2>
      <label class="setting-row"><span>柔和動畫</span><input type="checkbox" data-setting="animations" ${progress.settings.animations ? 'checked' : ''}></label>
      <label class="setting-row"><span>音效（目前無音效素材）</span><input type="checkbox" data-setting="sound" ${progress.settings.sound ? 'checked' : ''}></label>
      <label class="setting-row"><span>預設放大收納箱</span><input type="checkbox" data-setting="largeBoard" ${progress.settings.largeBoard ? 'checked' : ''}></label>
      <div class="dialog-actions">
        <button class="dialog-primary" type="button" data-dialog-action="save-settings">儲存設定</button>
        <button value="close">取消</button>
      </div>`);
  }

  function replayDialog() {
    openDialog(`<h2 class="dialog-title">重新開始？</h2>
      <p>確定要重新開始這一關嗎？目前的收納進度會被清除。</p>
      <div class="dialog-actions">
        <button class="dialog-primary" type="button" data-dialog-action="confirm-replay">重新開始</button>
        <button value="close">繼續收納</button>
      </div>`);
  }

  function resetCurrentLevel() {
    if (!currentLevel) return;
    gameState = core.createInitialState(currentLevel);
    sessionStartElapsed = 0;
    selectedPieceId = null;
    hintPieceId = null;
    previousHintPieceId = null;
    storage.saveSession(core.serializeSession(gameState));
    closeDialog();
    render();
    announce('已重新開始這一關。');
  }

  function showCompletion() {
    const stars = core.calculateStars(gameState, currentLevel);
    progress.totalPlaySeconds += Math.max(0, gameState.elapsed - sessionStartElapsed);
    storage.saveProgress(progress);
    storage.updateRecord(currentLevel.id, {
      stars,
      moves: gameState.movesUsed,
      time: gameState.elapsed,
    });
    progress = storage.loadProgress();
    storage.clearSession();
    const isLast = currentLevel.id === 'L100';
    const completedCount = Object.values(progress.records).filter((record) => record.completed).length;
    const totalStars = Object.values(progress.records).reduce((sum, record) => sum + record.stars, 0);
    const underThree = Object.values(progress.records).filter((record) => record.stars < 3).length;
    openDialog(`<div class="dialog-cat">${renderer.catDecoration()}</div>
      <h2 class="dialog-title">${isLast ? '恭喜完成全部 100 關！' : '收納完成！'}</h2>
      <div class="dialog-stars" aria-label="${stars} 顆星">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
      <div class="dialog-stats">
        <span>使用步數<strong>${gameState.movesUsed}</strong></span>
        <span>標準步數<strong>${currentLevel.parMoves}</strong></span>
        <span>完成時間<strong>${core.formatElapsedTime(gameState.elapsed)}</strong></span>
        <span>提示次數<strong>${gameState.hintsUsed}</strong></span>
        ${isLast ? `<span>完成關卡<strong>${completedCount}/100</strong></span>
          <span>總星數<strong>${totalStars}/300</strong></span>
          <span>總遊玩時間<strong>${core.formatElapsedTime(progress.totalPlaySeconds)}</strong></span>
          <span>未滿三星<strong>${underThree}</strong></span>` : ''}
      </div>
      <div class="dialog-actions">
        ${isLast ? '' : '<button class="dialog-primary" type="button" data-dialog-action="next-level">下一關</button>'}
        <button type="button" data-dialog-action="confirm-replay">再玩一次</button>
        <button type="button" data-dialog-action="levels">返回選關</button>
      </div>`);
  }

  function showFailure() {
    storage.clearSession();
    openDialog(`<div class="dialog-cat">${renderer.catDecoration()}</div>
      <h2 class="dialog-title">這次箱子塞不下了</h2>
      <p>已用完 ${currentLevel.moveLimit} 步。重新整理一下順序，再試一次吧！</p>
      <div class="dialog-actions">
        <button class="dialog-primary" type="button" data-dialog-action="confirm-replay">重新挑戰</button>
        <button type="button" data-dialog-action="levels">返回選關</button>
      </div>`);
  }

  function startLevel(levelId, restoreSession) {
    const level = levelById.get(levelId);
    if (!level) return;
    currentLevel = level;
    let restored = null;
    if (restoreSession) {
      const session = storage.loadSession();
      if (session?.levelId === level.id) restored = core.deserializeSession(session, level);
    }
    gameState = restored || core.createInitialState(level);
    if (gameState.status !== 'playing') gameState = core.createInitialState(level);
    sessionStartElapsed = gameState.elapsed;
    selectedPieceId = null;
    hintPieceId = null;
    previousHintPieceId = null;
    screen = 'game';
    render();
    storage.saveSession(core.serializeSession(gameState));
    announce(`第 ${Number(level.id.slice(1))} 關，開始收納。`);
    if (progress.settings.largeBoard && level.rows >= 8) window.setTimeout(openZoomDialog, 100);
  }

  function persistSession() {
    if (screen === 'game' && gameState && gameState.status === 'playing') {
      const session = core.serializeSession(gameState);
      progress.currentSession = session;
      storage.saveSession(session);
    }
  }

  function applyState(nextState, message) {
    const previousStatus = gameState.status;
    gameState = nextState;
    persistSession();
    render();
    if (message) announce(message);
    if (previousStatus !== 'completed' && gameState.status === 'completed') {
      window.setTimeout(showCompletion, progress.settings.animations ? 420 : 0);
    } else if (previousStatus !== 'failed' && gameState.status === 'failed') {
      window.setTimeout(showFailure, 0);
    }
  }

  function selectPiece(pieceId) {
    if (!currentLevel || !gameState?.placements[pieceId]) return;
    selectedPieceId = pieceId;
    render();
    const piece = currentLevel.pieces.find((item) => item.id === pieceId);
    announce(`已選取${piece.label}。可拖曳、旋轉${piece.allowFlip ? '或翻面' : ''}。`);
  }

  function rotateSelected() {
    if (!selectedPieceId) return announce('請先選取一個拼塊。');
    const before = gameState.movesUsed;
    const next = core.rotatePiece(gameState, currentLevel, selectedPieceId);
    applyState(next, next.movesUsed === before ? '這個方向無法旋轉，盤面保持不變。' : '拼塊已順時針旋轉。');
  }

  function flipSelected() {
    if (!selectedPieceId) return announce('請先選取一個拼塊。');
    const before = gameState.movesUsed;
    const next = core.flipPiece(gameState, currentLevel, selectedPieceId);
    applyState(next, next.movesUsed === before ? '這個拼塊目前無法翻面。' : '拼塊已水平翻面。');
  }

  function hint() {
    if (!gameState || gameState.status !== 'playing') return;
    const result = core.getHint(gameState, currentLevel, previousHintPieceId);
    if (!result) return announce('每個拼塊都在正確位置。');
    previousHintPieceId = result.pieceId;
    hintPieceId = result.pieceId;
    gameState = { ...gameState, hintsUsed: gameState.hintsUsed + 1 };
    persistSession();
    render();
    announce(result.message);
    window.clearTimeout(hintTimer);
    hintTimer = window.setTimeout(() => {
      hintPieceId = null;
      if (screen === 'game') render();
    }, 4000);
  }

  function openZoomDialog() {
    const woodenBox = document.querySelector('.wooden-box');
    if (!woodenBox) return;
    dialogReturnFocus = document.querySelector('[data-action="zoom"]') || document.activeElement;
    dialogContent.innerHTML = '<h2 class="dialog-title">放大收納箱</h2><div class="zoom-dialog-content" data-zoom-content></div><div class="dialog-actions"><button value="close">關閉放大模式</button></div>';
    dialogContent.querySelector('[data-zoom-content]').append(woodenBox);
    if (!dialog.open) dialog.showModal();
    dialogContent.querySelector('[data-zoom-content]').scrollTo(130, 130);
    dialogContent.querySelector('button')?.focus();
  }

  function boardPlacementFromPointer(event, pieceId, anchorRow, anchorColumn) {
    const board = document.querySelector('[data-board]');
    if (!board) return null;
    const rectangle = board.getBoundingClientRect();
    if (event.clientX < rectangle.left || event.clientX > rectangle.right
        || event.clientY < rectangle.top || event.clientY > rectangle.bottom) {
      return { board, inside: false, check: null, placement: null };
    }
    const row = Math.floor((event.clientY - rectangle.top) / (rectangle.height / currentLevel.rows)) - anchorRow;
    const column = Math.floor((event.clientX - rectangle.left) / (rectangle.width / currentLevel.columns)) - anchorColumn;
    const current = gameState.placements[pieceId];
    const placement = {
      row,
      column,
      rotation: current.rotation,
      flipped: current.flipped,
    };
    return {
      board,
      inside: true,
      placement,
      check: core.canPlacePiece(gameState, currentLevel, pieceId, placement),
    };
  }

  function startDrag(event, pieceElement) {
    if (screen !== 'game' || gameState.status !== 'playing' || event.button > 0) return;
    const pieceId = pieceElement.dataset.pieceId;
    const piece = currentLevel.pieces.find((item) => item.id === pieceId);
    const placement = gameState.placements[pieceId];
    const cells = core.getTransformedCells(piece, placement.rotation, placement.flipped);
    const rows = Math.max(...cells.map((cell) => cell[0])) + 1;
    const columns = Math.max(...cells.map((cell) => cell[1])) + 1;
    const rectangle = pieceElement.getBoundingClientRect();
    const cellWidth = rectangle.width / columns;
    const cellHeight = rectangle.height / rows;
    const proxy = pieceElement.cloneNode(true);
    proxy.classList.remove('piece-on-board', 'piece-in-tray', 'is-selected', 'is-hinted');
    proxy.classList.add('drag-proxy');
    proxy.style.width = `${columns * Math.min(cellWidth, 56)}px`;
    proxy.style.height = `${rows * Math.min(cellHeight, 56)}px`;
    proxy.style.left = `${event.clientX}px`;
    proxy.style.top = `${event.clientY}px`;
    dragLayer.replaceChildren(proxy);
    pieceElement.setPointerCapture?.(event.pointerId);
    drag = {
      pointerId: event.pointerId,
      source: pieceElement,
      pieceId,
      originPlaced: placement.placed,
      anchorRow: Math.max(0, Math.min(rows - 1, Math.floor((event.clientY - rectangle.top) / Math.max(1, cellHeight)))),
      anchorColumn: Math.max(0, Math.min(columns - 1, Math.floor((event.clientX - rectangle.left) / Math.max(1, cellWidth)))),
      proxy,
      moved: false,
      latest: null,
    };
    selectedPieceId = pieceId;
    event.preventDefault();
  }

  function moveDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    drag.moved = true;
    drag.proxy.style.left = `${event.clientX}px`;
    drag.proxy.style.top = `${event.clientY}px`;
    drag.latest = boardPlacementFromPointer(
      event,
      drag.pieceId,
      drag.anchorRow,
      drag.anchorColumn,
    );
    if (drag.latest?.inside) {
      renderer.showPreview(
        drag.latest.board,
        currentLevel,
        drag.latest.check.cells,
        drag.latest.check.valid,
      );
      announce(drag.latest.check.valid ? '可以放在這裡。' : '這個位置不能放置。');
    } else {
      renderer.clearPreview(document.querySelector('[data-board]'));
    }
    event.preventDefault();
  }

  function finishDrag(event, cancelled) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    const active = drag;
    renderer.clearPreview(document.querySelector('[data-board]'));
    dragLayer.replaceChildren();
    drag = null;
    if (cancelled) {
      render();
      announce('拖曳已取消，拼塊回到原位。');
      return;
    }
    if (!active.moved) {
      selectPiece(active.pieceId);
      return;
    }
    if (active.latest?.inside && active.latest.check.valid) {
      applyState(
        core.placePiece(gameState, currentLevel, active.pieceId, active.latest.placement),
        '拼塊已吸附到收納箱。',
      );
    } else if (!active.latest?.inside && active.originPlaced) {
      applyState(core.removePiece(gameState, currentLevel, active.pieceId), '拼塊已放回待放區。');
    } else {
      render();
      announce('放置失敗，拼塊已回到原位。');
    }
  }

  app.addEventListener('pointerdown', (event) => {
    const piece = event.target.closest('[data-piece-id]');
    if (piece) startDrag(event, piece);
  });
  document.addEventListener('pointermove', moveDrag, { passive: false });
  document.addEventListener('pointerup', (event) => finishDrag(event, false));
  document.addEventListener('pointercancel', (event) => finishDrag(event, true));

  app.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const levelId = event.target.closest('[data-level-id]')?.dataset.levelId;
    const chapter = event.target.closest('[data-chapter]')?.dataset.chapter;
    const page = event.target.closest('[data-page]')?.dataset.page;
    if (levelId) return startLevel(levelId, false);
    if (chapter) {
      selectedChapter = Number(chapter);
      selectedPage = 0;
      return render();
    }
    if (page !== undefined) {
      selectedPage = Number(page);
      return render();
    }
    if (!action) return;
    if (action === 'home') {
      persistSession();
      screen = 'home';
      render();
    } else if (action === 'levels') {
      persistSession();
      screen = 'levels';
      selectedChapter = currentLevel?.chapter || selectedChapter;
      selectedPage = currentLevel ? (Number(currentLevel.id.slice(1)) - 1) % 20 >= 10 ? 1 : 0 : selectedPage;
      render();
    } else if (action === 'start') {
      startLevel(`L${String(progress.unlockedLevel).padStart(3, '0')}`, false);
    } else if (action === 'continue') {
      startLevel(progress.currentSession.levelId, true);
    } else if (action === 'settings') settingsDialog();
    else if (action === 'rules') rulesDialog();
    else if (action === 'hint') hint();
    else if (action === 'undo') applyState(core.undo(gameState, currentLevel), '已復原上一步；復原本身也計算一步。');
    else if (action === 'rotate') rotateSelected();
    else if (action === 'flip') flipSelected();
    else if (action === 'replay') replayDialog();
    else if (action === 'zoom') openZoomDialog();
  });

  dialogContent.addEventListener('click', (event) => {
    const action = event.target.closest('[data-dialog-action]')?.dataset.dialogAction;
    if (!action) return;
    if (action === 'save-settings') {
      const next = {};
      dialogContent.querySelectorAll('[data-setting]').forEach((input) => {
        next[input.dataset.setting] = input.checked;
      });
      progress.settings = storage.saveSettings(next);
      closeDialog();
    } else if (action === 'confirm-replay') resetCurrentLevel();
    else if (action === 'levels') {
      closeDialog();
      screen = 'levels';
      selectedChapter = currentLevel?.chapter || 1;
      selectedPage = 0;
      render();
    } else if (action === 'next-level') {
      const number = Math.min(100, Number(currentLevel.id.slice(1)) + 1);
      closeDialog();
      startLevel(`L${String(number).padStart(3, '0')}`, false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (dialog.open) return;
      selectedPieceId = null;
      if (screen === 'game') {
        render();
        announce('已取消選取。');
      }
      return;
    }
    if (screen !== 'game' || dialog.open || gameState?.status !== 'playing') return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)) return;
    if (event.key.toLowerCase() === 'r') {
      event.preventDefault();
      rotateSelected();
    } else if (event.key.toLowerCase() === 'f') {
      event.preventDefault();
      flipSelected();
    } else if (event.key === 'Delete' && selectedPieceId) {
      event.preventDefault();
      applyState(core.removePiece(gameState, currentLevel, selectedPieceId), '拼塊已放回待放區。');
    } else if ((event.key === 'Enter' || event.key === ' ') && event.target.closest('[data-piece-id]')) {
      event.preventDefault();
      selectPiece(event.target.closest('[data-piece-id]').dataset.pieceId);
    } else if (event.target.matches('[data-board-row]')) {
      const row = Number(event.target.dataset.boardRow);
      const column = Number(event.target.dataset.boardColumn);
      const moves = {
        ArrowUp: [-1, 0],
        ArrowDown: [1, 0],
        ArrowLeft: [0, -1],
        ArrowRight: [0, 1],
      };
      if (moves[event.key]) {
        event.preventDefault();
        const [rowDelta, columnDelta] = moves[event.key];
        const nextRow = Math.max(0, Math.min(currentLevel.rows - 1, row + rowDelta));
        const nextColumn = Math.max(0, Math.min(currentLevel.columns - 1, column + columnDelta));
        event.target.tabIndex = -1;
        const nextCell = document.querySelector(`[data-board-row="${nextRow}"][data-board-column="${nextColumn}"]`);
        if (nextCell) {
          nextCell.tabIndex = 0;
          nextCell.focus();
        }
      } else if ((event.key === 'Enter' || event.key === ' ') && selectedPieceId) {
        event.preventDefault();
        const placement = {
          row,
          column,
          rotation: gameState.placements[selectedPieceId].rotation,
          flipped: gameState.placements[selectedPieceId].flipped,
        };
        const check = core.canPlacePiece(gameState, currentLevel, selectedPieceId, placement);
        if (check.valid) applyState(core.placePiece(gameState, currentLevel, selectedPieceId, placement), '拼塊已放置。');
        else announce('焦點位置不能放置這個拼塊。');
      }
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) persistSession();
  });
  window.addEventListener('beforeunload', persistSession);

  window.setInterval(() => {
    if (screen !== 'game' || !gameState || gameState.status !== 'playing' || dialog.open || document.hidden || drag) return;
    gameState.elapsed += 1;
    timerTicks += 1;
    const timeElement = document.querySelector('.status-card:nth-child(3) strong');
    if (timeElement) timeElement.textContent = core.formatElapsedTime(gameState.elapsed);
    if (timerTicks % 5 === 0) persistSession();
  }, 1000);

  render();
})();
