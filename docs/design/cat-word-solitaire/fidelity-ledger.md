# 喵語分類接龍 fidelity ledger

比較基準：`approved-gameplay-mobile-solitaire.png`

| 項目 | 核准概念 | Runtime 實作 | 狀態 |
| --- | --- | --- | --- |
| 視覺語言 | 深藍牌桌、奶油白卡牌、古金描邊 | `app.css` 使用 navy／cream／gold tokens，無外部素材 | 符合 |
| 上方結構 | 五個空分類槽、右上牌庫 | `slots-and-deck` 固定 `1fr auto`，手機斷點不換列 | 符合 |
| 開局牌堆 | 五列階梯且上緣對齊，只向下延伸 | Grid `align-items:start`，卡牌以固定 overlap 往下定位 | 符合 |
| 開局張數 | 左至右 2／3／4／5／6 | 100 關固定 `[2,3,4,5,6]`，驗證 100／100 | 符合 |
| 總牌數 | 概念圖舊版牌庫顯示 24 | 最新規格每關固定 54；開局 20、牌庫 34 | 規格更新，runtime 優先 |
| 小螢幕 | 五槽與五欄同時可見 | 280px min-width、五欄 `minmax(0,1fr)`、無頁面水平捲動 | 待正式站截圖複核 |

正式站部署後補上 320×568 與桌面瀏覽器截圖，並以實際 DOM 尺寸確認五個牌堆的 `top` 值相同。
