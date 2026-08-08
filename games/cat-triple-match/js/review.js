(function(){
  'use strict';
  const levels=window.CAT_TRIPLE_LEVELS,Config=window.CAT_TRIPLE_CONFIG,Core=window.CatTripleCore,Icons=window.CatTripleIcons;
  const $=(id)=>document.getElementById(id);let index=0,step=0;
  $('review-heading').textContent=`${Config.gameTitle} · ${Config.totalLevels} 關審核`;
  $('chapter').insertAdjacentHTML('beforeend',Config.chapters.map(chapter=>`<option value="${chapter.number}">${chapter.number} · ${chapter.title}</option>`).join(''));
  $('tiles').insertAdjacentHTML('beforeend',Config.chapters.map((chapter,chapterIndex)=>{const min=chapter.minTiles+(chapterIndex===0?0:1);return `<option value="${min}-${chapter.maxTiles}">${min}–${chapter.maxTiles}</option>`;}).join(''));
  function filtered(){const q=$('search').value.trim().toUpperCase(),chapter=$('chapter').value,range=$('tiles').value.split('-').map(Number);return levels.filter(l=>(!q||l.id.includes(q)||String(l.number).includes(q))&&(!chapter||l.chapter===Number(chapter))&&(!range[0]||(l.tiles.length>=range[0]&&l.tiles.length<=range[1])));}
  function renderList(){const list=filtered();$('level-list').innerHTML=list.map(l=>`<button class="level-link${l.number-1===index?' active':''}" data-index="${l.number-1}">${l.id} · ${l.tiles.length} 張</button>`).join('');}
  function render(){const l=levels[index],removed=new Set(l.knownSolution.slice(0,step)),size=l.layout.unitColumns,map=Core.buildBlockerMap(l);$('level-chapter').textContent=`第 ${l.chapter} 章 · ${l.title}`;$('level-name').textContent=`${l.id} / 第 ${l.number} 關`;
    const data=[['張數',l.tiles.length],['圖案',l.symbols.length],['層數',l.layout.maxLayers],['Solver 節點',l.metrics.nodesVisited],['回溯',l.metrics.backtracks],['峰值槽',l.metrics.peakTrayOccupancy]];$('metrics').innerHTML=data.map(([a,b])=>`<div class="metric"><small>${a}</small><b>${b}</b></div>`).join('');
    $('review-board').innerHTML=l.tiles.map(t=>`<div class="review-tile${removed.has(t.id)?' removed':''}" style="--x:${t.x/size*100}%;--y:${t.y/size*100}%;--s:${2/size*100}%;--layer:${t.layer}" title="${t.id} · ${Icons.label(t.symbol)} · blockers ${(map.blockers[t.id]||[]).join(',')}">${Icons.markup(t.symbol)}</div>`).join('');
    const counts={};l.tiles.forEach(t=>counts[t.symbol]=(counts[t.symbol]||0)+1);$('details').textContent=Object.entries(counts).map(([id,count])=>`${Icons.label(id)} (${id}): ${count} 張`).join('\n')+`\n\ncanonical signature:\n${l.canonicalSignature}`;
    $('step-label').textContent=`${step} / ${l.knownSolution.length}`;renderList();}
  $('level-list').addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b){index=Number(b.dataset.index);step=0;render();}});
  ['search','chapter','tiles'].forEach(id=>$(id).addEventListener('input',renderList));$('prev').onclick=()=>{index=Math.max(0,index-1);step=0;render();};$('next').onclick=()=>{index=Math.min(levels.length - 1,index+1);step=0;render();};$('reset').onclick=()=>{step=0;render();};$('step').onclick=()=>{step=Math.min(levels[index].knownSolution.length,step+1);render();};render();
})();
