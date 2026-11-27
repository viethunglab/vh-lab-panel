#target photoshop
//
// china10.jsx
//

//
// Generated Sun Mar 06 2022 12:03:15 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 10 ==============
//
function _10() {
  // Camera Raw Filter
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CMod'), "Filter");
    desc1.putEnumerated(cTID('Sett'), cTID('Sett'), cTID('Cst '));
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -19);
    desc1.putInteger(cTID('Tint'), 13);
    desc1.putInteger(cTID('AWBV'), 134348800);
    desc1.putBoolean(cTID('CtoG'), false);
    desc1.putInteger(cTID('Strt'), -37);
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
    desc1.putInteger(cTID('Vibr'), 0);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), 8);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 276);
    desc1.putInteger(cTID('STSS'), 9);
    desc1.putInteger(cTID('STHH'), 60);
    desc1.putInteger(cTID('STHS'), 33);
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
    desc1.putDouble(cTID('Ex12'), 0.9);
    desc1.putInteger(cTID('Cr12'), 0);
    desc1.putInteger(cTID('Hi12'), 0);
    desc1.putInteger(cTID('Sh12'), 32);
    desc1.putInteger(cTID('Wh12'), 0);
    desc1.putInteger(cTID('Bk12'), 0);
    desc1.putInteger(cTID('Cl12'), 16);
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
    list2.putInteger(0);
    list2.putInteger(255);
    list2.putInteger(255);
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
  function step2(enabled, withDialog) {
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
  function step3(enabled, withDialog) {
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
    desc3.putEnumerated(cTID('Clrs'), cTID('Clrs'), cTID('Blks'));
    desc3.putUnitDouble(cTID('Cyn '), cTID('#Prc'), -6);
    desc3.putUnitDouble(cTID('Mgnt'), cTID('#Prc'), -2);
    desc3.putUnitDouble(cTID('Blck'), cTID('#Prc'), 4);
    list1.putObject(cTID('ClrC'), desc3);
    desc2.putList(cTID('ClrC'), list1);
    desc1.putObject(cTID('T   '), cTID('SlcC'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step4(enabled, withDialog) {
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
  function step5(enabled, withDialog) {
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
    desc5.putDouble(cTID('Hrzn'), 195);
    desc5.putDouble(cTID('Vrtc'), 198);
    list2.putObject(cTID('Pnt '), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 255);
    desc6.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc6);
    desc3.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc3);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('Crvs'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
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
    desc3.putDouble(cTID('Exps'), 0);
    desc3.putDouble(cTID('Ofst'), 0);
    desc3.putDouble(sTID("gammaCorrection"), 1);
    desc2.putObject(cTID('Type'), cTID('Exps'), desc3);
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
    desc2.putDouble(cTID('Ofst'), 0.00829999987036);
    desc1.putObject(cTID('T   '), cTID('Exps'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step8(enabled, withDialog) {
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
    desc4.putString(cTID('Nm  '), "前景色到背景色渐变");
    desc4.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc4.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc5 = new ActionDescriptor();
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Rd  '), 95.00244140625);
    desc6.putDouble(cTID('Grn '), 121.998138427734);
    desc6.putDouble(cTID('Bl  '), 61.9990539550781);
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
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    desc3.putString(cTID('Nm  '), "$$$/DefaultGradient/BlackWhite=Black, White");
    desc3.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc3.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc4 = new ActionDescriptor();
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Rd  '), 3.47736583091319);
    desc5.putDouble(cTID('Grn '), 0);
    desc5.putDouble(cTID('Bl  '), 0.0787217488687);
    desc4.putObject(cTID('Clr '), sTID("RGBColor"), desc5);
    desc4.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc4.putInteger(cTID('Lctn'), 0);
    desc4.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc4);
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 255);
    desc7.putDouble(cTID('Grn '), 255);
    desc7.putDouble(cTID('Bl  '), 255);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 4096);
    desc6.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc6);
    desc3.putList(cTID('Clrs'), list1);
    var list2 = new ActionList();
    var desc8 = new ActionDescriptor();
    desc8.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc8.putInteger(cTID('Lctn'), 0);
    desc8.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc8);
    var desc9 = new ActionDescriptor();
    desc9.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc9.putInteger(cTID('Lctn'), 4096);
    desc9.putInteger(cTID('Mdpn'), 50);
    list2.putObject(cTID('TrnS'), desc9);
    desc3.putList(cTID('Trns'), list2);
    desc2.putObject(cTID('Grad'), cTID('Grdn'), desc3);
    desc1.putObject(cTID('T   '), cTID('GdMp'), desc2);
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
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Lmns'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 20);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 30);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step13(enabled, withDialog) {
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
    desc3.putBoolean(cTID('Clrz'), false);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step14(enabled, withDialog) {
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
    desc3.putInteger(cTID('LclR'), 1);
    desc3.putInteger(cTID('BgnR'), 315);
    desc3.putInteger(cTID('BgnS'), 345);
    desc3.putInteger(cTID('EndS'), 15);
    desc3.putInteger(cTID('EndR'), 45);
    desc3.putInteger(cTID('H   '), 2);
    desc3.putInteger(cTID('Strt'), -3);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('LclR'), 5);
    desc3.putInteger(cTID('BgnR'), 343);
    desc3.putInteger(cTID('BgnS'), 13);
    desc3.putInteger(cTID('EndS'), 43);
    desc3.putInteger(cTID('EndR'), 73);
    desc3.putInteger(cTID('H   '), 0);
    desc3.putInteger(cTID('Strt'), 0);
    desc3.putInteger(cTID('Lght'), 1);
    list1.putObject(cTID('Hst2'), desc3);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Visible
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('mergeVisible'), undefined, dialogMode);
  };

  step1();      // Camera Raw Filter
  step2();      // Make
  step3();      // Set
  step4();      // Make
  step5();      // Set
  step6();      // Make
  step7();      // Set
  step8();      // Make
  step9();      // Set
  step10();      // Set
  step11();      // Set
  step12();      // Set
  step13();      // Make
  step14();      // Set
  step15();      // Set
  step16();      // Merge Visible
};



//=========================================
//                    _10.main
//=========================================
//

_10.main = function () {
  _10();
};

_10.main();

// EOF

"china10.jsx"
// EOF
