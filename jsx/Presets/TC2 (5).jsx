#target photoshop
//
// _5.jsx
//

//
// Generated Fri Feb 04 2022 12:42:58 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 5 ==============
//
function _5() {
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
    desc1.putInteger(cTID('Temp'), -19);
    desc1.putInteger(cTID('Tint'), -4);
    desc1.putDouble(cTID('Ex12'), 0.05);
    desc1.putInteger(cTID('Cr12'), -36);
    desc1.putInteger(cTID('Hi12'), -74);
    desc1.putInteger(cTID('Sh12'), 58);
    desc1.putInteger(cTID('Wh12'), 53);
    desc1.putInteger(cTID('Bk12'), 33);
    desc1.putInteger(cTID('Cl12'), -9);
    desc1.putInteger(cTID('Vibr'), 7);
    desc1.putInteger(cTID('Strt'), -28);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), -2);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 27);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 11);
    desc1.putInteger(cTID('HA_O'), 15);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 11);
    desc1.putInteger(cTID('HA_A'), 2);
    desc1.putInteger(cTID('HA_B'), 3);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -5);
    desc1.putInteger(cTID('SA_O'), 37);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), -30);
    desc1.putInteger(cTID('SA_A'), -44);
    desc1.putInteger(cTID('SA_B'), -23);
    desc1.putInteger(cTID('SA_P'), -35);
    desc1.putInteger(cTID('SA_M'), -35);
    desc1.putInteger(cTID('LA_R'), -30);
    desc1.putInteger(cTID('LA_O'), 20);
    desc1.putInteger(cTID('LA_Y'), -20);
    desc1.putInteger(cTID('LA_G'), -24);
    desc1.putInteger(cTID('LA_A'), 3);
    desc1.putInteger(cTID('LA_B'), 47);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
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
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putInteger(cTID('DfPA'), 6);
    desc1.putInteger(cTID('DPHL'), 21);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), -2);
    desc1.putInteger(cTID('RHue'), 1);
    desc1.putInteger(cTID('RSat'), 2);
    desc1.putInteger(cTID('GHue'), 100);
    desc1.putInteger(cTID('GSat'), -11);
    desc1.putInteger(cTID('BHue'), -11);
    desc1.putInteger(cTID('BSat'), 92);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(107);
    list1.putInteger(120);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(40);
    list2.putInteger(12);
    list2.putInteger(84);
    list2.putInteger(58);
    list2.putInteger(123);
    list2.putInteger(125);
    list2.putInteger(186);
    list2.putInteger(196);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(40);
    list3.putInteger(14);
    list3.putInteger(83);
    list3.putInteger(59);
    list3.putInteger(123);
    list3.putInteger(126);
    list3.putInteger(172);
    list3.putInteger(185);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(39);
    list4.putInteger(13);
    list4.putInteger(87);
    list4.putInteger(65);
    list4.putInteger(123);
    list4.putInteger(124);
    list4.putInteger(183);
    list4.putInteger(199);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM hàn film mạnh \"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"105E081D2BA4A042B4454F964321EE13\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-2\"\n      crs:IncrementalTint=\"+2\"\n      crs:Exposure2012=\"+0.05\"\n      crs:Contrast2012=\"-36\"\n      crs:Highlights2012=\"-74\"\n      crs:Shadows2012=\"+58\"\n      crs:Whites2012=\"+53\"\n      crs:Blacks2012=\"+33\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-9\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+7\"\n      crs:Saturation=\"-28\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"-2\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"27\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+11\"\n      crs:HueAdjustmentOrange=\"+15\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+11\"\n      crs:HueAdjustmentAqua=\"+2\"\n      crs:HueAdjustmentBlue=\"+3\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-5\"\n      crs:SaturationAdjustmentOrange=\"+37\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"-30\"\n      crs:SaturationAdjustmentAqua=\"-44\"\n      crs:SaturationAdjustmentBlue=\"-23\"\n      crs:SaturationAdjustmentPurple=\"-35\"\n      crs:SaturationAdjustmentMagenta=\"-35\"\n      crs:LuminanceAdjustmentRed=\"-30\"\n      crs:LuminanceAdjustmentOrange=\"+20\"\n      crs:LuminanceAdjustmentYellow=\"-20\"\n      crs:LuminanceAdjustmentGreen=\"-24\"\n      crs:LuminanceAdjustmentAqua=\"+3\"\n      crs:LuminanceAdjustmentBlue=\"+47\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"215\"\n      crs:SplitToningHighlightSaturation=\"9\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"6\"\n      crs:DefringePurpleHueLo=\"21\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-2\"\n      crs:RedHue=\"+1\"\n      crs:RedSaturation=\"+2\"\n      crs:GreenHue=\"+100\"\n      crs:GreenSaturation=\"-11\"\n      crs:BlueHue=\"-11\"\n      crs:BlueSaturation=\"+92\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>107, 120</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 12</rdf:li>\n       <rdf:li>84, 58</rdf:li>\n       <rdf:li>123, 125</rdf:li>\n       <rdf:li>186, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 14</rdf:li>\n       <rdf:li>83, 59</rdf:li>\n       <rdf:li>123, 126</rdf:li>\n       <rdf:li>172, 185</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 13</rdf:li>\n       <rdf:li>87, 65</rdf:li>\n       <rdf:li>123, 124</rdf:li>\n       <rdf:li>183, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _5.main
//=========================================
//

_5.main = function () {
  _5();
};

_5.main();

// EOF

"_5.jsx"
// EOF
