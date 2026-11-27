#target photoshop
//
// TuyenChon21.jsx
//

//
// Generated Tue Jan 11 2022 14:10:54 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 21 ==============
//
function _21() {
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
    desc1.putInteger(cTID('Temp'), -17);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), 1.07);
    desc1.putInteger(cTID('Cr12'), -29);
    desc1.putInteger(cTID('Hi12'), -71);
    desc1.putInteger(cTID('Sh12'), 29);
    desc1.putInteger(cTID('Wh12'), -100);
    desc1.putInteger(cTID('Bk12'), 100);
    desc1.putInteger(cTID('Cl12'), -21);
    desc1.putInteger(cTID('Vibr'), 5);
    desc1.putInteger(cTID('Strt'), -10);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 15);
    desc1.putInteger(cTID('PC_2'), 35);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 59);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -11);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -2);
    desc1.putInteger(cTID('HA_G'), 47);
    desc1.putInteger(cTID('HA_A'), 5);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 20);
    desc1.putInteger(cTID('SA_O'), -4);
    desc1.putInteger(cTID('SA_Y'), -58);
    desc1.putInteger(cTID('SA_G'), -60);
    desc1.putInteger(cTID('SA_A'), -40);
    desc1.putInteger(cTID('SA_B'), -53);
    desc1.putInteger(cTID('SA_P'), -50);
    desc1.putInteger(cTID('SA_M'), -35);
    desc1.putInteger(cTID('LA_R'), -4);
    desc1.putInteger(cTID('LA_O'), -9);
    desc1.putInteger(cTID('LA_Y'), 7);
    desc1.putInteger(cTID('LA_G'), -20);
    desc1.putInteger(cTID('LA_A'), 15);
    desc1.putInteger(cTID('LA_B'), -53);
    desc1.putInteger(cTID('LA_P'), 30);
    desc1.putInteger(cTID('LA_M'), 10);
    desc1.putInteger(cTID('STSH'), 104);
    desc1.putInteger(cTID('STSS'), 4);
    desc1.putInteger(cTID('STHH'), 215);
    desc1.putInteger(cTID('STHS'), 9);
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
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), -2);
    desc1.putInteger(cTID('RHue'), -2);
    desc1.putInteger(cTID('RSat'), -5);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(48);
    list1.putInteger(29);
    list1.putInteger(55);
    list1.putInteger(56);
    list1.putInteger(63);
    list1.putInteger(84);
    list1.putInteger(85);
    list1.putInteger(127);
    list1.putInteger(133);
    list1.putInteger(182);
    list1.putInteger(188);
    list1.putInteger(255);
    list1.putInteger(237);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(31);
    list2.putInteger(17);
    list2.putInteger(115);
    list2.putInteger(132);
    list2.putInteger(179);
    list2.putInteger(195);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(30);
    list3.putInteger(16);
    list3.putInteger(115);
    list3.putInteger(133);
    list3.putInteger(181);
    list3.putInteger(196);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(29);
    list4.putInteger(15);
    list4.putInteger(115);
    list4.putInteger(134);
    list4.putInteger(179);
    list4.putInteger(195);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"21\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"65B124EB9B97724DB23CB3CB853BC8A3\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-17\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"+1.07\"\n      crs:Contrast2012=\"-29\"\n      crs:Highlights2012=\"-71\"\n      crs:Shadows2012=\"+29\"\n      crs:Whites2012=\"-100\"\n      crs:Blacks2012=\"+100\"\n      crs:Clarity2012=\"-21\"\n      crs:Vibrance=\"+5\"\n      crs:Saturation=\"-10\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"15\"\n      crs:ParametricMidtoneSplit=\"35\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"59\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-11\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-2\"\n      crs:HueAdjustmentGreen=\"+47\"\n      crs:HueAdjustmentAqua=\"+5\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+20\"\n      crs:SaturationAdjustmentOrange=\"-4\"\n      crs:SaturationAdjustmentYellow=\"-58\"\n      crs:SaturationAdjustmentGreen=\"-60\"\n      crs:SaturationAdjustmentAqua=\"-40\"\n      crs:SaturationAdjustmentBlue=\"-53\"\n      crs:SaturationAdjustmentPurple=\"-50\"\n      crs:SaturationAdjustmentMagenta=\"-35\"\n      crs:LuminanceAdjustmentRed=\"-4\"\n      crs:LuminanceAdjustmentOrange=\"-9\"\n      crs:LuminanceAdjustmentYellow=\"+7\"\n      crs:LuminanceAdjustmentGreen=\"-20\"\n      crs:LuminanceAdjustmentAqua=\"+15\"\n      crs:LuminanceAdjustmentBlue=\"-53\"\n      crs:LuminanceAdjustmentPurple=\"+30\"\n      crs:LuminanceAdjustmentMagenta=\"+10\"\n      crs:SplitToningShadowHue=\"104\"\n      crs:SplitToningShadowSaturation=\"4\"\n      crs:SplitToningHighlightHue=\"215\"\n      crs:SplitToningHighlightSaturation=\"9\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:ShadowTint=\"-2\"\n      crs:RedHue=\"-2\"\n      crs:RedSaturation=\"-5\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 48</rdf:li>\n       <rdf:li>29, 55</rdf:li>\n       <rdf:li>56, 63</rdf:li>\n       <rdf:li>84, 85</rdf:li>\n       <rdf:li>127, 133</rdf:li>\n       <rdf:li>182, 188</rdf:li>\n       <rdf:li>255, 237</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>31, 17</rdf:li>\n       <rdf:li>115, 132</rdf:li>\n       <rdf:li>179, 195</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>30, 16</rdf:li>\n       <rdf:li>115, 133</rdf:li>\n       <rdf:li>181, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>29, 15</rdf:li>\n       <rdf:li>115, 134</rdf:li>\n       <rdf:li>179, 195</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _21.main
//=========================================
//

_21.main = function () {
  _21();
};

_21.main();

// EOF

"TuyenChon21.jsx"
// EOF
