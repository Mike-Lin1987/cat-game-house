(function initializePwa() {
  'use strict';

  const script = document.currentScript;
  const serviceWorkerPath = script?.dataset.serviceWorker;
  const installButtons = [...document.querySelectorAll('[data-install-app]')];
  const installDialog = document.querySelector('#install-dialog');
  let deferredInstallPrompt = null;

  function openInstallHelp() {
    if (installDialog?.showModal) {
      installDialog.showModal();
    }
  }

  for (const button of installButtons) {
    button.addEventListener('click', async () => {
      if (!deferredInstallPrompt) {
        openInstallHelp();
        return;
      }

      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    for (const button of installButtons) {
      button.hidden = true;
    }
  });

  if (
    window.location.protocol === 'file:' ||
    !serviceWorkerPath ||
    !('serviceWorker' in navigator)
  ) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register(serviceWorkerPath).catch(() => {
      // Service Worker 不可用時不影響一般線上或 file:// 遊玩。
    });
  });
})();
