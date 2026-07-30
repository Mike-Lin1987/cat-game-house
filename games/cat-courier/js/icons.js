(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatCourierIcons = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const LABELS = Object.freeze({
    courier: '戴著深藍橘紋安全帽、騎小機車的灰貓快遞員',
    milk: '鮮奶',
    'dried-fish': '魚乾',
    parcel: '包裹',
    'cat-food': '貓罐頭',
    yarn: '毛線球',
    mouse: '玩具老鼠',
    'cat-grass': '貓草',
    letter: '信件',
    flowers: '花束',
    'paw-cookie': '貓掌餅乾',
    tree: '樹木',
    crate: '木箱',
    barrier: '施工路障',
    fence: '白色柵欄',
    water: '水池',
    bridge: '木橋',
    hint: '提示燈泡',
    eraser: '清除路線',
    restart: '重來',
    depart: '出發小車',
    settings: '設定齒輪',
    star: '星星',
    fuel: '油量',
  });

  const ART = Object.freeze({
    courier: `
      <g stroke="#402f2a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="19" cy="53" r="7" fill="#263640"/><circle cx="53" cy="53" r="7" fill="#263640"/>
        <circle cx="19" cy="53" r="3" fill="#d9e2e7"/><circle cx="53" cy="53" r="3" fill="#d9e2e7"/>
        <path d="M16 47h34l9-12H43l-7 10H24" fill="#f47a1f"/>
        <path d="M12 39h17l5 10H12z" fill="#17324d"/>
        <rect x="5" y="30" width="15" height="14" rx="3" fill="#f6b93b"/>
        <path d="M9 34h7M12.5 31v10" stroke="#fff7e8"/>
        <path d="M32 40c-4-6-4-11-1-16h16c4 4 5 10 3 17" fill="#f47a1f"/>
        <ellipse cx="40" cy="27.5" rx="15.5" ry="14" fill="#aeb5bb"/>
        <path d="M29 35c5 4 17 4 22-1" fill="#f4eee7" stroke="none"/>
        <g data-part="helmet">
          <path d="M22 26C21 12 29 5 40 5c13 0 21 8 20 22l-7 2c-5-6-21-8-29 0z" fill="#17324d"/>
          <path d="M28 10c6-4 15-4 21 0l5 13-5 1-5-13-5-4-4 17-6 1z" fill="#fff7e8" stroke="none"/>
          <path d="M38 6c4 0 8 1 11 3l4 14-5 1-4-13-6-2z" fill="#f47a1f" stroke="none"/>
          <path d="M23 20c10-7 24-7 36 0l-2 8c-12-5-22-6-34-1z" fill="#1f2630"/>
          <path d="M28 20c7-3 16-3 24 0" fill="none" stroke="#557991" stroke-width="2"/>
        </g>
        <ellipse cx="34" cy="29" rx="3.2" ry="4.2" fill="#f6b93b"/><ellipse cx="47" cy="29" rx="3.2" ry="4.2" fill="#f6b93b"/>
        <circle cx="34" cy="29.5" r="1.7" fill="#201d1b" stroke="none"/><circle cx="47" cy="29.5" r="1.7" fill="#201d1b" stroke="none"/>
        <circle cx="33" cy="28" r=".7" fill="#fff" stroke="none"/><circle cx="46" cy="28" r=".7" fill="#fff" stroke="none"/>
        <path d="m38 34 2 1.6 2-1.6M36 38c3 2 6 2 9 0" fill="none"/>
        <path d="M52 38l5 7" fill="none" stroke="#17324d" stroke-width="3"/>
      </g>`,
    milk: `<path d="M25 10h18v8l5 7v30H20V25l5-7z" fill="#edf8fb" stroke="#3d7593" stroke-width="3"/><path d="M24 31h20v19H24z" fill="#a9dcf0"/><path d="M26 10h16" stroke="#3d7593" stroke-width="5"/><path d="M29 39c4-5 9-5 13 0" fill="none" stroke="#fff" stroke-width="3"/>`,
    'dried-fish': `<path d="M15 34c8-13 23-16 34-5l8-7-2 12 2 12-8-7c-11 11-26 8-34-5z" fill="#8cc6d5" stroke="#3c6473" stroke-width="3"/><circle cx="27" cy="31" r="2.5" fill="#3c6473"/><path d="M36 27l-7 14M43 28l-7 14" stroke="#eaf7f8" stroke-width="2.5"/>`,
    parcel: `<path d="M14 22l21-11 21 11v29L35 61 14 51z" fill="#d28b3f" stroke="#7b4824" stroke-width="3"/><path d="M14 22l21 11 21-11M35 33v28M26 16l21 11" fill="none" stroke="#7b4824" stroke-width="3"/><path d="M31 13l9 5-21 11-5-7z" fill="#f1bb68"/>`,
    'cat-food': `<path d="M17 22h38l-3 34H20z" fill="#e86555" stroke="#7b3a31" stroke-width="3"/><ellipse cx="36" cy="22" rx="19" ry="7" fill="#f4b07a" stroke="#7b3a31" stroke-width="3"/><path d="M28 39c0-5 4-8 8-4 4-4 8-1 8 4 0 6-8 10-8 10s-8-4-8-10z" fill="#fff2d9"/>`,
    yarn: `<circle cx="35" cy="35" r="21" fill="#a974bf" stroke="#64456f" stroke-width="3"/><path d="M18 25c13 1 25 9 33 22M17 39c11-9 24-15 35-14M25 18c8 12 13 25 13 37M51 49c8 1 11 5 8 10" fill="none" stroke="#d5b4e1" stroke-width="2.5"/>`,
    mouse: `<path d="M18 39c0-12 10-20 23-17 12 3 16 18 5 26-10 8-28 4-28-9z" fill="#9eb9cf" stroke="#4b677e" stroke-width="3"/><circle cx="27" cy="21" r="7" fill="#e9b1b6" stroke="#4b677e" stroke-width="3"/><circle cx="24" cy="36" r="2.5" fill="#263d4c"/><path d="M46 43c10 0 13 5 9 10-4 5 1 8 6 5" fill="none" stroke="#4b677e" stroke-width="3"/>`,
    'cat-grass': `<path d="M18 50h36l-5 11H23z" fill="#cf8b58" stroke="#704b2d" stroke-width="3"/><path d="M27 50c-6-14-1-23 5-30 1 13 1 20 4 29 2-18 8-28 15-34-1 17-5 25-8 35M37 50c-2-13 1-22 7-29" fill="#77b45b" stroke="#397844" stroke-width="3"/>`,
    letter: `<rect x="11" y="18" width="48" height="36" rx="5" fill="#fff6df" stroke="#8f6545" stroke-width="3"/><path d="M14 22l21 18 21-18M14 50l15-14M56 50L41 36" fill="none" stroke="#d59575" stroke-width="3"/><path d="M44 13h12v13H44z" fill="#ef8791" stroke="#8f6545" stroke-width="2"/>`,
    flowers: `<path d="M35 33v28M28 38l7 9 8-11M23 58h24" stroke="#498253" stroke-width="3" fill="none"/><circle cx="35" cy="24" r="6" fill="#ffd35a"/><circle cx="35" cy="14" r="8" fill="#f08ca1"/><circle cx="45" cy="22" r="8" fill="#f5a3b4"/><circle cx="40" cy="32" r="8" fill="#ec7892"/><circle cx="29" cy="32" r="8" fill="#f5a3b4"/><circle cx="25" cy="21" r="8" fill="#ec7892"/>`,
    'paw-cookie': `<path d="M18 44c0-9 8-17 17-17s17 8 17 17c0 10-9 15-17 15S18 54 18 44z" fill="#efb764" stroke="#9b6237" stroke-width="3"/><circle cx="19" cy="26" r="7" fill="#efb764" stroke="#9b6237" stroke-width="3"/><circle cx="31" cy="18" r="7" fill="#efb764" stroke="#9b6237" stroke-width="3"/><circle cx="44" cy="19" r="7" fill="#efb764" stroke="#9b6237" stroke-width="3"/><circle cx="53" cy="30" r="7" fill="#efb764" stroke="#9b6237" stroke-width="3"/>`,
    tree: `<path d="M31 40h10v22H31z" fill="#8e5d36"/><circle cx="23" cy="34" r="13" fill="#6eaa51"/><circle cx="37" cy="25" r="17" fill="#78ba58"/><circle cx="49" cy="37" r="13" fill="#5f9d48"/><circle cx="31" cy="41" r="15" fill="#72b254"/>`,
    crate: `<rect x="11" y="12" width="48" height="48" rx="4" fill="#bd7439" stroke="#714326" stroke-width="4"/><path d="M15 16l40 40M55 16L15 56M11 27h48M11 45h48" stroke="#e2a45d" stroke-width="4"/>`,
    barrier: `<path d="M14 21h44v16H14z" fill="#f2b33c" stroke="#77442b" stroke-width="3"/><path d="M17 35l13-12M34 35l13-12M49 35l8-8" stroke="#fff5d2" stroke-width="6"/><path d="M20 37v19M52 37v19M14 57h16M43 57h16" stroke="#77442b" stroke-width="4"/>`,
    fence: `<path d="M12 19l7-8 7 8v38H12zM29 19l7-8 7 8v38H29zM46 19l7-8 7 8v38H46z" fill="#fff8e8" stroke="#9b856b" stroke-width="2.5"/><path d="M8 29h56M8 46h56" stroke="#c7aa84" stroke-width="5"/>`,
    water: `<path d="M8 22c9-7 17 7 26 0s17 7 28 0v35H8z" fill="#76cbe1"/><path d="M10 33c9-7 17 7 26 0s17 7 25 0M10 46c9-7 17 7 26 0s17 7 25 0" fill="none" stroke="#d8f4f7" stroke-width="3"/>`,
    bridge: `<path d="M10 14h50v44H10z" fill="#bb7d45" stroke="#744626" stroke-width="3"/><path d="M18 14v44M28 14v44M38 14v44M48 14v44M58 14v44" stroke="#e2ad70" stroke-width="3"/><path d="M7 18h56M7 54h56" stroke="#704428" stroke-width="4"/>`,
    hint: `<path d="M20 29c0-10 7-18 17-18s18 8 18 18c0 8-5 12-10 17l-2 5H30l-2-5c-5-4-8-9-8-17z" fill="#ffe66d" stroke="#9c6b22" stroke-width="3"/><path d="M31 57h12M30 51h14" stroke="#9c6b22" stroke-width="4"/>`,
    eraser: `<path d="M14 44l25-28c3-4 7-4 11-1l8 8c3 3 3 7 0 10L35 57H22z" fill="#f6f0e4" stroke="#6e523f" stroke-width="3"/><path d="M40 16l18 17-13 14-18-17z" fill="#ed7d73"/>`,
    restart: `<path d="M53 27A21 21 0 1 0 56 43" fill="none" stroke="#47783f" stroke-width="7" stroke-linecap="round"/><path d="M51 12l4 17-17-4" fill="#8bc461" stroke="#47783f" stroke-width="3"/>`,
    depart: `<path d="M12 30h37l10 12v11H12z" fill="#f2a33a" stroke="#75401e" stroke-width="3"/><path d="M18 20h26v22H18z" fill="#fff4de" stroke="#75401e" stroke-width="3"/><circle cx="23" cy="54" r="7" fill="#45525a"/><circle cx="49" cy="54" r="7" fill="#45525a"/><path d="M24 27h13M30 22v11" stroke="#e57455" stroke-width="3"/>`,
    settings: `<path d="M35 12l5 8 9-1 2 9 8 5-5 8 3 9-9 3-5 8-8-5-9 4-4-9-9-2 2-9-5-7 7-6 1-9 9 1z" fill="#8fb6cf" stroke="#4c6d82" stroke-width="3"/><circle cx="35" cy="36" r="9" fill="#fff7e8" stroke="#4c6d82" stroke-width="3"/>`,
    star: `<path d="M35 9l8 17 19 2-14 13 4 19-17-9-17 9 4-19L8 28l19-2z" fill="#ffc443" stroke="#a76b1e" stroke-width="3"/>`,
    fuel: `<rect x="16" y="12" width="34" height="48" rx="5" fill="#e95f50" stroke="#78332c" stroke-width="3"/><path d="M23 20h20v17H23z" fill="#fff0d7"/><path d="M50 23h6l5 8v18c0 5-7 5-7 0V37" fill="none" stroke="#78332c" stroke-width="3"/><path d="M27 45h12" stroke="#fff0d7" stroke-width="4"/>`,
  });

  function get(name, className = '') {
    const safeName = Object.prototype.hasOwnProperty.call(ART, name) ? name : 'parcel';
    const label = LABELS[safeName] || '配送圖示';
    return `<svg class="courier-icon ${className}" viewBox="0 0 70 70" role="img" aria-label="${label}" focusable="false">${ART[safeName]}</svg>`;
  }

  function getLabel(name) {
    return LABELS[name] || '配送物品';
  }

  return Object.freeze({ names: Object.freeze(Object.keys(ART)), labels: LABELS, get, getLabel });
});
