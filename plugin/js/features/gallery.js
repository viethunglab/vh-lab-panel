// Tab GHÉP ÁO: thư viện ảnh xem trước -> đặt (Place Embedded) file dữ liệu vào ảnh đang mở.
// Thay cho 10 file jsx/data/*.jsx (JSXBIN) của bản CEP.
// Cấu trúc thư mục:  <gốc>\<NHÓM>\VIEW\DU LIEU\<mục>\<tên>.png   (ảnh xem trước)
//                    <gốc>\<NHÓM>\DU LIEU\<mục>\<tên>.png|.psd   (file ghép thật, cùng tên)
'use strict';
const { app } = require('photoshop');
const { runModal, play, requireDocument, toast, alertBox } = require('../core');
const { lfs, entryAt, sessionToken, readAsDataUrl } = require('../files');

const ROOT_KEY = 'vhlab.ghepAo.root';
const DEFAULT_ROOT = 'D:\\TRINH GIA\\TU LIEU LAM ANH\\PANEL\\DATA';
const CATEGORIES = {
  D1: { label: 'CÔNG AN', folder: 'CONG AN' },
  D2: { label: 'BỘ ĐỘI', folder: 'BO DOI' },
  D3: { label: 'SƠ MI', folder: 'SO MI' },
  D4: { label: 'VEST', folder: 'VEST' },
  D5: { label: 'HỌC SINH', folder: 'HOC SINH' },
  D6: { label: 'ÁO DÀI', folder: 'AO DAI' },
  D7: { label: 'HUY HIỆU', folder: 'HUY HIEU' },
  D8: { label: 'VIỆT HƯNG', folder: 'VIET HUNG' },
  D9: { label: 'NGÀNH KHÁC', folder: 'DONG PHUC KHAC' },
  D10: { label: 'TỔNG HỢP', folder: 'TONG HOP' },
};
const DATA_EXT = ['.png', '.psd', '.psb', '.jpg', '.jpeg', '.tif', '.tiff'];
const $ = (sel) => document.querySelector(sel);

function getRoot() { try { return localStorage.getItem(ROOT_KEY) || DEFAULT_ROOT; } catch (e) { return DEFAULT_ROOT; } }
function setRoot(p) { try { localStorage.setItem(ROOT_KEY, p); } catch (e) { /* bỏ qua */ } }

async function chooseRoot() {
  const f = await lfs.getFolder();
  if (!f) return;
  setRoot(f.nativePath);
  showRoot();
  toast('Thư mục GHÉP ÁO: ' + f.nativePath);
}
function showRoot() { const el = $('#gaRoot'); if (el) el.textContent = getRoot(); }

const stem = (name) => name.replace(/\.[^.]+$/, '').toLowerCase();
const extOf = (name) => (name.match(/\.[^.]+$/) || [''])[0].toLowerCase();

async function subFolders(folder) {
  if (!folder) return [];
  return (await folder.getEntries()).filter((e) => e.isFolder).sort((a, b) => a.name.localeCompare(b.name, 'vi', { numeric: true }));
}

async function placeFile(entry) {
  await runModal('Ghép: ' + entry.name, async () => {
    await play({ _obj: 'placeEvent', null: { _path: sessionToken(entry), _kind: 'local' },
      freeTransformCenterState: { _enum: 'quadCenterState', _value: 'QCSAverage' },
      offset: { _obj: 'offset', horizontal: { _unit: 'pixelsUnit', _value: 0 }, vertical: { _unit: 'pixelsUnit', _value: 0 } },
      _options: { dialogOptions: 'dontDisplay' } });
  });
}

let loadToken = 0;
async function openCategory(id) {
  if (!requireDocument()) return;
  const cat = CATEGORIES[id];
  const root = getRoot();
  const base = await entryAt(root + '\\' + cat.folder);
  if (!base) {
    await alertBox('Không tìm thấy thư mục:\n' + root + '\\' + cat.folder + '\n\nBấm "Đổi thư mục" ở tab GHÉP ÁO để chọn thư mục DATA.', 'GHÉP ÁO');
    return;
  }
  const viewRoot = await entryAt(root + '\\' + cat.folder + '\\VIEW\\DU LIEU');
  const dataRoot = await entryAt(root + '\\' + cat.folder + '\\DU LIEU');
  const subs = await subFolders(viewRoot);
  if (!subs.length || !dataRoot) {
    await alertBox('Thư mục ' + cat.folder + ' chưa đúng cấu trúc VIEW\\DU LIEU\\<mục> và DU LIEU\\<mục>.', 'GHÉP ÁO');
    return;
  }

  const dlg = document.getElementById('dlgGallery');
  const tabs = $('#gaTabs');
  const grid = $('#gaGrid');
  const status = $('#gaStatus');
  let chosen = null;

  async function showSub(sub) {
    const my = ++loadToken;
    Array.from(tabs.children).forEach((b) => b.classList.toggle('active', b.dataset.name === sub.name));
    grid.innerHTML = '';
    status.textContent = 'Đang tải ' + sub.name + '…';
    const dataDir = (await subFolders(dataRoot)).find((d) => d.name.toLowerCase() === sub.name.toLowerCase());
    const dataFiles = dataDir ? (await dataDir.getEntries()).filter((e) => e.isFile && DATA_EXT.includes(extOf(e.name))) : [];
    const byStem = {};
    for (const f of dataFiles) {
      const k = stem(f.name);
      // Ưu tiên PSD (giữ lớp) nếu có cả PSD và PNG cùng tên
      if (!byStem[k] || extOf(f.name) === '.psd') byStem[k] = f;
    }
    const views = (await sub.getEntries()).filter((e) => e.isFile && /\.(png|jpe?g)$/i.test(e.name))
      .sort((a, b) => a.name.localeCompare(b.name, 'vi', { numeric: true }));
    let shown = 0;
    for (const v of views) {
      if (my !== loadToken) return; // đã chuyển sang mục khác
      const data = byStem[stem(v.name)];
      if (!data) continue;
      const cell = document.createElement('div');
      cell.className = 'ga-cell';
      cell.title = data.name;
      const img = document.createElement('img');
      const cap = document.createElement('div');
      cap.className = 'ga-cap';
      cap.textContent = stem(v.name);
      cell.appendChild(img);
      cell.appendChild(cap);
      cell.onclick = () => { chosen = data; dlg.close('place'); };
      grid.appendChild(cell);
      shown++;
      try { img.src = await readAsDataUrl(v); } catch (e) { cap.textContent += ' (lỗi ảnh)'; }
    }
    if (my === loadToken) status.textContent = sub.name + ': ' + shown + ' mẫu. Bấm vào một mẫu để ghép.';
  }

  tabs.innerHTML = '';
  for (const s of subs) {
    const b = document.createElement('button');
    b.className = 'ga-tab';
    b.dataset.name = s.name;
    b.textContent = s.name;
    b.onclick = () => showSub(s);
    tabs.appendChild(b);
  }
  showSub(subs[0]);
  const r = await dlg.uxpShowModal({ title: 'GHÉP ÁO – ' + cat.label, resize: 'both', size: { width: 760, height: 600 } });
  loadToken++;
  grid.innerHTML = '';
  if (r === 'place' && chosen) await placeFile(chosen);
}

module.exports = { CATEGORIES, openCategory, chooseRoot, showRoot, getRoot };
