#target photoshop
//
// Color_NTStudio05.jsx
//

//
// Generated Sat Jun 11 2022 13:26:51 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio05 ==============
//
function Color_NTStudio05() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Effext");
    desc1.putInteger(cTID('Vrsn'), 2);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Levels
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc2.putReference(cTID('Chnl'), ref1);
    desc2.putBoolean(cTID('Auto'), true);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    list2.putInteger(17);
    list2.putInteger(252);
    desc3.putList(cTID('Inpt'), list2);
    desc3.putDouble(cTID('Gmm '), 0.52);
    list1.putObject(cTID('LvlA'), desc3);
    var desc4 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc4.putReference(cTID('Chnl'), ref3);
    var list3 = new ActionList();
    list3.putInteger(7);
    list3.putInteger(247);
    desc4.putList(cTID('Inpt'), list3);
    desc4.putDouble(cTID('Gmm '), 1.1);
    list1.putObject(cTID('LvlA'), desc4);
    var desc5 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc5.putReference(cTID('Chnl'), ref4);
    var list4 = new ActionList();
    list4.putInteger(15);
    list4.putInteger(255);
    desc5.putList(cTID('Inpt'), list4);
    desc5.putDouble(cTID('Gmm '), 1.29);
    list1.putObject(cTID('LvlA'), desc5);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Brightness/Contrast
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Cntr'), 9);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Photo Filter
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 276.70166015625);
    desc2.putDouble(cTID('Strt'), 87.4509803921569);
    desc2.putDouble(cTID('Brgh'), 91.7647058823529);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putInteger(cTID('Dnst'), 25);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
  };

  // Layer Via Copy
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('SftL'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 60);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 10);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Make
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Lmnc'), 70);
    desc4.putDouble(cTID('A   '), -47);
    desc4.putDouble(cTID('B   '), -4);
    desc3.putObject(cTID('Clr '), cTID('LbCl'), desc4);
    desc3.putInteger(cTID('Dnst'), 25);
    desc3.putBoolean(cTID('PrsL'), true);
    desc2.putObject(cTID('Type'), sTID("photoFilter"), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Make
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc4.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 0);
    desc5.putDouble(cTID('Vrtc'), 44);
    list2.putObject(cTID('Pnt '), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 255);
    desc6.putDouble(cTID('Vrtc'), 241);
    list2.putObject(cTID('Pnt '), desc6);
    desc4.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc4);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Effext");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Levels
  step3();      // Brightness/Contrast
  step4();      // Photo Filter
  step5();      // Layer Via Copy
  step6();      // Set
  step7();      // Set
  step8();      // Gaussian Blur
  step9();      // Make
  step10();      // Make
  step11();      // Select
};



//=========================================
//                    Color_NTStudio05.main
//=========================================
//

Color_NTStudio05.main = function () {
  Color_NTStudio05();
};

Color_NTStudio05.main();

// EOF

"Color_NTStudio05.jsx"
// EOF
