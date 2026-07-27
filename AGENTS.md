# 遊戲小屋專案規範

- 與使用者溝通及專案文件使用繁體中文。
- 遊戲執行階段只能使用純 HTML、CSS、JavaScript 與專案內資源。
- 遊戲與入口 runtime 不使用框架、CDN、第三方 dependencies、ES Module 或應用後端；source runtime 可直接執行，不依賴建置。
- GPT Sites 部署可使用零依賴的靜態複製 build，輸出只供託管、不取代 source runtime。
- `worker/index.mjs` 是唯一允許的 ESM／Worker 例外，只能作無狀態靜態資源與 HTML fallback adapter，不得加入應用 API、資料存取或外部連線。
- 一般頁面 runtime 不使用 `fetch()`；只有 `service-worker.js` 可為離線快取對同來源 GET 使用 `fetch()`。
- 所有關卡必須是固定資料，並由求解器重新驗證唯一解、區域連通與不重複。
- 遊戲 catalog 與核心規則透過 CommonJS／瀏覽器全域雙介面測試；UI 需以真實瀏覽器驗證，並保留 `file://` 直接開啟能力。
- 修改後必須執行產生器重現性、離線稽核、完整 Node 測試與瀏覽器 QA。

## Agent skills

### Issue tracker

規格與 tickets 使用專案內的本機 Markdown tracker。See `docs/agents/issue-tracker.md`.

### Triage labels

使用 Matt Pocock skills 的預設五種 triage labels。See `docs/agents/triage-labels.md`.

### Domain docs

本專案採 single-context domain 文件。See `docs/agents/domain.md`.
