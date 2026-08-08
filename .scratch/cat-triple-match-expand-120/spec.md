# 《貓咪三層配對》120 關擴充規格

## Goal

新增第六章 L101～L120，讓遊戲從 100 關擴充為 120 關，同時保留既有 L001～L100 與玩家進度。

## Confirmed scope

- 第六章固定 20 關，ID 為 L101～L120。
- 第六章名稱為「銀河天台」。
- 張數由 108 張漸進到 126 張，維持三張一組、最多三層與九格暫存槽規則。
- 首頁、遊戲選關、關卡審核頁、離線快取與說明文件同步為 120 關。
- `cat-triple-match:v1` 儲存 key 與既有 L001～L100 ID 不變。

## Public verification seams

1. 固定關卡資料：公開 `CAT_TRIPLE_LEVELS`／CommonJS 入口提供連續 L001～L120；舊 100 關內容不變。
2. 關卡認證：公開驗證器確認 120 關皆合法、可由不讀 `knownSolution` 的 Solver 完成、峰值暫存槽小於 9，且 D4／圖案換名 signature 不重複。
3. 玩家入口：遊戲選關、首頁 catalog 與 Service Worker 離線資源都顯示並載入 120 關與第六章。

## Boundaries

- 不改遊戲規則、操作方式、圖案集合或工具次數。
- 不重排或重建既有 L001～L100。
- 不變更其他遊戲的資料與進度格式。
- 正式資料只在 staging 完整驗證通過後替換。

## Completion criteria

- L001～L120 全部通過結構、Solver、槽位與去重驗證。
- 新舊入口皆可載入第六章，離線資源包含新資料檔。
- 相關測試、完整 `npm run verify`、正式 build 與瀏覽器操作驗證全數通過。
