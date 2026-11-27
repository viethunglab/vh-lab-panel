#target photoshop
//
// TC3_19.jsx
//

//
// Generated Sat Jun 11 2022 12:32:12 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 19 ==============
//
function _19() {
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
    desc1.putString(cTID('CrVe'), "14.3");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -12);
    desc1.putInteger(cTID('Tint'), -2);
    desc1.putDouble(cTID('Ex12'), 0.95);
    desc1.putInteger(cTID('Cr12'), -16);
    desc1.putInteger(cTID('Hi12'), -12);
    desc1.putInteger(cTID('Sh12'), 17);
    desc1.putInteger(cTID('Wh12'), 29);
    desc1.putInteger(cTID('Bk12'), -31);
    desc1.putInteger(cTID('Cl12'), 10);
    desc1.putInteger(cTID('Vibr'), 2);
    desc1.putInteger(cTID('Strt'), 3);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), -26);
    desc1.putInteger(cTID('PC_H'), 13);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 43);
    desc1.putDouble(cTID('ShpR'), 1.4);
    desc1.putInteger(cTID('ShpD'), 36);
    desc1.putInteger(cTID('ShpM'), 15);
    desc1.putInteger(cTID('LNR '), 17);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('HA_R'), 7);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -2);
    desc1.putInteger(cTID('HA_G'), 7);
    desc1.putInteger(cTID('HA_A'), -13);
    desc1.putInteger(cTID('HA_B'), -1);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 2);
    desc1.putInteger(cTID('SA_O'), 11);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), -49);
    desc1.putInteger(cTID('SA_A'), -17);
    desc1.putInteger(cTID('SA_B'), -16);
    desc1.putInteger(cTID('SA_P'), -44);
    desc1.putInteger(cTID('SA_M'), -40);
    desc1.putInteger(cTID('LA_R'), -9);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 8);
    desc1.putInteger(cTID('LA_B'), 40);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"05B7B40D19033341AB88F95FFEADC4C9\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"673248A93879F44CA8ABB64AD297F739\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"5F68843ACA872040BFCFD1D09306290A\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"6A84DBB001114A4A98E331F863F60603\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Landscape preset 19\"\n     crs:Amount=\"1\"\n     crs:UUID=\"29E779E3F87D794E94F538AAE6F796A2\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.3\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-12\"\n      crs:IncrementalTint=\"-2\"\n      crs:Exposure2012=\"+0.95\"\n      crs:Contrast2012=\"-16\"\n      crs:Highlights2012=\"-12\"\n      crs:Shadows2012=\"+17\"\n      crs:Whites2012=\"+29\"\n      crs:Blacks2012=\"-31\"\n      crs:Clarity2012=\"+10\"\n      crs:Vibrance=\"+2\"\n      crs:Saturation=\"+3\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"-26\"\n      crs:ParametricHighlights=\"+13\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"43\"\n      crs:SharpenRadius=\"+1.4\"\n      crs:SharpenDetail=\"36\"\n      crs:SharpenEdgeMasking=\"15\"\n      crs:LuminanceSmoothing=\"17\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"+7\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-2\"\n      crs:HueAdjustmentGreen=\"+7\"\n      crs:HueAdjustmentAqua=\"-13\"\n      crs:HueAdjustmentBlue=\"-1\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+2\"\n      crs:SaturationAdjustmentOrange=\"+11\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"-49\"\n      crs:SaturationAdjustmentAqua=\"-17\"\n      crs:SaturationAdjustmentBlue=\"-16\"\n      crs:SaturationAdjustmentPurple=\"-44\"\n      crs:SaturationAdjustmentMagenta=\"-40\"\n      crs:LuminanceAdjustmentRed=\"-9\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"+8\"\n      crs:LuminanceAdjustmentBlue=\"+40\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"46\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"05B7B40D19033341AB88F95FFEADC4C9\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"673248A93879F44CA8ABB64AD297F739\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"5F68843ACA872040BFCFD1D09306290A\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"6A84DBB001114A4A98E331F863F60603\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _19.main
//=========================================
//

_19.main = function () {
  _19();
};

_19.main();

// EOF

"TC3_19.jsx"
// EOF
