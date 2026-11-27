#target photoshop
//
// Contrast.jsx
//

//
// Generated Thu Sep 26 2024 07:25:33 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Contrast ==============
//
function Contrast() {
  // Brightness/Contrast
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Cntr'), 10);
    executeAction(sTID('brightnessEvent'), desc1, dialogMode);
  };

  step1();      // Brightness/Contrast
};



//=========================================
//                    Contrast.main
//=========================================
//

Contrast.main = function () {
  Contrast();
};

Contrast.main();

// EOF

"Contrast.jsx"
// EOF
