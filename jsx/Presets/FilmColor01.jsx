#target photoshop
//
// _01.jsx
//

//
// Generated Tue Dec 14 2021 13:38:44 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 01 ==============
//
function _01() {
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
    desc1.putInteger(cTID('Cr12'), -23);
    desc1.putInteger(cTID('Hi12'), -30);
    desc1.putInteger(cTID('Sh12'), 26);
    desc1.putInteger(cTID('Wh12'), -2);
    desc1.putInteger(cTID('Bk12'), -24);
    desc1.putInteger(cTID('Vibr'), -10);
    desc1.putInteger(cTID('Strt'), -20);
    desc1.putInteger(cTID('HA_R'), 32);
    desc1.putInteger(cTID('HA_O'), -21);
    desc1.putInteger(cTID('HA_Y'), -14);
    desc1.putInteger(cTID('HA_G'), 75);
    desc1.putInteger(cTID('HA_A'), -55);
    desc1.putInteger(cTID('HA_B'), -47);
    desc1.putInteger(cTID('HA_P'), 7);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), 51);
    desc1.putInteger(cTID('SA_Y'), -16);
    desc1.putInteger(cTID('SA_G'), -25);
    desc1.putInteger(cTID('SA_A'), -32);
    desc1.putInteger(cTID('SA_B'), -24);
    desc1.putInteger(cTID('SA_P'), -49);
    desc1.putInteger(cTID('SA_M'), -15);
    desc1.putInteger(cTID('LA_R'), 7);
    desc1.putInteger(cTID('LA_O'), 50);
    desc1.putInteger(cTID('LA_Y'), 25);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -27);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), -8);
    desc1.putInteger(cTID('GRNA'), 15);
    desc1.putInteger(cTID('GRNS'), 89);
    desc1.putInteger(cTID('GRNF'), 89);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(31);
    list1.putInteger(64);
    list1.putInteger(67);
    list1.putInteger(124);
    list1.putInteger(121);
    list1.putInteger(172);
    list1.putInteger(172);
    list1.putInteger(255);
    list1.putInteger(227);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(25);
    list2.putInteger(68);
    list2.putInteger(55);
    list2.putInteger(138);
    list2.putInteger(143);
    list2.putInteger(197);
    list2.putInteger(209);
    list2.putInteger(255);
    list2.putInteger(240);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(19);
    list3.putInteger(72);
    list3.putInteger(62);
    list3.putInteger(115);
    list3.putInteger(117);
    list3.putInteger(169);
    list3.putInteger(185);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(2);
    list4.putInteger(0);
    list4.putInteger(43);
    list4.putInteger(32);
    list4.putInteger(76);
    list4.putInteger(74);
    list4.putInteger(141);
    list4.putInteger(141);
    list4.putInteger(201);
    list4.putInteger(193);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (1)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"9C7FD4BABEFC37F81CF13EF3300CC704\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"-23\"\n      crs:Highlights2012=\"-30\"\n      crs:Shadows2012=\"+26\"\n      crs:Whites2012=\"-2\"\n      crs:Blacks2012=\"-24\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"-10\"\n      crs:Saturation=\"-20\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"+32\"\n      crs:HueAdjustmentOrange=\"-21\"\n      crs:HueAdjustmentYellow=\"-14\"\n      crs:HueAdjustmentGreen=\"+75\"\n      crs:HueAdjustmentAqua=\"-55\"\n      crs:HueAdjustmentBlue=\"-47\"\n      crs:HueAdjustmentPurple=\"+7\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"+51\"\n      crs:SaturationAdjustmentYellow=\"-16\"\n      crs:SaturationAdjustmentGreen=\"-25\"\n      crs:SaturationAdjustmentAqua=\"-32\"\n      crs:SaturationAdjustmentBlue=\"-24\"\n      crs:SaturationAdjustmentPurple=\"-49\"\n      crs:SaturationAdjustmentMagenta=\"-15\"\n      crs:LuminanceAdjustmentRed=\"+7\"\n      crs:LuminanceAdjustmentOrange=\"+50\"\n      crs:LuminanceAdjustmentYellow=\"+25\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-27\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"-8\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"15\"\n      crs:GrainSize=\"89\"\n      crs:GrainFrequency=\"89\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 31</rdf:li>\n       <rdf:li>64, 67</rdf:li>\n       <rdf:li>124, 121</rdf:li>\n       <rdf:li>172, 172</rdf:li>\n       <rdf:li>255, 227</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 25</rdf:li>\n       <rdf:li>68, 55</rdf:li>\n       <rdf:li>138, 143</rdf:li>\n       <rdf:li>197, 209</rdf:li>\n       <rdf:li>255, 240</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 19</rdf:li>\n       <rdf:li>72, 62</rdf:li>\n       <rdf:li>115, 117</rdf:li>\n       <rdf:li>169, 185</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>2, 0</rdf:li>\n       <rdf:li>43, 32</rdf:li>\n       <rdf:li>76, 74</rdf:li>\n       <rdf:li>141, 141</rdf:li>\n       <rdf:li>201, 193</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _01.main
//=========================================
//

_01.main = function () {
  _01();
};

_01.main();

// EOF

"_01.jsx"
// EOF
