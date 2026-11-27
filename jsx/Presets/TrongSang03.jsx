#target photoshop
//
// _03.jsx
//

//
// Generated Tue Dec 14 2021 23:16:28 GMT-0800
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
    desc1.putInteger(cTID('Temp'), 9);
    desc1.putInteger(cTID('Tint'), -3);
    desc1.putDouble(cTID('Ex12'), 0.41);
    desc1.putInteger(cTID('Cr12'), -11);
    desc1.putInteger(cTID('Hi12'), -29);
    desc1.putInteger(cTID('Sh12'), 20);
    desc1.putInteger(cTID('Wh12'), -76);
    desc1.putInteger(cTID('Strt'), 7);
    desc1.putInteger(cTID('PC_S'), -19);
    desc1.putInteger(cTID('PC_D'), 3);
    desc1.putInteger(cTID('PC_L'), 63);
    desc1.putInteger(cTID('PC_H'), -78);
    desc1.putInteger(cTID('PC_1'), 16);
    desc1.putInteger(cTID('PC_2'), 40);
    desc1.putInteger(cTID('PC_3'), 85);
    desc1.putInteger(cTID('Shrp'), 20);
    desc1.putDouble(cTID('ShpR'), 1.5);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 7);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 4);
    desc1.putInteger(cTID('HA_O'), -33);
    desc1.putInteger(cTID('HA_Y'), 30);
    desc1.putInteger(cTID('HA_G'), 18);
    desc1.putInteger(cTID('HA_A'), 4);
    desc1.putInteger(cTID('HA_B'), 21);
    desc1.putInteger(cTID('HA_P'), 10);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), 59);
    desc1.putInteger(cTID('SA_G'), -19);
    desc1.putInteger(cTID('SA_A'), 15);
    desc1.putInteger(cTID('SA_B'), -33);
    desc1.putInteger(cTID('SA_P'), -20);
    desc1.putInteger(cTID('SA_M'), -30);
    desc1.putInteger(cTID('LA_R'), -10);
    desc1.putInteger(cTID('LA_O'), 33);
    desc1.putInteger(cTID('LA_Y'), 16);
    desc1.putInteger(cTID('LA_G'), -11);
    desc1.putInteger(cTID('LA_A'), 35);
    desc1.putInteger(cTID('LA_B'), -40);
    desc1.putInteger(cTID('LA_P'), 10);
    desc1.putInteger(cTID('LA_M'), 10);
    desc1.putInteger(cTID('GRNA'), 13);
    desc1.putInteger(cTID('GRNS'), 27);
    desc1.putInteger(cTID('GRNF'), 42);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), -5);
    desc1.putInteger(cTID('GHue'), 24);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(11);
    list1.putInteger(56);
    list1.putInteger(54);
    list1.putInteger(151);
    list1.putInteger(153);
    list1.putInteger(255);
    list1.putInteger(250);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(61);
    list2.putInteger(55);
    list2.putInteger(126);
    list2.putInteger(125);
    list2.putInteger(185);
    list2.putInteger(189);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(39);
    list3.putInteger(36);
    list3.putInteger(121);
    list3.putInteger(122);
    list3.putInteger(189);
    list3.putInteger(189);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(56);
    list4.putInteger(48);
    list4.putInteger(127);
    list4.putInteger(122);
    list4.putInteger(192);
    list4.putInteger(193);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Japan Film Color - 11\"\n     crs:Amount=\"1\"\n     crs:UUID=\"511FC0AFDEC8FF45A3232A6DDA106EC5\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+9\"\n      crs:IncrementalTint=\"-3\"\n      crs:Exposure2012=\"+0.41\"\n      crs:Contrast2012=\"-11\"\n      crs:Highlights2012=\"-29\"\n      crs:Shadows2012=\"+20\"\n      crs:Whites2012=\"-76\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"+7\"\n      crs:ParametricShadows=\"-19\"\n      crs:ParametricDarks=\"+3\"\n      crs:ParametricLights=\"+63\"\n      crs:ParametricHighlights=\"-78\"\n      crs:ParametricShadowSplit=\"16\"\n      crs:ParametricMidtoneSplit=\"40\"\n      crs:ParametricHighlightSplit=\"85\"\n      crs:Sharpness=\"20\"\n      crs:SharpenRadius=\"+1.5\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"7\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+4\"\n      crs:HueAdjustmentOrange=\"-33\"\n      crs:HueAdjustmentYellow=\"+30\"\n      crs:HueAdjustmentGreen=\"+18\"\n      crs:HueAdjustmentAqua=\"+4\"\n      crs:HueAdjustmentBlue=\"+21\"\n      crs:HueAdjustmentPurple=\"+10\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"+59\"\n      crs:SaturationAdjustmentGreen=\"-19\"\n      crs:SaturationAdjustmentAqua=\"+15\"\n      crs:SaturationAdjustmentBlue=\"-33\"\n      crs:SaturationAdjustmentPurple=\"-20\"\n      crs:SaturationAdjustmentMagenta=\"-30\"\n      crs:LuminanceAdjustmentRed=\"-10\"\n      crs:LuminanceAdjustmentOrange=\"+33\"\n      crs:LuminanceAdjustmentYellow=\"+16\"\n      crs:LuminanceAdjustmentGreen=\"-11\"\n      crs:LuminanceAdjustmentAqua=\"+35\"\n      crs:LuminanceAdjustmentBlue=\"-40\"\n      crs:LuminanceAdjustmentPurple=\"+10\"\n      crs:LuminanceAdjustmentMagenta=\"+10\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"13\"\n      crs:GrainSize=\"27\"\n      crs:GrainFrequency=\"42\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"-5\"\n      crs:GreenHue=\"+24\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 11</rdf:li>\n       <rdf:li>56, 54</rdf:li>\n       <rdf:li>151, 153</rdf:li>\n       <rdf:li>255, 250</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>61, 55</rdf:li>\n       <rdf:li>126, 125</rdf:li>\n       <rdf:li>185, 189</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 36</rdf:li>\n       <rdf:li>121, 122</rdf:li>\n       <rdf:li>189, 189</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>56, 48</rdf:li>\n       <rdf:li>127, 122</rdf:li>\n       <rdf:li>192, 193</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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
