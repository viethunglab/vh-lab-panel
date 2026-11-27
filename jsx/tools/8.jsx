#target photoshop
//
// 8.jsx
//

//
// Generated Thu Sep 26 2024 11:05:26 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Nổi khối ==============
//
function N_ikh_i() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Retouch4me Portrait Volumes
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putInteger(cTID('IsHB'), 0);
    desc1.putDouble(cTID('SenF'), 50);
    executeAction(sTID('v63p704a-9pv2-00pl-pv6b-po9r2et9itv1'), desc1, dialogMode);
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
  step2();      // Retouch4me Portrait Volumes
  step3();      // Merge Layers
};



//=========================================
//                    N_ikh_i.main
//=========================================
//

N_ikh_i.main = function () {
  N_ikh_i();
};

N_ikh_i.main();

// EOF

"8.jsx"
// EOF
