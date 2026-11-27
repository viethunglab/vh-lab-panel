#target photoshop
//
// _07.jsx
//

//
// Generated Mon Mar 14 2022 12:07:18 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 07 ==============
//
function _07() {
  // Layer Via Copy
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Camera Raw Filter
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -1);
    desc1.putInteger(cTID('Tint'), -8);
    desc1.putDouble(cTID('Ex12'), 0.06);
    desc1.putInteger(cTID('Cr12'), -38);
    desc1.putInteger(cTID('Hi12'), -33);
    desc1.putInteger(cTID('Sh12'), 22);
    desc1.putInteger(cTID('Wh12'), 18);
    desc1.putInteger(cTID('Bk12'), 5);
    desc1.putInteger(cTID('Cl12'), 19);
    desc1.putInteger(cTID('PC_S'), -11);
    desc1.putInteger(cTID('PC_D'), 4);
    desc1.putInteger(cTID('PC_L'), 12);
    desc1.putInteger(cTID('PC_H'), -16);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('HA_R'), 21);
    desc1.putInteger(cTID('HA_O'), -15);
    desc1.putInteger(cTID('HA_Y'), -42);
    desc1.putInteger(cTID('HA_G'), -90);
    desc1.putInteger(cTID('HA_A'), -56);
    desc1.putInteger(cTID('HA_B'), -25);
    desc1.putInteger(cTID('HA_P'), -15);
    desc1.putInteger(cTID('HA_M'), -12);
    desc1.putInteger(cTID('SA_R'), 3);
    desc1.putInteger(cTID('SA_O'), -24);
    desc1.putInteger(cTID('SA_Y'), -100);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -31);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), -22);
    desc1.putInteger(cTID('LA_O'), -24);
    desc1.putInteger(cTID('LA_Y'), -29);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 2);
    desc1.putInteger(cTID('STSS'), 8);
    desc1.putInteger(cTID('STHH'), 204);
    desc1.putInteger(cTID('STHS'), 24);
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
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(10);
    list1.putInteger(59);
    list1.putInteger(68);
    list1.putInteger(104);
    list1.putInteger(127);
    list1.putInteger(165);
    list1.putInteger(187);
    list1.putInteger(248);
    list1.putInteger(255);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"14\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"25978FE00D41CF408CC123DC400C6A83\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">AAA</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-1\"\n      crs:IncrementalTint=\"-8\"\n      crs:Exposure2012=\"+0.06\"\n      crs:Contrast2012=\"-38\"\n      crs:Highlights2012=\"-33\"\n      crs:Shadows2012=\"+22\"\n      crs:Whites2012=\"+18\"\n      crs:Blacks2012=\"+5\"\n      crs:Clarity2012=\"+19\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"-11\"\n      crs:ParametricDarks=\"+4\"\n      crs:ParametricLights=\"+12\"\n      crs:ParametricHighlights=\"-16\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"+21\"\n      crs:HueAdjustmentOrange=\"-15\"\n      crs:HueAdjustmentYellow=\"-42\"\n      crs:HueAdjustmentGreen=\"-90\"\n      crs:HueAdjustmentAqua=\"-56\"\n      crs:HueAdjustmentBlue=\"-25\"\n      crs:HueAdjustmentPurple=\"-15\"\n      crs:HueAdjustmentMagenta=\"-12\"\n      crs:SaturationAdjustmentRed=\"+3\"\n      crs:SaturationAdjustmentOrange=\"-24\"\n      crs:SaturationAdjustmentYellow=\"-100\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-31\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"-22\"\n      crs:LuminanceAdjustmentOrange=\"-24\"\n      crs:LuminanceAdjustmentYellow=\"-29\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"2\"\n      crs:SplitToningShadowSaturation=\"8\"\n      crs:SplitToningHighlightHue=\"204\"\n      crs:SplitToningHighlightSaturation=\"24\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 10</rdf:li>\n       <rdf:li>59, 68</rdf:li>\n       <rdf:li>104, 127</rdf:li>\n       <rdf:li>165, 187</rdf:li>\n       <rdf:li>248, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _07.main
//=========================================
//

_07.main = function () {
  _07();
};

_07.main();

// EOF

"_07.jsx"
// EOF
