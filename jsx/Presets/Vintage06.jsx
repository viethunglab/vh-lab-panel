#target photoshop
//
// Vintage06.jsx
//

//
// Generated Wed Jan 12 2022 12:03:02 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 6 ==============
//
function _6() {
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
    desc1.putDouble(cTID('Ex12'), -0.5);
    desc1.putInteger(cTID('Cr12'), -23);
    desc1.putInteger(cTID('Hi12'), -9);
    desc1.putInteger(cTID('Sh12'), 46);
    desc1.putInteger(cTID('Wh12'), -22);
    desc1.putInteger(cTID('Bk12'), 53);
    desc1.putInteger(cTID('Cl12'), -13);
    desc1.putInteger(cTID('Vibr'), 5);
    desc1.putInteger(cTID('Strt'), -13);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 24);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 65);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 4);
    desc1.putInteger(cTID('HA_Y'), -30);
    desc1.putInteger(cTID('HA_G'), 22);
    desc1.putInteger(cTID('HA_A'), -33);
    desc1.putInteger(cTID('HA_B'), -21);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -31);
    desc1.putInteger(cTID('SA_O'), -45);
    desc1.putInteger(cTID('SA_Y'), -68);
    desc1.putInteger(cTID('SA_G'), -72);
    desc1.putInteger(cTID('SA_A'), -42);
    desc1.putInteger(cTID('SA_B'), -51);
    desc1.putInteger(cTID('SA_P'), -25);
    desc1.putInteger(cTID('SA_M'), -25);
    desc1.putInteger(cTID('LA_R'), -38);
    desc1.putInteger(cTID('LA_O'), -17);
    desc1.putInteger(cTID('LA_Y'), 22);
    desc1.putInteger(cTID('LA_G'), 22);
    desc1.putInteger(cTID('LA_A'), 27);
    desc1.putInteger(cTID('LA_B'), 47);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 58);
    desc1.putInteger(cTID('STSS'), 8);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 21);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 7);
    desc1.putInteger(cTID('GRNS'), 20);
    desc1.putInteger(cTID('GRNF'), 40);
    desc1.putInteger(cTID('BlkB'), -13);
    desc1.putInteger(cTID('RHue'), 35);
    desc1.putInteger(cTID('RSat'), 15);
    desc1.putInteger(cTID('GHue'), 51);
    desc1.putInteger(cTID('GSat'), -1);
    desc1.putInteger(cTID('BHue'), -25);
    desc1.putInteger(cTID('BSat'), -7);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(48);
    list1.putInteger(27);
    list1.putInteger(116);
    list1.putInteger(105);
    list1.putInteger(176);
    list1.putInteger(173);
    list1.putInteger(254);
    list1.putInteger(211);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(23);
    list2.putInteger(9);
    list2.putInteger(60);
    list2.putInteger(43);
    list2.putInteger(136);
    list2.putInteger(144);
    list2.putInteger(204);
    list2.putInteger(212);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(22);
    list3.putInteger(10);
    list3.putInteger(60);
    list3.putInteger(42);
    list3.putInteger(136);
    list3.putInteger(145);
    list3.putInteger(205);
    list3.putInteger(214);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(23);
    list4.putInteger(9);
    list4.putInteger(59);
    list4.putInteger(42);
    list4.putInteger(136);
    list4.putInteger(145);
    list4.putInteger(204);
    list4.putInteger(214);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"06\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"4413E94B3C485048A5BE4E0BD8C5D8CA\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Vintage</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"-0.50\"\n      crs:Contrast2012=\"-23\"\n      crs:Highlights2012=\"-9\"\n      crs:Shadows2012=\"+46\"\n      crs:Whites2012=\"-22\"\n      crs:Blacks2012=\"+53\"\n      crs:Clarity2012=\"-13\"\n      crs:Vibrance=\"+5\"\n      crs:Saturation=\"-13\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"+24\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"65\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+4\"\n      crs:HueAdjustmentYellow=\"-30\"\n      crs:HueAdjustmentGreen=\"+22\"\n      crs:HueAdjustmentAqua=\"-33\"\n      crs:HueAdjustmentBlue=\"-21\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-31\"\n      crs:SaturationAdjustmentOrange=\"-45\"\n      crs:SaturationAdjustmentYellow=\"-68\"\n      crs:SaturationAdjustmentGreen=\"-72\"\n      crs:SaturationAdjustmentAqua=\"-42\"\n      crs:SaturationAdjustmentBlue=\"-51\"\n      crs:SaturationAdjustmentPurple=\"-25\"\n      crs:SaturationAdjustmentMagenta=\"-25\"\n      crs:LuminanceAdjustmentRed=\"-38\"\n      crs:LuminanceAdjustmentOrange=\"-17\"\n      crs:LuminanceAdjustmentYellow=\"+22\"\n      crs:LuminanceAdjustmentGreen=\"+22\"\n      crs:LuminanceAdjustmentAqua=\"+27\"\n      crs:LuminanceAdjustmentBlue=\"+47\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"58\"\n      crs:SplitToningShadowSaturation=\"8\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+21\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"7\"\n      crs:GrainSize=\"20\"\n      crs:GrainFrequency=\"40\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-13\"\n      crs:RedHue=\"+35\"\n      crs:RedSaturation=\"+15\"\n      crs:GreenHue=\"+51\"\n      crs:GreenSaturation=\"-1\"\n      crs:BlueHue=\"-25\"\n      crs:BlueSaturation=\"-7\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>48, 27</rdf:li>\n       <rdf:li>116, 105</rdf:li>\n       <rdf:li>176, 173</rdf:li>\n       <rdf:li>254, 211</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>23, 9</rdf:li>\n       <rdf:li>60, 43</rdf:li>\n       <rdf:li>136, 144</rdf:li>\n       <rdf:li>204, 212</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>22, 10</rdf:li>\n       <rdf:li>60, 42</rdf:li>\n       <rdf:li>136, 145</rdf:li>\n       <rdf:li>205, 214</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>23, 9</rdf:li>\n       <rdf:li>59, 42</rdf:li>\n       <rdf:li>136, 145</rdf:li>\n       <rdf:li>204, 214</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _6.main
//=========================================
//

_6.main = function () {
  _6();
};

_6.main();

// EOF

"Vintage06.jsx"
// EOF
