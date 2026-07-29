# 《貓咪收納大師》

一款可完全離線執行的不規則拼塊收納益智遊戲。把托盤中的所有貓咪用品完整放進木製箱子，不重疊、不越界，也不壓到障礙或固定物品，即可通關。

## 開始遊玩

直接雙擊 `index.html`，不需要伺服器、`npm install`、建置或網路。`review.html` 可搜尋、篩選並檢查 L001～L100 的初始盤面、保存答案與驗證證據，不會修改正式遊戲進度。

## 操作

- 滑鼠／觸控／手寫筆：拖曳拼塊到箱子，拖出箱外可取回托盤。
- 工具列：提示、復原、旋轉、翻面、重玩與放大。
- 鍵盤：Tab 選擇拼塊或格子，方向鍵移動棋盤焦點，Enter／Space 放置，R 旋轉，F 翻面，Delete 取回，Escape 關閉視窗。
- 拖曳時會顯示吸附預覽；合法位置使用形狀與色彩雙重提示，無效位置會回彈。

復原最多保存 100 筆。旋轉、翻面、放置、重新移動、取回與復原都會計步；提示不會替玩家放置，但會輪替指出一個拼塊及其目標輪廓。

## 通關、步數與星級

- 所有非固定拼塊都已使用，而且每個可填格恰好覆蓋一次才算完成。
- `moveLimit` 是硬上限；最後一步若同時完整收納，通關優先，否則立即停止計時與操作。
- 三星要求不使用提示且不超過 `parMoves`；二星容許一次提示並在寬限步數內；其餘完成為一星。
- 每關完成後解鎖下一關；L100 會顯示總星數、完成關卡與累計遊玩時間。

## 五章 100 關

| 章節 | ID | 棋盤 | 特色 |
| --- | --- | --- | --- |
| 暖身收納 | L001～L020 | 4×4～5×5 | 基本拖放與旋轉 |
| 巧手整理 | L021～L040 | 5×5～6×6 | 障礙與固定物品 |
| 翻面妙招 | L041～L060 | 6×6～7×7 | 必須翻面的非對稱拼塊 |
| 滿箱挑戰 | L061～L080 | 7×7～8×8 | 更多拼塊與狹窄空間 |
| 收納大師 | L081～L100 | 8×8～10×10 | 高搜尋深度與放大棋盤 |

Runtime 只載入五份固定 JavaScript 關卡資料，不會隨機產生內容。開發期 generator 使用固定 seed 建立連通收納區、障礙、固定物品與解答分割；BigInt bitmask Exact Cover Solver 使用 MRV、元件面積剪枝、memoization 與回溯，找到第二個實質解即停止。等價拼塊交換視為同一解，並用 D4 canonical signature 排除旋轉與鏡像重複。

## 公開介面

- `CAT_STORAGE_CONFIG`：名稱、100 關、資料版本、storage key 與復原上限。
- `CatStorageCore`：變形、放置、占用、完成、星級、提示、session 與關卡驗證純函式。
- `CatStorageSolver.solveLevel(level, { maxSolutions: 2 })`：獨立求解並回傳答案數、答案與搜尋統計；不讀取 `level.solution`。
- `CatStorageStorage`：LocalStorage 安全降級與進度更新。
- `CatStorageRenderer`：只呈現 Core 傳入的狀態，不自行判斷規則。
- `CAT_STORAGE_LEVELS_001_020`～`CAT_STORAGE_LEVELS_081_100` 與 `CAT_STORAGE_LEVELS`：瀏覽器全域／CommonJS 雙介面。

## 儲存

LocalStorage key 是 `cat-storage-master:v1`。玩家 session 只保存 placements、步數、時間、提示、狀態與最多 100 筆歷史；占用、空格與合法性都會即時計算。損壞 JSON、版本不相容或 LocalStorage 不可用時會安全降級，仍可繼續遊玩。

## 開發與驗證

Node.js 只用於開發驗證，遊戲沒有 runtime dependencies：

```powershell
npm run generate-levels
npm run validate
npm run report
npm test
```

從根專案可執行：

```powershell
npm run generate-cat-storage-levels
npm run validate-cat-storage-levels
npm run report-cat-storage-levels
```

產生器支援 `--chapter=1`、`--level=L001`、`--resume` 與 `--force`。完整 100 關先寫入 staging，全部驗證成功後才一次發布五份正式資料。報告輸出至 `reports/level-validation-report.md` 與 `.json`。

## 已知限制

Safari 與 iOS 實機無法在目前 Windows 開發環境實測。`file://` 的 LocalStorage 行為由瀏覽器決定；若瀏覽器禁止儲存，遊戲仍可完整遊玩，但重新開啟後不保留進度。
