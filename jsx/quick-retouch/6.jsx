#target photoshop
//
// 6.jsx
//

//
// Generated Thu Sep 26 2024 10:33:28 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Saturation ==============
//
function Saturation() {
  // Hue/Saturation
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Clrz'), false);
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('H   '), 0);
    desc2.putInteger(cTID('Strt'), 10);
    desc2.putInteger(cTID('Lght'), 0);
    list1.putObject(cTID('Hst2'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(sTID('hueSaturation'), desc1, dialogMode);
  };

  step1();      // Hue/Saturation
};



//=========================================
//                    Saturation.main
//=========================================
//

Saturation.main = function () {
  Saturation();
};

Saturation.main();

// EOF

"6.jsx"
// EOF
