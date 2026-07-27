# 貓咪方格

一款可完全離線執行的「貓咪區域邏輯填格」單機網頁遊戲。遊戲不需要安裝、不需要網路，也不會載入 CDN、字型或第三方套件。

## 開始遊玩

直接雙擊 `index.html`，即可用瀏覽器開啟。Windows 建議使用 Chrome 或 Edge。

規則：

- 每一列、每一欄與每個彩色區域都恰好放置一隻貓咪。
- 貓咪彼此不能水平、垂直或斜角接觸。
- 點擊格子會依序循環：空白 → X → 貓咪 → 空白。
- X 是玩家筆記，不影響答案判定。

內建 100 關：

| 關卡包 | 棋盤 | 關卡數 |
| --- | ---: | ---: |
| 入門 | 6×6 | 15 |
| 進階 | 8×8 | 20 |
| 挑戰 | 10×10 | 30 |
| 大師 | 12×12 | 35 |

## 新增關卡

關卡包設定集中在 `js/packs.js`。可在 4×4～12×12 範圍內新增一筆 pack，或調整既有 pack 的 `levelCount`，再執行：

```powershell
npm run generate-levels
npm run validate-levels
```

選關、分頁、解鎖與進度統計會自動依 pack 設定產生，不需要修改核心 UI。每個 pack 的 `id` 必須穩定且不可重複；已發布後請勿更改，否則既有玩家紀錄無法對應。關卡 ID 綁定產生順序與題目內容，增加 `levelCount` 後即使難度排序改變，既有紀錄仍會跟著原本的題目。

產生器使用固定 seed，輸出會寫入 `js/levels.js`。遊戲執行期間不會隨機產生關卡，也不會讀取外部 JSON。

## 開發與驗證

需求：Node.js 18 以上。專案沒有 npm runtime dependencies。

```powershell
npm test
npm run validate-levels
npm run validate-offline
npm run verify
```

完整關卡重建約需數分鐘，實際時間依電腦效能而異：

```powershell
npm run generate-levels
```

## 儲存與相容性

- 進度保存在瀏覽器的 `localStorage`，key 為 `cat-grid-game:v1`。
- 儲存空間不可用時，遊戲仍可完整遊玩，但重新整理後不會保留進度。
- 已實際驗證 Chrome 150 與 Edge 150 的 `file://` 執行。
- 實作採標準 HTML、CSS、JavaScript，預期可在現代 Safari 執行，但目前未在 Windows 上宣稱 Safari 實機驗證。

## 專案結構

- `index.html`：離線入口與 SVG 圖示資源。
- `styles.css`：響應式視覺與無障礙樣式。
- `js/packs.js`：可擴充關卡包設定。
- `js/core.js`：規則、求解器、提示與驗證 API。
- `js/levels.js`：固定保存的 100 關資料。
- `js/app.js`：遊戲、選關、進度與 dialog 行為。
- `scripts/`：關卡產生與離線檢查。
- `tests/`：核心規則與 100 關驗證。
- `docs/design/`：核准概念圖與視覺 fidelity ledger。
