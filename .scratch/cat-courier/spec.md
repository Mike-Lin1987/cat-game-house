# 《貓咪快遞員》規格

## Goal

新增第七款可完全離線執行的路線益智遊戲。玩家從快遞員起點規劃不重複道路，依序造訪每個貓咪配送站，並在油量限制內停在最後一站。固定提供 L001～L100。

## Public seams

- `CAT_COURIER_CONFIG`／CommonJS：名稱、100 關、資料版本、三次提示、路線歷史與 `cat-courier:v1`。
- `CatCourierIcons`／CommonJS：快遞員、配送物品、貓屋、地形與工具的原創 inline SVG。
- `CatCourierCore`／CommonJS：地形、相鄰、單行道、順序、路線、油量、完成、星級、提示、session 與關卡驗證純函式。
- `CatCourierSolver`／CommonJS：使用 BigInt visited mask，不讀取 `solutionPath`，可從初始或部分路線重新求解並計數唯一最短解。
- `CatCourierStorage`、`CatCourierRenderer`／CommonJS。
- 五份 `CAT_COURIER_LEVELS_*` 與整合後 `CAT_COURIER_LEVELS` browser globals／CommonJS。
- 真實瀏覽器 UI：Pointer Events、鍵盤 grid、SVG 路線、出發動畫、選關、Modal、LocalStorage 與響應式版面。

## Rules and decisions

- 可通行地形為 `road`、`bridge`、`plaza`；其餘地形不可通行。
- 路線固定從 `start` 開始，只能上下左右延伸，不得重複格子、形成迴圈或提前進入後續配送站。
- 未宣告單行道的相鄰道路預設雙向；宣告後只允許 `from → to`。
- 配送進度一律由目前完整 path 重算；裁切或回退後不得保留失效進度。
- `fuelUsed = path.length - 1`，不得超過 `fuelLimit`；完成路線可在剩餘油量 0 時出發。
- 星級依附件規則：最佳路線且未使用提示為 3 星，至多一次提示為 2 星，其餘合法完成為 1 星。
- 玩家 runtime 不讀取 `solutionPath` 判斷完成；答案只供開發驗證、review 與提示比對。
- 100 關為固定資料：五章各 20 關，尺寸依序為 6×6、7×7、8×8、9×9、10×10。
- 每關至少一條非答案分支；第三章起加入單行道；D4 canonical signature 同步轉換地形、起點、站點、單行道與解答拓撲。
- 新遊戲不建立或註冊 Service Worker；既有遊戲小屋在 HTTPS 下依 catalog 快取本機資源。
- 參考圖只作版面、色票與質感規格，不作背景或 runtime 素材。

## TDD seams confirmed by supplied specification

1. `CatCourierCore` 純規則與 session 邊界。
2. `CatCourierSolver.solveLevel`／`solveFromPartialPath`，包含答案污染測試。
3. 五份固定關卡資料與生成、驗證、D4 去重邊界。
4. `CatCourierStorage` 損壞資料與不可用 LocalStorage 的安全降級。
5. `CatCourierRenderer` CommonJS contract 與真實瀏覽器 UI。
6. `CAT_GAME_CATALOG`、離線資源、教學與 Sites 靜態 build 整合。

## UI

- 奶油色背景、淺木質卡片、低飽和粉彩、圓角、縫線與貓掌裝飾。
- 頂部返回、總星數、油量、評分、中央關卡木牌與設定。
- 可內部橫向捲動的配送順序卡片。
- CSS Grid 社區地圖，每格是真實 DOM；原創 inline SVG 表現地形、貓屋、物品與快遞員。
- 地圖上方 SVG 疊加層，以橘黃色光暈 polyline 顯示規劃路線。
- 桌面使用右側狀態欄；窄螢幕改為地圖下方三張水平資訊卡。
- 黃、藍、綠、橘四鍵工具列：提示、清除路線、重來、出發。
- 320px～1440px 不產生頁面水平捲動；10×10 地圖仍完整可操作。

## Out of scope

登入、後端、資料庫、雲端同步、付費、廣告、排行榜、每日任務、外部素材、外部字型、音效、分析追蹤、runtime 關卡生成及新遊戲 Service Worker。

## Verification

- 100/100 關結構、stored solution、獨立 Solver、唯一最短解、油量、配送順序、單行道與 D4 去重通過。
- generator 連續執行結果可重現，驗證失敗時不覆寫正式資料。
- 新遊戲 `node:test`、根離線稽核、完整 repository tests、Sites 靜態 build 與 `npm run verify` 通過。
- Chromium 以 `file://` 驗證首頁、review、L001、L038、L050、L100、拖曳補格、單行道、順序、提示、重載保存與 10×10。
- 檢查 320×568、390×844、430×932、768×1024、1440×900、console 與外部請求。
