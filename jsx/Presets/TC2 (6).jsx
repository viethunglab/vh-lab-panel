#target photoshop
//
// _6.jsx
//

//
// Generated Fri Feb 04 2022 12:43:25 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 6 ==============
//
function _6() {
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
    desc1.putInteger(cTID('Temp'), 28);
    desc1.putInteger(cTID('Tint'), 12);
    desc1.putDouble(cTID('Ex12'), 0.2);
    desc1.putInteger(cTID('Cr12'), -28);
    desc1.putInteger(cTID('Hi12'), -29);
    desc1.putInteger(cTID('Sh12'), 63);
    desc1.putInteger(cTID('Wh12'), -13);
    desc1.putInteger(cTID('Bk12'), -15);
    desc1.putInteger(cTID('Cl12'), 18);
    desc1.putInteger(cTID('Vibr'), 17);
    desc1.putInteger(cTID('Strt'), 1);
    desc1.putInteger(cTID('PC_S'), -44);
    desc1.putInteger(cTID('PC_D'), 8);
    desc1.putInteger(cTID('PC_L'), -20);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 70);
    desc1.putDouble(cTID('ShpR'), 1.8);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 26);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 49);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 10);
    desc1.putInteger(cTID('HA_O'), 5);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 10);
    desc1.putInteger(cTID('HA_B'), -28);
    desc1.putInteger(cTID('HA_P'), -84);
    desc1.putInteger(cTID('HA_M'), 20);
    desc1.putInteger(cTID('SA_R'), -5);
    desc1.putInteger(cTID('SA_O'), -6);
    desc1.putInteger(cTID('SA_Y'), -38);
    desc1.putInteger(cTID('SA_G'), -78);
    desc1.putInteger(cTID('SA_A'), -50);
    desc1.putInteger(cTID('SA_B'), -56);
    desc1.putInteger(cTID('SA_P'), -35);
    desc1.putInteger(cTID('SA_M'), -35);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), -7);
    desc1.putInteger(cTID('LA_Y'), -4);
    desc1.putInteger(cTID('LA_G'), 23);
    desc1.putInteger(cTID('LA_A'), -4);
    desc1.putInteger(cTID('LA_B'), -35);
    desc1.putInteger(cTID('LA_P'), -3);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 224);
    desc1.putInteger(cTID('STSS'), 14);
    desc1.putInteger(cTID('STHH'), 219);
    desc1.putInteger(cTID('STHS'), 26);
    desc1.putInteger(cTID('STB '), -13);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('VigA'), -22);
    desc1.putInteger(cTID('VigM'), 35);
    desc1.putInteger(cTID('BlkB'), -5);
    desc1.putInteger(cTID('RHue'), 9);
    desc1.putInteger(cTID('RSat'), -78);
    desc1.putInteger(cTID('GHue'), 36);
    desc1.putInteger(cTID('GSat'), 74);
    desc1.putInteger(cTID('BHue'), -11);
    desc1.putInteger(cTID('BSat'), 39);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(12);
    list1.putInteger(54);
    list1.putInteger(62);
    list1.putInteger(195);
    list1.putInteger(188);
    list1.putInteger(255);
    list1.putInteger(235);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(40);
    list2.putInteger(12);
    list2.putInteger(84);
    list2.putInteger(58);
    list2.putInteger(123);
    list2.putInteger(125);
    list2.putInteger(186);
    list2.putInteger(196);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(40);
    list3.putInteger(14);
    list3.putInteger(83);
    list3.putInteger(59);
    list3.putInteger(123);
    list3.putInteger(126);
    list3.putInteger(172);
    list3.putInteger(185);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(39);
    list4.putInteger(13);
    list4.putInteger(87);
    list4.putInteger(65);
    list4.putInteger(123);
    list4.putInteger(124);
    list4.putInteger(185);
    list4.putInteger(198);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('LCs '), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.100000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.035624\"\n          crs:Flow=\"0.903766\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.607319 0.440248</rdf:li>\n           <rdf:li>d 0.603793 0.449534</rdf:li>\n           <rdf:li>d 0.600267 0.458820</rdf:li>\n           <rdf:li>d 0.604289 0.449999</rdf:li>\n           <rdf:li>d 0.607798 0.440699</rdf:li>\n           <rdf:li>d 0.610752 0.430974</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM hàn seul\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"B645B461D50ACA40B551263C43234572\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+28\"\n      crs:IncrementalTint=\"+12\"\n      crs:Exposure2012=\"+0.20\"\n      crs:Contrast2012=\"-28\"\n      crs:Highlights2012=\"-29\"\n      crs:Shadows2012=\"+63\"\n      crs:Whites2012=\"-13\"\n      crs:Blacks2012=\"-15\"\n      crs:Clarity2012=\"+18\"\n      crs:Vibrance=\"+17\"\n      crs:Saturation=\"+1\"\n      crs:ParametricShadows=\"-44\"\n      crs:ParametricDarks=\"+8\"\n      crs:ParametricLights=\"-20\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"70\"\n      crs:SharpenRadius=\"+1.8\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"26\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"49\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:HueAdjustmentRed=\"+10\"\n      crs:HueAdjustmentOrange=\"+5\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"+10\"\n      crs:HueAdjustmentBlue=\"-28\"\n      crs:HueAdjustmentPurple=\"-84\"\n      crs:HueAdjustmentMagenta=\"+20\"\n      crs:SaturationAdjustmentRed=\"-5\"\n      crs:SaturationAdjustmentOrange=\"-6\"\n      crs:SaturationAdjustmentYellow=\"-38\"\n      crs:SaturationAdjustmentGreen=\"-78\"\n      crs:SaturationAdjustmentAqua=\"-50\"\n      crs:SaturationAdjustmentBlue=\"-56\"\n      crs:SaturationAdjustmentPurple=\"-35\"\n      crs:SaturationAdjustmentMagenta=\"-35\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"-7\"\n      crs:LuminanceAdjustmentYellow=\"-4\"\n      crs:LuminanceAdjustmentGreen=\"+23\"\n      crs:LuminanceAdjustmentAqua=\"-4\"\n      crs:LuminanceAdjustmentBlue=\"-35\"\n      crs:LuminanceAdjustmentPurple=\"-3\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"224\"\n      crs:SplitToningShadowSaturation=\"14\"\n      crs:SplitToningHighlightHue=\"219\"\n      crs:SplitToningHighlightSaturation=\"26\"\n      crs:SplitToningBalance=\"-13\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"-22\"\n      crs:VignetteMidpoint=\"35\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-5\"\n      crs:RedHue=\"+9\"\n      crs:RedSaturation=\"-78\"\n      crs:GreenHue=\"+36\"\n      crs:GreenSaturation=\"+74\"\n      crs:BlueHue=\"-11\"\n      crs:BlueSaturation=\"+39\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (Canon EF 16-35mm f/2.8 L II USM)\"\n      crs:LensProfileFilename=\"Canon EOS 5D Mark II (Canon EF 16-35mm f2.8 L II USM) - RAW.lcp\"\n      crs:LensProfileDigest=\"48EE268CEDE74DA97A614E37CE88D0AA\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"43\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 12</rdf:li>\n       <rdf:li>54, 62</rdf:li>\n       <rdf:li>195, 188</rdf:li>\n       <rdf:li>255, 235</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 12</rdf:li>\n       <rdf:li>84, 58</rdf:li>\n       <rdf:li>123, 125</rdf:li>\n       <rdf:li>186, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>40, 14</rdf:li>\n       <rdf:li>83, 59</rdf:li>\n       <rdf:li>123, 126</rdf:li>\n       <rdf:li>172, 185</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>39, 13</rdf:li>\n       <rdf:li>87, 65</rdf:li>\n       <rdf:li>123, 124</rdf:li>\n       <rdf:li>185, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:PaintBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.100000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.035624\"\n            crs:Flow=\"0.903766\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.607319 0.440248</rdf:li>\n             <rdf:li>d 0.603793 0.449534</rdf:li>\n             <rdf:li>d 0.600267 0.458820</rdf:li>\n             <rdf:li>d 0.604289 0.449999</rdf:li>\n             <rdf:li>d 0.607798 0.440699</rdf:li>\n             <rdf:li>d 0.610752 0.430974</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:PaintBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _6.main
//=========================================
//

_6.main = function () {
  _6();
};

_6.main();

// EOF

"_6.jsx"
// EOF
