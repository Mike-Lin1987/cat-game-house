## Problem Statement

遊戲小屋缺少一款以拖放、旋轉與翻面不規則拼塊為核心的固定關卡收納遊戲。玩家需要能直接以 `file://` 開啟、手機與鍵盤皆可操作，並具有 100 個經獨立求解器證明唯一解的原創關卡。

## Solution

新增《貓咪收納大師》。玩家把所有貓咪用品拼塊完整放入收納箱的可填格，不能重疊、越界、覆蓋障礙或固定物品。遊戲提供五章 100 個固定關卡、Pointer Events 拖放、旋轉、第三章起翻面、提示、復原、重玩、硬性步數上限、星級、進度保存、review 頁、關卡產生器、Exact Cover Solver、驗證報告及遊戲小屋整合。

## Public Seams

- `CAT_STORAGE_CONFIG`：名稱、總關卡、資料版本、storage key 與復原上限。
- `CatStorageCore`：拼塊變形、放置、占用、完成、步數、星級、提示與關卡驗證純函式。
- `CatStorageSolver`：不讀取保存答案的 Exact Cover 唯一解求解器。
- `CatStorageStorage`：安全降級的進度、紀錄、session 與設定存取。
- `CatStorageRenderer`：只依 Core 結果建立 DOM、拖曳預覽與可存取狀態。
- `CAT_STORAGE_LEVELS_*`：五章固定關卡 browser globals／CommonJS exports。
- 真實瀏覽器 UI：`file://`、Pointer Events、鍵盤、LocalStorage、響應式與無障礙。

## Implementation Decisions

- 遊戲位於 `games/cat-storage-master/`，runtime 僅使用傳統 script、HTML、CSS、CSS Grid、Pointer Events、inline SVG 與 LocalStorage。
- 關卡以 `fillableCells`、`blockedCells`、`fixedItems`、`pieces` 與保存答案描述；固定物品與障礙不屬於可填格。
- Solver 將每個合法變形與位置轉成 Exact Cover candidate，使用 BigInt mask、MRV、空白區剪枝、memoization 與 equivalence group 正規化，找到第二個實質答案即停止。
- 產生器用固定 seed 建立連通收納區與已解分割，只在全部 100 關通過獨立驗證及 D4 去重後更新正式資料。
- `moveLimit` 是硬上限；有效操作後先檢查完成，未完成且達上限才進入失敗狀態。
- 參考圖只作設計規格；runtime 不載入參考圖或外部素材，所有插畫皆為原創 inline／本機 SVG。
- 遊戲不自行建立或註冊 Service Worker；加入 catalog 後由既有入口在 HTTPS 下快取。

## Testing Decisions

- 只透過 Core、Solver、Storage、固定 level exports、catalog 與真實 UI public seams 測試。
- 使用 `node:test` 與 `node:assert`，逐一以獨立 Solver 驗證 L001～L100。
- 產生器連續執行兩次並比較正式資料與報告 hash。
- Chromium 驗證 `file://` 的 L001、L050、L100、拖放、鍵盤、儲存、320px～1440px、console 與外部請求。

## Out of Scope

登入、後端、資料庫、雲端同步、廣告、付費、音效、排行榜、每日任務、社群分享、runtime 關卡生成、外部素材、遊戲自有 Service Worker、GitHub push、PR 與 Sites 部署。
