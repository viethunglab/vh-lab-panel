#target photoshop
//
// 07.jsx
//

//
// Generated Thu May 05 2022 23:21:45 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 07 ==============
//
function _07() {
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
    desc1.putInteger(cTID('Temp'), 37);
    desc1.putInteger(cTID('Tint'), -5);
    desc1.putDouble(cTID('Ex12'), 0.93);
    desc1.putInteger(cTID('Cr12'), -16);
    desc1.putInteger(cTID('Hi12'), -16);
    desc1.putInteger(cTID('Sh12'), 10);
    desc1.putInteger(cTID('Wh12'), 56);
    desc1.putInteger(cTID('Bk12'), 10);
    desc1.putInteger(cTID('Vibr'), -10);
    desc1.putInteger(cTID('Strt'), 1);
    desc1.putInteger(cTID('Shrp'), 90);
    desc1.putDouble(cTID('ShpR'), 3);
    desc1.putInteger(cTID('ShpD'), 0);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 8);
    desc1.putInteger(cTID('LNRD'), 2);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 47);
    desc1.putInteger(cTID('CNRD'), 48);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -20);
    desc1.putInteger(cTID('HA_O'), 10);
    desc1.putInteger(cTID('HA_Y'), 20);
    desc1.putInteger(cTID('HA_G'), -40);
    desc1.putInteger(cTID('HA_A'), -74);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 25);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -15);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -10);
    desc1.putInteger(cTID('SA_G'), -52);
    desc1.putInteger(cTID('SA_A'), -21);
    desc1.putInteger(cTID('SA_B'), -20);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), -15);
    desc1.putInteger(cTID('LA_R'), -15);
    desc1.putInteger(cTID('LA_O'), 5);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -2);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 208);
    desc1.putInteger(cTID('STSS'), 53);
    desc1.putInteger(cTID('STHH'), 203);
    desc1.putInteger(cTID('STHS'), 3);
    desc1.putInteger(cTID('STB '), 5);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('BlkB'), 5);
    desc1.putInteger(cTID('RHue'), 45);
    desc1.putInteger(cTID('RSat'), -10);
    desc1.putInteger(cTID('GHue'), 100);
    desc1.putInteger(cTID('GSat'), -5);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), -10);
    var list1 = new ActionList();
    list1.putInteger(8);
    list1.putInteger(0);
    list1.putInteger(36);
    list1.putInteger(33);
    list1.putInteger(203);
    list1.putInteger(172);
    list1.putInteger(255);
    list1.putInteger(216);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(22);
    list2.putInteger(5);
    list2.putInteger(66);
    list2.putInteger(42);
    list2.putInteger(116);
    list2.putInteger(126);
    list2.putInteger(181);
    list2.putInteger(201);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(22);
    list3.putInteger(6);
    list3.putInteger(65);
    list3.putInteger(43);
    list3.putInteger(116);
    list3.putInteger(128);
    list3.putInteger(181);
    list3.putInteger(194);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(22);
    list4.putInteger(6);
    list4.putInteger(66);
    list4.putInteger(43);
    list4.putInteger(118);
    list4.putInteger(127);
    list4.putInteger(181);
    list4.putInteger(199);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"07\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"AF389C52A06B6B4AB3AAD87B17C20D4F\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+37\"\n      crs:IncrementalTint=\"-5\"\n      crs:Exposure2012=\"+0.93\"\n      crs:Contrast2012=\"-16\"\n      crs:Highlights2012=\"-16\"\n      crs:Shadows2012=\"+10\"\n      crs:Whites2012=\"+56\"\n      crs:Blacks2012=\"+10\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-10\"\n      crs:Saturation=\"+1\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"90\"\n      crs:SharpenRadius=\"+3.0\"\n      crs:SharpenDetail=\"0\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"8\"\n      crs:LuminanceNoiseReductionDetail=\"2\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"47\"\n      crs:ColorNoiseReductionDetail=\"48\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-20\"\n      crs:HueAdjustmentOrange=\"+10\"\n      crs:HueAdjustmentYellow=\"+20\"\n      crs:HueAdjustmentGreen=\"-40\"\n      crs:HueAdjustmentAqua=\"-74\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"+25\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-15\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-10\"\n      crs:SaturationAdjustmentGreen=\"-52\"\n      crs:SaturationAdjustmentAqua=\"-21\"\n      crs:SaturationAdjustmentBlue=\"-20\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"-15\"\n      crs:LuminanceAdjustmentRed=\"-15\"\n      crs:LuminanceAdjustmentOrange=\"+5\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-2\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"208\"\n      crs:SplitToningShadowSaturation=\"53\"\n      crs:SplitToningHighlightHue=\"203\"\n      crs:SplitToningHighlightSaturation=\"3\"\n      crs:SplitToningBalance=\"+5\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+5\"\n      crs:RedHue=\"+45\"\n      crs:RedSaturation=\"-10\"\n      crs:GreenHue=\"+100\"\n      crs:GreenSaturation=\"-5\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"-10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>8, 0</rdf:li>\n       <rdf:li>36, 33</rdf:li>\n       <rdf:li>203, 172</rdf:li>\n       <rdf:li>255, 216</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>22, 5</rdf:li>\n       <rdf:li>66, 42</rdf:li>\n       <rdf:li>116, 126</rdf:li>\n       <rdf:li>181, 201</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>22, 6</rdf:li>\n       <rdf:li>65, 43</rdf:li>\n       <rdf:li>116, 128</rdf:li>\n       <rdf:li>181, 194</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>22, 6</rdf:li>\n       <rdf:li>66, 43</rdf:li>\n       <rdf:li>118, 127</rdf:li>\n       <rdf:li>181, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _07.main
//=========================================
//

_07.main = function () {
  _07();
};

_07.main();

// EOF

"07.jsx"
// EOF
