#target photoshop
//
// _13.jsx
//

//
// Generated Wed Dec 15 2021 14:01:54 GMT-0800
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
    desc1.putInteger(cTID('Cr12'), 50);
    desc1.putInteger(cTID('Hi12'), -70);
    desc1.putInteger(cTID('Sh12'), 5);
    desc1.putInteger(cTID('Wh12'), -25);
    desc1.putInteger(cTID('Bk12'), 70);
    desc1.putInteger(cTID('Vibr'), 40);
    desc1.putInteger(cTID('Strt'), -20);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 20);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 10);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('LNR '), 5);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 5);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), 10);
    desc1.putInteger(cTID('HA_Y'), 10);
    desc1.putInteger(cTID('HA_G'), 45);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 10);
    desc1.putInteger(cTID('HA_P'), -50);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), -25);
    desc1.putInteger(cTID('SA_G'), -65);
    desc1.putInteger(cTID('SA_A'), -40);
    desc1.putInteger(cTID('SA_B'), -40);
    desc1.putInteger(cTID('SA_P'), -20);
    desc1.putInteger(cTID('SA_M'), -40);
    desc1.putInteger(cTID('LA_R'), -5);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), -10);
    desc1.putInteger(cTID('LA_G'), -40);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -5);
    desc1.putInteger(cTID('LA_P'), 20);
    desc1.putInteger(cTID('LA_M'), 20);
    desc1.putInteger(cTID('STSH'), 40);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 40);
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
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(16);
    list1.putInteger(24);
    list1.putInteger(25);
    list1.putInteger(92);
    list1.putInteger(79);
    list1.putInteger(226);
    list1.putInteger(225);
    list1.putInteger(255);
    list1.putInteger(251);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Tone 39\"\n     crs:Amount=\"1\"\n     crs:UUID=\"1F07694270D2104F8A2C2E31917DE90C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Japan Style</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"+50\"\n      crs:Highlights2012=\"-70\"\n      crs:Shadows2012=\"+5\"\n      crs:Whites2012=\"-25\"\n      crs:Blacks2012=\"+70\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"+40\"\n      crs:Saturation=\"-20\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"+20\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"+10\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:LuminanceSmoothing=\"5\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"5\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+15\"\n      crs:HueAdjustmentOrange=\"+10\"\n      crs:HueAdjustmentYellow=\"+10\"\n      crs:HueAdjustmentGreen=\"+45\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"+10\"\n      crs:HueAdjustmentPurple=\"-50\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"-25\"\n      crs:SaturationAdjustmentGreen=\"-65\"\n      crs:SaturationAdjustmentAqua=\"-40\"\n      crs:SaturationAdjustmentBlue=\"-40\"\n      crs:SaturationAdjustmentPurple=\"-20\"\n      crs:SaturationAdjustmentMagenta=\"-40\"\n      crs:LuminanceAdjustmentRed=\"-5\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"-10\"\n      crs:LuminanceAdjustmentGreen=\"-40\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-5\"\n      crs:LuminanceAdjustmentPurple=\"+20\"\n      crs:LuminanceAdjustmentMagenta=\"+20\"\n      crs:SplitToningShadowHue=\"40\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"40\"\n      crs:SplitToningHighlightSaturation=\"5\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 16</rdf:li>\n       <rdf:li>24, 25</rdf:li>\n       <rdf:li>92, 79</rdf:li>\n       <rdf:li>226, 225</rdf:li>\n       <rdf:li>255, 251</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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
