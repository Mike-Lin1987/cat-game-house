(function initializeReviewPage() {
  'use strict';

  const levels = window.CAT_WORD_LEVELS;
  const Core = window.CatWordCore;
  const Solver = window.CatWordSolver;
  const list = document.getElementById('review-level-list');
  const detail = document.getElementById('review-detail');
  const search = document.getElementById('review-search');
  const chapter = document.getElementById('review-chapter');
  const previous = document.getElementById('review-previous');
  const next = document.getElementById('review-next');
  let selectedIndex = 0;

  function cardLabel(level, cardId) {
    const card = Core.getCardById(level, cardId);
    if (card.cardType === 'category') {
      return Core.getCategoryById(level, card.categoryId).label;
    }
    return card.label;
  }

  function cardNode(level, cardId) {
    const card = Core.getCardById(level, cardId);
    const node = document.createElement('span');
    node.className = `review-card ${card.cardType}`;
    node.textContent = `${card.displayType === 'icon' ? `${card.icon} ` : ''}${cardLabel(level, cardId)}`;
    node.title = `${card.id} · ${card.categoryId}`;
    return node;
  }

  function renderDetail() {
    const level = levels[selectedIndex];
    const solution = Solver.solveLevel(level);
    const summaryValues = [
      ['關卡', level.id],
      ['章節', String(level.chapter)],
      ['layoutVersion', String(level.layoutVersion)],
      ['分類／提示', `${level.categories.length} / ${level.cards.filter((card) => card.cardType === 'item').length}`],
      ['par／三星／二星', `${level.parMoves} / ${level.threeStarMoves} / ${level.threeStarMoves + 10}`],
      ['Solver', solution.solved ? `${solution.movesUsed} 步` : '失敗'],
      ['5槽上限', solution.maxActiveCategories <= 5 ? '通過' : '失敗'],
      ['內容審核', level.contentReview.checked ? '已完成' : '未完成'],
    ];
    detail.innerHTML = `
      <div class="review-summary">
        ${summaryValues.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join('')}
      </div>
    `;

    const categorySection = document.createElement('section');
    categorySection.className = 'review-section';
    categorySection.innerHTML = '<h2>分類與提示內容</h2>';
    const categoryGrid = document.createElement('div');
    categoryGrid.className = 'review-categories';
    for (const categoryItem of level.categories) {
      const box = document.createElement('div');
      box.className = 'review-category';
      const items = level.cards.filter(
        (card) =>
          card.cardType === 'item' &&
          card.categoryId === categoryItem.id,
      );
      box.innerHTML = `
        <h3>${categoryItem.symbol} ${categoryItem.label}（${categoryItem.required}）</h3>
        <ul>${items
          .map(
            (item) =>
              `<li>${item.displayType === 'icon' ? `${item.icon} ` : ''}${item.label}${item.displayType === 'icon' ? ` · aria-label：${item.ariaLabel}` : ''}</li>`,
          )
          .join('')}</ul>
      `;
      categoryGrid.append(box);
    }
    categorySection.append(categoryGrid);
    detail.append(categorySection);

    const layoutSection = document.createElement('section');
    layoutSection.className = 'review-section';
    layoutSection.innerHTML = '<h2>五欄接龍開局（由下至上，最後一張露出）</h2>';
    const columns = document.createElement('div');
    columns.className = 'review-columns';
    level.layout.initialColumns.forEach((column, index) => {
      const box = document.createElement('div');
      box.className = 'review-column';
      box.innerHTML = `<strong>第 ${index + 1} 欄 · ${column.length} 張${index === 4 ? ' · 第五欄' : ''}</strong>`;
      for (const cardId of column) box.append(cardNode(level, cardId));
      columns.append(box);
    });
    layoutSection.append(columns);
    detail.append(layoutSection);

    const batchSection = document.createElement('section');
    batchSection.className = 'review-section';
    batchSection.innerHTML = '<h2>固定發牌批次</h2>';
    const batches = document.createElement('div');
    batches.className = 'review-batches';
    level.layout.drawBatches.forEach((batch, index) => {
      const row = document.createElement('div');
      row.className = 'review-batch';
      const label = document.createElement('strong');
      label.textContent = `第 ${index + 1} 批（${batch.length} 張）`;
      row.append(label, ...batch.map((cardId) => cardNode(level, cardId)));
      batches.append(row);
    });
    batchSection.append(batches);
    detail.append(batchSection);

    const auditSection = document.createElement('section');
    auditSection.className = 'review-section';
    auditSection.innerHTML = `
      <h2>驗證與審核</h2>
      <p>Solver：${solution.solved ? '通過' : '失敗'}；節點 ${solution.nodesVisited}；回溯 ${solution.backtracks}；最大深度 ${solution.maxDepth}；最大同時分類 ${solution.maxActiveCategories}。</p>
      <p>第五欄：${level.layout.initialColumns[4].length} 張；5 槽限制：${solution.maxActiveCategories <= 5 ? '通過' : '失敗'}。</p>
      <p>內容審核：${level.contentReview.checked ? '已完成' : '未完成'}；備註：${level.contentReview.ambiguityNotes || '無'}</p>
      <p>Layout signature：<code>${level.layoutSignature}</code></p>
    `;
    detail.append(auditSection);

    previous.disabled = selectedIndex === 0;
    next.disabled = selectedIndex === levels.length - 1;
    list.querySelectorAll('button').forEach((button) => {
      button.setAttribute(
        'aria-current',
        String(Number(button.dataset.index) === selectedIndex),
      );
    });
  }

  function renderList() {
    const query = search.value.trim().toLowerCase();
    const selectedChapter = Number(chapter.value);
    list.replaceChildren(
      ...levels.flatMap((level, index) => {
        const searchable = `${level.id} ${level.title} ${level.categories
          .map((item) => item.label)
          .join(' ')}`.toLowerCase();
        if (
          (selectedChapter && level.chapter !== selectedChapter) ||
          (query && !searchable.includes(query))
        ) {
          return [];
        }
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = level.id;
        button.dataset.index = index;
        button.setAttribute('aria-current', String(index === selectedIndex));
        button.onclick = () => {
          selectedIndex = index;
          renderDetail();
        };
        return [button];
      }),
    );
  }

  search.addEventListener('input', renderList);
  chapter.addEventListener('change', renderList);
  previous.addEventListener('click', () => {
    selectedIndex = Math.max(0, selectedIndex - 1);
    renderDetail();
  });
  next.addEventListener('click', () => {
    selectedIndex = Math.min(levels.length - 1, selectedIndex + 1);
    renderDetail();
  });
  renderList();
  renderDetail();
})();

