#target photoshop
//
// TuyenChon09.jsx
//

//
// Generated Tue Jan 11 2022 14:06:57 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 09 ==============
//
function _09() {
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
    desc1.putInteger(cTID('Cr12'), 34);
    desc1.putInteger(cTID('Hi12'), -69);
    desc1.putInteger(cTID('Sh12'), 60);
    desc1.putInteger(cTID('Wh12'), -40);
    desc1.putInteger(cTID('Bk12'), -20);
    desc1.putInteger(cTID('Cl12'), -10);
    desc1.putInteger(cTID('Vibr'), -31);
    desc1.putInteger(cTID('Strt'), -24);
    desc1.putInteger(cTID('PC_S'), -22);
    desc1.putInteger(cTID('PC_D'), 29);
    desc1.putInteger(cTID('PC_L'), -20);
    desc1.putInteger(cTID('PC_H'), -21);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -36);
    desc1.putInteger(cTID('HA_G'), -76);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -30);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -7);
    desc1.putInteger(cTID('SA_O'), 23);
    desc1.putInteger(cTID('SA_Y'), -42);
    desc1.putInteger(cTID('SA_G'), -73);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), -8);
    desc1.putInteger(cTID('LA_O'), -3);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 25);
    desc1.putInteger(cTID('STSS'), 6);
    desc1.putInteger(cTID('STHH'), 193);
    desc1.putInteger(cTID('STHS'), 18);
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
    desc1.putInteger(cTID('GRNA'), 3);
    desc1.putInteger(cTID('GRNS'), 20);
    desc1.putInteger(cTID('GRNF'), 85);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 20);
    desc1.putInteger(cTID('RSat'), -27);
    desc1.putInteger(cTID('GHue'), 67);
    desc1.putInteger(cTID('GSat'), -46);
    desc1.putInteger(cTID('BHue'), -18);
    desc1.putInteger(cTID('BSat'), 64);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(20);
    list1.putInteger(50);
    list1.putInteger(36);
    list1.putInteger(122);
    list1.putInteger(119);
    list1.putInteger(180);
    list1.putInteger(181);
    list1.putInteger(255);
    list1.putInteger(239);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(55);
    list2.putInteger(52);
    list2.putInteger(124);
    list2.putInteger(130);
    list2.putInteger(232);
    list2.putInteger(243);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(36);
    list3.putInteger(35);
    list3.putInteger(128);
    list3.putInteger(128);
    list3.putInteger(248);
    list3.putInteger(242);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(42);
    list4.putInteger(32);
    list4.putInteger(132);
    list4.putInteger(121);
    list4.putInteger(205);
    list4.putInteger(196);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"09\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"60FA215F25016840BB76B91491C62EEB\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"+34\"\n      crs:Highlights2012=\"-69\"\n      crs:Shadows2012=\"+60\"\n      crs:Whites2012=\"-40\"\n      crs:Blacks2012=\"-20\"\n      crs:Clarity2012=\"-10\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-31\"\n      crs:Saturation=\"-24\"\n      crs:ParametricShadows=\"-22\"\n      crs:ParametricDarks=\"+29\"\n      crs:ParametricLights=\"-20\"\n      crs:ParametricHighlights=\"-21\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-36\"\n      crs:HueAdjustmentGreen=\"-76\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-30\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-7\"\n      crs:SaturationAdjustmentOrange=\"+23\"\n      crs:SaturationAdjustmentYellow=\"-42\"\n      crs:SaturationAdjustmentGreen=\"-73\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"-8\"\n      crs:LuminanceAdjustmentOrange=\"-3\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"25\"\n      crs:SplitToningShadowSaturation=\"6\"\n      crs:SplitToningHighlightHue=\"193\"\n      crs:SplitToningHighlightSaturation=\"18\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"3\"\n      crs:GrainSize=\"20\"\n      crs:GrainFrequency=\"85\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+20\"\n      crs:RedSaturation=\"-27\"\n      crs:GreenHue=\"+67\"\n      crs:GreenSaturation=\"-46\"\n      crs:BlueHue=\"-18\"\n      crs:BlueSaturation=\"+64\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 20</rdf:li>\n       <rdf:li>50, 36</rdf:li>\n       <rdf:li>122, 119</rdf:li>\n       <rdf:li>180, 181</rdf:li>\n       <rdf:li>255, 239</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>55, 52</rdf:li>\n       <rdf:li>124, 130</rdf:li>\n       <rdf:li>232, 243</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 35</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>248, 242</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 32</rdf:li>\n       <rdf:li>132, 121</rdf:li>\n       <rdf:li>205, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _09.main
//=========================================
//

_09.main = function () {
  _09();
};

_09.main();

// EOF

"TuyenChon09.jsx"
// EOF
