# 喵語分類接龍 fidelity ledger

比較基準：`approved-gameplay-mobile-solitaire.png`

| 項目 | 核准概念 | Runtime 實作 | 狀態 |
| --- | --- | --- | --- |
| 視覺語言 | 深藍牌桌、奶油白卡牌、古金描邊 | `app.css` 使用 navy／cream／gold tokens，無外部素材 | 符合 |
| 上方結構 | 五個空分類槽、右上牌庫 | `slots-and-deck` 固定 `1fr auto`，手機斷點不換列 | 符合 |
| 開局牌堆 | 五列階梯且上緣對齊，只向下延伸 | Grid `align-items:start`，卡牌以固定 overlap 往下定位 | 符合 |
| 開局張數 | 左至右 2／3／4／5／6 | 100 關固定 `[2,3,4,5,6]`，驗證 100／100 | 符合 |
| 總牌數 | 概念圖舊版牌庫顯示 24 | 最新規格每關固定 54；開局 20、牌庫 34 | 規格更新，runtime 優先 |
| 小螢幕 | 五槽與五欄同時可見 | 320×568 正式站截圖完整顯示五槽、右上牌庫與五欄，無水平捲動 | 符合 |

正式站瀏覽器證據：

- `verified-gameplay-mobile.png`：Chrome，320×568，完整頁面截圖。
- `verified-gameplay-desktop.png`：Chrome，1440×900，完整頁面截圖。
- DOM accessibility tree 逐欄顯示 2／3／4／5／6 張；畫面中五欄第一張牌背上緣位於同一水平線，後續牌只向下疊排。
