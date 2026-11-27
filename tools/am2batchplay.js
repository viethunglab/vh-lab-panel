// Chuyển script ExtendScript dạng Action Manager (executeAction/jamEngine) sang mảng descriptor batchPlay.
// Cách làm: chạy script trong sandbox với các lớp giả lập ActionDescriptor/ActionReference/ActionList,
// ghi lại từng lời gọi executeAction theo đúng thứ tự.
'use strict';
const vm = require('vm');
const fs = require('fs');

const UNITS = { '#Pxl': 'pixelsUnit', '#Prc': 'percentUnit', '#Ang': 'angleUnit', '#Rlt': 'distanceUnit',
  '#Rsl': 'densityUnit', '#Pnt': 'pointsUnit', '#Mlm': 'millimetersUnit', '#Nne': 'noneUnit',
  '#Cntm': 'centimetersUnit', '#Inch': 'inchesUnit' };

class ID { constructor(s, isChar) { this.s = s; this.c = isChar; } toString() { return this.c ? '$' + this.s : this.s; } }
const idStr = (id) => (id instanceof ID ? id.toString() : String(id));
const unitStr = (id) => (id instanceof ID && id.c && UNITS[id.s]) ? UNITS[id.s] : idStr(id);

class Ref {
  constructor() { this.items = []; }
  putEnumerated(c, t, v) { this.items.push({ _ref: idStr(c), _enum: idStr(t), _value: idStr(v) }); }
  putProperty(c, p) { this.items.push({ _property: idStr(p), _ref: idStr(c) }); }
  putName(c, n) { this.items.push({ _ref: idStr(c), _name: n }); }
  putIndex(c, i) { this.items.push({ _ref: idStr(c), _index: i }); }
  putIdentifier(c, i) { this.items.push({ _ref: idStr(c), _id: i }); }
  putOffset(c, o) { this.items.push({ _ref: idStr(c), _offset: o }); }
  putClass(c) { this.items.push({ _ref: idStr(c) }); }
}
class List { constructor() { this.items = []; }
  putDouble(v) { this.items.push(v); } putInteger(v) { this.items.push(v); } putString(v) { this.items.push(v); }
  putBoolean(v) { this.items.push(v); } putUnitDouble(u, v) { this.items.push({ _unit: unitStr(u), _value: v }); }
  putEnumerated(t, v) { this.items.push({ _enum: idStr(t), _value: idStr(v) }); }
  putObject(c, d) { this.items.push(Object.assign({ _obj: idStr(c) }, d.o)); }
  putReference(r) { this.items.push(r.items.length === 1 ? r.items[0] : r.items); }
  putList(l) { this.items.push(l.items); } putClass(c) { this.items.push({ _class: idStr(c) }); }
  putPath(f) { this.items.push({ _path: f.__path, _kind: 'local', __needsToken: true }); }
  putLargeInteger(v) { this.items.push(v); }
}
class Desc { constructor() { this.o = {}; }
  k(key) { return idStr(key); }
  putDouble(k, v) { this.o[this.k(k)] = v; } putInteger(k, v) { this.o[this.k(k)] = v; }
  putLargeInteger(k, v) { this.o[this.k(k)] = v; }
  putString(k, v) { this.o[this.k(k)] = v; } putBoolean(k, v) { this.o[this.k(k)] = v; }
  putUnitDouble(k, u, v) { this.o[this.k(k)] = { _unit: unitStr(u), _value: v }; }
  putEnumerated(k, t, v) { this.o[this.k(k)] = { _enum: idStr(t), _value: idStr(v) }; }
  putObject(k, c, d) { this.o[this.k(k)] = Object.assign({ _obj: idStr(c) }, d.o); }
  putClass(k, c) { this.o[this.k(k)] = { _class: idStr(c) }; }
  putList(k, l) { this.o[this.k(k)] = l.items; }
  putPath(k, f) { this.o[this.k(k)] = { _path: f.__path, _kind: 'local', __needsToken: true }; }
  putData(k, d) { this.o[this.k(k)] = { _rawData: Buffer.from(d, 'latin1').toString('base64') }; }
  putReference(k, r) {
    const key = this.k(k);
    if (key === '$null') this.o._target = r.items;
    else this.o[key] = r.items.length === 1 ? r.items[0] : r.items;
  }
}

