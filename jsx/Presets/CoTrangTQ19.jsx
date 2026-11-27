#target photoshop
//
// _30.jsx
//

//
// Generated Tue Mar 29 2022 18:35:26 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 30 ==============
//
function _30() {
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
    desc1.putInteger(cTID('Temp'), 8);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putDouble(cTID('Ex12'), 0.3);
    desc1.putInteger(cTID('Cr12'), 23);
    desc1.putInteger(cTID('Hi12'), -100);
    desc1.putInteger(cTID('Sh12'), 45);
    desc1.putInteger(cTID('Wh12'), -94);
    desc1.putInteger(cTID('Bk12'), 10);
    desc1.putInteger(cTID('Cl12'), 9);
    desc1.putInteger(cTID('Vibr'), -21);
    desc1.putInteger(cTID('Strt'), -29);
    desc1.putInteger(cTID('PC_S'), 4);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 7);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 16);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 37);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 35);
    desc1.putInteger(cTID('HA_O'), -3);
    desc1.putInteger(cTID('HA_Y'), -73);
    desc1.putInteger(cTID('HA_G'), -11);
    desc1.putInteger(cTID('HA_A'), 33);
    desc1.putInteger(cTID('HA_B'), -24);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -42);
    desc1.putInteger(cTID('SA_O'), -25);
    desc1.putInteger(cTID('SA_Y'), -56);
    desc1.putInteger(cTID('SA_G'), -53);
    desc1.putInteger(cTID('SA_A'), -68);
    desc1.putInteger(cTID('SA_B'), -73);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 21);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), -73);
    desc1.putInteger(cTID('LA_A'), 14);
    desc1.putInteger(cTID('LA_B'), -16);
    desc1.putInteger(cTID('LA_P'), 22);
    desc1.putInteger(cTID('LA_M'), 13);
    desc1.putInteger(cTID('STSH'), 47);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 215);
    desc1.putInteger(cTID('STHS'), 32);
    desc1.putInteger(cTID('STB '), -100);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('BlkB'), 3);
    desc1.putInteger(cTID('RHue'), 33);
    desc1.putInteger(cTID('RSat'), 38);
    desc1.putInteger(cTID('GHue'), 37);
    desc1.putInteger(cTID('GSat'), 7);
    desc1.putInteger(cTID('BHue'), -12);
    desc1.putInteger(cTID('BSat'), -12);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(12);
    list1.putInteger(28);
    list1.putInteger(38);
    list1.putInteger(77);
    list1.putInteger(86);
    list1.putInteger(125);
    list1.putInteger(131);
    list1.putInteger(175);
    list1.putInteger(167);
    list1.putInteger(251);
    list1.putInteger(235);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(49);
    list2.putInteger(20);
    list2.putInteger(90);
    list2.putInteger(68);
    list2.putInteger(130);
    list2.putInteger(126);
    list2.putInteger(176);
    list2.putInteger(199);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(51);
    list3.putInteger(22);
    list3.putInteger(90);
    list3.putInteger(70);
    list3.putInteger(124);
    list3.putInteger(117);
    list3.putInteger(181);
    list3.putInteger(204);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(49);
    list4.putInteger(20);
    list4.putInteger(85);
    list4.putInteger(57);
    list4.putInteger(136);
    list4.putInteger(126);
    list4.putInteger(176);
    list4.putInteger(196);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"30\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"73AE89EAD3A5254F96C1F23EB78F949C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">DHCL</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+8\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.30\"\n      crs:Contrast2012=\"+23\"\n      crs:Highlights2012=\"-100\"\n      crs:Shadows2012=\"+45\"\n      crs:Whites2012=\"-94\"\n      crs:Blacks2012=\"+10\"\n      crs:Clarity2012=\"+9\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-21\"\n      crs:Saturation=\"-29\"\n      crs:ParametricShadows=\"+4\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"+7\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"16\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"37\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+35\"\n      crs:HueAdjustmentOrange=\"-3\"\n      crs:HueAdjustmentYellow=\"-73\"\n      crs:HueAdjustmentGreen=\"-11\"\n      crs:HueAdjustmentAqua=\"+33\"\n      crs:HueAdjustmentBlue=\"-24\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-42\"\n      crs:SaturationAdjustmentOrange=\"-25\"\n      crs:SaturationAdjustmentYellow=\"-56\"\n      crs:SaturationAdjustmentGreen=\"-53\"\n      crs:SaturationAdjustmentAqua=\"-68\"\n      crs:SaturationAdjustmentBlue=\"-73\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+21\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"-73\"\n      crs:LuminanceAdjustmentAqua=\"+14\"\n      crs:LuminanceAdjustmentBlue=\"-16\"\n      crs:LuminanceAdjustmentPurple=\"+22\"\n      crs:LuminanceAdjustmentMagenta=\"+13\"\n      crs:SplitToningShadowHue=\"47\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"215\"\n      crs:SplitToningHighlightSaturation=\"32\"\n      crs:SplitToningBalance=\"-100\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+3\"\n      crs:RedHue=\"+33\"\n      crs:RedSaturation=\"+38\"\n      crs:GreenHue=\"+37\"\n      crs:GreenSaturation=\"+7\"\n      crs:BlueHue=\"-12\"\n      crs:BlueSaturation=\"-12\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 12</rdf:li>\n       <rdf:li>28, 38</rdf:li>\n       <rdf:li>77, 86</rdf:li>\n       <rdf:li>125, 131</rdf:li>\n       <rdf:li>175, 167</rdf:li>\n       <rdf:li>251, 235</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>49, 20</rdf:li>\n       <rdf:li>90, 68</rdf:li>\n       <rdf:li>130, 126</rdf:li>\n       <rdf:li>176, 199</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>51, 22</rdf:li>\n       <rdf:li>90, 70</rdf:li>\n       <rdf:li>124, 117</rdf:li>\n       <rdf:li>181, 204</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>49, 20</rdf:li>\n       <rdf:li>85, 57</rdf:li>\n       <rdf:li>136, 126</rdf:li>\n       <rdf:li>176, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _30.main
//=========================================
//

_30.main = function () {
  _30();
};

_30.main();

// EOF

"_30.jsx"
// EOF
