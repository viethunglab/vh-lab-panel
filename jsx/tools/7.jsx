#target photoshop
//
// 7.jsx
//

//
// Generated Thu Sep 26 2024 11:05:01 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Đều sáng da ==============
//
function __us_ngda() {
  // Retouch4me Dodge Burn
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putInteger(cTID('IsHB'), 1);
    desc1.putDouble(cTID('SenF'), 100);
    desc1.putDouble(cTID('SSdF'), 0);
    executeAction(sTID('a6e5704a-9dk2-02kl-bd6b-d0d7e8b09374'), desc1, dialogMode);
  };

  step1();      // Retouch4me Dodge Burn
};



//=========================================
//                    __us_ngda.main
//=========================================
//

__us_ngda.main = function () {
  __us_ngda();
};

__us_ngda.main();

// EOF

"7.jsx"
// EOF
