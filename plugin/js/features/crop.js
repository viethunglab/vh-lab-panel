// Crop chân dung 10x15 cm @300 PPI (thay crop_10x15.jsx) và Crop ảnh thẻ 3x4 / 4x6 @600 PPI (thay Dang_vien.jsx).
'use strict';
const { app, constants } = require('photoshop');
const { runModal, play, get, requireDocument, alertBox, showDialog } = require('../core');

const px = (cm, dpi) => Math.round(cm / 2.54 * dpi);
const $ = (sel) => document.querySelector(sel);

function readGuides(doc) {
  const h = [];
  const v = [];
  for (const g of doc.guides) {
    if (g.direction === constants.Direction.HORIZONTAL) h.push(Number(g.coordinate));
    else v.push(Number(g.coordinate));
  }
  h.sort((a, b) => a - b);
  v.sort((a, b) => a - b);
  return { h, v };
}

async function selectionBounds(doc) {
  try {
    const r = await get([{ _property: 'selection' }, { _ref: 'document', _id: doc.id }]);
    const s = r && r.selection;
    if (!s || s.top === undefined) return null;
    const n = (x) => (typeof x === 'object' ? x._value : x);
    return { top: n(s.top), left: n(s.left), bottom: n(s.bottom), right: n(s.right) };
  } catch (e) { return null; }
}

const DESELECT = { _obj: 'set', _target: [{ _ref: 'channel', _property: 'selection' }], to: { _enum: 'ordinal', _value: 'none' }, _options: { dialogOptions: 'dontDisplay' } };

async function unlockBackground(doc) {
  if (!doc.backgroundLayer) return;
  await play({ _obj: 'set', _target: [{ _ref: 'layer', _property: 'background' }],
    to: { _obj: 'layer', opacity: { _unit: 'percentUnit', _value: 100 }, mode: { _enum: 'blendMode', _value: 'normal' } },
    _options: { dialogOptions: 'dontDisplay' } });
}

// ---------------- Crop 10x15 ----------------
async function crop10x15() {
  if (!requireDocument()) return;
  const doc = app.activeDocument;
  const docW = doc.width;
  const docH = doc.height;
  const { h, v } = readGuides(doc);
  if (h.length < 2 || v.length < 2) {
    await alertBox('CẦN ĐỦ 4 ĐƯỜNG GUIDE ĐỂ CROP 10x15 CM:\n\n' +
      (h.length < 2 ? '✗ Thiếu Guide ngang: 1 đường ở ĐỈNH ĐẦU và 1 đường ở ĐÁY CẰM.\n' : '✓ Guide ngang: đã đủ 2 đường.\n') +
      (v.length < 2 ? '✗ Thiếu Guide dọc: 2 đường ở 2 bên VIỀN MÁ (không tính tai).\n' : '✓ Guide dọc: đã đủ 2 đường.\n') +
      '\nKéo đủ 4 đường Guide từ thước kẻ (Ctrl + R) rồi bấm lại.', 'Chưa đủ 4 đường Guide');
    return;
  }
  const yHead = h[0];
  const yChin = h[h.length - 1];
  const hFace = yChin - yHead;
  const xLeft = v[0];
  const xRight = v[v.length - 1];
  if (hFace <= 0 || xRight <= xLeft) { await alertBox('Vị trí các đường Guide không hợp lệ.', 'Lỗi'); return; }
  const xCenter = (xLeft + xRight) / 2;

  // Hộp thoại
  const rbAdult = $('#c15Adult');
  const rbChild = $('#c15Child');
  const slider = $('#c15Slider');
  const num = $('#c15Value');
  const dist = $('#c15Dist');
  const est = $('#c15Est');
  $('#c15Diag').textContent = '• Chiều dài mặt (đỉnh đầu → cằm): ' + Math.round(hFace) + ' px\n' +
    '• Đỉnh đầu ' + Math.round(yHead) + ' px | Cằm ' + Math.round(yChin) + ' px\n' +
    '• Trục giữa mặt: ' + Math.round(xCenter) + ' px\n' +
    '• Đầu ra: 10 x 15 cm @ 300 PPI (1181 x 1772 px)';
  const update = (val) => {
    const head = rbChild.checked ? 15 : 13;
    dist.textContent = 'Bố cục: Đỉnh đầu ' + head + '% | Khuôn mặt ' + val + '% | Thân áo ' + (100 - head - val) + '%';
    const eh = Math.round(hFace / (val / 100));
    est.textContent = 'Khung crop dự kiến: ' + Math.round(eh * 10 / 15) + ' x ' + eh + ' px';
  };
  const setVal = (val) => { slider.value = val; num.value = String(val); update(val); };
  rbAdult.checked = true;
  rbChild.checked = false;
  setVal(43);
  slider.oninput = () => { const val = Math.round(Number(slider.value)); num.value = String(val); update(val); };
  num.onchange = () => { let val = parseInt(num.value, 10); if (isNaN(val)) val = 43; setVal(Math.min(60, Math.max(30, val))); };
  rbAdult.onclick = () => { rbChild.checked = false; setVal(43); };
  rbChild.onclick = () => { rbAdult.checked = false; setVal(41); };

  if (await showDialog('dlgCrop15', 'Crop chân dung 10x15 cm @ 300 PPI', { width: 460, height: 430 }) !== 'ok') return;

  let facePct = parseInt(num.value, 10);
  if (isNaN(facePct) || facePct < 20 || facePct > 80) facePct = 43;
  const hCrop = hFace / (facePct / 100);
  const wCrop = hCrop * 10 / 15;
  let top = yHead - hCrop * (rbChild.checked ? 0.15 : 0.13);
  let bottom = top + hCrop;
  let left = xCenter - wCrop / 2;
  let right = xCenter + wCrop / 2;

  await runModal('Crop 10x15', async () => {
    await play(DESELECT);
    await unlockBackground(doc);
    // Mở rộng canvas nếu khung crop chờm ra ngoài ảnh
    const padL = left < 0 ? -left : 0;
    const padT = top < 0 ? -top : 0;
    const padR = right > docW ? right - docW : 0;
    const padB = bottom > docH ? bottom - docH : 0;
    if (padL || padT || padR || padB) {
      // Mở rộng trái/trên trước (neo góc dưới-phải), rồi phải/dưới (neo góc trên-trái)
      if (padL || padT) await doc.resizeCanvas(docW + padL, docH + padT, constants.AnchorPosition.BOTTOMRIGHT);
      if (padR || padB) await doc.resizeCanvas(doc.width + padR, doc.height + padB, constants.AnchorPosition.TOPLEFT);
      left += padL; right += padL; top += padT; bottom += padT;
    }
    await doc.crop({ left, top, right, bottom });
    await doc.resizeImage(px(10, 300), px(15, 300), 300, constants.ResampleMethod.BICUBICSHARPER);
    try { doc.guides.removeAll(); } catch (e) { /* bỏ qua */ }
  });
}

