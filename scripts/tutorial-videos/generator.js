(function initializeTutorialVideoGenerator() {
  'use strict';

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const output = document.querySelector('output');
  const buttons = [...document.querySelectorAll('[data-render]')];
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

  function drawTopBar(title, accent, step) {
    roundedRect(38, 28, 1204, 74, 24, 'rgba(255,255,255,.94)', 'rgba(76,55,43,.1)', 2);
    context.font = `900 30px ${FONT}`;
    context.fillStyle = '#2f2926';
    context.textBaseline = 'middle';
    context.fillText(`🐱  ${title}`, 70, 65);
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

  function drawFrame(kind, time) {
    if (kind === 'cat-grid') {
      if (time < 2.5) drawGridIntro(time);
      else drawGridTutorial(time);
    } else if (kind === 'cat-color-connect' && time < 2.5) {
      drawConnectIntro(time);
    } else if (kind === 'cat-color-connect') {
      drawConnectTutorial(time);
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
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${kind}-tutorial.webm`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 3000);

    output.value = `${kind} 完成：${(blob.size / 1024 / 1024).toFixed(2)} MB`;
    buttons.forEach((button) => { button.disabled = false; });
  }

  for (const button of buttons) {
    button.addEventListener('click', () => renderVideo(button.dataset.render));
  }
  drawGridIntro(1.5);
})();
