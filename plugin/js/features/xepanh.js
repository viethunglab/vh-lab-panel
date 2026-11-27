// Nút "Nhiều người": tự động xếp ảnh thẻ của tất cả ảnh đang mở lên khổ giấy in (thay layout/21.jsx).
// Khối chuẩn 6x4 cm: 1 ảnh 4x6 xoay ngang = 1 khối; 2 ảnh 3x4 = 1 khối; 4 ảnh 2x3 = 1 khối.
// Viền cắt 1 px bên trong màu #CCCCCC, khoảng cách giữa các ảnh 0,5 mm.
'use strict';
const { app, constants } = require('photoshop');
const { runModal, play, requireDocument, alertBox, showDialog, toast } = require('../core');
const { lfs, entryAt, parentDir, joinPath, ensureSubfolder } = require('../files');

const DPI = 300;
const px = (cm) => Math.round(cm / 2.54 * DPI);
const GAP = px(0.05); // 6 px
const SIZES = {
  '4x6': { w: px(4), h: px(6) },
  '3x4': { w: px(3), h: px(4) },
  '2x3': { w: px(2), h: px(3) },
};
const PAPERS = {
  CP: { name: 'CP', wCm: 12.7, hCm: 8.6, blocks: 4 },
  CP1: { name: 'CP1', wCm: 15.2, hCm: 10.0, blocks: 4 },
  CP2: { name: 'CP2', wCm: 12.7, hCm: 17.8, blocks: 8 },
  CP3: { name: 'CP3', wCm: 15.2, hCm: 21.0, blocks: 10 },
};
const CONFIG_KEY = 'vhlab.xepAnhThe';
const $ = (sel) => document.querySelector(sel);

// ---------------- Thuật toán MaxRects (giữ nguyên từ bản JSX) ----------------
function packCardMaxRects(binW, binH, items, heuristic, rotPolicy) {
  let freeRects = [{ x: 0, y: 0, w: binW + GAP, h: binH + GAP }];
  const placed = [];
  const unplaced = [];
  for (const it of items) {
    const rw = it.w + GAP;
    const rh = it.h + GAP;
    let b1 = 1e15; let b2 = 1e15; let b3 = 1e15; let best = null;
    let rots = [false, true];
    if (rotPolicy && typeof rotPolicy[it.type] === 'boolean') rots = [rotPolicy[it.type], !rotPolicy[it.type]];
    for (const fr of freeRects) {
      for (let r = 0; r < rots.length; r++) {
        const rot = rots[r];
        const w = rot ? rh : rw;
        const h = rot ? rw : rh;
        if (rot && rw === rh) continue;
        if (fr.w >= w && fr.h >= h) {
          let s1; let s2;
          if (heuristic === 'BSSF') { s1 = Math.min(fr.w - w, fr.h - h); s2 = Math.max(fr.w - w, fr.h - h); }
          else if (heuristic === 'BAF') { s1 = fr.w * fr.h - w * h; s2 = Math.min(fr.w - w, fr.h - h); }
          else if (heuristic === 'BL') { s1 = fr.y; s2 = fr.x; }
          else { s1 = fr.x; s2 = fr.y; }
          if (s1 < b1 || (s1 === b1 && s2 < b2) || (s1 === b1 && s2 === b2 && r < b3)) {
            best = { x: fr.x, y: fr.y, w, h, rot }; b1 = s1; b2 = s2; b3 = r;
          }
        }
      }
    }
    if (!best) { unplaced.push(it); continue; }
    placed.push({ item: it, x: best.x, y: best.y, w: best.w - GAP, h: best.h - GAP, rot: best.rot });
    const next = [];
    for (const f of freeRects) {
      if (best.x >= f.x + f.w || best.x + best.w <= f.x || best.y >= f.y + f.h || best.y + best.h <= f.y) { next.push(f); continue; }
      if (best.y > f.y && best.y < f.y + f.h) next.push({ x: f.x, y: f.y, w: f.w, h: best.y - f.y });
      if (best.y + best.h < f.y + f.h) next.push({ x: f.x, y: best.y + best.h, w: f.w, h: f.y + f.h - (best.y + best.h) });
      if (best.x > f.x && best.x < f.x + f.w) next.push({ x: f.x, y: f.y, w: best.x - f.x, h: f.h });
      if (best.x + best.w < f.x + f.w) next.push({ x: best.x + best.w, y: f.y, w: f.x + f.w - (best.x + best.w), h: f.h });
    }
    freeRects = next.filter((a, i) => !next.some((b, j) => i !== j &&
      a.x >= b.x && a.y >= b.y && a.x + a.w <= b.x + b.w && a.y + a.h <= b.y + b.h));
  }
  return { placed, unplaced };
}

