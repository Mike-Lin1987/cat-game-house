'use strict';

const fs = require('node:fs');
const path = require('node:path');

const INFO_ID = Buffer.from([0x15, 0x49, 0xa9, 0x66]);
const DURATION_ID = Buffer.from([0x44, 0x89]);
const TIMECODE_SCALE_ID = Buffer.from([0x2a, 0xd7, 0xb1]);

function readVint(buffer, offset) {
  const first = buffer[offset];
  if (!first) {
    throw new Error(`無效的 EBML VINT，offset=${offset}`);
  }
  let length = 1;
  let mask = 0x80;
  while (length <= 8 && (first & mask) === 0) {
    length += 1;
    mask >>= 1;
  }
  if (length > 8 || offset + length > buffer.length) {
    throw new Error(`無效的 EBML VINT 長度，offset=${offset}`);
  }
  let value = first & (mask - 1);
  for (let index = 1; index < length; index += 1) {
    value = value * 256 + buffer[offset + index];
  }
  return { length, value };
}

function encodeVint(value, length) {
  const maximum = (2 ** (7 * length)) - 2;
  if (!Number.isInteger(value) || value < 0 || value > maximum) {
    throw new Error(`EBML VINT ${value} 無法寫入 ${length} bytes`);
  }
  const bytes = Buffer.alloc(length);
  let remaining = value;
  for (let index = length - 1; index >= 0; index -= 1) {
    bytes[index] = remaining & 0xff;
    remaining = Math.floor(remaining / 256);
  }
  bytes[0] |= 1 << (8 - length);
  return bytes;
}

function readUnsigned(buffer) {
  let value = 0;
  for (const byte of buffer) {
    value = value * 256 + byte;
  }
  return value;
}

function findElement(buffer, elementId, start, end) {
  let offset = start;
  while (offset < end) {
    const idLength = readVint(buffer, offset).length;
    const id = buffer.subarray(offset, offset + idLength);
    const size = readVint(buffer, offset + idLength);
    const dataOffset = offset + idLength + size.length;
    const dataEnd = dataOffset + size.value;
    if (dataEnd > end) {
      throw new Error(`EBML element 超出父層範圍，offset=${offset}`);
    }
    if (id.equals(elementId)) {
      return { offset, idLength, sizeLength: size.length, dataOffset, dataEnd };
    }
    offset = dataEnd;
  }
  return null;
}

function patchWebmDuration(buffer, durationMs) {
  const infoOffset = buffer.indexOf(INFO_ID);
  if (infoOffset < 0) {
    throw new Error('找不到 WebM Info element');
  }
  const infoSize = readVint(buffer, infoOffset + INFO_ID.length);
  const infoDataOffset = infoOffset + INFO_ID.length + infoSize.length;
  const infoDataEnd = infoDataOffset + infoSize.value;
  const scaleElement = findElement(
    buffer,
    TIMECODE_SCALE_ID,
    infoDataOffset,
    infoDataEnd,
  );
  if (!scaleElement) {
    throw new Error('找不到 WebM TimecodeScale');
  }
  const timecodeScale = readUnsigned(
    buffer.subarray(scaleElement.dataOffset, scaleElement.dataEnd),
  );
  const durationTicks = durationMs * 1_000_000 / timecodeScale;
  const durationData = Buffer.alloc(8);
  durationData.writeDoubleBE(durationTicks);

  const existingDuration = findElement(
    buffer,
    DURATION_ID,
    infoDataOffset,
    infoDataEnd,
  );
  if (existingDuration) {
    if (existingDuration.dataEnd - existingDuration.dataOffset !== 8) {
      throw new Error('既有 WebM Duration 不是 8-byte float');
    }
    const patched = Buffer.from(buffer);
    durationData.copy(patched, existingDuration.dataOffset);
    return patched;
  }

  const durationElement = Buffer.concat([
    DURATION_ID,
    encodeVint(durationData.length, 1),
    durationData,
  ]);
  const nextInfoSize = infoSize.value + durationElement.length;
  const nextSizeBytes = encodeVint(nextInfoSize, infoSize.length);
  const patchedHeader = Buffer.from(buffer.subarray(0, infoDataEnd));
  nextSizeBytes.copy(patchedHeader, infoOffset + INFO_ID.length);
  return Buffer.concat([
    patchedHeader,
    durationElement,
    buffer.subarray(infoDataEnd),
  ]);
}

function readWebmDuration(buffer) {
  const infoOffset = buffer.indexOf(INFO_ID);
  if (infoOffset < 0) return null;
  const infoSize = readVint(buffer, infoOffset + INFO_ID.length);
  const infoDataOffset = infoOffset + INFO_ID.length + infoSize.length;
  const infoDataEnd = infoDataOffset + infoSize.value;
  const scaleElement = findElement(
    buffer,
    TIMECODE_SCALE_ID,
    infoDataOffset,
    infoDataEnd,
  );
  const durationElement = findElement(
    buffer,
    DURATION_ID,
    infoDataOffset,
    infoDataEnd,
  );
  if (
    !scaleElement ||
    !durationElement ||
    durationElement.dataEnd - durationElement.dataOffset !== 8
  ) {
    return null;
  }
  const scale = readUnsigned(
    buffer.subarray(scaleElement.dataOffset, scaleElement.dataEnd),
  );
  const durationTicks = buffer.readDoubleBE(durationElement.dataOffset);
  return durationTicks * scale / 1_000_000;
}

function parseArguments(argv) {
  const durationIndex = argv.indexOf('--duration-ms');
  if (durationIndex < 0 || !argv[durationIndex + 1]) {
    throw new Error('用法：node fix-webm-duration.js --duration-ms <毫秒> <影片...>');
  }
  const durationMs = Number(argv[durationIndex + 1]);
  const files = argv.filter(
    (_, index) => index !== durationIndex && index !== durationIndex + 1,
  );
  if (!Number.isFinite(durationMs) || durationMs <= 0 || files.length === 0) {
    throw new Error('duration 與至少一個影片路徑為必填');
  }
  return { durationMs, files };
}

if (require.main === module) {
  const { durationMs, files } = parseArguments(process.argv.slice(2));
  for (const file of files) {
    const absolutePath = path.resolve(file);
    const original = fs.readFileSync(absolutePath);
    const patched = patchWebmDuration(original, durationMs);
    fs.writeFileSync(absolutePath, patched);
    process.stdout.write(
      `${path.relative(process.cwd(), absolutePath)}：duration=${durationMs}ms，${original.length}→${patched.length} bytes\n`,
    );
  }
}

module.exports = {
  encodeVint,
  patchWebmDuration,
  readWebmDuration,
  readVint,
};
