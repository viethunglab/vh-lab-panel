#target photoshop
//
// _19.jsx
//

//
// Generated Tue Dec 14 2021 23:20:02 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 19 ==============
//
function _19() {
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
    desc1.putDouble(cTID('Ex12'), 0.33);
    desc1.putInteger(cTID('Hi12'), -36);
    desc1.putInteger(cTID('Sh12'), 13);
    desc1.putInteger(cTID('Bk12'), 13);
    desc1.putInteger(cTID('Vibr'), 14);
    desc1.putInteger(cTID('Shrp'), 25);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 25);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 15);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 4);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), -12);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 13);
    desc1.putInteger(cTID('LA_O'), 43);
    desc1.putInteger(cTID('LA_Y'), 21);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(20);
    list1.putInteger(94);
    list1.putInteger(105);
    list1.putInteger(175);
    list1.putInteger(182);
    list1.putInteger(255);
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
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"2A9FD8731EE3314BA7DCDB2E2D488EE7\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"2FB36651A6F4C5499150FADE3618057F\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"8E73E0AA5F28614F9ED32914EE262045\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"EFEFF1DB1F2E5E4F851B928C437F0EFD\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_103\"\n     crs:Amount=\"1\"\n     crs:UUID=\"0D37E72A70CCCE44BE775DB21BB69856\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.33\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-36\"\n      crs:Shadows2012=\"+13\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"+13\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+14\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"25\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"25\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"15\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+4\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-12\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+13\"\n      crs:LuminanceAdjustmentOrange=\"+43\"\n      crs:LuminanceAdjustmentYellow=\"+21\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"215\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 20</rdf:li>\n       <rdf:li>94, 105</rdf:li>\n       <rdf:li>175, 182</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"2A9FD8731EE3314BA7DCDB2E2D488EE7\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"2FB36651A6F4C5499150FADE3618057F\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"8E73E0AA5F28614F9ED32914EE262045\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"EFEFF1DB1F2E5E4F851B928C437F0EFD\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
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

"_19.jsx"
// EOF
