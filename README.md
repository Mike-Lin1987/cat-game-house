# 遊戲小屋

一個可安裝、可離線、可持續增加新遊戲的純 HTML／CSS／JavaScript 單機遊戲入口。目前收錄「貓咪方格」與「貓咪彩色連線」，各 100 關，不載入 CDN、外部字型或第三方套件。

## 開始遊玩

### 電腦離線

直接雙擊根目錄的 `index.html` 進入遊戲小屋，再選擇遊戲。Windows 建議使用 Chrome 或 Edge。

### 手機

開啟正式 HTTPS 網址後：

- iPhone／iPad：使用 Safari，點「分享」→「加入主畫面」。
- Android：使用 Chrome，點選單 →「安裝應用程式」或「新增至主畫面」。

首次完整載入後，入口與已收錄遊戲會由 Service Worker 保存，可在沒有網路時再次開啟。進度保存在目前裝置的瀏覽器。

## 目前遊戲

### 貓咪方格

規則：

- 每一列、每一欄與每個彩色區域都恰好放置一隻貓咪。
- 貓咪彼此不能水平、垂直或斜角接觸。
- 空白格點一下會標記 X；同一格在 0.5 秒內再點一下才會放置貓咪。
- X 或貓咪超過 0.5 秒後再點一下，會取消回空白。
- X 是玩家筆記，不影響答案判定。

內建 100 關：

| 關卡包 | 棋盤 | 關卡數 |
| --- | ---: | ---: |
| 入門 | 6×6 | 15 |
| 進階 | 8×8 | 20 |
| 挑戰 | 10×10 | 30 |
| 大師 | 12×12 | 35 |

### 貓咪彩色連線

規則：

- 從一隻貓咪拖曳至相同顏色與符號的貓咪。
- 路線不可交叉、重疊或經過其他端點。
- 所有相同貓咪都連接完成，而且路線覆蓋全部格子才算過關。
- 支援滑鼠、觸控、手寫筆及鍵盤；方向鍵延伸，Backspace 回退，Delete 清線。
- 提示只高亮下一格 4 秒，不會代替玩家放置路線。

內建 100 關：

| 關卡包 | 棋盤 | 關卡數 |
| --- | ---: | ---: |
| 入門 | 6×6 | 40 |
| 進階 | 8×8 | 35 |
| 挑戰 | 10×10 | 3 |
| 寬幅 | 6×8 | 10 |
| 長廊 | 6×10 | 6 |
| 專家 | 8×10 | 6 |

每種尺寸各自從第 1 關開始解鎖。星級依提示次數計算：0 次提示 3 星、1 次 2 星、2 次以上 1 星。

## 新增其他遊戲

`js/game-catalog.js` 是入口卡片、路由與離線資源的單一資料來源。標準流程：

1. 在 `games/<game-id>/` 放入可直接執行的遊戲頁與資源。
2. 在 `assets/game-covers/` 加入入口卡片封面。
3. 在 `CAT_GAME_CATALOG` 新增一筆資料，包含穩定 `id`、標題、卡片眉題 `eyebrow`、說明、明確 HTML 入口 `href`、封面與 `offlineAssets`。
4. 執行 `npm run verify`。

入口 UI 與 Service Worker 都會依 catalog 自動處理新遊戲，不需要修改核心程式。

## 新增貓咪方格關卡

關卡包設定集中在 `js/packs.js`。可在 4×4～12×12 範圍內新增一筆 pack，或調整既有 pack 的 `levelCount`，再執行：

```powershell
npm run generate-levels
npm run validate-levels
```

選關、分頁、解鎖與進度統計會自動依 pack 設定產生。每個 pack 的 `id` 必須穩定且不可重複；已發布後請勿更改，否則既有玩家紀錄無法對應。

產生器使用固定 seed，輸出會寫入 `js/levels.js`。遊戲執行期間不會隨機產生關卡，也不會讀取外部 JSON。

## 新增貓咪彩色連線關卡

設定集中在 `games/cat-color-connect/js/config.js`。每個 pack 使用穩定 `id`、`rows`、`columns`、關卡數、章節與固定 seed；UI、解鎖、分頁及驗證器皆由資料設定推導。

```powershell
npm run generate-cat-connect-levels
npm run validate-cat-connect-levels
```

正式關卡拆在 `games/cat-color-connect/js/levels-*.js`，遊戲執行期間不會啟動產生器或求解器。驗證報告輸出至 `reports/cat-color-connect/`。

## 開發與驗證

需求：Node.js 18 以上。專案沒有 npm runtime dependencies。

```powershell
npm test
npm run validate-levels
npm run validate-cat-connect-levels
npm run validate-offline
npm run verify
npm run build
```

`npm run build` 是 GPT Sites 專用的零依賴靜態複製步驟，輸出至忽略版控的 `dist/`；直接雙擊 source `index.html` 不需要先建置。

完整關卡重建約需數分鐘：

```powershell
npm run generate-levels
```

## 儲存與相容性

- 貓咪方格進度使用 `localStorage` key `cat-grid-game:v1`，搬到獨立路由後仍保持相同資料結構。
- 貓咪彩色連線進度使用 `localStorage` key `cat-color-connect:v1`，包含各尺寸解鎖、最佳紀錄、設定與未完成 session。
- 儲存空間不可用時仍可完整遊玩，但重新整理後不會保留進度。
- `file://` 可直接遊玩；PWA 安裝與離線快取需要 HTTPS 或 localhost。
- 使用標準 Web App Manifest、Service Worker、HTML、CSS 與 JavaScript；Safari 實機相容性不在 Windows 上虛報。

## 專案結構

- `index.html`、`portal.css`：遊戲小屋入口。
- `js/game-catalog.js`：可擴充遊戲 catalog。
- `manifest.webmanifest`、`service-worker.js`、`js/pwa.js`：安裝與離線能力。
- `games/cat-grid/index.html`：貓咪方格獨立入口。
- `games/cat-color-connect/`：貓咪彩色連線獨立 runtime、固定關卡及資料驅動 UI。
- `styles.css`、`js/app.js`：貓咪方格 UI 與遊戲流程。
- `js/packs.js`、`js/core.js`、`js/levels.js`：關卡設定、規則與固定 100 關。
- `scripts/`、`tests/`：產生、離線稽核與自動化驗證。
- `reports/cat-color-connect/`：100 關獨立求解及唯一性驗證報告。
- `worker/`、`scripts/build-site.js`：GPT Sites 靜態託管包裝，不參與本機遊戲 runtime。
- `docs/design/`：核准概念圖與視覺 fidelity ledger。
