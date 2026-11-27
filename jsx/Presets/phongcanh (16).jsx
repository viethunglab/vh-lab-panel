#target photoshop
//
// _07.jsx
//

//
// Generated Fri Jun 03 2022 13:00:39 GMT+0700
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
    desc1.putString(cTID('CrVe'), "14.3");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), 7);
    desc1.putInteger(cTID('Tint'), 5);
    desc1.putInteger(cTID('Cr12'), 17);
    desc1.putInteger(cTID('Hi12'), -29);
    desc1.putInteger(cTID('Sh12'), 52);
    desc1.putInteger(cTID('Wh12'), 5);
    desc1.putInteger(cTID('Bk12'), -12);
    desc1.putInteger(cTID('Cl12'), 5);
    desc1.putInteger(cTID('Vibr'), 21);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 28);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 129);
    desc1.putDouble(cTID('ShpR'), 0.5);
    desc1.putInteger(cTID('ShpD'), 26);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 17);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('AuCA'), 0);
    desc1.putInteger(cTID('DfPA'), 2);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 2);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('PCVA'), -7);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(33);
    list1.putInteger(17);
    list1.putInteger(82);
    list1.putInteger(65);
    list1.putInteger(118);
    list1.putInteger(109);
    list1.putInteger(192);
    list1.putInteger(202);
    list1.putInteger(237);
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
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"9FCAB22F5058E648A4B64F936E035CFC\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"D72BDA5A6B7F3144AD8AF3DD93ABA6E0\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"F9F94672C846C24F97CAA3B3DDD072FE\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"C31E7C1BC866BB47A63697F85BA8075A\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Landscape preset 07\"\n     crs:Amount=\"1\"\n     crs:UUID=\"E98B08935169CAD932FF737A607FBB42\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.3\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+7\"\n      crs:IncrementalTint=\"+5\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"+17\"\n      crs:Highlights2012=\"-29\"\n      crs:Shadows2012=\"+52\"\n      crs:Whites2012=\"+5\"\n      crs:Blacks2012=\"-12\"\n      crs:Clarity2012=\"+5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+21\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"+28\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"129\"\n      crs:SharpenRadius=\"+0.5\"\n      crs:SharpenDetail=\"26\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"17\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"-17\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"2\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"2\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-7\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>33, 17</rdf:li>\n       <rdf:li>82, 65</rdf:li>\n       <rdf:li>118, 109</rdf:li>\n       <rdf:li>192, 202</rdf:li>\n       <rdf:li>237, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"9FCAB22F5058E648A4B64F936E035CFC\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"D72BDA5A6B7F3144AD8AF3DD93ABA6E0\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"F9F94672C846C24F97CAA3B3DDD072FE\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"C31E7C1BC866BB47A63697F85BA8075A\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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
