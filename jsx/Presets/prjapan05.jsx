#target photoshop
//
// prjapan05.jsx
//

//
// Generated Sat Apr 16 2022 18:58:44 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 05 ==============
//
function _05() {
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
    desc1.putInteger(cTID('Tint'), 1);
    desc1.putDouble(cTID('Ex12'), 0.4);
    desc1.putInteger(cTID('Cr12'), 100);
    desc1.putInteger(cTID('Hi12'), -63);
    desc1.putInteger(cTID('Sh12'), -5);
    desc1.putInteger(cTID('Wh12'), -57);
    desc1.putInteger(cTID('Bk12'), 63);
    desc1.putInteger(cTID('Cl12'), -8);
    desc1.putInteger(cTID('Vibr'), -8);
    desc1.putInteger(cTID('Strt'), -9);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 32);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 59);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 76);
    desc1.putDouble(cTID('ShpR'), 0.5);
    desc1.putInteger(cTID('ShpD'), 19);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 36);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 38);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 7);
    desc1.putInteger(cTID('HA_O'), 4);
    desc1.putInteger(cTID('HA_Y'), 15);
    desc1.putInteger(cTID('HA_G'), 25);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 4);
    desc1.putInteger(cTID('SA_O'), -12);
    desc1.putInteger(cTID('SA_Y'), -26);
    desc1.putInteger(cTID('SA_G'), -40);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), -53);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), -17);
    desc1.putInteger(cTID('LA_O'), -3);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 14);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 18);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 61);
    desc1.putInteger(cTID('STSS'), 71);
    desc1.putInteger(cTID('STHH'), 200);
    desc1.putInteger(cTID('STHS'), 2);
    desc1.putInteger(cTID('STB '), 94);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 12);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 12);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(17);
    list1.putInteger(26);
    list1.putInteger(34);
    list1.putInteger(44);
    list1.putInteger(51);
    list1.putInteger(60);
    list1.putInteger(68);
    list1.putInteger(74);
    list1.putInteger(85);
    list1.putInteger(89);
    list1.putInteger(102);
    list1.putInteger(105);
    list1.putInteger(119);
    list1.putInteger(120);
    list1.putInteger(136);
    list1.putInteger(135);
    list1.putInteger(153);
    list1.putInteger(151);
    list1.putInteger(170);
    list1.putInteger(167);
    list1.putInteger(187);
    list1.putInteger(183);
    list1.putInteger(204);
    list1.putInteger(200);
    list1.putInteger(221);
    list1.putInteger(218);
    list1.putInteger(238);
    list1.putInteger(236);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 0);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"05\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"B40645C8668ECD45A3D6D40A299AC532\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+2\"\n      crs:IncrementalTint=\"+1\"\n      crs:Exposure2012=\"+0.40\"\n      crs:Contrast2012=\"+100\"\n      crs:Highlights2012=\"-63\"\n      crs:Shadows2012=\"-5\"\n      crs:Whites2012=\"-57\"\n      crs:Blacks2012=\"+63\"\n      crs:Clarity2012=\"-8\"\n      crs:Vibrance=\"-8\"\n      crs:Saturation=\"-9\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"+32\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"59\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"76\"\n      crs:SharpenRadius=\"+0.5\"\n      crs:SharpenDetail=\"19\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"36\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"38\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+7\"\n      crs:HueAdjustmentOrange=\"+4\"\n      crs:HueAdjustmentYellow=\"+15\"\n      crs:HueAdjustmentGreen=\"+25\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+4\"\n      crs:SaturationAdjustmentOrange=\"-12\"\n      crs:SaturationAdjustmentYellow=\"-26\"\n      crs:SaturationAdjustmentGreen=\"-40\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"-53\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"-17\"\n      crs:LuminanceAdjustmentOrange=\"-3\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"+14\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"+18\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"61\"\n      crs:SplitToningShadowSaturation=\"71\"\n      crs:SplitToningHighlightHue=\"200\"\n      crs:SplitToningHighlightSaturation=\"2\"\n      crs:SplitToningBalance=\"+94\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+12\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+12\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>17, 26</rdf:li>\n       <rdf:li>34, 44</rdf:li>\n       <rdf:li>51, 60</rdf:li>\n       <rdf:li>68, 74</rdf:li>\n       <rdf:li>85, 89</rdf:li>\n       <rdf:li>102, 105</rdf:li>\n       <rdf:li>119, 120</rdf:li>\n       <rdf:li>136, 135</rdf:li>\n       <rdf:li>153, 151</rdf:li>\n       <rdf:li>170, 167</rdf:li>\n       <rdf:li>187, 183</rdf:li>\n       <rdf:li>204, 200</rdf:li>\n       <rdf:li>221, 218</rdf:li>\n       <rdf:li>238, 236</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _05.main
//=========================================
//

_05.main = function () {
  _05();
};

_05.main();

// EOF

"prjapan05.jsx"
// EOF
