#target photoshop
//
// _03.jsx
//

//
// Generated Mon Mar 14 2022 12:06:26 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 03 ==============
//
function _03() {
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
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), 14);
    desc1.putInteger(cTID('Tint'), -5);
    desc1.putDouble(cTID('Ex12'), 0.6);
    desc1.putInteger(cTID('Cr12'), -70);
    desc1.putInteger(cTID('Hi12'), -15);
    desc1.putInteger(cTID('Sh12'), 45);
    desc1.putInteger(cTID('Wh12'), -76);
    desc1.putInteger(cTID('Bk12'), 16);
    desc1.putInteger(cTID('PC_S'), -100);
    desc1.putInteger(cTID('PC_D'), 21);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), -14);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 54);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 40);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), -11);
    desc1.putInteger(cTID('HA_Y'), -14);
    desc1.putInteger(cTID('HA_G'), -40);
    desc1.putInteger(cTID('HA_A'), -81);
    desc1.putInteger(cTID('HA_B'), 41);
    desc1.putInteger(cTID('HA_P'), -39);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -16);
    desc1.putInteger(cTID('SA_Y'), -35);
    desc1.putInteger(cTID('SA_G'), -72);
    desc1.putInteger(cTID('SA_A'), -100);
    desc1.putInteger(cTID('SA_B'), -38);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 21);
    desc1.putInteger(cTID('LA_O'), 19);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 20);
    desc1.putInteger(cTID('GRNS'), 35);
    desc1.putInteger(cTID('GRNF'), 55);
    desc1.putInteger(cTID('PCVA'), -22);
    desc1.putInteger(cTID('PCVM'), 42);
    desc1.putInteger(cTID('PCVF'), 69);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(14);
    list1.putInteger(83);
    list1.putInteger(73);
    list1.putInteger(136);
    list1.putInteger(134);
    list1.putInteger(198);
    list1.putInteger(187);
    list1.putInteger(255);
    list1.putInteger(227);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(80);
    list2.putInteger(44);
    list2.putInteger(130);
    list2.putInteger(118);
    list2.putInteger(198);
    list2.putInteger(202);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(73);
    list3.putInteger(37);
    list3.putInteger(127);
    list3.putInteger(114);
    list3.putInteger(192);
    list3.putInteger(198);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(76);
    list4.putInteger(35);
    list4.putInteger(134);
    list4.putInteger(116);
    list4.putInteger(205);
    list4.putInteger(214);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"06\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"D381D960ADC74A469F611868B30BD5D6\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">AAA</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+14\"\n      crs:IncrementalTint=\"-5\"\n      crs:Exposure2012=\"+0.60\"\n      crs:Contrast2012=\"-70\"\n      crs:Highlights2012=\"-15\"\n      crs:Shadows2012=\"+45\"\n      crs:Whites2012=\"-76\"\n      crs:Blacks2012=\"+16\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"-100\"\n      crs:ParametricDarks=\"+21\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"-14\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"54\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"40\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"-11\"\n      crs:HueAdjustmentYellow=\"-14\"\n      crs:HueAdjustmentGreen=\"-40\"\n      crs:HueAdjustmentAqua=\"-81\"\n      crs:HueAdjustmentBlue=\"+41\"\n      crs:HueAdjustmentPurple=\"-39\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-16\"\n      crs:SaturationAdjustmentYellow=\"-35\"\n      crs:SaturationAdjustmentGreen=\"-72\"\n      crs:SaturationAdjustmentAqua=\"-100\"\n      crs:SaturationAdjustmentBlue=\"-38\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+21\"\n      crs:LuminanceAdjustmentOrange=\"+19\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"213\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"20\"\n      crs:GrainSize=\"35\"\n      crs:GrainFrequency=\"55\"\n      crs:PostCropVignetteAmount=\"-22\"\n      crs:PostCropVignetteMidpoint=\"42\"\n      crs:PostCropVignetteFeather=\"69\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+13\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 14</rdf:li>\n       <rdf:li>83, 73</rdf:li>\n       <rdf:li>136, 134</rdf:li>\n       <rdf:li>198, 187</rdf:li>\n       <rdf:li>255, 227</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>80, 44</rdf:li>\n       <rdf:li>130, 118</rdf:li>\n       <rdf:li>198, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>73, 37</rdf:li>\n       <rdf:li>127, 114</rdf:li>\n       <rdf:li>192, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>76, 35</rdf:li>\n       <rdf:li>134, 116</rdf:li>\n       <rdf:li>205, 214</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _03.main
//=========================================
//

_03.main = function () {
  _03();
};

_03.main();

// EOF

"_03.jsx"
// EOF
