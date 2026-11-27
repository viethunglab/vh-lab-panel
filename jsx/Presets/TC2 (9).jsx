#target photoshop
//
// _9.jsx
//

//
// Generated Fri Feb 04 2022 12:44:41 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 9 ==============
//
function _9() {
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
    desc1.putInteger(cTID('Temp'), -6);
    desc1.putInteger(cTID('Tint'), 26);
    desc1.putDouble(cTID('Ex12'), 0.65);
    desc1.putInteger(cTID('Cr12'), 12);
    desc1.putInteger(cTID('Hi12'), -78);
    desc1.putInteger(cTID('Sh12'), 68);
    desc1.putInteger(cTID('Wh12'), -73);
    desc1.putInteger(cTID('Bk12'), 22);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Strt'), -30);
    desc1.putInteger(cTID('Shrp'), 28);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 8);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 34);
    desc1.putInteger(cTID('HA_O'), 5);
    desc1.putInteger(cTID('HA_Y'), -21);
    desc1.putInteger(cTID('HA_G'), -12);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -5);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -10);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -30);
    desc1.putInteger(cTID('SA_G'), -52);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -21);
    desc1.putInteger(cTID('SA_P'), -35);
    desc1.putInteger(cTID('SA_M'), -35);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 5);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -12);
    desc1.putInteger(cTID('LA_B'), -18);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 234);
    desc1.putInteger(cTID('STHS'), 2);
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
    desc1.putInteger(cTID('GRNA'), 15);
    desc1.putInteger(cTID('GRNS'), 45);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('BlkB'), -2);
    desc1.putInteger(cTID('RHue'), 26);
    desc1.putInteger(cTID('RSat'), 50);
    desc1.putInteger(cTID('GHue'), 24);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -11);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(28);
    list1.putInteger(54);
    list1.putInteger(62);
    list1.putInteger(176);
    list1.putInteger(155);
    list1.putInteger(255);
    list1.putInteger(224);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM màu vườn cây xanh\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"0D53FE5596514E4DA2F76290E5B8B51B\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"+4\"\n      crs:Exposure2012=\"+0.65\"\n      crs:Contrast2012=\"+12\"\n      crs:Highlights2012=\"-78\"\n      crs:Shadows2012=\"+68\"\n      crs:Whites2012=\"-73\"\n      crs:Blacks2012=\"+22\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-30\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"28\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"8\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+34\"\n      crs:HueAdjustmentOrange=\"+5\"\n      crs:HueAdjustmentYellow=\"-21\"\n      crs:HueAdjustmentGreen=\"-12\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-5\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-10\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-30\"\n      crs:SaturationAdjustmentGreen=\"-52\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-21\"\n      crs:SaturationAdjustmentPurple=\"-35\"\n      crs:SaturationAdjustmentMagenta=\"-35\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+5\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-12\"\n      crs:LuminanceAdjustmentBlue=\"-18\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"234\"\n      crs:SplitToningHighlightSaturation=\"2\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"15\"\n      crs:GrainSize=\"45\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-2\"\n      crs:RedHue=\"+26\"\n      crs:RedSaturation=\"+50\"\n      crs:GreenHue=\"+24\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-11\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 28</rdf:li>\n       <rdf:li>54, 62</rdf:li>\n       <rdf:li>176, 155</rdf:li>\n       <rdf:li>255, 224</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 12</rdf:li>\n       <rdf:li>84, 58</rdf:li>\n       <rdf:li>123, 125</rdf:li>\n       <rdf:li>186, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 14</rdf:li>\n       <rdf:li>83, 59</rdf:li>\n       <rdf:li>123, 126</rdf:li>\n       <rdf:li>172, 185</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 13</rdf:li>\n       <rdf:li>87, 65</rdf:li>\n       <rdf:li>123, 124</rdf:li>\n       <rdf:li>183, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _9.main
//=========================================
//

_9.main = function () {
  _9();
};

_9.main();

// EOF

"_9.jsx"
// EOF
