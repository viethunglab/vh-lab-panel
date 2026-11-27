#target photoshop
//
// _15.jsx
//

//
// Generated Tue Dec 14 2021 23:19:03 GMT-0800
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
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -7);
    desc1.putInteger(cTID('Tint'), 14);
    desc1.putDouble(cTID('Ex12'), 0.48);
    desc1.putInteger(cTID('Cr12'), 5);
    desc1.putInteger(cTID('Hi12'), -41);
    desc1.putInteger(cTID('Sh12'), -5);
    desc1.putInteger(cTID('Wh12'), -76);
    desc1.putInteger(cTID('Bk12'), 19);
    desc1.putInteger(cTID('Vibr'), 57);
    desc1.putInteger(cTID('Strt'), 32);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 15);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -36);
    desc1.putInteger(cTID('SA_Y'), -9);
    desc1.putInteger(cTID('SA_G'), -35);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -20);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 19);
    desc1.putInteger(cTID('LA_Y'), 22);
    desc1.putInteger(cTID('LA_G'), -15);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -20);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(45);
    list1.putInteger(53);
    list1.putInteger(127);
    list1.putInteger(127);
    list1.putInteger(194);
    list1.putInteger(188);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(47);
    list2.putInteger(39);
    list2.putInteger(115);
    list2.putInteger(126);
    list2.putInteger(189);
    list2.putInteger(198);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(46);
    list3.putInteger(39);
    list3.putInteger(117);
    list3.putInteger(129);
    list3.putInteger(191);
    list3.putInteger(198);
    list3.putInteger(255);
    list3.putInteger(252);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(48);
    list4.putInteger(39);
    list4.putInteger(117);
    list4.putInteger(129);
    list4.putInteger(190);
    list4.putInteger(198);
    list4.putInteger(255);
    list4.putInteger(250);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_64\"\n     crs:Amount=\"1\"\n     crs:UUID=\"FB2D85902123E99DA9DB2DF0322ECC56\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-7\"\n      crs:IncrementalTint=\"+14\"\n      crs:Exposure2012=\"+0.48\"\n      crs:Contrast2012=\"+5\"\n      crs:Highlights2012=\"-41\"\n      crs:Shadows2012=\"-5\"\n      crs:Whites2012=\"-76\"\n      crs:Blacks2012=\"+19\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"+57\"\n      crs:Saturation=\"+32\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+15\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-36\"\n      crs:SaturationAdjustmentYellow=\"-9\"\n      crs:SaturationAdjustmentGreen=\"-35\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-20\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+19\"\n      crs:LuminanceAdjustmentYellow=\"+22\"\n      crs:LuminanceAdjustmentGreen=\"-15\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-20\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"55\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"55\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+90\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>45, 53</rdf:li>\n       <rdf:li>127, 127</rdf:li>\n       <rdf:li>194, 188</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>47, 39</rdf:li>\n       <rdf:li>115, 126</rdf:li>\n       <rdf:li>189, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>46, 39</rdf:li>\n       <rdf:li>117, 129</rdf:li>\n       <rdf:li>191, 198</rdf:li>\n       <rdf:li>255, 252</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>48, 39</rdf:li>\n       <rdf:li>117, 129</rdf:li>\n       <rdf:li>190, 198</rdf:li>\n       <rdf:li>255, 250</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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