function packBestCardPage(binW, binH, items) {
  const heuristics = ['BSSF', 'BL', 'LF', 'BAF'];
  const policies = [
    { '4x6': true, '3x4': false, '2x3': true },
    { '4x6': false, '3x4': true, '2x3': false },
    { '4x6': false, '3x4': false, '2x3': false },
    { '4x6': true, '3x4': true, '2x3': true },
  ];
  let best = null;
  for (const hName of heuristics) {
    for (const pol of policies) {
      const res = packCardMaxRects(binW, binH, items, hName, pol);
      let rotChanges = 0; const typeRot = {}; let maxX = 0; let maxY = 0;
      for (const pl of res.placed) {
        const t = pl.item.type;
        if (typeRot[t] === undefined) typeRot[t] = pl.rot; else if (typeRot[t] !== pl.rot) rotChanges++;
        maxX = Math.max(maxX, pl.x + pl.w); maxY = Math.max(maxY, pl.y + pl.h);
      }
      const area = maxX * maxY;
      if (!best || res.placed.length > best.placed.length ||
        (res.placed.length === best.placed.length && rotChanges < best.rotChanges) ||
        (res.placed.length === best.placed.length && rotChanges === best.rotChanges && area < best.area)) {
        best = { placed: res.placed, unplaced: res.unplaced, rotChanges, area };
      }
    }
  }
  return best;
}

