#target photoshop
//
// TC3_18.jsx
//

//
// Generated Sat Jun 11 2022 12:31:48 GMT+0700
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
    desc1.putString(cTID('CrVe'), "14.3");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -12);
    desc1.putInteger(cTID('Tint'), -14);
    desc1.putDouble(cTID('Ex12'), 1.07);
    desc1.putInteger(cTID('Cr12'), 7);
    desc1.putInteger(cTID('Hi12'), -33);
    desc1.putInteger(cTID('Sh12'), 33);
    desc1.putInteger(cTID('Wh12'), -10);
    desc1.putInteger(cTID('Bk12'), 45);
    desc1.putInteger(cTID('Vibr'), -2);
    desc1.putInteger(cTID('Strt'), -10);
    desc1.putInteger(cTID('PC_S'), -36);
    desc1.putInteger(cTID('PC_D'), 11);
    desc1.putInteger(cTID('PC_L'), 1);
    desc1.putInteger(cTID('PC_H'), -5);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 55);
    desc1.putDouble(cTID('ShpR'), 0.6);
    desc1.putInteger(cTID('ShpD'), 4);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 6);
    desc1.putInteger(cTID('LNRD'), 2);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 13);
    desc1.putInteger(cTID('CNRD'), 31);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 8);
    desc1.putInteger(cTID('HA_O'), -14);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 2);
    desc1.putInteger(cTID('HA_A'), 11);
    desc1.putInteger(cTID('HA_B'), -4);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), -3);
    desc1.putInteger(cTID('SA_R'), -42);
    desc1.putInteger(cTID('SA_O'), -17);
    desc1.putInteger(cTID('SA_Y'), -26);
    desc1.putInteger(cTID('SA_G'), -22);
    desc1.putInteger(cTID('SA_A'), -18);
    desc1.putInteger(cTID('SA_B'), 11);
    desc1.putInteger(cTID('SA_P'), -38);
    desc1.putInteger(cTID('SA_M'), -9);
    desc1.putInteger(cTID('LA_R'), -68);
    desc1.putInteger(cTID('LA_O'), -32);
    desc1.putInteger(cTID('LA_Y'), -12);
    desc1.putInteger(cTID('LA_G'), -9);
    desc1.putInteger(cTID('LA_A'), -29);
    desc1.putInteger(cTID('LA_B'), -9);
    desc1.putInteger(cTID('LA_P'), -4);
    desc1.putInteger(cTID('LA_M'), -7);
    desc1.putInteger(cTID('GRNA'), 8);
    desc1.putInteger(cTID('GRNS'), 13);
    desc1.putInteger(cTID('GRNF'), 40);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 46);
    desc1.putInteger(cTID('RSat'), -13);
    desc1.putInteger(cTID('GHue'), 45);
    desc1.putInteger(cTID('GSat'), -21);
    desc1.putInteger(cTID('BHue'), -15);
    desc1.putInteger(cTID('BSat'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(3);
    list1.putInteger(60);
    list1.putInteger(50);
    list1.putInteger(133);
    list1.putInteger(116);
    list1.putInteger(182);
    list1.putInteger(167);
    list1.putInteger(255);
    list1.putInteger(242);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(20);
    list2.putInteger(4);
    list2.putInteger(42);
    list2.putInteger(14);
    list2.putInteger(63);
    list2.putInteger(32);
    list2.putInteger(80);
    list2.putInteger(53);
    list2.putInteger(110);
    list2.putInteger(101);
    list2.putInteger(126);
    list2.putInteger(127);
    list2.putInteger(155);
    list2.putInteger(166);
    list2.putInteger(182);
    list2.putInteger(195);
    list2.putInteger(209);
    list2.putInteger(219);
    list2.putInteger(233);
    list2.putInteger(238);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(42);
    list3.putInteger(15);
    list3.putInteger(79);
    list3.putInteger(53);
    list3.putInteger(105);
    list3.putInteger(95);
    list3.putInteger(124);
    list3.putInteger(126);
    list3.putInteger(145);
    list3.putInteger(155);
    list3.putInteger(181);
    list3.putInteger(196);
    list3.putInteger(210);
    list3.putInteger(221);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(38);
    list4.putInteger(14);
    list4.putInteger(62);
    list4.putInteger(33);
    list4.putInteger(80);
    list4.putInteger(54);
    list4.putInteger(105);
    list4.putInteger(93);
    list4.putInteger(122);
    list4.putInteger(122);
    list4.putInteger(144);
    list4.putInteger(156);
    list4.putInteger(171);
    list4.putInteger(192);
    list4.putInteger(191);
    list4.putInteger(211);
    list4.putInteger(224);
    list4.putInteger(237);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"F57647A8103E33498EA29E831FDCFB4B\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"95DBEA7538B8244E9ECE838B66000FC2\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"28F0725AD068704C9C5C94BFF5E05AE5\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"FA4EA19B1A84DC4FAB21F62B958A8EFF\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Landscape preset 18\"\n     crs:Amount=\"1\"\n     crs:UUID=\"A0D1CA58A35BC64785C21B0028A31B1C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.3\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-12\"\n      crs:IncrementalTint=\"-14\"\n      crs:Exposure2012=\"+1.07\"\n      crs:Contrast2012=\"+7\"\n      crs:Highlights2012=\"-33\"\n      crs:Shadows2012=\"+33\"\n      crs:Whites2012=\"-10\"\n      crs:Blacks2012=\"+45\"\n      crs:Clarity2012=\"0\"\n      crs:Vibrance=\"-2\"\n      crs:Saturation=\"-10\"\n      crs:ParametricShadows=\"-36\"\n      crs:ParametricDarks=\"+11\"\n      crs:ParametricLights=\"+1\"\n      crs:ParametricHighlights=\"-5\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"55\"\n      crs:SharpenRadius=\"+0.6\"\n      crs:SharpenDetail=\"4\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"6\"\n      crs:LuminanceNoiseReductionDetail=\"2\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"13\"\n      crs:ColorNoiseReductionDetail=\"31\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+8\"\n      crs:HueAdjustmentOrange=\"-14\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+2\"\n      crs:HueAdjustmentAqua=\"+11\"\n      crs:HueAdjustmentBlue=\"-4\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"-3\"\n      crs:SaturationAdjustmentRed=\"-42\"\n      crs:SaturationAdjustmentOrange=\"-17\"\n      crs:SaturationAdjustmentYellow=\"-26\"\n      crs:SaturationAdjustmentGreen=\"-22\"\n      crs:SaturationAdjustmentAqua=\"-18\"\n      crs:SaturationAdjustmentBlue=\"+11\"\n      crs:SaturationAdjustmentPurple=\"-38\"\n      crs:SaturationAdjustmentMagenta=\"-9\"\n      crs:LuminanceAdjustmentRed=\"-68\"\n      crs:LuminanceAdjustmentOrange=\"-32\"\n      crs:LuminanceAdjustmentYellow=\"-12\"\n      crs:LuminanceAdjustmentGreen=\"-9\"\n      crs:LuminanceAdjustmentAqua=\"-29\"\n      crs:LuminanceAdjustmentBlue=\"-9\"\n      crs:LuminanceAdjustmentPurple=\"-4\"\n      crs:LuminanceAdjustmentMagenta=\"-7\"\n      crs:SplitToningShadowHue=\"200\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"8\"\n      crs:GrainSize=\"13\"\n      crs:GrainFrequency=\"40\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+46\"\n      crs:RedSaturation=\"-13\"\n      crs:GreenHue=\"+45\"\n      crs:GreenSaturation=\"-21\"\n      crs:BlueHue=\"-15\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 3</rdf:li>\n       <rdf:li>60, 50</rdf:li>\n       <rdf:li>133, 116</rdf:li>\n       <rdf:li>182, 167</rdf:li>\n       <rdf:li>255, 242</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>20, 4</rdf:li>\n       <rdf:li>42, 14</rdf:li>\n       <rdf:li>63, 32</rdf:li>\n       <rdf:li>80, 53</rdf:li>\n       <rdf:li>110, 101</rdf:li>\n       <rdf:li>126, 127</rdf:li>\n       <rdf:li>155, 166</rdf:li>\n       <rdf:li>182, 195</rdf:li>\n       <rdf:li>209, 219</rdf:li>\n       <rdf:li>233, 238</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>42, 15</rdf:li>\n       <rdf:li>79, 53</rdf:li>\n       <rdf:li>105, 95</rdf:li>\n       <rdf:li>124, 126</rdf:li>\n       <rdf:li>145, 155</rdf:li>\n       <rdf:li>181, 196</rdf:li>\n       <rdf:li>210, 221</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>38, 14</rdf:li>\n       <rdf:li>62, 33</rdf:li>\n       <rdf:li>80, 54</rdf:li>\n       <rdf:li>105, 93</rdf:li>\n       <rdf:li>122, 122</rdf:li>\n       <rdf:li>144, 156</rdf:li>\n       <rdf:li>171, 192</rdf:li>\n       <rdf:li>191, 211</rdf:li>\n       <rdf:li>224, 237</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"F57647A8103E33498EA29E831FDCFB4B\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"95DBEA7538B8244E9ECE838B66000FC2\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"28F0725AD068704C9C5C94BFF5E05AE5\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"FA4EA19B1A84DC4FAB21F62B958A8EFF\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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

"TC3_18.jsx"
// EOF
