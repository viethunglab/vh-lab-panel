#target photoshop
//
// _21.jsx
//

//
// Generated Tue Dec 14 2021 13:44:16 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 21 ==============
//
function _21() {
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
    desc1.putInteger(cTID('Cr12'), -30);
    desc1.putInteger(cTID('Hi12'), -30);
    desc1.putInteger(cTID('Sh12'), -26);
    desc1.putInteger(cTID('Wh12'), -17);
    desc1.putInteger(cTID('Bk12'), 44);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Vibr'), -10);
    desc1.putInteger(cTID('Strt'), -25);
    desc1.putInteger(cTID('HA_R'), 32);
    desc1.putInteger(cTID('HA_O'), -21);
    desc1.putInteger(cTID('HA_Y'), -14);
    desc1.putInteger(cTID('HA_G'), 27);
    desc1.putInteger(cTID('HA_A'), -40);
    desc1.putInteger(cTID('HA_B'), -20);
    desc1.putInteger(cTID('HA_P'), 7);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 14);
    desc1.putInteger(cTID('SA_O'), 22);
    desc1.putInteger(cTID('SA_Y'), -12);
    desc1.putInteger(cTID('SA_G'), -24);
    desc1.putInteger(cTID('SA_A'), -41);
    desc1.putInteger(cTID('SA_B'), -59);
    desc1.putInteger(cTID('SA_P'), -89);
    desc1.putInteger(cTID('SA_M'), -88);
    desc1.putInteger(cTID('LA_R'), -7);
    desc1.putInteger(cTID('LA_O'), 50);
    desc1.putInteger(cTID('LA_Y'), 25);
    desc1.putInteger(cTID('LA_G'), -56);
    desc1.putInteger(cTID('LA_A'), -20);
    desc1.putInteger(cTID('LA_B'), -25);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), -8);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 198);
    desc1.putInteger(cTID('STHS'), 6);
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
    desc1.putInteger(cTID('GRNA'), 20);
    desc1.putInteger(cTID('GRNS'), 89);
    desc1.putInteger(cTID('GRNF'), 98);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(64);
    list1.putInteger(124);
    list1.putInteger(121);
    list1.putInteger(195);
    list1.putInteger(178);
    list1.putInteger(255);
    list1.putInteger(223);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(5);
    list2.putInteger(48);
    list2.putInteger(53);
    list2.putInteger(91);
    list2.putInteger(96);
    list2.putInteger(137);
    list2.putInteger(142);
    list2.putInteger(197);
    list2.putInteger(202);
    list2.putInteger(255);
    list2.putInteger(240);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(18);
    list3.putInteger(74);
    list3.putInteger(66);
    list3.putInteger(115);
    list3.putInteger(116);
    list3.putInteger(171);
    list3.putInteger(181);
    list3.putInteger(248);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(26);
    list4.putInteger(1);
    list4.putInteger(77);
    list4.putInteger(39);
    list4.putInteger(111);
    list4.putInteger(96);
    list4.putInteger(138);
    list4.putInteger(128);
    list4.putInteger(169);
    list4.putInteger(163);
    list4.putInteger(203);
    list4.putInteger(193);
    list4.putInteger(255);
    list4.putInteger(244);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:MaskGroupBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1\"\n       crs:CorrectionActive=\"true\"\n       crs:CorrectionName=\"Mask 1\"\n       crs:CorrectionSyncID=\"47BD21E3EF88B649A3CF6688A74B3BCE\"\n       crs:LocalExposure=\"0\"\n       crs:LocalSaturation=\"0\"\n       crs:LocalContrast=\"0\"\n       crs:LocalClarity=\"0\"\n       crs:LocalSharpness=\"0\"\n       crs:LocalBrightness=\"0\"\n       crs:LocalToningHue=\"240\"\n       crs:LocalToningSaturation=\"0\"\n       crs:LocalExposure2012=\"0.0535\"\n       crs:LocalContrast2012=\"-0.10714\"\n       crs:LocalHighlights2012=\"0.08929\"\n       crs:LocalShadows2012=\"0\"\n       crs:LocalClarity2012=\"-0.08036\"\n       crs:LocalLuminanceNoise=\"0\"\n       crs:LocalMoire=\"0\"\n       crs:LocalDefringe=\"0\"\n       crs:LocalTemperature=\"0.17857\"\n       crs:LocalTint=\"0.10714\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li\n         crs:What=\"Mask/CircularGradient\"\n         crs:MaskActive=\"true\"\n         crs:MaskName=\"Radial Gradient 1\"\n         crs:MaskBlendMode=\"0\"\n         crs:MaskInverted=\"false\"\n         crs:MaskSyncID=\"FB8E72146B58B84CAB409A792790353A\"\n         crs:MaskValue=\"1\"\n         crs:Top=\"0.056366\"\n         crs:Left=\"0.050602\"\n         crs:Bottom=\"0.943635\"\n         crs:Right=\"0.961446\"\n         crs:Angle=\"0\"\n         crs:Midpoint=\"50\"\n         crs:Roundness=\"0\"\n         crs:Feather=\"58\"\n         crs:Flipped=\"true\"\n         crs:Version=\"2\"/>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:MaskGroupBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"bộ màu film  (13)\"\n     crs:Amount=\"1\"\n     crs:UUID=\"66D0A43EA34F17EF16E8315C8EF1D6C9\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:CompatibleVersion=\"234881024\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"-30\"\n      crs:Highlights2012=\"-30\"\n      crs:Shadows2012=\"-26\"\n      crs:Whites2012=\"-17\"\n      crs:Blacks2012=\"+44\"\n      crs:Clarity2012=\"-5\"\n      crs:Vibrance=\"-10\"\n      crs:Saturation=\"-25\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"0\"\n      crs:HueAdjustmentRed=\"+32\"\n      crs:HueAdjustmentOrange=\"-21\"\n      crs:HueAdjustmentYellow=\"-14\"\n      crs:HueAdjustmentGreen=\"+27\"\n      crs:HueAdjustmentAqua=\"-40\"\n      crs:HueAdjustmentBlue=\"-20\"\n      crs:HueAdjustmentPurple=\"+7\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+14\"\n      crs:SaturationAdjustmentOrange=\"+22\"\n      crs:SaturationAdjustmentYellow=\"-12\"\n      crs:SaturationAdjustmentGreen=\"-24\"\n      crs:SaturationAdjustmentAqua=\"-41\"\n      crs:SaturationAdjustmentBlue=\"-59\"\n      crs:SaturationAdjustmentPurple=\"-89\"\n      crs:SaturationAdjustmentMagenta=\"-88\"\n      crs:LuminanceAdjustmentRed=\"-7\"\n      crs:LuminanceAdjustmentOrange=\"+50\"\n      crs:LuminanceAdjustmentYellow=\"+25\"\n      crs:LuminanceAdjustmentGreen=\"-56\"\n      crs:LuminanceAdjustmentAqua=\"-20\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"-8\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"198\"\n      crs:SplitToningHighlightSaturation=\"6\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"20\"\n      crs:GrainSize=\"89\"\n      crs:GrainFrequency=\"98\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 64</rdf:li>\n       <rdf:li>124, 121</rdf:li>\n       <rdf:li>195, 178</rdf:li>\n       <rdf:li>255, 223</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 5</rdf:li>\n       <rdf:li>48, 53</rdf:li>\n       <rdf:li>91, 96</rdf:li>\n       <rdf:li>137, 142</rdf:li>\n       <rdf:li>197, 202</rdf:li>\n       <rdf:li>255, 240</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 18</rdf:li>\n       <rdf:li>74, 66</rdf:li>\n       <rdf:li>115, 116</rdf:li>\n       <rdf:li>171, 181</rdf:li>\n       <rdf:li>248, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>26, 1</rdf:li>\n       <rdf:li>77, 39</rdf:li>\n       <rdf:li>111, 96</rdf:li>\n       <rdf:li>138, 128</rdf:li>\n       <rdf:li>169, 163</rdf:li>\n       <rdf:li>203, 193</rdf:li>\n       <rdf:li>255, 244</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:MaskGroupBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1\"\n         crs:CorrectionActive=\"true\"\n         crs:CorrectionName=\"Mask 1\"\n         crs:CorrectionSyncID=\"47BD21E3EF88B649A3CF6688A74B3BCE\"\n         crs:LocalExposure=\"0\"\n         crs:LocalSaturation=\"0\"\n         crs:LocalContrast=\"0\"\n         crs:LocalClarity=\"0\"\n         crs:LocalSharpness=\"0\"\n         crs:LocalBrightness=\"0\"\n         crs:LocalToningHue=\"240\"\n         crs:LocalToningSaturation=\"0\"\n         crs:LocalExposure2012=\"0.0535\"\n         crs:LocalContrast2012=\"-0.10714\"\n         crs:LocalHighlights2012=\"0.08929\"\n         crs:LocalShadows2012=\"0\"\n         crs:LocalClarity2012=\"-0.08036\"\n         crs:LocalLuminanceNoise=\"0\"\n         crs:LocalMoire=\"0\"\n         crs:LocalDefringe=\"0\"\n         crs:LocalTemperature=\"0.17857\"\n         crs:LocalTint=\"0.10714\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li\n           crs:What=\"Mask/CircularGradient\"\n           crs:MaskActive=\"true\"\n           crs:MaskName=\"Radial Gradient 1\"\n           crs:MaskBlendMode=\"0\"\n           crs:MaskInverted=\"false\"\n           crs:MaskSyncID=\"FB8E72146B58B84CAB409A792790353A\"\n           crs:MaskValue=\"1\"\n           crs:Top=\"0.056366\"\n           crs:Left=\"0.050602\"\n           crs:Bottom=\"0.943635\"\n           crs:Right=\"0.961446\"\n           crs:Angle=\"0\"\n           crs:Midpoint=\"50\"\n           crs:Roundness=\"0\"\n           crs:Feather=\"58\"\n           crs:Flipped=\"true\"\n           crs:Version=\"2\"/>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:MaskGroupBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
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

"_21.jsx"
// EOF
