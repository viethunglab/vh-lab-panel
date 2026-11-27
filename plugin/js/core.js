// Lõi dùng chung: chạy lệnh trong executeAsModal, gọi batchPlay từng bước, báo lỗi/thông báo.
'use strict';
const { app, core, action } = require('photoshop');
const settings = require('./settings');

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
function hasRawData(obj) { return JSON.stringify(obj).indexOf('"_rawData"') >= 0; }
// steps.js lưu dữ liệu thô dạng {_rawData: "<base64>"}.
// mode 'base64': đổi sang dạng batchPlay nhận khi GHI dữ liệu thô: {_rawData: "base64", _data: "<base64>"}
//                (ArrayBuffer chỉ dùng khi ĐỌC, ghi vào sẽ báo "ByteArray is not supported").
// mode 'strip':  bỏ dữ liệu, mở hộp thoại của filter với thiết lập lần trước.
function prepareRaw(step, mode) {
  const walk = (v) => {
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      if (typeof v._rawData === 'string' && v._rawData !== 'base64') return mode === 'base64' ? { _rawData: 'base64', _data: v._rawData } : undefined;
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

// Gửi cả loạt bước trong MỘT lần gọi batchPlay (nhanh hơn nhiều so với gọi từng bước: mỗi lần gọi là một
// lượt trao đổi giữa plugin và Photoshop). batchPlay mặc định dừng ở bước lỗi đầu tiên (continueOnError = false),
// nên vẫn giữ hành vi của action: dừng khi lỗi hoặc khi người dùng bấm Cancel.
// Riêng bước có dữ liệu thô (filter Portraiture) chạy tách riêng để có đường lùi.
async function play(descriptors) {
  const list = Array.isArray(descriptors) ? descriptors : [descriptors];
  const results = [];
  let batch = [];
  const flush = async () => {
    if (!batch.length) return;
    const res = await action.batchPlay(batch, {});
    for (const r of res) {
      const err = errorOf(r);
      if (err) throw err;
      results.push(r);
    }
    batch = [];
  };
  for (const d of list) {
    if (!hasRawData(d)) { batch.push(d); continue; }
    await flush();
    let res;
    // Thử truyền thiết lập đã lưu; nếu Photoshop từ chối (báo lỗi hoặc ném ngoại lệ) thì mở hộp thoại filter.
    let failed = false;
    try {
      res = await action.batchPlay([prepareRaw(d, 'base64')], {});
      const e0 = errorOf(res);
      failed = !!e0 && e0.number !== USER_CANCEL;
    } catch (e) {
      if (e && e.number === USER_CANCEL) throw e;
      console.warn('Dữ liệu thô bị từ chối, mở hộp thoại filter:', e);
      failed = true;
    }
    if (failed) res = await action.batchPlay([prepareRaw(d, 'strip')], {});
    const err = errorOf(res);
    if (err) throw err;
    results.push(res[0]);
  }
  await flush();
  return results;
}

async function get(target) {
  const res = await action.batchPlay([{ _obj: 'get', _target: target }], {});
  const err = errorOf(res);
  if (err) throw err;
  return res[0];
}

// Chạy fn trong modal scope. history=true: gộp mọi thay đổi thành 1 bước History mang tên lệnh.
// interactive=true (mặc định): không hiện thanh tiến trình chặn màn hình của Photoshop (bình thường hiện khi lệnh
// chạy quá ~2 giây) – cần vì nhiều lệnh chờ người dùng thao tác: công cụ Crop, Color Picker, hộp thoại filter.
async function runModal(name, fn, opts) {
  const o = opts || {};
  const options = {
    // Lệnh nào tự tắt history (XẾP ẢNH tạo/đóng tài liệu) thì giữ tắt; còn lại theo Cài đặt.
    history: o.history !== false && settings.get('history') !== false,
    interactive: o.interactive !== undefined ? o.interactive : settings.get('interactive') !== false,
  };
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
    }, { commandName: name, interactive: options.interactive });
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
