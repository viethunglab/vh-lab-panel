#target photoshop
//
// TuyenChon05.jsx
//

//
// Generated Tue Jan 11 2022 14:05:34 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 05 ==============
//
function _05() {
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
    desc1.putInteger(cTID('Temp'), -1);
    desc1.putInteger(cTID('Tint'), -5);
    desc1.putInteger(cTID('Hi12'), -65);
    desc1.putInteger(cTID('Sh12'), 53);
    desc1.putInteger(cTID('Wh12'), 2);
    desc1.putInteger(cTID('Bk12'), 9);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Vibr'), 3);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 19);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 12);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 5);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 36);
    desc1.putInteger(cTID('HA_G'), 36);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 19);
    desc1.putInteger(cTID('HA_P'), 4);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), -40);
    desc1.putInteger(cTID('SA_O'), -21);
    desc1.putInteger(cTID('SA_Y'), -17);
    desc1.putInteger(cTID('SA_G'), -44);
    desc1.putInteger(cTID('SA_A'), -30);
    desc1.putInteger(cTID('SA_B'), -28);
    desc1.putInteger(cTID('SA_P'), -10);
    desc1.putInteger(cTID('SA_M'), -9);
    desc1.putInteger(cTID('LA_R'), 22);
    desc1.putInteger(cTID('LA_O'), 32);
    desc1.putInteger(cTID('LA_Y'), -9);
    desc1.putInteger(cTID('LA_G'), 17);
    desc1.putInteger(cTID('LA_A'), 69);
    desc1.putInteger(cTID('LA_B'), 75);
    desc1.putInteger(cTID('LA_P'), 7);
    desc1.putInteger(cTID('LA_M'), 31);
    desc1.putInteger(cTID('STSH'), 51);
    desc1.putInteger(cTID('STSS'), 9);
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
    desc1.putInteger(cTID('AuCA'), 1);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('GRNA'), 23);
    desc1.putInteger(cTID('GRNS'), 22);
    desc1.putInteger(cTID('GRNF'), 31);
    desc1.putInteger(cTID('PCVA'), -3);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 22);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 40);
    desc1.putInteger(cTID('GSat'), -25);
    desc1.putInteger(cTID('BHue'), -35);
    desc1.putInteger(cTID('BSat'), -15);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(37);
    list1.putInteger(51);
    list1.putInteger(65);
    list1.putInteger(100);
    list1.putInteger(104);
    list1.putInteger(161);
    list1.putInteger(159);
    list1.putInteger(255);
    list1.putInteger(249);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(43);
    list2.putInteger(22);
    list2.putInteger(113);
    list2.putInteger(123);
    list2.putInteger(178);
    list2.putInteger(203);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(43);
    list3.putInteger(22);
    list3.putInteger(112);
    list3.putInteger(121);
    list3.putInteger(181);
    list3.putInteger(201);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(43);
    list4.putInteger(22);
    list4.putInteger(114);
    list4.putInteger(122);
    list4.putInteger(179);
    list4.putInteger(201);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:GradientBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.092596\"\n       crs:LocalShadows2012=\"0.162287\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.089844\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskValue=\"1.000000\"\n         crs:ZeroX=\"-0.369650\"\n         crs:ZeroY=\"0.543277\"\n         crs:FullX=\"1.098530\"\n         crs:FullY=\"0.049844\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"-0.365643\"\n       crs:LocalShadows2012=\"-0.121820\"\n       crs:LocalClarity2012=\"0.113372\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.069949\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskValue=\"1.000000\"\n         crs:ZeroX=\"1.285460\"\n         crs:ZeroY=\"0.727638\"\n         crs:FullX=\"-0.128480\"\n         crs:FullY=\"0.129315\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"-0.400000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalClarity2012=\"-0.200000\"\n       crs:LocalLuminanceNoise=\"0.300000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskValue=\"1.000000\"\n         crs:ZeroX=\"1.221030\"\n         crs:ZeroY=\"0.617902\"\n         crs:FullX=\"0.208564\"\n         crs:FullY=\"0.561788\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:GradientBasedCorrections>\n   <crs:CircularGradientBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"-0.106741\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskValue=\"1.000000\"\n         crs:Top=\"0.357969\"\n         crs:Left=\"0.324386\"\n         crs:Bottom=\"1.021470\"\n         crs:Right=\"0.543740\"\n         crs:Angle=\"0.000000\"\n         crs:Midpoint=\"+50\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"+50\"\n         crs:Flipped=\"true\"\n         crs:Version=\"+2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:CircularGradientBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"05\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"35BDDDE275725C4E96B7A9ADC0A6B30C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-1\"\n      crs:IncrementalTint=\"-5\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-65\"\n      crs:Shadows2012=\"+53\"\n      crs:Whites2012=\"+2\"\n      crs:Blacks2012=\"+9\"\n      crs:Clarity2012=\"-5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+3\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"19\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"12\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+5\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"+36\"\n      crs:HueAdjustmentGreen=\"+36\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"+19\"\n      crs:HueAdjustmentPurple=\"+4\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"-40\"\n      crs:SaturationAdjustmentOrange=\"-21\"\n      crs:SaturationAdjustmentYellow=\"-17\"\n      crs:SaturationAdjustmentGreen=\"-44\"\n      crs:SaturationAdjustmentAqua=\"-30\"\n      crs:SaturationAdjustmentBlue=\"-28\"\n      crs:SaturationAdjustmentPurple=\"-10\"\n      crs:SaturationAdjustmentMagenta=\"-9\"\n      crs:LuminanceAdjustmentRed=\"+22\"\n      crs:LuminanceAdjustmentOrange=\"+32\"\n      crs:LuminanceAdjustmentYellow=\"-9\"\n      crs:LuminanceAdjustmentGreen=\"+17\"\n      crs:LuminanceAdjustmentAqua=\"+69\"\n      crs:LuminanceAdjustmentBlue=\"+75\"\n      crs:LuminanceAdjustmentPurple=\"+7\"\n      crs:LuminanceAdjustmentMagenta=\"+31\"\n      crs:SplitToningShadowHue=\"51\"\n      crs:SplitToningShadowSaturation=\"9\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"23\"\n      crs:GrainSize=\"22\"\n      crs:GrainFrequency=\"31\"\n      crs:PostCropVignetteAmount=\"-3\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+22\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+40\"\n      crs:GreenSaturation=\"-25\"\n      crs:BlueHue=\"-35\"\n      crs:BlueSaturation=\"-15\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 37</rdf:li>\n       <rdf:li>51, 65</rdf:li>\n       <rdf:li>100, 104</rdf:li>\n       <rdf:li>161, 159</rdf:li>\n       <rdf:li>255, 249</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 22</rdf:li>\n       <rdf:li>113, 123</rdf:li>\n       <rdf:li>178, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 22</rdf:li>\n       <rdf:li>112, 121</rdf:li>\n       <rdf:li>181, 201</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 22</rdf:li>\n       <rdf:li>114, 122</rdf:li>\n       <rdf:li>179, 201</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:GradientBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.092596\"\n         crs:LocalShadows2012=\"0.162287\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.089844\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskValue=\"1.000000\"\n           crs:ZeroX=\"-0.369650\"\n           crs:ZeroY=\"0.543277\"\n           crs:FullX=\"1.098530\"\n           crs:FullY=\"0.049844\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"-0.365643\"\n         crs:LocalShadows2012=\"-0.121820\"\n         crs:LocalClarity2012=\"0.113372\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.069949\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskValue=\"1.000000\"\n           crs:ZeroX=\"1.285460\"\n           crs:ZeroY=\"0.727638\"\n           crs:FullX=\"-0.128480\"\n           crs:FullY=\"0.129315\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"-0.400000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalClarity2012=\"-0.200000\"\n         crs:LocalLuminanceNoise=\"0.300000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskValue=\"1.000000\"\n           crs:ZeroX=\"1.221030\"\n           crs:ZeroY=\"0.617902\"\n           crs:FullX=\"0.208564\"\n           crs:FullY=\"0.561788\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:GradientBasedCorrections>\n     <crs:CircularGradientBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"-0.106741\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskValue=\"1.000000\"\n           crs:Top=\"0.357969\"\n           crs:Left=\"0.324386\"\n           crs:Bottom=\"1.021470\"\n           crs:Right=\"0.543740\"\n           crs:Angle=\"0.000000\"\n           crs:Midpoint=\"+50\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"+50\"\n           crs:Flipped=\"true\"\n           crs:Version=\"+2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:CircularGradientBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _05.main
//=========================================
//

_05.main = function () {
  _05();
};

_05.main();

// EOF

"TuyenChon05.jsx"
// EOF
