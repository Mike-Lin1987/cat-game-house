# 遊戲小屋

一個可安裝、可離線、可持續增加新遊戲的純 HTML／CSS／JavaScript 單機遊戲入口。目前收錄「貓咪方格」、「貓咪彩色連線」與「喵語分類接龍」，各 100 關，不載入 CDN、外部字型或第三方套件。

## 開始遊玩

### 電腦離線

直接雙擊根目錄的 `index.html` 進入遊戲小屋，再選擇遊戲。Windows 建議使用 Chrome 或 Edge。

### 手機

開啟正式 HTTPS 網址後：

- iPhone／iPad：使用 Safari，點「分享」→「加入主畫面」。
- Android：使用 Chrome，點選單 →「安裝應用程式」或「新增至主畫面」。

首次完整載入後，入口與已收錄遊戲會由 Service Worker 保存，可在沒有網路時再次開啟。進度保存在目前裝置的瀏覽器。

入口網站的「保護遊戲進度」可一次備份所有已收錄遊戲。重新安裝或更換手機前，請下載 JSON 備份檔；安裝完成後回到入口網站選擇「還原進度」即可繼續遊玩。備份與還原都在裝置本機完成，不會上傳資料。

## 目前遊戲

入口網站的每款遊戲名稱旁都有「教學影片」連結。三支影片皆使用繁體中文字幕、無旁白，並與遊戲一起加入離線快取。

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

### 喵語分類接龍

規則：

- 每關固定 54 張牌；開局五列由左至右為 2、3、4、5、6 張，共 20 張，右上牌庫剩餘 34 張。
- 五列牌堆上緣對齊並只向下延伸，只能操作每列最下方露出的牌。
- 先把金色分類牌放進五個分類槽，再將奶油白提示牌送到正確分類。
- 收齊一個分類的提示後會釋放槽位；每批發牌最多 5 張，固定由左至右加入牌堆。
- 兩個備用格各可暫放一張露出牌；牌堆完全清空後，可將露出牌或備用格中的牌移到該空欄。
- v3.1 關卡會交錯分類與提示牌；過早發牌可能壓住關鍵牌。
- 步數沒有上限；各章有不同的三星步數門檻，超過後 10 步內為二星，再多為一星。
- 提示次數為 0／1／2 次以上時分別得到三／二／一星，最終星級取步數與提示評分的較低者。
- 發牌會從右上牌庫依序飛入五列；拖曳時會顯示浮牌、合法槽位提示、吸附落位與錯誤回彈。
- 清空牌庫、五列牌堆、兩個備用格並完成所有分類即可過關。

內建 L001～L100，共五章、每章 20 關。所有關卡皆由獨立 Solver 重新驗證可解、最多同時使用五個分類槽，並檢查固定 54 張牌、五欄階梯與 layout signature 不重複。

## 新增其他遊戲

`js/game-catalog.js` 是入口卡片、路由與離線資源的單一資料來源。標準流程：

1. 在 `games/<game-id>/` 放入可直接執行的遊戲頁與資源。
2. 在 `assets/game-covers/` 加入入口卡片封面。
3. 在 `CAT_GAME_CATALOG` 新增一筆資料，包含穩定 `id`、標題、卡片眉題 `eyebrow`、說明、明確 HTML 入口 `href`、教學頁 `tutorialHref`、進度用 `storageKey`、封面與 `offlineAssets`。
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

## 重建喵語分類接龍關卡

內容、固定 seed 與 54 張牌布局產生器位於 `scripts/cat-word-solitaire/`。正式關卡拆為五個資料檔，runtime 不會執行產生器。

```powershell
npm run generate-cat-word-layouts
npm run validate-cat-word-levels
npm run report-cat-word-levels
```

驗證報告輸出至 `reports/cat-word-solitaire/`，包含每關總牌數、5 欄布局、Solver 結果、難度與內容審核狀態。

## 開發與驗證

