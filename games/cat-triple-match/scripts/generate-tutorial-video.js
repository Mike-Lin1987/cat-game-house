const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  const base64 = await page.evaluate(async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 360;
    const context = canvas.getContext('2d');
    const stream = canvas.captureStream(24);
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp8', videoBitsPerSecond: 900000 });
    const chunks = [];
    recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
    const finished = new Promise((resolve) => { recorder.onstop = resolve; });
    recorder.start();
    const started = performance.now();
    function roundedRect(x, y, width, height, radius, fill, stroke) {
      context.beginPath();
      context.roundRect(x, y, width, height, radius);
      context.fillStyle = fill;
      context.fill();
      if (stroke) { context.strokeStyle = stroke; context.lineWidth = 4; context.stroke(); }
    }
    function paw(x, y, scale, color) {
      context.fillStyle = color;
      context.beginPath(); context.ellipse(x, y + 8 * scale, 9 * scale, 7 * scale, 0, 0, Math.PI * 2); context.fill();
      [[-11, -4], [-4, -11], [5, -11], [12, -3]].forEach(([dx, dy]) => {
        context.beginPath(); context.arc(x + dx * scale, y + dy * scale, 4 * scale, 0, Math.PI * 2); context.fill();
      });
    }
    function frame(now) {
      const seconds = (now - started) / 1000;
      const phase = Math.min(2, Math.floor(seconds / 3));
      const local = seconds % 3;
      const gradient = context.createLinearGradient(0, 0, 640, 360);
      gradient.addColorStop(0, '#fff9eb'); gradient.addColorStop(1, '#ecc38e');
      context.fillStyle = gradient; context.fillRect(0, 0, 640, 360);
      context.fillStyle = '#d49458'; context.fillRect(0, 292, 640, 68);
      context.strokeStyle = '#b47643'; context.lineWidth = 3;
      context.beginPath(); context.moveTo(0, 320); context.lineTo(640, 320); context.stroke();
      roundedRect(22, 18, 596, 56, 20, '#f3c880', '#87502c');
      context.fillStyle = '#633719'; context.textAlign = 'center'; context.font = '900 28px Microsoft JhengHei, sans-serif';
      context.fillText('貓咪三層配對', 320, 54);
      roundedRect(70, 94, 500, 157, 24, '#b8733f', '#704023');
      const cards = [[190, 128], [270, 128], [350, 128], [230, 154], [310, 154]];
      cards.forEach(([x, y], index) => {
        const hidden = phase === 0 && index < 2;
        roundedRect(x, y, 76, 76, 13, hidden ? '#b7936e' : '#fff8e9', '#784628');
        paw(x + 38, y + 36, .72, hidden ? '#7b5d45' : index % 2 ? '#73a9c8' : '#e69358');
      });
      if (phase === 0) {
        context.fillStyle = '#633719'; context.font = '800 23px Microsoft JhengHei, sans-serif';
        context.fillText('① 先選沒有被遮住的亮色卡牌', 320, 282);
      } else {
        roundedRect(85, 268, 470, 63, 16, '#a76738', '#704023');
        for (let i = 0; i < 9; i += 1) roundedRect(96 + i * 50, 278, 42, 42, 7, i < (phase === 1 ? Math.min(3, Math.floor(local * 1.7)) : 3) ? '#fff6dd' : '#74462f', '#61371f');
        if (phase === 1) {
          for (let i = 0; i < Math.min(3, Math.floor(local * 1.7)); i += 1) paw(117 + i * 50, 296, .35, '#e69358');
          context.fillStyle = '#633719'; context.font = '800 22px Microsoft JhengHei, sans-serif';
          context.fillText('② 三張相同圖案會自動靠攏', 320, 87);
        } else {
          const glow = .45 + Math.sin(local * 5) * .2;
          context.fillStyle = `rgba(255,224,88,${glow})`; context.fillRect(92, 274, 152, 50);
          context.fillStyle = '#633719'; context.font = '800 22px Microsoft JhengHei, sans-serif';
          context.fillText('③ 集滿三張立即消除，清空即可過關', 320, 87);
        }
      }
      if (seconds < 9) requestAnimationFrame(frame);
      else recorder.stop();
    }
    requestAnimationFrame(frame);
    await finished;
    const blob = new Blob(chunks, { type: 'video/webm' });
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(blob);
    });
  });
  await browser.close();
  const output = path.resolve(__dirname, '..', 'tutorial.webm');
  fs.writeFileSync(output, Buffer.from(base64, 'base64'));
  process.stdout.write(`已產生原創離線教學影片：${output}\n`);
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});
