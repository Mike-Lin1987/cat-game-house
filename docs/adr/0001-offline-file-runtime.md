# ADR-0001：使用傳統 script 的 file:// 離線執行

## Status

Superseded by ADR-0003

## Decision

遊戲使用傳統 `defer` script，依序載入 packs、core、levels、app。不得使用 ES Module、`fetch()`、外部 URL 或 runtime dependencies。

## Consequences

- 使用者可直接雙擊 `index.html`。
- 瀏覽器與 Node 共用資料時採 UMD-style global／`module.exports` 介面。
- 所有文字、SVG 與樣式皆位於專案內。
