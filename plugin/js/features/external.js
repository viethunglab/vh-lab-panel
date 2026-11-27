// Mở chương trình ngoài (thay tools/PassportPhotoPlugin.jsx – nút VISA).
'use strict';
const { shell } = require('uxp');
const { entryAt, lfs } = require('../files');
const { alertBox, toast } = require('../core');

const PASSPORT_EXE = 'C:\\ProgramData\\PassportPhotoPlugin\\App\\PassportPhotoPlugin.exe';

async function openPassportPhoto() {
  if (!(await entryAt(PASSPORT_EXE))) {
    await alertBox('Chưa cài Passport Photo Plugin.\nKhông tìm thấy:\n' + PASSPORT_EXE, 'VISA');
    return;
  }
  const err = await shell.openPath(PASSPORT_EXE, 'Mở Passport Photo Plugin để làm ảnh VISA');
  if (err) await alertBox('Không mở được Passport Photo Plugin:\n' + err, 'VISA');
  else toast('Đã mở Passport Photo Plugin');
}

// Reset Q-Dir: chạy scripts/Reset_QDir.bat đóng gói kèm plugin (đóng Q-Dir êm để lưu Tab, rồi mở lại).
async function resetQDir() {
  let bat;
  try {
    const root = await lfs.getPluginFolder();
    const dir = await root.getEntry('scripts');
    bat = await dir.getEntry('Reset_QDir.bat');
  } catch (e) {
    await alertBox('Không tìm thấy scripts\\Reset_QDir.bat trong thư mục plugin.', 'Reset Q-Dir');
    return;
  }
  const err = await shell.openPath(bat.nativePath, 'Khởi động lại Q-Dir (giữ nguyên các Tab đang mở)');
  if (err) await alertBox('Không chạy được Reset Q-Dir:\n' + err, 'Reset Q-Dir');
  else toast('Đang khởi động lại Q-Dir');
}

module.exports = { openPassportPhoto, resetQDir };
