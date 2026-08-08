(function () {
  'use strict';

  const STORAGE_KEY = 'cat-zhuyin-treasure:v1';
  const PORTAL_HREF = window.location.protocol === 'file:' ? '../../index.html' : '../../';
  const root = document.getElementById('app');
  const toast = document.getElementById('toast');
  const levels = globalThis.CAT_ZHUYIN_LEVELS;
  const core = globalThis.CatZhuyinCore;
  let progress = loadProgress();
  let view = 'home';
  let currentOptions = [];
  let wrongAttempts = 0;
  let answerLocked = false;
  let audioContexts = [];

  if (!Array.isArray(levels) || core.validateLevels(levels).length > 0) {
    root.textContent = '題庫載入失敗，請重新整理。';
    return;
  }

  function loadProgress() {
    try {
      return core.sanitizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'));
    } catch {
      return core.createInitialProgress();
    }
  }

  function saveProgress(next) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      progress = next;
      return true;
    } catch {
      showToast('儲存空間暫時不可用，本次進度尚未保存。');
      return false;
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toast.hidden = true; }, 3200);
  }

  function spriteStyle(index) {
    return `--x:${(index % 5) * 25}%;--y:${Math.floor(index / 5) * (100 / 3)}%`;
  }

  function mascot(state, small) {
    const equipped = core.ACCESSORIES.find((item) => item.id === progress.equippedAccessory);
    return `<div class="mascot-wrap${small ? ' mascot-wrap--small' : ''}">
      <img src="./assets/mascot/cat-${state}.webp" alt="三花探險貓">
      ${equipped ? `<span class="accessory-sprite mascot-accessory" style="${spriteStyle(equipped.index)}" aria-label="已裝備${equipped.label}"></span>` : ''}
    </div>`;
  }

  function soundButton() {
    return `<button class="icon-button" type="button" data-action="sound" aria-label="${progress.soundEnabled ? '關閉音效' : '開啟音效'}">${progress.soundEnabled ? '🔊' : '🔇'}</button>`;
  }

  function renderHome() {
    view = 'home';
    answerLocked = false;
    const actionLabel = progress.gameComplete ? '再玩一次' : progress.totalFish ? `繼續第 ${progress.currentLevelId} 關` : '開始遊戲';
    root.innerHTML = `<section class="paper">
      <div class="toolbar"><a class="back-link" href="${PORTAL_HREF}" data-portal-home>← 回遊戲小屋</a>${soundButton()}</div>
      <header class="title"><h1>貓咪注音尋寶隊</h1><p>看圖片，選出正確的注音！</p></header>
      <div class="home-layout">
        ${mascot('idle', false)}
        <button class="button button--large" type="button" data-action="start">${actionLabel}</button>
        ${progress.totalFish ? '<button class="button button--ghost" type="button" data-action="reset">從第 1 關重新開始</button>' : ''}
        <div class="stats" aria-label="遊戲進度">
          <div><strong>${progress.completedLevelIds.length}</strong><span>已完成 / 100</span></div>
          <div><strong>${progress.totalFish}</strong><span>累積小魚</span></div>
          <div><strong>${progress.unlockedAccessories.length}</strong><span>裝飾 / 20</span></div>
        </div>
        <section class="collection"><h2>我的貓咪裝飾</h2><div class="accessory-grid">
          ${core.ACCESSORIES.map((item) => {
            const unlocked = progress.unlockedAccessories.includes(item.id);
            const equipped = progress.equippedAccessory === item.id;
            return `<button class="accessory-card${equipped ? ' is-equipped' : ''}" type="button" data-accessory="${item.id}" ${unlocked ? '' : 'disabled'} aria-label="${unlocked ? `${equipped ? '卸下' : '裝備'}${item.label}` : `${item.label}尚未解鎖`}">
              ${unlocked ? `<span class="accessory-sprite" style="${spriteStyle(item.index)}" aria-hidden="true"></span>` : '<span class="lock" aria-hidden="true">🔒</span>'}${item.label}
            </button>`;
          }).join('')}
        </div></section>
      </div>
    </section>`;
  }

  function startGame() {
    if (progress.gameComplete) {
      const reset = core.createInitialProgress();
      reset.soundEnabled = progress.soundEnabled;
      if (!saveProgress(reset)) return;
    }
    if (progress.pendingMilestones.length) {
      showMilestone();
      return;
    }
    view = 'game';
    wrongAttempts = 0;
    answerLocked = false;
    const level = levels[progress.currentLevelId - 1];
    currentOptions = Math.random() < .5
      ? [level.zhuyin, level.distractorZhuyin]
      : [level.distractorZhuyin, level.zhuyin];
    renderGame();
  }

  function renderGame(feedback, feedbackType) {
    const level = levels[progress.currentLevelId - 1];
    const chapterPosition = ((level.id - 1) % 10) + 1;
    const visual = level.visual.type === 'image'
      ? `<img src="${level.visual.value}" alt="${level.visual.alt}">`
      : `<span class="emoji" role="img" aria-label="${level.visual.alt}">${level.visual.value}</span>`;
    root.innerHTML = `<section class="paper game-paper">
      <div class="game-status">
        <button class="icon-button" type="button" data-action="home" aria-label="回到遊戲首頁">⌂</button>
        <div class="status-chip">第 ${level.id} 關</div>
        <div class="status-chip progress-chip"><strong>${chapterPosition} / 10</strong><span class="progress-track"><span style="width:${chapterPosition * 10}%"></span></span></div>
        <div class="status-chip" aria-label="累積小魚 ${progress.totalFish} 條">🐟 ${progress.totalFish}</div>
        ${soundButton()}
      </div>
      <div class="game-layout">
        <button class="picture-card" type="button" data-action="speak" aria-label="播放${level.word}的名稱">${visual}</button>
        <button class="listen-button" type="button" data-action="speak">🔊 聽一聽</button>
        <div class="options" role="group" aria-label="選擇正確注音">
          ${currentOptions.map((option, index) => `<button class="option" type="button" data-option="${index}" aria-label="選擇 ${option}">${option}</button>`).join('')}
        </div>
        <div class="feedback${feedbackType ? ` ${feedbackType}` : ''}" role="status" aria-live="polite">${feedback || ''}</div>
        ${mascot(feedbackType === 'is-correct' ? 'happy' : 'encourage', true)}
      </div>
    </section>`;
  }

  function chooseOption(index) {
    if (answerLocked || view !== 'game') return;
    const level = levels[progress.currentLevelId - 1];
    const option = currentOptions[index];
    const button = root.querySelector(`[data-option="${index}"]`);
    if (option !== level.zhuyin) {
      wrongAttempts += 1;
      button.classList.add('is-wrong');
      button.disabled = true;
      root.querySelector('.feedback').textContent = '再想一想，你可以的！';
      playTone(false);
      setTimeout(() => {
        if (!button.isConnected) return;
        button.classList.remove('is-wrong');
        button.disabled = false;
      }, 650);
      return;
    }

    answerLocked = true;
    const completed = core.completeLevel(progress, level.id, wrongAttempts);
    if (!saveProgress(completed.progress)) {
      answerLocked = false;
      return;
    }
    root.querySelectorAll('.option').forEach((item) => { item.disabled = true; });
    button.classList.add('is-correct');
    root.querySelector('.feedback').classList.add('is-correct');
    root.querySelector('.feedback').textContent = `答對了！${level.word} ${level.zhuyin}`;
    playTone(true);
    setTimeout(() => {
      if (progress.pendingMilestones.length) showMilestone();
      else startGame();
    }, 850);
  }

  function showMilestone() {
    const item = progress.pendingMilestones[0];
    if (!item) {
      if (progress.gameComplete) renderHome();
      else startGame();
      return;
    }
    const accessory = item.type === 'reward' ? core.ACCESSORIES.find((value) => value.id === item.accessoryId) : null;
    const content = item.type === 'reward'
      ? `<div class="milestone-icon">🎁</div><h2>找到寶箱！</h2><span class="accessory-sprite" style="${spriteStyle(accessory.index)}" aria-hidden="true"></span><p>解鎖新裝飾：${accessory.label}</p>`
      : item.type === 'chapter'
        ? `<div class="milestone-icon">⭐</div><h2>第 ${item.chapter} 章完成</h2><p>本章獲得 ${item.stars} / 30 顆星</p>`
        : '<div class="milestone-icon">🏆</div><h2>100 關全破！</h2><p>你已經完成整趟注音尋寶旅程！</p>';
    const label = item.type === 'complete' ? '回遊戲首頁' : '收下獎勵';
    root.insertAdjacentHTML('beforeend', `<div class="milestone" role="dialog" aria-modal="true" aria-labelledby="milestone-title"><div class="milestone-card" id="milestone-title">${content}<button class="button" type="button" data-action="milestone">${label}</button></div></div>`);
    root.querySelector('[data-action="milestone"]').focus();
  }

  function acceptMilestone() {
    const current = progress.pendingMilestones[0];
    const next = { ...progress, pendingMilestones: progress.pendingMilestones.slice(1) };
    if (!saveProgress(next)) return;
    root.querySelector('.milestone')?.remove();
    if (progress.pendingMilestones.length) showMilestone();
    else if (current && current.type === 'complete') renderHome();
    else startGame();
  }

  function speak() {
    if (!progress.soundEnabled || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(levels[progress.currentLevelId - 1].word);
    utterance.lang = 'zh-TW';
    utterance.rate = .82;
    speechSynthesis.speak(utterance);
  }

  function playTone(correct) {
    if (!progress.soundEnabled) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    audioContexts.push(context);
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.setValueAtTime(correct ? 540 : 220, context.currentTime);
    if (correct) oscillator.frequency.exponentialRampToValueAtTime(760, context.currentTime + .16);
    gain.gain.setValueAtTime(.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.09, context.currentTime + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .22);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + .23);
    oscillator.addEventListener('ended', () => {
      context.close();
      audioContexts = audioContexts.filter((item) => item !== context);
    });
  }

  function toggleSound() {
    const next = { ...progress, soundEnabled: !progress.soundEnabled };
    if (!saveProgress(next)) return;
    if (!progress.soundEnabled) {
      if ('speechSynthesis' in window) speechSynthesis.cancel();
      audioContexts.forEach((context) => context.close());
      audioContexts = [];
    }
    if (view === 'home') renderHome(); else renderGame();
  }

  root.addEventListener('click', (event) => {
    const target = event.target.closest('button, a');
    if (!target) return;
    if (target.dataset.action === 'sound') toggleSound();
    if (target.dataset.action === 'start') startGame();
    if (target.dataset.action === 'home') renderHome();
    if (target.dataset.action === 'speak') speak();
    if (target.dataset.action === 'milestone') acceptMilestone();
    if (target.dataset.option !== undefined) chooseOption(Number(target.dataset.option));
    if (target.dataset.accessory) {
      const equippedAccessory = progress.equippedAccessory === target.dataset.accessory ? null : target.dataset.accessory;
      if (saveProgress({ ...progress, equippedAccessory })) renderHome();
    }
    if (target.dataset.action === 'reset' && confirm('確定要清除注音尋寶進度，從第 1 關重新開始嗎？')) {
      const reset = core.createInitialProgress();
      reset.soundEnabled = progress.soundEnabled;
      if (saveProgress(reset)) renderHome();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (view !== 'game' || event.defaultPrevented) return;
    const interactive = event.target.closest('button, a, input, select, textarea, [contenteditable="true"]');
    if (interactive) return;
    if (event.key === '1' || event.key === '2') {
      event.preventDefault();
      chooseOption(Number(event.key) - 1);
    } else if (event.code === 'Space') {
      event.preventDefault();
      speak();
    }
  });

  renderHome();
})();
