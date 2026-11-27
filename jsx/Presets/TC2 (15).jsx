#target photoshop
//
// _15.jsx
//

//
// Generated Fri Feb 04 2022 12:49:29 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 15 ==============
//
function _15() {
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
    desc1.putInteger(cTID('Temp'), 16);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), 0.05);
    desc1.putInteger(cTID('Hi12'), -99);
    desc1.putInteger(cTID('Sh12'), 67);
    desc1.putInteger(cTID('Wh12'), 31);
    desc1.putInteger(cTID('Bk12'), -16);
    desc1.putInteger(cTID('Cl12'), -7);
    desc1.putInteger(cTID('Vibr'), 42);
    desc1.putInteger(cTID('PC_S'), -87);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 80);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 63);
    desc1.putDouble(cTID('ShpR'), 1.5);
    desc1.putInteger(cTID('ShpD'), 32);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 12);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -2);
    desc1.putInteger(cTID('HA_O'), 8);
    desc1.putInteger(cTID('HA_Y'), 11);
    desc1.putInteger(cTID('HA_G'), 25);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -7);
    desc1.putInteger(cTID('HA_P'), -14);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -20);
    desc1.putInteger(cTID('SA_Y'), -33);
    desc1.putInteger(cTID('SA_G'), -61);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), -37);
    desc1.putInteger(cTID('SA_P'), -87);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 13);
    desc1.putInteger(cTID('LA_O'), 19);
    desc1.putInteger(cTID('LA_Y'), -2);
    desc1.putInteger(cTID('LA_G'), -38);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 11);
    desc1.putInteger(cTID('LA_M'), 13);
    desc1.putInteger(cTID('STSH'), 233);
    desc1.putInteger(cTID('STSS'), 15);
    desc1.putInteger(cTID('STHH'), 219);
    desc1.putInteger(cTID('STHS'), 22);
    desc1.putInteger(cTID('STB '), -53);
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
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), -73);
    desc1.putInteger(cTID('GHue'), 28);
    desc1.putInteger(cTID('GSat'), 48);
    desc1.putInteger(cTID('BHue'), 7);
    desc1.putInteger(cTID('BSat'), 73);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM tone màu cực trong \"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"29CB6B1AE3781246A678FDAAB7940BF7\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+16\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"+0.05\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-99\"\n      crs:Shadows2012=\"+67\"\n      crs:Whites2012=\"+31\"\n      crs:Blacks2012=\"-16\"\n      crs:Clarity2012=\"-7\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+42\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"-87\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"80\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"63\"\n      crs:SharpenRadius=\"+1.5\"\n      crs:SharpenDetail=\"32\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"12\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-2\"\n      crs:HueAdjustmentOrange=\"+8\"\n      crs:HueAdjustmentYellow=\"+11\"\n      crs:HueAdjustmentGreen=\"+25\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-7\"\n      crs:HueAdjustmentPurple=\"-14\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-20\"\n      crs:SaturationAdjustmentYellow=\"-33\"\n      crs:SaturationAdjustmentGreen=\"-61\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-37\"\n      crs:SaturationAdjustmentPurple=\"-87\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+13\"\n      crs:LuminanceAdjustmentOrange=\"+19\"\n      crs:LuminanceAdjustmentYellow=\"-2\"\n      crs:LuminanceAdjustmentGreen=\"-38\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"+11\"\n      crs:LuminanceAdjustmentMagenta=\"+13\"\n      crs:SplitToningShadowHue=\"233\"\n      crs:SplitToningShadowSaturation=\"15\"\n      crs:SplitToningHighlightHue=\"219\"\n      crs:SplitToningHighlightSaturation=\"22\"\n      crs:SplitToningBalance=\"-53\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"-73\"\n      crs:GreenHue=\"+28\"\n      crs:GreenSaturation=\"+48\"\n      crs:BlueHue=\"+7\"\n      crs:BlueSaturation=\"+73\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _15.main
//=========================================
//

_15.main = function () {
  _15();
};

_15.main();

// EOF

"_15.jsx"
// EOF
