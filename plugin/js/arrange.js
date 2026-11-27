// Chế độ "Sắp xếp": kéo thả để đổi vị trí nút trong từng nhóm; lưu thứ tự trên máy (localStorage).
// Không dùng HTML5 drag & drop (trong UXP các sự kiện dragover/drop không chạy ổn định) mà tự xử lý chuột:
// nhấn giữ -> di chuyển quá 4 px thì bắt đầu kéo -> ô trống dời theo con trỏ, các nút dồn/giãn -> nhả chuột để lưu.
'use strict';

const ORDER_KEY = 'vhlab.order.v1';
const DRAG_THRESHOLD = 4;  // px trước khi coi là kéo
const EDGE = 36;           // px sát mép trên/dưới thì tự cuộn
const SCROLL_STEP = 12;

function loadOrders() {
  try { return JSON.parse(localStorage.getItem(ORDER_KEY) || '{}') || {}; } catch (e) { return {}; }
}
function saveOrders(o) {
  try { localStorage.setItem(ORDER_KEY, JSON.stringify(o)); } catch (e) { /* bỏ qua */ }
}
function resetOrders() {
  try { localStorage.removeItem(ORDER_KEY); } catch (e) { /* bỏ qua */ }
}

// Sắp xếp danh sách lệnh theo thứ tự đã lưu. Nút mới (chưa có trong thứ tự đã lưu) nằm cuối nhóm,
// nút đã bị bỏ khỏi plugin thì tự biến mất khỏi thứ tự.
function applyOrder(groupKey, cmds) {
  const saved = loadOrders()[groupKey];
  if (!Array.isArray(saved) || !saved.length) return cmds.slice();
  const pos = {};
  saved.forEach((id, i) => { pos[id] = i; });
  return cmds.map((c, i) => ({ c, i })).sort((a, b) => {
    const pa = pos[a.c.id] !== undefined ? pos[a.c.id] : 1e6 + a.i;
    const pb = pos[b.c.id] !== undefined ? pos[b.c.id] : 1e6 + b.i;
    return pa - pb;
  }).map((x) => x.c);
}

function saveGrid(grid) {
  const key = grid.getAttribute('data-group');
  const ids = Array.from(grid.children).map((el) => el.getAttribute('data-id')).filter(Boolean);
  const o = loadOrders();
  o[key] = ids;
  saveOrders(o);
}

let arranging = false;
const isArranging = () => arranging;

function setArranging(on) {
  arranging = on;
  document.body.classList.toggle('arranging', on);
  const btn = document.getElementById('btnArrange');
  if (btn) btn.title = on ? 'Xong – thoát chế độ sắp xếp' : 'Sắp xếp nút (kéo thả để đổi vị trí)';
}

// ---------------- Kéo thả ----------------
// Cách làm: khi bắt đầu kéo, ghi lại vị trí các "ô" (slot) của lưới. Vì các ô cùng kích thước và lưới không đổi,
// vị trí ô cố định trong suốt lần kéo -> chỉ số ô đích tính ổn định, không nhảy qua lại.
// Nút đang kéo để lại một ô trống (viền đứt) tại vị trí sẽ thả; các nút khác dồn/giãn từng ô theo thứ tự đọc.
// Một bản sao mờ của nút đi theo con trỏ.
const hasPointer = typeof window.PointerEvent !== 'undefined';
const EV = hasPointer
  ? { down: 'pointerdown', move: 'pointermove', up: 'pointerup', cancel: 'pointercancel' }
  : { down: 'mousedown', move: 'mousemove', up: 'mouseup', cancel: 'mouseleave' };

let drag = null;

function slotIndexAt(x, y) {
  const g = drag.grid.getBoundingClientRect();
  const lx = x - g.left;
  const ly = y - g.top;
  // Ô chứa con trỏ; nếu con trỏ ở khe giữa các ô thì giữ nguyên chỉ số hiện tại (tránh nhấp nháy).
  for (let i = 0; i < drag.slots.length; i++) {
    const r = drag.slots[i];
    if (lx >= r.left && lx <= r.right && ly >= r.top && ly <= r.bottom) return i;
  }
  const first = drag.slots[0];
  const last = drag.slots[drag.slots.length - 1];
  if (ly < first.top) return 0;
  if (ly > last.bottom) return drag.slots.length - 1;
  return drag.index;
}

