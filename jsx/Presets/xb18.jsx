#target photoshop
//
// 18.jsx
//

//
// Generated Thu May 05 2022 23:21:46 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 18 ==============
//
function _18() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Camera Raw Filter
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putInteger(cTID('Cr12'), -20);
    desc1.putInteger(cTID('Hi12'), -20);
    desc1.putInteger(cTID('Sh12'), 50);
    desc1.putInteger(cTID('Wh12'), -20);
    desc1.putInteger(cTID('Bk12'), 50);
    desc1.putInteger(cTID('Cl12'), 10);
    desc1.putInteger(cTID('Vibr'), 10);
    desc1.putInteger(cTID('Strt'), -25);
    desc1.putInteger(cTID('PC_S'), 20);
    desc1.putInteger(cTID('PC_D'), -40);
    desc1.putInteger(cTID('PC_L'), 10);
    desc1.putInteger(cTID('PC_H'), -20);
    desc1.putInteger(cTID('PC_1'), 28);
    desc1.putInteger(cTID('PC_2'), 49);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('LNR '), 10);
    desc1.putInteger(cTID('LNRD'), 40);
    desc1.putInteger(cTID('LNRC'), 15);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -20);
    desc1.putInteger(cTID('HA_O'), -15);
    desc1.putInteger(cTID('HA_Y'), -10);
    desc1.putInteger(cTID('HA_G'), -40);
    desc1.putInteger(cTID('HA_A'), -20);
    desc1.putInteger(cTID('HA_B'), 5);
    desc1.putInteger(cTID('HA_P'), -10);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -25);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -20);
    desc1.putInteger(cTID('SA_G'), 20);
    desc1.putInteger(cTID('SA_A'), 15);
    desc1.putInteger(cTID('SA_B'), -25);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), -25);
    desc1.putInteger(cTID('LA_Y'), 5);
    desc1.putInteger(cTID('LA_G'), 5);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), 15);
    desc1.putInteger(cTID('LA_M'), 5);
    desc1.putInteger(cTID('STSH'), 40);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 40);
    desc1.putInteger(cTID('STHS'), 15);
    desc1.putInteger(cTID('STB '), 0);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(20);
    list1.putInteger(9);
    list1.putInteger(50);
    list1.putInteger(38);
    list1.putInteger(91);
    list1.putInteger(94);
    list1.putInteger(168);
    list1.putInteger(182);
    list1.putInteger(255);
    list1.putInteger(246);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(31);
    list2.putInteger(42);
    list2.putInteger(47);
    list2.putInteger(118);
    list2.putInteger(115);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(34);
    list3.putInteger(46);
    list3.putInteger(49);
    list3.putInteger(115);
    list3.putInteger(111);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(31);
    list4.putInteger(46);
    list4.putInteger(51);
    list4.putInteger(128);
    list4.putInteger(128);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"18\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"EBA7D88303986A4E9A5FAB4F8E590B9D\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"-20\"\n      crs:Highlights2012=\"-20\"\n      crs:Shadows2012=\"+50\"\n      crs:Whites2012=\"-20\"\n      crs:Blacks2012=\"+50\"\n      crs:Clarity2012=\"+10\"\n      crs:Vibrance=\"+10\"\n      crs:Saturation=\"-25\"\n      crs:ParametricShadows=\"+20\"\n      crs:ParametricDarks=\"-40\"\n      crs:ParametricLights=\"+10\"\n      crs:ParametricHighlights=\"-20\"\n      crs:ParametricShadowSplit=\"28\"\n      crs:ParametricMidtoneSplit=\"49\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:LuminanceSmoothing=\"10\"\n      crs:LuminanceNoiseReductionDetail=\"40\"\n      crs:LuminanceNoiseReductionContrast=\"15\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-20\"\n      crs:HueAdjustmentOrange=\"-15\"\n      crs:HueAdjustmentYellow=\"-10\"\n      crs:HueAdjustmentGreen=\"-40\"\n      crs:HueAdjustmentAqua=\"-20\"\n      crs:HueAdjustmentBlue=\"+5\"\n      crs:HueAdjustmentPurple=\"-10\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-25\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-20\"\n      crs:SaturationAdjustmentGreen=\"+20\"\n      crs:SaturationAdjustmentAqua=\"+15\"\n      crs:SaturationAdjustmentBlue=\"-25\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"-25\"\n      crs:LuminanceAdjustmentYellow=\"+5\"\n      crs:LuminanceAdjustmentGreen=\"+5\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"+15\"\n      crs:LuminanceAdjustmentMagenta=\"+5\"\n      crs:SplitToningShadowHue=\"40\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"40\"\n      crs:SplitToningHighlightSaturation=\"15\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>20, 9</rdf:li>\n       <rdf:li>50, 38</rdf:li>\n       <rdf:li>91, 94</rdf:li>\n       <rdf:li>168, 182</rdf:li>\n       <rdf:li>255, 246</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 31</rdf:li>\n       <rdf:li>42, 47</rdf:li>\n       <rdf:li>118, 115</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 34</rdf:li>\n       <rdf:li>46, 49</rdf:li>\n       <rdf:li>115, 111</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 31</rdf:li>\n       <rdf:li>46, 51</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _18.main
//=========================================
//

_18.main = function () {
  _18();
};

_18.main();

// EOF

"18.jsx"
// EOF
