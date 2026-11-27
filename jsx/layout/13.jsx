#target photoshop
//
// 13.jsx
//

//
// Generated Sat Sep 28 2024 10:46:59 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== (CP) 0 + 8 ==============
//
function _CP_0_8() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Layer 1");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Play
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Actn'), "Màu nền");
    ref1.putName(cTID('ASet'), "Tool");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Ply '), desc1, dialogMode);
  };

  // Crop
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Pxl'), 88);
    desc2.putUnitDouble(cTID('Left'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 1663);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 1181);
    desc1.putObject(cTID('T   '), cTID('Rctn'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 0);
    desc1.putBoolean(cTID('Dlt '), true);
    desc1.putInteger(sTID("AutoFillMethod"), 1);
    desc1.putEnumerated(sTID("cropFillMode"), sTID("cropFillMode"), sTID("defaultFill"));
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("targetSize"));
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 85.0393700787401);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Rlt'), 113.385826771654);
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    executeAction(cTID('Crop'), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Copy
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(sTID("copyHint"), "pixels");
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Make
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putBoolean(sTID("artboard"), false);
    desc2.putBoolean(sTID("autoPromoteBackgroundLayer"), false);
    desc2.putString(sTID("preset"), "CP");
    desc1.putObject(cTID('Nw  '), cTID('Dcmn'), desc2);
    desc1.putInteger(cTID('DocI'), 1590);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Paste
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    desc1.putClass(cTID('As  '), cTID('Pxel'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  // Play
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Actn'), "Tạo viền");
    ref1.putName(cTID('ASet'), "Tool");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Ply '), desc1, dialogMode);
  };

  // Move
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 573);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), -272);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Copy
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 472);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 2);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    ref1.putName(cTID('Lyr '), "Layer 1 copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(2);
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Copy
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -354);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -2);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Copy
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -356);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Copy
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -356);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), -1);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 1);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select All Layers
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('selectAllLayers'), desc1, dialogMode);
  };

  // Make
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    desc1.putInteger(sTID("layerSectionStart"), 10);
    desc1.putInteger(sTID("layerSectionEnd"), 11);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('Al  '));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Align
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSCentersH"));
    desc1.putBoolean(sTID("alignToCanvas"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
  };

  // Align
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSCentersV"));
    desc1.putBoolean(sTID("alignToCanvas"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
  };

  // Set
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Purge
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('null'), cTID('PrgI'), cTID('Clpb'));
    executeAction(cTID('Prge'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Play
  step3(true, true);      // Crop
  step4();      // Set
  step5();      // Copy
  step6();      // Make
  step7();      // Paste
  step8();      // Play
  step9();      // Move
  step10();      // Copy
  step11();      // Move
  step12();      // Select
  step13();      // Copy
  step14();      // Move
  step15();      // Copy
  step16();      // Copy
  step17();      // Move
  step18();      // Select All Layers
  step19();      // Make
  step20();      // Set
  step21();      // Align
  step22();      // Align
  step23();      // Set
  step24();      // Purge
};



//=========================================
//                    _CP_0_8.main
//=========================================
//

_CP_0_8.main = function () {
  _CP_0_8();
};

_CP_0_8.main();

// EOF

"13.jsx"
// EOF
