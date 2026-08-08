# 遊戲小屋 Domain Context

## Glossary

- **關卡包（pack）**：相同棋盤尺寸、名稱、主題與解鎖進度的一組固定關卡。
- **固定關卡（level）**：已保存 regions 與唯一 solution、執行時不再生成的棋盤。
- **區域（region）**：水平或垂直連通的同色格集合；每關區域數等於棋盤邊長。
- **貓咪格（cat cell）**：玩家放置貓咪的格子；每列、每欄、每區域必須剛好一隻。
- **X 筆記（mark）**：玩家的排除筆記，不參與衝突與完成判定。
- **滑動標記（swipe marking）**：玩家在棋盤按住空格並滑過其他格子，沿途空格連續加入 X 筆記的觸控操作；既有 X 筆記與貓咪格不會被滑動改寫。
- **接觸（adjacent contact）**：兩隻貓在八方向相鄰。
- **衝突（conflict）**：列、欄、區域超量或發生接觸。
- **提示（hint）**：高亮尚未正確放置的答案格，不代替玩家落子。
- **紀錄（record）**：特定關卡的完成狀態、最佳星級、時間與步數。
- **遊戲 catalog**：入口卡片、遊戲路由與離線資源的單一資料來源。
- **入口（portal）**：根目錄的多遊戲選擇頁。
- **安裝（install）**：透過 Web App Manifest 將遊戲小屋加入手機主畫面。
- **離線快取（offline cache）**：Service Worker 預先保存入口與 catalog 宣告的遊戲資源。
- **備用格（spare cell）**：《喵語分類接龍》中可暫放一張露出牌的空格；完成關卡時必須清空。
- **有效管線格（active pipe tile）**：《貓咪鮮奶管線》中屬於鮮奶槽、貓咪碗或一般管線的格子；障礙格不計入。
- **通奶（powered）**：有效管線格可沿雙向匹配接口從鮮奶槽抵達的狀態。
- **洩漏（leak）**：接口指向棋盤外、障礙格，或相鄰格沒有相反接口。
- **完整鮮奶網路（complete milk network）**：全部有效管線格與貓咪碗都通奶，沒有洩漏或迴圈，且匹配接口形成一棵連通樹。
- **可填格（fillable cell）**：《貓咪收納大師》中必須恰好被一個可移動拼塊覆蓋的收納箱格子。
- **固定物品（fixed item）**：《貓咪收納大師》中已位於收納箱內、不可移動且不可被拼塊覆蓋的物品。
- **待放區（piece tray）**：《貓咪收納大師》中保存尚未放入收納箱之拼塊的可橫向捲動區域。
- **實質解答（material solution）**：忽略同一 equivalence group 中視覺與變形完全相同拼塊交換後的 Exact Cover 解答。
- **暴露卡牌（exposed tile）**：《貓咪三層配對》中仍在中央且沒有任何更高層重疊卡牌的可選卡牌。
- **遮擋者（blocker）**：與較低層卡牌有正面積重疊、尚未移除的更高層卡牌。
- **暫存槽（match tray）**：《貓咪三層配對》中依圖案分組保存已選卡牌的 9 格區域；三張相同圖案同步消除。
- **安全洗牌（certified shuffle）**：只重排中央剩餘卡牌圖案，並在 Solver 認證盤面仍可完成後才提交的工具動作。
- **配送路線（delivery route）**：《貓咪快遞員》中從起點開始、只使用正交相鄰可通行格且不重複格子的玩家 path。
- **配送站（delivery stop）**：帶有連續 order 的貓咪家；玩家必須依序進入，最後停在最末站。
- **單行道路（one-way edge）**：只允許 `from → to` 的相鄰可通行格連線；未標示的相鄰道路預設雙向。
- **油量上限（fuel limit）**：單關允許的最大移動步數；`fuelUsed` 固定為 `path.length - 1`。
- **唯一最短配送（unique shortest delivery）**：不讀保存答案的 Solver 找到的最佳步數路線剛好一條；較長合法路線不要求唯一。

## Public seams

1. `CAT_GAME_CATALOG`／CommonJS：入口卡片、路由與各遊戲離線資源。
2. `CatPuzzleCore`／CommonJS public API：所有純規則、驗證、求解與格式化。
3. `manifest.webmanifest` 與 `service-worker.js`：安裝及同來源離線快取 contract。
4. 真實瀏覽器 UI：入口、畫面、互動、localStorage、響應式、無障礙與離線重載。
