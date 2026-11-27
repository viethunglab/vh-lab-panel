// Cài đặt panel: theme, mật độ nút, thư mục dữ liệu Ghép áo, hành vi khi chạy lệnh. Lưu localStorage.
'use strict';

const KEY = 'vhlab.settings.v1';

// Mỗi theme chỉ đổi màu nhấn; màu nền/chữ vẫn theo theme sáng/tối của Photoshop (xem css/style.css: body.theme-*).
const THEMES = [
  { id: 'champagne', name: 'Champagne', dark: '#d6b06b', light: '#9b7432' },
  { id: 'ocean', name: 'Đại dương', dark: '#5fb3d9', light: '#1f6f99' },
  { id: 'jade', name: 'Ngọc bích', dark: '#5cc5a0', light: '#1d7d5c' },
  { id: 'rose', name: 'Hồng phấn', dark: '#e59aa8', light: '#b0485d' },
  { id: 'lavender', name: 'Oải hương', dark: '#a99be6', light: '#5b4bb0' },
  { id: 'crimson', name: 'Đỏ VH', dark: '#e25c5c', light: '#b3261e' },
  { id: 'graphite', name: 'Than chì', dark: '#c8c8c8', light: '#4a4a4a' },
];

const DEFAULTS = {
  theme: 'champagne',
  density: 'normal',   // normal | compact
  history: true,       // gộp mỗi lần bấm thành 1 bước History
  interactive: true,   // ẩn thanh tiến trình của Photoshop khi lệnh chạy lâu
};

let current = null;

function load() {
  if (current) return current;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
  current = Object.assign({}, DEFAULTS, saved);
  if (!THEMES.some((t) => t.id === current.theme)) current.theme = DEFAULTS.theme;
  return current;
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(current)); } catch (e) { /* bỏ qua */ }
}

function get(name) { return load()[name]; }

function set(name, value) {
  load()[name] = value;
  save();
  apply();
}

function apply() {
  const s = load();
  const body = document.body;
  THEMES.forEach((t) => body.classList.toggle('theme-' + t.id, t.id === s.theme));
  body.classList.toggle('density-compact', s.density === 'compact');
}

module.exports = { THEMES, DEFAULTS, load, get, set, apply };
