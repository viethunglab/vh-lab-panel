#target photoshop
//
// Vintage13.jsx
//

//
// Generated Wed Jan 12 2022 12:05:05 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 13 ==============
//
function _13() {
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
    desc1.putInteger(cTID('Temp'), 16);
    desc1.putInteger(cTID('Tint'), -11);
    desc1.putInteger(cTID('Hi12'), -50);
    desc1.putInteger(cTID('Sh12'), 52);
    desc1.putInteger(cTID('Wh12'), -45);
    desc1.putInteger(cTID('Bk12'), 56);
    desc1.putInteger(cTID('Cl12'), -10);
    desc1.putInteger(cTID('Strt'), -15);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 15);
    desc1.putInteger(cTID('PC_2'), 58);
    desc1.putInteger(cTID('PC_3'), 76);
    desc1.putInteger(cTID('Shrp'), 51);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 10);
    desc1.putInteger(cTID('HA_A'), 10);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -40);
    desc1.putInteger(cTID('SA_O'), -15);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), -50);
    desc1.putInteger(cTID('SA_A'), -50);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -50);
    desc1.putInteger(cTID('SA_M'), -40);
    desc1.putInteger(cTID('LA_R'), 5);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), -5);
    desc1.putInteger(cTID('LA_A'), 10);
    desc1.putInteger(cTID('LA_B'), -15);
    desc1.putInteger(cTID('LA_P'), 20);
    desc1.putInteger(cTID('LA_M'), 20);
    desc1.putInteger(cTID('GRNA'), 4);
    desc1.putInteger(cTID('GRNS'), 40);
    desc1.putInteger(cTID('GRNF'), 70);
    desc1.putInteger(cTID('BlkB'), -2);
    desc1.putInteger(cTID('RHue'), 20);
    desc1.putInteger(cTID('RSat'), 20);
    desc1.putInteger(cTID('GHue'), 35);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), 15);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(55);
    list1.putInteger(41);
    list1.putInteger(59);
    list1.putInteger(90);
    list1.putInteger(88);
    list1.putInteger(129);
    list1.putInteger(125);
    list1.putInteger(206);
    list1.putInteger(208);
    list1.putInteger(255);
    list1.putInteger(250);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(31);
    list2.putInteger(7);
    list2.putInteger(72);
    list2.putInteger(51);
    list2.putInteger(117);
    list2.putInteger(123);
    list2.putInteger(179);
    list2.putInteger(197);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(27);
    list3.putInteger(11);
    list3.putInteger(120);
    list3.putInteger(122);
    list3.putInteger(181);
    list3.putInteger(196);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(21);
    list4.putInteger(13);
    list4.putInteger(80);
    list4.putInteger(70);
    list4.putInteger(119);
    list4.putInteger(122);
    list4.putInteger(183);
    list4.putInteger(197);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"13\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"385BFA2B5D72AA4FABC64986900014D1\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Vintage</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+16\"\n      crs:IncrementalTint=\"-11\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-50\"\n      crs:Shadows2012=\"+52\"\n      crs:Whites2012=\"-45\"\n      crs:Blacks2012=\"+56\"\n      crs:Clarity2012=\"-10\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-15\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"15\"\n      crs:ParametricMidtoneSplit=\"58\"\n      crs:ParametricHighlightSplit=\"76\"\n      crs:Sharpness=\"51\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+10\"\n      crs:HueAdjustmentAqua=\"+10\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-40\"\n      crs:SaturationAdjustmentOrange=\"-15\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"-50\"\n      crs:SaturationAdjustmentAqua=\"-50\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-50\"\n      crs:SaturationAdjustmentMagenta=\"-40\"\n      crs:LuminanceAdjustmentRed=\"+5\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"-5\"\n      crs:LuminanceAdjustmentAqua=\"+10\"\n      crs:LuminanceAdjustmentBlue=\"-15\"\n      crs:LuminanceAdjustmentPurple=\"+20\"\n      crs:LuminanceAdjustmentMagenta=\"+20\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"4\"\n      crs:GrainSize=\"40\"\n      crs:GrainFrequency=\"70\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-2\"\n      crs:RedHue=\"+20\"\n      crs:RedSaturation=\"+20\"\n      crs:GreenHue=\"+35\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"+15\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 55</rdf:li>\n       <rdf:li>41, 59</rdf:li>\n       <rdf:li>90, 88</rdf:li>\n       <rdf:li>129, 125</rdf:li>\n       <rdf:li>206, 208</rdf:li>\n       <rdf:li>255, 250</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>31, 7</rdf:li>\n       <rdf:li>72, 51</rdf:li>\n       <rdf:li>117, 123</rdf:li>\n       <rdf:li>179, 197</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>27, 11</rdf:li>\n       <rdf:li>120, 122</rdf:li>\n       <rdf:li>181, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>21, 13</rdf:li>\n       <rdf:li>80, 70</rdf:li>\n       <rdf:li>119, 122</rdf:li>\n       <rdf:li>183, 197</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _13.main
//=========================================
//

_13.main = function () {
  _13();
};

_13.main();

// EOF

"Vintage13.jsx"
// EOF
