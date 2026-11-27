#target photoshop
//
// _23.jsx
//

//
// Generated Tue Mar 29 2022 18:34:13 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 23 ==============
//
function _23() {
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
    desc1.putInteger(cTID('Temp'), -3);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putDouble(cTID('Ex12'), 0.56);
    desc1.putInteger(cTID('Cr12'), 25);
    desc1.putInteger(cTID('Hi12'), -72);
    desc1.putInteger(cTID('Sh12'), 59);
    desc1.putInteger(cTID('Wh12'), 30);
    desc1.putInteger(cTID('Bk12'), -21);
    desc1.putInteger(cTID('Cl12'), 35);
    desc1.putInteger(cTID('Vibr'), 18);
    desc1.putInteger(cTID('Strt'), -27);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), -13);
    desc1.putInteger(cTID('PC_L'), 14);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 39);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 26);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 36);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 36);
    desc1.putInteger(cTID('HA_G'), 68);
    desc1.putInteger(cTID('HA_A'), -45);
    desc1.putInteger(cTID('HA_B'), 40);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -9);
    desc1.putInteger(cTID('SA_O'), 6);
    desc1.putInteger(cTID('SA_Y'), -9);
    desc1.putInteger(cTID('SA_G'), -55);
    desc1.putInteger(cTID('SA_A'), -38);
    desc1.putInteger(cTID('SA_B'), -19);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 19);
    desc1.putInteger(cTID('LA_O'), -19);
    desc1.putInteger(cTID('LA_Y'), -21);
    desc1.putInteger(cTID('LA_G'), 86);
    desc1.putInteger(cTID('LA_A'), -27);
    desc1.putInteger(cTID('LA_B'), -33);
    desc1.putInteger(cTID('LA_P'), 3);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 188);
    desc1.putInteger(cTID('STSS'), 13);
    desc1.putInteger(cTID('STHH'), 45);
    desc1.putInteger(cTID('STHS'), 24);
    desc1.putInteger(cTID('STB '), 7);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 22);
    desc1.putInteger(cTID('RSat'), 22);
    desc1.putInteger(cTID('GHue'), 100);
    desc1.putInteger(cTID('GSat'), -31);
    desc1.putInteger(cTID('BHue'), -28);
    desc1.putInteger(cTID('BSat'), -17);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(13);
    list1.putInteger(128);
    list1.putInteger(128);
    list1.putInteger(192);
    list1.putInteger(190);
    list1.putInteger(255);
    list1.putInteger(244);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"23\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"D34165609BAEFF48A0853C129645E473\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">DHCL</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-3\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.56\"\n      crs:Contrast2012=\"+25\"\n      crs:Highlights2012=\"-72\"\n      crs:Shadows2012=\"+59\"\n      crs:Whites2012=\"+30\"\n      crs:Blacks2012=\"-21\"\n      crs:Clarity2012=\"+35\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+18\"\n      crs:Saturation=\"-27\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"-13\"\n      crs:ParametricLights=\"+14\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"39\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"26\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"36\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"+36\"\n      crs:HueAdjustmentGreen=\"+68\"\n      crs:HueAdjustmentAqua=\"-45\"\n      crs:HueAdjustmentBlue=\"+40\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-9\"\n      crs:SaturationAdjustmentOrange=\"+6\"\n      crs:SaturationAdjustmentYellow=\"-9\"\n      crs:SaturationAdjustmentGreen=\"-55\"\n      crs:SaturationAdjustmentAqua=\"-38\"\n      crs:SaturationAdjustmentBlue=\"-19\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+19\"\n      crs:LuminanceAdjustmentOrange=\"-19\"\n      crs:LuminanceAdjustmentYellow=\"-21\"\n      crs:LuminanceAdjustmentGreen=\"+86\"\n      crs:LuminanceAdjustmentAqua=\"-27\"\n      crs:LuminanceAdjustmentBlue=\"-33\"\n      crs:LuminanceAdjustmentPurple=\"+3\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"188\"\n      crs:SplitToningShadowSaturation=\"13\"\n      crs:SplitToningHighlightHue=\"45\"\n      crs:SplitToningHighlightSaturation=\"24\"\n      crs:SplitToningBalance=\"+7\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+22\"\n      crs:RedSaturation=\"+22\"\n      crs:GreenHue=\"+100\"\n      crs:GreenSaturation=\"-31\"\n      crs:BlueHue=\"-28\"\n      crs:BlueSaturation=\"-17\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 13</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>192, 190</rdf:li>\n       <rdf:li>255, 244</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _23.main
//=========================================
//

_23.main = function () {
  _23();
};

_23.main();

// EOF

"_23.jsx"
// EOF
