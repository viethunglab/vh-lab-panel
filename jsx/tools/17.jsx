#target photoshop
//
// 17.jsx
//

//
// Generated Thu Sep 26 2024 14:11:12 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Lưu File In ==============
//
function L_uFileIn() {
  // Play
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Actn'), "Flatten Image");
    ref1.putName(cTID('ASet'), "Tool");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Ply '), desc1, dialogMode);
  };

  // Save
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('EQlt'), 12);
    desc2.putEnumerated(cTID('MttC'), cTID('MttC'), cTID('None'));
    desc1.putObject(cTID('As  '), sTID("JPEGFormat"), desc2);
    desc1.putPath(cTID('In  '), new File("/d/TRINH GIA/HANG NGAY/2024/09/15/01/NAME.jpg"));
    desc1.putInteger(cTID('DocI'), 67);
    desc1.putBoolean(cTID('Cpy '), true);
    desc1.putBoolean(cTID('LwCs'), true);
    executeAction(cTID('save'), desc1, dialogMode);
  };

  step1();      // Play
  step2(true, true);      // Save
};



//=========================================
//                    L_uFileIn.main
//=========================================
//

L_uFileIn.main = function () {
  L_uFileIn();
};

L_uFileIn.main();

// EOF

"17.jsx"
// EOF
