# 02 — 關卡契約與 Solver

Status: completed

Blocked by: 01-core-rating

## Tracer

將關卡評分欄位改為 `threeStarMoves`，移除 Solver 步數剪枝，重新產生並
驗證固定 100 關。

## Acceptance

- [x] `generatorVersion` 為 3.1.0。
- [x] `threeStarMoves = parMoves + 5/4/3/2/1`。
- [x] Solver 只受節點上限約束，不受評分門檻約束。
- [x] 100 關 layout signature 與牌序保持不變。
- [x] 第二次產生與第一次 byte-identical。
