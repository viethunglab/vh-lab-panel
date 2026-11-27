#target photoshop
//
// _010.jsx
//

//
// Generated Sat Dec 04 2021 11:50:27 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 010 ==============
//
function _010() {
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
    desc1.putInteger(cTID('Temp'), 1);
    desc1.putInteger(cTID('Tint'), -2);
    desc1.putDouble(cTID('Ex12'), -0.41);
    desc1.putInteger(cTID('Hi12'), -36);
    desc1.putInteger(cTID('Sh12'), 56);
    desc1.putInteger(cTID('Wh12'), -38);
    desc1.putInteger(cTID('Bk12'), 48);
    desc1.putInteger(cTID('Shrp'), 80);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 33);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 34);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 29);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 30);
    desc1.putInteger(cTID('HA_A'), -18);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), -21);
    desc1.putInteger(cTID('HA_M'), 13);
    desc1.putInteger(cTID('SA_R'), 1);
    desc1.putInteger(cTID('SA_O'), -9);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), -71);
    desc1.putInteger(cTID('SA_B'), -47);
    desc1.putInteger(cTID('SA_P'), -28);
    desc1.putInteger(cTID('SA_M'), -58);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 30);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -47);
    desc1.putInteger(cTID('LA_B'), -41);
    desc1.putInteger(cTID('LA_P'), -20);
    desc1.putInteger(cTID('LA_M'), -11);
    desc1.putInteger(cTID('STSH'), 53);
    desc1.putInteger(cTID('STSS'), 20);
    desc1.putInteger(cTID('STHH'), 268);
    desc1.putInteger(cTID('STHS'), 25);
    desc1.putInteger(cTID('STB '), 34);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('PCVA'), -32);
    desc1.putInteger(cTID('PCVM'), 30);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 85);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), -48);
    desc1.putInteger(cTID('RSat'), 23);
    desc1.putInteger(cTID('GHue'), -55);
    desc1.putInteger(cTID('GSat'), 25);
    desc1.putInteger(cTID('BHue'), -29);
    desc1.putInteger(cTID('BSat'), 28);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(19);
    list1.putInteger(44);
    list1.putInteger(68);
    list1.putInteger(185);
    list1.putInteger(192);
    list1.putInteger(255);
    list1.putInteger(228);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(2);
    list2.putInteger(0);
    list2.putInteger(39);
    list2.putInteger(39);
    list2.putInteger(73);
    list2.putInteger(73);
    list2.putInteger(124);
    list2.putInteger(121);
    list2.putInteger(168);
    list2.putInteger(161);
    list2.putInteger(224);
    list2.putInteger(212);
    list2.putInteger(255);
    list2.putInteger(241);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(37);
    list3.putInteger(40);
    list3.putInteger(65);
    list3.putInteger(70);
    list3.putInteger(100);
    list3.putInteger(105);
    list3.putInteger(155);
    list3.putInteger(156);
    list3.putInteger(206);
    list3.putInteger(203);
    list3.putInteger(255);
    list3.putInteger(247);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(8);
    list4.putInteger(0);
    list4.putInteger(64);
    list4.putInteger(67);
    list4.putInteger(94);
    list4.putInteger(98);
    list4.putInteger(141);
    list4.putInteger(140);
    list4.putInteger(188);
    list4.putInteger(179);
    list4.putInteger(255);
    list4.putInteger(238);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_40\"\n     crs:Amount=\"1\"\n     crs:UUID=\"AA01A896AAE13948B30B2B0F1BD8B5A3\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+1\"\n      crs:IncrementalTint=\"-2\"\n      crs:Exposure2012=\"-0.41\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-36\"\n      crs:Shadows2012=\"+56\"\n      crs:Whites2012=\"-38\"\n      crs:Blacks2012=\"+48\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"80\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"33\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"34\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+29\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+30\"\n      crs:HueAdjustmentAqua=\"-18\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"-21\"\n      crs:HueAdjustmentMagenta=\"+13\"\n      crs:SaturationAdjustmentRed=\"+1\"\n      crs:SaturationAdjustmentOrange=\"-9\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"-71\"\n      crs:SaturationAdjustmentBlue=\"-47\"\n      crs:SaturationAdjustmentPurple=\"-28\"\n      crs:SaturationAdjustmentMagenta=\"-58\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+30\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-47\"\n      crs:LuminanceAdjustmentBlue=\"-41\"\n      crs:LuminanceAdjustmentPurple=\"-20\"\n      crs:LuminanceAdjustmentMagenta=\"-11\"\n      crs:SplitToningShadowHue=\"53\"\n      crs:SplitToningShadowSaturation=\"20\"\n      crs:SplitToningHighlightHue=\"268\"\n      crs:SplitToningHighlightSaturation=\"25\"\n      crs:SplitToningBalance=\"+34\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-32\"\n      crs:PostCropVignetteMidpoint=\"30\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"85\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"-48\"\n      crs:RedSaturation=\"+23\"\n      crs:GreenHue=\"-55\"\n      crs:GreenSaturation=\"+25\"\n      crs:BlueHue=\"-29\"\n      crs:BlueSaturation=\"+28\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 19</rdf:li>\n       <rdf:li>44, 68</rdf:li>\n       <rdf:li>185, 192</rdf:li>\n       <rdf:li>255, 228</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>2, 0</rdf:li>\n       <rdf:li>39, 39</rdf:li>\n       <rdf:li>73, 73</rdf:li>\n       <rdf:li>124, 121</rdf:li>\n       <rdf:li>168, 161</rdf:li>\n       <rdf:li>224, 212</rdf:li>\n       <rdf:li>255, 241</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>37, 40</rdf:li>\n       <rdf:li>65, 70</rdf:li>\n       <rdf:li>100, 105</rdf:li>\n       <rdf:li>155, 156</rdf:li>\n       <rdf:li>206, 203</rdf:li>\n       <rdf:li>255, 247</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>8, 0</rdf:li>\n       <rdf:li>64, 67</rdf:li>\n       <rdf:li>94, 98</rdf:li>\n       <rdf:li>141, 140</rdf:li>\n       <rdf:li>188, 179</rdf:li>\n       <rdf:li>255, 238</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _010.main
//=========================================
//

_010.main = function () {
  _010();
};

_010.main();

// EOF

"_010.jsx"
// EOF
