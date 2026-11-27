// Lưu JPG / PNG (thay save-jpg.jsx, save-png.jsx).
'use strict';
const { app } = require('photoshop');
const { runModal, requireDocument, toast } = require('../core');
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


module.exports = { saveCopy };
