#target photoshop
//
// _12.jsx
//

//
// Generated Fri Feb 04 2022 12:48:45 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 12 ==============
//
function _12() {
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
    desc1.putInteger(cTID('Temp'), 2);
    desc1.putInteger(cTID('Tint'), 15);
    desc1.putDouble(cTID('Ex12'), 0.4);
    desc1.putInteger(cTID('Cr12'), -20);
    desc1.putInteger(cTID('Hi12'), -45);
    desc1.putInteger(cTID('Sh12'), 33);
    desc1.putInteger(cTID('Wh12'), -25);
    desc1.putInteger(cTID('Bk12'), 18);
    desc1.putInteger(cTID('CrTx'), 10);
    desc1.putInteger(cTID('Vibr'), -5);
    desc1.putInteger(cTID('Strt'), -5);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -10);
    desc1.putInteger(cTID('HA_G'), 31);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 10);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -22);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), -45);
    desc1.putInteger(cTID('SA_G'), -39);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -35);
    desc1.putInteger(cTID('SA_M'), -35);
    desc1.putInteger(cTID('LA_R'), 15);
    desc1.putInteger(cTID('LA_O'), 17);
    desc1.putInteger(cTID('LA_Y'), 30);
    desc1.putInteger(cTID('LA_G'), -75);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -30);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 50);
    desc1.putInteger(cTID('STHS'), 8);
    desc1.putInteger(cTID('STB '), -50);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 25);
    desc1.putInteger(cTID('GRNS'), 55);
    desc1.putInteger(cTID('GRNF'), 55);
    desc1.putInteger(cTID('BlkB'), 10);
    desc1.putInteger(cTID('RHue'), 50);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 50);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -15);
    desc1.putInteger(cTID('BSat'), -20);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(20);
    list1.putInteger(39);
    list1.putInteger(43);
    list1.putInteger(158);
    list1.putInteger(163);
    list1.putInteger(192);
    list1.putInteger(195);
    list1.putInteger(255);
    list1.putInteger(217);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(46);
    list2.putInteger(15);
    list2.putInteger(106);
    list2.putInteger(108);
    list2.putInteger(142);
    list2.putInteger(158);
    list2.putInteger(163);
    list2.putInteger(181);
    list2.putInteger(199);
    list2.putInteger(215);
    list2.putInteger(255);
    list2.putInteger(248);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(46);
    list3.putInteger(19);
    list3.putInteger(105);
    list3.putInteger(108);
    list3.putInteger(146);
    list3.putInteger(164);
    list3.putInteger(165);
    list3.putInteger(184);
    list3.putInteger(202);
    list3.putInteger(216);
    list3.putInteger(255);
    list3.putInteger(248);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(46);
    list4.putInteger(19);
    list4.putInteger(105);
    list4.putInteger(105);
    list4.putInteger(140);
    list4.putInteger(155);
    list4.putInteger(160);
    list4.putInteger(178);
    list4.putInteger(201);
    list4.putInteger(216);
    list4.putInteger(255);
    list4.putInteger(248);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM phim nâu vườn nhãn\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"C072F8DB59201B42AED279131FC6BEAB\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+8\"\n      crs:IncrementalTint=\"-10\"\n      crs:Exposure2012=\"+0.40\"\n      crs:Contrast2012=\"-20\"\n      crs:Highlights2012=\"-45\"\n      crs:Shadows2012=\"+33\"\n      crs:Whites2012=\"-25\"\n      crs:Blacks2012=\"+18\"\n      crs:Texture=\"+10\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-5\"\n      crs:Saturation=\"-5\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-10\"\n      crs:HueAdjustmentGreen=\"+31\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"+10\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-22\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"-45\"\n      crs:SaturationAdjustmentGreen=\"-39\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-35\"\n      crs:SaturationAdjustmentMagenta=\"-35\"\n      crs:LuminanceAdjustmentRed=\"+15\"\n      crs:LuminanceAdjustmentOrange=\"+17\"\n      crs:LuminanceAdjustmentYellow=\"+30\"\n      crs:LuminanceAdjustmentGreen=\"-75\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-30\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"50\"\n      crs:SplitToningHighlightSaturation=\"8\"\n      crs:SplitToningBalance=\"-50\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"25\"\n      crs:GrainSize=\"55\"\n      crs:GrainFrequency=\"55\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+10\"\n      crs:RedHue=\"+50\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+50\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-15\"\n      crs:BlueSaturation=\"-20\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (SIGMA 50mm F1.4 DG HSM A014, Canon)\"\n      crs:LensProfileFilename=\"Canon (SIGMA 50mm F1.4 DG HSM A014) - RAW.lcp\"\n      crs:LensProfileDigest=\"D27AAB58AA0D6BE632853B936ED87D9F\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"73\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 20</rdf:li>\n       <rdf:li>39, 43</rdf:li>\n       <rdf:li>158, 163</rdf:li>\n       <rdf:li>192, 195</rdf:li>\n       <rdf:li>255, 217</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>46, 15</rdf:li>\n       <rdf:li>106, 108</rdf:li>\n       <rdf:li>142, 158</rdf:li>\n       <rdf:li>163, 181</rdf:li>\n       <rdf:li>199, 215</rdf:li>\n       <rdf:li>255, 248</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>46, 19</rdf:li>\n       <rdf:li>105, 108</rdf:li>\n       <rdf:li>146, 164</rdf:li>\n       <rdf:li>165, 184</rdf:li>\n       <rdf:li>202, 216</rdf:li>\n       <rdf:li>255, 248</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>46, 19</rdf:li>\n       <rdf:li>105, 105</rdf:li>\n       <rdf:li>140, 155</rdf:li>\n       <rdf:li>160, 178</rdf:li>\n       <rdf:li>201, 216</rdf:li>\n       <rdf:li>255, 248</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _12.main
//=========================================
//

_12.main = function () {
  _12();
};

_12.main();

// EOF

"_12.jsx"
// EOF
