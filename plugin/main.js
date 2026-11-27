// Giao diện panel: 3 tab, mỗi tab chia nhóm công cụ.
'use strict';
const { shell } = require('uxp');
const STEPS = require('./js/steps');
const { runSteps, requireDocument } = require('./js/core');
const save = require('./js/features/save');
const crop = require('./js/features/crop');
const xepanh = require('./js/features/xepanh');
const gallery = require('./js/features/gallery');
const external = require('./js/features/external');
const arrange = require('./js/arrange');
const settings = require('./js/settings');
const { showDialog } = require('./js/core');

const HOME_URL = 'https://www.facebook.com/hieuanhviethung';

// Lệnh tự sinh từ script cũ: chạy danh sách batchPlay trong steps.js.
// Bố cục XẾP ẢNH cũng gộp History trên ảnh nguồn: Photoshop không phải ghi từng bước nên chạy nhanh hơn.
// Bố cục có bước đóng tài liệu thì không gộp History (tránh đóng tài liệu đang bị tạm dừng History).
const closesDocs = (id) => (STEPS[id] || []).some((s) => s._obj === 'close');
function steps(id, label, history) {
  const hist = history !== false && !closesDocs(id);
  return { id, label, run: () => { if (requireDocument()) return runSteps(label, STEPS[id], { history: hist }); } };
}
const fn = (id, label, run) => ({ id, label, run });
const layout = (pairs) => pairs.map(([id, label]) => steps(id, label));

// style: 'quick' = hàng 5 nút nhấn mạnh; 'feature' = nút lớn cả hàng; 'cards' = thẻ 2 cột; mặc định = lưới 3 cột.
const PAGES = {
  // Tab Công cụ: không chia nhóm, giữ thứ tự nút như bản cũ.
  tools: [
    { style: 'quick', cmds: [
      steps('cameraraw', 'C-Raw'), fn('RT033', 'JPG', () => save.saveCopy('jpg')), fn('RT051', 'PNG', () => save.saveCopy('png')),
      steps('RT066', 'Gộp'), fn('D41', 'Crop', () => crop.crop10x15()),
    ] },
    { cmds: [
      steps('Q1', 'Xoay'), steps('Q2', 'Contrast'), steps('Q3', 'Unsharp'), steps('Q4', 'Level'),
      steps('Q5', 'Curves'), steps('Q6', 'Saturation'), steps('Q8', 'Soft Light'),
      steps('T1', 'Màu nền'), steps('T2', 'Màu môi'), fn('T3', 'VISA', () => external.openPassportPhoto()),
      steps('T5', 'Bóng da'), steps('T6', 'Đều màu da'), steps('T7', 'Đều sáng da'), steps('T8', 'Nổi khối'),
      steps('T9', 'Sáng mắt'), steps('T10', 'Nhăn áo'), steps('T11', 'Mụn mạnh'), steps('T12', 'Mụn nhẹ'),
      steps('T13', 'Đẹp da'), steps('T15', 'Tạo viền'), steps('T16', 'Đổ nền'),
      steps('T19', 'Gắn số'), steps('T22', 'Gắn số 2'), fn('T21', 'Đảng viên', () => crop.cropTheDangVien()),
      steps('a46', 'Ám vàng'), steps('a47', 'Ám đỏ'), steps('a48', 'Ám tím'),
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

let busy = false;
async function runCmd(c, el) {
  if (busy || arrange.isArranging()) return; // chế độ Sắp xếp: bấm nút không chạy lệnh
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
  document.querySelectorAll('.section').forEach((s) => s.parentNode.removeChild(s));
  for (const [page, sections] of Object.entries(PAGES)) {
    const host = document.getElementById('page-' + page);
    const anchor = host.querySelector('.page-extra');
    sections.forEach((s, si) => {
      const group = page + ':' + si;
      const sec = document.createElement('section');
      sec.className = 'section' + (s.style ? ' ' + s.style : '');
      if (s.title) {
        const h = document.createElement('div');
        h.className = 'section-title';
        h.textContent = s.title;
        sec.appendChild(h);
      }
      const grid = document.createElement('div');
      grid.className = 'grid';
      grid.setAttribute('data-group', group);
      for (const c of arrange.applyOrder(group, s.cmds)) {
        const el = document.createElement('div');
        el.className = 'cmd';
        el.id = 'cmd-' + c.id;
        el.setAttribute('data-id', c.id);
        el.title = c.label;
        el.tabIndex = 0;
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
    });
  }
}

function initTabs() {
  document.querySelectorAll('.tab').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((o) => o.classList.toggle('active', o === t));
      document.querySelectorAll('.page').forEach((p) => p.classList.toggle('active', p.id === 'page-' + t.getAttribute('data-tab')));
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

// Cuộn bằng con lăn chuột. Photoshop 27.11+ có lỗi: khi bật Preferences > Tools > "Zoom with Scroll Wheel",
// panel UXP không tự cuộn (phải giữ Alt). Nếu sự kiện wheel vẫn tới panel mà vùng cuộn không nhúc nhích,
// tự cuộn bằng tay; nếu Photoshop đã cuộn thì không làm gì để tránh cuộn hai lần.
function initWheelFallback() {
  const box = document.getElementById('app');
  box.addEventListener('wheel', (e) => {
    const before = box.scrollTop;
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    setTimeout(() => { if (box.scrollTop === before) box.scrollTop = before + dy; }, 0);
  });
}

render();
arrange.init({ onReset: render });
initTabs();
initWheelFallback();
// ---------------- Cài đặt ----------------
function refreshSettingsUI() {
  const s = settings.load();
  document.querySelectorAll('#setThemes .swatch').forEach((el) => el.classList.toggle('active', el.getAttribute('data-theme') === s.theme));
  document.querySelectorAll('.seg-opt').forEach((el) => el.classList.toggle('active', el.getAttribute('data-density') === s.density));
  document.getElementById('setHistory').checked = s.history !== false;
  document.getElementById('setInteractive').checked = s.interactive !== false;
  gallery.showRoot();
}

function initSettings() {
  const box = document.getElementById('setThemes');
  for (const t of settings.THEMES) {
    const el = document.createElement('div');
    el.className = 'swatch';
    el.setAttribute('data-theme', t.id);
    el.title = t.name;
    const dot = document.createElement('div');
    dot.className = 'swatch-dot';
    dot.style.backgroundColor = t.dark;
    const name = document.createElement('div');
    name.className = 'swatch-name';
    name.textContent = t.name;
    el.appendChild(dot);
    el.appendChild(name);
    el.addEventListener('click', () => { settings.set('theme', t.id); refreshSettingsUI(); });
    box.appendChild(el);
  }
  document.querySelectorAll('.seg-opt').forEach((el) => {
    el.addEventListener('click', () => { settings.set('density', el.getAttribute('data-density')); refreshSettingsUI(); });
  });
  document.getElementById('setHistory').addEventListener('change', (e) => settings.set('history', e.target.checked));
  document.getElementById('setInteractive').addEventListener('change', (e) => settings.set('interactive', e.target.checked));
  document.getElementById('gaChangeRoot').addEventListener('click', () => gallery.chooseRoot());
  document.getElementById('gaResetRoot').addEventListener('click', () => gallery.resetRoot());
  document.getElementById('setResetOrder').addEventListener('click', () => { arrange.resetOrders(); render(); });
  document.getElementById('setFacebook').addEventListener('click', openHome);
  document.getElementById('btnSettings').addEventListener('click', async () => {
    refreshSettingsUI();
    await showDialog('dlgSettings', 'Cài đặt VH Lab', { width: 420, height: 640 });
  });
}

settings.apply();
initSettings();
