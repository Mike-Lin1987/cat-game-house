(function initializeGamePortal() {
  'use strict';

  const catalog = window.CAT_GAME_CATALOG || [];
  const gameList = document.querySelector('#game-list');
  const arrowSymbol = document.querySelector('#portal-arrow');
  const playSymbol = document.querySelector('#portal-play');

  if (!gameList) {
    return;
  }

  function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    return element;
  }

  function createMetadata(game) {
    const list = document.createElement('ul');
    list.className = 'game-meta';

    const levelItem = document.createElement('li');
    levelItem.textContent = `${game.levelCount} 關`;
    list.append(levelItem);

    if (game.offline) {
      const offlineItem = document.createElement('li');
      offlineItem.textContent = '支援離線遊玩';
      list.append(offlineItem);
    }

    return list;
  }

  function resolveRuntimeHref(href) {
    if (window.location.protocol === 'file:') {
      return href;
    }
    return href.replace(/\/index\.html(?=$|[?#])/, '/');
  }

  function createGameCard(game) {
    const card = document.createElement('article');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    card.style.setProperty('--game-accent', game.accent);

    const coverWrap = document.createElement('div');
    coverWrap.className = 'game-cover-wrap';
    const cover = document.createElement('img');
    cover.className = 'game-cover';
    cover.src = game.cover;
    cover.alt = '';
    cover.width = 760;
    cover.height = 430;
    coverWrap.append(cover);

    const body = document.createElement('div');
    body.className = 'game-card-body';
    const titleRow = document.createElement('div');
    titleRow.className = 'game-title-row';
    titleRow.append(createTextElement('h2', '', game.title));

    const tutorialLink = document.createElement('a');
    tutorialLink.className = 'tutorial-link';
    tutorialLink.href = resolveRuntimeHref(game.tutorialHref);
    tutorialLink.setAttribute('aria-label', `${game.title}教學影片`);

    const tutorialIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tutorialIcon.setAttribute('viewBox', playSymbol.getAttribute('viewBox'));
    tutorialIcon.setAttribute('aria-hidden', 'true');
    tutorialIcon.innerHTML = playSymbol.innerHTML;
    tutorialLink.append(tutorialIcon, createTextElement('span', '', '教學影片'));

    titleRow.append(tutorialLink);
    body.append(
      createTextElement('p', 'game-eyebrow', game.eyebrow),
      titleRow,
      createTextElement('p', 'game-description', game.description),
      createMetadata(game),
    );

    const link = document.createElement('a');
    link.className = 'play-link';
    link.href = resolveRuntimeHref(game.href);
    link.append(createTextElement('span', '', '開始遊戲'));

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', arrowSymbol.getAttribute('viewBox'));
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = arrowSymbol.innerHTML;
    link.append(icon);
    body.append(link);

    card.append(coverWrap, body);
    return card;
  }

  gameList.replaceChildren(...catalog.map(createGameCard));
})();
