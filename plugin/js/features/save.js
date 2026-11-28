// Lưu JPG / PNG (thay save-jpg.jsx, save-png.jsx).
'use strict';
const { app, constants } = require('photoshop');
const { runModal, requireDocument, toast, alertBox } = require('../core');
const { lfs } = require('../files');

function baseName(doc) {
  return String(doc.title || doc.name || 'anh').replace(/\.[^.]+$/, '');
}

async function askFile(kind) {
  // Hộp thoại lưu của hệ điều hành tự hỏi khi trùng tên file.
  return lfs.getFileForSaving(baseName(app.activeDocument) + '.' + kind, { types: [kind] });
}

// Lưu bản sao, chất lượng cao nhất (JPG quality 12, PNG không nén).
async function saveCopy(kind) {
  if (!requireDocument()) return;
  const file = await askFile(kind);
  if (!file) return;
  const ok = await runModal('Lưu ' + kind.toUpperCase(), async () => {
    const doc = app.activeDocument;
    if (kind === 'jpg') await doc.saveAs.jpg(file, { quality: 12, embedColorProfile: true }, true);
    else await doc.saveAs.png(file, { compression: 0, interlaced: false }, true);
  }, { history: false });
  if (ok) toast('Đã lưu ' + file.name);
}

// Lưu tất cả file đang mở thành JPG (quality 12) vào một thư mục, đặt tên 01.jpg, 02.jpg, … theo thứ tự tab.
// Thư mục đã có sẵn ảnh đánh số thì đánh tiếp từ số lớn nhất để không ghi đè file cũ.
// File 16/32-bit (JPG không hỗ trợ): lưu qua bản sao tạm chuyển 8-bit rồi đóng bản sao.
async function saveAllJpg() {
  const docs = Array.from(app.documents || []);
  if (!docs.length) { toast('Chưa mở ảnh nào.', 'error'); return; }
  const folder = await lfs.getFolder();
  if (!folder) return;

  let start = 1;
  try {
    for (const e of await folder.getEntries()) {
      const m = /^(\d+)\.jpe?g$/i.exec(e.name);
      if (m && !e.isFolder) start = Math.max(start, parseInt(m[1], 10) + 1);
    }
  } catch (e) { /* không đọc được danh sách: bắt đầu từ 01 */ }
  const width = Math.max(2, String(start + docs.length - 1).length);
  const pad = (n) => String(n).padStart(width, '0');

  const saved = [];
  const failed = [];
  await runModal('Lưu tất cả JPG', async () => {
    let n = start;
    for (const doc of docs) {
      const name = pad(n) + '.jpg';
      try {
        const file = await folder.createFile(name, { overwrite: false });
        try {
          await doc.saveAs.jpg(file, { quality: 12, embedColorProfile: true }, true);
        } catch (err) {
          const tmp = await doc.duplicate();
          try {
            tmp.bitsPerChannel = constants.BitsPerChannelType.EIGHT;
            await tmp.saveAs.jpg(file, { quality: 12, embedColorProfile: true }, true);
          } finally {
            await tmp.closeWithoutSaving();
          }
        }
        saved.push(name);
        n++;
      } catch (err) {
        failed.push((doc.title || doc.name) + ': ' + (err && err.message ? err.message : err));
      }
    }
  }, { history: false });

  if (failed.length) toast('Đã lưu ' + saved.length + ' file vào ' + folder.name + '. Không lưu được:\n' + failed.join('\n'), 'error');
  else if (saved.length) alertBox('Đã lưu ' + saved.length + ' file (' + saved[0] + ' – ' + saved[saved.length - 1] + ') vào thư mục ' + folder.name + '.', 'Lưu tất cả JPG');
}

module.exports = { saveCopy, saveAllJpg };
