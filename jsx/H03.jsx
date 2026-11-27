#target photoshop
//
// Remove Green .jsx
//

//
// Generated Tue Jun 28 2022 12:11:06 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Remove Green  ==============
//
function RemoveGreen() {
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
    desc3.putBoolean(cTID('Clrz'), false);
    desc2.putObject(cTID('Type'), cTID('HStr'), desc3);
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
    desc3.putInteger(cTID('LclR'), 2);
    desc3.putInteger(cTID('BgnR'), 15);
    desc3.putInteger(cTID('BgnS'), 45);
    desc3.putInteger(cTID('EndS'), 75);
    desc3.putInteger(cTID('EndR'), 105);
    desc3.putInteger(cTID('H   '), -4);
    desc3.putInteger(cTID('Strt'), -19);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('LclR'), 3);
    desc4.putInteger(cTID('BgnR'), 75);
    desc4.putInteger(cTID('BgnS'), 105);
    desc4.putInteger(cTID('EndS'), 135);
    desc4.putInteger(cTID('EndR'), 165);
    desc4.putInteger(cTID('H   '), -6);
    desc4.putInteger(cTID('Strt'), -25);
    desc4.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc4);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Invert
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('Invr'), undefined, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
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
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Remove Green");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step6(enabled, withDialog) {
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
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('LclR'), 3);
    desc3.putInteger(cTID('BgnR'), 75);
    desc3.putInteger(cTID('BgnS'), 105);
    desc3.putInteger(cTID('EndS'), 135);
    desc3.putInteger(cTID('EndR'), 165);
    desc3.putInteger(cTID('H   '), -6);
    desc3.putInteger(cTID('Strt'), -70);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
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
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 80);
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
    ref1.putEnumerated(cTID('AdjL'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('H   '), -10);
    desc3.putInteger(cTID('Strt'), 0);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('LclR'), 2);
    desc4.putInteger(cTID('BgnR'), 15);
    desc4.putInteger(cTID('BgnS'), 45);
    desc4.putInteger(cTID('EndS'), 75);
    desc4.putInteger(cTID('EndR'), 105);
    desc4.putInteger(cTID('H   '), -10);
    desc4.putInteger(cTID('Strt'), -10);
    desc4.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc4);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
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
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putInteger(cTID('H   '), 0);
    desc3.putInteger(cTID('Strt'), 0);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('LclR'), 2);
    desc4.putInteger(cTID('BgnR'), 15);
    desc4.putInteger(cTID('BgnS'), 45);
    desc4.putInteger(cTID('EndS'), 75);
    desc4.putInteger(cTID('EndR'), 105);
    desc4.putInteger(cTID('H   '), -18);
    desc4.putInteger(cTID('Strt'), -23);
    desc4.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putInteger(cTID('LclR'), 3);
    desc5.putInteger(cTID('BgnR'), 75);
    desc5.putInteger(cTID('BgnS'), 105);
    desc5.putInteger(cTID('EndS'), 135);
    desc5.putInteger(cTID('EndR'), 165);
    desc5.putInteger(cTID('H   '), 0);
    desc5.putInteger(cTID('Strt'), 0);
    desc5.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc5);
    desc2.putList(cTID('Adjs'), list1);
    desc1.putObject(cTID('T   '), cTID('HStr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Stop
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('Msge'), "The process is complete. \r\rUse a white brush over the layer mask to see the effect.");
    executeAction(cTID('Stop'), desc1, dialogMode);
  };

  step1();      // Make
  step2();      // Set
  step3();      // Invert
  step4();      // Select
  step5();      // Set
  step6();      // Select
  step7();      // Set
  step8();      // Set
  step9();      // Set
  step10();      // Set
  step11(true, true);      // Stop
};



//=========================================
//                    RemoveGreen.main
//=========================================
//

RemoveGreen.main = function () {
  RemoveGreen();
};

RemoveGreen.main();

// EOF

"Remove Green .jsx"
// EOF
