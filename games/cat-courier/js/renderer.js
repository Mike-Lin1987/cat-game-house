(function (root, factory) {
  const icons = typeof module === 'object' && module.exports
    ? require('./icons.js') : root.CatCourierIcons;
  const api = factory(icons);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatCourierRenderer = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Icons) {
  'use strict';

  const TERRAIN_LABELS = Object.freeze({
    road: '一般道路，可通行',
    bridge: '橋梁，可通行',
    plaza: '廣場，可通行',
    grass: '草地，不可通行',
    water: '水池，不可通行',
    tree: '樹木，不可通行',
    crate: '木箱，不可通行',
    barrier: '施工路障，不可通行',
    fence: '柵欄，不可通行',
  });

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[character]));
  }

  function starsMarkup(count, label = '星級') {
    return `<span class="stars" aria-label="${label} ${count} 顆">${[1, 2, 3].map((star) => (
      `<span class="${star <= count ? 'is-earned' : ''}" aria-hidden="true">★</span>`
    )).join('')}</span>`;
  }

  function topNav(title, subtitle = '') {
    return `<header class="page-topbar">
      <a class="round-button back-house" href="../../" aria-label="回到遊戲小屋">←</a>
      <div class="page-title">
        <span class="paw-kicker">🐾 ${escapeHtml(subtitle || '離線路線益智')}</span>
        <h1>${escapeHtml(title)}</h1>
      </div>
      <button class="round-button" type="button" data-action="settings" aria-label="開啟設定">
        ${Icons.get('settings')}
      </button>
    </header>`;
  }

  function homeMarkup(progress, hasSession) {
    const records = Object.values(progress.records || {});
    const completed = records.filter((record) => record.completed).length;
    const stars = records.reduce((sum, record) => sum + (record.stars || 0), 0);
    return `<section class="screen home-screen">
      ${topNav('貓咪快遞員', '第七號快遞站')}
      <div class="hero-card">
        <div class="hero-sun" aria-hidden="true"></div>
        <div class="hero-road" aria-hidden="true"></div>
        <div class="hero-courier">${Icons.get('courier')}</div>
        <div class="hero-copy">
          <p class="eyebrow">社區配送任務</p>
          <h2>畫出一條不回頭的暖心路線</h2>
          <p>依序把鮮奶、魚乾與包裹送到每個貓咪家，在油量用完前抵達最後一站。</p>
        </div>
        <div class="hero-house house-blue"><span>鮮奶站</span>${Icons.get('milk')}</div>
        <div class="hero-house house-pink"><span>包裹站</span>${Icons.get('parcel')}</div>
      </div>
      <div class="progress-strip" aria-label="遊戲進度">
        <div><strong>${completed}</strong><span>完成關卡</span></div>
        <div><strong>${stars}</strong><span>累積星星</span></div>
        <div><strong>${progress.unlockedLevel}</strong><span>目前解鎖</span></div>
      </div>
      <div class="home-actions">
        <button class="primary-action" type="button" data-action="start">開始遊戲</button>
        ${hasSession ? '<button type="button" data-action="continue">繼續規劃</button>' : ''}
        <button type="button" data-action="levels">選擇關卡</button>
        <button type="button" data-action="rules">遊戲規則</button>
      </div>
      <p class="offline-note">不需要網路、伺服器或安裝；可直接雙擊開啟。</p>
    </section>`;
  }

  function levelSelectMarkup(levels, progress, chapter, page) {
    const chapterLevels = levels.filter((level) => level.chapter === chapter);
    const pageLevels = chapterLevels.slice(page * 10, page * 10 + 10);
    const chapterNames = ['社區入門', '街區配送', '巷弄快遞', '繁忙城區', '全城快遞'];
    return `<section class="screen level-screen">
      ${topNav('選擇配送任務', chapterNames[chapter - 1])}
      <div class="chapter-tabs" role="tablist" aria-label="選擇章節">
        ${chapterNames.map((name, index) => `<button type="button" role="tab"
          aria-selected="${index + 1 === chapter}" class="${index + 1 === chapter ? 'is-active' : ''}"
          data-action="chapter" data-chapter="${index + 1}">${index + 1}<span>${name}</span></button>`).join('')}
      </div>
      <div class="level-grid">
        ${pageLevels.map((level) => {
          const number = Number(level.id.slice(1));
          const unlocked = number <= progress.unlockedLevel;
          const record = progress.records[level.id];
          return `<button type="button" class="level-card ${record ? 'is-complete' : ''}"
            data-action="level" data-level="${level.id}" ${unlocked ? '' : 'disabled'}
            aria-label="${level.id} ${escapeHtml(level.title)}，${unlocked ? '已解鎖' : '尚未解鎖'}">
            <span class="level-number">第 ${number} 關</span>
            <strong>${escapeHtml(level.title)}</strong>
            <span>${level.rows}×${level.columns} · ${level.stops.length} 站</span>
            ${record ? starsMarkup(record.stars) : '<span class="level-lock">尚未完成</span>'}
          </button>`;
        }).join('')}
      </div>
      <nav class="pager" aria-label="關卡頁面">
        <button type="button" data-action="page" data-page="0" ${page === 0 ? 'disabled' : ''}>上一頁</button>
        <span>${page + 1} / 2</span>
        <button type="button" data-action="page" data-page="1" ${page === 1 ? 'disabled' : ''}>下一頁</button>
      </nav>
      <button class="text-action" type="button" data-action="home">返回遊戲首頁</button>
    </section>`;
  }

  function taskPanel(level, stopProgress) {
    return `<section class="task-panel" aria-label="配送順序">
      <div class="task-heading"><span>🐾</span><strong>配送順序</strong></div>
      <div class="task-scroll">
        ${level.stops.map((stop, index) => `<div class="task-step ${index < stopProgress ? 'is-done' : ''} ${index === stopProgress ? 'is-next' : ''}">
          <div class="task-icon">${Icons.get(stop.item)}</div>
          <span>${escapeHtml(stop.label)}</span>
          ${index < stopProgress ? '<b aria-label="已送達">✓</b>' : ''}
        </div>${index < level.stops.length - 1 ? '<span class="task-arrow" aria-hidden="true">→</span>' : ''}`).join('')}
      </div>
    </section>`;
  }

  function cellIcon(terrain) {
    if (['tree', 'crate', 'barrier', 'fence', 'water', 'bridge'].includes(terrain)) {
      return Icons.get(terrain, 'terrain-icon');
    }
    if (terrain === 'grass') return '<span class="grass-detail" aria-hidden="true">✦</span>';
    return '';
  }

  function mapMarkup(level, state, view) {
    const pathKeys = new Set(state.path.map((cell) => `${cell[0]},${cell[1]}`));
    const points = state.path.map((cell) => `${cell[1] + 0.5},${cell[0] + 0.5}`).join(' ');
    const currentCell = view.animationCell || state.path[state.path.length - 1];
    return `<div class="map-frame ${view.largeMap ? 'is-large' : ''}">
      <div class="courier-map" role="grid" aria-label="${level.rows} 乘 ${level.columns} 社區地圖"
        style="--map-rows:${level.rows};--map-columns:${level.columns}">
        ${level.terrain.map((row, rowIndex) => row.map((terrain, columnIndex) => {
          const stop = level.stops.find((candidate) => (
            candidate.position[0] === rowIndex && candidate.position[1] === columnIndex
          ));
          const isStart = level.start[0] === rowIndex && level.start[1] === columnIndex;
          const outgoing = level.oneWayEdges.find((edge) => (
            edge.from[0] === rowIndex && edge.from[1] === columnIndex
          ));
          const direction = outgoing
            ? `${outgoing.to[0] - rowIndex},${outgoing.to[1] - columnIndex}` : '';
          const passable = ['road', 'bridge', 'plaza'].includes(terrain);
          const label = stop
            ? `${stop.label}配送站${stop.order === view.stopProgress ? '，目前下一站' : ''}`
            : TERRAIN_LABELS[terrain];
          return `<button type="button" role="gridcell" class="map-cell terrain-${terrain}
            ${pathKeys.has(`${rowIndex},${columnIndex}`) ? 'is-route' : ''}
            ${stop?.order === view.stopProgress ? 'is-next-stop' : ''}
            ${view.hintCell?.[0] === rowIndex && view.hintCell?.[1] === columnIndex ? 'is-hint' : ''}"
            data-cell="${rowIndex},${columnIndex}" data-row="${rowIndex}" data-column="${columnIndex}"
            ${passable ? 'tabindex="-1"' : 'tabindex="-1" aria-disabled="true"'}
            aria-label="第${rowIndex + 1}列第${columnIndex + 1}格，${escapeHtml(label)}">
            ${cellIcon(terrain)}
            ${outgoing ? `<span class="one-way direction-${direction.replace(',', '-')}" aria-label="單行道">➜</span>` : ''}
            ${stop ? `<span class="stop-house house-${stop.houseStyle}" aria-hidden="true">
              <span class="house-roof"></span><span class="house-body">${Icons.get(stop.item)}</span>
              <em>${stop.order + 1}</em>
            </span>` : ''}
            ${isStart ? '<span class="start-pin" aria-hidden="true">起</span>' : ''}
            ${currentCell[0] === rowIndex && currentCell[1] === columnIndex
              ? `<span class="courier-marker ${view.animating ? 'is-driving' : ''}">${Icons.get('courier')}</span>` : ''}
          </button>`;
        }).join('')).join('')}
        <svg class="route-overlay" viewBox="0 0 ${level.columns} ${level.rows}" preserveAspectRatio="none"
          aria-hidden="true" focusable="false">
          <polyline class="route-glow" points="${points}"></polyline>
          <polyline class="route-line" points="${points}"></polyline>
        </svg>
      </div>
      ${level.rows >= 9 ? '<button class="map-zoom" type="button" data-action="large-map">放大地圖</button>' : ''}
    </div>`;
  }

  function statusCards(level, state, view) {
    return `<aside class="status-panel" aria-label="配送狀態">
      <div class="status-card fuel-card">${Icons.get('fuel')}<span>剩餘油量</span><strong>${view.fuelRemaining}</strong></div>
      <div class="status-card delivered-card"><span class="status-paw">🐾</span><span>已送達</span><strong>${view.stopProgress}/${level.stops.length}</strong></div>
      <div class="status-card rating-card"><span>預估評分</span>${starsMarkup(view.projectedStars)}</div>
    </aside>`;
  }

  function toolbar(state, view) {
    return `<div class="game-toolbar">
      <button class="tool-hint" type="button" data-action="hint" ${state.hintRemaining <= 0 || view.animating ? 'disabled' : ''}>
        ${Icons.get('hint')}<span>提示</span><b>${state.hintRemaining}</b>
      </button>
      <button class="tool-clear" type="button" data-action="clear" ${state.path.length <= 1 || view.animating ? 'disabled' : ''}>
        ${Icons.get('eraser')}<span>清除路線</span>
      </button>
      <button class="tool-restart" type="button" data-action="restart" ${view.animating ? 'disabled' : ''}>
        ${Icons.get('restart')}<span>重來</span>
      </button>
      <button class="tool-depart" type="button" data-action="depart" ${view.canDepart && !view.animating ? '' : 'disabled'}>
        ${Icons.get('depart')}<span>出發</span>
      </button>
    </div>`;
  }

  function gameMarkup(level, state, progress, view) {
    const totalStars = Object.values(progress.records || {})
      .reduce((sum, record) => sum + (record.stars || 0), 0);
    return `<section class="screen game-screen ${view.largeMap ? 'large-map-mode' : ''}">
      <header class="game-hud">
        <button class="hud-back" type="button" data-action="levels" aria-label="返回選關">←</button>
        <div class="hud-stat">${Icons.get('star')}<strong>${totalStars}</strong><span>/ 300</span></div>
        <div class="hud-level"><small>配送任務</small><strong>第 ${Number(level.id.slice(1))} 關</strong></div>
        <div class="hud-stat">${Icons.get('fuel')}<strong>${view.fuelRemaining}</strong></div>
        <button class="hud-settings" type="button" data-action="settings" aria-label="開啟設定">${Icons.get('settings')}</button>
      </header>
      ${taskPanel(level, view.stopProgress)}
      <div class="map-status-layout">
        ${mapMarkup(level, state, view)}
        ${statusCards(level, state, view)}
      </div>
      <div class="game-meta">
        <span>步數 ${view.fuelUsed}/${level.fuelLimit}</span>
        <span>時間 ${view.elapsedText}</span>
        <span>最佳 ${level.optimalSteps} 步</span>
      </div>
      ${toolbar(state, view)}
      <div class="instruction-bar" role="status">
        <span aria-hidden="true">🐟</span>
        <strong>${escapeHtml(view.message)}</strong>
        ${view.animating ? '<button type="button" data-action="skip-animation">略過動畫</button>' : ''}
      </div>
    </section>`;
  }

  function modalMarkup(type, data = {}) {
    if (type === 'rules') {
      return `<div class="modal-backdrop" data-modal="rules"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="關閉">×</button>
        <h2 id="modal-title">配送規則</h2>
        <ol>
          <li>從貓咪快遞員起點開始，只能沿道路、廣場或橋梁上下左右移動。</li>
          <li>依任務卡順序造訪每個貓咪家，不可提前進入後面的站點。</li>
          <li>道路格不可重複；單行道只能沿箭頭方向前進。</li>
          <li>路線必須在油量內停在最後一站，完成後按「出發」。</li>
        </ol>
        <p>鍵盤：方向鍵移動焦點，Enter／Space 規劃，Backspace 回退，Delete 清除，H 提示，R 重來。</p>
        <button class="primary-action" type="button" data-action="close-modal">知道了</button>
      </section></div>`;
    }
    if (type === 'settings') {
      return `<div class="modal-backdrop" data-modal="settings"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="關閉">×</button>
        <h2 id="modal-title">遊戲設定</h2>
        <label class="setting-row"><span>播放配送動畫</span><input type="checkbox" data-setting="animations" ${data.animations ? 'checked' : ''}></label>
        <label class="setting-row"><span>預設放大地圖</span><input type="checkbox" data-setting="largeMap" ${data.largeMap ? 'checked' : ''}></label>
        <p class="setting-note">本遊戲沒有音效，也不會連線或顯示廣告。</p>
        <button class="danger-action" type="button" data-action="reset-progress">重設全部進度</button>
      </section></div>`;
    }
    if (type === 'restart') {
      return `<div class="modal-backdrop" data-modal="restart"><section class="modal-card compact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <h2 id="modal-title">重新開始這一關？</h2>
        <p>路線、時間與本關提示次數會重設，既有完成紀錄不受影響。</p>
        <div class="modal-actions"><button type="button" data-action="close-modal">取消</button><button class="primary-action" type="button" data-action="confirm-restart">重來</button></div>
      </section></div>`;
    }
    if (type === 'complete') {
      return `<div class="modal-backdrop celebration" data-modal="complete"><section class="modal-card result-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="result-cat">${Icons.get('courier')}</div>
        <p class="eyebrow">全部送達</p>
        <h2 id="modal-title">${data.finalLevel ? '恭喜完成全部 100 關' : '配送任務完成！'}</h2>
        ${starsMarkup(data.stars, '本關獲得')}
        <dl class="result-stats">
          <div><dt>使用油量</dt><dd>${data.fuelUsed}</dd></div>
          <div><dt>最佳油量</dt><dd>${data.optimalSteps}</dd></div>
          <div><dt>剩餘油量</dt><dd>${data.fuelRemaining}</dd></div>
          <div><dt>完成時間</dt><dd>${escapeHtml(data.elapsedText)}</dd></div>
          <div><dt>使用提示</dt><dd>${data.hintsUsed}</dd></div>
        </dl>
        ${data.finalLevel ? `<p>已完成 ${data.completedCount}/100 關，累積 ${data.totalStars}/300 顆星。</p>` : ''}
        <div class="modal-actions">
          <button type="button" data-action="confirm-restart">再玩一次</button>
          ${data.finalLevel ? '' : '<button class="primary-action" type="button" data-action="next-level">下一關</button>'}
          <button type="button" data-action="levels">返回選關</button>
        </div>
      </section></div>`;
    }
    return '';
  }

  function render(target, markup) {
    if (target) target.innerHTML = markup;
    return markup;
  }

  return Object.freeze({
    homeMarkup,
    levelSelectMarkup,
    gameMarkup,
    modalMarkup,
    renderHome(target, progress, hasSession) {
      return render(target, homeMarkup(progress, hasSession));
    },
    renderLevelSelect(target, levels, progress, chapter, page) {
      return render(target, levelSelectMarkup(levels, progress, chapter, page));
    },
    renderGame(target, level, state, progress, view) {
      return render(target, gameMarkup(level, state, progress, view));
    },
    renderModal(target, type, data) {
      return render(target, modalMarkup(type, data));
    },
    clearModal(target) {
      return render(target, '');
    },
  });
});
