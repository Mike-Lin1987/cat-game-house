(function () {
  'use strict';
  const levels = window.CAT_TRIPLE_LEVELS;
  const Core = window.CatTripleCore;
  const Solver = window.CatTripleSolver;
  const Icons = window.CatTripleIcons;
  const Storage = window.CatTripleStorage;
  const elements = {
    home: document.querySelector('#home-screen'), levels: document.querySelector('#level-screen'),
    game: document.querySelector('#game-screen'), board: document.querySelector('#tile-board'),
    tray: document.querySelector('#tray'), levelTitle: document.querySelector('#level-title'),
    remaining: document.querySelector('#remaining-count'), timer: document.querySelector('#timer'),
    stars: document.querySelector('#star-total'), live: document.querySelector('#live-status'),
    modal: document.querySelector('#result-modal'), modalTitle: document.querySelector('#result-title'),
    modalBody: document.querySelector('#result-body'), levelGrid: document.querySelector('#level-grid'),
  };
  const renderer = window.CatTripleRenderer.createRenderer(elements, Icons);
  let progress = Storage.loadProgress();
  let level = null;
  let state = null;
  let timerId = null;
  let lastHint = [];
  let pendingPlaySeconds = 0;

  function flushPlaySeconds() {
    if (pendingPlaySeconds <= 0) return;
    progress = Storage.addPlaySeconds(pendingPlaySeconds);
    pendingPlaySeconds = 0;
  }

  function show(name) {
    for (const [key, element] of Object.entries({ home: elements.home, levels: elements.levels, game: elements.game })) {
      element.hidden = key !== name;
    }
    if (name !== 'game') stopTimer();
  }
  function totalStars() {
    return Object.values(progress.records).reduce((sum, record) => sum + record.stars, 0);
  }
  function renderLevels() {
    elements.levelGrid.innerHTML = levels.map((item) => {
      const locked = item.number > progress.unlockedLevel;
      const record = progress.records[item.id];
      return `<button class="level-card" data-level="${item.number}" ${locked ? 'disabled' : ''}>`
        + `<span>${locked ? '🔒' : `第 ${item.number} 關`}</span><small>${record ? '★'.repeat(record.stars) : `${item.tiles.length} 張`}</small></button>`;
    }).join('');
  }
  function startTimer() {
    stopTimer();
    timerId = setInterval(() => {
      if (!state || state.status !== 'playing' || document.hidden
          || elements.modal.open || document.querySelector('#settings-modal').open) return;
      state.elapsed += 1;
      pendingPlaySeconds += 1;
      elements.timer.textContent = Core.formatElapsedTime(state.elapsed);
      if (state.elapsed % 5 === 0) {
        Storage.saveSession(Core.serializeSession(state));
        flushPlaySeconds();
      }
    }, 1000);
  }
  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
    flushPlaySeconds();
  }
  function render(effects) {
    const exposed = Core.getExposedTileIds(state, level);
    renderer.renderBoard(level, state, exposed);
    renderer.renderTray(state);
    renderer.playEffects(effects || []);
    elements.remaining.textContent = Core.calculateRemainingTileCount(state);
    elements.timer.textContent = Core.formatElapsedTime(state.elapsed);
    elements.levelTitle.textContent = `第 ${level.number} 關`;
    document.querySelector('#hint-count').textContent = state.toolRemaining.hint;
    document.querySelector('#undo-count').textContent = state.toolRemaining.undo;
    document.querySelector('#shuffle-count').textContent = state.toolRemaining.shuffle;
    Storage.saveSession(Core.serializeSession(state));
    if (state.status === 'completed') completeLevel();
    else if (state.status === 'failed') openResult('暫存槽滿了', '別擔心，可以復原上一步或重新挑戰。', true);
  }
  function loadLevel(number, resume) {
    level = levels[number - 1];
    const saved = resume ? Storage.loadProgress().currentSession : null;
    state = saved ? Core.deserializeSession(saved, level) : null;
    state = state || Core.createInitialState(level);
    lastHint = [];
    show('game');
    render([]);
    startTimer();
  }
  function completeLevel() {
    stopTimer();
    const stars = Core.calculateStars(state);
    const assists = state.toolUsed.hint + state.toolUsed.shuffle;
    progress = Storage.updateRecord(level.id, { stars, time: state.elapsed, assists });
    elements.stars.textContent = totalStars();
    const totalMessage = level.number === 100
      ? `　總遊玩時間 ${Core.formatElapsedTime(progress.totalPlaySeconds)}`
      : '';
    openResult(level.number === 100 ? '星夜貓屋全數完成！' : '配對完成！',
      `${'★'.repeat(stars)}　用時 ${Core.formatElapsedTime(state.elapsed)}${totalMessage}`, false);
  }
  function openResult(title, body, failed) {
    elements.modalTitle.textContent = title;
    elements.modalBody.textContent = body;
    document.querySelector('#modal-undo').hidden = !failed || !state.history.length || state.toolRemaining.undo <= 0;
    document.querySelector('#next-level').hidden = failed;
    elements.modal.showModal();
  }
  function announce(text) { elements.live.textContent = ''; setTimeout(() => { elements.live.textContent = text; }, 20); }
  let lastPointerSelection = { id: '', at: 0 };
  function handleTileSelection(event) {
    const button = event.target.closest('[data-tile-id]');
    if (!button || !state || state.status !== 'playing') return;
    if (event.type === 'click' && lastPointerSelection.id === button.dataset.tileId
      && Date.now() - lastPointerSelection.at < 500) return;
    if (event.type === 'pointerup') lastPointerSelection = { id: button.dataset.tileId, at: Date.now() };
    const result = Core.selectTile(state, level, button.dataset.tileId);
    if (result.effects.length) {
      state = result.state;
      render(result.effects);
      elements.board.querySelector('.game-tile.exposed')?.focus();
      announce(result.effects.some((effect) => effect.type === 'match') ? '三張相同圖案已消除' : '卡牌已放入暫存槽');
    }
  }
  elements.board.addEventListener('pointerup', handleTileSelection);
  elements.board.addEventListener('pointercancel', () => { lastPointerSelection = { id: '', at: 0 }; });
  elements.board.addEventListener('click', handleTileSelection);
  elements.board.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    const buttons = [...elements.board.querySelectorAll('.game-tile.exposed')];
    const current = buttons.indexOf(document.activeElement);
    if (current < 0 || buttons.length < 2) return;
    event.preventDefault();
    const offset = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
    buttons[(current + offset + buttons.length) % buttons.length].focus();
  });
  document.querySelector('#play-button').addEventListener('click', () => {
    const saved = progress.currentSession;
    if (saved && levels.some((item) => item.id === saved.levelId)) loadLevel(Number(saved.levelId.slice(1)), true);
    else { renderLevels(); show('levels'); }
  });
  document.querySelectorAll('[data-show-levels]').forEach((button) => button.addEventListener('click', () => {
    progress = Storage.loadProgress(); renderLevels(); show('levels');
  }));
  elements.levelGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-level]');
    if (button && !button.disabled) loadLevel(Number(button.dataset.level), false);
  });
  document.querySelector('#hint-button').addEventListener('click', () => {
    if (!state || state.toolRemaining.hint <= 0 || state.status !== 'playing') return;
    const solution = Solver.solveLevel(level, { state, maxNodes: 150000, deadlineMs: 300 });
    const hint = Core.getHint(state, level, solution, lastHint);
    if (!hint) { announce(solution.budgetExceeded ? '提示計算超時，次數不扣除' : '暫時找不到提示'); return; }
    state.toolRemaining.hint -= 1; state.toolUsed.hint += 1;
    lastHint = [...lastHint.slice(-2), hint.tileId];
    render([]);
    document.querySelector(`[data-tile-id="${hint.tileId}"]`)?.classList.add('hinted');
    announce(hint.message);
  });
  document.querySelector('#undo-button').addEventListener('click', () => {
    if (!state) return;
    const result = Core.undo(state); if (!result.effects.length) return;
    state = result.state; elements.modal.close(); render(result.effects); startTimer(); announce('已復原上一步');
  });
  document.querySelector('#modal-undo').addEventListener('click', () => document.querySelector('#undo-button').click());
  document.querySelector('#shuffle-button').addEventListener('click', () => {
    if (!state || state.toolRemaining.shuffle <= 0 || state.status !== 'playing') return;
    const ids = state.remainingTileIds.slice();
    const symbols = ids.map((id) => state.symbolByTileId[id]);
    const shuffleStartedAt = Date.now();
    for (let offset = 1; offset < Math.min(200, symbols.length); offset += 1) {
      if (Date.now() - shuffleStartedAt >= 800) break;
      const mapping = Object.fromEntries(ids.map((id, index) => [id, symbols[(index + offset) % symbols.length]]));
      const candidate = Core.previewShuffle(state, mapping);
      if (!candidate) continue;
      const result = Solver.solveLevel(level, { state: candidate, maxNodes: 150000, deadlineMs: 40 });
      if (!result.solved) continue;
      const committed = Core.commitShuffle(state, mapping);
      state = committed.state; render(committed.effects); announce('中央卡牌已重新洗牌'); return;
    }
    announce('目前找不到安全洗牌，次數不扣除');
  });
  document.querySelectorAll('[data-replay]').forEach((button) => button.addEventListener('click', () => {
    elements.modal.close(); loadLevel(level.number, false);
  }));
  document.querySelector('#next-level').addEventListener('click', () => {
    if (!state || state.status !== 'completed') return;
    elements.modal.close(); if (level.number < 100) loadLevel(level.number + 1, false); else { renderLevels(); show('levels'); }
  });
  document.querySelector('#close-modal').addEventListener('click', () => elements.modal.close());
  const settingsModal = document.querySelector('#settings-modal');
  const animationSetting = document.querySelector('#animation-setting');
  document.querySelector('#settings-button').addEventListener('click', () => {
    animationSetting.checked = Storage.loadProgress().settings.animations;
    settingsModal.showModal();
  });
  document.querySelector('#close-settings').addEventListener('click', () => {
    Storage.saveSettings({ animations: animationSetting.checked });
    document.documentElement.classList.toggle('reduce-game-motion', !animationSetting.checked);
    settingsModal.close();
  });
  document.addEventListener('keydown', (event) => {
    if (!state || elements.game.hidden || elements.modal.open || settingsModal.open) return;
    if (event.key.toLowerCase() === 'h') document.querySelector('#hint-button').click();
    if (event.key.toLowerCase() === 'u') document.querySelector('#undo-button').click();
    if (event.key.toLowerCase() === 's') document.querySelector('#shuffle-button').click();
    if (event.key === 'Escape' && elements.modal.open) elements.modal.close();
  });
  elements.stars.textContent = totalStars();
  window.addEventListener('beforeunload', flushPlaySeconds);
  show('home');
})();
