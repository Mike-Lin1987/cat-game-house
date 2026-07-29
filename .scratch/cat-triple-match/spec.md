# 《貓咪三層配對》規格

## Goal

新增第六款可完全離線執行的遊戲，以三層遮擋、九格暫存槽與三張自動消除為核心，固定提供 L001～L100。

## Public seams

- `CAT_TRIPLE_CONFIG`／CommonJS：100 關、9 格、三張消除、三層、工具次數與儲存版本。
- `CatTripleIcons`／CommonJS：16 種原創圖示與繁體中文標籤。
- `CatTripleCore`／CommonJS：遮擋、選牌、消除、完成、失敗、工具、session 與驗證純函式。
- `CatTripleSolver`／CommonJS：不讀取 `knownSolution` 的當前盤面求解。
- `CatTripleStorage`、`CatTripleRenderer`／CommonJS。
- 五份固定關卡 globals／CommonJS 與真實瀏覽器 UI。

## Decisions

- 半格座標中每張牌固定占 2×2 units；同層不得重疊，上層至少與下一層有 1 unit² 重疊。
- 選牌交易同步完成入槽、分組、消除與終局判斷；動畫只消費 Core effects。
- 第九張若形成三張，先消除；消除後仍有九張且尚有中央牌才失敗。
- 關卡只要求至少一條合法完整解，不要求操作順序唯一。
- 上述條款是使用者對 ADR-0002「唯一操作順序」的明確遊戲級例外；仍要求獨立 Solver、不讀 `knownSolution`、峰值槽位小於 9 與 D4／純圖案換名不重複。
- L038 遵循第二章 36～54 張；L100 固定 108 張。
- 遊戲不註冊 Service Worker；入口 catalog 在 HTTPS 下負責快取。

## Out of scope

登入、後端、雲端同步、付費、廣告、排行榜、每日任務、外部素材、音效、runtime 關卡生成、遠端操作。

## Verification

- 全部 100 關資料、known solution、獨立 Solver、峰值槽位、支撐與 D4 去重通過。
- `node:test`、離線稽核、完整 repository tests、Sites 靜態 build 與瀏覽器 QA 通過。
- `file://`、320px、L001／L038／L050／L100、滿槽與第九張配對邊界實測。
