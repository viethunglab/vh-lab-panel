#target photoshop
//
// BV14.jsx
//

//
// Generated Sun Nov 21 2021 15:32:16 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== BV14 ==============
//
function BV14() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Transform
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 12);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0.5);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 91.9015047879617);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 91.9080726149092);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Blnr'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Hide
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 60);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Show
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Shw '), desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(12);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 0);
    desc4.putDouble(cTID('Grn '), 0);
    desc4.putDouble(cTID('Bl  '), 0);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 40);
    desc3.putBoolean(cTID('uglg'), true);
    desc3.putUnitDouble(cTID('lagl'), cTID('#Ang'), 90);
    desc3.putUnitDouble(cTID('Dstn'), cTID('#Pxl'), 80);
    desc3.putUnitDouble(cTID('Ckmt'), cTID('#Pxl'), 30);
    desc3.putUnitDouble(cTID('blur'), cTID('#Pxl'), 10);
    desc3.putUnitDouble(cTID('Nose'), cTID('#Prc'), 0);
    desc3.putBoolean(cTID('AntA'), false);
    var desc5 = new ActionDescriptor();
    desc5.putString(cTID('Nm  '), "$$$/Contours/Defaults/Ring=Ring");
    desc3.putObject(cTID('TrnS'), cTID('ShpC'), desc5);
    desc3.putBoolean(sTID("layerConceals"), true);
    desc2.putObject(cTID('DrSh'), cTID('DrSh'), desc3);
    var desc6 = new ActionDescriptor();
    desc6.putBoolean(cTID('enab'), true);
    desc6.putBoolean(sTID("present"), true);
    desc6.putBoolean(sTID("showInDialog"), true);
    desc6.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('OutF'));
    desc6.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('SClr'));
    desc6.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc6.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc6.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 5);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 0);
    desc7.putDouble(cTID('Grn '), 0);
    desc7.putDouble(cTID('Bl  '), 0);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc6);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    list1.putInteger(12);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Merge Layers
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('mergeLayersNew'), undefined, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Transform
  step3();      // Hide
  step4();      // Select
  step5();      // Gaussian Blur
  step6();      // Show
  step7();      // Select
  step8();      // Set
  step9();      // Select
  step10();      // Merge Layers
};



//=========================================
//                    BV14.main
//=========================================
//

BV14.main = function () {
  BV14();
};

BV14.main();

// EOF

"BV14.jsx"
// EOF