// Tính vị trí mọi ảnh. docSizes: [{w,h}] theo pixel của từng ảnh nguồn.
function computeLayout(cfg, docSizes) {
  const paper = PAPERS[cfg.paper] || PAPERS.CP2;
  const canvasW = px(paper.wCm);
  const canvasH = px(paper.hCm);
  const itemsFull = []; const cardItems = [];
  let id = 0;
  docSizes.forEach((_, f) => {
    for (let i = 0; i < cfg.qtyFull; i++) itemsFull.push({ id: id++, fileIndex: f, type: 'full' });
    for (const t of ['4x6', '3x4', '2x3']) {
      for (let i = 0; i < cfg['qty' + t]; i++) cardItems.push({ id: id++, fileIndex: f, type: t, w: SIZES[t].w, h: SIZES[t].h });
    }
  });
  const map = {};
  // Ảnh thẻ: MaxRects từng trang, căn giữa cụm ảnh
  const cardPages = [];
  let remaining = cardItems;
  while (remaining.length) {
    const page = packBestCardPage(canvasW, canvasH, remaining);
    if (!page || !page.placed.length) break;
    cardPages.push(page);
    remaining = page.unplaced;
  }
  cardPages.forEach((page, p) => {
    let minX = canvasW; let minY = canvasH; let maxX = 0; let maxY = 0;
    for (const pl of page.placed) { minX = Math.min(minX, pl.x); minY = Math.min(minY, pl.y); maxX = Math.max(maxX, pl.x + pl.w); maxY = Math.max(maxY, pl.y + pl.h); }
    const sx = Math.floor((canvasW - (maxX - minX)) / 2) - minX;
    const sy = Math.floor((canvasH - (maxY - minY)) / 2) - minY;
    for (const pl of page.placed) map[pl.item.id] = { pageIndex: p, left: pl.x + sx, top: pl.y + sy, w: pl.w, h: pl.h, rot: pl.rot };
  });
  // Ảnh nguyên khổ: xếp theo hàng, tự xoay nếu chứa được nhiều hơn, thu nhỏ nếu quá khổ
  const fullPages = [];
  let cur = null; let cx = 0; let cy = 0; let rowH = 0;
  const newPage = () => { cur = { items: [], minX: 1e9, minY: 1e9, maxX: 0, maxY: 0 }; fullPages.push(cur); cx = 0; cy = 0; rowH = 0; };
  for (const it of itemsFull) {
    const d = docSizes[it.fileIndex];
    const cap0 = Math.floor((canvasW + GAP) / (d.w + GAP)) * Math.floor((canvasH + GAP) / (d.h + GAP));
    const capR = Math.floor((canvasW + GAP) / (d.h + GAP)) * Math.floor((canvasH + GAP) / (d.w + GAP));
    let rot = false; let w = d.w; let h = d.h;
    if ((cap0 === 0 && capR > 0) || capR > cap0) { rot = true; w = d.h; h = d.w; }
    if (w > canvasW || h > canvasH) { const s = Math.min(canvasW / w, canvasH / h); w = Math.round(w * s); h = Math.round(h * s); }
    if (!cur) newPage();
    if (cx > 0 && cx + w > canvasW) { cx = 0; cy += rowH + GAP; rowH = 0; }
    if (cy + h > canvasH && cur.items.length) newPage();
    cur.items.push({ id: it.id, w, h, x: cx, y: cy, rot });
    cur.minX = Math.min(cur.minX, cx); cur.minY = Math.min(cur.minY, cy);
    cur.maxX = Math.max(cur.maxX, cx + w); cur.maxY = Math.max(cur.maxY, cy + h);
    cx += w + GAP; rowH = Math.max(rowH, h);
  }
  fullPages.forEach((pg, p) => {
    const sx = Math.floor((canvasW - (pg.maxX - pg.minX)) / 2) - pg.minX;
    const sy = Math.floor((canvasH - (pg.maxY - pg.minY)) / 2) - pg.minY;
    for (const it of pg.items) map[it.id] = { pageIndex: cardPages.length + p, left: it.x + sx, top: it.y + sy, w: it.w, h: it.h, rot: it.rot };
  });
  return { paper, canvasW, canvasH, itemsFull, cardItems, map, cardSheets: cardPages.length, fullSheets: fullPages.length };
}

