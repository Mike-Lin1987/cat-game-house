# ADR-0003：file runtime 與 PWA 離線快取並存

## Status

Accepted

## Context

遊戲小屋必須保留直接雙擊 `index.html` 的完全本機執行能力，也要讓手機能從 HTTPS 安裝並在首次載入後離線重開。

## Decision

- 一般頁面繼續使用傳統 `defer` script 與專案內相對資源，不使用 ES Module、頁面 `fetch()`、外部 URL 或 runtime dependencies。
- 所有可從 `file://` 點擊的遊戲連結必須明確指向實際 HTML 檔案，不依賴伺服器的資料夾 index 行為。
- `service-worker.js` 只在 HTTPS 或 localhost 註冊，且只能為快取與離線回應對同來源 GET 使用 `fetch()`。
- `CAT_GAME_CATALOG` 是入口卡片、遊戲 HTML 路徑與離線資源的單一資料來源；所有路徑必須位於專案內。
- GPT Sites 可執行零依賴的靜態複製 build，產生 `dist/client` 與 Worker entrypoint；source runtime 不依賴此輸出。

## Consequences

- 電腦可直接雙擊入口並進入各遊戲。
- 手機可安裝遊戲小屋，首次完整載入後可離線開啟。
- 新增遊戲時必須在 catalog 填入完整卡片資料與每個離線檔案。
- 部署前必須驗證 `dist/client/index.html`、`dist/server/index.js` 與 `dist/.openai/hosting.json`。
- ADR-0001 被本決策取代。
