# 《喵語分類接龍》100 關整合規格

## 狀態

- Status: ready-for-agent
- Branch: `feat/cat-word-solitaire-100`
- Runtime: `games/cat-word-solitaire/`
- Storage key: `cat-word-solitaire:v2`
- Layout version: `2`
- 關卡：`L001`～`L100`，五章各 20 關

## 目標

在既有「遊戲小屋」新增第三款可直接由 `file://` 遊玩的純
HTML／CSS／JavaScript 單機遊戲。玩家從五欄牌堆翻找黃色分類牌，再將
提示牌放入五個分類槽；分類完成會釋放槽位。全部提示牌正確歸類且牌庫
清空即過關。

完成後必須整合入口 catalog、共同 PWA 快取、進度備份、教學頁與影片，
並發布 GitHub `v1.1.0` Release、三遊戲離線 ZIP 及目前 GPT Sites。

## 不可破壞的邊界

- 一般頁面 runtime 不使用 framework、dependency、ES Module、CDN 或
  `fetch()`。
- 新遊戲不註冊 Service Worker；只由入口的共同 Service Worker 快取。
- 所有程式碼文字、按鈕與遊戲狀態為 DOM／CSS 原生內容，不把 UI 做成
  靜態截圖。
- 所有關卡為固定 JavaScript 資料；runtime 不隨機產生關卡。
- Renderer 不自行判斷規則；合法性與 outcome 只能由 Core 回傳。
- Solver 只能透過 Core 的 `getLegalMoves()`／`applyLegalAction()` 模擬。
- 既有兩款遊戲的 storage key、進度、路由與離線能力保持相容。

## 公開介面

### `CAT_WORD_CONFIG`

```js
{
  gameTitle: '喵語分類接龍',
  totalLevels: 100,
  categorySlotCount: 5,
  tableauColumnCount: 5,
  spareCellCount: 2,
  dataVersion: 2,
  storageKey: 'cat-word-solitaire:v2',
  maxUndoStates: 50
}
```

### `CatWordCore`

必須公開狀態建立、衍生 view、合法動作、動作套用、發牌、完成／失敗、
撤回、步數、星級、提示與序列化。每個動作回傳：

```js
{ state, outcome, events }
```

不合法動作保持原 state 且使用穩定 outcome code。撤回採：

```js
movesUsed = Math.max(current.movesUsed, snapshot.movesUsed + 1)
```

`elapsedMs` 與 `hintsUsed` 不回退。

### `CatWordSolver`

公開 `solveLevel()`、`solveFromState()`、狀態正規化與 layout signature。
Solver 必須做真實發牌與五槽模擬、以 memoization 防止循環，找到一條
符合 `moveLimit` 的完整解即可。關卡不要求唯一操作順序。

### v3 難度強化

- `generatorVersion: 3.0.0`，`layoutVersion` 維持 `2`。
- 五章最低節點為 90／180／350／700／1,200；最低回溯為
  1／5／15／40／80；最低分支狀態為 1／2／3／4／5。
- 單關最多 25,000 節點，步數容錯依章為 `parMoves + 5／4／3／2／1`。
- Solver 額外保存 `branchingStates`、`dealDecisionStates` 與
  `forcedMoves`；分數同時使用真實搜尋統計及章節最低節點基準。
- session 必須保存 `layoutSignature`；簽章不相容時只清除 session。

### `CatWordStorage`

保存 `unlockedByChapter`、`records`、`settings` 與 `session`。舊四欄
session 不可載入 v2 盤面，但既有合法 records／settings 應保留並正規化。
localStorage 不可用時遊戲仍可完整遊玩。

## 關卡資料

- 五個資料檔，每檔 20 關，另由 `levels.js` 合併成 `CAT_WORD_LEVELS`。
- 每關含 `id`、`ordinal`、`chapter`、`layoutVersion`、`categories`、
  `cards`、`initialColumns`、`drawBatches`、`parMoves`、`moveLimit`、
  `knownSolution`、`difficultyScore`、`solverStats`、`contentReview`。
- 每關固定 54 張牌，依難度使用 9～10 個分類，每分類 4～5 張提示牌；任一時點同時啟用分類不超過
  5。
- 全部 100 關至少 180 個不同分類名稱；單一分類最多 5 關；提示詞最多
  3 關；任意相鄰 10 關不得重複分類。
- 圖片牌占全部提示牌 10%～20%，只使用 Emoji、inline SVG 或 CSS 圖示，
  並有中文 label／aria-label。
- 牌局 signature 忽略 ID、文字與五欄純排列對稱；100 關不得重複。
- seeded 產生器再次執行必須 byte-identical，正式檔只有完整驗證通過才
  覆寫。
- 全部 100 關的開局欄高必須精確為 `[2, 3, 4, 5, 6]`；其餘卡牌放入
  固定 `drawBatches`。

## 遊戲行為

