#target photoshop
//
// 4.jsx
//

//
// Generated Thu Sep 26 2024 10:53:33 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Upscale ==============
//
function Upscale() {
  // Topaz Photo AI
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('a40009fc-f5fc-4a09-86ec-5a0ed56c5668'), undefined, dialogMode);
  };

  step1();      // Topaz Photo AI
};



//=========================================
//                    Upscale.main
//=========================================
//

Upscale.main = function () {
  Upscale();
};

Upscale.main();

// EOF

"4.jsx"
// EOF
