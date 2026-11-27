#target photoshop
//
// Color_NTStudio21.jsx
//

//
// Generated Sat Jun 11 2022 13:29:49 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio21 ==============
//
function Color_NTStudio21() {
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

  // Smart Sharpen
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 35);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 2.1);
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

  // Make
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putClass(cTID('Nw  '), cTID('Chnl'));
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('At  '), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('UsrM'), cTID('RvlA'));
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Make
  function step5(enabled, withDialog) {
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
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc4.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 0);
    desc5.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 118);
    desc6.putDouble(cTID('Vrtc'), 133);
    list2.putObject(cTID('Pnt '), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 255);
    desc7.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc7);
    desc4.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc4);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 38);
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Scrn'));
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    var desc4 = new ActionDescriptor();
    desc4.putBoolean(cTID('enab'), true);
    desc4.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Clr '));
    desc4.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    var desc5 = new ActionDescriptor();
    desc5.putString(cTID('Nm  '), "Purple");
    desc5.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc5.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 255);
    desc7.putDouble(cTID('Grn '), 255);
    desc7.putDouble(cTID('Bl  '), 255);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 0);
    desc6.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc6);
    var desc8 = new ActionDescriptor();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 53.7704928964376);
    desc9.putDouble(cTID('Grn '), 49.9514622241259);
    desc9.putDouble(cTID('Bl  '), 143.769662976265);
    desc8.putObject(cTID('Clr '), sTID("RGBColor"), desc9);
    desc8.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc8.putInteger(cTID('Lctn'), 4096);
    desc8.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc8);
    desc5.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc10 = new ActionDescriptor();
    desc10.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc10.putInteger(cTID('Lctn'), 0);
    desc10.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc11.putInteger(cTID('Lctn'), 4096);
    desc11.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc11);
    desc5.putList(cTID('Trns'), list2);
    desc4.putObject(cTID('Grad'), cTID('Grdn'), desc5);
    desc4.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    desc4.putEnumerated(cTID('Type'), cTID('GrdT'), cTID('Lnr '));
    desc4.putBoolean(cTID('Rvrs'), false);
    desc4.putBoolean(cTID('Algn'), true);
    desc4.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    var desc12 = new ActionDescriptor();
    desc12.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), 0);
    desc12.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), 0);
    desc4.putObject(cTID('Ofst'), cTID('Pnt '), desc12);
    desc3.putObject(cTID('GrFl'), cTID('GrFl'), desc4);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('AdjL'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc4.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    list2.putInteger(60);
    list2.putInteger(230);
    desc4.putList(cTID('Inpt'), list2);
    desc4.putDouble(cTID('Gmm '), 1.13);
    var list3 = new ActionList();
    list3.putInteger(28);
    list3.putInteger(255);
    desc4.putList(cTID('Otpt'), list3);
    list1.putObject(cTID('LvlA'), desc4);
    var desc5 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc5.putReference(cTID('Chnl'), ref3);
    var list4 = new ActionList();
    list4.putInteger(36);
    list4.putInteger(255);
    desc5.putList(cTID('Inpt'), list4);
    var list5 = new ActionList();
    list5.putInteger(8);
    list5.putInteger(255);
    desc5.putList(cTID('Otpt'), list5);
    list1.putObject(cTID('LvlA'), desc5);
    var desc6 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc6.putReference(cTID('Chnl'), ref4);
    desc6.putDouble(cTID('Gmm '), 1.38);
    var list6 = new ActionList();
    list6.putInteger(17);
    list6.putInteger(229);
    desc6.putList(cTID('Otpt'), list6);
    list1.putObject(cTID('LvlA'), desc6);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Lvls'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Sharpen More
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('sharpenMore'), undefined, dialogMode);
  };

  // Select
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background copy 2");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Smart Sharpen
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 35);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 23);
    desc1.putInteger(cTID('Thsh'), 0);
    desc1.putInteger(cTID('Angl'), 1);
    desc1.putBoolean(sTID("moreAccurate"), false);
    desc1.putEnumerated(cTID('blur'), sTID("blurType"), cTID('GsnB'));
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
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background copy");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
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

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Levels 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Select
  function step14(enabled, withDialog) {
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
  step3();      // Smart Sharpen
  step4();      // Make
  step5();      // Make
  step6();      // Set
  step7();      // Make
  step8();      // Sharpen More
  step9();      // Select
  step10();      // Smart Sharpen
  step11();      // Select
  step12();      // Select
  step13();      // Select
  step14();      // Select
};



//=========================================
//                    Color_NTStudio21.main
//=========================================
//

Color_NTStudio21.main = function () {
  Color_NTStudio21();
};

Color_NTStudio21.main();

// EOF

"Color_NTStudio21.jsx"
// EOF
