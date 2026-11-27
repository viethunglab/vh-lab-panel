#target photoshop
//
// _05.jsx
//

//
// Generated Tue Mar 29 2022 18:31:30 GMT+0700
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
    desc1.putDouble(cTID('Ex12'), -0.45);
    desc1.putInteger(cTID('Cr12'), -61);
    desc1.putInteger(cTID('Hi12'), 6);
    desc1.putInteger(cTID('Sh12'), 6);
    desc1.putInteger(cTID('Wh12'), 6);
    desc1.putInteger(cTID('Cl12'), 10);
    desc1.putInteger(cTID('Strt'), -10);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 48);
    desc1.putInteger(cTID('HA_O'), 10);
    desc1.putInteger(cTID('HA_Y'), -15);
    desc1.putInteger(cTID('HA_G'), -20);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -15);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 48);
    desc1.putInteger(cTID('SA_R'), 20);
    desc1.putInteger(cTID('SA_O'), 10);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), -41);
    desc1.putInteger(cTID('SA_A'), 25);
    desc1.putInteger(cTID('SA_B'), -20);
    desc1.putInteger(cTID('SA_P'), -51);
    desc1.putInteger(cTID('SA_M'), -10);
    desc1.putInteger(cTID('LA_R'), -15);
    desc1.putInteger(cTID('LA_O'), 10);
    desc1.putInteger(cTID('LA_Y'), 12);
    desc1.putInteger(cTID('LA_G'), -5);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), -11);
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
    list2.putInteger(18);
    list2.putInteger(26);
    list2.putInteger(23);
    list2.putInteger(51);
    list2.putInteger(33);
    list2.putInteger(77);
    list2.putInteger(53);
    list2.putInteger(102);
    list2.putInteger(88);
    list2.putInteger(128);
    list2.putInteger(132);
    list2.putInteger(153);
    list2.putInteger(168);
    list2.putInteger(179);
    list2.putInteger(195);
    list2.putInteger(204);
    list2.putInteger(216);
    list2.putInteger(230);
    list2.putInteger(232);
    list2.putInteger(255);
    list2.putInteger(247);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(18);
    list3.putInteger(26);
    list3.putInteger(25);
    list3.putInteger(51);
    list3.putInteger(36);
    list3.putInteger(77);
    list3.putInteger(57);
    list3.putInteger(102);
    list3.putInteger(92);
    list3.putInteger(128);
    list3.putInteger(132);
    list3.putInteger(153);
    list3.putInteger(166);
    list3.putInteger(179);
    list3.putInteger(193);
    list3.putInteger(204);
    list3.putInteger(215);
    list3.putInteger(230);
    list3.putInteger(231);
    list3.putInteger(255);
    list3.putInteger(246);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(18);
    list4.putInteger(26);
    list4.putInteger(28);
    list4.putInteger(51);
    list4.putInteger(41);
    list4.putInteger(77);
    list4.putInteger(66);
    list4.putInteger(102);
    list4.putInteger(100);
    list4.putInteger(128);
    list4.putInteger(135);
    list4.putInteger(153);
    list4.putInteger(169);
    list4.putInteger(179);
    list4.putInteger(194);
    list4.putInteger(204);
    list4.putInteger(216);
    list4.putInteger(230);
    list4.putInteger(232);
    list4.putInteger(255);
    list4.putInteger(247);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"05\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"1B51C4475FE61142971D23878A307810\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">DHCL</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"-0.45\"\n      crs:Contrast2012=\"-61\"\n      crs:Highlights2012=\"+6\"\n      crs:Shadows2012=\"+6\"\n      crs:Whites2012=\"+6\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"+10\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-10\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+48\"\n      crs:HueAdjustmentOrange=\"+10\"\n      crs:HueAdjustmentYellow=\"-15\"\n      crs:HueAdjustmentGreen=\"-20\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-15\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"+48\"\n      crs:SaturationAdjustmentRed=\"+20\"\n      crs:SaturationAdjustmentOrange=\"+10\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"-41\"\n      crs:SaturationAdjustmentAqua=\"+25\"\n      crs:SaturationAdjustmentBlue=\"-20\"\n      crs:SaturationAdjustmentPurple=\"-51\"\n      crs:SaturationAdjustmentMagenta=\"-10\"\n      crs:LuminanceAdjustmentRed=\"-15\"\n      crs:LuminanceAdjustmentOrange=\"+10\"\n      crs:LuminanceAdjustmentYellow=\"+12\"\n      crs:LuminanceAdjustmentGreen=\"-5\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"-11\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 18</rdf:li>\n       <rdf:li>26, 23</rdf:li>\n       <rdf:li>51, 33</rdf:li>\n       <rdf:li>77, 53</rdf:li>\n       <rdf:li>102, 88</rdf:li>\n       <rdf:li>128, 132</rdf:li>\n       <rdf:li>153, 168</rdf:li>\n       <rdf:li>179, 195</rdf:li>\n       <rdf:li>204, 216</rdf:li>\n       <rdf:li>230, 232</rdf:li>\n       <rdf:li>255, 247</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 18</rdf:li>\n       <rdf:li>26, 25</rdf:li>\n       <rdf:li>51, 36</rdf:li>\n       <rdf:li>77, 57</rdf:li>\n       <rdf:li>102, 92</rdf:li>\n       <rdf:li>128, 132</rdf:li>\n       <rdf:li>153, 166</rdf:li>\n       <rdf:li>179, 193</rdf:li>\n       <rdf:li>204, 215</rdf:li>\n       <rdf:li>230, 231</rdf:li>\n       <rdf:li>255, 246</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 18</rdf:li>\n       <rdf:li>26, 28</rdf:li>\n       <rdf:li>51, 41</rdf:li>\n       <rdf:li>77, 66</rdf:li>\n       <rdf:li>102, 100</rdf:li>\n       <rdf:li>128, 135</rdf:li>\n       <rdf:li>153, 169</rdf:li>\n       <rdf:li>179, 194</rdf:li>\n       <rdf:li>204, 216</rdf:li>\n       <rdf:li>230, 232</rdf:li>\n       <rdf:li>255, 247</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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

"_05.jsx"
// EOF
