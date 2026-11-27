#target photoshop
//
// Duplicate.jsx
//

//
// Generated Thu Mar 31 2022 09:38:03 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Duplicate ==============
//
function Duplicate() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Frst'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('DocI'), 224);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Duplicate
};



//=========================================
//                    Duplicate.main
//=========================================
//

Duplicate.main = function () {
  Duplicate();
};

Duplicate.main();

// EOF

"Duplicate.jsx"
// EOF
