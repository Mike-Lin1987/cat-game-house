# 10 — Spare 暫存格與空牌堆移牌

- Status: in-progress
- Blocks: none
- Blocked by: 09-hard-levels

## Tracer bullet

以 `CatWordCore` 公開動作完成「露出牌 → spare → 空牌堆 → 分類槽」，
再讓 Solver、session、提示、Pointer／點選／鍵盤 UI 共用同一規則。

## 驗收

- [ ] 初始盤面固定建立 2 個空 spare 暫存格。
- [ ] 任一露出牌可移入空 spare，spare 牌可移出，且每次實際移動算一步。
- [ ] 完全空白的牌堆可接收露出牌；非空牌堆及原地移動均拒絕。
- [ ] 分類牌與提示牌可直接從 spare 放入合法分類槽。
- [ ] 完成判斷、撤回、提示、卡關及 session 都包含 spare 狀態。
- [ ] Solver 防止 spare／空欄循環，100 關仍可解且不超過 25,000 節點。
- [ ] Pointer、點選與鍵盤皆可操作 spare 與空牌堆。
- [ ] 320×568 無水平捲動，規則文案及無障礙名稱完整。
- [ ] 完整 `npm run verify` 與真實瀏覽器 QA 通過。
