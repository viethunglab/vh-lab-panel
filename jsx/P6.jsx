#target photoshop
//
// SolarCurve.jsx
//

//
// Generated Thu Jun 02 2022 23:02:08 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Solar Curve ==============
//
function SolarCurve() {
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
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Solar_Curve");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
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
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc3.putReference(cTID('Chnl'), ref2);
    var list2 = new ActionList();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Hrzn'), 0);
    desc4.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putDouble(cTID('Hrzn'), 41);
    desc5.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putDouble(cTID('Hrzn'), 92);
    desc6.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putDouble(cTID('Hrzn'), 143);
    desc7.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Hrzn'), 194);
    desc8.putDouble(cTID('Vrtc'), 0);
    list2.putObject(cTID('Pnt '), desc8);
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 255);
    desc9.putDouble(cTID('Vrtc'), 255);
    list2.putObject(cTID('Pnt '), desc9);
    desc3.putList(cTID('Crv '), list2);
    list1.putObject(cTID('CrvA'), desc3);
    var desc10 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc10.putReference(cTID('Chnl'), ref3);
    var list3 = new ActionList();
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Hrzn'), 0);
    desc11.putDouble(cTID('Vrtc'), 0);
    list3.putObject(cTID('Pnt '), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Hrzn'), 51);
    desc12.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Hrzn'), 102);
    desc13.putDouble(cTID('Vrtc'), 0);
    list3.putObject(cTID('Pnt '), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putDouble(cTID('Hrzn'), 153);
    desc14.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putDouble(cTID('Hrzn'), 204);
    desc15.putDouble(cTID('Vrtc'), 0);
    list3.putObject(cTID('Pnt '), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putDouble(cTID('Hrzn'), 255);
    desc16.putDouble(cTID('Vrtc'), 255);
    list3.putObject(cTID('Pnt '), desc16);
    desc10.putList(cTID('Crv '), list3);
    list1.putObject(cTID('CrvA'), desc10);
    var desc17 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc17.putReference(cTID('Chnl'), ref4);
    var list4 = new ActionList();
    var desc18 = new ActionDescriptor();
    desc18.putDouble(cTID('Hrzn'), 0);
    desc18.putDouble(cTID('Vrtc'), 0);
    list4.putObject(cTID('Pnt '), desc18);
    var desc19 = new ActionDescriptor();
    desc19.putDouble(cTID('Hrzn'), 61);
    desc19.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc19);
    var desc20 = new ActionDescriptor();
    desc20.putDouble(cTID('Hrzn'), 112);
    desc20.putDouble(cTID('Vrtc'), 0);
    list4.putObject(cTID('Pnt '), desc20);
    var desc21 = new ActionDescriptor();
    desc21.putDouble(cTID('Hrzn'), 163);
    desc21.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc21);
    var desc22 = new ActionDescriptor();
    desc22.putDouble(cTID('Hrzn'), 214);
    desc22.putDouble(cTID('Vrtc'), 0);
    list4.putObject(cTID('Pnt '), desc22);
    var desc23 = new ActionDescriptor();
    desc23.putDouble(cTID('Hrzn'), 255);
    desc23.putDouble(cTID('Vrtc'), 255);
    list4.putObject(cTID('Pnt '), desc23);
    desc17.putList(cTID('Crv '), list4);
    list1.putObject(cTID('CrvA'), desc17);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('Crvs'), desc2);
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
    desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Select
  step3();      // Set
  step4();      // Select
  step5();      // Delete
  step6();      // Set
  step7();      // Set
};



//=========================================
//                    SolarCurve.main
//=========================================
//

SolarCurve.main = function () {
  SolarCurve();
};

SolarCurve.main();

// EOF

"SolarCurve.jsx"
// EOF
