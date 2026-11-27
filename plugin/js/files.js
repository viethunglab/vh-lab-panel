// Truy cập file hệ thống (manifest khai "localFileSystem": "fullAccess").
'use strict';
const { storage } = require('uxp');
const lfs = storage.localFileSystem;
const formats = storage.formats;

function toUrl(nativePath) {
  return 'file:/' + String(nativePath).replace(/\\/g, '/').replace(/^\/+/, '');
}

// Trả về entry hoặc null nếu không tồn tại.
async function entryAt(nativePath) {
  try { return await lfs.getEntryWithUrl(toUrl(nativePath)); } catch (e) { return null; }
}

function sessionToken(entry) {
  return lfs.createSessionToken(entry);
}

// Thư mục chứa file của tài liệu ("" nếu tài liệu chưa lưu).
function parentDir(filePath) {
  const p = String(filePath || '');
  const i = Math.max(p.lastIndexOf('\\'), p.lastIndexOf('/'));
  return i > 0 ? p.slice(0, i) : '';
}

function joinPath(dir, name) {
  return String(dir).replace(/[\\/]+$/, '') + '\\' + name;
}

// Lấy (hoặc tạo) thư mục con.
async function ensureSubfolder(folderEntry, name) {
  const entries = await folderEntry.getEntries();
  const found = entries.find((e) => e.isFolder && e.name.toLowerCase() === name.toLowerCase());
  return found || folderEntry.createFolder(name);
}

async function readAsDataUrl(fileEntry) {
  const buf = await fileEntry.read({ format: formats.binary });
  const ext = fileEntry.name.split('.').pop().toLowerCase();
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';
  return 'data:' + mime + ';base64,' + toBase64(new Uint8Array(buf));
}

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function toBase64(bytes) {
  const out = [];
  let i = 0;
  for (; i + 2 < bytes.length; i += 3) {
    const n = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
    out.push(B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + B64[(n >> 6) & 63] + B64[n & 63]);
  }
  const rest = bytes.length - i;
  if (rest === 1) {
    const n = bytes[i] << 16;
    out.push(B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + '==');
  } else if (rest === 2) {
    const n = (bytes[i] << 16) | (bytes[i + 1] << 8);
    out.push(B64[(n >> 18) & 63] + B64[(n >> 12) & 63] + B64[(n >> 6) & 63] + '=');
  }
  return out.join('');
}

module.exports = { lfs, formats, toUrl, entryAt, sessionToken, parentDir, joinPath, ensureSubfolder, readAsDataUrl };
