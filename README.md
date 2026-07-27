# 遊戲小屋

一個可安裝、可離線、可持續增加新遊戲的純 HTML／CSS／JavaScript 單機遊戲入口。目前收錄「貓咪方格」100 關，不載入 CDN、外部字型或第三方套件。

## 開始遊玩

### 電腦離線

直接雙擊根目錄的 `index.html` 進入遊戲小屋，再點「貓咪方格」。Windows 建議使用 Chrome 或 Edge。

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

## 開發與驗證

需求：Node.js 18 以上。專案沒有 npm runtime dependencies。

```powershell
npm test
npm run validate-levels
npm run validate-offline
npm run verify
```

完整關卡重建約需數分鐘：

```powershell
npm run generate-levels
```

## 儲存與相容性

- 貓咪方格進度使用 `localStorage` key `cat-grid-game:v1`，搬到獨立路由後仍保持相同資料結構。
- 儲存空間不可用時仍可完整遊玩，但重新整理後不會保留進度。
- `file://` 可直接遊玩；PWA 安裝與離線快取需要 HTTPS 或 localhost。
- 使用標準 Web App Manifest、Service Worker、HTML、CSS 與 JavaScript；Safari 實機相容性不在 Windows 上虛報。

## 專案結構

- `index.html`、`portal.css`：遊戲小屋入口。
- `js/game-catalog.js`：可擴充遊戲 catalog。
- `manifest.webmanifest`、`service-worker.js`、`js/pwa.js`：安裝與離線能力。
- `games/cat-grid/index.html`：貓咪方格獨立入口。
- `styles.css`、`js/app.js`：貓咪方格 UI 與遊戲流程。
- `js/packs.js`、`js/core.js`、`js/levels.js`：關卡設定、規則與固定 100 關。
- `scripts/`、`tests/`：產生、離線稽核與自動化驗證。
- `docs/design/`：核准概念圖與視覺 fidelity ledger。