// ---------------- Thao tác Photoshop ----------------
const NO = { dialogOptions: 'dontDisplay' };
const selectAll = () => play({ _obj: 'set', _target: [{ _ref: 'channel', _property: 'selection' }], to: { _enum: 'ordinal', _value: 'allEnum' }, _options: NO });
const deselect = () => play({ _obj: 'set', _target: [{ _ref: 'channel', _property: 'selection' }], to: { _enum: 'ordinal', _value: 'none' }, _options: NO });
const copy = () => play({ _obj: 'copyEvent', _options: NO });
const paste = () => play({ _obj: 'paste', '$AntA': { _enum: '$Annt', _value: '$Anno' }, '$As  ': { _class: '$Pxel' }, _options: NO });
const rotate270 = () => play({ _obj: 'rotateEventEnum', _target: [{ _ref: '$Dcmn', _enum: '$Ordn', _value: '$Frst' }], '$Angl': { _unit: 'angleUnit', _value: -90 }, _options: NO });
const pxv = (v) => ({ _unit: 'pixelsUnit', _value: v });
async function strokeRect(l, t, w, h) {
  await play({ _obj: 'set', _target: [{ _ref: 'channel', _property: 'selection' }],
    to: { _obj: 'rectangle', top: pxv(t), left: pxv(l), bottom: pxv(t + h), right: pxv(l + w) }, _options: NO });
  await play({ _obj: 'stroke', '$Wdth': 1, '$Lctn': { _enum: '$StrL', _value: '$Insd' }, '$Opct': { _unit: 'percentUnit', _value: 100 },
    '$Md  ': { _enum: '$BlnM', _value: '$Nrml' }, '$Clr ': { _obj: '$RGBC', '$Rd  ': 204, '$Grn ': 204, '$Bl  ': 204 }, _options: NO });
  await deselect();
}
async function cropTo3x4(doc, interactive) {
  const W = doc.width; const H = doc.height;
  let cw = W; let ch = Math.round(W * 4 / 3);
  if (ch > H) { ch = H; cw = Math.round(H * 3 / 4); }
  const left = Math.round((W - cw) / 2); const top = Math.round((H - ch) / 2);
  const d = { _obj: 'crop', '$T   ': { _obj: '$Rct1', '$Top ': pxv(top), '$Left': pxv(left), '$Btom': pxv(top + ch), '$Rght': pxv(left + cw) },
    '$Angl': { _unit: 'angleUnit', _value: 0 }, '$Wdth': pxv(SIZES['3x4'].w), '$Hght': pxv(SIZES['3x4'].h),
    '$Rslt': { _unit: 'densityUnit', _value: DPI }, 'delete': true };
  if (interactive) {
    try { await play(Object.assign({}, d, { _options: { dialogOptions: 'display' } })); return; } catch (e) { if (e.number === -128) throw e; }
  }
  await play(Object.assign({}, d, { _options: NO }));
}

async function pasteInto(canvases, targets) {
  for (const t of targets) {
    const canvas = canvases[t.pageIndex];
    app.activeDocument = canvas;
    await paste();
    const layer = canvas.activeLayers[0];
    const b = layer.bounds;
    await layer.translate(t.left - b.left, t.top - b.top);
    await strokeRect(t.left, t.top, t.w, t.h);
  }
}

// ---------------- Hộp thoại cấu hình ----------------
function loadConfig() {
  const def = { cbFull: false, qtyFull: 1, cb4x6: true, qty4x6: 1, cb3x4: true, qty3x4: 6, crop3x4: true, cb2x3: false, qty2x3: 2, paper: 'CP2', autoSave: false, customBase: '' };
  try { return Object.assign(def, JSON.parse(localStorage.getItem(CONFIG_KEY) || '{}')); } catch (e) { return def; }
}
function saveConfig(c) { try { localStorage.setItem(CONFIG_KEY, JSON.stringify(c)); } catch (e) { /* bỏ qua */ } }

function sourceFolder() {
  const docs = [app.activeDocument].concat(Array.from(app.documents));
  for (const d of docs) { const p = d && parentDir(d.path); if (p) return p; }
  return '';
}

