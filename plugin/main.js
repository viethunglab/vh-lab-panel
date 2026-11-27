// Giao diện panel: 3 tab, mỗi tab chia nhóm; ô tìm nhanh lọc công cụ theo tên.
'use strict';
const { shell } = require('uxp');
const STEPS = require('./js/steps');
const { runSteps, requireDocument } = require('./js/core');
const save = require('./js/features/save');
const crop = require('./js/features/crop');
const xepanh = require('./js/features/xepanh');
const gallery = require('./js/features/gallery');
const external = require('./js/features/external');

const HOME_URL = 'https://www.facebook.com/hieuanhviethung';

// Lệnh tự sinh từ script cũ: chạy danh sách batchPlay trong steps.js.
// history=false cho các bố cục XẾP ẢNH vì chúng tạo/đóng tài liệu.
function steps(id, label, history) {
  return { id, label, run: () => { if (requireDocument()) return runSteps(label, STEPS[id], { history: history !== false }); } };
}
const fn = (id, label, run) => ({ id, label, run });
const layout = (pairs) => pairs.map(([id, label]) => steps(id, label, false));

// style: 'quick' = hàng 5 nút nhấn mạnh; 'feature' = nút lớn cả hàng; 'cards' = thẻ 2 cột; mặc định = lưới 3 cột.
const PAGES = {
  tools: [
    { title: 'Thao tác nhanh', style: 'quick', cmds: [
      steps('cameraraw', 'C-Raw'), fn('RT033', 'JPG', () => save.saveCopy('jpg')), fn('RT051', 'PNG', () => save.saveCopy('png')),
      steps('RT066', 'Gộp'), fn('D41', 'Crop', () => crop.crop10x15()),
    ] },
    { title: 'Chỉnh cơ bản', cmds: [
      steps('Q1', 'Xoay'), steps('Q2', 'Contrast'), steps('Q3', 'Unsharp'), steps('Q4', 'Level'),
      steps('Q5', 'Curves'), steps('Q6', 'Saturation'), steps('Q7', 'Trắng da'), steps('Q8', 'Soft Light'),
    ] },
    { title: 'Retouch chân dung', cmds: [
      steps('T13', 'Đẹp da'), steps('T23', 'SkinFiner'), steps('T5', 'Bóng da'), steps('T6', 'Đều màu da'),
      steps('T7', 'Đều sáng da'), steps('T8', 'Nổi khối'), steps('T11', 'Mụn mạnh'), steps('T12', 'Mụn nhẹ'),
      steps('T9', 'Sáng mắt'), steps('T2', 'Màu môi'), steps('T14', 'Tách tóc'), steps('T10', 'Nhăn áo'),
    ] },
    { title: 'Màu & độ nét', cmds: [
      steps('T18', 'Auto Contrast'), steps('K19', 'Tăng nét 2'), steps('T4', 'Upscale'),
      steps('a46', 'Ám vàng'), steps('a47', 'Ám đỏ'), steps('a48', 'Ám tím'),
    ] },
    { title: 'Nền & viền', cmds: [steps('T1', 'Màu nền'), steps('T15', 'Tạo viền'), steps('T16', 'Đổ nền')] },
    { title: 'Ảnh thẻ & tiện ích', cmds: [
      fn('T21', 'Đảng viên', () => crop.cropTheDangVien()), fn('T3', 'VISA', () => external.openPassportPhoto()),
      steps('T19', 'Gắn số'), steps('T22', 'Gắn số 2'), fn('T17', 'Lưu jpg', () => save.flattenAndSaveJpg()),
    ] },
  ],
  layout: [
    { title: 'Tự động', style: 'feature', cmds: [fn('L21', 'Xếp nhiều người…', () => xepanh.xepNhieuNguoi())] },
    { title: 'Ảnh thẻ', cmds: layout([['L1', '8 + 0'], ['L2', '8 + 0 (2)'], ['L3', '6 + 4'], ['L4', '5 + 6'],
      ['L5', '5 + 4 + 4'], ['L6', '4 + 8'], ['L7', '4 + 8 (2)'], ['L15', '4 + 6 + 4 (2)'], ['L19', '4 (2) + 8 (2)'],
      ['L8', '2 + 12'], ['L9', '2 + 12 (2)'], ['L10', '0 + 16']]) },
    { title: 'Khổ CP', cmds: layout([['L11', '4 + 0'], ['L12', '1 + 6'], ['L13', '0 + 8']]) },
    { title: 'Can phạm', cmds: layout([['L14', 'Can phạm'], ['L18', 'Can phạm 2']]) },
    { title: 'Bố cục khác', cmds: layout([['L16', '4 × (1+2)'], ['L17', '4 × (2+0)'], ['L20', 'Xe máy']]) },
  ],
  ghepao: [
    { title: 'Thư viện trang phục', style: 'cards',
      cmds: Object.entries(gallery.CATEGORIES).map(([id, c]) => fn(id, c.label, () => gallery.openCategory(id))) },
  ],
};

