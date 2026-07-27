# 貓咪方格 Domain Context

## Glossary

- **關卡包（pack）**：相同棋盤尺寸、名稱、主題與解鎖進度的一組固定關卡。
- **固定關卡（level）**：已保存 regions 與唯一 solution、執行時不再生成的棋盤。
- **區域（region）**：水平或垂直連通的同色格集合；每關區域數等於棋盤邊長。
- **貓咪格（cat cell）**：玩家放置貓咪的格子；每列、每欄、每區域必須剛好一隻。
- **X 筆記（mark）**：玩家的排除筆記，不參與衝突與完成判定。
- **接觸（adjacent contact）**：兩隻貓在八方向相鄰。
- **衝突（conflict）**：列、欄、區域超量或發生接觸。
- **提示（hint）**：高亮尚未正確放置的答案格，不代替玩家落子。
- **紀錄（record）**：特定關卡的完成狀態、最佳星級、時間與步數。

## Public seams

1. `CatPuzzleCore`／CommonJS public API：所有純規則、驗證、求解與格式化。
2. 真實 `file://` 瀏覽器 UI：畫面、互動、localStorage、響應式與無障礙。
