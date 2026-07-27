(function initializeProgressUi() {
  'use strict';

  const ProgressBackup = window.CatGameProgressBackup;
  const catalog = window.CAT_GAME_CATALOG || [];
  const backupButton = document.querySelector('[data-backup-progress]');
  const restoreButton = document.querySelector('[data-restore-progress]');
  const fileInput = document.querySelector('[data-progress-file]');
  const status = document.querySelector('[data-progress-status]');
  const restoreDialog = document.querySelector('#restore-dialog');
  const restoreSummary = document.querySelector('[data-restore-summary]');
  const confirmRestoreButton = document.querySelector('[data-confirm-restore]');
  let pendingBackup = null;

  if (
    !ProgressBackup ||
    !backupButton ||
    !restoreButton ||
    !fileInput ||
    !status ||
    !restoreDialog ||
    !restoreSummary ||
    !confirmRestoreButton
  ) {
    return;
  }

  function announce(message, isError = false) {
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  }

  function formatBackupDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '所選的備份檔';
    }
    return `${date.toLocaleDateString('zh-TW')} 的備份`;
  }

  function downloadBackup(backup) {
    const blob = new Blob([`${JSON.stringify(backup, null, 2)}\n`], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cat-game-house-progress-${backup.exportedAt.slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  async function protectStorage() {
    await ProgressBackup.requestPersistentStorage(navigator.storage);
  }

  backupButton.addEventListener('click', async () => {
    try {
      await protectStorage();
      const backup = ProgressBackup.createBackup(
        window.localStorage,
        catalog,
      );
      const gameCount = Object.keys(backup.games).length;
      if (gameCount === 0) {
        announce('目前還沒有可備份的遊戲進度。');
        return;
      }
      downloadBackup(backup);
      announce(`已備份 ${gameCount} 款遊戲，請保留下載的 JSON 檔案。`);
    } catch {
      announce('無法建立備份，請確認瀏覽器允許下載與本機儲存。', true);
    }
  });

  restoreButton.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', async () => {
    const [file] = fileInput.files || [];
    if (!file) {
      return;
    }

    try {
      if (file.size > ProgressBackup.MAX_BACKUP_CHARACTERS) {
        throw new RangeError('備份檔超過 2 MB 上限');
      }
      pendingBackup = ProgressBackup.parseBackup(await file.text(), catalog);
      const gameNames = Object.keys(pendingBackup.games)
        .map((gameId) => catalog.find((game) => game.id === gameId)?.title)
        .filter(Boolean);
      restoreSummary.textContent =
        `${formatBackupDate(pendingBackup.exportedAt)}，包含：${gameNames.join('、')}。`;
      restoreDialog.showModal();
      confirmRestoreButton.focus();
    } catch {
      pendingBackup = null;
      fileInput.value = '';
      announce('無法讀取這個檔案，請選擇遊戲小屋產生的 JSON 備份。', true);
    }
  });

  confirmRestoreButton.addEventListener('click', async () => {
    if (!pendingBackup) {
      return;
    }

    try {
      const restoredGameIds = ProgressBackup.restoreBackup(
        window.localStorage,
        catalog,
        pendingBackup,
      );
      await protectStorage();
      restoreDialog.close();
      announce(`已還原 ${restoredGameIds.length} 款遊戲，可以繼續遊玩。`);
    } catch {
      restoreDialog.close();
      announce('還原失敗，原有進度已保留，請確認儲存空間後再試一次。', true);
    } finally {
      pendingBackup = null;
      fileInput.value = '';
    }
  });

  restoreDialog.addEventListener('close', () => {
    pendingBackup = null;
    fileInput.value = '';
    restoreButton.focus();
  });
})();
