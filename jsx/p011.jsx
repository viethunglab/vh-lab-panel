#target photoshop
//
// _011.jsx
//

//
// Generated Sat Dec 04 2021 11:50:38 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 011 ==============
//
function _011() {
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
    desc1.putInteger(cTID('Temp'), 0);
    desc1.putInteger(cTID('Tint'), 2);
    desc1.putDouble(cTID('Ex12'), 1.25);
    desc1.putInteger(cTID('Cr12'), 23);
    desc1.putInteger(cTID('Hi12'), 48);
    desc1.putInteger(cTID('Sh12'), 25);
    desc1.putInteger(cTID('Wh12'), -13);
    desc1.putInteger(cTID('Bk12'), 62);
    desc1.putInteger(cTID('Cl12'), -24);
    desc1.putInteger(cTID('Vibr'), 15);
    desc1.putInteger(cTID('Strt'), 2);
    desc1.putInteger(cTID('PC_S'), -22);
    desc1.putInteger(cTID('PC_D'), 33);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 40);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 19);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), -8);
    desc1.putInteger(cTID('HA_Y'), -14);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 11);
    desc1.putInteger(cTID('SA_O'), -15);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 3);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 35);
    desc1.putInteger(cTID('STSS'), 5);
    desc1.putInteger(cTID('STHH'), 0);
    desc1.putInteger(cTID('STHS'), 0);
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
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -7);
    desc1.putInteger(cTID('BSat'), -39);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"800F14F3E009534797D041DB7DE0EEA1\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"5ADB0D8000F84449B34342014373EAA6\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"F6D019EA0F08694D8AE45F5CDEEB4C72\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"A4020A6C02E7E243B2E7FFC2D80224CF\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"27F5366565928447AB44E29799588F8A\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"2E7A828C3614324494233FEC5E3B3509\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"1705EF336FCFB94E849F1D69126A21F8\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"40F9E0A11FF4CF41B88117675E3BEE57\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_126\"\n     crs:Amount=\"1\"\n     crs:UUID=\"0E1539EFAF3DBC4EB4DD9A01660EBBD3\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"+2\"\n      crs:Exposure2012=\"+1.25\"\n      crs:Contrast2012=\"+23\"\n      crs:Highlights2012=\"+48\"\n      crs:Shadows2012=\"+25\"\n      crs:Whites2012=\"-13\"\n      crs:Blacks2012=\"+62\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-24\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+15\"\n      crs:Saturation=\"+2\"\n      crs:ParametricShadows=\"-22\"\n      crs:ParametricDarks=\"+33\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"40\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"19\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"-8\"\n      crs:HueAdjustmentYellow=\"-14\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+11\"\n      crs:SaturationAdjustmentOrange=\"-15\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+3\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"35\"\n      crs:SplitToningShadowSaturation=\"5\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-7\"\n      crs:BlueSaturation=\"-39\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _011.main
//=========================================
//

_011.main = function () {
  _011();
};

_011.main();

// EOF

"_011.jsx"
// EOF
