#target photoshop
//
// 14.jsx
//

//
// Generated Thu May 05 2022 23:21:46 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 14 ==============
//
function _14() {
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
    desc1.putInteger(cTID('Temp'), -18);
    desc1.putInteger(cTID('Tint'), -1);
    desc1.putDouble(cTID('Ex12'), 0.45);
    desc1.putInteger(cTID('Cr12'), 9);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), 28);
    desc1.putInteger(cTID('Wh12'), -87);
    desc1.putInteger(cTID('Bk12'), 88);
    desc1.putInteger(cTID('Cl12'), -10);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 85);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 10);
    desc1.putInteger(cTID('HA_G'), 20);
    desc1.putInteger(cTID('HA_A'), 10);
    desc1.putInteger(cTID('HA_B'), 28);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 30);
    desc1.putInteger(cTID('SA_R'), -15);
    desc1.putInteger(cTID('SA_O'), -31);
    desc1.putInteger(cTID('SA_Y'), -5);
    desc1.putInteger(cTID('SA_G'), -51);
    desc1.putInteger(cTID('SA_A'), -35);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -45);
    desc1.putInteger(cTID('SA_M'), -30);
    desc1.putInteger(cTID('LA_R'), -15);
    desc1.putInteger(cTID('LA_O'), 2);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), 20);
    desc1.putInteger(cTID('LA_A'), 15);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), -15);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 225);
    desc1.putInteger(cTID('STSS'), 10);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 85);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('AuCA'), 1);
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('DfPA'), 20);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('GRNA'), 14);
    desc1.putInteger(cTID('GRNS'), 35);
    desc1.putInteger(cTID('GRNF'), 65);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 25);
    desc1.putInteger(cTID('RSat'), 25);
    desc1.putInteger(cTID('GHue'), 75);
    desc1.putInteger(cTID('GSat'), -15);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), -15);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(39);
    list1.putInteger(34);
    list1.putInteger(51);
    list1.putInteger(72);
    list1.putInteger(75);
    list1.putInteger(133);
    list1.putInteger(133);
    list1.putInteger(188);
    list1.putInteger(187);
    list1.putInteger(255);
    list1.putInteger(245);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(41);
    list2.putInteger(14);
    list2.putInteger(118);
    list2.putInteger(122);
    list2.putInteger(175);
    list2.putInteger(198);
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
    list3.putInteger(177);
    list3.putInteger(203);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(22);
    list4.putInteger(15);
    list4.putInteger(112);
    list4.putInteger(120);
    list4.putInteger(168);
    list4.putInteger(201);
    list4.putInteger(255);
    list4.putInteger(251);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 0);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"14\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"D23F9D4570B9904EA65733FC44B6802E\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-18\"\n      crs:IncrementalTint=\"-1\"\n      crs:Exposure2012=\"+0.45\"\n      crs:Contrast2012=\"+9\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"+28\"\n      crs:Whites2012=\"-87\"\n      crs:Blacks2012=\"+88\"\n      crs:Clarity2012=\"-10\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"85\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+15\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"+10\"\n      crs:HueAdjustmentGreen=\"+20\"\n      crs:HueAdjustmentAqua=\"+10\"\n      crs:HueAdjustmentBlue=\"+28\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+30\"\n      crs:SaturationAdjustmentRed=\"-15\"\n      crs:SaturationAdjustmentOrange=\"-31\"\n      crs:SaturationAdjustmentYellow=\"-5\"\n      crs:SaturationAdjustmentGreen=\"-51\"\n      crs:SaturationAdjustmentAqua=\"-35\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-45\"\n      crs:SaturationAdjustmentMagenta=\"-30\"\n      crs:LuminanceAdjustmentRed=\"-15\"\n      crs:LuminanceAdjustmentOrange=\"+2\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"+20\"\n      crs:LuminanceAdjustmentAqua=\"+15\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"-15\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"225\"\n      crs:SplitToningShadowSaturation=\"10\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+85\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"1\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"20\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"14\"\n      crs:GrainSize=\"35\"\n      crs:GrainFrequency=\"65\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+25\"\n      crs:RedSaturation=\"+25\"\n      crs:GreenHue=\"+75\"\n      crs:GreenSaturation=\"-15\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"-15\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 39</rdf:li>\n       <rdf:li>34, 51</rdf:li>\n       <rdf:li>72, 75</rdf:li>\n       <rdf:li>133, 133</rdf:li>\n       <rdf:li>188, 187</rdf:li>\n       <rdf:li>255, 245</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>41, 14</rdf:li>\n       <rdf:li>118, 122</rdf:li>\n       <rdf:li>175, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>33, 13</rdf:li>\n       <rdf:li>80, 65</rdf:li>\n       <rdf:li>114, 120</rdf:li>\n       <rdf:li>177, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>22, 15</rdf:li>\n       <rdf:li>112, 120</rdf:li>\n       <rdf:li>168, 201</rdf:li>\n       <rdf:li>255, 251</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _14.main
//=========================================
//

_14.main = function () {
  _14();
};

_14.main();

// EOF

"14.jsx"
// EOF
