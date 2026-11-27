#target photoshop
//
// 21.jsx
//

//
// Generated Fri Nov 15 2024 16:01:30 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Upscale 10x15 ==============
//
function Upscale10x15() {
  // Image Size
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 283.464566929134);
    desc1.putBoolean(sTID("scaleStyles"), true);
    desc1.putBoolean(cTID('CnsP'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), sTID("deepUpscale"));
    desc1.putInteger(cTID('Nose'), 0);
    executeAction(sTID('imageSize'), desc1, dialogMode);
  };

  // Crop
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Top '), cTID('#Rlt'), 0);
    desc2.putUnitDouble(cTID('Left'), cTID('#Rlt'), 0);
    desc2.putUnitDouble(cTID('Btom'), cTID('#Rlt'), 425.28);
    desc2.putUnitDouble(cTID('Rght'), cTID('#Rlt'), 283.44);
    desc1.putObject(cTID('T   '), cTID('Rctn'), desc2);
    desc1.putUnitDouble(cTID('Angl'), cTID('#Ang'), 0);
    desc1.putBoolean(cTID('Dlt '), true);
    desc1.putInteger(sTID("AutoFillMethod"), 1);
    desc1.putEnumerated(sTID("cropFillMode"), sTID("cropFillMode"), sTID("defaultFill"));
    desc1.putEnumerated(sTID("cropAspectRatioModeKey"), sTID("cropAspectRatioModeClass"), sTID("targetSize"));
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Rlt'), 283.464566929134);
    desc1.putUnitDouble(cTID('Hght'), cTID('#Rlt'), 425.196850393701);
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    executeAction(cTID('Crop'), desc1, dialogMode);
  };

  step1();      // Image Size
  step2(true, true);      // Crop
};



//=========================================
//                    Upscale10x15.main
//=========================================
//

Upscale10x15.main = function () {
  Upscale10x15();
};

Upscale10x15.main();

// EOF

"21.jsx"
// EOF