async function askConfig() {
  const c = loadConfig();
  const ids = ['Full', '4x6', '3x4', '2x3'];
  ids.forEach((t) => { $('#xaCb' + t).checked = !!c['cb' + t]; $('#xaQty' + t).value = String(c['qty' + t]); });
  $('#xaCrop').checked = !!c.crop3x4;
  Object.keys(PAPERS).forEach((k) => { $('#xaP' + k).checked = (c.paper === k); });
  $('#xaAuto').checked = !!c.autoSave;
  let customBase = c.customBase || '';
  const paperSel = () => Object.keys(PAPERS).find((k) => $('#xaP' + k).checked) || 'CP2';
  const folderOf = () => { const base = customBase || sourceFolder(); return base ? joinPath(base, paperSel()) : ''; };
  const n = (t) => parseInt($('#xaQty' + t).value, 10) || 0;
  const refresh = () => {
    ids.forEach((t) => { $('#xaQty' + t).disabled = !$('#xaCb' + t).checked; });
    $('#xaCrop').disabled = !$('#xaCb3x4').checked;
    $('#xaFolder').textContent = $('#xaAuto').checked ? (folderOf() || '(chọn thư mục lưu)') : '(không tự lưu)';
    $('#xaBrowse').classList.toggle('disabled', !$('#xaAuto').checked);
    const parts = [];
    if ($('#xaCbFull').checked) parts.push(n('Full') + ' nguyên khổ');
    ['4x6', '3x4', '2x3'].forEach((t) => { if ($('#xaCb' + t).checked) parts.push(n(t) + ' ảnh ' + t); });
    const p = PAPERS[paperSel()];
    $('#xaSummary').textContent = parts.length
      ? '• Mỗi ảnh nguồn: ' + parts.join(' + ') + '\n• Khổ ' + p.name + ' (' + p.wCm + ' x ' + p.hCm + ' cm)\n• Đang mở: ' + app.documents.length + ' ảnh nguồn'
      : 'Chọn ít nhất một loại ảnh cần in.';
  };
  ids.forEach((t) => { $('#xaCb' + t).onchange = refresh; $('#xaQty' + t).oninput = refresh; });
  $('#xaAuto').onchange = refresh;
  Object.keys(PAPERS).forEach((k) => {
    $('#xaP' + k).onclick = () => { Object.keys(PAPERS).forEach((o) => { $('#xaP' + o).checked = (o === k); }); refresh(); };
  });
  $('#xaBrowse').onclick = async () => {
    if ($('#xaBrowse').classList.contains('disabled')) return;
    const f = await lfs.getFolder();
    if (!f) return;
    const isPaperDir = Object.keys(PAPERS).includes(f.name.toUpperCase());
    customBase = isPaperDir ? parentDir(f.nativePath) : f.nativePath;
    refresh();
  };
  refresh();

  for (;;) {
    if (await showDialog('dlgXepAnh', 'Tự động xếp ảnh thẻ (nhiều người)', { width: 520, height: 560 }) !== 'ok') return null;
    const cfg = {
      cbFull: $('#xaCbFull').checked, qtyFull: n('Full'), cb4x6: $('#xaCb4x6').checked, qty4x6: n('4x6'),
      cb3x4: $('#xaCb3x4').checked, qty3x4: n('3x4'), crop3x4: $('#xaCrop').checked, cb2x3: $('#xaCb2x3').checked, qty2x3: n('2x3'),
      paper: paperSel(), autoSave: $('#xaAuto').checked, customBase,
    };
    const any = cfg.cbFull || cfg.cb4x6 || cfg.cb3x4 || cfg.cb2x3;
    const badQty = ids.some((t) => cfg['cb' + t] && cfg['qty' + t] <= 0);
    if (!any) { await alertBox('Vui lòng chọn ít nhất một loại ảnh cần in!'); continue; }
    if (badQty) { await alertBox('Số lượng ảnh phải là số nguyên dương.'); continue; }
    if (cfg.autoSave && !folderOf()) { await alertBox('Ảnh nguồn chưa được lưu ở thư mục nào. Bấm "Chọn thư mục..." để chọn nơi lưu.'); continue; }
    saveConfig(cfg);
    cfg.saveFolder = cfg.autoSave ? folderOf() : '';
    // Số lượng thực tế theo ô đã tick
    ids.forEach((t) => { if (!cfg['cb' + t]) cfg['qty' + t] = 0; });
    return cfg;
  }
}

