#target photoshop
//
// _18.jsx
//

//
// Generated Wed Dec 15 2021 14:02:30 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 18 ==============
//
function _18() {
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
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -7);
    desc1.putInteger(cTID('Tint'), -11);
    desc1.putDouble(cTID('Ex12'), 0.41);
    desc1.putInteger(cTID('Cr12'), -8);
    desc1.putInteger(cTID('Hi12'), -45);
    desc1.putInteger(cTID('Sh12'), -17);
    desc1.putInteger(cTID('Wh12'), 11);
    desc1.putInteger(cTID('Bk12'), 24);
    desc1.putInteger(cTID('Cl12'), -11);
    desc1.putInteger(cTID('Vibr'), 7);
    desc1.putInteger(cTID('Strt'), 2);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('LNR '), 36);
    desc1.putInteger(cTID('LNRD'), 64);
    desc1.putInteger(cTID('LNRC'), 10);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 29);
    desc1.putInteger(cTID('CNRS'), 84);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), -2);
    desc1.putInteger(cTID('HA_Y'), 5);
    desc1.putInteger(cTID('HA_G'), 11);
    desc1.putInteger(cTID('HA_A'), 11);
    desc1.putInteger(cTID('HA_B'), 5);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 30);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -15);
    desc1.putInteger(cTID('SA_Y'), -5);
    desc1.putInteger(cTID('SA_G'), -36);
    desc1.putInteger(cTID('SA_A'), -2);
    desc1.putInteger(cTID('SA_B'), 56);
    desc1.putInteger(cTID('SA_P'), -45);
    desc1.putInteger(cTID('SA_M'), -30);
    desc1.putInteger(cTID('LA_R'), -15);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), -56);
    desc1.putInteger(cTID('LA_A'), 6);
    desc1.putInteger(cTID('LA_B'), 25);
    desc1.putInteger(cTID('LA_P'), -15);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 238);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 244);
    desc1.putInteger(cTID('STHS'), 23);
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
    desc1.putInteger(cTID('GRNA'), 6);
    desc1.putInteger(cTID('GRNS'), 21);
    desc1.putInteger(cTID('GRNF'), 59);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 20);
    desc1.putInteger(cTID('RSat'), 40);
    desc1.putInteger(cTID('GHue'), 50);
    desc1.putInteger(cTID('GSat'), -10);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), -10);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(10);
    list1.putInteger(25);
    list1.putInteger(28);
    list1.putInteger(76);
    list1.putInteger(75);
    list1.putInteger(133);
    list1.putInteger(133);
    list1.putInteger(188);
    list1.putInteger(189);
    list1.putInteger(255);
    list1.putInteger(251);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(35);
    list2.putInteger(11);
    list2.putInteger(81);
    list2.putInteger(62);
    list2.putInteger(114);
    list2.putInteger(121);
    list2.putInteger(174);
    list2.putInteger(199);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(33);
    list3.putInteger(13);
    list3.putInteger(80);
    list3.putInteger(65);
    list3.putInteger(114);
    list3.putInteger(120);
    list3.putInteger(143);
    list3.putInteger(165);
    list3.putInteger(210);
    list3.putInteger(230);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(27);
    list4.putInteger(14);
    list4.putInteger(77);
    list4.putInteger(63);
    list4.putInteger(114);
    list4.putInteger(120);
    list4.putInteger(170);
    list4.putInteger(196);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 44\"\n     crs:Amount=\"1\"\n     crs:UUID=\"1FD9E21198E1BB4A85A1F15A1580427F\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-7\"\n      crs:IncrementalTint=\"-11\"\n      crs:Exposure2012=\"+0.41\"\n      crs:Contrast2012=\"-8\"\n      crs:Highlights2012=\"-45\"\n      crs:Shadows2012=\"-17\"\n      crs:Whites2012=\"+11\"\n      crs:Blacks2012=\"+24\"\n      crs:Clarity2012=\"-11\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+7\"\n      crs:Saturation=\"+2\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"36\"\n      crs:LuminanceNoiseReductionDetail=\"64\"\n      crs:LuminanceNoiseReductionContrast=\"10\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"29\"\n      crs:ColorNoiseReductionSmoothness=\"84\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"-2\"\n      crs:HueAdjustmentYellow=\"+5\"\n      crs:HueAdjustmentGreen=\"+11\"\n      crs:HueAdjustmentAqua=\"+11\"\n      crs:HueAdjustmentBlue=\"+5\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+30\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-15\"\n      crs:SaturationAdjustmentYellow=\"-5\"\n      crs:SaturationAdjustmentGreen=\"-36\"\n      crs:SaturationAdjustmentAqua=\"-2\"\n      crs:SaturationAdjustmentBlue=\"+56\"\n      crs:SaturationAdjustmentPurple=\"-45\"\n      crs:SaturationAdjustmentMagenta=\"-30\"\n      crs:LuminanceAdjustmentRed=\"-15\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"-56\"\n      crs:LuminanceAdjustmentAqua=\"+6\"\n      crs:LuminanceAdjustmentBlue=\"+25\"\n      crs:LuminanceAdjustmentPurple=\"-15\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"238\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"244\"\n      crs:SplitToningHighlightSaturation=\"23\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"6\"\n      crs:GrainSize=\"21\"\n      crs:GrainFrequency=\"59\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+20\"\n      crs:RedSaturation=\"+40\"\n      crs:GreenHue=\"+50\"\n      crs:GreenSaturation=\"-10\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"-10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 10</rdf:li>\n       <rdf:li>25, 28</rdf:li>\n       <rdf:li>76, 75</rdf:li>\n       <rdf:li>133, 133</rdf:li>\n       <rdf:li>188, 189</rdf:li>\n       <rdf:li>255, 251</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>35, 11</rdf:li>\n       <rdf:li>81, 62</rdf:li>\n       <rdf:li>114, 121</rdf:li>\n       <rdf:li>174, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>33, 13</rdf:li>\n       <rdf:li>80, 65</rdf:li>\n       <rdf:li>114, 120</rdf:li>\n       <rdf:li>143, 165</rdf:li>\n       <rdf:li>210, 230</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>27, 14</rdf:li>\n       <rdf:li>77, 63</rdf:li>\n       <rdf:li>114, 120</rdf:li>\n       <rdf:li>170, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _18.main
//=========================================
//

_18.main = function () {
  _18();
};

_18.main();

// EOF

"_18.jsx"
// EOF
