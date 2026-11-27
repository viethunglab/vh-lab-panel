#target photoshop
//
// Color_NTStudio19.jsx
//

//
// Generated Sat Jun 11 2022 13:29:27 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio19 ==============
//
function Color_NTStudio19() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('Vrsn'), 2);
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
    desc1.putInteger(cTID('Vrsn'), 2);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Curves
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Hrzn'), 0);
    desc3.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 103);
    desc4.putDouble(cTID('Vrtc'), 130);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 255);
    desc5.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc5);
    desc2.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc2);
    var desc6 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc6.putReference(cTID('Chnl'), ref2);
    var list3 = new ActionList();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 0);
    desc7.putDouble(cTID('Vrtc'), 0);
    list3.putObject(cTID('Pnt '), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Hrzn'), 94);
    desc8.putDouble(cTID('Vrtc'), 119);
    list3.putObject(cTID('Pnt '), desc8);
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 255);
    desc9.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc9);
    desc6.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc6);
    var desc10 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc10.putReference(cTID('Chnl'), ref3);
    var list4 = new ActionList();
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Hrzn'), 0);
    desc11.putDouble(cTID('Vrtc'), 0);
    list4.putObject(cTID('Pnt '), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Hrzn'), 94);
    desc12.putDouble(cTID('Vrtc'), 118);
    list4.putObject(cTID('Pnt '), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Hrzn'), 255);
    desc13.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc13);
    desc10.putList(cTID('Crv '), list4);
    list1.putObject(cTID('CrvA'), desc10);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Crvs'), desc1, dialogMode);
  };

  // Black & White
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putInteger(cTID('Rd  '), 40);
    desc1.putInteger(cTID('Yllw'), 60);
    desc1.putInteger(cTID('Grn '), 40);
    desc1.putInteger(cTID('Cyn '), 60);
    desc1.putInteger(cTID('Bl  '), 20);
    desc1.putInteger(cTID('Mgnt'), 80);
    desc1.putBoolean(sTID("useTint"), true);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 112.20233463035);
    desc2.putDouble(cTID('Grn '), 85.556420233463);
    desc2.putDouble(cTID('Bl  '), 48.2490272373541);
    desc1.putObject(sTID("tintColor"), sTID("RGBColor"), desc2);
    executeAction(sTID('blackAndWhite'), desc1, dialogMode);
  };

  // Filter Gallery
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('GEfk'), cTID('GEft'), cTID('Txtz'));
    desc1.putEnumerated(cTID('TxtT'), cTID('TxtT'), cTID('TxCa'));
    desc1.putInteger(cTID('Scln'), 50);
    desc1.putInteger(cTID('Rlf '), 1);
    desc1.putEnumerated(cTID('LghD'), cTID('LghD'), cTID('LDTp'));
    desc1.putBoolean(cTID('InvT'), false);
    executeAction(1195730531, desc1, dialogMode);
  };

  // Photo Filter
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Lmnc'), 46.27);
    desc2.putDouble(cTID('A   '), -107);
    desc2.putDouble(cTID('B   '), 106);
    desc1.putObject(cTID('Clr '), cTID('LbCl'), desc2);
    desc1.putInteger(cTID('Dnst'), 25);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
  };

  // Levels
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc2.putReference(cTID('Chnl'), ref1);
    desc2.putDouble(cTID('Gmm '), 0.97);
    var list2 = new ActionList();
    list2.putInteger(40);
    list2.putInteger(255);
    desc2.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list3 = new ActionList();
    list3.putInteger(55);
    list3.putInteger(255);
    desc3.putList(cTID('Inpt'), list3);
    desc3.putDouble(cTID('Gmm '), 1.13);
    list1.putObject(cTID('LvlA'), desc3);
    var desc4 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc4.putReference(cTID('Chnl'), ref3);
    desc4.putDouble(cTID('Gmm '), 1.12);
    var list4 = new ActionList();
    list4.putInteger(36);
    list4.putInteger(214);
    desc4.putList(cTID('Otpt'), list4);
    list1.putObject(cTID('LvlA'), desc4);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Smart Sharpen
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 52);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 0.4);
    desc1.putInteger(cTID('Thsh'), 0);
    desc1.putInteger(cTID('Angl'), 1);
    desc1.putBoolean(sTID("moreAccurate"), false);
    desc1.putEnumerated(cTID('blur'), sTID("blurType"), cTID('MtnB'));
    desc1.putString(sTID("preset"), "Default");
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 0);
    desc2.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 64);
    desc2.putInteger(cTID('Rds '), 47);
    desc1.putObject(cTID('sdwM'), sTID("adaptCorrectTones"), desc2);
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 0);
    desc3.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 50);
    desc3.putInteger(cTID('Rds '), 1);
    desc1.putObject(cTID('hglM'), sTID("adaptCorrectTones"), desc3);
    executeAction(sTID('smartSharpen'), desc1, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Curves
  step4();      // Black & White
  step5();      // Filter Gallery
  step6();      // Photo Filter
  step7();      // Levels
  step8();      // Smart Sharpen
  step9();      // Select
};



//=========================================
//                    Color_NTStudio19.main
//=========================================
//

Color_NTStudio19.main = function () {
  Color_NTStudio19();
};

Color_NTStudio19.main();

// EOF

"Color_NTStudio19.jsx"
// EOF
