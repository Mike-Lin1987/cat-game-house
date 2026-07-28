# 09 — 100 關難度強化

- Status: in-progress
- Blocks: none
- Blocked by: 03-generator-content, 08-motion-polish

## Tracer bullet

以 v3 solution-first 產生器建立一關可解且達到章節搜尋門檻的牌局，並讓
Solver、Storage 與 UI 共同驗證新統計及 layout signature session 遷移。

## 驗收

- [ ] 100 關皆為 `generatorVersion: 3.0.0`。
- [ ] 五章逐關符合節點、回溯、分支與 25,000 節點上限。
- [ ] `moveLimit = parMoves + 5/4/3/2/1`。
- [ ] 連續產生 byte-identical。
- [ ] 舊 session 清除，records、解鎖與設定保留。
- [ ] 完整 Node、離線、build 與瀏覽器驗證通過。
