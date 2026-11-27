// Sinh plugin/js/steps.js từ các script JSX gốc (bản CEP, nhánh cep-legacy-v3.1).
// Dùng: node tools/build_steps.js <thư mục jsx gốc> <file đầu ra>
'use strict';
const fs = require('fs');
const path = require('path');
const { convert } = require('./am2batchplay');

const SRC = process.argv[2];
const OUT = process.argv[3];
const read = (p) => fs.readFileSync(path.join(SRC, p), 'utf8');
const conv = (p) => convert(read(p), p);

// Các action trong bộ "Tool" mà script XẾP ẢNH gọi bằng lệnh Play -> nhúng thẳng bước tương ứng.
const INLINE_ACTIONS = {
  'Tool/Màu nền': conv('tools/1.jsx'),
  'Tool/Tạo viền': conv('tools/15.jsx'),
  'Tool/Flatten Image': [{ _obj: 'flattenImage', _options: { dialogOptions: 'dontDisplay' } }],
};
function inlinePlays(steps, id) {
  const out = [];
  for (const s of steps) {
    if (s._obj === '$Ply ') {
      const t = s._target || [];
      const key = (t[1] && t[1]._name) + '/' + (t[0] && t[0]._name);
      const rep = INLINE_ACTIONS[key];
      if (!rep) throw new Error(id + ': không có bản nhúng cho action ' + key);
      out.push(...JSON.parse(JSON.stringify(rep)));
    } else out.push(s);
  }
  return out;
}
// Một số bố cục tạo tài liệu mới từ preset tự đặt trong Photoshop ("CP", "CP2"). Máy khác không có preset
// này sẽ lỗi -> thay bằng kích thước tường minh (đơn vị point: 1 cm = 72/2.54 pt), 300 PPI, RGB 8 bit, nền trắng.
const PT = 72 / 2.54;
const DOC_PRESETS = { CP: [12.7, 8.6], CP2: [12.7, 17.8] };
function fixPresets(steps, id) {
  return steps.map((s) => {
    const nw = s._obj === '$Mk  ' && s['$Nw  '];
    if (!nw || !nw.preset) return s;
    const size = DOC_PRESETS[nw.preset];
    if (!size) throw new Error(id + ': preset tài liệu lạ ' + nw.preset);
    const out = Object.assign({}, s);
    out['$Nw  '] = { _obj: '$Dcmn', artboard: false, autoPromoteBackgroundLayer: false,
      '$Md  ': { _class: 'RGBColorMode' },
      '$Wdth': { _unit: 'distanceUnit', _value: size[0] * PT }, '$Hght': { _unit: 'distanceUnit', _value: size[1] * PT },
      '$Rslt': { _unit: 'densityUnit', _value: 300 }, pixelScaleFactor: 1, '$Fl  ': { _enum: '$Fl  ', _value: '$Wht ' },
      '$Dpth': 8, profile: 'sRGB IEC61966-2.1' };
    return out;
  });
}
function check(steps, id) {
  const j = JSON.stringify(steps);
  if (j.includes('__needsToken')) throw new Error(id + ': còn đường dẫn file cứng');
  if (j.includes('"$Ply "')) throw new Error(id + ': còn lệnh Play action');
  return steps;
}

const SPEC = {
  // TOOLS – hàng trên
  cameraraw: 'cameraraw.jsx',
  RT066: () => [{ _obj: 'flattenImage', _options: { dialogOptions: 'dontDisplay' } }],
  // Quick Retouch
  Q1: 'quick-retouch/1.jsx', Q2: 'quick-retouch/2.jsx', Q3: 'quick-retouch/3.jsx', Q4: 'quick-retouch/4.jsx',
  Q5: 'quick-retouch/5.jsx', Q6: 'quick-retouch/6.jsx', Q8: 'quick-retouch/8.jsx',
  // Tools
  T1: 'tools/1.jsx', T2: 'tools/2.jsx', T5: 'tools/5.jsx', T6: 'tools/6.jsx', T7: 'tools/7.jsx',
  T8: 'tools/8.jsx', T9: 'tools/9.jsx', T10: 'tools/10.jsx', T11: 'tools/11.jsx', T12: 'tools/12.jsx',
  T13: 'tools/13.jsx', T15: 'tools/15.jsx', T16: 'tools/16.jsx',
  T19: 'tools/19.jsx', T22: 'tools/22.jsx',
  a46: 'a46.jsx', a47: 'a47.jsx', a48: 'a48.jsx',
};
for (let i = 1; i <= 20; i++) SPEC['L' + i] = 'layout/' + i + '.jsx';

const result = {};
for (const [id, src] of Object.entries(SPEC)) {
  const steps = typeof src === 'function' ? src() : conv(src);
  result[id] = check(fixPresets(inlinePlays(steps, id), id), id);
}
const header = '// TỰ SINH bởi tools/build_steps.js từ script JSX gốc (nhánh cep-legacy-v3.1). Không sửa tay.\n' +
  '// Mỗi mục là danh sách descriptor batchPlay; "$xxxx" là mã charID của Photoshop.\n';
fs.writeFileSync(OUT, header + 'module.exports = ' + JSON.stringify(result) + ';\n');
console.log('Đã sinh', Object.keys(result).length, 'lệnh ->', OUT,
  Object.entries(result).map(([k, v]) => k + ':' + v.length).join(' '));
