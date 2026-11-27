#target photoshop
//
// _10.jsx
//

//
// Generated Wed Dec 15 2021 14:01:33 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 10 ==============
//
function _10() {
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
    desc1.putInteger(cTID('Temp'), 20);
    desc1.putInteger(cTID('Tint'), -24);
    desc1.putDouble(cTID('Ex12'), 0.5);
    desc1.putInteger(cTID('Cr12'), -16);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), 1);
    desc1.putInteger(cTID('Wh12'), -100);
    desc1.putInteger(cTID('Bk12'), -13);
    desc1.putInteger(cTID('Vibr'), 22);
    desc1.putInteger(cTID('Strt'), -4);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 40);
    desc1.putDouble(cTID('ShpR'), 1.2);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 48);
    desc1.putInteger(cTID('LNRD'), 57);
    desc1.putInteger(cTID('LNRC'), 18);
    desc1.putInteger(cTID('CNR '), 42);
    desc1.putInteger(cTID('CNRD'), 69);
    desc1.putInteger(cTID('CNRS'), 70);
    desc1.putInteger(cTID('HA_R'), 8);
    desc1.putInteger(cTID('HA_O'), 54);
    desc1.putInteger(cTID('HA_Y'), 25);
    desc1.putInteger(cTID('HA_G'), 32);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -7);
    desc1.putInteger(cTID('SA_Y'), -79);
    desc1.putInteger(cTID('SA_G'), -35);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), -30);
    desc1.putInteger(cTID('LA_R'), 11);
    desc1.putInteger(cTID('LA_O'), -20);
    desc1.putInteger(cTID('LA_Y'), -11);
    desc1.putInteger(cTID('LA_G'), 7);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -30);
    desc1.putInteger(cTID('LA_P'), -10);
    desc1.putInteger(cTID('LA_M'), -15);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('DfPA'), 20);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 23);
    desc1.putInteger(cTID('RSat'), -7);
    desc1.putInteger(cTID('GHue'), 76);
    desc1.putInteger(cTID('GSat'), -63);
    desc1.putInteger(cTID('BHue'), 5);
    desc1.putInteger(cTID('BSat'), 93);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(34);
    list1.putInteger(33);
    list1.putInteger(36);
    list1.putInteger(68);
    list1.putInteger(66);
    list1.putInteger(125);
    list1.putInteger(127);
    list1.putInteger(197);
    list1.putInteger(202);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(54);
    list2.putInteger(22);
    list2.putInteger(110);
    list2.putInteger(120);
    list2.putInteger(175);
    list2.putInteger(206);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(52);
    list3.putInteger(19);
    list3.putInteger(84);
    list3.putInteger(62);
    list3.putInteger(116);
    list3.putInteger(115);
    list3.putInteger(178);
    list3.putInteger(198);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(50);
    list4.putInteger(21);
    list4.putInteger(114);
    list4.putInteger(117);
    list4.putInteger(176);
    list4.putInteger(204);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 2);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 35\"\n     crs:Amount=\"1\"\n     crs:UUID=\"77F94B69AF52E34AA9140CE592DE7118\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+20\"\n      crs:IncrementalTint=\"-24\"\n      crs:Exposure2012=\"+0.50\"\n      crs:Contrast2012=\"-16\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"+1\"\n      crs:Whites2012=\"-100\"\n      crs:Blacks2012=\"-13\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"+22\"\n      crs:Saturation=\"-4\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"40\"\n      crs:SharpenRadius=\"+1.2\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"48\"\n      crs:LuminanceNoiseReductionDetail=\"57\"\n      crs:LuminanceNoiseReductionContrast=\"18\"\n      crs:ColorNoiseReduction=\"42\"\n      crs:ColorNoiseReductionDetail=\"69\"\n      crs:ColorNoiseReductionSmoothness=\"70\"\n      crs:HueAdjustmentRed=\"+8\"\n      crs:HueAdjustmentOrange=\"+54\"\n      crs:HueAdjustmentYellow=\"+25\"\n      crs:HueAdjustmentGreen=\"+32\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-7\"\n      crs:SaturationAdjustmentYellow=\"-79\"\n      crs:SaturationAdjustmentGreen=\"-35\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"-30\"\n      crs:LuminanceAdjustmentRed=\"+11\"\n      crs:LuminanceAdjustmentOrange=\"-20\"\n      crs:LuminanceAdjustmentYellow=\"-11\"\n      crs:LuminanceAdjustmentGreen=\"+7\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-30\"\n      crs:LuminanceAdjustmentPurple=\"-10\"\n      crs:LuminanceAdjustmentMagenta=\"-15\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"1\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"20\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+23\"\n      crs:RedSaturation=\"-7\"\n      crs:GreenHue=\"+76\"\n      crs:GreenSaturation=\"-63\"\n      crs:BlueHue=\"+5\"\n      crs:BlueSaturation=\"+93\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (Canon EF 50mm f/1.4 USM)\"\n      crs:LensProfileFilename=\"Canon EOS-1Ds Mark III (Canon EF 50mm f1.4 USM) - RAW.lcp\"\n      crs:LensProfileDigest=\"8F32FC2D56959D4DCB55E9F4227F12F8\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"100\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 34</rdf:li>\n       <rdf:li>33, 36</rdf:li>\n       <rdf:li>68, 66</rdf:li>\n       <rdf:li>125, 127</rdf:li>\n       <rdf:li>197, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>54, 22</rdf:li>\n       <rdf:li>110, 120</rdf:li>\n       <rdf:li>175, 206</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>52, 19</rdf:li>\n       <rdf:li>84, 62</rdf:li>\n       <rdf:li>116, 115</rdf:li>\n       <rdf:li>178, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>50, 21</rdf:li>\n       <rdf:li>114, 117</rdf:li>\n       <rdf:li>176, 204</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _10.main
//=========================================
//

_10.main = function () {
  _10();
};

_10.main();

// EOF

"_10.jsx"
// EOF
