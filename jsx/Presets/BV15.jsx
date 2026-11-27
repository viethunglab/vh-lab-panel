#target photoshop
//
// BV15.jsx
//

//
// Generated Sun Nov 21 2021 15:32:16 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== BV15 ==============
//
function BV15() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Set
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "BV");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Transform
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0.63235451911726);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0.94853177867572);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 93.3736566377219);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 93.3736566377219);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Blnr'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 208.333333333333);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('InsF'));
    desc3.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('SClr'));
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc3.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 2);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 250.023346245289);
    desc4.putDouble(cTID('Grn '), 252.770431637764);
    desc4.putDouble(cTID('Bl  '), 253.000000119209);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc3.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(181);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Transform
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 4.07693425086677);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 6.11750072452401);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 96.4844155141722);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 96.4844155141722);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Blnr'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Set
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 208.333333333333);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('InsF'));
    desc3.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('SClr'));
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc3.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 4);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 0);
    desc4.putDouble(cTID('Grn '), 0);
    desc4.putDouble(cTID('Bl  '), 0);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc3.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 182);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var list1 = new ActionList();
    list1.putInteger(182);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(183);
    desc1.putList(cTID('Idnt'), list1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Select
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "BV copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(181);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 75.5);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "BV copy 2");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(183);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Transform
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 1.87963830647243);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 2.82046046840992);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 98.5295943941736);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 98.5295943941736);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Blnr'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Select
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "BV copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(181);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 2.9);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Set
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 208.333333333333);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 239.000000953674);
    desc4.putDouble(cTID('Grn '), 239.000000953674);
    desc4.putDouble(cTID('Bl  '), 239.000000953674);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 41);
    desc3.putBoolean(cTID('uglg'), true);
    desc3.putUnitDouble(cTID('lagl'), cTID('#Ang'), 120);
    desc3.putUnitDouble(cTID('Dstn'), cTID('#Pxl'), 0);
    desc3.putUnitDouble(cTID('Ckmt'), cTID('#Pxl'), 100);
    desc3.putUnitDouble(cTID('blur'), cTID('#Pxl'), 25);
    desc3.putUnitDouble(cTID('Nose'), cTID('#Prc'), 0);
    desc3.putBoolean(cTID('AntA'), false);
    var desc5 = new ActionDescriptor();
    desc5.putString(cTID('Nm  '), "Linear");
    desc3.putObject(cTID('TrnS'), cTID('ShpC'), desc5);
    desc2.putObject(cTID('IrSh'), cTID('IrSh'), desc3);
    var desc6 = new ActionDescriptor();
    desc6.putBoolean(cTID('enab'), true);
    desc6.putBoolean(sTID("present"), true);
    desc6.putBoolean(sTID("showInDialog"), true);
    desc6.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 129.001922607422);
    desc7.putDouble(cTID('Grn '), 129.001922607422);
    desc7.putDouble(cTID('Bl  '), 129.001922607422);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc2.putObject(cTID('SoFi'), cTID('SoFi'), desc6);
    var desc8 = new ActionDescriptor();
    desc8.putBoolean(cTID('enab'), true);
    desc8.putBoolean(sTID("present"), true);
    desc8.putBoolean(sTID("showInDialog"), true);
    desc8.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('InsF'));
    desc8.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('SClr'));
    desc8.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc8.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc8.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 4);
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 0);
    desc9.putDouble(cTID('Grn '), 0);
    desc9.putDouble(cTID('Bl  '), 0);
    desc8.putObject(cTID('Clr '), sTID("RGBColor"), desc9);
    desc8.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc8);
    var desc10 = new ActionDescriptor();
    desc10.putBoolean(cTID('enab'), true);
    desc10.putBoolean(sTID("present"), true);
    desc10.putBoolean(sTID("showInDialog"), true);
    desc10.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Rd  '), 171.00000500679);
    desc11.putDouble(cTID('Grn '), 171.00000500679);
    desc11.putDouble(cTID('Bl  '), 171.00000500679);
    desc10.putObject(cTID('Clr '), sTID("RGBColor"), desc11);
    desc10.putUnitDouble(cTID('Opct'), cTID('#Prc'), 46);
    desc10.putEnumerated(cTID('GlwT'), cTID('BETE'), cTID('SfBL'));
    desc10.putUnitDouble(cTID('Ckmt'), cTID('#Pxl'), 100);
    desc10.putUnitDouble(cTID('blur'), cTID('#Pxl'), 35);
    desc10.putUnitDouble(cTID('Nose'), cTID('#Prc'), 0);
    desc10.putUnitDouble(cTID('ShdN'), cTID('#Prc'), 0);
    desc10.putBoolean(cTID('AntA'), false);
    var desc12 = new ActionDescriptor();
    desc12.putString(cTID('Nm  '), "Linear");
    desc10.putObject(cTID('TrnS'), cTID('ShpC'), desc12);
    desc10.putUnitDouble(cTID('Inpr'), cTID('#Prc'), 1);
    desc10.putEnumerated(cTID('glwS'), cTID('IGSr'), cTID('SrcE'));
    desc2.putObject(cTID('IrGl'), cTID('IrGl'), desc10);
    var desc13 = new ActionDescriptor();
    desc13.putBoolean(cTID('enab'), true);
    desc13.putBoolean(sTID("present"), true);
    desc13.putBoolean(sTID("showInDialog"), true);
    desc13.putEnumerated(cTID('hglM'), cTID('BlnM'), cTID('Scrn'));
    var desc14 = new ActionDescriptor();
    desc14.putDouble(cTID('Rd  '), 255);
    desc14.putDouble(cTID('Grn '), 255);
    desc14.putDouble(cTID('Bl  '), 255);
    desc13.putObject(cTID('hglC'), sTID("RGBColor"), desc14);
    desc13.putUnitDouble(cTID('hglO'), cTID('#Prc'), 50);
    desc13.putEnumerated(cTID('sdwM'), cTID('BlnM'), cTID('Mltp'));
    var desc15 = new ActionDescriptor();
    desc15.putDouble(cTID('Rd  '), 0);
    desc15.putDouble(cTID('Grn '), 0);
    desc15.putDouble(cTID('Bl  '), 0);
    desc13.putObject(cTID('sdwC'), sTID("RGBColor"), desc15);
    desc13.putUnitDouble(cTID('sdwO'), cTID('#Prc'), 50);
    desc13.putEnumerated(cTID('bvlT'), cTID('bvlT'), cTID('SfBL'));
    desc13.putEnumerated(cTID('bvlS'), cTID('BESl'), cTID('InrB'));
    desc13.putBoolean(cTID('uglg'), true);
    desc13.putUnitDouble(cTID('lagl'), cTID('#Ang'), 90);
    desc13.putUnitDouble(cTID('Lald'), cTID('#Ang'), 30);
    desc13.putUnitDouble(cTID('srgR'), cTID('#Prc'), 100);
    desc13.putUnitDouble(cTID('blur'), cTID('#Pxl'), 4);
    desc13.putEnumerated(cTID('bvlD'), cTID('BESs'), cTID('In  '));
    var desc16 = new ActionDescriptor();
    desc16.putString(cTID('Nm  '), "Linear");
    desc13.putObject(cTID('TrnS'), cTID('ShpC'), desc16);
    desc13.putBoolean(sTID("antialiasGloss"), false);
    desc13.putUnitDouble(cTID('Sftn'), cTID('#Pxl'), 0);
    desc13.putBoolean(sTID("useShape"), true);
    var desc17 = new ActionDescriptor();
    desc17.putString(cTID('Nm  '), "Default");
    var list1 = new ActionList();
    var desc18 = new ActionDescriptor();
    desc18.putDouble(cTID('Hrzn'), 0);
    desc18.putDouble(cTID('Vrtc'), 0);
    list1.putObject(cTID('CrPt'), desc18);
    var desc19 = new ActionDescriptor();
    desc19.putDouble(cTID('Hrzn'), 255);
    desc19.putDouble(cTID('Vrtc'), 255);
    list1.putObject(cTID('CrPt'), desc19);
    desc17.putList(cTID('Crv '), list1);
    desc13.putObject(cTID('MpgS'), cTID('ShpC'), desc17);
    desc13.putBoolean(cTID('AntA'), false);
    desc13.putUnitDouble(cTID('Inpr'), cTID('#Prc'), 100);
    desc13.putBoolean(sTID("useTexture"), true);
    desc13.putBoolean(cTID('InvT'), false);
    desc13.putBoolean(cTID('Algn'), true);
    desc13.putUnitDouble(cTID('Scl '), cTID('#Prc'), 362);
    desc13.putUnitDouble(sTID("textureDepth"), cTID('#Prc'), 100);
    var desc20 = new ActionDescriptor();
    desc20.putString(cTID('Nm  '), "Tree Tile 4");
    desc20.putString(cTID('Idnt'), "92150a0d-bc3e-9349-adc8-869fb042a4b0");
    desc13.putObject(cTID('Ptrn'), cTID('Ptrn'), desc20);
    var desc21 = new ActionDescriptor();
    desc21.putDouble(cTID('Hrzn'), 0);
    desc21.putDouble(cTID('Vrtc'), 0);
    desc13.putObject(sTID("phase"), cTID('Pnt '), desc21);
    desc2.putObject(cTID('ebbl'), cTID('ebbl'), desc13);
    var desc22 = new ActionDescriptor();
    desc22.putBoolean(cTID('enab'), true);
    desc22.putBoolean(sTID("present"), true);
    desc22.putBoolean(sTID("showInDialog"), true);
    desc22.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));
    var desc23 = new ActionDescriptor();
    desc23.putDouble(cTID('Rd  '), 0);
    desc23.putDouble(cTID('Grn '), 0);
    desc23.putDouble(cTID('Bl  '), 0);
    desc22.putObject(cTID('Clr '), sTID("RGBColor"), desc23);
    desc22.putBoolean(cTID('AntA'), true);
    desc22.putBoolean(cTID('Invr'), true);
    desc22.putUnitDouble(cTID('Opct'), cTID('#Prc'), 50);
    desc22.putUnitDouble(cTID('lagl'), cTID('#Ang'), 90);
    desc22.putUnitDouble(cTID('Dstn'), cTID('#Pxl'), 25);
    desc22.putUnitDouble(cTID('blur'), cTID('#Pxl'), 40);
    var desc24 = new ActionDescriptor();
    desc24.putString(cTID('Nm  '), "Linear");
    desc22.putObject(cTID('MpgS'), cTID('ShpC'), desc24);
    desc2.putObject(cTID('ChFX'), cTID('ChFX'), desc22);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step18(enabled, withDialog) {
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
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 723.7);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Set
  step3();      // Transform
  step4();      // Set
  step5();      // Duplicate
  step6();      // Transform
  step7();      // Set
  step8();      // Make
  step9();      // Delete
  step10();      // Duplicate
  step11();      // Select
  step12();      // Gaussian Blur
  step13();      // Select
  step14();      // Transform
  step15();      // Select
  step16();      // Gaussian Blur
  step17();      // Set
  step18();      // Select
  step19();      // Gaussian Blur
};



//=========================================
//                    BV15.main
//=========================================
//

BV15.main = function () {
  BV15();
};

BV15.main();

// EOF

"BV15.jsx"
// EOF
