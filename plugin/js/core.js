// Lõi dùng chung: chạy lệnh trong executeAsModal, gọi batchPlay từng bước, báo lỗi/thông báo.
'use strict';
const { app, core, action } = require('photoshop');

const USER_CANCEL = -128;

// ---------- Thông báo ----------
// Panel không còn dòng trạng thái: lỗi hiện bằng hộp thoại, thông báo thường thì bỏ qua (ghi ra console).
function toast(msg, kind) {
  if (kind === 'error') { alertBox(msg, 'Lỗi'); } else { console.log(msg); }
}

function hasDocument() {
  return app.documents && app.documents.length > 0;
}

function requireDocument() {
  if (!hasDocument()) {
    toast('Vui lòng mở một ảnh trong Photoshop trước.', 'error');
    return false;
  }
  return true;
}

// ---------- Dữ liệu thô (filter bên thứ ba: Portraiture, SkinFiner) ----------
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function base64ToArrayBuffer(b64) {
  const clean = b64.replace(/[^A-Za-z0-9+/]/g, '');
  const len = Math.floor(clean.length * 3 / 4); // clean đã bỏ ký tự '=' đệm
  const bytes = new Uint8Array(len);
  let p = 0;
  for (let i = 0; i < clean.length; i += 4) {
    const n = (B64.indexOf(clean[i]) << 18) | (B64.indexOf(clean[i + 1]) << 12) |
      ((B64.indexOf(clean[i + 2]) & 63) << 6) | (B64.indexOf(clean[i + 3]) & 63);
    if (p < len) bytes[p++] = (n >> 16) & 255;
    if (p < len) bytes[p++] = (n >> 8) & 255;
    if (p < len) bytes[p++] = n & 255;
  }
  return bytes.buffer;
}
function hasRawData(obj) { return JSON.stringify(obj).indexOf('"_rawData"') >= 0; }
// mode 'buffer': thay {_rawData: base64} bằng ArrayBuffer; mode 'strip': bỏ dữ liệu và mở hộp thoại filter.
function prepareRaw(step, mode) {
  const walk = (v) => {
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      if (typeof v._rawData === 'string') return mode === 'buffer' ? base64ToArrayBuffer(v._rawData) : undefined;
      const o = {};
      for (const k of Object.keys(v)) { const w = walk(v[k]); if (w !== undefined) o[k] = w; }
      return o;
    }
    return v;
  };
  const s = walk(step);
  if (mode === 'strip') s._options = { dialogOptions: 'display' };
  return s;
}

// ---------- batchPlay ----------
function errorOf(result) {
  if (!result) return null;
  const r = Array.isArray(result) ? result[0] : result;
  if (r && r._obj === 'error') {
    const cancel = r.result === USER_CANCEL;
    const e = new Error(cancel ? 'USER_CANCEL' : (r.message || ('Lỗi Photoshop ' + r.result)));
    e.number = r.result;
    return e;
  }
  return null;
}

async function play(descriptors) {
  const list = Array.isArray(descriptors) ? descriptors : [descriptors];
  const results = [];
  // Chạy từng bước giống action: dừng ngay khi một bước lỗi hoặc người dùng bấm Cancel.
  for (const d of list) {
    let res;
    if (hasRawData(d)) {
      res = await action.batchPlay([prepareRaw(d, 'buffer')], {});
      if (errorOf(res) && errorOf(res).number !== USER_CANCEL) {
        res = await action.batchPlay([prepareRaw(d, 'strip')], {});
      }
    } else {
      res = await action.batchPlay([d], {});
    }
    const err = errorOf(res);
    if (err) throw err;
    results.push(res[0]);
  }
  return results;
}

async function get(target) {
  const res = await action.batchPlay([{ _obj: 'get', _target: target }], {});
  const err = errorOf(res);
  if (err) throw err;
  return res[0];
}

// Chạy fn trong modal scope. history=true: gộp mọi thay đổi thành 1 bước History mang tên lệnh.
async function runModal(name, fn, opts) {
  const options = Object.assign({ history: true }, opts || {});
  try {
    await core.executeAsModal(async (ctx) => {
      let hid = null;
      let ok = false;
      const doc = app.activeDocument;
      if (options.history && doc) {
        try { hid = await ctx.hostControl.suspendHistory({ documentID: doc.id, name: name }); } catch (e) { hid = null; }
      }
      try {
        await fn(ctx);
        ok = true;
      } finally {
        if (hid !== null) {
          try { await ctx.hostControl.resumeHistory(hid, ok); } catch (e) { /* tài liệu đã đóng/đổi */ }
        }
      }
    }, { commandName: name });
    return true;
  } catch (e) {
    // Người dùng bấm Cancel trong hộp thoại của Photoshop (mã -128): không coi là lỗi.
    // executeAsModal có thể bọc lại lỗi nên kiểm tra cả nội dung thông báo.
    const text = String((e && e.message) || e);
    if (e && (e.number === USER_CANCEL || /USER_CANCEL|-128|cancel/i.test(text))) {
      toast('Đã huỷ: ' + name);
    } else {
      console.error(name, e);
      toast(name + ' – lỗi: ' + text.replace(/^Error:\s*/, ''), 'error');
    }
    return false;
  }
}

async function runSteps(name, steps, opts) {
  return runModal(name, () => play(steps), opts);
}

// ---------- Hộp thoại ----------
async function showDialog(id, title, size) {
  const dlg = document.getElementById(id);
  const r = await dlg.uxpShowModal({ title: title, resize: 'none', size: size });
  return r;
}

function alertBox(message, title) {
  const dlg = document.getElementById('dlgAlert');
  dlg.querySelector('.msg').textContent = message;
  return dlg.uxpShowModal({ title: title || 'VH Lab', resize: 'none', size: { width: 420, height: 260 } });
}

module.exports = { toast, hasDocument, requireDocument, play, get, runModal, runSteps, showDialog, alertBox, USER_CANCEL };
