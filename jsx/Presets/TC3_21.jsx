#target photoshop
//
// TC3_21.jsx
//

//
// Generated Sat Jun 11 2022 12:32:56 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 21 ==============
//
function _21() {
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
    desc1.putInteger(cTID('Temp'), -5);
    desc1.putInteger(cTID('Tint'), 0);
    desc1.putDouble(cTID('Ex12'), 0.48);
    desc1.putInteger(cTID('Hi12'), 43);
    desc1.putInteger(cTID('Sh12'), -24);
    desc1.putInteger(cTID('Wh12'), 33);
    desc1.putInteger(cTID('Cl12'), 38);
    desc1.putInteger(cTID('Vibr'), 21);
    desc1.putInteger(cTID('Strt'), -12);
    desc1.putInteger(cTID('PC_S'), 26);
    desc1.putInteger(cTID('PC_D'), -9);
    desc1.putInteger(cTID('PC_L'), -26);
    desc1.putInteger(cTID('PC_H'), 5);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 31);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -22);
    desc1.putInteger(cTID('HA_P'), 18);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 0);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 13);
    desc1.putInteger(cTID('SA_P'), -11);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), -11);
    desc1.putInteger(cTID('LA_P'), -11);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 17);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(27);
    list1.putInteger(13);
    list1.putInteger(54);
    list1.putInteger(65);
    list1.putInteger(84);
    list1.putInteger(103);
    list1.putInteger(108);
    list1.putInteger(140);
    list1.putInteger(157);
    list1.putInteger(180);
    list1.putInteger(198);
    list1.putInteger(205);
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
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"373C10862911B1429E9A9661F2F69031\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"7B6ACA3A9BE2B44492362E31A82245F5\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"2A67697721FC914599574326F827AE80\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"B4C8F50CA5FAB941B85D432A0332EC78\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Landscape preset 21\"\n     crs:Amount=\"1\"\n     crs:UUID=\"5DD3B7F1FCD95644A2CCB2B352B871BA\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.3\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-5\"\n      crs:IncrementalTint=\"0\"\n      crs:Exposure2012=\"+0.48\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"+43\"\n      crs:Shadows2012=\"-24\"\n      crs:Whites2012=\"+33\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"+38\"\n      crs:Vibrance=\"+21\"\n      crs:Saturation=\"-12\"\n      crs:ParametricShadows=\"+26\"\n      crs:ParametricDarks=\"-9\"\n      crs:ParametricLights=\"-26\"\n      crs:ParametricHighlights=\"+5\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"31\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-22\"\n      crs:HueAdjustmentPurple=\"+18\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"+13\"\n      crs:SaturationAdjustmentPurple=\"-11\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-11\"\n      crs:LuminanceAdjustmentPurple=\"-11\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"99\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"17\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>27, 13</rdf:li>\n       <rdf:li>54, 65</rdf:li>\n       <rdf:li>84, 103</rdf:li>\n       <rdf:li>108, 140</rdf:li>\n       <rdf:li>157, 180</rdf:li>\n       <rdf:li>198, 205</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"373C10862911B1429E9A9661F2F69031\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"7B6ACA3A9BE2B44492362E31A82245F5\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"2A67697721FC914599574326F827AE80\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"B4C8F50CA5FAB941B85D432A0332EC78\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _21.main
//=========================================
//

_21.main = function () {
  _21();
};

_21.main();

// EOF

"TC3_21.jsx"
// EOF
