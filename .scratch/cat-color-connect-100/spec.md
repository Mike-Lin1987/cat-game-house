# 貓咪彩色連線 100 關規格

Status: implementing

## 目標

在既有遊戲小屋加入第二款純 HTML／CSS／JavaScript 遊戲「貓咪彩色連線」，固定提供 6×6 40 關、8×8 35 關、10×10 3 關、6×8 10 關、6×10 6 關、8×10 6 關，支援 file://、鍵盤、Pointer Events、進度保存、唯一解驗證及 GPT Sites 離線發布。

## Public seams

- `window.CatConnectCore`／CommonJS：路線、完成判定、提示、序列化、關卡驗證及唯一解求解。
- `CAT_CONNECT_LEVELS_6`、`CAT_CONNECT_LEVELS_8`、`CAT_CONNECT_LEVELS_10`、`CAT_CONNECT_LEVELS`／CommonJS。
- `CatConnectStorage`：`cat-color-connect:v1` 的安全載入、保存、session 與重設。
- `CAT_GAME_CATALOG`：入口卡片、明確 HTML 路由與完整離線資源。
- 真實瀏覽器 UI：入口、首頁、選關、Pointer／鍵盤、響應式、無障礙、file://、HTTPS 與離線重載。

## 驗收摘要

- 關卡數量精確為 40／35／3／10／6／6，ID 使用 `6x6-001`、`6x8-001` 等穩定 pack 前綴。
- 全部 100 關固定、唯一解、完整覆蓋、D4 去重，執行期不生成或求解。
- 每次最多渲染 10 個關卡按鈕；三種尺寸各自從第 1 關開始解鎖。
- 提示只高亮不代畫；0／1／2+ 次提示分別獲得 3／2／1 星。
- 320px 至桌面棋盤皆為正方形，無水平捲動。
- 完整驗證、雙軸 code review、main 整合及既有 GPT Sites 更新皆通過。
