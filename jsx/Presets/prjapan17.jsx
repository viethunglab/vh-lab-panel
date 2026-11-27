#target photoshop
//
// prjapan17.jsx
//

//
// Generated Sat Apr 16 2022 19:01:38 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 17 ==============
//
function _17() {
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
    desc1.putInteger(cTID('Temp'), 3);
    desc1.putInteger(cTID('Tint'), -19);
    desc1.putDouble(cTID('Ex12'), 0.2);
    desc1.putInteger(cTID('Cr12'), 22);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), -25);
    desc1.putInteger(cTID('Wh12'), -100);
    desc1.putInteger(cTID('Bk12'), 74);
    desc1.putInteger(cTID('Cl12'), 27);
    desc1.putInteger(cTID('Strt'), -5);
    desc1.putInteger(cTID('PC_S'), 7);
    desc1.putInteger(cTID('PC_D'), 16);
    desc1.putInteger(cTID('PC_L'), 6);
    desc1.putInteger(cTID('PC_H'), -26);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 69);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 42);
    desc1.putInteger(cTID('CNRD'), 69);
    desc1.putInteger(cTID('CNRS'), 70);
    desc1.putInteger(cTID('HA_R'), -5);
    desc1.putInteger(cTID('HA_O'), -2);
    desc1.putInteger(cTID('HA_Y'), 5);
    desc1.putInteger(cTID('HA_G'), 10);
    desc1.putInteger(cTID('HA_A'), 6);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 15);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), -10);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), -25);
    desc1.putInteger(cTID('SA_A'), -5);
    desc1.putInteger(cTID('SA_B'), -3);
    desc1.putInteger(cTID('SA_P'), -30);
    desc1.putInteger(cTID('SA_M'), -10);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 5);
    desc1.putInteger(cTID('LA_Y'), 23);
    desc1.putInteger(cTID('LA_G'), 54);
    desc1.putInteger(cTID('LA_A'), -5);
    desc1.putInteger(cTID('LA_B'), -10);
    desc1.putInteger(cTID('LA_P'), -20);
    desc1.putInteger(cTID('LA_M'), -10);
    desc1.putInteger(cTID('STSH'), 65);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 250);
    desc1.putInteger(cTID('STHS'), 5);
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
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 10);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(5);
    list1.putInteger(55);
    list1.putInteger(60);
    list1.putInteger(205);
    list1.putInteger(197);
    list1.putInteger(255);
    list1.putInteger(233);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(41);
    list2.putInteger(21);
    list2.putInteger(115);
    list2.putInteger(119);
    list2.putInteger(193);
    list2.putInteger(201);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(39);
    list3.putInteger(22);
    list3.putInteger(116);
    list3.putInteger(122);
    list3.putInteger(193);
    list3.putInteger(202);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(42);
    list4.putInteger(23);
    list4.putInteger(118);
    list4.putInteger(124);
    list4.putInteger(194);
    list4.putInteger(199);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"17\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"FCF31704229C9A45B61FA8CDD3E9CB00\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+3\"\n      crs:IncrementalTint=\"-19\"\n      crs:Exposure2012=\"+0.20\"\n      crs:Contrast2012=\"+22\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"-25\"\n      crs:Whites2012=\"-100\"\n      crs:Blacks2012=\"+74\"\n      crs:Clarity2012=\"+27\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-5\"\n      crs:ParametricShadows=\"+7\"\n      crs:ParametricDarks=\"+16\"\n      crs:ParametricLights=\"+6\"\n      crs:ParametricHighlights=\"-26\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"69\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"42\"\n      crs:ColorNoiseReductionDetail=\"69\"\n      crs:ColorNoiseReductionSmoothness=\"70\"\n      crs:HueAdjustmentRed=\"-5\"\n      crs:HueAdjustmentOrange=\"-2\"\n      crs:HueAdjustmentYellow=\"+5\"\n      crs:HueAdjustmentGreen=\"+10\"\n      crs:HueAdjustmentAqua=\"+6\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"+15\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"-10\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"-25\"\n      crs:SaturationAdjustmentAqua=\"-5\"\n      crs:SaturationAdjustmentBlue=\"-3\"\n      crs:SaturationAdjustmentPurple=\"-30\"\n      crs:SaturationAdjustmentMagenta=\"-10\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+5\"\n      crs:LuminanceAdjustmentYellow=\"+23\"\n      crs:LuminanceAdjustmentGreen=\"+54\"\n      crs:LuminanceAdjustmentAqua=\"-5\"\n      crs:LuminanceAdjustmentBlue=\"-10\"\n      crs:LuminanceAdjustmentPurple=\"-20\"\n      crs:LuminanceAdjustmentMagenta=\"-10\"\n      crs:SplitToningShadowHue=\"65\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"250\"\n      crs:SplitToningHighlightSaturation=\"5\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+10\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 5</rdf:li>\n       <rdf:li>55, 60</rdf:li>\n       <rdf:li>205, 197</rdf:li>\n       <rdf:li>255, 233</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>41, 21</rdf:li>\n       <rdf:li>115, 119</rdf:li>\n       <rdf:li>193, 201</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 22</rdf:li>\n       <rdf:li>116, 122</rdf:li>\n       <rdf:li>193, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 23</rdf:li>\n       <rdf:li>118, 124</rdf:li>\n       <rdf:li>194, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _17.main
//=========================================
//

_17.main = function () {
  _17();
};

_17.main();

// EOF

"prjapan17.jsx"
// EOF
