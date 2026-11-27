#target photoshop
//
// 01 Xoay.jsx
//

//
// Generated Thu Sep 26 2024 07:22:39 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Xoay ==============
//
function Xoay() {
  // Rotate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Frst'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 90);
    executeAction(cTID('Rtte'), desc1, dialogMode);
  };

  step1();      // Rotate
};



//=========================================
//                    Xoay.main
//=========================================
//

Xoay.main = function () {
  Xoay();
};

Xoay.main();

// EOF

"01 Xoay.jsx"
// EOF
