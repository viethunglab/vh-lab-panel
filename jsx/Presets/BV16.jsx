#target photoshop
//
// BV16.jsx
//

//
// Generated Sun Nov 21 2021 15:32:16 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== BV16 ==============
//
function BV16() {
  // Duplicate
  function step1(enabled, withDialog) {
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

  // Set
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "BV16");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 185);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Clr '), cTID('FrgC'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 0);
    desc2.putDouble(cTID('Brgh'), 76.4705882352941);
    desc1.putObject(cTID('T   '), cTID('HSBC'), desc2);
    desc1.putString(cTID('Srce'), "photoshopPicker");
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step5(enabled, withDialog) {
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
    desc4.putDouble(cTID('Rd  '), 195.000003576279);
    desc4.putDouble(cTID('Grn '), 195.000003576279);
    desc4.putDouble(cTID('Bl  '), 195.000003576279);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Move
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putIndex(cTID('Lyr '), 1);
    desc1.putReference(cTID('T   '), ref2);
    desc1.putBoolean(cTID('Adjs'), false);
    desc1.putInteger(cTID('Vrsn'), 5);
    var list1 = new ActionList();
    list1.putInteger(186);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    desc1.putInteger(cTID('LyrI'), 187);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var list1 = new ActionList();
    list1.putInteger(187);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Select
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "BV16");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(184);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Transform
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('FTcs'), cTID('QCSt'), sTID("QCSAverage"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -1.13686837721616e-13);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 2.27373675443232e-13);
    desc1.putObject(cTID('Ofst'), cTID('Ofst'), desc2);
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 85.0299830717585);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Prc'), 85.0299830717585);
    desc1.putBoolean(cTID('Lnkd'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), cTID('Blnr'));
    executeAction(cTID('Trnf'), desc1, dialogMode);
  };

  // Set
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 208.333333333333);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('CtrF'));
    desc3.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('GrFl'));
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 40);
    desc3.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 24);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 250.000000298023);
    desc4.putDouble(cTID('Grn '), 246.077820360661);
    desc4.putDouble(cTID('Bl  '), 246.077820360661);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putString(cTID('Nm  '), "Gray, White");
    desc5.putEnumerated(cTID('GrdF'), cTID('GrdF'), cTID('CstS'));
    desc5.putDouble(cTID('Intr'), 4096);
    var list1 = new ActionList();
    var desc6 = new ActionDescriptor();
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Rd  '), 0);
    desc7.putDouble(cTID('Grn '), 0);
    desc7.putDouble(cTID('Bl  '), 0);
    desc6.putObject(cTID('Clr '), sTID("RGBColor"), desc7);
    desc6.putEnumerated(cTID('Type'), cTID('Clry'), cTID('UsrS'));
    desc6.putInteger(cTID('Lctn'), 0);
    desc6.putInteger(cTID('Mdpn'), 50);
    list1.putObject(cTID('Clrt'), desc6);
    var desc8 = new ActionDescriptor();
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Rd  '), 255);
    desc9.putDouble(cTID('Grn '), 255);
    desc9.putDouble(cTID('Bl  '), 255);
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
    desc3.putObject(cTID('Grad'), cTID('Grdn'), desc5);
    desc3.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    desc3.putEnumerated(cTID('Type'), cTID('GrdT'), cTID('Lnr '));
    desc3.putBoolean(cTID('Rvrs'), false);
    desc3.putBoolean(cTID('Dthr'), false);
    desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
    desc3.putBoolean(cTID('Algn'), true);
    var desc12 = new ActionDescriptor();
    desc12.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), 0);
    desc12.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), 0);
    desc3.putObject(cTID('Ofst'), cTID('Pnt '), desc12);
    desc3.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Set
  step3();      // Make
  step4();      // Set
  step5();      // Make
  step6();      // Move
  step7();      // Select
  step8();      // Set
  step9();      // Delete
  step10();      // Select
  step11();      // Transform
  step12();      // Set
};



//=========================================
//                    BV16.main
//=========================================
//

BV16.main = function () {
  BV16();
};

BV16.main();

// EOF

"BV16.jsx"
// EOF
