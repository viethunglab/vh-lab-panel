#target photoshop
//
// Desaturation.jsx
//

//
// Generated Tue Jun 28 2022 12:11:07 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Desaturation ==============
//
function Desaturation() {
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
    desc3.putInteger(cTID('H   '), 0);
    desc3.putInteger(cTID('Strt'), -25);
    desc3.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putInteger(cTID('LclR'), 1);
    desc4.putInteger(cTID('BgnR'), 315);
    desc4.putInteger(cTID('BgnS'), 345);
    desc4.putInteger(cTID('EndS'), 15);
    desc4.putInteger(cTID('EndR'), 45);
    desc4.putInteger(cTID('H   '), 0);
    desc4.putInteger(cTID('Strt'), -10);
    desc4.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putInteger(cTID('LclR'), 2);
    desc5.putInteger(cTID('BgnR'), 15);
    desc5.putInteger(cTID('BgnS'), 45);
    desc5.putInteger(cTID('EndS'), 75);
    desc5.putInteger(cTID('EndR'), 105);
    desc5.putInteger(cTID('H   '), 0);
    desc5.putInteger(cTID('Strt'), -10);
    desc5.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putInteger(cTID('LclR'), 3);
    desc6.putInteger(cTID('BgnR'), 75);
    desc6.putInteger(cTID('BgnS'), 105);
    desc6.putInteger(cTID('EndS'), 135);
    desc6.putInteger(cTID('EndR'), 165);
    desc6.putInteger(cTID('H   '), 0);
    desc6.putInteger(cTID('Strt'), -10);
    desc6.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putInteger(cTID('LclR'), 4);
    desc7.putInteger(cTID('BgnR'), 135);
    desc7.putInteger(cTID('BgnS'), 165);
    desc7.putInteger(cTID('EndS'), 195);
    desc7.putInteger(cTID('EndR'), 225);
    desc7.putInteger(cTID('H   '), 0);
    desc7.putInteger(cTID('Strt'), -10);
    desc7.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putInteger(cTID('LclR'), 5);
    desc8.putInteger(cTID('BgnR'), 195);
    desc8.putInteger(cTID('BgnS'), 225);
    desc8.putInteger(cTID('EndS'), 255);
    desc8.putInteger(cTID('EndR'), 285);
    desc8.putInteger(cTID('H   '), 0);
    desc8.putInteger(cTID('Strt'), -10);
    desc8.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc8);
    var desc9 = new ActionDescriptor();
    desc9.putInteger(cTID('LclR'), 6);
    desc9.putInteger(cTID('BgnR'), 255);
    desc9.putInteger(cTID('BgnS'), 285);
    desc9.putInteger(cTID('EndS'), 315);
    desc9.putInteger(cTID('EndR'), 345);
    desc9.putInteger(cTID('H   '), 0);
    desc9.putInteger(cTID('Strt'), -10);
    desc9.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc9);
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
    desc2.putString(cTID('Nm  '), "Desaturation ");
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

  // Stop
  function step7(enabled, withDialog) {
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
  step7(true, true);      // Stop
};



//=========================================
//                    Desaturation.main
//=========================================
//

Desaturation.main = function () {
  Desaturation();
};

Desaturation.main();

// EOF

"Desaturation.jsx"
// EOF
