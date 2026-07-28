# Ticket 01：核心規則 tracer bullet

- Status: ready-for-agent
- Blocked by: none

## 範圍

以 TDD 建立 `config.js` 與 `core.js`，涵蓋五欄／五槽狀態、分類牌、
提示牌、發牌、完成、失敗、撤回、星級、序列化及穩定 outcome codes。

## 驗收

- Renderer 不含遊戲規則。
- 不合法動作不修改 state 或步數。
- 撤回、elapsed、hintsUsed 語意符合 spec。
- CommonJS 與瀏覽器全域皆可使用。

