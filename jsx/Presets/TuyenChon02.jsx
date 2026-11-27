#target photoshop
//
// TuyenChon02.jsx
//

//
// Generated Tue Jan 11 2022 14:00:42 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 02 ==============
//
function _02() {
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
    desc1.putInteger(cTID('Temp'), -22);
    desc1.putInteger(cTID('Tint'), 15);
    desc1.putDouble(cTID('Ex12'), 0.4);
    desc1.putInteger(cTID('Cr12'), -25);
    desc1.putInteger(cTID('Hi12'), -58);
    desc1.putInteger(cTID('Sh12'), 100);
    desc1.putInteger(cTID('Wh12'), 24);
    desc1.putInteger(cTID('Bk12'), 100);
    desc1.putInteger(cTID('CrTx'), -20);
    desc1.putInteger(cTID('Cl12'), -18);
    desc1.putInteger(cTID('Dhze'), 4);
    desc1.putInteger(cTID('Vibr'), -8);
    desc1.putInteger(cTID('Strt'), 22);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 60);
    desc1.putDouble(cTID('ShpR'), 1.4);
    desc1.putInteger(cTID('ShpD'), 49);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -35);
    desc1.putInteger(cTID('HA_O'), 17);
    desc1.putInteger(cTID('HA_Y'), 30);
    desc1.putInteger(cTID('HA_G'), 15);
    desc1.putInteger(cTID('HA_A'), -43);
    desc1.putInteger(cTID('HA_B'), -18);
    desc1.putInteger(cTID('HA_P'), -19);
    desc1.putInteger(cTID('HA_M'), 82);
    desc1.putInteger(cTID('SA_R'), -29);
    desc1.putInteger(cTID('SA_O'), -21);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), -24);
    desc1.putInteger(cTID('SA_A'), -32);
    desc1.putInteger(cTID('SA_B'), -60);
    desc1.putInteger(cTID('SA_P'), -19);
    desc1.putInteger(cTID('SA_M'), -18);
    desc1.putInteger(cTID('LA_R'), 9);
    desc1.putInteger(cTID('LA_O'), 13);
    desc1.putInteger(cTID('LA_Y'), -1);
    desc1.putInteger(cTID('LA_G'), -1);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -1);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 71);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 219);
    desc1.putInteger(cTID('STHS'), 20);
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
    desc1.putInteger(cTID('AuCA'), 1);
    desc1.putInteger(cTID('DfPA'), 3);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), 3);
    desc1.putInteger(cTID('RHue'), 30);
    desc1.putInteger(cTID('RSat'), -85);
    desc1.putInteger(cTID('GHue'), 50);
    desc1.putInteger(cTID('GSat'), -10);
    desc1.putInteger(cTID('BHue'), -12);
    desc1.putInteger(cTID('BSat'), 93);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(35);
    list1.putInteger(30);
    list1.putInteger(95);
    list1.putInteger(94);
    list1.putInteger(168);
    list1.putInteger(170);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(43);
    list2.putInteger(27);
    list2.putInteger(118);
    list2.putInteger(127);
    list2.putInteger(179);
    list2.putInteger(200);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(49);
    list3.putInteger(30);
    list3.putInteger(125);
    list3.putInteger(132);
    list3.putInteger(172);
    list3.putInteger(191);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(45);
    list4.putInteger(19);
    list4.putInteger(117);
    list4.putInteger(122);
    list4.putInteger(179);
    list4.putInteger(200);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"02\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"C615C2FAA361F447A9BEBB65E3D960AB\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+1\"\n      crs:IncrementalTint=\"+1\"\n      crs:Exposure2012=\"+0.40\"\n      crs:Contrast2012=\"-25\"\n      crs:Highlights2012=\"-58\"\n      crs:Shadows2012=\"+100\"\n      crs:Whites2012=\"+24\"\n      crs:Blacks2012=\"+100\"\n      crs:Texture=\"-20\"\n      crs:Clarity2012=\"-18\"\n      crs:Dehaze=\"+4\"\n      crs:Vibrance=\"-8\"\n      crs:Saturation=\"+22\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"60\"\n      crs:SharpenRadius=\"+1.4\"\n      crs:SharpenDetail=\"49\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-35\"\n      crs:HueAdjustmentOrange=\"+17\"\n      crs:HueAdjustmentYellow=\"+30\"\n      crs:HueAdjustmentGreen=\"+15\"\n      crs:HueAdjustmentAqua=\"-43\"\n      crs:HueAdjustmentBlue=\"-18\"\n      crs:HueAdjustmentPurple=\"-19\"\n      crs:HueAdjustmentMagenta=\"+82\"\n      crs:SaturationAdjustmentRed=\"-29\"\n      crs:SaturationAdjustmentOrange=\"-21\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"-24\"\n      crs:SaturationAdjustmentAqua=\"-32\"\n      crs:SaturationAdjustmentBlue=\"-60\"\n      crs:SaturationAdjustmentPurple=\"-19\"\n      crs:SaturationAdjustmentMagenta=\"-18\"\n      crs:LuminanceAdjustmentRed=\"+9\"\n      crs:LuminanceAdjustmentOrange=\"+13\"\n      crs:LuminanceAdjustmentYellow=\"-1\"\n      crs:LuminanceAdjustmentGreen=\"-1\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-1\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"71\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"219\"\n      crs:SplitToningHighlightSaturation=\"20\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"3\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+3\"\n      crs:RedHue=\"+30\"\n      crs:RedSaturation=\"-85\"\n      crs:GreenHue=\"+50\"\n      crs:GreenSaturation=\"-10\"\n      crs:BlueHue=\"-12\"\n      crs:BlueSaturation=\"+93\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>35, 30</rdf:li>\n       <rdf:li>95, 94</rdf:li>\n       <rdf:li>168, 170</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 27</rdf:li>\n       <rdf:li>118, 127</rdf:li>\n       <rdf:li>179, 200</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>49, 30</rdf:li>\n       <rdf:li>125, 132</rdf:li>\n       <rdf:li>172, 191</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>45, 19</rdf:li>\n       <rdf:li>117, 122</rdf:li>\n       <rdf:li>179, 200</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _02.main
//=========================================
//

_02.main = function () {
  _02();
};

_02.main();

// EOF

"TuyenChon02.jsx"
// EOF
