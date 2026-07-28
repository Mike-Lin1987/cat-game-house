# Ticket 04：完整遊戲回合與無障礙 UI

- Status: ready-for-agent
- Blocked by: 01-core-rules, 02-solver-storage, 03-generator-content

## 範圍

完成首頁、選關、遊戲桌、Pointer／點選／鍵盤、提示、撤回、發牌、
長按放大、完成／失敗／卡關／設定 dialogs、音效與大字模式。

## 驗收

- 開局為真正接龍式牌堆：五欄由左至右 2／3／4／5／6 張，卡背重疊且
  每欄只露出最後一張。
- 五欄上緣對齊，欄高只向下延伸；瀏覽器 QA 比對五欄 top 座標。
- 五個分類槽起始全空，牌庫固定在遊戲桌右上方。
- 每關固定 54 張，五欄開局 20 張（2／3／4／5／6），牌庫起始 34 張。
- 320px 同時顯示五槽與五欄且無水平捲動。
- 只有遊戲桌 `touch-action: none`。
- focus、aria-live、dialog focus trap 與 reduced motion 通過。
- `file://` 可完整遊玩。
