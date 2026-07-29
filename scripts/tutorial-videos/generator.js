(function initializeTutorialVideoGenerator() {
  'use strict';

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const output = document.querySelector('output');
  const buttons = [...document.querySelectorAll('[data-render]')];
  const videoResult = document.querySelector('[data-video-result]');
  const videoPreview = document.querySelector('[data-video-preview]');
  const videoDownload = document.querySelector('[data-video-download]');
  let latestVideoUrl = null;
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  const FPS = 30;
  const DURATION = 24.5;
  const FONT = '"Microsoft JhengHei", "Noto Sans TC", system-ui, sans-serif';
  const regionColors = ['#f8c9ae', '#f7e48a', '#b9e5da', '#bfc7ef', '#e5b8dc', '#bfe0a4'];
  const connectColors = ['#ff9d43', '#37a3a0', '#8074d8', '#e55f88'];

  function clamp(value, min = 0, max = 1) {
    return Math.max(min, Math.min(max, value));
  }

  function progress(time, start, end) {
    return clamp((time - start) / (end - start));
  }

  function ease(value) {
    const t = clamp(value);
    return 1 - ((1 - t) ** 3);
  }

  function roundedRect(x, y, width, height, radius, fill, stroke = null, lineWidth = 1) {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    if (fill) {
      context.fillStyle = fill;
      context.fill();
    }
    if (stroke) {
      context.strokeStyle = stroke;
      context.lineWidth = lineWidth;
      context.stroke();
    }
  }

  function drawBackground(accent, time) {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    const gradient = context.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#fffaf2');
    gradient.addColorStop(1, '#f2fff9');
    context.fillStyle = gradient;
    context.fillRect(0, 0, WIDTH, HEIGHT);

    context.globalAlpha = .16;
    context.fillStyle = accent;
    context.beginPath();
    context.arc(95 + Math.sin(time * .35) * 18, 70, 190, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#78d8c9';
    context.beginPath();
    context.arc(1230, 570 + Math.cos(time * .3) * 16, 235, 0, Math.PI * 2);
    context.fill();
    context.globalAlpha = 1;
  }

  function drawTopBar(title, accent, step, iconKind) {
    roundedRect(38, 28, 1204, 74, 24, 'rgba(255,255,255,.94)', 'rgba(76,55,43,.1)', 2);
    context.font = `900 30px ${FONT}`;
    context.fillStyle = '#2f2926';
    context.textBaseline = 'middle';
    context.textAlign = 'left';
    if (iconKind === 'animal') {
      drawTripleAnimal(82, 65, 36, 'cat');
      context.fillText(title, 111, 65);
    } else {
      context.fillText(`🐱  ${title}`, 70, 65);
    }
    roundedRect(970, 48, 235, 36, 18, `${accent}20`);
    context.font = `800 18px ${FONT}`;
    context.fillStyle = accent;
    context.textAlign = 'center';
    context.fillText(`第 ${step} 步／4`, 1087, 66);
    context.textAlign = 'left';
  }

  function wrapText(text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const characters = [...text];
    let line = '';
    const lines = [];
    for (const character of characters) {
      const candidate = line + character;
      if (context.measureText(candidate).width > maxWidth && line) {
        lines.push(line);
        line = character;
      } else {
        line = candidate;
      }
    }
    if (line) lines.push(line);
    for (const [index, value] of lines.slice(0, maxLines).entries()) {
      context.fillText(value, x, y + index * lineHeight);
    }
  }

  function drawCaption(number, title, description, accent) {
    roundedRect(600, 143, 600, 448, 34, 'rgba(255,255,255,.95)', 'rgba(70,52,42,.1)', 2);
    roundedRect(650, 188, 62, 62, 22, accent);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 32px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText(number, 681, 219);

    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.font = `900 48px ${FONT}`;
    context.fillStyle = '#2d2926';
    wrapText(title, 650, 285, 500, 58, 2);
    context.font = `500 27px ${FONT}`;
    context.fillStyle = '#725f57';
    wrapText(description, 650, 420, 500, 43, 3);

    context.font = `800 18px ${FONT}`;
    context.fillStyle = accent;
    context.fillText('繁體中文字幕・無旁白', 650, 540);
  }

  function drawFooter(accent, sectionProgress) {
    roundedRect(80, 648, 1120, 10, 5, '#e8dfd7');
    roundedRect(80, 648, 1120 * clamp(sectionProgress), 10, 5, accent);
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    context.font = `700 17px ${FONT}`;
    context.fillStyle = '#7b685e';
    context.fillText('遊戲小屋｜完全離線遊玩', 1200, 684);
    context.textAlign = 'left';
  }

  function drawCatFace(x, y, size, fur = '#45322d', patch = '#45322d') {
    context.save();
    context.translate(x, y);
    const scale = size / 64;
    context.scale(scale, scale);
    context.fillStyle = fur;
    context.beginPath();
    context.moveTo(13, 24);
    context.lineTo(10, 7);
    context.lineTo(24, 16);
    context.quadraticCurveTo(32, 12, 40, 16);
    context.lineTo(54, 7);
    context.lineTo(51, 24);
    context.quadraticCurveTo(59, 32, 59, 42);
    context.quadraticCurveTo(59, 61, 32, 61);
    context.quadraticCurveTo(5, 61, 5, 42);
    context.quadraticCurveTo(5, 32, 13, 24);
    context.fill();
    context.fillStyle = '#fff8ee';
    context.beginPath();
    context.roundRect(13, 18, 38, 39, 18);
    context.fill();
    context.fillStyle = patch;
    context.beginPath();
    context.moveTo(13, 26);
    context.quadraticCurveTo(22, 16, 32, 18);
    context.lineTo(32, 37);
    context.quadraticCurveTo(20, 38, 13, 30);
    context.fill();
    context.fillStyle = '#2e2421';
    context.beginPath();
    context.ellipse(24, 37, 3.5, 4.5, 0, 0, Math.PI * 2);
    context.ellipse(41, 37, 3.5, 4.5, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#ef7d79';
    context.beginPath();
    context.moveTo(32, 42);
    context.lineTo(29, 44);
    context.lineTo(32, 46);
    context.lineTo(35, 44);
    context.closePath();
    context.fill();
    context.restore();
  }

  function drawPointer(x, y, pulse = 0) {
    context.save();
    context.translate(x, y);
    context.rotate(-.25);
    context.fillStyle = '#fff';
    context.strokeStyle = '#59453c';
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 35);
    context.lineTo(10, 27);
    context.lineTo(18, 45);
    context.lineTo(27, 41);
    context.lineTo(19, 24);
    context.lineTo(32, 23);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
    if (pulse > 0) {
      context.strokeStyle = `rgba(255,119,71,${1 - pulse})`;
      context.lineWidth = 5;
      context.beginPath();
      context.arc(x + 4, y + 4, 15 + pulse * 24, 0, Math.PI * 2);
      context.stroke();
    }
  }

  const regions = [
    [0, 0, 0, 1, 1, 2],
    [0, 1, 1, 1, 2, 2],
    [0, 3, 3, 2, 2, 2],
    [3, 3, 3, 4, 4, 5],
    [3, 4, 4, 4, 5, 5],
    [4, 4, 4, 5, 5, 5],
  ];
  const gridSolution = [[0, 0], [1, 2], [2, 4], [3, 1], [4, 3], [5, 5]];

  function drawRegionBoard(cats = [], marks = [], conflicts = []) {
    const x = 92;
    const y = 152;
    const cell = 70;
    roundedRect(x - 10, y - 10, cell * 6 + 20, cell * 6 + 20, 26, '#fff', 'rgba(68,45,33,.12)', 2);
    for (let row = 0; row < 6; row += 1) {
      for (let column = 0; column < 6; column += 1) {
        const id = regions[row][column];
        context.fillStyle = regionColors[id];
        context.fillRect(x + column * cell, y + row * cell, cell, cell);
        context.strokeStyle = 'rgba(75,55,45,.16)';
        context.lineWidth = 1.5;
        context.strokeRect(x + column * cell, y + row * cell, cell, cell);
        const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dr, dc] of neighbors) {
          const nr = row + dr;
          const nc = column + dc;
          if (nr < 0 || nr >= 6 || nc < 0 || nc >= 6 || regions[nr][nc] !== id) {
            context.strokeStyle = '#765342';
            context.lineWidth = 4;
            context.beginPath();
            if (dr === -1) {
              context.moveTo(x + column * cell, y + row * cell);
              context.lineTo(x + (column + 1) * cell, y + row * cell);
            } else if (dr === 1) {
              context.moveTo(x + column * cell, y + (row + 1) * cell);
              context.lineTo(x + (column + 1) * cell, y + (row + 1) * cell);
            } else if (dc === -1) {
              context.moveTo(x + column * cell, y + row * cell);
              context.lineTo(x + column * cell, y + (row + 1) * cell);
            } else {
              context.moveTo(x + (column + 1) * cell, y + row * cell);
              context.lineTo(x + (column + 1) * cell, y + (row + 1) * cell);
            }
            context.stroke();
          }
        }
      }
    }
    for (const [row, column] of marks) {
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `900 45px ${FONT}`;
      context.fillStyle = '#fff';
      context.fillText('×', x + column * cell + cell / 2, y + row * cell + cell / 2);
    }
    for (const [row, column] of cats) {
      drawCatFace(x + column * cell + 10, y + row * cell + 9, 52);
    }
    for (const [row, column] of conflicts) {
      context.strokeStyle = '#ef3f4a';
      context.lineWidth = 7;
      context.strokeRect(x + column * cell + 4, y + row * cell + 4, cell - 8, cell - 8);
    }
  }

  function drawGridIntro(time) {
    drawBackground('#f17f63', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    drawCatFace(180, 205, 190);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#312a26';
    context.font = `900 74px ${FONT}`;
    context.fillText('貓咪方格', 440, 228);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#9e5948';
    context.fillText('24 秒快速教學', 444, 330);
    roundedRect(442, 405, 470, 64, 22, '#f17f63');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText('看懂規則，再開始挑戰 100 關', 677, 437);
    context.globalAlpha = 1;
    drawFooter('#f17f63', time / DURATION);
  }

  function drawGridTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '一列、一欄、一區域';
    let description = '每一橫列、直欄和粗框彩色區域，都只能放一隻貓咪。';
    let cats = gridSolution.slice(0, Math.floor(ease(progress(local, 1.2, 4.2)) * 6));
    let marks = [];
    let conflicts = [];

    if (local >= 5) {
      step = 2;
      title = '點一下 X，再點一下貓';
      description = '空白格先點一下標記 X；0.5 秒內再點同一格，就會放置貓咪。';
      cats = [];
      if (local >= 6.2 && local < 7.3) marks = [[4, 3]];
      if (local >= 7.3) cats = [[4, 3]];
    }
    if (local >= 10) {
      step = 3;
      title = '貓咪不能互相接觸';
      description = '水平、垂直和斜角相鄰都不可以；紅框表示目前發生衝突。';
      cats = [[2, 4], [3, 5]];
      conflicts = local < 13.6 ? cats : [];
      if (local >= 13.6) cats = [[2, 4]];
      marks = [];
    }
    if (local >= 15) {
      step = 4;
      title = '全部規則成立就過關';
      description = '確認每列、每欄、每區域各一隻，而且貓咪彼此不接觸。';
      cats = gridSolution.slice(0, Math.ceil(ease(progress(local, 15, 18.5)) * 6));
      conflicts = [];
    }

    drawBackground('#f17f63', time);
    drawTopBar('貓咪方格教學', '#b55e49', step);
    drawRegionBoard(cats, marks, conflicts);
    drawCaption(String(step), title, description, '#f17f63');

    if (step === 2) {
      const clickTime = local < 7.3 ? progress(local, 5.7, 6.7) : progress(local, 6.9, 7.9);
      drawPointer(92 + 3 * 70 + 48, 152 + 4 * 70 + 43, clickTime % 1);
    }
    if (step === 4 && local > 18.2) {
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `900 38px ${FONT}`;
      context.fillStyle = '#eda72f';
      context.fillText('★ ★ ★', 810, 510);
    }
    drawFooter('#f17f63', time / DURATION);
  }

  function cellCenter(row, column) {
    return [112 + column * 70 + 35, 152 + row * 70 + 35];
  }

  function drawConnectBoard(paths = [], routeProgress = 1, invalid = null) {
    const x = 112;
    const y = 152;
    const cell = 70;
    roundedRect(x - 10, y - 10, cell * 6 + 20, cell * 6 + 20, 26, '#fff', 'rgba(22,95,89,.14)', 2);
    for (let row = 0; row < 6; row += 1) {
      for (let column = 0; column < 6; column += 1) {
        context.fillStyle = '#effbf8';
        context.fillRect(x + column * cell, y + row * cell, cell, cell);
        context.strokeStyle = 'rgba(26,96,90,.15)';
        context.lineWidth = 1.5;
        context.strokeRect(x + column * cell, y + row * cell, cell, cell);
      }
    }

    for (const path of paths) {
      const visibleCount = Math.max(1, Math.ceil(path.cells.length * routeProgress));
      const points = path.cells.slice(0, visibleCount).map(([row, column]) => cellCenter(row, column));
      if (points.length > 1) {
        context.strokeStyle = path.color;
        context.lineWidth = 25;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.beginPath();
        context.moveTo(points[0][0], points[0][1]);
        for (const point of points.slice(1)) context.lineTo(point[0], point[1]);
        context.stroke();
      }
      const endpoints = [path.cells[0], path.cells[path.cells.length - 1]];
      for (const [row, column] of endpoints) {
        const [cx, cy] = cellCenter(row, column);
        roundedRect(cx - 26, cy - 26, 52, 52, 17, '#fff', path.color, 5);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `34px ${FONT}`;
        context.fillText('🐱', cx, cy + 1);
      }
    }

    if (invalid) {
      const [fromX, fromY] = cellCenter(...invalid[0]);
      const [toX, toY] = cellCenter(...invalid[1]);
      context.strokeStyle = '#ef4651';
      context.lineWidth = 12;
      context.setLineDash([16, 12]);
      context.beginPath();
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
      context.setLineDash([]);
      context.font = `900 56px ${FONT}`;
      context.fillStyle = '#ef4651';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('×', (fromX + toX) / 2, (fromY + toY) / 2);
    }
  }

  const connectPaths = [
    { color: connectColors[0], cells: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]] },
    { color: connectColors[1], cells: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [2, 2], [2, 1], [2, 0]] },
    { color: connectColors[2], cells: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [4, 0]] },
    { color: connectColors[3], cells: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]] },
  ];

  function drawConnectIntro(time) {
    drawBackground('#118a83', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    context.font = `170px ${FONT}`;
    context.fillText('🐱', 135, 205);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#173d3b';
    context.font = `900 65px ${FONT}`;
    context.fillText('貓咪彩色連線', 370, 225);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#08736c';
    context.fillText('24 秒快速教學', 375, 330);
    roundedRect(375, 405, 570, 64, 22, '#118a83');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText('連好每一對，讓路線填滿棋盤', 660, 437);
    context.globalAlpha = 1;
    drawFooter('#118a83', time / DURATION);
  }

  function drawConnectTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '拖曳到相同的貓咪';
    let description = '從端點開始拖曳，沿著上下左右的格子，連到相同顏色與符號。';
    let paths = [connectPaths[0]];
    let amount = ease(progress(local, .7, 4.5));
    let invalid = null;

    if (local >= 5) {
      step = 2;
      title = '路線不能交叉或重疊';
      description = '碰到其他路線、其他端點或斜角移動都會停止，紅色虛線不會被放入。';
      paths = [connectPaths[0], { ...connectPaths[1], cells: connectPaths[1].cells.slice(0, 4) }];
      amount = 1;
      invalid = [[1, 3], [0, 3]];
    }
    if (local >= 10) {
      step = 3;
      title = '拖回前方格就能回退';
      description = '拉錯方向不用清空整條線，沿原路拖回前面的格子即可裁掉後段。';
      const retract = local < 12.4
        ? Math.ceil(ease(progress(local, 10, 12.4)) * 10) + 2
        : Math.max(3, 12 - Math.ceil(ease(progress(local, 12.4, 14.5)) * 8));
      paths = [{ ...connectPaths[1], cells: connectPaths[1].cells.slice(0, retract) }];
      amount = 1;
      invalid = null;
    }
    if (local >= 15) {
      step = 4;
      title = '所有路線填滿棋盤';
      description = '每一對貓咪都要連好，而且不能留下空格，完成後就能獲得星星。';
      paths = connectPaths;
      amount = ease(progress(local, 15, 19));
      invalid = null;
    }

    drawBackground('#118a83', time);
    drawTopBar('貓咪彩色連線教學', '#08736c', step);
    drawConnectBoard(paths, amount, invalid);
    drawCaption(String(step), title, description, '#118a83');
    if (step === 1 && amount > .05 && amount < 1) {
      const path = connectPaths[0].cells;
      const position = path[Math.min(path.length - 1, Math.floor(amount * path.length))];
      const [px, py] = cellCenter(...position);
      drawPointer(px + 8, py + 4, (local * 1.8) % 1);
    }
    if (step === 4 && local > 18.2) {
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `900 38px ${FONT}`;
      context.fillStyle = '#eda72f';
      context.fillText('★ ★ ★', 815, 510);
    }
    drawFooter('#118a83', time / DURATION);
  }

  const solitaireLabels = ['貓玩具', '下午茶', '聲音', '藝術', '夜晚'];
  const solitaireHints = ['毛線球', '紅茶', '鈴鐺', '畫筆', '月亮'];

  function drawSolitaireCard(x, y, width, height, options = {}) {
    const {
      back = false,
      category = false,
      label = '',
      symbol = '🐾',
      highlighted = false,
    } = options;
    roundedRect(
      x,
      y,
      width,
      height,
      12,
      back ? '#16324b' : category ? '#dcae56' : '#fff7e7',
      highlighted ? '#42a5ff' : '#f2cf82',
      highlighted ? 6 : 3,
    );
    if (back) {
      roundedRect(x + 7, y + 7, width - 14, height - 14, 8, null, 'rgba(242,207,130,.55)', 2);
    }
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `${back ? 27 : 30}px ${FONT}`;
    context.fillStyle = back ? '#dcae56' : '#162333';
    context.fillText(symbol, x + width / 2, y + height * .43);
    if (!back && label) {
      context.font = `800 15px ${FONT}`;
      context.fillText(label, x + width / 2, y + height * .76);
    }
  }

  function drawSolitaireBoard(step, animation = 1) {
    roundedRect(72, 132, 490, 480, 28, '#071c30', 'rgba(220,174,86,.38)', 3);
    const slotWidth = 72;
    const slotGap = 8;
    const slotY = 158;
    for (let index = 0; index < 5; index += 1) {
      const x = 92 + index * (slotWidth + slotGap);
      const active = step >= 2 && index === 0;
      roundedRect(
        x,
        slotY,
        slotWidth,
        78,
        10,
        active ? '#dcae56' : '#16324b',
        active ? '#f2cf82' : 'rgba(220,174,86,.72)',
        2,
      );
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = active ? `800 13px ${FONT}` : `24px ${FONT}`;
      context.fillStyle = active ? '#162333' : '#dcae56';
      context.fillText(active ? '貓玩具' : '🐾', x + slotWidth / 2, slotY + 39);
    }
    drawSolitaireCard(508, 158, 36, 58, { back: true });
    context.textAlign = 'center';
    context.font = `800 13px ${FONT}`;
    context.fillStyle = '#f2cf82';
    context.fillText('34 張', 526, 228);

    const cardWidth = 82;
    const cardHeight = 108;
    const overlap = 28;
    const stackY = 268;
    for (let column = 0; column < 5; column += 1) {
      const x = 92 + column * 94;
      const count = column + 2;
      for (let index = 0; index < count; index += 1) {
        const isTop = index === count - 1;
        const revealHint = step >= 3 && column === 0 && isTop;
        const revealCategory = !revealHint && isTop;
        drawSolitaireCard(x, stackY + index * overlap, cardWidth, cardHeight, {
          back: !isTop,
          category: revealCategory,
          label: revealHint ? solitaireHints[column] : solitaireLabels[column],
          symbol: revealHint ? '🧶' : ['🐈', '🍵', '🔔', '🎨', '🌙'][column],
          highlighted: (step === 1 && column === 0 && isTop)
            || (step === 2 && column === 0 && isTop)
            || (step === 3 && column === 0 && isTop),
        });
      }
    }

    if (step === 1) {
      context.strokeStyle = '#42a5ff';
      context.lineWidth = 5;
      context.setLineDash([10, 8]);
      context.beginPath();
      context.moveTo(82, stackY - 12);
      context.lineTo(552, stackY - 12);
      context.stroke();
      context.setLineDash([]);
      context.font = `800 14px ${FONT}`;
      context.fillStyle = '#8fc9ff';
      context.textAlign = 'left';
      context.fillText('五列牌堆上緣對齊', 92, stackY - 27);
    }

    if (step === 4) {
      context.globalAlpha = .92 * animation;
      roundedRect(126, 370, 382, 104, 22, '#16324b', '#67c987', 5);
      context.font = `900 34px ${FONT}`;
      context.fillStyle = '#f2cf82';
      context.textAlign = 'center';
      context.fillText('★ ★ ★', 317, 405);
      context.font = `800 20px ${FONT}`;
      context.fillStyle = '#fff7e7';
      context.fillText('完成所有分類！', 317, 446);
      context.globalAlpha = 1;
    }
  }

  function drawSolitaireIntro(time) {
    drawBackground('#dcae56', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    context.font = `170px ${FONT}`;
    context.fillText('🐈', 120, 205);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#162333';
    context.font = `900 65px ${FONT}`;
    context.fillText('喵語分類接龍', 370, 225);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#9b6a20';
    context.fillText('24 秒快速教學', 375, 330);
    roundedRect(375, 405, 570, 64, 22, '#dcae56');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#162333';
    context.fillText('翻開牌堆，把提示送回正確分類', 660, 437);
    context.globalAlpha = 1;
    drawFooter('#dcae56', time / DURATION);
  }

  function drawSolitaireTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '先看五列接龍牌堆';
    let description = '每關 54 張：開局五列共 20 張，右上牌庫 34 張；五列上緣對齊且只向下延伸。';
    if (local >= 5) {
      step = 2;
      title = '先放入金色分類牌';
      description = '只能操作每列最下方露出的牌。把金色分類牌放進上方任一空分類槽。';
    }
    if (local >= 10) {
      step = 3;
      title = '提示牌要送對分類';
      description = '把奶油白提示牌送進相符的分類；收齊指定提示後，槽位會自動釋放。';
    }
    if (local >= 15) {
      step = 4;
      title = '適時發牌並清空牌桌';
      description = '每批最多五張，由左至右發牌。清空牌庫、五列牌堆及全部分類即可過關。';
    }

    drawBackground('#dcae56', time);
    drawTopBar('喵語分類接龍教學', '#9b6a20', step);
    drawSolitaireBoard(step, ease(progress(local, 15, 18.5)));
    drawCaption(String(step), title, description, '#dcae56');
    drawFooter('#dcae56', time / DURATION);
  }

  function drawMilkPipeCell(x, y, cell, connectors, options = {}) {
    roundedRect(x, y, cell - 6, cell - 6, 12, options.blocked ? '#d7c19f' : '#f3e6cf');
    if (options.blocked) {
      context.fillStyle = 'rgba(56,47,42,.24)';
      context.beginPath();
      context.arc(x + cell / 2 - 3, y + cell / 2 - 3, 4, 0, Math.PI * 2);
      context.fill();
      return;
    }
    const centerX = x + cell / 2 - 3;
    const centerY = y + cell / 2 - 3;
    const points = {
      U: [centerX, y],
      R: [x + cell - 6, centerY],
      D: [centerX, y + cell - 6],
      L: [x, centerY],
    };
    context.lineCap = 'round';
    for (const direction of connectors) {
      context.strokeStyle = '#275968';
      context.lineWidth = 22;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(...points[direction]);
      context.stroke();
      context.strokeStyle = options.powered ? '#fff' : '#9db4bb';
      context.lineWidth = 12;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(...points[direction]);
      context.stroke();
    }
    context.fillStyle = options.powered ? '#fff' : '#275968';
    context.beginPath();
    context.arc(centerX, centerY, 7, 0, Math.PI * 2);
    context.fill();
    if (options.source) drawMilkBottleIcon(centerX, centerY, .62, options.powered);
    if (options.bowl) {
      drawMilkCatBowlIcon(centerX, centerY, .68, options.powered, options.variant);
    }
    if (options.leak) {
      context.fillStyle = '#c9614f';
      context.beginPath();
      context.arc(x + cell - 11, centerY, 8, 0, Math.PI * 2);
      context.fill();
    }
  }

  function drawMilkBottleIcon(centerX, centerY, scale = 1, powered = false) {
    context.save();
    context.translate(centerX, centerY);
    context.scale(scale, scale);
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.fillStyle = 'rgba(56,47,42,.17)';
    context.beginPath();
    context.ellipse(0, 34, 25, 5, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#fffaf0';
    context.strokeStyle = '#275968';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-15, -24);
    context.lineTo(15, -24);
    context.lineTo(15, -17);
    context.bezierCurveTo(15, -12, 22, -10, 22, -2);
    context.lineTo(22, 25);
    context.quadraticCurveTo(22, 34, 12, 34);
    context.lineTo(-12, 34);
    context.quadraticCurveTo(-22, 34, -22, 25);
    context.lineTo(-22, -2);
    context.bezierCurveTo(-22, -10, -15, -12, -15, -17);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = powered ? '#fff' : '#b7cbd1';
    context.beginPath();
    context.moveTo(-18, 10);
    context.quadraticCurveTo(-7, 4, 4, 10);
    context.quadraticCurveTo(12, 5, 18, 8);
    context.lineTo(18, 25);
    context.quadraticCurveTo(18, 30, 11, 30);
    context.lineTo(-11, 30);
    context.quadraticCurveTo(-18, 30, -18, 24);
    context.closePath();
    context.fill();
    roundedRect(-17, -32, 34, 12, 4, '#4d91a8', '#275968', 4);
    context.fillStyle = '#f5dfbd';
    context.strokeStyle = '#275968';
    context.lineWidth = 3;
    context.beginPath();
    context.arc(0, 1, 14, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.fillStyle = '#dd836f';
    context.beginPath();
    context.ellipse(0, 5, 6, 5, 0, 0, Math.PI * 2);
    context.fill();
    for (const [x, y] of [[-9, -3], [-3, -7], [4, -7], [10, -2]]) {
      context.beginPath();
      context.arc(x, y, 3, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  function drawMilkCatBowlIcon(centerX, centerY, scale = 1, powered = false, variant = 0) {
    const palettes = [
      { fur: '#f3b99e', bowl: '#dc806e' },
      { fur: '#f5c77f', bowl: '#d6a83d' },
      { fur: '#aab3b8', bowl: '#74a57f' },
      { fur: '#d7c3aa', bowl: '#688fa6' },
    ];
    const palette = palettes[((Number(variant) || 0) % palettes.length + palettes.length)
      % palettes.length];
    context.save();
    context.translate(centerX, centerY);
    context.scale(scale, scale);
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.fillStyle = 'rgba(56,47,42,.17)';
    context.beginPath();
    context.ellipse(0, 35, 30, 5, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = palette.fur;
    context.strokeStyle = '#382f2a';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-23, -9);
    context.lineTo(-20, -32);
    context.lineTo(-5, -17);
    context.moveTo(5, -17);
    context.lineTo(20, -32);
    context.lineTo(23, -9);
    context.stroke();
    roundedRect(-24, -20, 48, 39, 19, palette.fur, '#382f2a', 4);
    context.fillStyle = '#382f2a';
    for (const x of [-10, 10]) {
      context.beginPath();
      context.arc(x, -5, 2.7, 0, Math.PI * 2);
      context.fill();
    }
    context.fillStyle = '#dd836f';
    context.beginPath();
    context.moveTo(-4, 3);
    context.lineTo(4, 3);
    context.lineTo(0, 7);
    context.closePath();
    context.fill();
    context.strokeStyle = '#382f2a';
    context.lineWidth = 2.5;
    context.beginPath();
    context.moveTo(-13, 8);
    context.lineTo(-31, 5);
    context.moveTo(-13, 12);
    context.lineTo(-32, 14);
    context.moveTo(13, 8);
    context.lineTo(31, 5);
    context.moveTo(13, 12);
    context.lineTo(32, 14);
    context.stroke();
    context.fillStyle = palette.bowl;
    context.strokeStyle = '#382f2a';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-32, 10);
    context.lineTo(32, 10);
    context.lineTo(25, 29);
    context.quadraticCurveTo(23, 35, 14, 35);
    context.lineTo(-14, 35);
    context.quadraticCurveTo(-23, 35, -25, 29);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = powered ? '#fff' : '#aebfc3';
    context.beginPath();
    context.moveTo(-28, 11);
    context.quadraticCurveTo(-14, 5, 0, 11);
    context.quadraticCurveTo(14, 5, 28, 11);
    context.lineTo(26, 16);
    context.quadraticCurveTo(12, 11, 0, 16);
    context.quadraticCurveTo(-12, 11, -26, 16);
    context.closePath();
    context.fill();
    context.strokeStyle = '#382f2a';
    context.lineWidth = 2.5;
    context.beginPath();
    if (powered) {
      context.moveTo(-7, 8);
      context.quadraticCurveTo(0, 16, 7, 8);
    } else {
      context.moveTo(-6, 9);
      context.quadraticCurveTo(0, 12, 6, 9);
    }
    context.stroke();
    context.restore();
  }

  function drawMilkPipeBoard(step, animation = 1) {
    const x = 82;
    const y = 154;
    const cell = 84;
    roundedRect(x - 12, y - 12, cell * 5 + 18, cell * 5 + 18, 28, '#c9b08e', 'rgba(56,47,42,.16)', 2);
    const layout = [
      [null, null, null, null, null],
      [null, { c: ['R', 'D'], source: true }, { c: step >= 2 ? ['R', 'L'] : ['U', 'D'], powered: step >= 2 }, { c: ['D', 'L'], powered: step >= 2 }, null],
      [{ c: ['R'], bowl: true, variant: 2, powered: step >= 4 }, { c: ['R', 'D'], powered: step >= 4 }, { c: ['U', 'L'], powered: step >= 2 }, { c: step >= 3 ? ['U', 'D'] : ['R', 'L'], powered: step >= 3, leak: step === 1 }, null],
      [null, { c: ['U', 'R'], powered: step >= 4 }, { c: ['R', 'L'], powered: step >= 4 }, { c: ['U', 'L'], powered: step >= 4 }, null],
      [null, null, { c: ['U'], bowl: true, variant: 3, powered: step >= 4 }, null, null],
    ];
    for (let row = 0; row < 5; row += 1) {
      for (let column = 0; column < 5; column += 1) {
        const tile = layout[row][column];
        drawMilkPipeCell(
          x + column * cell,
          y + row * cell,
          cell,
          tile?.c || [],
          tile || { blocked: true },
        );
      }
    }
    if (step === 1) drawPointer(x + cell * 3.5, y + cell * 2.5, animation);
    if (step === 4) {
      context.globalAlpha = .85 * animation;
      roundedRect(128, 322, 330, 95, 22, '#fffaf0', '#8eaf9a', 5);
      context.textAlign = 'center';
      context.font = `900 30px ${FONT}`;
      context.fillStyle = '#275968';
      context.fillText('★ ★ ★', 293, 352);
      context.font = `800 18px ${FONT}`;
      context.fillStyle = '#382f2a';
      context.fillText('所有貓咪都喝到鮮奶！', 293, 391);
      context.globalAlpha = 1;
    }
  }

  function drawMilkPipeIntro(time) {
    drawBackground('#4d91a8', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    drawMilkBottleIcon(202, 280, 2.5, true);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#382f2a';
    context.font = `900 65px ${FONT}`;
    context.fillText('貓咪鮮奶管線', 365, 220);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#275968';
    context.fillText('24 秒快速教學', 370, 330);
    roundedRect(370, 405, 600, 64, 22, '#4d91a8');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText('旋轉管線，把鮮奶送到每一只碗', 670, 437);
    context.globalAlpha = 1;
    drawFooter('#4d91a8', time / DURATION);
  }

  function drawMilkPipeTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '點一下，順時針旋轉';
    let description = '每次有效旋轉計算一步；鮮奶槽、固定格與十字管不會旋轉。';
    if (local >= 5) {
      step = 2;
      title = '白色脈流代表已通奶';
      description = '鮮奶只沿雙向匹配的接口流動；沒有接到鮮奶槽的管線不會亮起。';
    }
    if (local >= 10) {
      step = 3;
      title = '紅色水滴提示洩漏';
      description = '洩漏標示能幫你判讀方向，但不會阻止已經喝到牛奶的貓咪。';
    }
    if (local >= 15) {
      step = 4;
      title = '每隻貓喝到就通關';
      description = '所有貓咪碗亮起鮮奶脈流，關卡就會立即完成。';
    }
    drawBackground('#4d91a8', time);
    drawTopBar('貓咪鮮奶管線教學', '#275968', step);
    drawMilkPipeBoard(step, ease(progress(local % 5, 0, 1)));
    drawCaption(String(step), title, description, '#4d91a8');
    drawFooter('#4d91a8', time / DURATION);
  }

  function drawStoragePiece(x, y, cells, color, scale, alpha = 1) {
    context.save();
    context.globalAlpha = alpha;
    context.translate(x, y);
    context.fillStyle = color;
    context.strokeStyle = '#70482f';
    context.lineWidth = 3;
    for (const [row, column] of cells) {
      roundedRect(column * scale, row * scale, scale + 1, scale + 1, 9, color);
      context.strokeRect(column * scale + 2, row * scale + 2, scale - 4, scale - 4);
    }
    context.fillStyle = 'rgba(255,255,255,.62)';
    context.beginPath();
    context.arc(scale * .52, scale * .52, scale * .2, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawStorageBoard(step, tween) {
    const boardX = 160;
    const boardY = 145;
    const cell = 74;
    roundedRect(boardX - 22, boardY - 22, cell * 6 + 44, cell * 5 + 44, 30, '#b87949');
    roundedRect(boardX - 8, boardY - 8, cell * 6 + 16, cell * 5 + 16, 20, '#8d5a38');
    for (let row = 0; row < 5; row += 1) {
      for (let column = 0; column < 6; column += 1) {
        roundedRect(boardX + column * cell, boardY + row * cell, cell - 3, cell - 3, 10, '#d7a36d');
        context.strokeStyle = 'rgba(112,72,47,.35)';
        context.lineWidth = 2;
        context.strokeRect(boardX + column * cell + 4, boardY + row * cell + 4, cell - 11, cell - 11);
      }
    }
    const pieces = [
      { cells: [[0,0],[1,0],[2,0]], color: '#efa6a5', from: [700, 175], to: [boardX, boardY] },
      { cells: [[0,0],[1,0],[1,1]], color: '#a9c9df', from: [805, 180], to: [boardX + cell, boardY + cell * 2] },
      { cells: [[0,0],[0,1],[1,1]], color: '#edc466', from: [720, 390], to: [boardX + cell * 3, boardY] },
      { cells: [[0,0],[0,1],[1,0],[1,1]], color: '#bfa9d6', from: [880, 380], to: [boardX + cell * 4, boardY + cell * 3] },
    ];
    pieces.forEach((piece, index) => {
      const placed = index < step;
      const localTween = index === step - 1 ? tween : placed ? 1 : 0;
      const x = piece.from[0] + (piece.to[0] - piece.from[0]) * localTween;
      const y = piece.from[1] + (piece.to[1] - piece.from[1]) * localTween;
      drawStoragePiece(x, y, piece.cells, piece.color, placed ? cell : 48);
    });
    context.fillStyle = '#70482f';
    context.font = `800 23px ${FONT}`;
    context.textAlign = 'center';
    context.fillText('待放拼塊區', 865, 125);
  }

  function drawStorageIntro(time) {
    drawBackground('#d59059', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    roundedRect(120, 150, 215, 215, 35, '#c98d57');
    drawStoragePiece(154, 184, [[0,0],[0,1],[1,0]], '#efa6a5', 72);
    drawStoragePiece(226, 256, [[0,0],[0,1],[1,1]], '#a9c9df', 72);
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#382f2a';
    context.font = `900 65px ${FONT}`;
    context.fillText('貓咪收納大師', 390, 205);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#70482f';
    context.fillText('24 秒快速教學', 395, 310);
    roundedRect(395, 390, 660, 64, 22, '#d59059');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText('拖曳、旋轉、翻面，把用品完整收好', 725, 422);
    context.globalAlpha = 1;
    drawFooter('#d59059', time / DURATION);
  }

  function drawStorageTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '拖曳拼塊，綠框即可放置';
    let description = '保留手指抓住的位置，放開後會吸附到最近的棋盤格。';
    if (local >= 5) {
      step = 2;
      title = '旋轉與翻面找出正確方向';
      description = '先選取拼塊；第三章起，部分拼塊需要水平翻面。';
    }
    if (local >= 10) {
      step = 3;
      title = '不能重疊，也不能蓋住障礙';
      description = '紅框表示越界、重疊或碰到固定物品，放開會安全退回。';
    }
    if (local >= 15) {
      step = 4;
      title = '所有用品收進箱子就完成';
      description = '每個可填格都要覆蓋，而且待放區不能留下任何拼塊。';
    }
    drawBackground('#d59059', time);
    drawTopBar('貓咪收納大師教學', '#70482f', step);
    drawStorageBoard(step, ease(progress(local % 5, 0, 1)));
    drawCaption(String(step), title, description, '#d59059');
    drawFooter('#d59059', time / DURATION);
  }

  function drawTripleAnimal(x, y, size, kind) {
    const kinds = ['cat', 'dog', 'rabbit', 'fox'];
    const animal = kinds.includes(kind) ? kind : 'cat';
    const palette = {
      cat: { head: '#7d858e', muzzle: '#f5eee3', outline: '#53382f', nose: '#e9827d' },
      dog: { head: '#dda34e', muzzle: '#f1c77f', outline: '#56372a', nose: '#4b3125' },
      rabbit: { head: '#f5efe6', muzzle: '#fffaf1', outline: '#67483c', nose: '#ef9796' },
      fox: { head: '#ef7d2e', muzzle: '#fff0d6', outline: '#5f3928', nose: '#3f2e27' },
    }[animal];
    const scale = size / 64;

    function paintedPath(fill, stroke, width, draw) {
      context.beginPath();
      draw();
      context.fillStyle = fill;
      context.fill();
      if (stroke) {
        context.strokeStyle = stroke;
        context.lineWidth = width;
        context.stroke();
      }
    }

    context.save();
    context.translate(x - size / 2, y - size / 2);
    context.scale(scale, scale);
    context.lineJoin = 'round';
    context.lineCap = 'round';

    if (animal === 'cat') {
      paintedPath(palette.head, palette.outline, 2, () => {
        context.moveTo(15, 27); context.lineTo(13, 10); context.lineTo(26, 19);
        context.quadraticCurveTo(32, 16, 38, 19); context.lineTo(51, 10); context.lineTo(49, 27);
        context.bezierCurveTo(54, 34, 53, 45, 47, 51);
        context.bezierCurveTo(40, 58, 24, 58, 17, 51);
        context.bezierCurveTo(11, 45, 10, 34, 15, 27);
      });
      context.strokeStyle = '#505861';
      context.lineWidth = 2;
      [[25,20,28,27],[39,20,36,27],[32,18,32,26]].forEach(([x1,y1,x2,y2]) => {
        context.beginPath(); context.moveTo(x1, y1); context.lineTo(x2, y2); context.stroke();
      });
    } else if (animal === 'dog') {
      paintedPath('#c47f39', palette.outline, 2, () => {
        context.moveTo(20, 24); context.bezierCurveTo(9, 13, 9, 21, 11, 34); context.bezierCurveTo(12, 42, 18, 44, 22, 37);
        context.moveTo(44, 24); context.bezierCurveTo(55, 13, 55, 21, 53, 34); context.bezierCurveTo(52, 42, 46, 44, 42, 37);
      });
      paintedPath(palette.head, palette.outline, 2, () => {
        context.moveTo(18, 34); context.bezierCurveTo(18, 21, 24, 14, 32, 14);
        context.bezierCurveTo(40, 14, 46, 21, 46, 34); context.lineTo(46, 42);
        context.bezierCurveTo(46, 51, 40, 56, 32, 56);
        context.bezierCurveTo(24, 56, 18, 51, 18, 42); context.closePath();
      });
    } else if (animal === 'rabbit') {
      paintedPath(palette.head, palette.outline, 2, () => {
        context.moveTo(19, 29); context.lineTo(18, 9); context.bezierCurveTo(18, 4, 24, 4, 26, 8);
        context.lineTo(30, 20); context.lineTo(34, 20); context.lineTo(38, 8);
        context.bezierCurveTo(40, 4, 46, 4, 46, 9); context.lineTo(45, 29);
        context.bezierCurveTo(49, 35, 48, 47, 43, 52);
        context.bezierCurveTo(37, 58, 27, 58, 21, 52); context.bezierCurveTo(16, 47, 15, 35, 19, 29);
      });
      context.strokeStyle = '#f2a6a5'; context.lineWidth = 4;
      context.beginPath(); context.moveTo(22, 11); context.lineTo(23, 24);
      context.moveTo(42, 11); context.lineTo(41, 24); context.stroke();
    } else {
      paintedPath(palette.head, palette.outline, 2, () => {
        context.moveTo(14, 27); context.lineTo(15, 9); context.lineTo(28, 19);
        context.lineTo(36, 19); context.lineTo(49, 9); context.lineTo(50, 27);
        context.bezierCurveTo(55, 34, 53, 45, 47, 51);
        context.bezierCurveTo(40, 58, 24, 58, 17, 51); context.bezierCurveTo(11, 45, 9, 34, 14, 27);
      });
    }

    paintedPath(palette.muzzle, null, 0, () => {
      context.moveTo(18, 42); context.bezierCurveTo(22, 36, 27, 34, 32, 34);
      context.bezierCurveTo(37, 34, 42, 36, 46, 42);
      context.bezierCurveTo(44, 51, 37, 55, 32, 55);
      context.bezierCurveTo(27, 55, 20, 51, 18, 42);
    });
    context.fillStyle = '#2f2925';
    context.beginPath(); context.ellipse(24.5, 34, 3.2, 4.1, 0, 0, Math.PI * 2); context.fill();
    context.beginPath(); context.ellipse(39.5, 34, 3.2, 4.1, 0, 0, Math.PI * 2); context.fill();
    context.fillStyle = '#fff';
    context.beginPath(); context.arc(23.5, 32.6, 1, 0, Math.PI * 2); context.fill();
    context.beginPath(); context.arc(38.5, 32.6, 1, 0, Math.PI * 2); context.fill();
    context.fillStyle = palette.nose;
    context.beginPath(); context.moveTo(28, 42); context.quadraticCurveTo(32, 39, 36, 42); context.lineTo(32, 46); context.closePath(); context.fill();
    context.strokeStyle = '#6f3f39'; context.lineWidth = 1.4;
    context.beginPath(); context.moveTo(32, 46); context.quadraticCurveTo(29, 50, 25, 47);
    context.moveTo(32, 46); context.quadraticCurveTo(35, 50, 39, 47); context.stroke();
    context.restore();
  }

  function drawTripleBoard(step, tween) {
    roundedRect(115, 130, 650, 360, 30, '#b8733f', '#704023', 5);
    const cards = [
      [255,180,0],[375,180,0],[495,180,0],
      [315,220,1],[435,220,1],[375,260,2],
    ];
    const animals = ['cat', 'cat', 'cat', 'dog', 'rabbit', 'fox'];
    cards.forEach(([x, y, layer], index) => {
      const removed = index < Math.max(0, step - 1);
      context.save();
      context.globalAlpha = removed ? Math.max(0, 1 - tween) : 1;
      roundedRect(x + layer * 4, y + layer * 5, 105, 105, 18, '#fff8e9', '#784628', 4);
      drawTripleAnimal(x + 52 + layer * 4, y + 50 + layer * 5, 74, animals[index]);
      context.restore();
    });
    roundedRect(805, 170, 360, 88, 20, '#a76738', '#704023', 4);
    const trayCount = step >= 4 ? 0 : Math.min(3, step);
    const trayOpacity = step === 3 ? 1 - tween : 1;
    for (let index = 0; index < 9; index += 1) {
      roundedRect(820 + index * 37, 187, 31, 50, 7, '#74462f', '#61371f', 2);
      if (index < trayCount) {
        context.save();
        context.globalAlpha = trayOpacity;
        roundedRect(820 + index * 37, 187, 31, 50, 7, '#fff6dd', '#61371f', 2);
        drawTripleAnimal(835 + index * 37, 208, 27, 'cat');
        context.restore();
      }
    }
    context.fillStyle = '#704023';
    context.textAlign = 'center';
    context.font = `800 22px ${FONT}`;
    context.fillText('9 格暫存槽', 985, 292);
  }

  function drawTripleIntro(time) {
    drawBackground('#bd7441', time);
    const appear = ease(progress(time, 0, 1.2));
    context.globalAlpha = appear;
    roundedRect(120, 160, 240, 220, 34, '#b8733f');
    roundedRect(175, 205, 112, 112, 20, '#fff8e9', '#704023', 5);
    drawTripleAnimal(231, 253, 88, 'cat');
    drawTripleAnimal(160, 326, 42, 'dog');
    drawTripleAnimal(231, 338, 42, 'rabbit');
    drawTripleAnimal(302, 326, 42, 'fox');
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.fillStyle = '#382f2a';
    context.font = `900 65px ${FONT}`;
    context.fillText('貓咪三層配對', 405, 205);
    context.font = `700 34px ${FONT}`;
    context.fillStyle = '#704023';
    context.fillText('24 秒快速教學', 410, 310);
    roundedRect(410, 390, 650, 64, 22, '#bd7441');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `900 27px ${FONT}`;
    context.fillStyle = '#fff';
    context.fillText('選亮牌、湊三張，把貓屋整理乾淨', 735, 422);
    context.globalAlpha = 1;
    drawFooter('#bd7441', time / DURATION);
  }

  function drawTripleTutorial(time) {
    const local = time - 2.5;
    let step = 1;
    let title = '先選沒有被遮住的亮色卡牌';
    let description = '更高層卡牌只要有重疊，就會暫時擋住下面的卡牌。';
    if (local >= 5) { step = 2; title = '相同動物會自動靠攏'; description = '卡牌進入九格暫存槽後，會依動物排在一起。'; }
    if (local >= 10) { step = 3; title = '三張相同動物立即消除'; description = '第九張若剛好完成配對，會先消除再判斷滿槽。'; }
    if (local >= 15) { step = 4; title = '清空中央與暫存槽就通關'; description = '提示、復原與安全洗牌各可使用三次。'; }
    drawBackground('#bd7441', time);
    drawTopBar('貓咪三層配對教學', '#704023', step, 'animal');
    drawTripleBoard(step, ease(progress(local % 5, 0, 1)));
    drawCaption(String(step), title, description, '#bd7441');
    drawFooter('#bd7441', time / DURATION);
  }

  function drawFrame(kind, time) {
    if (kind === 'cat-grid') {
      if (time < 2.5) drawGridIntro(time);
      else drawGridTutorial(time);
    } else if (kind === 'cat-color-connect' && time < 2.5) {
      drawConnectIntro(time);
    } else if (kind === 'cat-color-connect') {
      drawConnectTutorial(time);
    } else if (kind === 'cat-milk-pipes' && time < 2.5) {
      drawMilkPipeIntro(time);
    } else if (kind === 'cat-milk-pipes') {
      drawMilkPipeTutorial(time);
    } else if (kind === 'cat-storage-master' && time < 2.5) {
      drawStorageIntro(time);
    } else if (kind === 'cat-storage-master') {
      drawStorageTutorial(time);
    } else if (kind === 'cat-triple-match' && time < 2.5) {
      drawTripleIntro(time);
    } else if (kind === 'cat-triple-match') {
      drawTripleTutorial(time);
    } else if (time < 2.5) {
      drawSolitaireIntro(time);
    } else {
      drawSolitaireTutorial(time);
    }
  }

  function preferredMimeType() {
    const choices = [
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm',
    ];
    return choices.find((type) => MediaRecorder.isTypeSupported(type)) || '';
  }

  async function renderVideo(kind) {
    buttons.forEach((button) => { button.disabled = true; });
    output.value = '正在錄製，請保持此頁開啟…';
    drawFrame(kind, 0);

    const stream = canvas.captureStream(FPS);
    const mimeType = preferredMimeType();
    const recorder = new MediaRecorder(
      stream,
      mimeType ? { mimeType, videoBitsPerSecond: 4_500_000 } : undefined,
    );
    const chunks = [];
    recorder.addEventListener('dataavailable', (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    });

    const stopped = new Promise((resolve) => {
      recorder.addEventListener('stop', resolve, { once: true });
    });
    recorder.start(1000);
    const startedAt = performance.now();

    await new Promise((resolve) => {
      function tick(now) {
        const elapsed = Math.min(DURATION, (now - startedAt) / 1000);
        drawFrame(kind, elapsed);
        output.value = `正在錄製 ${elapsed.toFixed(1)}／${DURATION.toFixed(1)} 秒`;
        if (elapsed >= DURATION) {
          resolve();
          return;
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });

    recorder.stop();
    await stopped;
    stream.getTracks().forEach((track) => track.stop());
    const blob = new Blob(chunks, { type: recorder.mimeType || 'video/webm' });
    if (latestVideoUrl) URL.revokeObjectURL(latestVideoUrl);
    latestVideoUrl = URL.createObjectURL(blob);
    videoPreview.src = latestVideoUrl;
    videoDownload.href = latestVideoUrl;
    videoDownload.download = `${kind}-tutorial.webm`;
    videoResult.hidden = false;

    const anchor = document.createElement('a');
    anchor.href = latestVideoUrl;
    anchor.download = `${kind}-tutorial.webm`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();

    output.value = `${kind} 完成：${(blob.size / 1024 / 1024).toFixed(2)} MB`;
    buttons.forEach((button) => { button.disabled = false; });
  }

  window.addEventListener('beforeunload', () => {
    if (latestVideoUrl) URL.revokeObjectURL(latestVideoUrl);
  });

  for (const button of buttons) {
    button.addEventListener('click', () => renderVideo(button.dataset.render));
  }
  drawGridIntro(1.5);
})();
