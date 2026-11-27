#target photoshop
//
// _20.jsx
//

//
// Generated Wed Dec 15 2021 14:02:43 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 20 ==============
//
function _20() {
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
    desc1.putInteger(cTID('Temp'), -5);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), 0.29);
    desc1.putInteger(cTID('Hi12'), -45);
    desc1.putInteger(cTID('Sh12'), 45);
    desc1.putInteger(cTID('Wh12'), -41);
    desc1.putInteger(cTID('Bk12'), 42);
    desc1.putInteger(cTID('Vibr'), -5);
    desc1.putInteger(cTID('PC_S'), -35);
    desc1.putInteger(cTID('PC_D'), 20);
    desc1.putInteger(cTID('PC_L'), 20);
    desc1.putInteger(cTID('PC_H'), 15);
    desc1.putInteger(cTID('PC_1'), 15);
    desc1.putInteger(cTID('PC_2'), 31);
    desc1.putInteger(cTID('PC_3'), 80);
    desc1.putInteger(cTID('Shrp'), 30);
    desc1.putDouble(cTID('ShpR'), 1.4);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -5);
    desc1.putInteger(cTID('HA_G'), 50);
    desc1.putInteger(cTID('HA_A'), -13);
    desc1.putInteger(cTID('HA_B'), -13);
    desc1.putInteger(cTID('HA_P'), 10);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -10);
    desc1.putInteger(cTID('SA_Y'), -5);
    desc1.putInteger(cTID('SA_G'), -35);
    desc1.putInteger(cTID('SA_A'), -26);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), -35);
    desc1.putInteger(cTID('SA_M'), -15);
    desc1.putInteger(cTID('LA_R'), 9);
    desc1.putInteger(cTID('LA_O'), -10);
    desc1.putInteger(cTID('LA_Y'), -5);
    desc1.putInteger(cTID('LA_G'), 15);
    desc1.putInteger(cTID('LA_A'), 13);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), -10);
    desc1.putInteger(cTID('LA_M'), -15);
    desc1.putInteger(cTID('GRNA'), 13);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 60);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 20);
    desc1.putInteger(cTID('GSat'), -25);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(36);
    list1.putInteger(44);
    list1.putInteger(54);
    list1.putInteger(125);
    list1.putInteger(125);
    list1.putInteger(185);
    list1.putInteger(188);
    list1.putInteger(226);
    list1.putInteger(223);
    list1.putInteger(255);
    list1.putInteger(242);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(37);
    list2.putInteger(15);
    list2.putInteger(110);
    list2.putInteger(117);
    list2.putInteger(157);
    list2.putInteger(177);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(39);
    list3.putInteger(13);
    list3.putInteger(110);
    list3.putInteger(117);
    list3.putInteger(156);
    list3.putInteger(177);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(43);
    list4.putInteger(15);
    list4.putInteger(68);
    list4.putInteger(37);
    list4.putInteger(110);
    list4.putInteger(117);
    list4.putInteger(155);
    list4.putInteger(171);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 48\"\n     crs:Amount=\"1\"\n     crs:UUID=\"F0C8F1FFE84C2641B633992D567CD889\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-5\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"+0.29\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-45\"\n      crs:Shadows2012=\"+45\"\n      crs:Whites2012=\"-41\"\n      crs:Blacks2012=\"+42\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"-5\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"-35\"\n      crs:ParametricDarks=\"+20\"\n      crs:ParametricLights=\"+20\"\n      crs:ParametricHighlights=\"+15\"\n      crs:ParametricShadowSplit=\"15\"\n      crs:ParametricMidtoneSplit=\"31\"\n      crs:ParametricHighlightSplit=\"80\"\n      crs:Sharpness=\"30\"\n      crs:SharpenRadius=\"+1.4\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+15\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-5\"\n      crs:HueAdjustmentGreen=\"+50\"\n      crs:HueAdjustmentAqua=\"-13\"\n      crs:HueAdjustmentBlue=\"-13\"\n      crs:HueAdjustmentPurple=\"+10\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-10\"\n      crs:SaturationAdjustmentYellow=\"-5\"\n      crs:SaturationAdjustmentGreen=\"-35\"\n      crs:SaturationAdjustmentAqua=\"-26\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"-35\"\n      crs:SaturationAdjustmentMagenta=\"-15\"\n      crs:LuminanceAdjustmentRed=\"+9\"\n      crs:LuminanceAdjustmentOrange=\"-10\"\n      crs:LuminanceAdjustmentYellow=\"-5\"\n      crs:LuminanceAdjustmentGreen=\"+15\"\n      crs:LuminanceAdjustmentAqua=\"+13\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"-10\"\n      crs:LuminanceAdjustmentMagenta=\"-15\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"13\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"60\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+20\"\n      crs:GreenSaturation=\"-25\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 36</rdf:li>\n       <rdf:li>44, 54</rdf:li>\n       <rdf:li>125, 125</rdf:li>\n       <rdf:li>185, 188</rdf:li>\n       <rdf:li>226, 223</rdf:li>\n       <rdf:li>255, 242</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>37, 15</rdf:li>\n       <rdf:li>110, 117</rdf:li>\n       <rdf:li>157, 177</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 13</rdf:li>\n       <rdf:li>110, 117</rdf:li>\n       <rdf:li>156, 177</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 15</rdf:li>\n       <rdf:li>68, 37</rdf:li>\n       <rdf:li>110, 117</rdf:li>\n       <rdf:li>155, 171</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _20.main
//=========================================
//

_20.main = function () {
  _20();
};

_20.main();

// EOF

"_20.jsx"
// EOF