// ---------------- Chạy ----------------
async function xepNhieuNguoi() {
  if (!requireDocument()) return;
  const cfg = await askConfig();
  if (!cfg) return;

  const sources = Array.from(app.documents);
  const layout = computeLayout(cfg, sources.map((d) => ({ w: Math.round(d.width), h: Math.round(d.height) })));
  const { paper, canvasW, canvasH, itemsFull, cardItems, map, cardSheets, fullSheets } = layout;
  const saved = [];

  const ok = await runModal('Xếp ảnh thẻ nhiều người', async () => {
    const canvases = [];
    for (let p = 0; p < cardSheets + fullSheets; p++) {
      const name = (p < cardSheets ? 'AnhThe_' : 'AnhNguyenKho_') + paper.name + '_Trang_' + (p < cardSheets ? p + 1 : p - cardSheets + 1);
      canvases.push(await app.documents.add({ width: canvasW, height: canvasH, resolution: DPI, mode: constants.NewDocumentMode.RGB, fill: constants.DocumentFill.WHITE, name }));
    }
    const targetsOf = (fIdx, type) => [...itemsFull, ...cardItems].filter((it) => it.fileIndex === fIdx && it.type === type).map((it) => map[it.id]).filter(Boolean);

    for (let f = 0; f < sources.length; f++) {
      const src = sources[f];
      app.activeDocument = src;
      const origState = src.activeHistoryState;

      const full = targetsOf(f, 'full');
      if (full.length) {
        if (Math.round(src.resolution) !== DPI) await src.resizeImage(src.width, src.height, DPI, constants.ResampleMethod.BICUBICSHARPER);
        if (full[0].rot) await rotate270();
        if (Math.round(src.width) !== full[0].w || Math.round(src.height) !== full[0].h) {
          await src.resizeImage(full[0].w, full[0].h, DPI, constants.ResampleMethod.BICUBICSHARPER);
        }
        await selectAll(); await copy();
        await pasteInto(canvases, full);
      }

      for (const type of ['4x6', '3x4', '2x3']) {
        const targets = targetsOf(f, type);
        if (!targets.length) continue;
        app.activeDocument = src;
        src.activeHistoryState = origState;
        if (type === '3x4') { app.activeDocument = src; await cropTo3x4(src, cfg.crop3x4); }
        await src.resizeImage(SIZES[type].w, SIZES[type].h, DPI, constants.ResampleMethod.BICUBICSHARPER);
        const normal = targets.filter((t) => !t.rot);
        const rotated = targets.filter((t) => t.rot);
        if (normal.length) { app.activeDocument = src; await selectAll(); await copy(); await pasteInto(canvases, normal); }
        if (rotated.length) { app.activeDocument = src; await rotate270(); await selectAll(); await copy(); await pasteInto(canvases, rotated); }
      }
      await src.closeWithoutSaving();
    }

    if (cfg.autoSave) {
      const base = await entryAt(parentDir(cfg.saveFolder));
      if (!base) throw new Error('Không mở được thư mục ' + parentDir(cfg.saveFolder));
      const folder = await ensureSubfolder(base, cfg.saveFolder.split('\\').pop());
      for (let c = 0; c < canvases.length; c++) {
        const name = (c + 1 < 10 ? '0' : '') + (c + 1) + '.jpg';
        const file = await folder.createFile(name, { overwrite: true });
        await canvases[c].saveAs.jpg(file, { quality: 12, embedColorProfile: true }, true);
        await canvases[c].closeWithoutSaving();
        saved.push(name);
      }
    }
  }, { history: false });
  if (!ok) return;

  let msg = 'Đã xếp ' + (itemsFull.length + cardItems.length) + ' ảnh từ ' + sources.length + ' ảnh nguồn:\n';
  if (cardItems.length) msg += '  • Ảnh thẻ: ' + cardItems.length + ' ảnh → ' + cardSheets + ' trang ' + paper.name + '\n';
  if (itemsFull.length) msg += '  • Ảnh nguyên khổ: ' + itemsFull.length + ' ảnh → ' + fullSheets + ' trang ' + paper.name + '\n';
  if (cfg.autoSave) msg += '\nĐã lưu ' + saved.length + ' file (' + saved.join(', ') + ') vào:\n' + cfg.saveFolder;
  toast('Xếp ảnh xong');
  await alertBox(msg, 'Hoàn tất');
}

module.exports = { xepNhieuNguoi, computeLayout };
