#target photoshop
//
// _09.jsx
//

//
// Generated Tue Dec 14 2021 13:41:23 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 09 ==============
//
function _09() {
  // Duplicate
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('Vrsn'), 5);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Camera Raw Filter
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('CrVe'), "14.0");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putInteger(cTID('Cr12'), -18);
    desc1.putInteger(cTID('Hi12'), -34);
    desc1.putInteger(cTID('Sh12'), 16);
    desc1.putInteger(cTID('Wh12'), -12);
    desc1.putInteger(cTID('Bk12'), 18);
    desc1.putInteger(cTID('Cl12'), -20);
    desc1.putInteger(cTID('Vibr'), 25);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 67);
    desc1.putInteger(cTID('HA_A'), -72);
    desc1.putInteger(cTID('HA_B'), -29);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -18);
    desc1.putInteger(cTID('SA_O'), 6);
    desc1.putInteger(cTID('SA_Y'), -36);
    desc1.putInteger(cTID('SA_G'), -29);
    desc1.putInteger(cTID('SA_A'), -40);
    desc1.putInteger(cTID('SA_B'), -49);
    desc1.putInteger(cTID('SA_P'), -82);
    desc1.putInteger(cTID('SA_M'), -58);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 41);
    desc1.putInteger(cTID('LA_Y'), -6);
    desc1.putInteger(cTID('LA_G'), -32);
    desc1.putInteger(cTID('LA_A'), -45);
    desc1.putInteger(cTID('LA_B'), 13);
    desc1.putInteger(cTID('LA_P'), -19);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 30);
    desc1.putInteger(cTID('GRNS'), 93);
    desc1.putInteger(cTID('GRNF'), 98);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(71);
    list1.putInteger(63);
    list1.putInteger(85);
    list1.putInteger(111);
    list1.putInteger(120);
    list1.putInteger(148);
    list1.putInteger(159);
    list1.putInteger(184);
    list1.putInteger(192);
    list1.putInteger(255);
    list1.putInteger(216);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(62);
    list2.putInteger(49);
    list2.putInteger(101);
    list2.putInteger(90);
    list2.putInteger(142);
    list2.putInteger(141);
    list2.putInteger(194);
    list2.putInteger(203);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(63);
    list3.putInteger(63);
    list3.putInteger(127);
    list3.putInteger(127);
    list3.putInteger(195);
    list3.putInteger(194);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(8);
    list4.putInteger(31);
    list4.putInteger(35);
    list4.putInteger(77);
    list4.putInteger(83);
    list4.putInteger(139);
    list4.putInteger(139);
    list4.putInteger(193);
    list4.putInteger(193);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (21)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"3774D1CB12B78111A5E7E42FC2ECCB82\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"-18\"\n      crs:Highlights2012=\"-34\"\n      crs:Shadows2012=\"+16\"\n      crs:Whites2012=\"-12\"\n      crs:Blacks2012=\"+18\"\n      crs:Clarity2012=\"-20\"\n      crs:Vibrance=\"+25\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+67\"\n      crs:HueAdjustmentAqua=\"-72\"\n      crs:HueAdjustmentBlue=\"-29\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-18\"\n      crs:SaturationAdjustmentOrange=\"+6\"\n      crs:SaturationAdjustmentYellow=\"-36\"\n      crs:SaturationAdjustmentGreen=\"-29\"\n      crs:SaturationAdjustmentAqua=\"-40\"\n      crs:SaturationAdjustmentBlue=\"-49\"\n      crs:SaturationAdjustmentPurple=\"-82\"\n      crs:SaturationAdjustmentMagenta=\"-58\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+41\"\n      crs:LuminanceAdjustmentYellow=\"-6\"\n      crs:LuminanceAdjustmentGreen=\"-32\"\n      crs:LuminanceAdjustmentAqua=\"-45\"\n      crs:LuminanceAdjustmentBlue=\"+13\"\n      crs:LuminanceAdjustmentPurple=\"-19\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"30\"\n      crs:GrainSize=\"93\"\n      crs:GrainFrequency=\"98\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 71</rdf:li>\n       <rdf:li>63, 85</rdf:li>\n       <rdf:li>111, 120</rdf:li>\n       <rdf:li>148, 159</rdf:li>\n       <rdf:li>184, 192</rdf:li>\n       <rdf:li>255, 216</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>62, 49</rdf:li>\n       <rdf:li>101, 90</rdf:li>\n       <rdf:li>142, 141</rdf:li>\n       <rdf:li>194, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>63, 63</rdf:li>\n       <rdf:li>127, 127</rdf:li>\n       <rdf:li>195, 194</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 8</rdf:li>\n       <rdf:li>31, 35</rdf:li>\n       <rdf:li>77, 83</rdf:li>\n       <rdf:li>139, 139</rdf:li>\n       <rdf:li>193, 193</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
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

"_09.jsx"
// EOF
