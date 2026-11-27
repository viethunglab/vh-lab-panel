#target photoshop
//
// cameraraw.jsx
//

//
// Generated Mon Dec 06 2021 21:00:34 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== cameraraw ==============
//
function cameraraw() {
  // Camera Raw Filter
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CrVe'), "14.0");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1(true, true);      // Camera Raw Filter
};



//=========================================
//                    cameraraw.main
//=========================================
//

cameraraw.main = function () {
  cameraraw();
};

cameraraw.main();

// EOF

"cameraraw.jsx"
// EOF
