#target photoshop
//
// _13.jsx
//

//
// Generated Fri Feb 04 2022 12:48:57 GMT+0700
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
    desc1.putInteger(cTID('Temp'), -8);
    desc1.putInteger(cTID('Tint'), -3);
    desc1.putDouble(cTID('Ex12'), -0.95);
    desc1.putInteger(cTID('Cr12'), -40);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), 23);
    desc1.putInteger(cTID('Wh12'), 24);
    desc1.putInteger(cTID('Bk12'), 74);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Vibr'), 3);
    desc1.putInteger(cTID('Strt'), -17);
    desc1.putInteger(cTID('PC_S'), 23);
    desc1.putInteger(cTID('PC_D'), 40);
    desc1.putInteger(cTID('PC_L'), -17);
    desc1.putInteger(cTID('PC_H'), -19);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 64);
    desc1.putDouble(cTID('ShpR'), 0.6);
    desc1.putInteger(cTID('ShpD'), 5);
    desc1.putInteger(cTID('ShpM'), 76);
    desc1.putInteger(cTID('LNR '), 8);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -13);
    desc1.putInteger(cTID('HA_O'), -3);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 18);
    desc1.putInteger(cTID('HA_A'), 53);
    desc1.putInteger(cTID('HA_B'), 4);
    desc1.putInteger(cTID('HA_P'), 30);
    desc1.putInteger(cTID('HA_M'), 15);
    desc1.putInteger(cTID('SA_R'), 29);
    desc1.putInteger(cTID('SA_O'), 7);
    desc1.putInteger(cTID('SA_Y'), -51);
    desc1.putInteger(cTID('SA_G'), -55);
    desc1.putInteger(cTID('SA_A'), 12);
    desc1.putInteger(cTID('SA_B'), 8);
    desc1.putInteger(cTID('SA_P'), -10);
    desc1.putInteger(cTID('SA_M'), -20);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 35);
    desc1.putInteger(cTID('LA_Y'), 23);
    desc1.putInteger(cTID('LA_G'), 6);
    desc1.putInteger(cTID('LA_A'), -23);
    desc1.putInteger(cTID('LA_B'), -23);
    desc1.putInteger(cTID('LA_P'), -10);
    desc1.putInteger(cTID('LA_M'), -25);
    desc1.putInteger(cTID('STSH'), 36);
    desc1.putInteger(cTID('STSS'), 15);
    desc1.putInteger(cTID('STHH'), 270);
    desc1.putInteger(cTID('STHS'), 4);
    desc1.putInteger(cTID('STB '), 29);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 12);
    desc1.putInteger(cTID('GRNS'), 81);
    desc1.putInteger(cTID('GRNF'), 58);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 23);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), -10);
    desc1.putInteger(cTID('GSat'), -10);
    desc1.putInteger(cTID('BHue'), -10);
    desc1.putInteger(cTID('BSat'), 1);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(42);
    list2.putInteger(24);
    list2.putInteger(119);
    list2.putInteger(121);
    list2.putInteger(186);
    list2.putInteger(193);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(40);
    list3.putInteger(25);
    list3.putInteger(119);
    list3.putInteger(125);
    list3.putInteger(183);
    list3.putInteger(198);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(40);
    list4.putInteger(26);
    list4.putInteger(118);
    list4.putInteger(126);
    list4.putInteger(180);
    list4.putInteger(203);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM Sanic Fllm\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"B0C39A707806D94F83EF424655B3FE51\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+11\"\n      crs:IncrementalTint=\"+3\"\n      crs:Exposure2012=\"-0.95\"\n      crs:Contrast2012=\"-40\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"+23\"\n      crs:Whites2012=\"+24\"\n      crs:Blacks2012=\"+74\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+3\"\n      crs:Saturation=\"-17\"\n      crs:ParametricShadows=\"+23\"\n      crs:ParametricDarks=\"+40\"\n      crs:ParametricLights=\"-17\"\n      crs:ParametricHighlights=\"-19\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"64\"\n      crs:SharpenRadius=\"+0.6\"\n      crs:SharpenDetail=\"5\"\n      crs:SharpenEdgeMasking=\"76\"\n      crs:LuminanceSmoothing=\"8\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-13\"\n      crs:HueAdjustmentOrange=\"-3\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+18\"\n      crs:HueAdjustmentAqua=\"+53\"\n      crs:HueAdjustmentBlue=\"+4\"\n      crs:HueAdjustmentPurple=\"+30\"\n      crs:HueAdjustmentMagenta=\"+15\"\n      crs:SaturationAdjustmentRed=\"+29\"\n      crs:SaturationAdjustmentOrange=\"+7\"\n      crs:SaturationAdjustmentYellow=\"-51\"\n      crs:SaturationAdjustmentGreen=\"-55\"\n      crs:SaturationAdjustmentAqua=\"+12\"\n      crs:SaturationAdjustmentBlue=\"+8\"\n      crs:SaturationAdjustmentPurple=\"-10\"\n      crs:SaturationAdjustmentMagenta=\"-20\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+35\"\n      crs:LuminanceAdjustmentYellow=\"+23\"\n      crs:LuminanceAdjustmentGreen=\"+6\"\n      crs:LuminanceAdjustmentAqua=\"-23\"\n      crs:LuminanceAdjustmentBlue=\"-23\"\n      crs:LuminanceAdjustmentPurple=\"-10\"\n      crs:LuminanceAdjustmentMagenta=\"-25\"\n      crs:SplitToningShadowHue=\"36\"\n      crs:SplitToningShadowSaturation=\"15\"\n      crs:SplitToningHighlightHue=\"270\"\n      crs:SplitToningHighlightSaturation=\"4\"\n      crs:SplitToningBalance=\"+29\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"12\"\n      crs:GrainSize=\"81\"\n      crs:GrainFrequency=\"58\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+23\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"-10\"\n      crs:GreenSaturation=\"-10\"\n      crs:BlueHue=\"-10\"\n      crs:BlueSaturation=\"+1\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 24</rdf:li>\n       <rdf:li>119, 121</rdf:li>\n       <rdf:li>186, 193</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 25</rdf:li>\n       <rdf:li>119, 125</rdf:li>\n       <rdf:li>183, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 26</rdf:li>\n       <rdf:li>118, 126</rdf:li>\n       <rdf:li>180, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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

"_13.jsx"
// EOF