const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();

let busy = false;
async function runCmd(c, el) {
  if (busy) return;
  busy = true;
  document.body.classList.add('busy');
  el.classList.add('running');
  try { await c.run(); } finally {
    busy = false;
    document.body.classList.remove('busy');
    el.classList.remove('running');
  }
}

function render() {
  for (const [page, sections] of Object.entries(PAGES)) {
    const host = document.getElementById('page-' + page);
    const anchor = host.querySelector('.page-extra');
    for (const s of sections) {
      const sec = document.createElement('section');
      sec.className = 'section' + (s.style ? ' ' + s.style : '');
      const h = document.createElement('div');
      h.className = 'section-title';
      h.textContent = s.title;
      sec.appendChild(h);
      const grid = document.createElement('div');
      grid.className = 'grid';
      for (const c of s.cmds) {
        const el = document.createElement('div');
        el.className = 'cmd';
        el.id = 'cmd-' + c.id;
        el.title = c.label;
        el.tabIndex = 0;
        el.setAttribute('data-search', norm(c.label + ' ' + s.title));
        const t = document.createElement('span');
        t.className = 'cmd-label';
        t.textContent = c.label;
        el.appendChild(t);
        el.addEventListener('click', () => runCmd(c, el));
        el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') runCmd(c, el); });
        grid.appendChild(el);
      }
      sec.appendChild(grid);
      host.insertBefore(sec, anchor);
    }
  }
}

function applyFilter() {
  const q = norm(document.getElementById('filter').value.trim());
  const page = document.querySelector('.page.active');
  let shown = 0;
  page.querySelectorAll('.section').forEach((sec) => {
    let n = 0;
    sec.querySelectorAll('.cmd').forEach((el) => {
      const ok = !q || el.getAttribute('data-search').indexOf(q) >= 0;
      el.style.display = ok ? 'flex' : 'none';
      if (ok) n++;
    });
    sec.style.display = n ? 'flex' : 'none';
    shown += n;
  });
  document.getElementById('empty').style.display = shown ? 'none' : 'flex';
}

function initTabs() {
  document.querySelectorAll('.tab').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((o) => o.classList.toggle('active', o === t));
      document.querySelectorAll('.page').forEach((p) => p.classList.toggle('active', p.id === 'page-' + t.getAttribute('data-tab')));
      applyFilter();
    });
  });
}

function openHome() { shell.openExternal(HOME_URL, 'Mở trang Facebook Viet Hung Labs'); }

// Nút đóng hộp thoại (UXP không chạy được thuộc tính onclick viết trong HTML).
document.querySelectorAll('[data-close]').forEach((b) => {
  b.addEventListener('click', () => {
    let d = b.parentNode;
    while (d && d.tagName !== 'DIALOG') d = d.parentNode;
    if (d) d.close(b.getAttribute('data-close'));
  });
});

render();
initTabs();
gallery.showRoot();
document.getElementById('filter').addEventListener('input', applyFilter);
document.getElementById('gaChangeRoot').addEventListener('click', () => gallery.chooseRoot());
document.getElementById('brandLink').addEventListener('click', openHome);
document.getElementById('statusLink').addEventListener('click', openHome);
