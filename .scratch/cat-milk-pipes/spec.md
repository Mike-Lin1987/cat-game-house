## Problem Statement

遊戲小屋缺少以旋轉管線、完整連通、零洩漏與無迴圈為核心的固定關卡遊戲。玩家需要一款能直接以 `file://` 離線開啟、手機與鍵盤皆可操作、具有 100 個可證明唯一解關卡的原創作品。

## Solution

新增《貓咪鮮奶管線》。玩家旋轉管線，讓唯一鮮奶槽連到所有貓咪碗，並讓全部有效格形成一棵沒有洩漏的連通樹。遊戲提供五章 100 個固定關卡、提示、復原、重玩、星級、進度保存、審核頁、關卡產生器、獨立求解器及驗證報告。

## User Stories

1. 身為玩家，我能直接雙擊遊戲頁，不需伺服器或網路即可遊玩。
2. 身為玩家，我能點擊或用鍵盤旋轉未鎖定管線。
3. 身為玩家，我能看出哪些管線已通奶、哪些接口洩漏、哪些貓咪碗仍在等待。
4. 身為玩家，我只有在全部有效格連通、沒有洩漏與迴圈時才會過關。
5. 身為玩家，我能使用不代替操作的提示、最多 100 步的復原，以及有確認流程的重玩。
6. 身為玩家，我能依序解鎖 L001 至 L100，保存最佳星級、步數、時間與未完成盤面。
7. 身為手機玩家，我能在 320px 寬度完整看見 10×10 棋盤，並可開啟放大棋盤。
8. 身為鍵盤或輔助科技使用者，我能理解每格狀態、移動焦點、操作控制及 Modal。
9. 身為關卡設計者，我能用固定 seed 重現全部關卡，並取得唯一解與難度證據。
10. 身為審核者，我能在不修改正式進度的 review 頁檢查 100 關初始盤面、答案與 metrics。
11. 身為遊戲小屋使用者，我能從入口開啟遊戲、觀看本機教學，並納入進度備份與既有離線快取。

## Implementation Decisions

- 遊戲位於既有 `games` 區域，runtime 僅使用傳統 script、HTML、CSS、Inline SVG 與 LocalStorage。
- `null` 是唯一障礙格表示；有效格只有 source、bowl、pipe，shape 為 end、straight、elbow、tee、cross。
- Core 是純規則 public seam；Renderer 不判斷完成、洩漏、連通或迴圈。
- Solver 從 shape、role、mask 與 locked rotation 求解，禁止讀取保存答案；合法 rotation domain 已消除 straight 與 cross 等價狀態。
- 產生器用 seeded PRNG 建立連通 mask 與 spanning tree，再用求解器證明唯一解；D4 canonical signature 排除旋轉與鏡像重複。
- 執行期只載入五份固定資料，不生成關卡或重新求解 100 關。
- 遊戲不自行註冊 Service Worker；加入 catalog 後由既有入口在 HTTPS 下快取其靜態資源。
- 原創美術採奶霧白、牛奶藍、陶土粉與鼠尾草綠；視覺記憶點是沿匹配管線發亮的鮮奶脈流。

## Testing Decisions

- 以 `CatMilkPipeCore`、`CatMilkPipeSolver`、`CatMilkPipeStorage` 與真實瀏覽器 UI／catalog 為測試 seams。
- 使用 `node:test` 與 `node:assert`，透過 public API 驗證規則，不測私人實作。
- 逐關由獨立 solver 驗證唯一解、stored solution、樹狀連通、碗連線、optimalMoves、moveLimit 與 D4 去重。
- 產生器執行兩次並比較正式輸出，證明固定 seed 可重現。
- Chromium 以 `file://` 驗證 L001、L050、L100、LocalStorage、鍵盤、320px～1440px 響應式、console 與外部請求。

## Out of Scope

登入、後端、資料庫、雲端同步、廣告、付費、音效、排行榜、每日任務、社群分享、runtime 生成、外部素材與遊戲自有 Service Worker。

## Further Notes

Safari 無法在目前 Windows 環境實測，完成報告不得把它列為已驗證瀏覽器。
