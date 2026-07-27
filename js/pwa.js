(function initializePwa() {
  'use strict';

  const script = document.currentScript;
  const serviceWorkerPath = script?.dataset.serviceWorker;
  const installButtons = [...document.querySelectorAll('[data-install-app]')];
  const installDialog = document.querySelector('#install-dialog');
  const ProgressBackup = window.CatGameProgressBackup;
  let deferredInstallPrompt = null;

  function protectProgress() {
    if (
      window.location.protocol === 'file:' ||
      !ProgressBackup?.requestPersistentStorage
    ) {
      return Promise.resolve();
    }
    return ProgressBackup.requestPersistentStorage(navigator.storage);
  }

  function openInstallHelp() {
    if (installDialog?.showModal) {
      installDialog.showModal();
    }
  }

  for (const button of installButtons) {
    button.addEventListener('click', async () => {
      await protectProgress();
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
    protectProgress();
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
    protectProgress();
    navigator.serviceWorker.register(serviceWorkerPath).catch(() => {
      // Service Worker 不可用時不影響一般線上或 file:// 遊玩。
    });
  });
})();
