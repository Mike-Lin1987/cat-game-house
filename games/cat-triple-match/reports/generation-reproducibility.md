# 關卡產生重現性

- 固定 seed：`0xC47A0000 + levelNumber × 977 + attempt × 65537`
- 產生範圍：L001～L100
- 資料摘要 SHA-256：`cdaf0a5ca5a0a322c2d5b16328aaf230cc08b092648aa040e16d0b443545a744`
- 連續兩次產生後，比對五份章節資料、index 與兩份驗證報告：0 筆差異
- 正式資料先產生於 `.staging-data` 並從 staging 冷讀執行完整驗證；通過後才以目錄 rename 交易替換發布資料，任一驗證或 I/O 失敗都會保留／回復前一版。