function placeAt(index) {
  if (index === drag.index) return;
  const others = Array.from(drag.grid.children).filter((c) => c !== drag.el);
  drag.grid.insertBefore(drag.el, others[index] || null);
  drag.index = index;
}

function moveGhost(x, y) {
  const box = document.getElementById('app');
  const b = box.getBoundingClientRect();
  drag.ghost.style.left = (x - b.left + box.scrollLeft - drag.offX) + 'px';
  drag.ghost.style.top = (y - b.top + box.scrollTop - drag.offY) + 'px';
}

function update(x, y) {
  moveGhost(x, y);
  placeAt(slotIndexAt(x, y));
}

function autoScroll() {
  if (!drag || !drag.active) return;
  const box = document.getElementById('app');
  const r = box.getBoundingClientRect();
  let dy = 0;
  if (drag.lastY < r.top + EDGE) dy = -SCROLL_STEP;
  else if (drag.lastY > r.bottom - EDGE) dy = SCROLL_STEP;
  if (dy) {
    const before = box.scrollTop;
    box.scrollTop = before + dy;
    if (box.scrollTop !== before) update(drag.lastX, drag.lastY);
  }
}

function startDrag() {
  const { el, grid } = drag;
  const g = grid.getBoundingClientRect();
  drag.slots = Array.from(grid.children).map((c) => {
    const r = c.getBoundingClientRect();
    return { left: r.left - g.left, top: r.top - g.top, right: r.right - g.left, bottom: r.bottom - g.top };
  });
  drag.index = Array.from(grid.children).indexOf(el);
  const r = el.getBoundingClientRect();
  drag.offX = drag.startX - r.left;
  drag.offY = drag.startY - r.top;
  const ghost = el.cloneNode(true);
  ghost.removeAttribute('id');
  ghost.classList.add('drag-ghost');
  ghost.style.width = r.width + 'px';
  ghost.style.height = r.height + 'px';
  document.getElementById('app').appendChild(ghost);
  drag.ghost = ghost;
  el.classList.add('dragging');
  document.body.classList.add('drag-active');
  drag.active = true;
  drag.timer = setInterval(autoScroll, 30);
}

function onDown(e) {
  if (!arranging || drag) return;
  if (e.button !== undefined && e.button !== 0) return;
  let el = e.target;
  while (el && !(el.classList && el.classList.contains('cmd'))) el = el.parentNode;
  if (!el || !el.parentNode || !el.parentNode.getAttribute('data-group')) return;
  drag = { el, grid: el.parentNode, startX: e.clientX, startY: e.clientY, lastX: e.clientX, lastY: e.clientY, active: false, timer: null };
  if (hasPointer && el.setPointerCapture && e.pointerId !== undefined) {
    try { el.setPointerCapture(e.pointerId); } catch (err) { /* không hỗ trợ */ }
  }
  e.preventDefault();
}

function onMove(e) {
  if (!drag) return;
  drag.lastX = e.clientX;
  drag.lastY = e.clientY;
  if (!drag.active) {
    if (Math.abs(e.clientX - drag.startX) < DRAG_THRESHOLD && Math.abs(e.clientY - drag.startY) < DRAG_THRESHOLD) return;
    startDrag();
  }
  update(e.clientX, e.clientY);
  e.preventDefault();
}

function onUp() {
  if (!drag) return;
  const d = drag;
  drag = null;
  if (d.timer) clearInterval(d.timer);
  if (d.ghost && d.ghost.parentNode) d.ghost.parentNode.removeChild(d.ghost);
  d.el.classList.remove('dragging');
  document.body.classList.remove('drag-active');
  if (d.active) saveGrid(d.grid);
}

function init({ onReset }) {
  document.addEventListener(EV.down, onDown);
  document.addEventListener(EV.move, onMove);
  document.addEventListener(EV.up, onUp);
  document.addEventListener(EV.cancel, onUp);
  document.getElementById('btnArrange').addEventListener('click', () => setArranging(!arranging));
  document.getElementById('btnResetOrder').addEventListener('click', () => {
    resetOrders();
    onReset();
  });
}

module.exports = { init, applyOrder, isArranging };
