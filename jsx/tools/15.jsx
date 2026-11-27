#target photoshop
//
// 15.jsx
//

//
// Generated Thu Sep 26 2024 11:21:48 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Tạo viền ==============
//
function T_ovi_n() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 416.666666666667);
    var desc3 = new ActionDescriptor();
    desc3.putBoolean(cTID('enab'), true);
    desc3.putBoolean(sTID("present"), true);
    desc3.putBoolean(sTID("showInDialog"), true);
    desc3.putEnumerated(cTID('Styl'), cTID('FStl'), cTID('InsF'));
    desc3.putEnumerated(cTID('PntT'), cTID('FrFl'), cTID('SClr'));
    desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc3.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 1);
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 165.000005364418);
    desc4.putDouble(cTID('Grn '), 165.000005364418);
    desc4.putDouble(cTID('Bl  '), 165.000005364418);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc3.putBoolean(sTID("overprint"), false);
    desc2.putObject(cTID('FrFX'), cTID('FrFX'), desc3);
    desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Rasterize
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('What'), sTID("rasterizeItem"), sTID("layerStyle"));
    executeAction(cTID('Rstr'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Rasterize
};



//=========================================
//                    T_ovi_n.main
//=========================================
//

T_ovi_n.main = function () {
  T_ovi_n();
};

T_ovi_n.main();

// EOF

"15.jsx"
// EOF
