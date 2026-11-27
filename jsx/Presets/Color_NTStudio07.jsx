#target photoshop
//
// Color_NTStudio07.jsx
//

//
// Generated Sat Jun 11 2022 13:27:11 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio07 ==============
//
function Color_NTStudio07() {
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
    desc2.putDouble(cTID('Gmm '), 0.8);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc3.putReference(cTID('Chnl'), ref2);
    desc3.putDouble(cTID('Gmm '), 0.81);
    var list2 = new ActionList();
    list2.putInteger(15);
    list2.putInteger(255);
    desc3.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc3);
    var desc4 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc4.putReference(cTID('Chnl'), ref3);
    desc4.putDouble(cTID('Gmm '), 0.72);
    var list3 = new ActionList();
    list3.putInteger(69);
    list3.putInteger(255);
    desc4.putList(cTID('Otpt'), list3);
    list1.putObject(cTID('LvlA'), desc4);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Brightness/Contrast
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Cntr'), 51);
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
    desc2.putDouble(cTID('Lmnc'), 46.27);
    desc2.putDouble(cTID('A   '), -107);
    desc2.putDouble(cTID('B   '), 106);
    desc1.putObject(cTID('Clr '), cTID('LbCl'), desc2);
    desc1.putInteger(cTID('Dnst'), 43);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
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
    var desc4 = new ActionDescriptor();
    desc4.putString(cTID('Nm  '), "Yellow, Violet");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Rd  '), 249.000000357628);
    desc6.putDouble(cTID('Grn '), 229.996110498905);
    desc6.putDouble(cTID('Bl  '), 0);
    desc5.putObject(cTID('Clr '), sTID("RGBColor"), desc6);
    desc5.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc5.putInteger(cTID('Lctn'), 0);
    desc5.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc5);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Rd  '), 111.003891974688);
    desc8.putDouble(cTID('Grn '), 21.0038916394114);
    desc8.putDouble(cTID('Bl  '), 108.000001162291);
    desc7.putObject(cTID('Clr '), sTID("RGBColor"), desc8);
    desc7.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc7.putInteger(cTID('Lctn'), 4096);
    desc7.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc7);
    desc4.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc9.putInteger(cTID('Lctn'), 0);
    desc9.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc10.putInteger(cTID('Lctn'), 4096);
    desc10.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc10);
    desc4.putList(cTID('Trns'), list2);
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc4);
    desc2.putObject(cTID('Type'), cTID('GdMp'), desc3);
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
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('SftL'));
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 54);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 255);
    desc4.putDouble(cTID('Grn '), 219.459139108658);
    desc4.putDouble(cTID('Bl  '), 96.0000018775463);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 25);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Gradient Map 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putString(cTID('Nm  '), "Custom");
    desc3.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc3.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Rd  '), 255);
    desc5.putDouble(cTID('Grn '), 242.571064531803);
    desc5.putDouble(cTID('Bl  '), 80.0590516626835);
    desc4.putObject(cTID('Clr '), sTID("RGBColor"), desc5);
    desc4.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc4.putInteger(cTID('Lctn'), 0);
    desc4.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc4);
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 131.525291204453);
    desc7.putDouble(cTID('Grn '), 116.003891676664);
    desc7.putDouble(cTID('Bl  '), 225.988328754902);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 1147);
    desc6.putInteger(cTID('Mdpn'), 52);
    list1.putObject(cTID('Clrt'), desc6);
    var desc8 = new ActionDescriptor();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 135.116736888885);
    desc9.putDouble(cTID('Grn '), 171.128407716751);
    desc9.putDouble(cTID('Bl  '), 198.883273601532);
    desc8.putObject(cTID('Clr '), sTID("RGBColor"), desc9);
    desc8.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc8.putInteger(cTID('Lctn'), 2744);
    desc8.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc8);
    var desc10 = new ActionDescriptor();
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Rd  '), 182.647459208965);
    desc11.putDouble(cTID('Grn '), 107.636695057154);
    desc11.putDouble(cTID('Bl  '), 139.792841970921);
    desc10.putObject(cTID('Clr '), sTID("RGBColor"), desc11);
    desc10.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc10.putInteger(cTID('Lctn'), 3645);
    desc10.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc10);
    var desc12 = new ActionDescriptor();
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Rd  '), 164.119805395603);
    desc13.putDouble(cTID('Grn '), 49.897470921278);
    desc13.putDouble(cTID('Bl  '), 141.740480661392);
    desc12.putObject(cTID('Clr '), sTID("RGBColor"), desc13);
    desc12.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc12.putInteger(cTID('Lctn'), 4096);
    desc12.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc12);
    desc3.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc14 = new ActionDescriptor();
    desc14.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc14.putInteger(cTID('Lctn'), 0);
    desc14.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc15.putInteger(cTID('Lctn'), 4096);
    desc15.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc15);
    desc3.putList(cTID('Trns'), list2);
    desc2.putObject(cTID('Grad'), cTID('Grdn'), desc3);
    desc1.putObject(cTID('T   '), cTID('GdMp'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Color Fill 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step14(enabled, withDialog) {
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
    desc6.putDouble(cTID('Hrzn'), 92);
    desc6.putDouble(cTID('Vrtc'), 115);
    list2.putObject(cTID('Pnt '), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 255);
    desc7.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc7);
    desc4.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc4);
    var desc8 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc8.putReference(cTID('Chnl'), ref3);
    var list3 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 0);
    desc9.putDouble(cTID('Vrtc'), 28);
    list3.putObject(cTID('Pnt '), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putDouble(cTID('Hrzn'), 255);
    desc10.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc10);
    desc8.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc8);
    var desc11 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc11.putReference(cTID('Chnl'), ref4);
    var list4 = new ActionList();
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Hrzn'), 2);
    desc12.putDouble(cTID('Vrtc'), 19);
    list4.putObject(cTID('Pnt '), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Hrzn'), 255);
    desc13.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc13);
    desc11.putList(cTID('Crv '), list4);
    list1.putObject(cTID('CrvA'), desc11);
    var desc14 = new ActionDescriptor();
    var ref5 = new ActionReference();
    ref5.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc14.putReference(cTID('Chnl'), ref5);
    var list5 = new ActionList();
    var desc15 = new ActionDescriptor();
    desc15.putDouble(cTID('Hrzn'), 14);
    desc15.putDouble(cTID('Vrtc'), 48);
    list5.putObject(cTID('Pnt '), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putDouble(cTID('Hrzn'), 255);
    desc16.putDouble(cTID('Vrtc'), 245);
    list5.putObject(cTID('Pnt '), desc16);
    desc14.putList(cTID('Crv '), list5);
    list1.putObject(cTID('CrvA'), desc14);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step15(enabled, withDialog) {
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
  step2();      // Levels
  step3();      // Brightness/Contrast
  step4();      // Photo Filter
  step5();      // Make
  step6();      // Set
  step7();      // Set
  step8();      // Make
  step9();      // Set
  step10();      // Set
  step11();      // Select
  step12();      // Set
  step13();      // Select
  step14();      // Make
  step15();      // Select
};



//=========================================
//                    Color_NTStudio07.main
//=========================================
//

Color_NTStudio07.main = function () {
  Color_NTStudio07();
};

Color_NTStudio07.main();

// EOF

"Color_NTStudio07.jsx"
// EOF
