# 遊戲小屋入口與 PWA 規格

## Goal

把目前的「貓咪方格」改為「遊戲小屋」中的第一款獨立遊戲，讓使用者能從入口網站選擇遊戲、在手機安裝，並在首次載入後離線遊玩。

## Public seams

1. `CAT_GAME_CATALOG`／CommonJS：入口卡片、路由與離線資源的單一資料來源。
2. `manifest.webmanifest`：安裝名稱、啟動路徑、顯示模式與本機圖示。
3. `service-worker.js`：只處理同來源 GET，從 catalog 衍生要預先快取的遊戲資源。
4. 真實瀏覽器 UI：入口卡片、遊戲返回入口、手機尺寸、安裝說明與離線重載。

## Acceptance criteria

- 根目錄 `index.html` 是資料驅動入口，不包含假遊戲。
- 「貓咪方格」位於 `games/cat-grid/index.html`，既有玩法、100 關與進度結構保持相容。
- 入口和遊戲頁都能從 `file://` 使用；Service Worker 只在 HTTPS 或 localhost 註冊。
- 未來新增遊戲時，核心入口 UI 與 Service Worker 不必修改。
- PWA 可安裝，首次線上載入後可離線開啟入口及貓咪遊戲。
- 正式站點公開部署至既有 GPT Sites 專案。

## Boundaries

- 純 HTML、CSS、JavaScript 與專案內資源。
- 不使用框架、CDN、第三方 runtime dependencies、ES Module 或後端。
- 不改變關卡資料、解鎖與 localStorage key。
- Service Worker 只能對同來源資源使用 `fetch()`。