- 分類牌可放入空分類槽；提示牌只能放到同分類的已啟用槽。
- 分類所需提示全部放入後分類完成並釋放槽位。
- 盤面固定提供 2 個 spare 暫存格；每格最多放 1 張目前可操作的牌，
  暫存牌可再移到分類槽或完全空白的牌堆。
- 任一牌堆完全清空後，可接收 1 張目前可操作的牌；移入後該牌成為該欄
  唯一露出牌。不可把牌放到仍有牌的牌堆，也不可原地移動。
- 從牌堆移入 spare、從 spare 移出，以及移到空牌堆都各算 1 步；完成
  關卡時兩個 spare 必須為空。
- 每批發牌最多五張，固定由左至右放到第 1～5 欄。
- Pointer 拖曳、點選備援與鍵盤操作共用 Core。
- 開啟動畫時，發牌從右上牌庫依左至右順序飛入第 1～5 欄；每張牌有
  70ms 錯開、輕微旋轉與落位回正，動畫期間避免重複發牌。
- Pointer 拖曳超過 8px 後建立跟隨指標的浮牌；原牌保留半透明占位，
  合法分類槽以綠金色提示，無效槽以珊瑚紅提示。
- 合法放置以短距離吸附落位，不合法或放到桌面空白處則回彈原位；
  Pointer cancel、視窗失焦及畫面切換必須清除浮牌與目標狀態。
- 動畫設定關閉或 `prefers-reduced-motion: reduce` 時，發牌與落位過場
  立即完成，但拖曳、點選、鍵盤與規則結果保持一致。
- 每個實際改變盤面的動作增加一步；不合法操作不增加。
- 提示由當前 state 重新求解，只高亮下一個動作，不代替操作。
- 0 次提示 3 星、1 次提示 2 星、2 次以上 1 星。
- 步數用盡且尚未完成時顯示失敗；無合法動作且無可發牌時顯示卡關。
- session 只在遊戲畫面可見時累計 elapsed。

## 介面與設計系統

概念來源：

- `docs/design/cat-word-solitaire/approved-gameplay-desktop.png`
- `docs/design/cat-word-solitaire/approved-gameplay-mobile-solitaire.png`

開局與牌堆採接龍式資訊架構：

- 五個分類槽起始皆為空。
- 五欄開局由左至右精確為 2、3、4、5、6 張，形成接龍式階梯／梯形。
- 開局牌堆共 20 張，其餘 34 張固定留在右上牌庫；每關總數恆為 54 張。
- 五個牌堆頂端必須在同一水平線，卡牌數量差異只向下延伸。
- 五欄各以卡背垂直重疊，只翻開每欄陣列最後一張可操作牌。
- 移除露出牌後才翻出下一張；卡背不可洩漏內容。
- 牌庫固定於遊戲桌右上方並顯示剩餘張數。
- 只參考使用者截圖的接龍式排列，不複製其廣告、金幣、付費解鎖、
  品牌或視覺資產。

色彩鎖定：

- 背景：深午夜藍 `#071c30`～`#0b2945`
- 卡片：暖奶油白 `#fff7e7`
- 分類／主要 accent：古金色 `#dcae56`
- 次要面板：藍灰 `#16324b`
- 錯誤：珊瑚紅 `#e85d5d`
- 焦點／選取：可讀亮藍 `#42a5ff`

五個分類槽、兩個 spare 暫存格與五欄牌堆在 320px 寬仍必須同時可見，
不產生水平捲動。
僅遊戲桌使用 `touch-action: none`。長按顯示放大 dialog；所有 dialog
實作焦點圈限、Esc、初始焦點與焦點還原。

## 入口與發布

- catalog 新增 `cat-word-solitaire`、SVG 封面、100 關、storage key 與
  完整 offline assets。
- 入口備份自動涵蓋第三款；所有「兩款遊戲」文案改為依 catalog 推導或
  使用「所有遊戲」。
- 新增繁中無旁白教學頁與 24.5 秒 WebM。
- Service Worker cache 升為 `v13`。
- GitHub Release `v1.1.0` 保留 `v1.0.0`，附
  `cat-game-house-v1.1.0-offline.zip` 與 SHA-256 驗證。

## 完成判定

- 100 關資料、內容與 solver 驗證失敗數為 0。
- 產生器第二次執行與五個發布關卡檔 byte-identical。
- `npm run validate-cat-word-levels`、`npm run report-cat-word-levels`、
  `npm run validate-offline`、`npm test`、`npm run build` 與
  `npm run verify` 全部通過。
- 真實瀏覽器完成 `file://` L001，並操作 L050／L100、第五欄／第五槽、
  五張發牌、錯誤分類、完成釋放、撤回、提示、失敗、session 恢復與
  `review.html`。
- 驗證 320×568、390×844、430×932、768×1024、1440×900；沒有外部
  request、console error 或水平溢位。
