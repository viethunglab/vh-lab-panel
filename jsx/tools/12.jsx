#target photoshop
//
// 12.jsx
//

//
// Generated Thu Sep 26 2024 11:10:42 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Nhặt mụn nhẹ ==============
//
function Nh_tm_nnh() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Retouch4me Heal
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putInteger(cTID('IsHB'), 0);
    desc1.putDouble(cTID('SenF'), 20);
    executeAction(sTID('a6e0kl2a-95ce-11d3-bd6b-93khdf9he1al'), desc1, dialogMode);
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
  step2();      // Retouch4me Heal
  step3();      // Merge Layers
};



//=========================================
//                    Nh_tm_nnh.main
//=========================================
//

Nh_tm_nnh.main = function () {
  Nh_tm_nnh();
};

Nh_tm_nnh.main();

// EOF

"12.jsx"
// EOF
