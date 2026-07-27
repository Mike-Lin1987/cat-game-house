# 貓咪方格專案規範

- 與使用者溝通及專案文件使用繁體中文。
- 遊戲執行階段只能使用純 HTML、CSS、JavaScript 與專案內資源。
- 不使用框架、CDN、第三方 dependencies、ES Module、`fetch()`、後端或建置流程。
- 所有關卡必須是固定資料，並由求解器重新驗證唯一解、區域連通與不重複。
- 核心規則透過 CommonJS 與瀏覽器全域雙介面測試；UI 需以真實 `file://` 瀏覽器驗證。
- 修改後必須執行產生器重現性、離線稽核、完整 Node 測試與瀏覽器 QA。

## Agent skills

### Issue tracker

規格與 tickets 使用專案內的本機 Markdown tracker。See `docs/agents/issue-tracker.md`.

### Triage labels

使用 Matt Pocock skills 的預設五種 triage labels。See `docs/agents/triage-labels.md`.

### Domain docs

本專案採 single-context domain 文件。See `docs/agents/domain.md`.