// ---------------- Crop ảnh thẻ 3x4 / 4x6 (nút "Đảng viên") ----------------
async function cropTheDangVien() {
  if (!requireDocument()) return;
  const doc = app.activeDocument;
  const docW = doc.width;
  const docH = doc.height;
  const { h, v } = readGuides(doc);
  let yHead = -1;
  let yChin = -1;
  let xCenter = docW / 2;
  let method = '';
  if (h.length >= 2) {
    yHead = h[0];
    yChin = h[h.length - 1];
    if (v.length > 0) xCenter = v[0];
    method = '2 đường Guide ngang';
  } else {
    const sb = await selectionBounds(doc);
    if (sb) { yHead = sb.top; yChin = sb.bottom; xCenter = (sb.left + sb.right) / 2; method = 'Vùng chọn (Marquee)'; }
  }
  if (yHead < 0 || yChin < 0 || yChin <= yHead) {
    await alertBox('CHƯA XÁC ĐỊNH ĐƯỢC ĐỈNH ĐẦU VÀ CẰM!\n\nKéo 2 đường Guide ngang (Ctrl + R):\n  • Đường 1: tại ĐỈNH ĐẦU\n  • Đường 2: tại CẰM\n' +
      '(hoặc tạo vùng chọn chữ nhật từ đỉnh đầu tới cằm), rồi bấm lại.', 'Hướng dẫn');
    return;
  }
  const hFace = yChin - yHead;
  $('#dvDiag').textContent = '• Nhận diện bằng: ' + method + '\n' +
    '• Ảnh gốc: ' + Math.round(docW) + ' x ' + Math.round(docH) + ' px (' + Math.round(doc.resolution) + ' PPI)\n' +
    '• Đỉnh đầu: ' + Math.round(yHead) + ' px | Cằm: ' + Math.round(yChin) + ' px | Mặt: ' + Math.round(hFace) + ' px';
  $('#dv34').checked = true; $('#dv46').checked = false;
  $('#dvR23').checked = true; $('#dvR75').checked = false; $('#dvR80').checked = false;
  $('#dvMargin').value = '10';
  $('#dvClear').checked = true;
  const radio = (ids) => ids.forEach((id) => { $(id).onclick = () => ids.forEach((o) => { $(o).checked = (o === id); }); });
  radio(['#dv34', '#dv46']);
  radio(['#dvR23', '#dvR75', '#dvR80']);

  if (await showDialog('dlgDangVien', 'Crop ảnh thẻ 3x4 / 4x6 @ 600 PPI', { width: 480, height: 470 }) !== 'ok') return;

  const is46 = $('#dv46').checked;
  const cmW = is46 ? 4 : 3;
  const cmH = is46 ? 6 : 4;
  const faceRatio = $('#dvR75').checked ? 0.75 : $('#dvR80').checked ? 0.80 : 2 / 3;
  let margin = parseFloat($('#dvMargin').value) / 100;
  if (isNaN(margin) || margin < 0) margin = 0.10;
  const clearGuides = $('#dvClear').checked;

  const hCrop = hFace / faceRatio;
  const wCrop = hCrop * cmW / cmH;
  const top = Math.max(0, yHead - hCrop * margin);
  const bottom = Math.min(docH, yHead - hCrop * margin + hCrop);
  const left = Math.max(0, xCenter - wCrop / 2);
  const right = Math.min(docW, xCenter + wCrop / 2);

  await runModal('Crop ảnh thẻ ' + cmW + 'x' + cmH, async () => {
    await play(DESELECT);
    await unlockBackground(doc);
    await doc.crop({ left, top, right, bottom });
    await doc.resizeImage(px(cmW, 600), px(cmH, 600), 600, constants.ResampleMethod.BICUBICSHARPER);
    if (clearGuides) { try { doc.guides.removeAll(); } catch (e) { /* bỏ qua */ } }
  });
}

module.exports = { crop10x15, cropTheDangVien };
