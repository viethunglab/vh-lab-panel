#target photoshop
//
// _12.jsx
//

//
// Generated Wed Dec 15 2021 14:01:47 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 12 ==============
//
function _12() {
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
    desc1.putInteger(cTID('Temp'), -46);
    desc1.putInteger(cTID('Tint'), 19);
    desc1.putDouble(cTID('Ex12'), 0.65);
    desc1.putInteger(cTID('Cr12'), -9);
    desc1.putInteger(cTID('Hi12'), -67);
    desc1.putInteger(cTID('Sh12'), 31);
    desc1.putInteger(cTID('Wh12'), -34);
    desc1.putInteger(cTID('Bk12'), 21);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Vibr'), -2);
    desc1.putInteger(cTID('Strt'), -12);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), 8);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 10);
    desc1.putInteger(cTID('HA_A'), 10);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 30);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -16);
    desc1.putInteger(cTID('SA_Y'), 33);
    desc1.putInteger(cTID('SA_G'), -82);
    desc1.putInteger(cTID('SA_A'), -35);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -73);
    desc1.putInteger(cTID('SA_M'), -78);
    desc1.putInteger(cTID('LA_R'), 5);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), -15);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 8);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 50);
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
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 49);
    desc1.putInteger(cTID('RSat'), 12);
    desc1.putInteger(cTID('GHue'), 57);
    desc1.putInteger(cTID('GSat'), -8);
    desc1.putInteger(cTID('BHue'), -36);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(19);
    list1.putInteger(62);
    list1.putInteger(61);
    list1.putInteger(188);
    list1.putInteger(189);
    list1.putInteger(255);
    list1.putInteger(245);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(42);
    list2.putInteger(8);
    list2.putInteger(81);
    list2.putInteger(41);
    list2.putInteger(129);
    list2.putInteger(118);
    list2.putInteger(184);
    list2.putInteger(200);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(36);
    list3.putInteger(10);
    list3.putInteger(76);
    list3.putInteger(46);
    list3.putInteger(124);
    list3.putInteger(122);
    list3.putInteger(180);
    list3.putInteger(199);
    list3.putInteger(219);
    list3.putInteger(230);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(34);
    list4.putInteger(11);
    list4.putInteger(72);
    list4.putInteger(50);
    list4.putInteger(120);
    list4.putInteger(121);
    list4.putInteger(181);
    list4.putInteger(206);
    list4.putInteger(222);
    list4.putInteger(235);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 2);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 79);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 38\"\n     crs:Amount=\"1\"\n     crs:UUID=\"B0DFFA00A47B7843A787D932E997F79A\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-46\"\n      crs:IncrementalTint=\"+19\"\n      crs:Exposure2012=\"+0.65\"\n      crs:Contrast2012=\"-9\"\n      crs:Highlights2012=\"-67\"\n      crs:Shadows2012=\"+31\"\n      crs:Whites2012=\"-34\"\n      crs:Blacks2012=\"+21\"\n      crs:Clarity2012=\"-5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-2\"\n      crs:Saturation=\"-12\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"+8\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+10\"\n      crs:HueAdjustmentAqua=\"+10\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+30\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-16\"\n      crs:SaturationAdjustmentYellow=\"+33\"\n      crs:SaturationAdjustmentGreen=\"-82\"\n      crs:SaturationAdjustmentAqua=\"-35\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-73\"\n      crs:SaturationAdjustmentMagenta=\"-78\"\n      crs:LuminanceAdjustmentRed=\"+5\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"-15\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"8\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+50\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+49\"\n      crs:RedSaturation=\"+12\"\n      crs:GreenHue=\"+57\"\n      crs:GreenSaturation=\"-8\"\n      crs:BlueHue=\"-36\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (Canon EF 50mm f/1.4 USM)\"\n      crs:LensProfileFilename=\"Canon EOS-1Ds Mark III (Canon EF 50mm f1.4 USM) - RAW.lcp\"\n      crs:LensProfileDigest=\"8F32FC2D56959D4DCB55E9F4227F12F8\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"79\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 19</rdf:li>\n       <rdf:li>62, 61</rdf:li>\n       <rdf:li>188, 189</rdf:li>\n       <rdf:li>255, 245</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 8</rdf:li>\n       <rdf:li>81, 41</rdf:li>\n       <rdf:li>129, 118</rdf:li>\n       <rdf:li>184, 200</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 10</rdf:li>\n       <rdf:li>76, 46</rdf:li>\n       <rdf:li>124, 122</rdf:li>\n       <rdf:li>180, 199</rdf:li>\n       <rdf:li>219, 230</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>34, 11</rdf:li>\n       <rdf:li>72, 50</rdf:li>\n       <rdf:li>120, 121</rdf:li>\n       <rdf:li>181, 206</rdf:li>\n       <rdf:li>222, 235</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
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
