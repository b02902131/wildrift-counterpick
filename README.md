# Wild Rift Counter Circle

React + TypeScript + Vite 專案，用圓形視覺化展示英雄在各路的強弱對手。滑鼠 hover 英雄節點時，只顯示該英雄的 strong / weak 連線，其餘節點淡出。

## Data Source / 參考來源
- 強弱對手資訊參考： [wrstats.online](https://wrstats.online/)（手動填入 `src/data/counterData.ts`）
- 頭像來源： Riot CDN (Data Dragon) `https://ddragon.leagueoflegends.com/cdn/{version}/img/champion/{slug}.png`
- 先前探索的頁面（未直接使用）： [jungler.gg/wild-rift/champion-stats](https://jungler.gg/wild-rift/champion-stats/)

## 開發
```bash
npm install
npm run dev
```

若遇到 Vite 的 Node 版本警告，請使用 Node 20.19+ 或 22.12+。

## 調整資料
- 編輯 `src/data/counterData.ts`，新增/修改英雄的 `lane`, `slug`, `strongAgainst`, `weakAgainst`。
- `slug` 使用 Riot 圖像代號（如 `Rammus`, `Ahri`, `Leona`）。
