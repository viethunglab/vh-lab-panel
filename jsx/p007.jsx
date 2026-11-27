#target photoshop
//
// _007.jsx
//

//
// Generated Sat Dec 04 2021 11:49:36 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 007 ==============
//
function _007() {
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
    desc1.putInteger(cTID('Temp'), 3);
    desc1.putInteger(cTID('Tint'), -2);
    desc1.putDouble(cTID('Ex12'), 0.05);
    desc1.putInteger(cTID('Cr12'), 25);
    desc1.putInteger(cTID('Sh12'), 32);
    desc1.putInteger(cTID('Bk12'), 36);
    desc1.putInteger(cTID('Cl12'), -16);
    desc1.putInteger(cTID('Vibr'), -7);
    desc1.putInteger(cTID('Strt'), -14);
    desc1.putInteger(cTID('PC_S'), -47);
    desc1.putInteger(cTID('PC_D'), 29);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 66);
    desc1.putDouble(cTID('ShpR'), 1.8);
    desc1.putInteger(cTID('ShpD'), 53);
    desc1.putInteger(cTID('ShpM'), 65);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -40);
    desc1.putInteger(cTID('HA_G'), -21);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 12);
    desc1.putInteger(cTID('SA_O'), -1);
    desc1.putInteger(cTID('SA_Y'), 9);
    desc1.putInteger(cTID('SA_G'), -70);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 19);
    desc1.putInteger(cTID('LA_O'), 21);
    desc1.putInteger(cTID('LA_Y'), 36);
    desc1.putInteger(cTID('LA_G'), 60);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 69);
    desc1.putInteger(cTID('STSS'), 9);
    desc1.putInteger(cTID('STHH'), 240);
    desc1.putInteger(cTID('STHS'), 14);
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
    desc1.putInteger(cTID('PCVA'), -25);
    desc1.putInteger(cTID('PCVM'), 80);
    desc1.putInteger(cTID('PCVF'), 48);
    desc1.putInteger(cTID('PCVR'), 52);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), -39);
    desc1.putInteger(cTID('RHue'), 7);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 51);
    desc1.putInteger(cTID('GSat'), -34);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 2);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(17);
    list1.putInteger(26);
    list1.putInteger(34);
    list1.putInteger(44);
    list1.putInteger(51);
    list1.putInteger(60);
    list1.putInteger(68);
    list1.putInteger(74);
    list1.putInteger(85);
    list1.putInteger(89);
    list1.putInteger(102);
    list1.putInteger(105);
    list1.putInteger(119);
    list1.putInteger(120);
    list1.putInteger(136);
    list1.putInteger(135);
    list1.putInteger(153);
    list1.putInteger(151);
    list1.putInteger(170);
    list1.putInteger(167);
    list1.putInteger(187);
    list1.putInteger(183);
    list1.putInteger(204);
    list1.putInteger(200);
    list1.putInteger(221);
    list1.putInteger(218);
    list1.putInteger(238);
    list1.putInteger(236);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_08\"\n     crs:Amount=\"1\"\n     crs:UUID=\"1B8B20D7B77FC6499ED0E08CDDE077A7\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+3\"\n      crs:IncrementalTint=\"-2\"\n      crs:Exposure2012=\"+0.05\"\n      crs:Contrast2012=\"+25\"\n      crs:Highlights2012=\"0\"\n      crs:Shadows2012=\"+32\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"+36\"\n      crs:Clarity2012=\"-16\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-7\"\n      crs:Saturation=\"-14\"\n      crs:ParametricShadows=\"-47\"\n      crs:ParametricDarks=\"+29\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"66\"\n      crs:SharpenRadius=\"+1.8\"\n      crs:SharpenDetail=\"53\"\n      crs:SharpenEdgeMasking=\"65\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-40\"\n      crs:HueAdjustmentGreen=\"-21\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+12\"\n      crs:SaturationAdjustmentOrange=\"-1\"\n      crs:SaturationAdjustmentYellow=\"+9\"\n      crs:SaturationAdjustmentGreen=\"-70\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+19\"\n      crs:LuminanceAdjustmentOrange=\"+21\"\n      crs:LuminanceAdjustmentYellow=\"+36\"\n      crs:LuminanceAdjustmentGreen=\"+60\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"69\"\n      crs:SplitToningShadowSaturation=\"9\"\n      crs:SplitToningHighlightHue=\"240\"\n      crs:SplitToningHighlightSaturation=\"14\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-25\"\n      crs:PostCropVignetteMidpoint=\"80\"\n      crs:PostCropVignetteFeather=\"48\"\n      crs:PostCropVignetteRoundness=\"+52\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"-39\"\n      crs:RedHue=\"+7\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+51\"\n      crs:GreenSaturation=\"-34\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+2\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>17, 26</rdf:li>\n       <rdf:li>34, 44</rdf:li>\n       <rdf:li>51, 60</rdf:li>\n       <rdf:li>68, 74</rdf:li>\n       <rdf:li>85, 89</rdf:li>\n       <rdf:li>102, 105</rdf:li>\n       <rdf:li>119, 120</rdf:li>\n       <rdf:li>136, 135</rdf:li>\n       <rdf:li>153, 151</rdf:li>\n       <rdf:li>170, 167</rdf:li>\n       <rdf:li>187, 183</rdf:li>\n       <rdf:li>204, 200</rdf:li>\n       <rdf:li>221, 218</rdf:li>\n       <rdf:li>238, 236</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _007.main
//=========================================
//

_007.main = function () {
  _007();
};

_007.main();

// EOF

"_007.jsx"
// EOF
