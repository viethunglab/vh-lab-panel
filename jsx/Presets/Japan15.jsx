#target photoshop
//
// _15.jsx
//

//
// Generated Wed Dec 15 2021 14:02:09 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 15 ==============
//
function _15() {
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
    desc1.putDouble(cTID('Ex12'), 0.26);
    desc1.putInteger(cTID('Cr12'), 5);
    desc1.putInteger(cTID('Hi12'), -30);
    desc1.putInteger(cTID('Sh12'), 30);
    desc1.putInteger(cTID('Wh12'), -10);
    desc1.putInteger(cTID('Bk12'), 27);
    desc1.putInteger(cTID('Cl12'), 10);
    desc1.putInteger(cTID('Vibr'), -10);
    desc1.putInteger(cTID('Strt'), -10);
    desc1.putInteger(cTID('PC_S'), -30);
    desc1.putInteger(cTID('PC_D'), 55);
    desc1.putInteger(cTID('PC_L'), -10);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -15);
    desc1.putInteger(cTID('HA_O'), -15);
    desc1.putInteger(cTID('HA_Y'), -15);
    desc1.putInteger(cTID('HA_G'), 30);
    desc1.putInteger(cTID('HA_A'), -5);
    desc1.putInteger(cTID('HA_B'), -10);
    desc1.putInteger(cTID('HA_P'), 10);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -20);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), -50);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -50);
    desc1.putInteger(cTID('SA_M'), -30);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), -10);
    desc1.putInteger(cTID('LA_Y'), -15);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -15);
    desc1.putInteger(cTID('LA_B'), -20);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 25);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 60);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 40);
    desc1.putInteger(cTID('RSat'), 20);
    desc1.putInteger(cTID('GHue'), -10);
    desc1.putInteger(cTID('GSat'), 10);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(40);
    list1.putInteger(52);
    list1.putInteger(60);
    list1.putInteger(120);
    list1.putInteger(128);
    list1.putInteger(210);
    list1.putInteger(215);
    list1.putInteger(255);
    list1.putInteger(244);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(44);
    list2.putInteger(26);
    list2.putInteger(122);
    list2.putInteger(128);
    list2.putInteger(207);
    list2.putInteger(225);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(42);
    list3.putInteger(29);
    list3.putInteger(116);
    list3.putInteger(125);
    list3.putInteger(160);
    list3.putInteger(175);
    list3.putInteger(207);
    list3.putInteger(222);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(44);
    list4.putInteger(27);
    list4.putInteger(126);
    list4.putInteger(127);
    list4.putInteger(201);
    list4.putInteger(218);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 41\"\n     crs:Amount=\"1\"\n     crs:UUID=\"4DA48AC96986AF429C9AABAD035500E4\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.26\"\n      crs:Contrast2012=\"+5\"\n      crs:Highlights2012=\"-30\"\n      crs:Shadows2012=\"+30\"\n      crs:Whites2012=\"-10\"\n      crs:Blacks2012=\"+27\"\n      crs:Clarity2012=\"+10\"\n      crs:Vibrance=\"-10\"\n      crs:Saturation=\"-10\"\n      crs:ParametricShadows=\"-30\"\n      crs:ParametricDarks=\"+55\"\n      crs:ParametricLights=\"-10\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-15\"\n      crs:HueAdjustmentOrange=\"-15\"\n      crs:HueAdjustmentYellow=\"-15\"\n      crs:HueAdjustmentGreen=\"+30\"\n      crs:HueAdjustmentAqua=\"-5\"\n      crs:HueAdjustmentBlue=\"-10\"\n      crs:HueAdjustmentPurple=\"+10\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-20\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"-50\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-50\"\n      crs:SaturationAdjustmentMagenta=\"-30\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"-10\"\n      crs:LuminanceAdjustmentYellow=\"-15\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-15\"\n      crs:LuminanceAdjustmentBlue=\"-20\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"25\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"60\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+40\"\n      crs:RedSaturation=\"+20\"\n      crs:GreenHue=\"-10\"\n      crs:GreenSaturation=\"+10\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 40</rdf:li>\n       <rdf:li>52, 60</rdf:li>\n       <rdf:li>120, 128</rdf:li>\n       <rdf:li>210, 215</rdf:li>\n       <rdf:li>255, 244</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>44, 26</rdf:li>\n       <rdf:li>122, 128</rdf:li>\n       <rdf:li>207, 225</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 29</rdf:li>\n       <rdf:li>116, 125</rdf:li>\n       <rdf:li>160, 175</rdf:li>\n       <rdf:li>207, 222</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>44, 27</rdf:li>\n       <rdf:li>126, 127</rdf:li>\n       <rdf:li>201, 218</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _15.main
//=========================================
//

_15.main = function () {
  _15();
};

_15.main();

// EOF

"_15.jsx"
// EOF
