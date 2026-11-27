#target photoshop
//
// _04.jsx
//

//
// Generated Tue Dec 14 2021 13:39:57 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 04 ==============
//
function _04() {
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
    desc1.putInteger(cTID('Cr12'), -30);
    desc1.putInteger(cTID('Hi12'), -26);
    desc1.putInteger(cTID('Wh12'), -17);
    desc1.putInteger(cTID('Bk12'), -27);
    desc1.putInteger(cTID('Cl12'), -15);
    desc1.putInteger(cTID('Vibr'), -10);
    desc1.putInteger(cTID('Strt'), -7);
    desc1.putInteger(cTID('HA_R'), 32);
    desc1.putInteger(cTID('HA_O'), -21);
    desc1.putInteger(cTID('HA_Y'), -14);
    desc1.putInteger(cTID('HA_G'), 91);
    desc1.putInteger(cTID('HA_A'), -80);
    desc1.putInteger(cTID('HA_B'), -60);
    desc1.putInteger(cTID('HA_P'), 7);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 14);
    desc1.putInteger(cTID('SA_O'), 22);
    desc1.putInteger(cTID('SA_Y'), -12);
    desc1.putInteger(cTID('SA_G'), -1);
    desc1.putInteger(cTID('SA_A'), -41);
    desc1.putInteger(cTID('SA_B'), -59);
    desc1.putInteger(cTID('SA_P'), -74);
    desc1.putInteger(cTID('SA_M'), -34);
    desc1.putInteger(cTID('LA_R'), -7);
    desc1.putInteger(cTID('LA_O'), 50);
    desc1.putInteger(cTID('LA_Y'), 25);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -27);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), -8);
    desc1.putInteger(cTID('GRNA'), 21);
    desc1.putInteger(cTID('GRNS'), 89);
    desc1.putInteger(cTID('GRNF'), 98);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(41);
    list1.putInteger(124);
    list1.putInteger(121);
    list1.putInteger(185);
    list1.putInteger(179);
    list1.putInteger(255);
    list1.putInteger(223);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(36);
    list2.putInteger(62);
    list2.putInteger(66);
    list2.putInteger(94);
    list2.putInteger(97);
    list2.putInteger(138);
    list2.putInteger(146);
    list2.putInteger(197);
    list2.putInteger(215);
    list2.putInteger(255);
    list2.putInteger(240);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(38);
    list3.putInteger(74);
    list3.putInteger(65);
    list3.putInteger(115);
    list3.putInteger(116);
    list3.putInteger(171);
    list3.putInteger(190);
    list3.putInteger(248);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(10);
    list4.putInteger(0);
    list4.putInteger(68);
    list4.putInteger(46);
    list4.putInteger(136);
    list4.putInteger(139);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (7)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"2234A6650E7CC2C56723B2489EB29F7E\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"-30\"\n      crs:Highlights2012=\"-26\"\n      crs:Shadows2012=\"0\"\n      crs:Whites2012=\"-17\"\n      crs:Blacks2012=\"-27\"\n      crs:Clarity2012=\"-15\"\n      crs:Vibrance=\"-10\"\n      crs:Saturation=\"-7\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"+32\"\n      crs:HueAdjustmentOrange=\"-21\"\n      crs:HueAdjustmentYellow=\"-14\"\n      crs:HueAdjustmentGreen=\"+91\"\n      crs:HueAdjustmentAqua=\"-80\"\n      crs:HueAdjustmentBlue=\"-60\"\n      crs:HueAdjustmentPurple=\"+7\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+14\"\n      crs:SaturationAdjustmentOrange=\"+22\"\n      crs:SaturationAdjustmentYellow=\"-12\"\n      crs:SaturationAdjustmentGreen=\"-1\"\n      crs:SaturationAdjustmentAqua=\"-41\"\n      crs:SaturationAdjustmentBlue=\"-59\"\n      crs:SaturationAdjustmentPurple=\"-74\"\n      crs:SaturationAdjustmentMagenta=\"-34\"\n      crs:LuminanceAdjustmentRed=\"-7\"\n      crs:LuminanceAdjustmentOrange=\"+50\"\n      crs:LuminanceAdjustmentYellow=\"+25\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-27\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"-8\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"21\"\n      crs:GrainSize=\"89\"\n      crs:GrainFrequency=\"98\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 41</rdf:li>\n       <rdf:li>124, 121</rdf:li>\n       <rdf:li>185, 179</rdf:li>\n       <rdf:li>255, 223</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 36</rdf:li>\n       <rdf:li>62, 66</rdf:li>\n       <rdf:li>94, 97</rdf:li>\n       <rdf:li>138, 146</rdf:li>\n       <rdf:li>197, 215</rdf:li>\n       <rdf:li>255, 240</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 38</rdf:li>\n       <rdf:li>74, 65</rdf:li>\n       <rdf:li>115, 116</rdf:li>\n       <rdf:li>171, 190</rdf:li>\n       <rdf:li>248, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>10, 0</rdf:li>\n       <rdf:li>68, 46</rdf:li>\n       <rdf:li>136, 139</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _04.main
//=========================================
//

_04.main = function () {
  _04();
};

_04.main();

// EOF

"_04.jsx"
// EOF
