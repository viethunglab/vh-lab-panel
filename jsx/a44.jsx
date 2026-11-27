#target photoshop
//
// tachphong.jsx
//

//
// Generated Sat Jan 08 2022 11:53:30 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== tachphong ==============
//
function tachphong() {
  // Select Subject
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("sampleAllLayers"), false);
    executeAction(sTID('autoCutout'), desc1, dialogMode);
  };

  // Select and Mask
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    desc1.putInteger(sTID("smartBrushRadius"), 5);
    desc1.putInteger(sTID("smartBrushSmooth"), 6);
    desc1.putUnitDouble(sTID("smartBrushFeather"), cTID('#Pxl'), 0.6);
    desc1.putUnitDouble(sTID("smartBrushContrast"), cTID('#Prc'), 40);
    desc1.putUnitDouble(sTID("smartBrushShiftEdge"), cTID('#Prc'), 0);
    desc1.putBoolean(sTID("sampleAllLayers"), false);
    desc1.putBoolean(sTID("smartBrushUseSmartRadius"), false);
    desc1.putBoolean(sTID("smartBrushUseDeepMatte"), false);
    desc1.putBoolean(sTID("autoTrimap"), false);
    desc1.putBoolean(sTID("smartBrushDecontaminate"), true);
    desc1.putUnitDouble(sTID("smartBrushDeconAmount"), cTID('#Prc'), 100);
    desc1.putEnumerated(sTID("refineEdgeOutput"), sTID("refineEdgeOutput"), sTID("selectionOutputToNewSheetAndMask"));
    executeAction(sTID('smartBrushWorkspace'), desc1, dialogMode);
  };

  step1();      // Select Subject
  step2();      // Select and Mask
};



//=========================================
//                    tachphong.main
//=========================================
//

tachphong.main = function () {
  tachphong();
};

tachphong.main();

// EOF

"tachphong.jsx"
// EOF
