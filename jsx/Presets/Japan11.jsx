#target photoshop
//
// _11.jsx
//

//
// Generated Wed Dec 15 2021 14:01:40 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 11 ==============
//
function _11() {
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
    desc1.putInteger(cTID('Temp'), 7);
    desc1.putInteger(cTID('Tint'), -19);
    desc1.putDouble(cTID('Ex12'), 1.85);
    desc1.putInteger(cTID('Cr12'), 49);
    desc1.putInteger(cTID('Hi12'), -94);
    desc1.putInteger(cTID('Sh12'), 18);
    desc1.putInteger(cTID('Wh12'), -100);
    desc1.putInteger(cTID('Bk12'), 40);
    desc1.putInteger(cTID('Vibr'), 16);
    desc1.putInteger(cTID('Strt'), -7);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 18);
    desc1.putInteger(cTID('HA_O'), 3);
    desc1.putInteger(cTID('HA_Y'), 16);
    desc1.putInteger(cTID('HA_G'), 17);
    desc1.putInteger(cTID('HA_A'), 1);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -13);
    desc1.putInteger(cTID('SA_O'), 41);
    desc1.putInteger(cTID('SA_Y'), -42);
    desc1.putInteger(cTID('SA_G'), -25);
    desc1.putInteger(cTID('SA_A'), -14);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 6);
    desc1.putInteger(cTID('LA_Y'), 27);
    desc1.putInteger(cTID('LA_G'), 17);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('DfPA'), 20);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 22);
    desc1.putInteger(cTID('RSat'), -5);
    desc1.putInteger(cTID('GHue'), 39);
    desc1.putInteger(cTID('GSat'), -3);
    desc1.putInteger(cTID('BHue'), -3);
    desc1.putInteger(cTID('BSat'), -5);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(190);
    list1.putInteger(189);
    list1.putInteger(255);
    list1.putInteger(245);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(39);
    list2.putInteger(26);
    list2.putInteger(129);
    list2.putInteger(127);
    list2.putInteger(191);
    list2.putInteger(199);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(48);
    list3.putInteger(41);
    list3.putInteger(126);
    list3.putInteger(124);
    list3.putInteger(192);
    list3.putInteger(199);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(48);
    list4.putInteger(39);
    list4.putInteger(127);
    list4.putInteger(124);
    list4.putInteger(194);
    list4.putInteger(200);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 2);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 78);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 36\"\n     crs:Amount=\"1\"\n     crs:UUID=\"68878845FE91814A962EA10EEC5B87F6\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+7\"\n      crs:IncrementalTint=\"-19\"\n      crs:Exposure2012=\"+1.85\"\n      crs:Contrast2012=\"+49\"\n      crs:Highlights2012=\"-94\"\n      crs:Shadows2012=\"+18\"\n      crs:Whites2012=\"-100\"\n      crs:Blacks2012=\"+40\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"+16\"\n      crs:Saturation=\"-7\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+18\"\n      crs:HueAdjustmentOrange=\"+3\"\n      crs:HueAdjustmentYellow=\"+16\"\n      crs:HueAdjustmentGreen=\"+17\"\n      crs:HueAdjustmentAqua=\"+1\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-13\"\n      crs:SaturationAdjustmentOrange=\"+41\"\n      crs:SaturationAdjustmentYellow=\"-42\"\n      crs:SaturationAdjustmentGreen=\"-25\"\n      crs:SaturationAdjustmentAqua=\"-14\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+6\"\n      crs:LuminanceAdjustmentYellow=\"+27\"\n      crs:LuminanceAdjustmentGreen=\"+17\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"1\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"20\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+22\"\n      crs:RedSaturation=\"-5\"\n      crs:GreenHue=\"+39\"\n      crs:GreenSaturation=\"-3\"\n      crs:BlueHue=\"-3\"\n      crs:BlueSaturation=\"-5\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (Canon EF 50mm f/1.4 USM)\"\n      crs:LensProfileFilename=\"Canon EOS-1Ds Mark III (Canon EF 50mm f1.4 USM) - RAW.lcp\"\n      crs:LensProfileDigest=\"8F32FC2D56959D4DCB55E9F4227F12F8\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"78\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>190, 189</rdf:li>\n       <rdf:li>255, 245</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 26</rdf:li>\n       <rdf:li>129, 127</rdf:li>\n       <rdf:li>191, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>48, 41</rdf:li>\n       <rdf:li>126, 124</rdf:li>\n       <rdf:li>192, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>48, 39</rdf:li>\n       <rdf:li>127, 124</rdf:li>\n       <rdf:li>194, 200</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _11.main
//=========================================
//

_11.main = function () {
  _11();
};

_11.main();

// EOF

"_11.jsx"
// EOF
