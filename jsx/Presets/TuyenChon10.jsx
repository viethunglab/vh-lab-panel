#target photoshop
//
// TuyenChon10.jsx
//

//
// Generated Tue Jan 11 2022 14:07:26 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 10 ==============
//
function _10() {
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
    desc1.putInteger(cTID('Temp'), -4);
    desc1.putInteger(cTID('Tint'), 18);
    desc1.putDouble(cTID('Ex12'), 0.21);
    desc1.putInteger(cTID('Cr12'), -66);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), -92);
    desc1.putInteger(cTID('Wh12'), -30);
    desc1.putInteger(cTID('Bk12'), 55);
    desc1.putInteger(cTID('CrTx'), -7);
    desc1.putInteger(cTID('Cl12'), 21);
    desc1.putInteger(cTID('Dhze'), 13);
    desc1.putInteger(cTID('Vibr'), 13);
    desc1.putInteger(cTID('Strt'), -1);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 40);
    desc1.putDouble(cTID('ShpR'), 1.5);
    desc1.putInteger(cTID('ShpD'), 28);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 18);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 37);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -4);
    desc1.putInteger(cTID('HA_O'), -48);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), -4);
    desc1.putInteger(cTID('HA_A'), 4);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), -45);
    desc1.putInteger(cTID('HA_M'), -14);
    desc1.putInteger(cTID('SA_R'), -3);
    desc1.putInteger(cTID('SA_O'), -1);
    desc1.putInteger(cTID('SA_Y'), -25);
    desc1.putInteger(cTID('SA_G'), -35);
    desc1.putInteger(cTID('SA_A'), -9);
    desc1.putInteger(cTID('SA_B'), -66);
    desc1.putInteger(cTID('SA_P'), 6);
    desc1.putInteger(cTID('SA_M'), -32);
    desc1.putInteger(cTID('LA_R'), -19);
    desc1.putInteger(cTID('LA_O'), 6);
    desc1.putInteger(cTID('LA_Y'), -14);
    desc1.putInteger(cTID('LA_G'), -6);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -6);
    desc1.putInteger(cTID('LA_P'), -30);
    desc1.putInteger(cTID('LA_M'), -22);
    desc1.putInteger(cTID('STSH'), 292);
    desc1.putInteger(cTID('STSS'), 2);
    desc1.putInteger(cTID('STHH'), 219);
    desc1.putInteger(cTID('STHS'), 2);
    desc1.putInteger(cTID('STB '), 9);
    desc1.putInteger(cTID('CgMH'), 299);
    desc1.putInteger(cTID('CgMS'), 11);
    desc1.putInteger(cTID('CgSL'), -53);
    desc1.putInteger(cTID('CgML'), 100);
    desc1.putInteger(cTID('CgHL'), 24);
    desc1.putInteger(cTID('CgBl'), 59);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), -10);
    desc1.putInteger(cTID('RSat'), -30);
    desc1.putInteger(cTID('GHue'), 30);
    desc1.putInteger(cTID('GSat'), -4);
    desc1.putInteger(cTID('BHue'), -4);
    desc1.putInteger(cTID('BSat'), -32);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(2);
    list1.putInteger(10);
    list1.putInteger(30);
    list1.putInteger(26);
    list1.putInteger(72);
    list1.putInteger(63);
    list1.putInteger(117);
    list1.putInteger(115);
    list1.putInteger(185);
    list1.putInteger(211);
    list1.putInteger(255);
    list1.putInteger(245);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(24);
    list2.putInteger(18);
    list2.putInteger(49);
    list2.putInteger(38);
    list2.putInteger(76);
    list2.putInteger(66);
    list2.putInteger(133);
    list2.putInteger(136);
    list2.putInteger(170);
    list2.putInteger(179);
    list2.putInteger(204);
    list2.putInteger(209);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(24);
    list3.putInteger(18);
    list3.putInteger(75);
    list3.putInteger(74);
    list3.putInteger(95);
    list3.putInteger(99);
    list3.putInteger(129);
    list3.putInteger(132);
    list3.putInteger(173);
    list3.putInteger(172);
    list3.putInteger(205);
    list3.putInteger(204);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(57);
    list4.putInteger(52);
    list4.putInteger(85);
    list4.putInteger(82);
    list4.putInteger(121);
    list4.putInteger(118);
    list4.putInteger(178);
    list4.putInteger(187);
    list4.putInteger(206);
    list4.putInteger(220);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"10\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"05B9C84C4DCC4C4381EA40790F4F4553\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-4\"\n      crs:IncrementalTint=\"+18\"\n      crs:Exposure2012=\"+0.21\"\n      crs:Contrast2012=\"-66\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"-92\"\n      crs:Whites2012=\"-30\"\n      crs:Blacks2012=\"+55\"\n      crs:Texture=\"-7\"\n      crs:Clarity2012=\"+21\"\n      crs:Dehaze=\"+13\"\n      crs:Vibrance=\"+13\"\n      crs:Saturation=\"-1\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"40\"\n      crs:SharpenRadius=\"+1.5\"\n      crs:SharpenDetail=\"28\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"18\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"37\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-4\"\n      crs:HueAdjustmentOrange=\"-48\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"-4\"\n      crs:HueAdjustmentAqua=\"+4\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"-45\"\n      crs:HueAdjustmentMagenta=\"-14\"\n      crs:SaturationAdjustmentRed=\"-3\"\n      crs:SaturationAdjustmentOrange=\"-1\"\n      crs:SaturationAdjustmentYellow=\"-25\"\n      crs:SaturationAdjustmentGreen=\"-35\"\n      crs:SaturationAdjustmentAqua=\"-9\"\n      crs:SaturationAdjustmentBlue=\"-66\"\n      crs:SaturationAdjustmentPurple=\"+6\"\n      crs:SaturationAdjustmentMagenta=\"-32\"\n      crs:LuminanceAdjustmentRed=\"-19\"\n      crs:LuminanceAdjustmentOrange=\"+6\"\n      crs:LuminanceAdjustmentYellow=\"-14\"\n      crs:LuminanceAdjustmentGreen=\"-6\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-6\"\n      crs:LuminanceAdjustmentPurple=\"-30\"\n      crs:LuminanceAdjustmentMagenta=\"-22\"\n      crs:SplitToningShadowHue=\"292\"\n      crs:SplitToningShadowSaturation=\"2\"\n      crs:SplitToningHighlightHue=\"219\"\n      crs:SplitToningHighlightSaturation=\"2\"\n      crs:SplitToningBalance=\"+9\"\n      crs:ColorGradeMidtoneHue=\"299\"\n      crs:ColorGradeMidtoneSat=\"11\"\n      crs:ColorGradeShadowLum=\"-53\"\n      crs:ColorGradeMidtoneLum=\"+100\"\n      crs:ColorGradeHighlightLum=\"+24\"\n      crs:ColorGradeBlending=\"59\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"-10\"\n      crs:RedSaturation=\"-30\"\n      crs:GreenHue=\"+30\"\n      crs:GreenSaturation=\"-4\"\n      crs:BlueHue=\"-4\"\n      crs:BlueSaturation=\"-32\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>2, 10</rdf:li>\n       <rdf:li>30, 26</rdf:li>\n       <rdf:li>72, 63</rdf:li>\n       <rdf:li>117, 115</rdf:li>\n       <rdf:li>185, 211</rdf:li>\n       <rdf:li>255, 245</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>24, 18</rdf:li>\n       <rdf:li>49, 38</rdf:li>\n       <rdf:li>76, 66</rdf:li>\n       <rdf:li>133, 136</rdf:li>\n       <rdf:li>170, 179</rdf:li>\n       <rdf:li>204, 209</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>24, 18</rdf:li>\n       <rdf:li>75, 74</rdf:li>\n       <rdf:li>95, 99</rdf:li>\n       <rdf:li>129, 132</rdf:li>\n       <rdf:li>173, 172</rdf:li>\n       <rdf:li>205, 204</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>57, 52</rdf:li>\n       <rdf:li>85, 82</rdf:li>\n       <rdf:li>121, 118</rdf:li>\n       <rdf:li>178, 187</rdf:li>\n       <rdf:li>206, 220</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
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

"TuyenChon10.jsx"
// EOF
