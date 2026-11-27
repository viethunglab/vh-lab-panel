#target photoshop
//
// _003.jsx
//

//
// Generated Sat Dec 04 2021 11:48:14 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 003 ==============
//
function _003() {
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
    desc1.putInteger(cTID('Temp'), 9);
    desc1.putInteger(cTID('Tint'), -15);
    desc1.putDouble(cTID('Ex12'), 0.38);
    desc1.putInteger(cTID('Cr12'), -33);
    desc1.putInteger(cTID('Sh12'), 45);
    desc1.putInteger(cTID('Bk12'), 40);
    desc1.putInteger(cTID('Cl12'), -37);
    desc1.putInteger(cTID('Vibr'), -5);
    desc1.putInteger(cTID('Strt'), 10);
    desc1.putInteger(cTID('Shrp'), 93);
    desc1.putDouble(cTID('ShpR'), 1.2);
    desc1.putInteger(cTID('ShpD'), 44);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 58);
    desc1.putInteger(cTID('LNRD'), 62);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 50);
    desc1.putInteger(cTID('CNRD'), 73);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -11);
    desc1.putInteger(cTID('HA_O'), -1);
    desc1.putInteger(cTID('HA_Y'), -13);
    desc1.putInteger(cTID('HA_G'), 47);
    desc1.putInteger(cTID('HA_A'), 47);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 49);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -7);
    desc1.putInteger(cTID('SA_Y'), -76);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 9);
    desc1.putInteger(cTID('LA_O'), 9);
    desc1.putInteger(cTID('LA_Y'), 7);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 69);
    desc1.putInteger(cTID('STSS'), 4);
    desc1.putInteger(cTID('STHH'), 41);
    desc1.putInteger(cTID('STHS'), 20);
    desc1.putInteger(cTID('STB '), -43);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('PCVA'), -21);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), 33);
    desc1.putInteger(cTID('RHue'), 12);
    desc1.putInteger(cTID('RSat'), -21);
    desc1.putInteger(cTID('GHue'), 57);
    desc1.putInteger(cTID('GSat'), 29);
    desc1.putInteger(cTID('BHue'), -12);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(8);
    list1.putInteger(38);
    list1.putInteger(29);
    list1.putInteger(66);
    list1.putInteger(58);
    list1.putInteger(95);
    list1.putInteger(90);
    list1.putInteger(127);
    list1.putInteger(127);
    list1.putInteger(182);
    list1.putInteger(185);
    list1.putInteger(255);
    list1.putInteger(247);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(64);
    list2.putInteger(69);
    list2.putInteger(124);
    list2.putInteger(124);
    list2.putInteger(188);
    list2.putInteger(192);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Màu Cam Hồng\"\n     crs:Amount=\"1\"\n     crs:UUID=\"B74AD560DA397D4C95CB5BE41D155A6A\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+9\"\n      crs:IncrementalTint=\"-15\"\n      crs:Exposure2012=\"+0.38\"\n      crs:Contrast2012=\"-33\"\n      crs:Highlights2012=\"0\"\n      crs:Shadows2012=\"+45\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"+40\"\n      crs:Clarity2012=\"-37\"\n      crs:Vibrance=\"-5\"\n      crs:Saturation=\"+10\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"93\"\n      crs:SharpenRadius=\"+1.2\"\n      crs:SharpenDetail=\"44\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"58\"\n      crs:LuminanceNoiseReductionDetail=\"62\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"50\"\n      crs:ColorNoiseReductionDetail=\"73\"\n      crs:HueAdjustmentRed=\"-11\"\n      crs:HueAdjustmentOrange=\"-1\"\n      crs:HueAdjustmentYellow=\"-13\"\n      crs:HueAdjustmentGreen=\"+47\"\n      crs:HueAdjustmentAqua=\"+47\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"+49\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-7\"\n      crs:SaturationAdjustmentYellow=\"-76\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+9\"\n      crs:LuminanceAdjustmentOrange=\"+9\"\n      crs:LuminanceAdjustmentYellow=\"+7\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"69\"\n      crs:SplitToningShadowSaturation=\"4\"\n      crs:SplitToningHighlightHue=\"41\"\n      crs:SplitToningHighlightSaturation=\"20\"\n      crs:SplitToningBalance=\"-43\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-21\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"+33\"\n      crs:RedHue=\"+12\"\n      crs:RedSaturation=\"-21\"\n      crs:GreenHue=\"+57\"\n      crs:GreenSaturation=\"+29\"\n      crs:BlueHue=\"-12\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 8</rdf:li>\n       <rdf:li>38, 29</rdf:li>\n       <rdf:li>66, 58</rdf:li>\n       <rdf:li>95, 90</rdf:li>\n       <rdf:li>127, 127</rdf:li>\n       <rdf:li>182, 185</rdf:li>\n       <rdf:li>255, 247</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>64, 69</rdf:li>\n       <rdf:li>124, 124</rdf:li>\n       <rdf:li>188, 192</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _003.main
//=========================================
//

_003.main = function () {
  _003();
};

_003.main();

// EOF

"_003.jsx"
// EOF
