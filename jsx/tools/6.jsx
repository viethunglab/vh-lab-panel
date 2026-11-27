#target photoshop
//
// 6.jsx
//

//
// Generated Thu Sep 26 2024 11:02:09 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Đều màu da ==============
//
function __um_uda() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Retouch4me Skin Tone
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putInteger(cTID('IsHB'), 1);
    desc1.putDouble(cTID('SenF'), 100);
    executeAction(sTID('a6e0304a-4lke-jd23-bd6b-5c14704e0000'), desc1, dialogMode);
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
  step2();      // Retouch4me Skin Tone
  step3();      // Merge Layers
};



//=========================================
//                    __um_uda.main
//=========================================
//

__um_uda.main = function () {
  __um_uda();
};

__um_uda.main();

// EOF

"6.jsx"
// EOF
