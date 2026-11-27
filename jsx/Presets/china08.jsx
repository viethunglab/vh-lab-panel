#target photoshop
//
// china8.jsx
//

//
// Generated Sun Mar 06 2022 12:02:43 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 8 ==============
//
function _8() {
  // Make
  function step1(enabled, withDialog) {
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
    desc2.putObject(cTID('Type'), cTID('SlcC'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step2(enabled, withDialog) {
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
    desc3.putEnumerated(cTID('Clrs'), cTID('Clrs'), cTID('Rds '));
    desc3.putUnitDouble(cTID('Cyn '), cTID('#Prc'), -54);
    desc3.putUnitDouble(cTID('Mgnt'), cTID('#Prc'), -13);
    desc3.putUnitDouble(cTID('Ylw '), cTID('#Prc'), -21);
    list1.putObject(cTID('ClrC'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('Clrs'), cTID('Clrs'), cTID('Mgnt'));
    desc4.putUnitDouble(cTID('Cyn '), cTID('#Prc'), -21);
    list1.putObject(cTID('ClrC'), desc4);
    desc2.putList(cTID('ClrC'), list1);
    desc1.putObject(cTID('T   '), cTID('SlcC'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Visible
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('mergeVisible'), undefined, dialogMode);
  };

  // Camera Raw Filter
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CMod'), "Filter");
    desc1.putEnumerated(cTID('Sett'), cTID('Sett'), cTID('Cst '));
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -14);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putInteger(cTID('AWBV'), 134348800);
    desc1.putBoolean(cTID('CtoG'), false);
    desc1.putInteger(cTID('Strt'), 0);
    desc1.putInteger(cTID('Shrp'), 0);
    desc1.putInteger(cTID('LNR '), 0);
    desc1.putInteger(cTID('CNR '), 0);
    desc1.putInteger(cTID('VigA'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('Vibr'), 38);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -2);
    desc1.putInteger(cTID('SA_O'), -8);
    desc1.putInteger(cTID('SA_Y'), -48);
    desc1.putInteger(cTID('SA_G'), -46);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 4);
    desc1.putInteger(cTID('LA_O'), 24);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 150);
    desc1.putInteger(cTID('STSS'), 10);
    desc1.putInteger(cTID('STHH'), 42);
    desc1.putInteger(cTID('STHS'), 17);
    desc1.putInteger(cTID('STB '), 0);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('PCVA'), 0);
    desc1.putInteger(cTID('GRNA'), 0);
    desc1.putInteger(cTID('LPEn'), 0);
    desc1.putInteger(cTID('MDis'), 0);
    desc1.putInteger(cTID('PerV'), 0);
    desc1.putInteger(cTID('PerH'), 0);
    desc1.putDouble(cTID('PerR'), 0);
    desc1.putInteger(cTID('PerS'), 100);
    desc1.putInteger(cTID('PerA'), 0);
    desc1.putInteger(cTID('PerU'), 0);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putDouble(cTID('Ex12'), 0.6);
    desc1.putInteger(cTID('Cr12'), 18);
    desc1.putInteger(cTID('Hi12'), 0);
    desc1.putInteger(cTID('Sh12'), 0);
    desc1.putInteger(cTID('Wh12'), 0);
    desc1.putInteger(cTID('Bk12'), 0);
    desc1.putInteger(cTID('Cl12'), 0);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(12);
    list2.putInteger(255);
    list2.putInteger(245);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(184);
    list4.putInteger(192);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('CamP'), "Embedded");
    desc1.putString(cTID('CP_D'), "54650A341B5B5CCAE8442D0B43A92BCE");
    desc1.putInteger(cTID('PrVe'), 101122048);
    desc1.putString(cTID('Rtch'), "");
    desc1.putString(cTID('REye'), "");
    desc1.putString(cTID('LCs '), "");
    desc1.putString(cTID('Upri'), "");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
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
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('SlcC'), desc3);
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
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 0);
    desc4.putDouble(cTID('Grn '), 0);
    desc4.putDouble(cTID('Bl  '), 51.0031127929688);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Xclu'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 20);
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
    desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
    desc2.putObject(cTID('Type'), cTID('SlcC'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step10(enabled, withDialog) {
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
    desc3.putEnumerated(cTID('Clrs'), cTID('Clrs'), cTID('Bls '));
    desc3.putUnitDouble(cTID('Mgnt'), cTID('#Prc'), -1);
    desc3.putUnitDouble(cTID('Ylw '), cTID('#Prc'), 62);
    desc3.putUnitDouble(cTID('Blck'), cTID('#Prc'), 39);
    list1.putObject(cTID('ClrC'), desc3);
    desc2.putList(cTID('ClrC'), list1);
    desc1.putObject(cTID('T   '), cTID('SlcC'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Visible
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('mergeVisible'), undefined, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Curves
  function step14(enabled, withDialog) {
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
    var desc3 = new ActionDescriptor();
    desc3.putDouble(cTID('Hrzn'), 0);
    desc3.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 200);
    desc4.putDouble(cTID('Vrtc'), 209);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 255);
    desc5.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc5);
    desc2.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Crvs'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Set
  step3();      // Merge Visible
  step4();      // Camera Raw Filter
  step5();      // Make
  step6();      // Make
  step7();      // Set
  step8();      // Set
  step9();      // Make
  step10();      // Set
  step11();      // Merge Visible
  step12();      // Set
  step13();      // Set
  step14();      // Curves
  step15();      // Set
};



//=========================================
//                    _8.main
//=========================================
//

_8.main = function () {
  _8();
};

_8.main();

// EOF

"china8.jsx"
// EOF
