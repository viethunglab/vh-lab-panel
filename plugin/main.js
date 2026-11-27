// Giao diện panel: 3 tab, gắn nút với lệnh.
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
  return { id, label, run: () => { if (requireDocument()) runSteps(label, STEPS[id], { history: history !== false }); } };
}
const fn = (id, label, run, cls) => ({ id, label, run, cls });

const GROUPS = {
  'grid-top': [
    Object.assign(steps('cameraraw', 'C-Raw'), { cls: 'accent' }),
    fn('RT033', 'JPG', () => save.saveCopy('jpg'), 'accent'),
    fn('RT051', 'PNG', () => save.saveCopy('png'), 'accent'),
    Object.assign(steps('RT066', 'Gộp'), { cls: 'accent' }),
    fn('D41', 'Crop', () => crop.crop10x15(), 'accent'),
  ],
  'grid-quick': [
    steps('Q1', 'Xoay'), steps('Q2', 'Contrast'), steps('Q3', 'Unsharp Mask'), steps('Q4', 'Level'),
    steps('Q5', 'Curves'), steps('Q6', 'Saturation'), steps('Q7', 'Trắng da'), steps('Q8', 'Soft Light'),
  ],
  'grid-tools': [
    steps('T1', 'Màu nền'), steps('T2', 'Màu môi'), fn('T3', 'VISA', () => external.openPassportPhoto()),
    steps('T4', 'Upscale'), steps('T5', 'Bóng da'), steps('T6', 'Đều màu da'), steps('T7', 'Đều sáng da'),
    steps('T8', 'Nổi khối'), steps('T9', 'Sáng mắt'), steps('T10', 'Nhăn áo'), steps('T11', 'Mụn mạnh'),
    steps('T12', 'Mụn nhẹ'), steps('T13', 'Đẹp da'), steps('T23', 'SkinFiner'), steps('T14', 'Tách tóc'),
    steps('T15', 'Tạo viền'), steps('T16', 'Đổ nền'), fn('T17', 'Lưu jpg', () => save.flattenAndSaveJpg()),
    steps('T18', 'Auto Contrast'), steps('T19', 'Gắn số'), steps('T22', 'Gắn số 2'),
    fn('T21', 'Đảng viên', () => crop.cropTheDangVien()),
    steps('K19', 'Tăng nét 2'), steps('a46', 'Ám vàng'), steps('a47', 'Ám đỏ'), steps('a48', 'Ám tím'),
  ],
  'grid-layout': [
    ['L1', '8 + 0'], ['L2', '8 + 0 (2)'], ['L3', '6 + 4'], ['L4', '5 + 6'], ['L5', '5 + 4 + 4'], ['L6', '4 + 8'],
    ['L7', '4 + 8 (2)'], ['L15', '4 + 6 + 4 (2)'], ['L19', '4 (2) + 8 (2)'], ['L8', '2 + 12'], ['L9', '2 + 12 (2)'],
    ['L10', '0 + 16'], ['L11', '(CP) 4 + 0'], ['L12', '(CP) 1 + 6'], ['L13', '(CP) 0 + 8'], ['L14', 'Can phạm'],
    ['L18', 'Can phạm 2'], ['L16', '4x(1+2)'], ['L17', '4x(2+0)'], ['L20', 'Xe máy'],
  ].map(([id, label]) => steps(id, label, false)).concat([fn('L21', 'Nhiều người', () => xepanh.xepNhieuNguoi())]),
  'grid-ghepao': Object.entries(gallery.CATEGORIES).map(([id, c]) => fn(id, c.label, () => gallery.openCategory(id))),
};

let busy = false;
function render() {
  for (const [gridId, cmds] of Object.entries(GROUPS)) {
    const grid = document.getElementById(gridId);
    for (const c of cmds) {
      const b = document.createElement('button');
      b.className = 'cmd' + (c.cls ? ' ' + c.cls : '');
      b.id = 'cmd-' + c.id;
      b.textContent = c.label;
      b.title = c.label;
      b.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        document.body.classList.add('busy');
        try { await c.run(); } finally { busy = false; document.body.classList.remove('busy'); }
      });
      grid.appendChild(b);
    }
  }
}

function initTabs() {
  document.querySelectorAll('.tab').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((o) => o.classList.toggle('active', o === t));
      document.querySelectorAll('.page').forEach((p) => p.classList.toggle('active', p.id === 'page-' + t.dataset.tab));
    });
  });
}

function openHome() { shell.openExternal(HOME_URL, 'Mở trang Facebook Viet Hung Labs'); }

render();
initTabs();
gallery.showRoot();
document.getElementById('gaChangeRoot').addEventListener('click', () => gallery.chooseRoot());
document.getElementById('header').addEventListener('click', openHome);
document.getElementById('footer').addEventListener('click', openHome);
