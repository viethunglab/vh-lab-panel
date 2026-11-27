// Mở chương trình ngoài (thay tools/PassportPhotoPlugin.jsx – nút VISA).
'use strict';
const { shell } = require('uxp');
const { entryAt } = require('../files');
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

module.exports = { openPassportPhoto };
