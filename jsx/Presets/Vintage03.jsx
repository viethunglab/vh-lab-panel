#target photoshop
//
// Vintage03.jsx
//

//
// Generated Wed Jan 12 2022 12:01:34 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 3 ==============
//
function _3() {
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
    desc1.putDouble(cTID('Ex12'), 0.03);
    desc1.putInteger(cTID('Cr12'), -22);
    desc1.putInteger(cTID('Hi12'), -40);
    desc1.putInteger(cTID('Sh12'), 30);
    desc1.putInteger(cTID('Wh12'), 2);
    desc1.putInteger(cTID('Bk12'), 22);
    desc1.putInteger(cTID('Cl12'), -10);
    desc1.putInteger(cTID('Strt'), -15);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 41);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 39);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -17);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), -4);
    desc1.putInteger(cTID('HA_B'), -23);
    desc1.putInteger(cTID('HA_P'), -100);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -22);
    desc1.putInteger(cTID('SA_O'), -18);
    desc1.putInteger(cTID('SA_Y'), -38);
    desc1.putInteger(cTID('SA_G'), -51);
    desc1.putInteger(cTID('SA_A'), -27);
    desc1.putInteger(cTID('SA_B'), -22);
    desc1.putInteger(cTID('SA_P'), -69);
    desc1.putInteger(cTID('SA_M'), -57);
    desc1.putInteger(cTID('LA_R'), -25);
    desc1.putInteger(cTID('LA_O'), -20);
    desc1.putInteger(cTID('LA_Y'), 24);
    desc1.putInteger(cTID('LA_G'), -3);
    desc1.putInteger(cTID('LA_A'), 15);
    desc1.putInteger(cTID('LA_B'), -18);
    desc1.putInteger(cTID('LA_P'), -12);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 27);
    desc1.putInteger(cTID('GRNS'), 18);
    desc1.putInteger(cTID('GRNF'), 85);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 30);
    desc1.putInteger(cTID('RSat'), 30);
    desc1.putInteger(cTID('GHue'), 55);
    desc1.putInteger(cTID('GSat'), -20);
    desc1.putInteger(cTID('BHue'), -10);
    desc1.putInteger(cTID('BSat'), -10);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(48);
    list1.putInteger(77);
    list1.putInteger(76);
    list1.putInteger(133);
    list1.putInteger(133);
    list1.putInteger(189);
    list1.putInteger(187);
    list1.putInteger(255);
    list1.putInteger(245);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(30);
    list2.putInteger(16);
    list2.putInteger(75);
    list2.putInteger(64);
    list2.putInteger(113);
    list2.putInteger(122);
    list2.putInteger(174);
    list2.putInteger(197);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(32);
    list3.putInteger(11);
    list3.putInteger(114);
    list3.putInteger(120);
    list3.putInteger(178);
    list3.putInteger(200);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(80);
    list4.putInteger(49);
    list4.putInteger(121);
    list4.putInteger(119);
    list4.putInteger(174);
    list4.putInteger(194);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"03\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"CB69CB647A99884387B7C6D1907F3E98\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Vintage</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.03\"\n      crs:Contrast2012=\"-22\"\n      crs:Highlights2012=\"-40\"\n      crs:Shadows2012=\"+30\"\n      crs:Whites2012=\"+2\"\n      crs:Blacks2012=\"+22\"\n      crs:Clarity2012=\"-10\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-15\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"41\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+39\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-17\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"-4\"\n      crs:HueAdjustmentBlue=\"-23\"\n      crs:HueAdjustmentPurple=\"-100\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-22\"\n      crs:SaturationAdjustmentOrange=\"-18\"\n      crs:SaturationAdjustmentYellow=\"-38\"\n      crs:SaturationAdjustmentGreen=\"-51\"\n      crs:SaturationAdjustmentAqua=\"-27\"\n      crs:SaturationAdjustmentBlue=\"-22\"\n      crs:SaturationAdjustmentPurple=\"-69\"\n      crs:SaturationAdjustmentMagenta=\"-57\"\n      crs:LuminanceAdjustmentRed=\"-25\"\n      crs:LuminanceAdjustmentOrange=\"-20\"\n      crs:LuminanceAdjustmentYellow=\"+24\"\n      crs:LuminanceAdjustmentGreen=\"-3\"\n      crs:LuminanceAdjustmentAqua=\"+15\"\n      crs:LuminanceAdjustmentBlue=\"-18\"\n      crs:LuminanceAdjustmentPurple=\"-12\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"240\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+75\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"27\"\n      crs:GrainSize=\"18\"\n      crs:GrainFrequency=\"85\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+30\"\n      crs:RedSaturation=\"+30\"\n      crs:GreenHue=\"+55\"\n      crs:GreenSaturation=\"-20\"\n      crs:BlueHue=\"-10\"\n      crs:BlueSaturation=\"-10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 48</rdf:li>\n       <rdf:li>77, 76</rdf:li>\n       <rdf:li>133, 133</rdf:li>\n       <rdf:li>189, 187</rdf:li>\n       <rdf:li>255, 245</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>30, 16</rdf:li>\n       <rdf:li>75, 64</rdf:li>\n       <rdf:li>113, 122</rdf:li>\n       <rdf:li>174, 197</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>32, 11</rdf:li>\n       <rdf:li>114, 120</rdf:li>\n       <rdf:li>178, 200</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>80, 49</rdf:li>\n       <rdf:li>121, 119</rdf:li>\n       <rdf:li>174, 194</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _3.main
//=========================================
//

_3.main = function () {
  _3();
};

_3.main();

// EOF

"Vintage03.jsx"
// EOF
