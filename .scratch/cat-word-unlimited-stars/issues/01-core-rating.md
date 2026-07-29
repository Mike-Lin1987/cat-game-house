# 01 — Core 無上限與星級評分

Status: completed

Blocked by: none

## Tracer

以 `CatWordCore` 公開介面完成無步數失敗、組合星級及舊 session 恢復。

## Acceptance

- [x] 超過舊門檻仍有合法動作且不會失敗。
- [x] `getStarRating()` 完整覆蓋三種步數與提示區間。
- [x] `calculateStars()` 維持相容。
- [x] 舊 `failed: true` session 恢復為可遊玩。
- [x] 兩個備用格不變。