// jamEngine "compact JSON" -> batchPlay
function jamId(s) { return (typeof s === 'string' && /^'.{4}'$/.test(s)) ? '$' + s.slice(1, 5) : s; }
function jamUnit(s) { const c = (typeof s === 'string' && /^'.{4}'$/.test(s)) ? s.slice(1, 5) : null; return c && UNITS[c] ? UNITS[c] : jamId(s); }
function pc(x) { if (Array.isArray(x)) return x; const k = Object.keys(x); if (k.length !== 1) throw new Error('jam compact'); return [k[0], x[k[0]]]; }
function jamRef(arr) { return arr.map((it) => { const [cls, tv0] = pc(it); const [form, v0] = pc(tv0); const v = (form === '<enumerated>') ? pc(v0) : v0; const r = { _ref: jamId(cls) };
  switch (form) { case '<enumerated>': r._enum = jamId(v[0]); r._value = jamId(v[1]); break;
    case '<property>': r._property = jamId(v); break; case '<name>': r._name = v; break; case '<index>': r._index = v; break;
    case '<identifier>': r._id = v; break; case '<offset>': r._offset = v; break; case '<class>': break;
    default: throw new Error('jam ref ' + form); } return r; }); }
function jamVal(x) { let [type, v] = pc(x);
  if (type === '<unitDouble>' || type === '<enumerated>' || type === '<object>') v = pc(v);
  switch (type) {
    case '<boolean>': case '<double>': case '<integer>': case '<string>': case '<largeInteger>': return v;
    case '<unitDouble>': return { _unit: jamUnit(v[0]), _value: v[1] };
    case '<enumerated>': return { _enum: jamId(v[0]), _value: jamId(v[1]) };
    case '<object>': return Object.assign({ _obj: jamId(v[0]) }, jamDesc(v[1] || {}));
    case '<class>': return { _class: jamId(v) };
    case '<list>': return v.map(jamVal);
    case '<reference>': { const r = jamRef(v); return r.length === 1 ? r[0] : r; }
    case '<path>': return { _path: v, _kind: 'local', __needsToken: true };
    default: throw new Error('jam type ' + type);
  }
}
function jamDesc(obj) { const o = {}; for (const k of Object.keys(obj || {})) {
  const key = jamId(k); const val = obj[k];
  const pv = pc(val); if (key === '$null' && pv[0] === '<reference>') o._target = jamRef(pv[1]); else o[key] = jamVal(val); } return o; }
const _jamRefFix = 0;

function convert(code, file) {
  const steps = [];
  const DialogModes = { ALL: 'ALL', NO: 'NO', ERROR: 'ERROR' };
  const mode = (m) => (m === 'ALL' ? 'display' : 'dontDisplay');
  const app = {
    charIDToTypeID: (s) => new ID(s, true), stringIDToTypeID: (s) => new ID(s, false),
    executeAction: (e, d, m) => { steps.push(Object.assign({ _obj: idStr(e) }, d ? d.o : {}, { _options: { dialogOptions: mode(m) } })); },
    executeActionGet: () => { throw new Error('executeActionGet (cần viết tay)'); },
    get activeDocument() { throw new Error('activeDocument (cần viết tay)'); },
    documents: { length: 1 },
  };
  const jamEngine = {
    meaningfulIds: false, parseFriendly: false, displayDialogs: 'ERROR',
    jsonPlay: (ev, desc, dd) => { steps.push(Object.assign({ _obj: jamId(ev) }, jamDesc(desc), { _options: { dialogOptions: mode(dd || 'ERROR') } })); return {}; },
    jsonGet: () => { throw new Error('jsonGet (cần viết tay)'); },
  };
  function File(p) { if (!(this instanceof File)) return new File(p); this.__path = p; }
  const ctx = { app, executeAction: app.executeAction, executeActionGet: app.executeActionGet, DialogModes,
    ActionDescriptor: Desc, ActionReference: Ref, ActionList: List, File, jamEngine,
    $: { os: 'Windows', fileName: file }, alert: (m) => { throw new Error('alert: ' + m); },
    confirm: () => { throw new Error('confirm (cần viết tay)'); }, Window: function () { throw new Error('ScriptUI (cần viết tay)'); },
    preferences: {}, Units: {}, console };
  vm.createContext(ctx);
  const clean = code.replace(/^﻿/, '').replace(/^#target.*$/mg, '').replace(/^#include.*$/mg, '');
  // Không dùng mã jamEngine nhúng sẵn: chèn bản giả lập trước.
  vm.runInContext(clean, ctx, { filename: file, timeout: 5000 });
  return steps;
}
module.exports = { convert };

if (require.main === module) {
  const f = process.argv[2];
  console.log(JSON.stringify(convert(fs.readFileSync(f, 'utf8'), f), null, 2));
}
