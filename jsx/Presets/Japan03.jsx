#target photoshop
//
// _03.jsx
//

//
// Generated Wed Dec 15 2021 14:00:43 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 03 ==============
//
function _03() {
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
    desc1.putInteger(cTID('Temp'), 8);
    desc1.putInteger(cTID('Tint'), -16);
    desc1.putDouble(cTID('Ex12'), 1.6);
    desc1.putInteger(cTID('Cr12'), -69);
    desc1.putInteger(cTID('Hi12'), -71);
    desc1.putInteger(cTID('Sh12'), 55);
    desc1.putInteger(cTID('Wh12'), -20);
    desc1.putInteger(cTID('Bk12'), 100);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Strt'), -5);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('HA_R'), 22);
    desc1.putInteger(cTID('HA_O'), 8);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 100);
    desc1.putInteger(cTID('HA_A'), 5);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 30);
    desc1.putInteger(cTID('SA_R'), -52);
    desc1.putInteger(cTID('SA_O'), -20);
    desc1.putInteger(cTID('SA_Y'), -20);
    desc1.putInteger(cTID('SA_G'), -42);
    desc1.putInteger(cTID('SA_A'), -12);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -45);
    desc1.putInteger(cTID('SA_M'), -45);
    desc1.putInteger(cTID('LA_R'), 11);
    desc1.putInteger(cTID('LA_O'), 35);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), 39);
    desc1.putInteger(cTID('LA_A'), 28);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), -15);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 30);
    desc1.putInteger(cTID('RSat'), 40);
    desc1.putInteger(cTID('GHue'), 70);
    desc1.putInteger(cTID('GSat'), 5);
    desc1.putInteger(cTID('BHue'), -20);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(6);
    list1.putInteger(62);
    list1.putInteger(61);
    list1.putInteger(188);
    list1.putInteger(189);
    list1.putInteger(255);
    list1.putInteger(214);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(42);
    list2.putInteger(7);
    list2.putInteger(79);
    list2.putInteger(43);
    list2.putInteger(127);
    list2.putInteger(120);
    list2.putInteger(182);
    list2.putInteger(202);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(36);
    list3.putInteger(10);
    list3.putInteger(76);
    list3.putInteger(46);
    list3.putInteger(124);
    list3.putInteger(122);
    list3.putInteger(181);
    list3.putInteger(201);
    list3.putInteger(219);
    list3.putInteger(230);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(34);
    list4.putInteger(11);
    list4.putInteger(75);
    list4.putInteger(47);
    list4.putInteger(119);
    list4.putInteger(118);
    list4.putInteger(183);
    list4.putInteger(206);
    list4.putInteger(222);
    list4.putInteger(235);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 17\"\n     crs:Amount=\"1\"\n     crs:UUID=\"7C9AD10246B46A479F06BF994147FE19\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+8\"\n      crs:IncrementalTint=\"-16\"\n      crs:Exposure2012=\"+1.60\"\n      crs:Contrast2012=\"-69\"\n      crs:Highlights2012=\"-71\"\n      crs:Shadows2012=\"+55\"\n      crs:Whites2012=\"-20\"\n      crs:Blacks2012=\"+100\"\n      crs:Clarity2012=\"-5\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-5\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"+22\"\n      crs:HueAdjustmentOrange=\"+8\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+100\"\n      crs:HueAdjustmentAqua=\"+5\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+30\"\n      crs:SaturationAdjustmentRed=\"-52\"\n      crs:SaturationAdjustmentOrange=\"-20\"\n      crs:SaturationAdjustmentYellow=\"-20\"\n      crs:SaturationAdjustmentGreen=\"-42\"\n      crs:SaturationAdjustmentAqua=\"-12\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-45\"\n      crs:SaturationAdjustmentMagenta=\"-45\"\n      crs:LuminanceAdjustmentRed=\"+11\"\n      crs:LuminanceAdjustmentOrange=\"+35\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"+39\"\n      crs:LuminanceAdjustmentAqua=\"+28\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"-15\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+30\"\n      crs:RedSaturation=\"+40\"\n      crs:GreenHue=\"+70\"\n      crs:GreenSaturation=\"+5\"\n      crs:BlueHue=\"-20\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 6</rdf:li>\n       <rdf:li>62, 61</rdf:li>\n       <rdf:li>188, 189</rdf:li>\n       <rdf:li>255, 214</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 7</rdf:li>\n       <rdf:li>79, 43</rdf:li>\n       <rdf:li>127, 120</rdf:li>\n       <rdf:li>182, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 10</rdf:li>\n       <rdf:li>76, 46</rdf:li>\n       <rdf:li>124, 122</rdf:li>\n       <rdf:li>181, 201</rdf:li>\n       <rdf:li>219, 230</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>34, 11</rdf:li>\n       <rdf:li>75, 47</rdf:li>\n       <rdf:li>119, 118</rdf:li>\n       <rdf:li>183, 206</rdf:li>\n       <rdf:li>222, 235</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _03.main
//=========================================
//

_03.main = function () {
  _03();
};

_03.main();

// EOF

"_03.jsx"
// EOF
