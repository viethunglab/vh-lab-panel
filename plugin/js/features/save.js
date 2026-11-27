// Lưu JPG / PNG (thay save-jpg.jsx, save-png.jsx) và "Lưu jpg" (gộp lớp rồi lưu, thay tools/17.jsx).
'use strict';
const { app } = require('photoshop');
const { runModal, play, requireDocument, toast } = require('../core');
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

// Gộp lớp (Flatten) rồi lưu thành JPG. Bản cũ ghi cứng vào /d/TRINH GIA/HANG NGAY/2024/09/15/01/NAME.jpg.
async function flattenAndSaveJpg() {
  if (!requireDocument()) return;
  const file = await askFile('jpg');
  if (!file) return;
  const ok = await runModal('Gộp & lưu JPG', async () => {
    await play({ _obj: 'flattenImage', _options: { dialogOptions: 'dontDisplay' } });
    await app.activeDocument.saveAs.jpg(file, { quality: 12, embedColorProfile: true }, false);
  }, { history: false });
  if (ok) toast('Đã lưu ' + file.name);
}

module.exports = { saveCopy, flattenAndSaveJpg };
