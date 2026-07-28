# Ticket 03：內容目錄與 100 關產生器

- Status: ready-for-agent
- Blocked by: 02-solver-storage

## 範圍

建立繁中內容目錄、seeded 五欄牌局產生器、五份發布關卡檔、驗證器與
JSON／Markdown 報告。

## 驗收

- L001～L100、五章各 20 關。
- 全部開局五欄由左至右精確為 2／3／4／5／6 張。
- 至少 180 分類，分類／提示重複限制與圖片比例通過。
- solver 可解、moveLimit、五槽、五欄與 signature 去重通過。
- 再次生成 byte-identical。
