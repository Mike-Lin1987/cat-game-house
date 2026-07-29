(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleIcons = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Stable IDs preserve published levels and saved sessions. Only the player-facing
  // animal identity changes, following the approved 4 × 4 concept sheet.
  const definitions = [
    ['fishbone', '貓咪', '#77808a', '#f29a8c'],
    ['milk', '狗狗', '#d99b45', '#f0bd70'],
    ['yarn', '兔子', '#f4ede4', '#f4a8a5'],
    ['can', '狐狸', '#ef7e2f', '#fff0d5'],
    ['paw', '棕熊', '#8f5635', '#c98b5b'],
    ['box', '熊貓', '#f5f0df', '#2f3439'],
    ['mouse', '獅子', '#d98b28', '#f3bc55'],
    ['bell', '老虎', '#ef8c28', '#47362d'],
    ['fish', '企鵝', '#303d4e', '#f0a52e'],
    ['scratcher', '貓頭鷹', '#9a6b43', '#edc873'],
    ['cushion', '無尾熊', '#9ca3a8', '#e9a6a0'],
    ['blue-cushion', '梅花鹿', '#bd7a3f', '#f0d0a0'],
    ['salmon', '浣熊', '#777774', '#33383a'],
    ['grass', '水獺', '#9b6948', '#d7a576'],
    ['bowl', '倉鼠', '#d89549', '#fff0d3'],
    ['feather', '羊駝', '#ead6b2', '#fff4dc'],
  ];

  const icons = definitions.map(([id, label, color, accent]) => ({
    id, label, color, accent,
  }));

  function escape(value) {
    return String(value).replace(/[&<>"']/g, (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  const portraits = {
    fishbone: `
      <path d="M15 27 13 10l13 9c4-2 8-2 12 0l13-9-2 17c4 5 5 15 0 21-7 9-27 9-34 0-5-6-4-16 0-21Z" fill="#7d858e" stroke="#53382f" stroke-width="2"/>
      <path d="m16 15 8 6-7 3Zm32 0-8 6 7 3Z" fill="#ee9a94"/>
      <path d="M18 42c4-6 9-8 14-8s10 2 14 8c-2 9-9 13-14 13s-12-4-14-13Z" fill="#f5eee3"/>
      <path d="m25 20 3 7m11-7-3 7M32 18v8" fill="none" stroke="#505861" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="24.5" cy="33" rx="3.5" ry="4.6" fill="#293229"/><ellipse cx="39.5" cy="33" rx="3.5" ry="4.6" fill="#293229"/>
      <circle cx="23.5" cy="31.5" r="1.1" fill="#fff"/><circle cx="38.5" cy="31.5" r="1.1" fill="#fff"/>
      <path d="m29 40 3-2 3 2-3 3Z" fill="#e9827d"/><path d="M32 43c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#6f3f39" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M20 40 9 38m11 6L9 46m35-6 11-2m-11 6 11 2" stroke="#6d615b" stroke-width="1.2" stroke-linecap="round"/>`,
    milk: `
      <path d="M19 24C11 15 10 20 11 33c1 8 5 11 10 5m24-14c8-9 9-4 8 9-1 8-5 11-10 5" fill="#c47f39" stroke="#56372a" stroke-width="2"/>
      <path d="M18 34c0-13 6-20 14-20s14 7 14 20v8c0 9-6 14-14 14s-14-5-14-14Z" fill="#dda34e" stroke="#56372a" stroke-width="2"/>
      <path d="M20 40c3-8 21-8 24 0 2 8-5 15-12 15s-14-7-12-15Z" fill="#f1c77f"/>
      <ellipse cx="25" cy="34" rx="3.2" ry="4" fill="#392e25"/><ellipse cx="39" cy="34" rx="3.2" ry="4" fill="#392e25"/>
      <circle cx="24" cy="32.8" r="1" fill="#fff"/><circle cx="38" cy="32.8" r="1" fill="#fff"/>
      <path d="M27 41c2-2 8-2 10 0-1 4-3 5-5 5s-4-1-5-5Z" fill="#4b3125"/>
      <path d="M27 47c2 4 8 4 10 0v2c-1 5-9 5-10 0Z" fill="#eb827a" stroke="#6f3f39" stroke-width="1"/>
      <path d="M19 27c2-5 6-8 11-9" fill="none" stroke="#f5d694" stroke-width="2.5" stroke-linecap="round"/>`,
    yarn: `
      <path d="M19 27 18 9c0-5 6-5 8-1l4 11m15 8 1-18c0-5-6-5-8-1l-4 11" fill="#f7f1e8" stroke="#67483c" stroke-width="2"/>
      <path d="M21 11v13m22-13v13" stroke="#f2a6a5" stroke-width="4" stroke-linecap="round"/>
      <path d="M17 35c0-13 6-19 15-19s15 6 15 19v7c0 9-6 14-15 14s-15-5-15-14Z" fill="#f5efe6" stroke="#67483c" stroke-width="2"/>
      <path d="M20 43c4-7 20-7 24 0-2 9-7 12-12 12s-10-3-12-12Z" fill="#fffaf1"/>
      <ellipse cx="25" cy="34" rx="3.2" ry="4.2" fill="#4a3429"/><ellipse cx="39" cy="34" rx="3.2" ry="4.2" fill="#4a3429"/>
      <circle cx="24" cy="32.6" r="1" fill="#fff"/><circle cx="38" cy="32.6" r="1" fill="#fff"/>
      <path d="m29 41 3-2 3 2-3 3Z" fill="#ef9796"/><path d="M32 44c-1 3-4 4-6 2m6-2c1 3 4 4 6 2" fill="none" stroke="#70453d" stroke-width="1.3" stroke-linecap="round"/>`,
    can: `
      <path d="m14 27 1-18 13 10h8L49 9l1 18c5 7 3 18-3 24-7 7-23 7-30 0-6-6-8-17-3-24Z" fill="#ef7d2e" stroke="#5f3928" stroke-width="2"/>
      <path d="m17 14 8 7-8 4Zm30 0-8 7 8 4Z" fill="#51382e"/>
      <path d="M14 38c5-4 9-3 13 1l5 5 5-5c4-4 8-5 13-1-1 12-8 18-18 18s-17-6-18-18Z" fill="#fff0d6"/>
      <path d="M20 28c3-3 6-3 9 0m6 0c3-3 6-3 9 0" fill="none" stroke="#5b3727" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="24.5" cy="33" rx="3.3" ry="4.2" fill="#302a25"/><ellipse cx="39.5" cy="33" rx="3.3" ry="4.2" fill="#302a25"/>
      <circle cx="23.5" cy="31.6" r="1" fill="#fff"/><circle cx="38.5" cy="31.6" r="1" fill="#fff"/>
      <path d="m28 42 4-2 4 2-4 4Z" fill="#3f2e27"/><path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#6b3e33" stroke-width="1.3"/>`,
    paw: `
      <circle cx="18" cy="22" r="7" fill="#825034" stroke="#56362a" stroke-width="2"/><circle cx="46" cy="22" r="7" fill="#825034" stroke="#56362a" stroke-width="2"/>
      <path d="M13 37c0-14 8-23 19-23s19 9 19 23v5c0 9-7 14-19 14s-19-5-19-14Z" fill="#8e5737" stroke="#56362a" stroke-width="2"/>
      <path d="M21 42c1-7 6-10 11-10s10 3 11 10c1 8-5 13-11 13s-12-5-11-13Z" fill="#c88858"/>
      <ellipse cx="24" cy="33" rx="3.1" ry="3.8" fill="#2f2823"/><ellipse cx="40" cy="33" rx="3.1" ry="3.8" fill="#2f2823"/>
      <circle cx="23" cy="31.8" r="1" fill="#fff"/><circle cx="39" cy="31.8" r="1" fill="#fff"/>
      <path d="M27 41c2-2 8-2 10 0-1 4-3 5-5 5s-4-1-5-5Z" fill="#3c2a22"/>
      <path d="M32 46c0 4-5 6-8 3m8-3c0 4 5 6 8 3" fill="none" stroke="#61382f" stroke-width="1.4" stroke-linecap="round"/>`,
    box: `
      <circle cx="18" cy="20" r="8" fill="#2f3438" stroke="#4a382f" stroke-width="2"/><circle cx="46" cy="20" r="8" fill="#2f3438" stroke="#4a382f" stroke-width="2"/>
      <path d="M13 36c0-15 8-23 19-23s19 8 19 23v6c0 9-7 14-19 14s-19-5-19-14Z" fill="#f5f0df" stroke="#4a382f" stroke-width="2"/>
      <path d="M18 31c2-7 9-8 12-2 2 5-2 10-7 10-4 0-7-4-5-8Zm28 0c-2-7-9-8-12-2-2 5 2 10 7 10 4 0 7-4 5-8Z" fill="#31363a"/>
      <ellipse cx="25" cy="32" rx="2.4" ry="3" fill="#111"/><ellipse cx="39" cy="32" rx="2.4" ry="3" fill="#111"/>
      <circle cx="24.2" cy="31" r=".8" fill="#fff"/><circle cx="38.2" cy="31" r=".8" fill="#fff"/>
      <ellipse cx="32" cy="42" rx="5" ry="3.5" fill="#292a29"/>
      <path d="M32 45c-1 3-4 4-6 2m6-2c1 3 4 4 6 2" fill="none" stroke="#5f3932" stroke-width="1.4" stroke-linecap="round"/>`,
    mouse: `
      <path d="M7 36c0-7 3-11 8-13-2-6 2-10 8-9 2-6 8-8 12-4 5-3 10 0 11 5 6-1 10 4 8 10 5 3 6 8 3 13 2 6-2 10-7 11-3 6-10 8-15 4-5 4-12 2-15-3-6 1-11-4-9-10-3-1-4-2-4-4Z" fill="#b96821" stroke="#67401f" stroke-width="2"/>
      <path d="M17 37c0-13 6-20 15-20s15 7 15 20v5c0 9-6 14-15 14s-15-5-15-14Z" fill="#e5a03c" stroke="#67401f" stroke-width="1.7"/>
      <path d="M21 43c3-7 19-7 22 0-2 8-7 12-11 12s-9-4-11-12Z" fill="#f3c66d"/>
      <ellipse cx="25" cy="34" rx="3" ry="3.8" fill="#33291e"/><ellipse cx="39" cy="34" rx="3" ry="3.8" fill="#33291e"/>
      <circle cx="24" cy="32.8" r="1" fill="#fff"/><circle cx="38" cy="32.8" r="1" fill="#fff"/>
      <path d="m28 42 4-2 4 2-4 4Z" fill="#513023"/><path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#6b3d2b" stroke-width="1.2"/>`,
    bell: `
      <circle cx="18" cy="22" r="6.5" fill="#ed8727" stroke="#513426" stroke-width="2"/><circle cx="46" cy="22" r="6.5" fill="#ed8727" stroke="#513426" stroke-width="2"/>
      <path d="M14 36c0-14 8-22 18-22s18 8 18 22v6c0 9-7 14-18 14s-18-5-18-14Z" fill="#ef8c28" stroke="#513426" stroke-width="2"/>
      <path d="M32 16v9m-10-7 5 8m15-8-5 8M17 29l9 3m21-3-9 3" fill="none" stroke="#45342c" stroke-width="3" stroke-linecap="round"/>
      <path d="M21 43c3-7 19-7 22 0-2 8-7 12-11 12s-9-4-11-12Z" fill="#f6dec0"/>
      <ellipse cx="24.5" cy="34" rx="3" ry="3.8" fill="#2b2724"/><ellipse cx="39.5" cy="34" rx="3" ry="3.8" fill="#2b2724"/>
      <circle cx="23.5" cy="32.7" r="1" fill="#fff"/><circle cx="38.5" cy="32.7" r="1" fill="#fff"/>
      <path d="m28 42 4-2 4 2-4 4Z" fill="#7d3e30"/><path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#66362c" stroke-width="1.3"/>`,
    fish: `
      <path d="M14 34c0-15 7-24 18-24s18 9 18 24v9c0 9-7 13-18 13s-18-4-18-13Z" fill="#303d4d" stroke="#49362d" stroke-width="2"/>
      <path d="M20 32c1-10 6-16 12-16s11 6 12 16v13c0 7-5 11-12 11s-12-4-12-11Z" fill="#fff5df"/>
      <ellipse cx="25" cy="31" rx="3" ry="3.8" fill="#27313a"/><ellipse cx="39" cy="31" rx="3" ry="3.8" fill="#27313a"/>
      <circle cx="24" cy="29.8" r="1" fill="#fff"/><circle cx="38" cy="29.8" r="1" fill="#fff"/>
      <path d="m25 39 7-5 7 5-7 5Z" fill="#efa42d" stroke="#8b5722" stroke-width="1.3"/>
      <circle cx="20" cy="42" r="3" fill="#efa4a0" opacity=".65"/><circle cx="44" cy="42" r="3" fill="#efa4a0" opacity=".65"/>
      <path d="M15 21c4-7 9-10 15-10" fill="none" stroke="#506273" stroke-width="2.5" stroke-linecap="round"/>`,
    scratcher: `
      <path d="m15 24 2-13 9 9c4-2 8-2 12 0l9-9 2 13c6 7 5 19-1 25-7 8-25 8-32 0-6-6-7-18-1-25Z" fill="#9b6c44" stroke="#533b2e" stroke-width="2"/>
      <path d="M18 25 9 20m37 5 9-5" stroke="#68462f" stroke-width="2" stroke-linecap="round"/>
      <circle cx="23" cy="34" r="9" fill="#e5c27c"/><circle cx="41" cy="34" r="9" fill="#e5c27c"/>
      <circle cx="23" cy="34" r="5.2" fill="#f7e49e"/><circle cx="41" cy="34" r="5.2" fill="#f7e49e"/>
      <circle cx="23" cy="34" r="2.8" fill="#2f2b25"/><circle cx="41" cy="34" r="2.8" fill="#2f2b25"/>
      <circle cx="22" cy="33" r=".9" fill="#fff"/><circle cx="40" cy="33" r=".9" fill="#fff"/>
      <path d="m28 43 4-3 4 3-4 5Z" fill="#674629"/>
      <path d="M18 51c3-3 6-4 9-2m19 2c-3-3-6-4-9-2" fill="none" stroke="#ead098" stroke-width="2"/>`,
    cushion: `
      <circle cx="15" cy="28" r="9" fill="#9ba2a6" stroke="#5a4940" stroke-width="2"/><circle cx="49" cy="28" r="9" fill="#9ba2a6" stroke="#5a4940" stroke-width="2"/>
      <circle cx="15" cy="28" r="5" fill="#e6a6a0" opacity=".75"/><circle cx="49" cy="28" r="5" fill="#e6a6a0" opacity=".75"/>
      <path d="M14 37c0-15 7-23 18-23s18 8 18 23v5c0 9-7 14-18 14s-18-5-18-14Z" fill="#a3a9ac" stroke="#5a4940" stroke-width="2"/>
      <path d="M22 42c2-7 18-7 20 0 1 8-5 13-10 13s-11-5-10-13Z" fill="#c7c4bc"/>
      <ellipse cx="24.5" cy="34" rx="3" ry="3.8" fill="#273139"/><ellipse cx="39.5" cy="34" rx="3" ry="3.8" fill="#273139"/>
      <circle cx="23.5" cy="32.7" r="1" fill="#fff"/><circle cx="38.5" cy="32.7" r="1" fill="#fff"/>
      <path d="M27 40c2-4 8-4 10 0-1 5-3 7-5 7s-4-2-5-7Z" fill="#454343"/>
      <path d="M32 47c-1 3-4 3-6 2m6-2c1 3 4 3 6 2" fill="none" stroke="#675049" stroke-width="1.2"/>`,
    'blue-cushion': `
      <path d="M21 20c-3-8-1-14 2-16m4 16c0-10 3-16 5-18m5 18c1-10 5-14 7-16" fill="none" stroke="#754825" stroke-width="2.8" stroke-linecap="round"/>
      <path d="m21 11-4-5m10 3-1-6m11 6 2-6m5 8 4-5" fill="none" stroke="#754825" stroke-width="2" stroke-linecap="round"/>
      <path d="M15 37c0-14 7-22 17-22s17 8 17 22v5c0 9-6 14-17 14s-17-5-17-14Z" fill="#bc7a40" stroke="#5d3d2d" stroke-width="2"/>
      <path d="m15 25-6 6 8 2m32-8 6 6-8 2" fill="#bc7a40" stroke="#5d3d2d" stroke-width="2" stroke-linejoin="round"/>
      <path d="M22 42c2-7 18-7 20 0 1 8-5 13-10 13s-11-5-10-13Z" fill="#efd0a3"/>
      <ellipse cx="24.5" cy="34" rx="3" ry="3.8" fill="#352b24"/><ellipse cx="39.5" cy="34" rx="3" ry="3.8" fill="#352b24"/>
      <circle cx="23.5" cy="32.7" r="1" fill="#fff"/><circle cx="38.5" cy="32.7" r="1" fill="#fff"/>
      <path d="m28 42 4-2 4 2-4 4Z" fill="#4d3328"/><path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#694033" stroke-width="1.3"/>
      <circle cx="23" cy="24" r="1.5" fill="#f3d5aa"/><circle cx="32" cy="21" r="1.5" fill="#f3d5aa"/><circle cx="41" cy="24" r="1.5" fill="#f3d5aa"/>`,
    salmon: `
      <path d="m15 29 1-13 10 7c4-2 8-2 12 0l10-7 1 13c5 6 4 16-1 22-7 7-25 7-32 0-5-6-6-16-1-22Z" fill="#797a77" stroke="#4c3d35" stroke-width="2"/>
      <path d="M15 29c5-7 12-8 17-3 5-5 12-4 17 3-4 8-10 11-17 7-7 4-13 1-17-7Z" fill="#343a3b"/>
      <path d="M19 43c4-6 9-8 13-8s9 2 13 8c-2 9-8 13-13 13s-11-4-13-13Z" fill="#d6c5ae"/>
      <ellipse cx="24.5" cy="32" rx="3" ry="3.8" fill="#1f2525"/><ellipse cx="39.5" cy="32" rx="3" ry="3.8" fill="#1f2525"/>
      <circle cx="23.5" cy="30.8" r="1" fill="#fff"/><circle cx="38.5" cy="30.8" r="1" fill="#fff"/>
      <path d="m28 42 4-2 4 2-4 4Z" fill="#392a24"/><path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#684137" stroke-width="1.3"/>
      <path d="M15 47 7 50m42-3 8 3" stroke="#66554c" stroke-width="1.2" stroke-linecap="round"/>`,
    grass: `
      <path d="M17 33c-2-15 4-24 15-24s17 9 15 24l3 10c2 9-6 14-18 14s-20-5-18-14Z" fill="#9b6847" stroke="#563c30" stroke-width="2"/>
      <circle cx="18" cy="21" r="5" fill="#8b5d42"/><circle cx="46" cy="21" r="5" fill="#8b5d42"/>
      <path d="M20 42c2-8 7-12 12-12s10 4 12 12c2 9-5 14-12 14s-14-5-12-14Z" fill="#d5a475"/>
      <ellipse cx="24.5" cy="33" rx="3" ry="3.7" fill="#292822"/><ellipse cx="39.5" cy="33" rx="3" ry="3.7" fill="#292822"/>
      <circle cx="23.5" cy="31.8" r="1" fill="#fff"/><circle cx="38.5" cy="31.8" r="1" fill="#fff"/>
      <path d="M27 41c2-2 8-2 10 0-1 4-3 5-5 5s-4-1-5-5Z" fill="#443027"/>
      <path d="M32 46c-2 3-5 3-7 1m7-1c2 3 5 3 7 1" fill="none" stroke="#684034" stroke-width="1.3"/>
      <path d="M20 39 9 37m11 6L9 46m35-7 11-2m-11 6 11 3" stroke="#6e5548" stroke-width="1.2" stroke-linecap="round"/>`,
    bowl: `
      <circle cx="17" cy="27" r="6" fill="#ca823e" stroke="#65412f" stroke-width="2"/><circle cx="47" cy="27" r="6" fill="#ca823e" stroke="#65412f" stroke-width="2"/>
      <path d="M14 38c0-15 7-23 18-23s18 8 18 23v4c0 9-7 14-18 14s-18-5-18-14Z" fill="#d99448" stroke="#65412f" stroke-width="2"/>
      <path d="M17 41c2-7 7-10 15-10s13 3 15 10c1 9-6 15-15 15s-16-6-15-15Z" fill="#fff0d2"/>
      <circle cx="18" cy="40" r="5" fill="#efa7a0" opacity=".45"/><circle cx="46" cy="40" r="5" fill="#efa7a0" opacity=".45"/>
      <ellipse cx="24.5" cy="34" rx="3" ry="3.8" fill="#342a22"/><ellipse cx="39.5" cy="34" rx="3" ry="3.8" fill="#342a22"/>
      <circle cx="23.5" cy="32.8" r="1" fill="#fff"/><circle cx="38.5" cy="32.8" r="1" fill="#fff"/>
      <path d="m29 41 3-2 3 2-3 3Z" fill="#e88e88"/><path d="M32 44c-1 3-4 4-6 2m6-2c1 3 4 4 6 2" fill="none" stroke="#70463d" stroke-width="1.3"/>`,
    feather: `
      <path d="m17 24-3-14c7 0 12 5 13 12m20 2 3-14c-7 0-12 5-13 12" fill="#e9d3af" stroke="#68483a" stroke-width="2"/>
      <path d="M18 36c0-15 5-24 14-24s14 9 14 24v21H18Z" fill="#e8d3b2" stroke="#68483a" stroke-width="2"/>
      <circle cx="23" cy="20" r="5" fill="#f5e7cb"/><circle cx="29" cy="17" r="5" fill="#f5e7cb"/><circle cx="35" cy="17" r="5" fill="#f5e7cb"/><circle cx="41" cy="20" r="5" fill="#f5e7cb"/>
      <path d="M21 43c2-9 6-15 11-15s9 6 11 15c1 9-5 14-11 14s-12-5-11-14Z" fill="#f7ead2"/>
      <ellipse cx="25" cy="35" rx="3" ry="3.8" fill="#332b25"/><ellipse cx="39" cy="35" rx="3" ry="3.8" fill="#332b25"/>
      <circle cx="24" cy="33.8" r="1" fill="#fff"/><circle cx="38" cy="33.8" r="1" fill="#fff"/>
      <path d="m29 43 3-2 3 2-3 3Z" fill="#b77561"/><path d="M32 46c-1 3-4 4-6 2m6-2c1 3 4 4 6 2" fill="none" stroke="#715044" stroke-width="1.3"/>`,
  };

  function markup(id) {
    const icon = icons.find((item) => item.id === id) || icons[0];
    const safeId = escape(icon.id);
    return `<svg class="tile-icon" data-animal="${safeId}" viewBox="0 0 64 64" aria-hidden="true" focusable="false">`
      + `<rect x="3" y="3" width="58" height="58" rx="14" fill="#fffdf6" stroke="${escape(icon.color)}" stroke-opacity=".48" stroke-width="1.5"/>`
      + `<rect x="5" y="5" width="54" height="54" rx="12" fill="${escape(icon.accent)}" fill-opacity=".16"/>`
      + `<g>${portraits[icon.id]}</g></svg>`;
  }

  function label(id) {
    return (icons.find((item) => item.id === id) || icons[0]).label;
  }

  return { icons, markup, label };
});
