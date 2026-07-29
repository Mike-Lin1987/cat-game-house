# 《貓咪收納大師》產生器重現性

- 驗證日期：2026-07-29
- 完整候選重建指令：`npm run generate-cat-storage-levels -- --force`
- 審查修正後重新發布指令：`npm run generate-cat-storage-levels -- --resume`
- 每輪後續指令：`npm run validate-cat-storage-levels`、`npm run report-cat-storage-levels`
- 完整候選重建：2 次；審查修正後由同一固定 seed cache 連續重新發布：2 次
- 審查修正後兩次發布摘要 SHA-256：`08dc16078578c4766b81a31fceb7a2dcac6dcc3b89ba3ff06ce38a1780e33b04`
- 結果：五份正式關卡資料與兩份驗證報告逐檔雜湊完全相同；41 關對稱拼塊的 `parMoves` 已依實際操作步數修正。

| 檔案 | SHA-256 |
| --- | --- |
| `levels-001-020.js` | `9C879FE6A74570112E16FC6E280EA89787E4A59588DD65C41201DC69CE7F8546` |
| `levels-021-040.js` | `E408651959B900A0C50888FF70878511E33F0E91268D6E8F8FD7CFA2D9EA45A6` |
| `levels-041-060.js` | `570D2BF6A58629E2CCABBDBB317F80A18DE767410035BC8A0EEDB06B29470CFA` |
| `levels-061-080.js` | `02AFDEA47B0B549F8D3857D487D9537404A52BF4943BB7CF9F6E552A1D612FA9` |
| `levels-081-100.js` | `478E6C4916430E799285D14D2AB81AE18BE75653EDB1E6D46F45230070AC5207` |
| `level-validation-report.json` | `AF7E5E40EB854059E10286AF0695BFDA582D305D332AD96C3F309778E8CEE215` |
| `level-validation-report.md` | `08DA6AF5CD164958BDA31236F1E5B9E8CC1EB975D536BE1B483AE3C121394DC5` |

產生器在 staging 中完成 100 關、唯一解與 D4 去重驗證後才發布正式資料；任一候選或整體驗證失敗都不會替換既有正式檔案。
