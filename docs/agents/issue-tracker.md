# Issue tracker: Local Markdown

本專案的規格與 tickets 位於 `.scratch/`。

## Conventions

- 一個功能一個目錄：`.scratch/<feature-slug>/`
- 規格檔：`.scratch/<feature-slug>/spec.md`
- 每張 ticket 一個檔案：`.scratch/<feature-slug>/issues/<NN>-<slug>.md`
- `Status:` 記錄 triage 狀態
- `Blocked by:` 記錄 blocking edges
- 若需附加討論，寫在檔案末尾的 `## Comments`

當 skill 要求 publish、fetch 或更新 ticket 時，直接讀寫上述本機 Markdown 檔案，不建立遠端 issue。
