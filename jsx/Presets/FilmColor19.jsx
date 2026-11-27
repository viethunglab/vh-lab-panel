#target photoshop
//
// _16.jsx
//

//
// Generated Tue Dec 14 2021 13:42:59 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 16 ==============
//
function _16() {
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
    desc1.putInteger(cTID('Wh12'), 20);
    desc1.putInteger(cTID('Bk12'), 5);
    desc1.putInteger(cTID('Cl12'), -15);
    desc1.putInteger(cTID('Vibr'), -15);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 19);
    desc1.putInteger(cTID('HA_Y'), 24);
    desc1.putInteger(cTID('HA_G'), -14);
    desc1.putInteger(cTID('HA_A'), -31);
    desc1.putInteger(cTID('HA_B'), -16);
    desc1.putInteger(cTID('HA_P'), -1);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -9);
    desc1.putInteger(cTID('SA_O'), 26);
    desc1.putInteger(cTID('SA_Y'), 12);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 15);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), -78);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 12);
    desc1.putInteger(cTID('LA_Y'), 15);
    desc1.putInteger(cTID('LA_G'), -27);
    desc1.putInteger(cTID('LA_A'), -5);
    desc1.putInteger(cTID('LA_B'), -13);
    desc1.putInteger(cTID('LA_P'), 5);
    desc1.putInteger(cTID('LA_M'), -6);
    desc1.putInteger(cTID('STSH'), 222);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 52);
    desc1.putInteger(cTID('STHS'), 0);
    desc1.putInteger(cTID('STB '), 51);
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
    desc1.putInteger(cTID('GRNS'), 84);
    desc1.putInteger(cTID('GRNF'), 90);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(16);
    list1.putInteger(79);
    list1.putInteger(80);
    list1.putInteger(149);
    list1.putInteger(146);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(64);
    list2.putInteger(56);
    list2.putInteger(106);
    list2.putInteger(104);
    list2.putInteger(152);
    list2.putInteger(154);
    list2.putInteger(194);
    list2.putInteger(202);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(69);
    list3.putInteger(66);
    list3.putInteger(148);
    list3.putInteger(148);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(9);
    list4.putInteger(61);
    list4.putInteger(61);
    list4.putInteger(94);
    list4.putInteger(91);
    list4.putInteger(121);
    list4.putInteger(116);
    list4.putInteger(185);
    list4.putInteger(180);
    list4.putInteger(255);
    list4.putInteger(252);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (36)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"A9DC85C41DAA344BCA386F7AC97EB402\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"0\"\n      crs:Shadows2012=\"0\"\n      crs:Whites2012=\"+20\"\n      crs:Blacks2012=\"+5\"\n      crs:Clarity2012=\"-15\"\n      crs:Vibrance=\"-15\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+19\"\n      crs:HueAdjustmentYellow=\"+24\"\n      crs:HueAdjustmentGreen=\"-14\"\n      crs:HueAdjustmentAqua=\"-31\"\n      crs:HueAdjustmentBlue=\"-16\"\n      crs:HueAdjustmentPurple=\"-1\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-9\"\n      crs:SaturationAdjustmentOrange=\"+26\"\n      crs:SaturationAdjustmentYellow=\"+12\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"+15\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"-78\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+12\"\n      crs:LuminanceAdjustmentYellow=\"+15\"\n      crs:LuminanceAdjustmentGreen=\"-27\"\n      crs:LuminanceAdjustmentAqua=\"-5\"\n      crs:LuminanceAdjustmentBlue=\"-13\"\n      crs:LuminanceAdjustmentPurple=\"+5\"\n      crs:LuminanceAdjustmentMagenta=\"-6\"\n      crs:SplitToningShadowHue=\"222\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"52\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"+51\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"35\"\n      crs:GrainSize=\"84\"\n      crs:GrainFrequency=\"90\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 16</rdf:li>\n       <rdf:li>79, 80</rdf:li>\n       <rdf:li>149, 146</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>64, 56</rdf:li>\n       <rdf:li>106, 104</rdf:li>\n       <rdf:li>152, 154</rdf:li>\n       <rdf:li>194, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>69, 66</rdf:li>\n       <rdf:li>148, 148</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 9</rdf:li>\n       <rdf:li>61, 61</rdf:li>\n       <rdf:li>94, 91</rdf:li>\n       <rdf:li>121, 116</rdf:li>\n       <rdf:li>185, 180</rdf:li>\n       <rdf:li>255, 252</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _16.main
//=========================================
//

_16.main = function () {
  _16();
};

_16.main();

// EOF

"_16.jsx"
// EOF
