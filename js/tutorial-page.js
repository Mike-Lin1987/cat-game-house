(function initializeTutorialPage() {
  'use strict';

  const isFileRuntime = window.location.protocol === 'file:';
  for (const link of document.querySelectorAll('[data-runtime-link]')) {
    const target = isFileRuntime
      ? link.dataset.fileHref
      : link.dataset.hostHref;
    if (target) {
      link.href = target;
    }
  }
})();
