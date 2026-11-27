#target photoshop
//
// Color_NTStudio17.jsx
//

//
// Generated Sat Jun 11 2022 13:29:07 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio17 ==============
//
function Color_NTStudio17() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Effect");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Effect copy");
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Black & White
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putInteger(cTID('Rd  '), 47);
    desc1.putInteger(cTID('Yllw'), 54);
    desc1.putInteger(cTID('Grn '), 23);
    desc1.putInteger(cTID('Cyn '), 57);
    desc1.putInteger(cTID('Bl  '), 22);
    desc1.putInteger(cTID('Mgnt'), 54);
    desc1.putBoolean(sTID("useTint"), false);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 225.000457763672);
    desc2.putDouble(cTID('Grn '), 211.000671386719);
    desc2.putDouble(cTID('Bl  '), 179.001159667969);
    desc1.putObject(sTID("tintColor"), sTID("RGBColor"), desc2);
    executeAction(sTID('blackAndWhite'), desc1, dialogMode);
  };

  // Levels
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    list2.putInteger(1);
    list2.putInteger(255);
    desc2.putList(cTID('Inpt'), list2);
    desc2.putDouble(cTID('Gmm '), 0.98);
    list1.putObject(cTID('LvlA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Smart Sharpen
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putBoolean(sTID("useLegacy"), true);
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 12);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 12.5);
    desc1.putBoolean(sTID("moreAccurate"), false);
    desc1.putInteger(cTID('Angl'), 1);
    desc1.putEnumerated(cTID('blur'), sTID("blurType"), cTID('MtnB'));
    executeAction(sTID('smartSharpen'), desc1, dialogMode);
  };

  // Make
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc3.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 0);
    desc4.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 116);
    desc5.putDouble(cTID('Vrtc'), 116);
    list2.putObject(cTID('Pnt '), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 179);
    desc6.putDouble(cTID('Vrtc'), 177);
    list2.putObject(cTID('Pnt '), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 255);
    desc7.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc7);
    desc3.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc3);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('Crvs'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 14);
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), sTID("blendDivide"));
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Effect copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Smart Sharpen
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putBoolean(sTID("useLegacy"), true);
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 7);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 64);
    desc1.putBoolean(sTID("moreAccurate"), false);
    desc1.putInteger(cTID('Angl'), 1);
    desc1.putEnumerated(cTID('blur'), sTID("blurType"), cTID('MtnB'));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 72);
    desc2.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 50);
    desc2.putInteger(cTID('Rds '), 54);
    desc1.putObject(cTID('sdwM'), sTID("adaptCorrectTones"), desc2);
    executeAction(sTID('smartSharpen'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Effect");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Curves 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Black & White
  step4();      // Levels
  step5();      // Smart Sharpen
  step6();      // Make
  step7();      // Set
  step8();      // Select
  step9();      // Set
  step10();      // Select
  step11();      // Smart Sharpen
  step12();      // Select
  step13();      // Select
};



//=========================================
//                    Color_NTStudio17.main
//=========================================
//

Color_NTStudio17.main = function () {
  Color_NTStudio17();
};

Color_NTStudio17.main();

// EOF

"Color_NTStudio17.jsx"
// EOF
