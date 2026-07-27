(function initializeTutorialPage() {
  'use strict';

  const isFileRuntime = window.location.protocol === 'file:';
  const portalLink = document.querySelector('[data-portal-home]');
  const gameLinks = document.querySelectorAll('[data-game-home]');

  if (portalLink) {
    portalLink.href = isFileRuntime ? '../../index.html' : '../../';
  }
  for (const gameLink of gameLinks) {
    gameLink.href = isFileRuntime ? './index.html' : './';
  }

})();
