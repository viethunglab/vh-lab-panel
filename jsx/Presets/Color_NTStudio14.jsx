#target photoshop
//
// Color_NTStudio14.jsx
//

//
// Generated Sat Jun 11 2022 13:28:35 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio14 ==============
//
function Color_NTStudio14() {
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
    desc2.putDouble(cTID('Gmm '), 1.18);
    var list2 = new ActionList();
    list2.putInteger(11);
    list2.putInteger(255);
    desc2.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc2);
    var desc3 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list3 = new ActionList();
    list3.putInteger(19);
    list3.putInteger(255);
    desc3.putList(cTID('Otpt'), list3);
    list1.putObject(cTID('LvlA'), desc3);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Brightness/Contrast
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Cntr'), 41);
    desc1.putBoolean(sTID("useLegacy"), false);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  // Curves
  function step4(enabled, withDialog) {
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
    desc3.putDouble(cTID('Hrzn'), 14);
    desc3.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 141);
    desc4.putDouble(cTID('Vrtc'), 122);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 245);
    desc5.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc5);
    desc2.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc2);
    var desc6 = new ActionDescriptor();
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc6.putReference(cTID('Chnl'), ref2);
    var list3 = new ActionList();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 0);
    desc7.putDouble(cTID('Vrtc'), 15);
    list3.putObject(cTID('Pnt '), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Hrzn'), 124);
    desc8.putDouble(cTID('Vrtc'), 133);
    list3.putObject(cTID('Pnt '), desc8);
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 255);
    desc9.putDouble(cTID('Vrtc'), 234);
    list3.putObject(cTID('Pnt '), desc9);
    desc6.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc6);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Crvs'), desc1, dialogMode);
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
    desc4.putUnitDouble(cTID('H   '), cTID('#Ang'), 119.998168945313);
    desc4.putDouble(cTID('Strt'), 87.4509803921569);
    desc4.putDouble(cTID('Brgh'), 78.8235294117647);
    desc3.putObject(cTID('Clr '), cTID('HSBC'), desc4);
    desc3.putInteger(cTID('Dnst'), 25);
    desc3.putBoolean(cTID('PrsL'), true);
    desc2.putObject(cTID('Type'), sTID("photoFilter"), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc3.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('H   '), -20);
    desc4.putInteger(cTID('Strt'), -32);
    desc4.putInteger(cTID('Lght'), 5);
    list1.putObject(cTID('Hst2'), desc4);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    var desc4 = new ActionDescriptor();
    desc4.putString(cTID('Nm  '), "Cobalt-Iron 3");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Rd  '), 3.00384521484375);
    desc6.putDouble(cTID('Grn '), 3.00384521484375);
    desc6.putDouble(cTID('Bl  '), 3.00384521484375);
    desc5.putObject(cTID('Clr '), sTID("RGBColor"), desc6);
    desc5.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc5.putInteger(cTID('Lctn'), 0);
    desc5.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc5);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Rd  '), 7.04269409179688);
    desc8.putDouble(cTID('Grn '), 20.5989074707031);
    desc8.putDouble(cTID('Bl  '), 28.6376953125);
    desc7.putObject(cTID('Clr '), sTID("RGBColor"), desc8);
    desc7.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc7.putInteger(cTID('Lctn'), 62);
    desc7.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc7);
    var desc9 = new ActionDescriptor();
    var desc10 = new ActionDescriptor();
    desc10.putDouble(cTID('Rd  '), 39.71923828125);
    desc10.putDouble(cTID('Grn '), 76.7225646972656);
    desc10.putDouble(cTID('Bl  '), 85.7185363769531);
    desc9.putObject(cTID('Clr '), sTID("RGBColor"), desc10);
    desc9.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc9.putInteger(cTID('Lctn'), 1037);
    desc9.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc9);
    var desc11 = new ActionDescriptor();
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Rd  '), 110.161743164063);
    desc12.putDouble(cTID('Grn '), 132.161407470703);
    desc12.putDouble(cTID('Bl  '), 144.962768554688);
    desc11.putObject(cTID('Clr '), sTID("RGBColor"), desc12);
    desc11.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc11.putInteger(cTID('Lctn'), 2063);
    desc11.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc11);
    var desc13 = new ActionDescriptor();
    var desc14 = new ActionDescriptor();
    desc14.putDouble(cTID('Rd  '), 198.876342773438);
    desc14.putDouble(cTID('Grn '), 187.958221435547);
    desc14.putDouble(cTID('Bl  '), 195.958099365234);
    desc13.putObject(cTID('Clr '), sTID("RGBColor"), desc14);
    desc13.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc13.putInteger(cTID('Lctn'), 3090);
    desc13.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc13);
    var desc15 = new ActionDescriptor();
    var desc16 = new ActionDescriptor();
    desc16.putDouble(cTID('Rd  '), 244.642181396484);
    desc16.putDouble(cTID('Grn '), 233.560638427734);
    desc16.putDouble(cTID('Bl  '), 232.96142578125);
    desc15.putObject(cTID('Clr '), sTID("RGBColor"), desc16);
    desc15.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc15.putInteger(cTID('Lctn'), 3963);
    desc15.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc15);
    var desc17 = new ActionDescriptor();
    var desc18 = new ActionDescriptor();
    desc18.putDouble(cTID('Rd  '), 255);
    desc18.putDouble(cTID('Grn '), 255);
    desc18.putDouble(cTID('Bl  '), 255);
    desc17.putObject(cTID('Clr '), sTID("RGBColor"), desc18);
    desc17.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc17.putInteger(cTID('Lctn'), 4096);
    desc17.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc17);
    desc4.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc19 = new ActionDescriptor();
    desc19.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc19.putInteger(cTID('Lctn'), 0);
    desc19.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc19);
    var desc20 = new ActionDescriptor();
    desc20.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc20.putInteger(cTID('Lctn'), 4096);
    desc20.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc20);
    desc4.putList(cTID('Trns'), list2);
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc4);
    desc2.putObject(cTID('Type'), cTID('GdMp'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('SftL'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 46);
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
    ref1.putName(cTID('Lyr '), "Effect");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Levels
  step3();      // Brightness/Contrast
  step4();      // Curves
  step5();      // Make
  step6();      // Make
  step7();      // Make
  step8();      // Set
  step9();      // Set
  step10();      // Select
};



//=========================================
//                    Color_NTStudio14.main
//=========================================
//

Color_NTStudio14.main = function () {
  Color_NTStudio14();
};

Color_NTStudio14.main();

// EOF

"Color_NTStudio14.jsx"
// EOF
