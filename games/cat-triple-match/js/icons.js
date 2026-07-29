(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CatTripleIcons = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const definitions = [
    ['fishbone', '魚骨', '#70b7d8'], ['milk', '鮮奶', '#88bce6'],
    ['yarn', '毛線球', '#a86ac5'], ['can', '罐罐', '#ee7764'],
    ['paw', '肉球餅乾', '#efab59'], ['box', '紙箱', '#c99151'],
    ['mouse', '玩具鼠', '#7997cf'], ['bell', '鈴鐺', '#f0b43b'],
    ['fish', '小魚', '#83b96f'], ['scratcher', '貓抓板', '#b98055'],
    ['cushion', '肉球抱枕', '#8dbb68'], ['blue-cushion', '小魚抱枕', '#76a9c9'],
    ['salmon', '鮭魚玩具', '#e98b95'], ['grass', '貓草', '#71a95a'],
    ['bowl', '貓碗', '#d58967'], ['feather', '逗貓棒', '#8e7cb8'],
  ];
  const icons = definitions.map(([id, label, color]) => ({ id, label, color }));
  function escape(value) {
    return String(value).replace(/[&<>"']/g, (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }
  function markup(id) {
    const icon = icons.find((item) => item.id === id) || icons[0];
    const shapes = {
      fishbone: '<path d="M15 32c8-12 19-12 29 0-10 12-21 12-29 0Zm29 0 9-9v18l-9-9Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M22 32h22m-15-8v16m8-14v12" stroke="currentColor" stroke-width="3"/>',
      milk: '<path d="M22 16h20l4 10v24H18V26l4-10Z" fill="currentColor" opacity=".25"/><path d="M22 16h20l4 10v24H18V26l4-10Zm0 0 8 10h16M24 37h16" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>',
      yarn: '<circle cx="31" cy="31" r="17" fill="currentColor" opacity=".25"/><path d="M18 24c13-9 26-3 30 7M16 33c10-9 25-10 33-2M21 45c1-13 10-25 21-29M30 49c-2-13 4-26 14-30m2 25c6 1 10 4 11 9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
      can: '<path d="M18 20c0-6 28-6 28 0v27c0 6-28 6-28 0V20Z" fill="currentColor" opacity=".25"/><ellipse cx="32" cy="20" rx="14" ry="5" fill="none" stroke="currentColor" stroke-width="3"/><path d="M18 20v27c0 6 28 6 28 0V20M21 36h22" fill="none" stroke="currentColor" stroke-width="3"/>',
      paw: '<circle cx="32" cy="39" r="10" fill="currentColor"/><circle cx="18" cy="29" r="5" fill="currentColor"/><circle cx="27" cy="20" r="5" fill="currentColor"/><circle cx="38" cy="20" r="5" fill="currentColor"/><circle cx="47" cy="29" r="5" fill="currentColor"/>',
      box: '<path d="m15 24 17-9 17 9v22L32 55 15 46V24Z" fill="currentColor" opacity=".25"/><path d="m15 24 17 9 17-9M32 33v22m0-40 17 9v22L32 55l-17-9V24l17-9Z" fill="none" stroke="currentColor" stroke-width="3"/>',
      mouse: '<path d="M16 38c0-14 26-18 33-5 6 12-9 19-22 17-7-1-11-5-11-12Z" fill="currentColor" opacity=".35"/><circle cx="25" cy="27" r="7" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="43" cy="35" r="2" fill="currentColor"/><path d="M49 42c8 2 8 8 2 10" fill="none" stroke="currentColor" stroke-width="3"/>',
      bell: '<path d="M18 42h28l-5-7V27c0-13-18-13-18 0v8l-5 7Z" fill="currentColor" opacity=".3"/><path d="M18 42h28l-5-7V27c0-13-18-13-18 0v8l-5 7Zm10 5h8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      fish: '<path d="M14 32c9-14 25-16 36 0-11 16-27 14-36 0Zm36 0 9-9v18l-9-9Z" fill="currentColor" opacity=".3"/><circle cx="39" cy="29" r="2" fill="currentColor"/><path d="M14 32c9-14 25-16 36 0-11 16-27 14-36 0Zm36 0 9-9v18l-9-9Z" fill="none" stroke="currentColor" stroke-width="3"/>',
      scratcher: '<path d="M17 17h30v30H17z" fill="currentColor" opacity=".2"/><path d="M17 17h30v30H17zm7 5v20m8-20v20m8-20v20" fill="none" stroke="currentColor" stroke-width="3"/>',
      cushion: '<rect x="14" y="16" width="36" height="34" rx="12" fill="currentColor" opacity=".3"/><path d="M19 20c8 4 18 4 26 0M19 46c8-4 18-4 26 0" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="33" r="7" fill="currentColor"/>',
      'blue-cushion': '<rect x="13" y="17" width="38" height="32" rx="12" fill="currentColor" opacity=".3"/><path d="M20 33c7-9 16-9 23 0-7 9-16 9-23 0Zm23 0 7-6v12l-7-6Z" fill="none" stroke="currentColor" stroke-width="3"/>',
      salmon: '<path d="M15 35c8-15 23-17 35-3-9 17-25 17-35 3Zm35-3 8-7v14l-8-7Z" fill="currentColor" opacity=".3"/><path d="m25 26 9 18m1-21 9 17" stroke="currentColor" stroke-width="3"/>',
      grass: '<path d="M17 49h31M24 48c-8-15-3-25 2-31 3 13 8 20 5 31m5 0c-2-15 4-26 11-31 0 13-2 23-11 31" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      bowl: '<path d="M15 30h34l-5 18H20l-5-18Z" fill="currentColor" opacity=".3"/><path d="M15 30h34l-5 18H20l-5-18Zm7 8h20" fill="none" stroke="currentColor" stroke-width="4"/>',
      feather: '<path d="M18 49c13-19 19-32 31-34 0 15-12 28-31 34Zm7-7 18-20M28 37l-1-10m7 4 9-2" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
    };
    return `<svg class="tile-icon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">`
      + `<defs><linearGradient id="g-${escape(icon.id)}" x1="0" y1="0" x2="1" y2="1">`
      + `<stop stop-color="#fffaf0"/><stop offset="1" stop-color="${escape(icon.color)}" stop-opacity=".24"/></linearGradient></defs>`
      + `<circle cx="32" cy="32" r="27" fill="url(#g-${escape(icon.id)})" stroke="${escape(icon.color)}" stroke-width="3"/>`
      + `<g color="${escape(icon.color)}">${shapes[icon.id]}</g></svg>`;
  }
  function label(id) {
    return (icons.find((item) => item.id === id) || icons[0]).label;
  }
  return { icons, markup, label };
});
