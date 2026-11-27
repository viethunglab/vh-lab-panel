#target photoshop
//
// 3.jsx
//

//
// Generated Thu Sep 26 2024 10:56:24 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== VISA ==============
//
function VISA() {
  // Scripts
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var estr = '//@include "/c/Program Files/Adobe/Adobe Photoshop 2024/Presets/Scripts/undefined";\r\n';
    eval(estr);
  };

  step1(true, true);      // Scripts
};



//=========================================
//                    VISA.main
//=========================================
//

VISA.main = function () {
  VISA();
};

VISA.main();

// EOF

"3.jsx"
// EOF
