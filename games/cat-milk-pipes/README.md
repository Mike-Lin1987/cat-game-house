# 《貓咪鮮奶管線》

一款完全離線的原創旋轉管線益智遊戲。玩家要把鮮奶槽接到所有貓咪碗，並讓全部有效管線形成一棵沒有洩漏的連通樹。

## 開始遊玩

直接雙擊 `index.html`。不需要伺服器、`npm install`、建置、網路或 Node.js。`review.html` 是不會修改正式進度的 100 關審核頁。

## 完整規則

- 每關恰好一個固定鮮奶槽，至少兩個單接口貓咪碗。
- 點擊、Enter 或 Space 會讓未鎖定管線順時針旋轉。
- 鮮奶只沿相鄰雙向匹配接口流動；白色脈流是 powered 狀態。
- 指向棋盤外、障礙格或沒有相反接口的管線會洩漏。
- 過關時全部有效格都必須從鮮奶槽抵達，全部碗都通奶，不能有獨立區塊、洩漏或迴圈。
- 匹配邊數必須等於有效格數減一；除鮮奶槽外，所有葉節點都必須是貓咪碗。

## 管線

`end` 有四個方向；`straight` 只有上下與左右；`elbow`、`tee` 各有四個方向；`cross` 固定四向。所有 rotation 都先由 `normalizeRotation` 消除等價狀態。

## 工具、步數與星級

- 提示高亮一格方向錯誤的未鎖定管線約四秒，不直接旋轉、不增加步數。
- 復原最多保存 100 次；復原本身增加一步，不回退時間或提示。
- 重玩會確認後恢復初始方向，並清空本關步數、時間、提示與復原。
- 3 星：零提示且不超過最佳旋轉數加 2；2 星：最多 1 次提示且在上限內；其餘完成為 1 星。
- 步數用完仍未完成會暫停棋盤，可重玩或返回選關。

## 操作與無障礙

- 滑鼠／觸控：點一下管線旋轉。
- 鍵盤：Tab 進入棋盤，方向鍵移動焦點，Enter／Space 旋轉，Escape 關閉 Modal。
- 棋盤使用 grid／gridcell，格子 aria-label 會說明位置、角色、接口、通奶與可否旋轉。
- 支援 reduced motion；10×10 在 320px 寬度完整顯示，放大模式可在面板內平移。

## 100 關

| 章節 | ID | 尺寸 | 貓咪碗 |
| --- | --- | ---: | ---: |
| 送奶入門 | L001～L020 | 5×5 | 2～4 |
| 分流管線 | L021～L040 | 6×6 | 4～6 |
| 貓咪社區 | L041～L060 | 7×7 | 6～9 |
| 鮮奶工廠 | L061～L080 | 8×8 | 8～12 |
| 全城送奶 | L081～L100 | 10×10 | 10～16 |

執行期只載入五份固定 JavaScript 資料。開發期 generator 用固定 seed 建立連通 mask 與 spanning tree；葉節點成為 bowl，度數轉換為管線 shape。獨立 solver 以 rotation domain、雙向接口約束傳播、MRV、回溯、可能連通檢查與狀態快取驗證唯一解，找到第二解即停止。D4 canonical signature 排除旋轉與鏡像等價關卡。

## 關卡資料

每格保存 `role`、`shape`、`solutionRotation`、`initialRotation` 與 `locked`；`null` 是障礙格。關卡另保存 seed、generatorVersion、difficultyScore、optimalMoves、moveLimit 與 solver／形狀 metrics。

## 儲存

LocalStorage key 是 `cat-milk-pipes:v1`。資料包含版本、已解鎖關卡、最佳星級／步數／時間、未完成 session、設定與累計遊玩秒數。損壞 JSON、錯誤 rotation 或不可用的 LocalStorage 都會安全降級；可在遊戲小屋入口備份及還原。

## 開發與驗證

Node.js 只用於開發驗證，`package.json` 沒有 dependencies：

```powershell
npm run generate-levels
npm run validate
npm run report
npm test
```

產生器另支援 `--chapter=1`、`--level=L001`、`--resume` 與 `--force`；部分模式只驗證候選，不覆寫完整正式資料。報告輸出至 `reports/level-validation-report.md` 與 `.json`。

新增關卡時應修改章節設定或 generator，重新產生完整 100 關，再執行 validator、全部測試、離線稽核與瀏覽器 QA。不要直接手改 optimalMoves、metrics 或保存答案。

## 檔案結構

- `js/config.js`：共用名稱、版本與 storage key。
- `js/core.js`：純規則、圖分析、完成、提示與 session。
- `js/solver.js`：獨立 rotation CSP solver。
- `js/storage.js`：安全 LocalStorage adapter。
- `js/renderer.js`：Inline SVG、棋盤與狀態視覺。
- `js/app.js`：畫面、事件、計時與流程協調。
- `js/data/`：五份固定關卡與索引。
- `scripts/`：產生、驗證與報告。
- `tests/`：Core、Solver、Storage 與 100 關測試。

## 已知限制

Safari 無法在目前 Windows 開發環境實測。`file://` 的 LocalStorage 行為由各瀏覽器決定；若瀏覽器禁止儲存，遊戲仍可完整遊玩，但重開後不保留進度。
