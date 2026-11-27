#target photoshop
//
// Color_NTStudio03.jsx
//

//
// Generated Sat Jun 11 2022 13:26:31 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio03 ==============
//
function Color_NTStudio03() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Effect");
    desc1.putInteger(cTID('Vrsn'), 2);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Photo Filter
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Lmnc'), 70);
    desc2.putDouble(cTID('A   '), -47);
    desc2.putDouble(cTID('B   '), -4);
    desc1.putObject(cTID('Clr '), cTID('LbCl'), desc2);
    desc1.putInteger(cTID('Dnst'), 38);
    desc1.putBoolean(cTID('PrsL'), true);
    executeAction(sTID('photoFilter'), desc1, dialogMode);
  };

  // Levels
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc2.putReference(cTID('Chnl'), ref1);
    desc2.putDouble(cTID('Gmm '), 0.85);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    list2.putInteger(13);
    list2.putInteger(255);
    desc3.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc3);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Shadow/Highlight
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 0);
    desc2.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 35);
    desc2.putInteger(cTID('Rds '), 121);
    desc1.putObject(cTID('sdwM'), sTID("adaptCorrectTones"), desc2);
    var desc3 = new ActionDescriptor();
    desc3.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 0);
    desc3.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 44);
    desc3.putInteger(cTID('Rds '), 59);
    desc1.putObject(cTID('hglM'), sTID("adaptCorrectTones"), desc3);
    desc1.putDouble(cTID('BlcC'), 0.01);
    desc1.putDouble(cTID('WhtC'), 0.01);
    desc1.putInteger(cTID('Cntr'), 4);
    desc1.putInteger(cTID('ClrC'), -100);
    executeAction(sTID('adaptCorrect'), desc1, dialogMode);
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
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putString(cTID('Nm  '), "Yellow, Blue, Red, Green");
    desc3.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc3.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Rd  '), 255);
    desc5.putDouble(cTID('Grn '), 167.000005245209);
    desc5.putDouble(cTID('Bl  '), 0);
    desc4.putObject(cTID('Clr '), sTID("RGBColor"), desc5);
    desc4.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc4.putInteger(cTID('Lctn'), 205);
    desc4.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc4);
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 41.0038923472166);
    desc7.putDouble(cTID('Grn '), 12.0000002346933);
    desc7.putDouble(cTID('Bl  '), 93.0038930475712);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 1434);
    desc6.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc6);
    var desc8 = new ActionDescriptor();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 225.000001788139);
    desc9.putDouble(cTID('Grn '), 0);
    desc9.putDouble(cTID('Bl  '), 25.0038914009929);
    desc8.putObject(cTID('Clr '), sTID("RGBColor"), desc9);
    desc8.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc8.putInteger(cTID('Lctn'), 2662);
    desc8.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc8);
    var desc10 = new ActionDescriptor();
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Rd  '), 0);
    desc11.putDouble(cTID('Grn '), 96.0000018775463);
    desc11.putDouble(cTID('Bl  '), 27.0038912817836);
    desc10.putObject(cTID('Clr '), sTID("RGBColor"), desc11);
    desc10.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc10.putInteger(cTID('Lctn'), 3891);
    desc10.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc10);
    desc3.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc12 = new ActionDescriptor();
    desc12.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc12.putInteger(cTID('Lctn'), 0);
    desc12.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc13.putInteger(cTID('Lctn'), 4096);
    desc13.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc13);
    desc3.putList(cTID('Trns'), list2);
    desc2.putObject(cTID('Grad'), cTID('Grdn'), desc3);
    desc1.putObject(cTID('T   '), cTID('GdMp'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 6);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
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
    desc3.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('H   '), 0);
    desc4.putInteger(cTID('Strt'), -16);
    desc4.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc4);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
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
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 255);
    desc4.putDouble(cTID('Grn '), 164.579763114452);
    desc4.putDouble(cTID('Bl  '), 129.000007510185);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Dfrn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Xclu'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step13(enabled, withDialog) {
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
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 50);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(sTID("contentLayer"), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Rd  '), 176.466923654079);
    desc3.putDouble(cTID('Grn '), 166.000005304813);
    desc3.putDouble(cTID('Bl  '), 255);
    desc2.putObject(cTID('Clr '), sTID("RGBColor"), desc3);
    desc1.putObject(cTID('T   '), sTID("solidColorLayer"), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step16(enabled, withDialog) {
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
    desc4.putString(cTID('Nm  '), "Foreground to Background");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Rd  '), 0);
    desc6.putDouble(cTID('Grn '), 0);
    desc6.putDouble(cTID('Bl  '), 0);
    desc5.putObject(cTID('Clr '), sTID("RGBColor"), desc6);
    desc5.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc5.putInteger(cTID('Lctn'), 0);
    desc5.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc5);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Rd  '), 255);
    desc8.putDouble(cTID('Grn '), 255);
    desc8.putDouble(cTID('Bl  '), 255);
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
  function step17(enabled, withDialog) {
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
  function step18(enabled, withDialog) {
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

  // Set
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 78);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step20(enabled, withDialog) {
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
  step2();      // Photo Filter
  step3();      // Levels
  step4();      // Shadow/Highlight
  step5();      // Make
  step6();      // Set
  step7();      // Set
  step8();      // Set
  step9();      // Make
  step10();      // Make
  step11();      // Set
  step12();      // Set
  step13();      // Set
  step14();      // Set
  step15();      // Set
  step16();      // Make
  step17();      // Set
  step18();      // Set
  step19();      // Set
  step20();      // Select
};



//=========================================
//                    Color_NTStudio03.main
//=========================================
//

Color_NTStudio03.main = function () {
  Color_NTStudio03();
};

Color_NTStudio03.main();

// EOF

"Color_NTStudio03.jsx"
// EOF
