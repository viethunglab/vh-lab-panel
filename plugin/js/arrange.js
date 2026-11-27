// Chế độ "Sắp xếp": kéo thả để đổi vị trí nút trong từng nhóm; lưu thứ tự trên máy (localStorage).
// Không dùng HTML5 drag & drop (trong UXP các sự kiện dragover/drop không chạy ổn định) mà tự xử lý chuột:
// nhấn giữ -> di chuyển quá 4 px thì bắt đầu kéo -> nút đi theo vị trí con trỏ ngay trong lưới -> nhả chuột để lưu.
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
  if (btn) btn.textContent = on ? 'Xong' : 'Sắp xếp';
}

// ---------------- Kéo thả ----------------
const hasPointer = typeof window.PointerEvent !== 'undefined';
const EV = hasPointer
  ? { down: 'pointerdown', move: 'pointermove', up: 'pointerup', cancel: 'pointercancel' }
  : { down: 'mousedown', move: 'mousemove', up: 'mouseup', cancel: 'mouseleave' };

let drag = null; // { el, grid, startX, startY, active, lastX, lastY, timer }

function cellUnder(grid, x, y, except) {
  let best = null;
  let bestD = Infinity;
  for (const el of Array.from(grid.children)) {
    if (el === except) continue;
    const r = el.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return { el, r };
    const cx = Math.max(r.left, Math.min(x, r.right));
    const cy = Math.max(r.top, Math.min(y, r.bottom));
    const d = (cx - x) * (cx - x) + (cy - y) * (cy - y);
    if (d < bestD) { bestD = d; best = { el, r }; }
  }
  return best;
}

function moveTo(x, y) {
  const { el, grid } = drag;
  const hit = cellUnder(grid, x, y, el);
  if (!hit) return;
  const r = hit.r;
  // Trước hay sau ô đích: theo nửa trái/phải; nếu con trỏ ở hẳn trên/dưới hàng đó thì theo trên/dưới.
  let after;
  if (y < r.top) after = false;
  else if (y > r.bottom) after = true;
  else after = x > r.left + r.width / 2;
  const ref = after ? hit.el.nextSibling : hit.el;
  if (ref !== el && el.nextSibling !== ref) grid.insertBefore(el, ref);
}

function autoScroll() {
  if (!drag || !drag.active) return;
  const box = document.getElementById('app');
  const r = box.getBoundingClientRect();
  let dy = 0;
  if (drag.lastY < r.top + EDGE) dy = -SCROLL_STEP;
  else if (drag.lastY > r.bottom - EDGE) dy = SCROLL_STEP;
  if (dy) {
    box.scrollTop += dy;
    moveTo(drag.lastX, drag.lastY);
  }
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
    drag.active = true;
    drag.el.classList.add('dragging');
    document.body.classList.add('drag-active');
    drag.timer = setInterval(autoScroll, 30);
  }
  moveTo(e.clientX, e.clientY);
  e.preventDefault();
}

function onUp() {
  if (!drag) return;
  const d = drag;
  drag = null;
  if (d.timer) clearInterval(d.timer);
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
