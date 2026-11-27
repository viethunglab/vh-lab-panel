#target photoshop
//
// TuyenChon18.jsx
//

//
// Generated Tue Jan 11 2022 14:10:03 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 18 ==============
//
function _18() {
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
    desc1.putInteger(cTID('Temp'), 5);
    desc1.putInteger(cTID('Tint'), 37);
    desc1.putDouble(cTID('Ex12'), -0.3);
    desc1.putInteger(cTID('Cr12'), -53);
    desc1.putInteger(cTID('Hi12'), -86);
    desc1.putInteger(cTID('Sh12'), -5);
    desc1.putInteger(cTID('Wh12'), -38);
    desc1.putInteger(cTID('Bk12'), -18);
    desc1.putInteger(cTID('Cl12'), -2);
    desc1.putInteger(cTID('Vibr'), -16);
    desc1.putInteger(cTID('Strt'), -13);
    desc1.putInteger(cTID('PC_S'), -5);
    desc1.putInteger(cTID('PC_D'), -9);
    desc1.putInteger(cTID('PC_L'), 8);
    desc1.putInteger(cTID('PC_H'), -53);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 37);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('HA_R'), -19);
    desc1.putInteger(cTID('HA_O'), -6);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), -11);
    desc1.putInteger(cTID('HA_A'), -15);
    desc1.putInteger(cTID('HA_B'), 11);
    desc1.putInteger(cTID('HA_P'), -50);
    desc1.putInteger(cTID('HA_M'), 15);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 4);
    desc1.putInteger(cTID('SA_Y'), 6);
    desc1.putInteger(cTID('SA_G'), -6);
    desc1.putInteger(cTID('SA_A'), -25);
    desc1.putInteger(cTID('SA_B'), -60);
    desc1.putInteger(cTID('SA_P'), -40);
    desc1.putInteger(cTID('SA_M'), -21);
    desc1.putInteger(cTID('LA_R'), -55);
    desc1.putInteger(cTID('LA_O'), -10);
    desc1.putInteger(cTID('LA_Y'), -35);
    desc1.putInteger(cTID('LA_G'), -40);
    desc1.putInteger(cTID('LA_A'), -5);
    desc1.putInteger(cTID('LA_B'), -15);
    desc1.putInteger(cTID('LA_P'), 20);
    desc1.putInteger(cTID('LA_M'), 10);
    desc1.putInteger(cTID('STSH'), 205);
    desc1.putInteger(cTID('STSS'), 4);
    desc1.putInteger(cTID('STHH'), 69);
    desc1.putInteger(cTID('STHS'), 7);
    desc1.putInteger(cTID('STB '), 16);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 25);
    desc1.putInteger(cTID('GRNS'), 60);
    desc1.putInteger(cTID('GRNF'), 40);
    desc1.putInteger(cTID('BlkB'), 19);
    desc1.putInteger(cTID('RHue'), 10);
    desc1.putInteger(cTID('RSat'), -20);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -15);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"18\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"173336C4D0BDDB408F1CC791F8BFDCE4\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+5\"\n      crs:IncrementalTint=\"+37\"\n      crs:Exposure2012=\"-0.30\"\n      crs:Contrast2012=\"-53\"\n      crs:Highlights2012=\"-86\"\n      crs:Shadows2012=\"-5\"\n      crs:Whites2012=\"-38\"\n      crs:Blacks2012=\"-18\"\n      crs:Clarity2012=\"-2\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"-16\"\n      crs:Saturation=\"-13\"\n      crs:ParametricShadows=\"-5\"\n      crs:ParametricDarks=\"-9\"\n      crs:ParametricLights=\"+8\"\n      crs:ParametricHighlights=\"-53\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"37\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"-19\"\n      crs:HueAdjustmentOrange=\"-6\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"-11\"\n      crs:HueAdjustmentAqua=\"-15\"\n      crs:HueAdjustmentBlue=\"+11\"\n      crs:HueAdjustmentPurple=\"-50\"\n      crs:HueAdjustmentMagenta=\"+15\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"+4\"\n      crs:SaturationAdjustmentYellow=\"+6\"\n      crs:SaturationAdjustmentGreen=\"-6\"\n      crs:SaturationAdjustmentAqua=\"-25\"\n      crs:SaturationAdjustmentBlue=\"-60\"\n      crs:SaturationAdjustmentPurple=\"-40\"\n      crs:SaturationAdjustmentMagenta=\"-21\"\n      crs:LuminanceAdjustmentRed=\"-55\"\n      crs:LuminanceAdjustmentOrange=\"-10\"\n      crs:LuminanceAdjustmentYellow=\"-35\"\n      crs:LuminanceAdjustmentGreen=\"-40\"\n      crs:LuminanceAdjustmentAqua=\"-5\"\n      crs:LuminanceAdjustmentBlue=\"-15\"\n      crs:LuminanceAdjustmentPurple=\"+20\"\n      crs:LuminanceAdjustmentMagenta=\"+10\"\n      crs:SplitToningShadowHue=\"205\"\n      crs:SplitToningShadowSaturation=\"4\"\n      crs:SplitToningHighlightHue=\"69\"\n      crs:SplitToningHighlightSaturation=\"7\"\n      crs:SplitToningBalance=\"+16\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"25\"\n      crs:GrainSize=\"60\"\n      crs:GrainFrequency=\"40\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+19\"\n      crs:RedHue=\"+10\"\n      crs:RedSaturation=\"-20\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-15\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _18.main
//=========================================
//

_18.main = function () {
  _18();
};

_18.main();

// EOF

"TuyenChon18.jsx"
// EOF
