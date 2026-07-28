# Ticket 02：Solver 與 Storage

- Status: ready-for-agent
- Blocked by: 01-core-rules

## 範圍

以 Core seam 完成真實牌序 solver、狀態正規化、layout signature、提示，
並完成 `cat-word-solitaire:v2` 進度與四欄舊 session 遷移。

## 驗收

- Solver 不讀 known solution。
- storage 錯誤可安全降級。
- session、records、settings 與解鎖正規化均有測試。

