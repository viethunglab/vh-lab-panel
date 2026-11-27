#target photoshop
//
// 5.jsx
//

//
// Generated Thu Sep 26 2024 11:01:48 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Bóng da ==============
//
function B_ngda() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Retouch4me Mattifier
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), true);
    desc1.putInteger(cTID('IsHB'), 1);
    desc1.putDouble(cTID('SenF'), 50);
    executeAction(sTID('D5BCDAC6-B75F-4230-9503-111A77141366'), desc1, dialogMode);
  };

  // Merge Layers
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Retouch4me Mattifier
  step3();      // Merge Layers
};



//=========================================
//                    B_ngda.main
//=========================================
//

B_ngda.main = function () {
  B_ngda();
};

B_ngda.main();

// EOF

"5.jsx"
// EOF