需求：Node.js 18 以上。專案沒有 npm runtime dependencies。

```powershell
npm test
npm run validate-levels
npm run validate-cat-connect-levels
npm run validate-cat-word-levels
npm run validate-offline
npm run verify
npm run build
```

`npm run build` 是 GPT Sites 專用的零依賴靜態複製步驟，輸出至忽略版控的 `dist/`；直接雙擊 source `index.html` 不需要先建置。

教學影片的可重現 Canvas 場景位於 `scripts/tutorial-videos/`。以本機靜態伺服器開啟 `generator.html`，分別產生三支 WebM 後放回各遊戲目錄，再執行：

```powershell
npm run fix-tutorial-video-duration
```

此步驟會補上 Chrome MediaRecorder 輸出缺少的 24.5 秒 duration metadata，讓播放控制列可正確顯示與拖曳。

完整關卡重建約需數分鐘：

```powershell
npm run generate-levels
```

## 儲存與相容性

- 貓咪方格進度使用 `localStorage` key `cat-grid-game:v1`，搬到獨立路由後仍保持相同資料結構。
- 貓咪彩色連線進度使用 `localStorage` key `cat-color-connect:v1`，包含各尺寸解鎖、最佳紀錄、設定與未完成 session。
- 喵語分類接龍進度使用 `localStorage` key `cat-word-solitaire:v2`，包含章節解鎖、最佳紀錄、設定與五欄未完成 session；舊四欄 session 會安全清除。
- 入口會在 HTTPS 環境自動向瀏覽器申請 persistent storage，降低系統因容量壓力自動清除進度的機率。
- 「備份進度」會將 catalog 宣告的全部遊戲進度匯出成單一 JSON；「還原進度」只接受目前 catalog 中 storage key 相符的遊戲，寫入失敗時會回復原值。
- persistent storage 不能抵抗使用者清除網站資料；iPhone／iPad 的新主畫面圖示也可能使用獨立儲存空間，因此重新安裝前仍應保留備份檔。
- 儲存空間不可用時仍可完整遊玩，但重新整理後不會保留進度。
- `file://` 可直接遊玩；PWA 安裝與離線快取需要 HTTPS 或 localhost。
- 使用標準 Web App Manifest、Service Worker、HTML、CSS 與 JavaScript；Safari 實機相容性不在 Windows 上虛報。

## 專案結構

- `index.html`、`portal.css`：遊戲小屋入口。
- `js/game-catalog.js`：可擴充遊戲 catalog。
- `manifest.webmanifest`、`service-worker.js`、`js/pwa.js`：安裝與離線能力。
- `games/cat-grid/index.html`：貓咪方格獨立入口。
- `games/cat-color-connect/`：貓咪彩色連線獨立 runtime、固定關卡及資料驅動 UI。
- `games/cat-word-solitaire/`：喵語分類接龍獨立 runtime、固定 54 張牌關卡、Solver 與內容 review 頁。
- `tutorials/*/index.html`、`games/*/tutorial.webm`：各遊戲的離線教學頁與影片。
- `assets/tutorials/`、`scripts/tutorial-videos/`：共用教學頁樣式及可重現影片產製工具。
- `styles.css`、`js/app.js`：貓咪方格 UI 與遊戲流程。
- `js/packs.js`、`js/core.js`、`js/levels.js`：關卡設定、規則與固定 100 關。
- `scripts/`、`tests/`：產生、離線稽核與自動化驗證。
- `reports/cat-color-connect/`：100 關獨立求解及唯一性驗證報告。
- `reports/cat-word-solitaire/`：100 關五欄、五槽、54 張牌及內容驗證報告。
- `worker/`、`scripts/build-site.js`：GPT Sites 靜態託管包裝，不參與本機遊戲 runtime。
- `docs/design/`：核准概念圖與視覺 fidelity ledger。

## 授權

本專案採用 [MIT License](./LICENSE)，可自由使用、修改與散布；使用時請保留原始版權與授權聲明。
