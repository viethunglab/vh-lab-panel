#target photoshop
//
// Nh_n_o.jsx
//

//
// Generated Thu Sep 26 2024 11:06:03 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Nhăn áo ==============
//
function Nh_n_o() {
  // Retouch4me Fabric
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('IsMB'), false);
    desc1.putInteger(cTID('IsHB'), 0);
    desc1.putDouble(cTID('SenF'), 200);
    executeAction(sTID('a6e0304a-4lke-jd23-bd6b-3kdlfabr1ccc'), desc1, dialogMode);
  };

  step1();      // Retouch4me Fabric
};



//=========================================
//                    Nh_n_o.main
//=========================================
//

Nh_n_o.main = function () {
  Nh_n_o();
};

Nh_n_o.main();

// EOF

"Nh_n_o.jsx"
// EOF
