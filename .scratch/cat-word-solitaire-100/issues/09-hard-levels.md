# 09 — 100 關難度強化

- Status: complete
- Blocks: none
- Blocked by: 03-generator-content, 08-motion-polish

## Tracer bullet

以 v3 solution-first 產生器建立一關可解且達到章節搜尋門檻的牌局，並讓
Solver、Storage 與 UI 共同驗證新統計及 layout signature session 遷移。

## 驗收

- [x] 100 關皆為 `generatorVersion: 3.0.0`。
- [x] 五章逐關符合節點、回溯、分支與 25,000 節點上限。
- [x] `moveLimit = parMoves + 5/4/3/2/1`。
- [x] 連續產生 byte-identical。
- [x] 舊 session 清除，records、解鎖與設定保留。
- [x] 完整 Node、離線、build 與瀏覽器驗證通過。

## 驗證紀錄

- 連續兩次完整產生成功，六個發布檔 SHA-256 逐檔相同。
- `npm run verify` 通過：Node 134/134、離線稽核與 Sites build 皆成功。
- Chrome localhost 實際完成 L001，並檢查 L050、L100、320×568、session
  遷移與 console 無錯誤。
- Chrome DevTools 以真實 `file://` 完成 L001：61/66 步、3 星、0 提示；
  重新載入後仍保留 1/100 與 3/300，所有遊戲 scripts 皆由本機成功載入。
- 移除遊戲本體不需要的 Manifest link，避免 `file://` 的 Manifest CORS
  錯誤；入口網站既有 PWA 與共同離線快取不受影響。
- Standards／Spec 複查均無 Critical 或 Important finding。
