#target photoshop
//
// 2.jsx
//

//
// Generated Thu Sep 26 2024 10:50:46 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Màu môi ==============
//
function M_um_i() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Clr '), cTID('FrgC'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putDouble(cTID('Rd  '), 251.996108949416);
    desc2.putDouble(cTID('Grn '), 119.003891050584);
    desc2.putDouble(cTID('Bl  '), 169);
    desc1.putObject(cTID('T   '), sTID("RGBColor"), desc2);
    desc1.putString(cTID('Srce'), "photoshopPicker");
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1();      // Set
};



//=========================================
//                    M_um_i.main
//=========================================
//

M_um_i.main = function () {
  M_um_i();
};

M_um_i.main();

// EOF

"2.jsx"
// EOF
