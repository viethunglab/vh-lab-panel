#target photoshop
//
// Color_NTStudio16.jsx
//

//
// Generated Sat Jun 11 2022 13:28:57 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio16 ==============
//
function Color_NTStudio16() {
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

  // Hue/Saturation
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('H   '), -3);
    desc2.putInteger(cTID('Strt'), 0);
    desc2.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('hueSaturation'), desc1, dialogMode);
  };

  // Black & White
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putInteger(cTID('Rd  '), 2);
    desc1.putInteger(cTID('Yllw'), 72);
    desc1.putInteger(cTID('Grn '), 40);
    desc1.putInteger(cTID('Cyn '), 60);
    desc1.putInteger(cTID('Bl  '), 20);
    desc1.putInteger(cTID('Mgnt'), 80);
    desc1.putBoolean(sTID("useTint"), false);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 225);
    desc2.putDouble(cTID('Grn '), 211);
    desc2.putDouble(cTID('Bl  '), 179);
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
    desc2.putDouble(cTID('Lmnc'), 61);
    desc2.putDouble(cTID('A   '), -59);
    desc2.putDouble(cTID('B   '), -119);
    desc1.putObject(cTID('Clr '), cTID('LbCl'), desc2);
    desc1.putInteger(cTID('Dnst'), 19);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
  };

  // Filter Gallery
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('GEfk'), cTID('GEft'), cTID('DfsG'));
    desc1.putInteger(cTID('Grns'), 0);
    desc1.putInteger(cTID('GlwA'), 1);
    desc1.putInteger(cTID('ClrA'), 16);
    executeAction(1195730531, desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Effect");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Duplicate
  step3();      // Hue/Saturation
  step4();      // Black & White
  step5();      // Photo Filter
  step6();      // Filter Gallery
  step7();      // Select
};



//=========================================
//                    Color_NTStudio16.main
//=========================================
//

Color_NTStudio16.main = function () {
  Color_NTStudio16();
};

Color_NTStudio16.main();

// EOF

"Color_NTStudio16.jsx"
// EOF
