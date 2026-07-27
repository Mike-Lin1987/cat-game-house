# 兩款遊戲離線教學影片規格

## Goal

在入口網站每款遊戲名稱旁顯示「教學影片」連結，並提供可從 `file://`、HTTPS 與離線快取播放的繁體中文 WebM 教學影片。

## Contract

- `CAT_GAME_CATALOG` 每筆遊戲新增穩定的 `tutorialHref`。
- `tutorialHref` 必須是專案內的相對 HTML 路徑，並由 catalog 驗證器與離線稽核檢查。
- 教學頁使用原生 `<video controls>`，提供海報、字幕式畫面文字、返回遊戲小屋及開始遊戲連結。
- 入口的教學連結與遊戲名稱同行；窄螢幕可自然換行，不產生水平捲動。
- 影片、教學頁與共用樣式列入各遊戲的 `offlineAssets`。

## Video content

### 貓咪方格

1. 每列、每欄、每個彩色區域各一隻貓。
2. 點一下標記 X；0.5 秒內再點同格放置貓咪。
3. 貓咪不可水平、垂直或斜角接觸。
4. 符合全部規則即可過關。

### 貓咪彩色連線

1. 從一隻貓拖曳到相同顏色與符號的貓。
2. 路線不可交叉、重疊或穿過其他端點。
3. 拖回前方格可回退修改。
4. 連完所有配對且填滿棋盤即可過關。

## Verification

- catalog、離線資源與 Sites build 自動化測試。
- `ffprobe` 不可用時，以 Chrome `<video>` metadata 驗證可播放、尺寸及 duration。
- Chrome 實際點擊兩個入口連結、播放兩支影片、檢查桌面與 320px 版面及 console。
