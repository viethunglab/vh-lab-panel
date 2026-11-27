#target photoshop
//
// 15.jsx
//

//
// Generated Tue Jan 21 2025 14:41:19 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 4+6+4 (Thi bằng ô tô) ==============
//
function _4_6_4_Thib_ng_t() {
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

  // Crop
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Left'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 1772);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 1181);
    desc1.putObject(cTID('T   '), cTID('Rctn'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 0);
    desc1.putBoolean(cTID('Dlt '), true);
    desc1.putInteger(sTID("AutoFillMethod"), 1);
    desc1.putEnumerated(sTID("cropFillMode"), sTID("cropFillMode"), sTID("defaultFill"));
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("targetSize"));
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 113.385826771654);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Rlt'), 170.07874015748);
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    executeAction(cTID('Crop'), desc1, dialogMode);
  };

  // Play
  function step3(enabled, withDialog) {
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

  // Layer Via Copy
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Select
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(2);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Fill
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('FrgC'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1 copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Merge Layers
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Make
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putBoolean(sTID("artboard"), false);
    desc2.putBoolean(sTID("autoPromoteBackgroundLayer"), false);
    desc2.putClass(cTID('Md  '), sTID("RGBColorMode"));
    desc2.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 360);
    desc2.putUnitDouble(cTID('Hght'), cTID('#Rlt'), 504.566927490234);
    desc2.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    desc2.putDouble(sTID("pixelScaleFactor"), 1);
    desc2.putEnumerated(cTID('Fl  '), cTID('Fl  '), cTID('Wht '));
    desc2.putInteger(cTID('Dpth'), 8);
    desc2.putString(sTID("profile"), "sRGB IEC61966-2.1");
    var list1 = new ActionList();
    desc2.putList(cTID('Gdes'), list1);
    desc1.putObject(cTID('Nw  '), cTID('Dcmn'), desc2);
    desc1.putInteger(cTID('DocI'), 1941);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), -1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 1928);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
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
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(sTID("copyHint"), "pixels");
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), 1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 1941);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Paste
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    desc1.putClass(cTID('As  '), cTID('Pxel'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  // Transform
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Bcbc'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Play
  function step16(enabled, withDialog) {
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
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 395);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), -815);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Copy
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -709);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -6);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step20(enabled, withDialog) {
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
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -3);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 472);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 3);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 3);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), -1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 1928);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('HstS'), -2);
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Fill
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('BckC'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
  };

  // Select
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1 copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(2);
    list1.putInteger(8);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Merge Layers
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Crop
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Pxl'), 37.125);
    desc2.putUnitDouble(cTID('Left'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 666.125);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 472);
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
  function step29(enabled, withDialog) {
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
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(sTID("copyHint"), "pixels");
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select
  function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), 1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 2080);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Paste
  function step32(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    desc1.putClass(cTID('As  '), cTID('Pxel'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  // Play
  function step33(enabled, withDialog) {
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
  function step34(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 573);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 135);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Copy
  function step35(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -355);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Move
  function step36(enabled, withDialog) {
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
  function step37(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -357);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select
  function step38(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 2");
    ref1.putName(cTID('Lyr '), "Layer 2 copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(6);
    list1.putInteger(7);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step39(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 2");
    ref1.putName(cTID('Lyr '), "Layer 2 copy");
    ref1.putName(cTID('Lyr '), "Layer 2 copy 2");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(6);
    list1.putInteger(7);
    list1.putInteger(8);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Copy
  function step40(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 475);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select
  function step41(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), -1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 696);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step42(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('HstS'), -2);
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Crop
  function step43(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Left'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 708);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 472);
    desc1.putObject(cTID('T   '), cTID('Rctn'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 0);
    desc1.putBoolean(cTID('Dlt '), true);
    desc1.putInteger(sTID("AutoFillMethod"), 1);
    desc1.putEnumerated(sTID("cropFillMode"), sTID("cropFillMode"), sTID("defaultFill"));
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("targetSize"));
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 56.6929133858268);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Rlt'), 85.0393700787401);
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    executeAction(cTID('Crop'), desc1, dialogMode);
  };

  // Set
  function step44(enabled, withDialog) {
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
  function step45(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(sTID("copyHint"), "pixels");
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select
  function step46(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putOffset(cTID('Dcmn'), 1);
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 773);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Paste
  function step47(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('Anno'));
    desc1.putClass(cTID('As  '), cTID('Pxel'));
    executeAction(cTID('past'), desc1, dialogMode);
  };

  // Transform
  function step48(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Bcbc'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Play
  function step49(enabled, withDialog) {
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
  function step50(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -498);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 18);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Copy
  function step51(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 239);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Copy
  function step52(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 239);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Copy
  function step53(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 239);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('copy'), desc1, dialogMode);
  };

  // Select All Layers
  function step54(enabled, withDialog) {
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
  function step55(enabled, withDialog) {
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
    desc1.putInteger(sTID("layerSectionStart"), 16);
    desc1.putInteger(sTID("layerSectionEnd"), 17);
    desc1.putString(cTID('Nm  '), "Group 1");
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step56(enabled, withDialog) {
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
  function step57(enabled, withDialog) {
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
  function step58(enabled, withDialog) {
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
  function step59(enabled, withDialog) {
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
  function step60(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('null'), cTID('PrgI'), cTID('Al  '));
    executeAction(cTID('Prge'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Crop
  step3();      // Play
  step4();      // Layer Via Copy
  step5();      // Select
  step6();      // Fill
  step7();      // Select
  step8();      // Merge Layers
  step9();      // Make
  step10();      // Select
  step11();      // Set
  step12();      // Copy
  step13();      // Select
  step14();      // Paste
  step15();      // Transform
  step16();      // Play
  step17();      // Move
  step18();      // Copy
  step19();      // Move
  step20();      // Select
  step21();      // Copy
  step22();      // Move
  step23();      // Select
  step24();      // Select
  step25();      // Fill
  step26();      // Select
  step27();      // Merge Layers
  step28(true, true);      // Crop
  step29();      // Set
  step30();      // Copy
  step31();      // Select
  step32();      // Paste
  step33();      // Play
  step34();      // Move
  step35();      // Copy
  step36();      // Move
  step37();      // Copy
  step38();      // Select
  step39();      // Select
  step40();      // Copy
  step41();      // Select
  step42();      // Select
  step43();      // Crop
  step44();      // Set
  step45();      // Copy
  step46();      // Select
  step47();      // Paste
  step48();      // Transform
  step49();      // Play
  step50();      // Move
  step51();      // Copy
  step52();      // Copy
  step53();      // Copy
  step54();      // Select All Layers
  step55();      // Make
  step56();      // Set
  step57();      // Align
  step58();      // Align
  step59();      // Set
  step60();      // Purge
};



//=========================================
//                    _4_6_4_Thib_ng_t.main
//=========================================
//

_4_6_4_Thib_ng_t.main = function () {
  _4_6_4_Thib_ng_t();
};

_4_6_4_Thib_ng_t.main();

// EOF

"15.jsx"
// EOF
