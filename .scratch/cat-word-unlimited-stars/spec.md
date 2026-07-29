# 《喵語分類接龍》無步數限制與星級評分

## Goal

移除步數用盡失敗，保留步數統計，並讓步數與提示次數共同決定星級。
盤面維持五欄、五分類槽與兩個備用格。

## Public seams

- `CatWordCore.getStarRating(state, level)` 回傳 `stars`、`moveStars`、
  `hintStars`、`threeStarMoves` 與 `twoStarMoves`。
- `CatWordCore.calculateStars(state, level)` 保持相容，回傳最終星級。
- 固定關卡以 `threeStarMoves` 取代 `moveLimit`，`layoutVersion` 維持 2，
  `generatorVersion` 升為 3.1.0。
- `STEP_LIMIT_REACHED` outcome 為相容性保留，但新版 Core 不再產生。

## Rules

- 使用步數小於等於 `threeStarMoves` 得 3 顆步數星。
- 再多 10 步內得 2 顆步數星，更多步數得 1 顆步數星。
- 0／1／2 次以上提示分別得 3／2／1 顆提示星。
- 最終星級為步數星與提示星的較低值。
- 超過任何步數門檻仍可移牌、發牌、提示、撤回及完成。
- 撤回、錯誤分類與既有有效操作仍照原規則增加步數。
- 舊 session 的 `failed: true` 載入後強制正規化為 `false`。

## UI

- HUD 顯示已使用步數、即時星級與下一個門檻。
- 完成視窗顯示使用步數、步數星級、提示星級與最終星級。
- 規則說明沒有步數失敗，並列出完整評分方式。
- Service Worker cache 版本升為 v17。

## Acceptance

- 100 關的牌序、答案與 layout signature 不變。
- 兩個備用格及每格一張牌規則不變。
- 產生器二次輸出 byte-identical。
- 關卡驗證、離線稽核、Node 測試、build、瀏覽器 QA 與雙軸 review 通過。
