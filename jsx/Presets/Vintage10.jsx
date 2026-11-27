#target photoshop
//
// Vintage10.jsx
//

//
// Generated Wed Jan 12 2022 12:04:14 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 10 ==============
//
function _10() {
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
    desc1.putInteger(cTID('Cr12'), -21);
    desc1.putInteger(cTID('Hi12'), -44);
    desc1.putInteger(cTID('Sh12'), -1);
    desc1.putInteger(cTID('Wh12'), 2);
    desc1.putInteger(cTID('Bk12'), 30);
    desc1.putInteger(cTID('Vibr'), 5);
    desc1.putInteger(cTID('Strt'), -29);
    desc1.putInteger(cTID('PC_S'), -5);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 5);
    desc1.putInteger(cTID('PC_H'), -60);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 56);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1.2);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 6);
    desc1.putInteger(cTID('HA_O'), -6);
    desc1.putInteger(cTID('HA_Y'), -30);
    desc1.putInteger(cTID('HA_G'), 28);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 25);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), 2);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), -71);
    desc1.putInteger(cTID('SA_G'), -56);
    desc1.putInteger(cTID('SA_A'), -35);
    desc1.putInteger(cTID('SA_B'), -45);
    desc1.putInteger(cTID('SA_P'), -25);
    desc1.putInteger(cTID('SA_M'), -25);
    desc1.putInteger(cTID('LA_R'), -3);
    desc1.putInteger(cTID('LA_O'), -3);
    desc1.putInteger(cTID('LA_Y'), -14);
    desc1.putInteger(cTID('LA_G'), -10);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 19);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 44);
    desc1.putInteger(cTID('STSS'), 20);
    desc1.putInteger(cTID('STHH'), 49);
    desc1.putInteger(cTID('STHS'), 2);
    desc1.putInteger(cTID('STB '), 21);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 19);
    desc1.putInteger(cTID('GRNS'), 32);
    desc1.putInteger(cTID('GRNF'), 52);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 30);
    desc1.putInteger(cTID('RSat'), 24);
    desc1.putInteger(cTID('GHue'), 50);
    desc1.putInteger(cTID('GSat'), -5);
    desc1.putInteger(cTID('BHue'), -10);
    desc1.putInteger(cTID('BSat'), -17);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(3);
    list1.putInteger(42);
    list1.putInteger(34);
    list1.putInteger(70);
    list1.putInteger(66);
    list1.putInteger(133);
    list1.putInteger(133);
    list1.putInteger(255);
    list1.putInteger(208);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(36);
    list2.putInteger(8);
    list2.putInteger(69);
    list2.putInteger(40);
    list2.putInteger(108);
    list2.putInteger(108);
    list2.putInteger(183);
    list2.putInteger(199);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(37);
    list3.putInteger(12);
    list3.putInteger(81);
    list3.putInteger(59);
    list3.putInteger(109);
    list3.putInteger(111);
    list3.putInteger(168);
    list3.putInteger(185);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(47);
    list4.putInteger(22);
    list4.putInteger(74);
    list4.putInteger(50);
    list4.putInteger(113);
    list4.putInteger(117);
    list4.putInteger(162);
    list4.putInteger(178);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"10\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"3DE9F34CAA97C74EB97C62A7EC888CC0\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Vintage</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"-21\"\n      crs:Highlights2012=\"-44\"\n      crs:Shadows2012=\"-1\"\n      crs:Whites2012=\"+2\"\n      crs:Blacks2012=\"+30\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+5\"\n      crs:Saturation=\"-29\"\n      crs:ParametricShadows=\"-5\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"+5\"\n      crs:ParametricHighlights=\"-60\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"56\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.2\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+6\"\n      crs:HueAdjustmentOrange=\"-6\"\n      crs:HueAdjustmentYellow=\"-30\"\n      crs:HueAdjustmentGreen=\"+28\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"+25\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"+2\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"-71\"\n      crs:SaturationAdjustmentGreen=\"-56\"\n      crs:SaturationAdjustmentAqua=\"-35\"\n      crs:SaturationAdjustmentBlue=\"-45\"\n      crs:SaturationAdjustmentPurple=\"-25\"\n      crs:SaturationAdjustmentMagenta=\"-25\"\n      crs:LuminanceAdjustmentRed=\"-3\"\n      crs:LuminanceAdjustmentOrange=\"-3\"\n      crs:LuminanceAdjustmentYellow=\"-14\"\n      crs:LuminanceAdjustmentGreen=\"-10\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"+19\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"44\"\n      crs:SplitToningShadowSaturation=\"20\"\n      crs:SplitToningHighlightHue=\"49\"\n      crs:SplitToningHighlightSaturation=\"2\"\n      crs:SplitToningBalance=\"+21\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"19\"\n      crs:GrainSize=\"32\"\n      crs:GrainFrequency=\"52\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+30\"\n      crs:RedSaturation=\"+24\"\n      crs:GreenHue=\"+50\"\n      crs:GreenSaturation=\"-5\"\n      crs:BlueHue=\"-10\"\n      crs:BlueSaturation=\"-17\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 3</rdf:li>\n       <rdf:li>42, 34</rdf:li>\n       <rdf:li>70, 66</rdf:li>\n       <rdf:li>133, 133</rdf:li>\n       <rdf:li>255, 208</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 8</rdf:li>\n       <rdf:li>69, 40</rdf:li>\n       <rdf:li>108, 108</rdf:li>\n       <rdf:li>183, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>37, 12</rdf:li>\n       <rdf:li>81, 59</rdf:li>\n       <rdf:li>109, 111</rdf:li>\n       <rdf:li>168, 185</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>47, 22</rdf:li>\n       <rdf:li>74, 50</rdf:li>\n       <rdf:li>113, 117</rdf:li>\n       <rdf:li>162, 178</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _10.main
//=========================================
//

_10.main = function () {
  _10();
};

_10.main();

// EOF

"Vintage10.jsx"
// EOF
