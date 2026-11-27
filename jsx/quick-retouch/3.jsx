#target photoshop
//
// 3.jsx
//

//
// Generated Thu Sep 26 2024 10:27:31 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Unsharp Mask ==============
//
function UnsharpMask() {
  // Unsharp Mask
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Amnt'), cTID('#Prc'), 50);
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 1);
    desc1.putInteger(cTID('Thsh'), 0);
    executeAction(sTID('unsharpMask'), desc1, dialogMode);
  };

  step1();      // Unsharp Mask
};



//=========================================
//                    UnsharpMask.main
//=========================================
//

UnsharpMask.main = function () {
  UnsharpMask();
};

UnsharpMask.main();

// EOF

"3.jsx"
// EOF
