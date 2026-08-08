(function (root) {
  'use strict';

  const Config = root.CAT_TRIPLE_CONFIG;
  const loader = document.currentScript;
  const entry = loader?.dataset.entry;
  if (!Config || !Array.isArray(Config.chapters) || !entry) {
    throw new Error('關卡載入設定不完整');
  }

  const padLevel = (number) => String(number).padStart(3, '0');
  const sources = Config.chapters.map(
    (chapter) => `data/levels-${padLevel(chapter.startLevel)}-${padLevel(chapter.endLevel)}.js`,
  );
  sources.push('data/levels-index.js', entry);

  function loadNext(index) {
    if (index >= sources.length) return;
    const script = document.createElement('script');
    script.src = new URL(sources[index], loader.src).href;
    script.async = false;
    script.addEventListener('load', () => loadNext(index + 1), { once: true });
    script.addEventListener('error', () => {
      throw new Error(`無法載入關卡資源：${sources[index]}`);
    }, { once: true });
    document.head.append(script);
  }

  loadNext(0);
})(typeof globalThis !== 'undefined' ? globalThis : this);
