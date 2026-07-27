'use strict';

const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.env.PORT || 4173);
const TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.webmanifest': 'application/manifest+json',
};

http
  .createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    let target = path.resolve(ROOT, relative);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      target = path.join(target, 'index.html');
    }
    if (!target.startsWith(`${ROOT}${path.sep}`) || !fs.existsSync(target)) {
      response.writeHead(404).end('Not found');
      return;
    }
    response.setHeader('content-type', TYPES[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(response);
  })
  .listen(PORT, '127.0.0.1', () => {
    process.stdout.write(`Static QA server: http://127.0.0.1:${PORT}\n`);
  });
