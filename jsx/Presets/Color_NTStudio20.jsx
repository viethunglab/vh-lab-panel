#target photoshop
//
// Color_NTStudio20.jsx
//

//
// Generated Sat Jun 11 2022 13:29:39 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio20 ==============
//
function Color_NTStudio20() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    desc1.putReference(cTID('null'), ref1);
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
    desc1.putInteger(cTID('Vrsn'), 5);
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
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc2.putReference(cTID('Chnl'), ref1);
    desc2.putBoolean(cTID('Auto'), true);
    list1.putObject(cTID('CrvA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 1);
    desc4.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 255);
    desc5.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc5);
    desc3.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc3);
    var desc6 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc6.putReference(cTID('Chnl'), ref3);
    var list3 = new ActionList();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 1);
    desc7.putDouble(cTID('Vrtc'), 0);
    list3.putObject(cTID('Pnt '), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Hrzn'), 254);
    desc8.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc8);
    desc6.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc6);
    var desc9 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc9.putReference(cTID('Chnl'), ref4);
    var list4 = new ActionList();
    var desc10 = new ActionDescriptor();
    desc10.putDouble(cTID('Hrzn'), 0);
    desc10.putDouble(cTID('Vrtc'), 0);
    list4.putObject(cTID('Pnt '), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Hrzn'), 255);
    desc11.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc11);
    desc9.putList(cTID('Crv '), list4);
    list1.putObject(cTID('CrvA'), desc9);
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
    desc1.putInteger(cTID('Rd  '), 28);
    desc1.putInteger(cTID('Yllw'), 39);
    desc1.putInteger(cTID('Grn '), 23);
    desc1.putInteger(cTID('Cyn '), 72);
    desc1.putInteger(cTID('Bl  '), 35);
    desc1.putInteger(cTID('Mgnt'), 55);
    desc1.putBoolean(sTID("useTint"), true);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 224.400773942471);
    desc2.putDouble(cTID('Grn '), 215.420229434967);
    desc2.putDouble(cTID('Bl  '), 197.466922402382);
    desc1.putObject(sTID("tintColor"), sTID("RGBColor"), desc2);
    executeAction(sTID('blackAndWhite'), desc1, dialogMode);
  };

  // Photo Filter
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Lmnc'), 87);
    desc2.putDouble(cTID('A   '), 3);
    desc2.putDouble(cTID('B   '), 120);
    desc1.putObject(cTID('Clr '), cTID('LbCl'), desc2);
    desc1.putInteger(cTID('Dnst'), 25);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
  };

  // Levels
  function step6(enabled, withDialog) {
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
    list2.putInteger(42);
    list2.putInteger(255);
    desc2.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc3.putReference(cTID('Chnl'), ref2);
    desc3.putDouble(cTID('Gmm '), 0.97);
    var list3 = new ActionList();
    list3.putInteger(40);
    list3.putInteger(255);
    desc3.putList(cTID('Otpt'), list3);
    list1.putObject(cTID('LvlA'), desc3);
    var desc4 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc4.putReference(cTID('Chnl'), ref3);
    var list4 = new ActionList();
    list4.putInteger(55);
    list4.putInteger(255);
    desc4.putList(cTID('Inpt'), list4);
    desc4.putDouble(cTID('Gmm '), 1.12);
    list1.putObject(cTID('LvlA'), desc4);
    var desc5 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc5.putReference(cTID('Chnl'), ref4);
    desc5.putDouble(cTID('Gmm '), 1.12);
    var list5 = new ActionList();
    list5.putInteger(36);
    list5.putInteger(214);
    desc5.putList(cTID('Otpt'), list5);
    list1.putObject(cTID('LvlA'), desc5);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Smart Sharpen
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putBoolean(sTID("useLegacy"), true);
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 35);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 0.6);
    desc1.putBoolean(sTID("moreAccurate"), false);
    desc1.putInteger(cTID('Angl'), 1);
    desc1.putEnumerated(cTID('blur'), sTID("blurType"), cTID('MtnB'));
    executeAction(sTID('smartSharpen'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
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
  step5();      // Photo Filter
  step6();      // Levels
  step7();      // Smart Sharpen
  step8();      // Select
};



//=========================================
//                    Color_NTStudio20.main
//=========================================
//

Color_NTStudio20.main = function () {
  Color_NTStudio20();
};

Color_NTStudio20.main();

// EOF

"Color_NTStudio20.jsx"
// EOF
