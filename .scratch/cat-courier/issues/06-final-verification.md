# 06 — 最終驗證

**Status:** complete

**Blocked by:** 01, 02, 03, 04, 05

- [x] 產生器重現性、關卡驗證、報告與專屬 tests
- [x] 離線稽核、完整 `npm test`、Sites build 與 `npm run verify`
- [x] Chromium 指定關卡、指定尺寸、console／network QA（`file://` 導航受瀏覽器安全政策阻擋，改以 localhost 驗證）
- [x] Standards／Spec code review 與 Critical／Important 修正
- [x] 驗證後提交並保留分支／worktree

## 已知未驗證項目

- Safari／iOS 實機。
- Chromium 直接 `file://` 操作流程；原始碼與自動化契約已驗證無網路依賴，實際瀏覽器操作因目前工具的本機檔案安全政策無法執行。
