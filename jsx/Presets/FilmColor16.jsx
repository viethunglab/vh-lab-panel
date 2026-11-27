#target photoshop
//
// _13.jsx
//

//
// Generated Tue Dec 14 2021 13:42:22 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 13 ==============
//
function _13() {
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
    desc1.putInteger(cTID('Cr12'), 22);
    desc1.putInteger(cTID('Hi12'), -41);
    desc1.putInteger(cTID('Sh12'), 24);
    desc1.putInteger(cTID('Bk12'), -21);
    desc1.putInteger(cTID('Cl12'), -27);
    desc1.putInteger(cTID('Strt'), -20);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), 7);
    desc1.putInteger(cTID('HA_Y'), 1);
    desc1.putInteger(cTID('HA_G'), 31);
    desc1.putInteger(cTID('HA_A'), -72);
    desc1.putInteger(cTID('HA_B'), -79);
    desc1.putInteger(cTID('HA_P'), -15);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 15);
    desc1.putInteger(cTID('SA_O'), 55);
    desc1.putInteger(cTID('SA_Y'), 14);
    desc1.putInteger(cTID('SA_G'), -50);
    desc1.putInteger(cTID('SA_A'), 66);
    desc1.putInteger(cTID('SA_B'), 66);
    desc1.putInteger(cTID('SA_P'), -25);
    desc1.putInteger(cTID('SA_M'), -21);
    desc1.putInteger(cTID('LA_R'), 23);
    desc1.putInteger(cTID('LA_O'), 22);
    desc1.putInteger(cTID('LA_Y'), 31);
    desc1.putInteger(cTID('LA_G'), -16);
    desc1.putInteger(cTID('LA_A'), -22);
    desc1.putInteger(cTID('LA_B'), -17);
    desc1.putInteger(cTID('LA_P'), -21);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 198);
    desc1.putInteger(cTID('STHS'), 5);
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
    desc1.putInteger(cTID('GRNA'), 35);
    desc1.putInteger(cTID('GRNS'), 98);
    desc1.putInteger(cTID('GRNF'), 78);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(61);
    list1.putInteger(53);
    list1.putInteger(71);
    list1.putInteger(104);
    list1.putInteger(98);
    list1.putInteger(144);
    list1.putInteger(133);
    list1.putInteger(187);
    list1.putInteger(183);
    list1.putInteger(221);
    list1.putInteger(208);
    list1.putInteger(255);
    list1.putInteger(222);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(1);
    list2.putInteger(16);
    list2.putInteger(46);
    list2.putInteger(54);
    list2.putInteger(90);
    list2.putInteger(92);
    list2.putInteger(149);
    list2.putInteger(151);
    list2.putInteger(244);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(5);
    list3.putInteger(76);
    list3.putInteger(78);
    list3.putInteger(131);
    list3.putInteger(132);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(22);
    list4.putInteger(90);
    list4.putInteger(89);
    list4.putInteger(141);
    list4.putInteger(149);
    list4.putInteger(188);
    list4.putInteger(197);
    list4.putInteger(255);
    list4.putInteger(244);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (32)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"423F790BFB3A08238A1A70BA6B66587E\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"+22\"\n      crs:Highlights2012=\"-41\"\n      crs:Shadows2012=\"+24\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"-21\"\n      crs:Clarity2012=\"-27\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-20\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"+15\"\n      crs:HueAdjustmentOrange=\"+7\"\n      crs:HueAdjustmentYellow=\"+1\"\n      crs:HueAdjustmentGreen=\"+31\"\n      crs:HueAdjustmentAqua=\"-72\"\n      crs:HueAdjustmentBlue=\"-79\"\n      crs:HueAdjustmentPurple=\"-15\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+15\"\n      crs:SaturationAdjustmentOrange=\"+55\"\n      crs:SaturationAdjustmentYellow=\"+14\"\n      crs:SaturationAdjustmentGreen=\"-50\"\n      crs:SaturationAdjustmentAqua=\"+66\"\n      crs:SaturationAdjustmentBlue=\"+66\"\n      crs:SaturationAdjustmentPurple=\"-25\"\n      crs:SaturationAdjustmentMagenta=\"-21\"\n      crs:LuminanceAdjustmentRed=\"+23\"\n      crs:LuminanceAdjustmentOrange=\"+22\"\n      crs:LuminanceAdjustmentYellow=\"+31\"\n      crs:LuminanceAdjustmentGreen=\"-16\"\n      crs:LuminanceAdjustmentAqua=\"-22\"\n      crs:LuminanceAdjustmentBlue=\"-17\"\n      crs:LuminanceAdjustmentPurple=\"-21\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"198\"\n      crs:SplitToningHighlightSaturation=\"5\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"35\"\n      crs:GrainSize=\"98\"\n      crs:GrainFrequency=\"78\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 61</rdf:li>\n       <rdf:li>53, 71</rdf:li>\n       <rdf:li>104, 98</rdf:li>\n       <rdf:li>144, 133</rdf:li>\n       <rdf:li>187, 183</rdf:li>\n       <rdf:li>221, 208</rdf:li>\n       <rdf:li>255, 222</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>1, 16</rdf:li>\n       <rdf:li>46, 54</rdf:li>\n       <rdf:li>90, 92</rdf:li>\n       <rdf:li>149, 151</rdf:li>\n       <rdf:li>244, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 5</rdf:li>\n       <rdf:li>76, 78</rdf:li>\n       <rdf:li>131, 132</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 22</rdf:li>\n       <rdf:li>90, 89</rdf:li>\n       <rdf:li>141, 149</rdf:li>\n       <rdf:li>188, 197</rdf:li>\n       <rdf:li>255, 244</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _13.main
//=========================================
//

_13.main = function () {
  _13();
};

_13.main();

// EOF

"_13.jsx"
// EOF
