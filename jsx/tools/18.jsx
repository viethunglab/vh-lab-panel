#target photoshop
//
// 18.jsx
//

//
// Generated Thu Sep 26 2024 14:11:33 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Auto Contrast ==============
//
function AutoContrast() {
  // Levels
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('AuCo'), true);
    executeAction(cTID('Lvls'), desc1, dialogMode);
  };

  step1();      // Levels
};



//=========================================
//                    AutoContrast.main
//=========================================
//

AutoContrast.main = function () {
  AutoContrast();
};

AutoContrast.main();

// EOF

"18.jsx"
// EOF
