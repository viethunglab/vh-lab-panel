#target photoshop
//
// Color_NTStudio06.jsx
//

//
// Generated Sat Jun 11 2022 13:27:01 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Color-NTStudio06 ==============
//
function Color_NTStudio06() {
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
    desc2.putDouble(cTID('Gmm '), 0.94);
    list1.putObject(cTID('LvlA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  // Make
  function step3(enabled, withDialog) {
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
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc4.putReference(cTID('Chnl'), ref2);
    desc4.putDouble(cTID('Gmm '), 1.37);
    list1.putObject(cTID('LvlA'), desc4);
    var desc5 = new ActionDescriptor();
    var ref3 = new ActionReference();
    ref3.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Rd  '));
    desc5.putReference(cTID('Chnl'), ref3);
    desc5.putDouble(cTID('Gmm '), 1.08);
    list1.putObject(cTID('LvlA'), desc5);
    var desc6 = new ActionDescriptor();
    var ref4 = new ActionReference();
    ref4.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Grn '));
    desc6.putReference(cTID('Chnl'), ref4);
    desc6.putDouble(cTID('Gmm '), 1.09);
    list1.putObject(cTID('LvlA'), desc6);
    var desc7 = new ActionDescriptor();
    var ref5 = new ActionReference();
    ref5.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Bl  '));
    desc7.putReference(cTID('Chnl'), ref5);
    var list2 = new ActionList();
    list2.putInteger(40);
    list2.putInteger(255);
    desc7.putList(cTID('Otpt'), list2);
    list1.putObject(cTID('LvlA'), desc7);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Lvls'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
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
    desc6.putDouble(cTID('Hrzn'), 12);
    desc6.putDouble(cTID('Vrtc'), 14);
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
    desc9.putDouble(cTID('Vrtc'), 14);
    list3.putObject(cTID('Pnt '), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putDouble(cTID('Hrzn'), 241);
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
    desc12.putDouble(cTID('Hrzn'), 42);
    desc12.putDouble(cTID('Vrtc'), 21);
    list4.putObject(cTID('Pnt '), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Hrzn'), 252);
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
    desc15.putDouble(cTID('Hrzn'), 67);
    desc15.putDouble(cTID('Vrtc'), 51);
    list5.putObject(cTID('Pnt '), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putDouble(cTID('Hrzn'), 249);
    desc16.putDouble(cTID('Vrtc'), 255);
    list5.putObject(cTID('Pnt '), desc16);
    desc14.putList(cTID('Crv '), list5);
    list1.putObject(cTID('CrvA'), desc14);
    desc3.putList(cTID('Adjs'), list1);
    desc2.putObject(cTID('Type'), cTID('Crvs'), desc3);
    desc1.putObject(cTID('Usng'), cTID('AdjL'), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step5(enabled, withDialog) {
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
  step3();      // Make
  step4();      // Make
  step5();      // Select
};



//=========================================
//                    Color_NTStudio06.main
//=========================================
//

Color_NTStudio06.main = function () {
  Color_NTStudio06();
};

Color_NTStudio06.main();

// EOF

"Color_NTStudio06.jsx"
// EOF
