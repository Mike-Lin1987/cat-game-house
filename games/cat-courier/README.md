# 貓咪快遞員

《貓咪快遞員》是一款可完全離線執行的路線益智遊戲。從快遞員起點規劃不重複道路，依任務卡順序造訪每個貓咪家，並在油量限制內停在最後一站。

## 開啟方式

直接雙擊 `index.html` 即可遊玩；`review.html` 可搜尋、篩選、檢視與播放 L001～L100 的固定答案。遊戲不需要伺服器、網路、安裝或 npm dependencies。

## 規則

- 可沿 `road`、`bridge`、`plaza` 上下左右移動。
- 不可進入 `grass`、`water`、`tree`、`crate`、`barrier`、`fence`。
- 路線不可重複格子，也不可提前進入後面的配送站。
- 單行道只允許 `from → to`；沒有單行標記的相鄰道路預設雙向。
- `fuelUsed = path.length - 1`，不得超過 `fuelLimit`。
- 路線依序完成全部站點並停在最後一站後，按「出發」完成配送。

3 星需要不使用提示且使用 `optimalSteps`；使用至多一次提示可得 2 星；其他合法完成為 1 星。最高星級、最佳油量與最佳時間會保存在 `cat-courier:v1`。

## 操作

- 滑鼠／觸控：從起點或路線終點拖曳；點選相鄰格延伸；拖回舊格可裁切。
- 鍵盤：方向鍵移動地圖焦點，Enter／Space 規劃，Backspace 回退，Delete 清除，H 提示，R 重來，Escape 關閉視窗。
- 提示：從目前部分路線重新求解，只高亮下一步，不代替玩家操作。
- 清除路線：只重設 path，不重設時間與提示。
- 重來：重設本關路線、時間與提示，保留完成紀錄與解鎖。

## 架構

- `js/config.js`：共用設定。
- `js/icons.js`：原創 inline SVG。
- `js/core.js`：純遊戲規則與資料驗證。
- `js/solver.js`：BigInt visited mask、分支限界與唯一最短解計數。
- `js/storage.js`：安全 LocalStorage。
- `js/renderer.js`：HTML／CSS Grid／SVG route rendering。
- `js/app.js`：畫面、Pointer Events、鍵盤、計時與動畫協調。
- `js/data/`：五份固定關卡與整合索引。
- `scripts/generate-levels.js`：seeded generator、D4 signature 與 staging 發布。
- `scripts/validate-levels.js`、`scripts/generate-report.js`：100 關獨立重解與報告。

## 關卡資料

每關包含 `id`、`chapter`、`rows`、`columns`、`terrain`、`start`、ordered `stops`、`oneWayEdges`、`solutionPath`、`optimalSteps`、`optimalSolutionCount`、`fuelLimit` 與 solver metrics。正式 runtime 不生成關卡，也不使用答案判斷完成。

## 開發驗證

```text
npm test
npm run generate-levels
npm run validate
npm run report
```

所有執行階段資源都在專案內，不使用 ES Module、`fetch()`、外部圖片、外部字型、CDN、後端或新遊戲 Service Worker。
