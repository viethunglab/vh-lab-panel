#target photoshop
//
// TC3_05.jsx
//

//
// Generated Sat Jun 11 2022 12:27:39 GMT+0700
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
    desc1.putString(cTID('CrVe'), "14.3");
    desc1.putInteger(cTID('PrVN'), 5);
    desc1.putInteger(cTID('PrVe'), 184549376);
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Cst '));
    desc1.putInteger(cTID('Temp'), -2);
    desc1.putInteger(cTID('Tint'), 6);
    desc1.putDouble(cTID('Ex12'), 0.26);
    desc1.putInteger(cTID('Cr12'), 43);
    desc1.putInteger(cTID('Hi12'), 9);
    desc1.putInteger(cTID('Sh12'), 33);
    desc1.putInteger(cTID('Wh12'), -71);
    desc1.putInteger(cTID('Bk12'), 2);
    desc1.putInteger(cTID('Cl12'), 24);
    desc1.putInteger(cTID('Vibr'), 8);
    desc1.putInteger(cTID('Strt'), -2);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 48);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 60);
    desc1.putDouble(cTID('ShpR'), 1.5);
    desc1.putInteger(cTID('ShpD'), 40);
    desc1.putInteger(cTID('ShpM'), 30);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 5);
    desc1.putInteger(cTID('HA_O'), 5);
    desc1.putInteger(cTID('HA_Y'), -78);
    desc1.putInteger(cTID('HA_G'), -100);
    desc1.putInteger(cTID('HA_A'), 15);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), 20);
    desc1.putInteger(cTID('HA_M'), 30);
    desc1.putInteger(cTID('SA_R'), -20);
    desc1.putInteger(cTID('SA_O'), -33);
    desc1.putInteger(cTID('SA_Y'), -25);
    desc1.putInteger(cTID('SA_G'), -78);
    desc1.putInteger(cTID('SA_A'), -43);
    desc1.putInteger(cTID('SA_B'), -29);
    desc1.putInteger(cTID('SA_P'), -88);
    desc1.putInteger(cTID('SA_M'), -90);
    desc1.putInteger(cTID('LA_R'), -14);
    desc1.putInteger(cTID('LA_O'), -1);
    desc1.putInteger(cTID('LA_Y'), -31);
    desc1.putInteger(cTID('LA_G'), 7);
    desc1.putInteger(cTID('LA_A'), -19);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), -5);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 30);
    desc1.putInteger(cTID('STSS'), 19);
    desc1.putInteger(cTID('STHH'), 224);
    desc1.putInteger(cTID('STHS'), 5);
    desc1.putInteger(cTID('STB '), -21);
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
    desc1.putInteger(cTID('VigA'), -22);
    desc1.putInteger(cTID('VigM'), 23);
    desc1.putInteger(cTID('DfPA'), 3);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 3);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 70);
    desc1.putInteger(cTID('BlkB'), -4);
    desc1.putInteger(cTID('RHue'), 28);
    desc1.putInteger(cTID('RSat'), 57);
    desc1.putInteger(cTID('GHue'), 35);
    desc1.putInteger(cTID('GSat'), 5);
    desc1.putInteger(cTID('BHue'), -39);
    desc1.putInteger(cTID('BSat'), -20);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(20);
    list1.putInteger(65);
    list1.putInteger(66);
    list1.putInteger(193);
    list1.putInteger(189);
    list1.putInteger(255);
    list1.putInteger(223);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(40);
    list2.putInteger(9);
    list2.putInteger(76);
    list2.putInteger(46);
    list2.putInteger(126);
    list2.putInteger(122);
    list2.putInteger(182);
    list2.putInteger(204);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(36);
    list3.putInteger(10);
    list3.putInteger(76);
    list3.putInteger(46);
    list3.putInteger(124);
    list3.putInteger(122);
    list3.putInteger(181);
    list3.putInteger(201);
    list3.putInteger(219);
    list3.putInteger(230);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(36);
    list4.putInteger(10);
    list4.putInteger(76);
    list4.putInteger(46);
    list4.putInteger(122);
    list4.putInteger(118);
    list4.putInteger(183);
    list4.putInteger(206);
    list4.putInteger(222);
    list4.putInteger(235);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"0B24A70179BD264FA535271D087B3DA8\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/Gradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Linear Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"A56118A1795AC141AE5F0425FB7ABF6E\"\n         crs:MaskValue=\"1\"\n         crs:ZeroX=\"0\"\n         crs:ZeroY=\"0\"\n         crs:FullX=\"0\"\n         crs:FullY=\"0\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 2\"\n       crs:CorrectionSyncID=\"99D7FFF103F7C44FB9EA64635D9E2C38\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"0\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0\"\n       crs:LocalContrast2012=\"0\"\n       crs:LocalHighlights2012=\"0\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalWhites2012=\"0\"\n       crs:LocalBlacks2012=\"0\"\n       crs:LocalClarity2012=\"0\"\n       crs:LocalDehaze=\"0\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0\"\n       crs:LocalTint=\"0\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"0D96693CF9DF99469BBEAF9DAACD7C8B\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0\"\n         crs:Left=\"0\"\n         crs:Bottom=\"0\"\n         crs:Right=\"0\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"1\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"1\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"2\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.5\"\n       crs:LumMin=\"0\"\n       crs:LumMax=\"1\"\n       crs:LumFeather=\"0.5\"\n       crs:DepthMin=\"0\"\n       crs:DepthMax=\"1\"\n       crs:DepthFeather=\"0.5\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Landscape preset 05\"\n     crs:Amount=\"1\"\n     crs:UUID=\"7647BD006CFDE563E61F5A96DF0F4DD8\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.3\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-2\"\n      crs:IncrementalTint=\"+6\"\n      crs:Exposure2012=\"+0.26\"\n      crs:Contrast2012=\"+43\"\n      crs:Highlights2012=\"+9\"\n      crs:Shadows2012=\"+33\"\n      crs:Whites2012=\"-71\"\n      crs:Blacks2012=\"+2\"\n      crs:Clarity2012=\"+24\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+8\"\n      crs:Saturation=\"-2\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"48\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"60\"\n      crs:SharpenRadius=\"+1.5\"\n      crs:SharpenDetail=\"40\"\n      crs:SharpenEdgeMasking=\"30\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+5\"\n      crs:HueAdjustmentOrange=\"+5\"\n      crs:HueAdjustmentYellow=\"-78\"\n      crs:HueAdjustmentGreen=\"-100\"\n      crs:HueAdjustmentAqua=\"+15\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"+20\"\n      crs:HueAdjustmentMagenta=\"+30\"\n      crs:SaturationAdjustmentRed=\"-20\"\n      crs:SaturationAdjustmentOrange=\"-33\"\n      crs:SaturationAdjustmentYellow=\"-25\"\n      crs:SaturationAdjustmentGreen=\"-78\"\n      crs:SaturationAdjustmentAqua=\"-43\"\n      crs:SaturationAdjustmentBlue=\"-29\"\n      crs:SaturationAdjustmentPurple=\"-88\"\n      crs:SaturationAdjustmentMagenta=\"-90\"\n      crs:LuminanceAdjustmentRed=\"-14\"\n      crs:LuminanceAdjustmentOrange=\"-1\"\n      crs:LuminanceAdjustmentYellow=\"-31\"\n      crs:LuminanceAdjustmentGreen=\"+7\"\n      crs:LuminanceAdjustmentAqua=\"-19\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"-5\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"30\"\n      crs:SplitToningShadowSaturation=\"19\"\n      crs:SplitToningHighlightHue=\"224\"\n      crs:SplitToningHighlightSaturation=\"5\"\n      crs:SplitToningBalance=\"-21\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"-22\"\n      crs:VignetteMidpoint=\"23\"\n      crs:DefringePurpleAmount=\"3\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"3\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"70\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-4\"\n      crs:RedHue=\"+28\"\n      crs:RedSaturation=\"+57\"\n      crs:GreenHue=\"+35\"\n      crs:GreenSaturation=\"+5\"\n      crs:BlueHue=\"-39\"\n      crs:BlueSaturation=\"-20\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 20</rdf:li>\n       <rdf:li>65, 66</rdf:li>\n       <rdf:li>193, 189</rdf:li>\n       <rdf:li>255, 223</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 9</rdf:li>\n       <rdf:li>76, 46</rdf:li>\n       <rdf:li>126, 122</rdf:li>\n       <rdf:li>182, 204</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 10</rdf:li>\n       <rdf:li>76, 46</rdf:li>\n       <rdf:li>124, 122</rdf:li>\n       <rdf:li>181, 201</rdf:li>\n       <rdf:li>219, 230</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>36, 10</rdf:li>\n       <rdf:li>76, 46</rdf:li>\n       <rdf:li>122, 118</rdf:li>\n       <rdf:li>183, 206</rdf:li>\n       <rdf:li>222, 235</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"0B24A70179BD264FA535271D087B3DA8\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/Gradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Linear Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"A56118A1795AC141AE5F0425FB7ABF6E\"\n           crs:MaskValue=\"1\"\n           crs:ZeroX=\"0\"\n           crs:ZeroY=\"0\"\n           crs:FullX=\"0\"\n           crs:FullY=\"0\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 2\"\n         crs:CorrectionSyncID=\"99D7FFF103F7C44FB9EA64635D9E2C38\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"0\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0\"\n         crs:LocalContrast2012=\"0\"\n         crs:LocalHighlights2012=\"0\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalWhites2012=\"0\"\n         crs:LocalBlacks2012=\"0\"\n         crs:LocalClarity2012=\"0\"\n         crs:LocalDehaze=\"0\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0\"\n         crs:LocalTint=\"0\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"0D96693CF9DF99469BBEAF9DAACD7C8B\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0\"\n           crs:Left=\"0\"\n           crs:Bottom=\"0\"\n           crs:Right=\"0\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"1\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"1\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"2\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.5\"\n         crs:LumMin=\"0\"\n         crs:LumMax=\"1\"\n         crs:LumFeather=\"0.5\"\n         crs:DepthMin=\"0\"\n         crs:DepthMax=\"1\"\n         crs:DepthFeather=\"0.5\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
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

"TC3_05.jsx"
// EOF
