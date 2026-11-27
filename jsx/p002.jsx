#target photoshop
//
// _002.jsx
//

//
// Generated Sat Dec 04 2021 11:48:02 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 002 ==============
//
function _002() {
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
    desc1.putInteger(cTID('Temp'), 6);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), 1);
    desc1.putInteger(cTID('Cr12'), -12);
    desc1.putInteger(cTID('Hi12'), -81);
    desc1.putInteger(cTID('Sh12'), -5);
    desc1.putInteger(cTID('Wh12'), -62);
    desc1.putInteger(cTID('Bk12'), -17);
    desc1.putInteger(cTID('Cl12'), -19);
    desc1.putInteger(cTID('Dhze'), 11);
    desc1.putInteger(cTID('Vibr'), 38);
    desc1.putInteger(cTID('Strt'), -30);
    desc1.putInteger(cTID('PC_S'), -24);
    desc1.putInteger(cTID('PC_D'), 31);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 71);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 25);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 18);
    desc1.putInteger(cTID('HA_O'), -5);
    desc1.putInteger(cTID('HA_Y'), -20);
    desc1.putInteger(cTID('HA_G'), -16);
    desc1.putInteger(cTID('HA_A'), 89);
    desc1.putInteger(cTID('HA_B'), 7);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -14);
    desc1.putInteger(cTID('SA_O'), -15);
    desc1.putInteger(cTID('SA_Y'), -29);
    desc1.putInteger(cTID('SA_G'), -56);
    desc1.putInteger(cTID('SA_A'), 18);
    desc1.putInteger(cTID('SA_B'), -71);
    desc1.putInteger(cTID('SA_P'), -28);
    desc1.putInteger(cTID('SA_M'), -21);
    desc1.putInteger(cTID('LA_R'), -10);
    desc1.putInteger(cTID('LA_O'), 3);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), -74);
    desc1.putInteger(cTID('LA_A'), -32);
    desc1.putInteger(cTID('LA_B'), -35);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 205);
    desc1.putInteger(cTID('STHS'), 12);
    desc1.putInteger(cTID('STB '), 27);
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
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('DfPA'), 5);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('PerU'), 1);
    desc1.putInteger(cTID('BlkB'), 10);
    desc1.putInteger(cTID('RHue'), 11);
    desc1.putInteger(cTID('RSat'), 25);
    desc1.putInteger(cTID('GHue'), 21);
    desc1.putInteger(cTID('GSat'), 6);
    desc1.putInteger(cTID('BHue'), 4);
    desc1.putInteger(cTID('BSat'), 61);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(64);
    list1.putInteger(58);
    list1.putInteger(188);
    list1.putInteger(191);
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
    desc1.putInteger(cTID('LPSe'), 0);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Upri'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"84.909758141\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"\n   crs:UprightTransform_0=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_1=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_2=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_3=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_4=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_5=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('GuUr'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Con Sông Quê 2\"\n     crs:Amount=\"1\"\n     crs:UUID=\"3697FC164E7A1B83A7F3BC6886567982\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+6\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"+1.00\"\n      crs:Contrast2012=\"-12\"\n      crs:Highlights2012=\"-81\"\n      crs:Shadows2012=\"-5\"\n      crs:Whites2012=\"-62\"\n      crs:Blacks2012=\"-17\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-19\"\n      crs:Dehaze=\"+11\"\n      crs:Vibrance=\"+38\"\n      crs:Saturation=\"-30\"\n      crs:ParametricShadows=\"-24\"\n      crs:ParametricDarks=\"+31\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"71\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"25\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+18\"\n      crs:HueAdjustmentOrange=\"-5\"\n      crs:HueAdjustmentYellow=\"-20\"\n      crs:HueAdjustmentGreen=\"-16\"\n      crs:HueAdjustmentAqua=\"+89\"\n      crs:HueAdjustmentBlue=\"+7\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-14\"\n      crs:SaturationAdjustmentOrange=\"-15\"\n      crs:SaturationAdjustmentYellow=\"-29\"\n      crs:SaturationAdjustmentGreen=\"-56\"\n      crs:SaturationAdjustmentAqua=\"+18\"\n      crs:SaturationAdjustmentBlue=\"-71\"\n      crs:SaturationAdjustmentPurple=\"-28\"\n      crs:SaturationAdjustmentMagenta=\"-21\"\n      crs:LuminanceAdjustmentRed=\"-10\"\n      crs:LuminanceAdjustmentOrange=\"+3\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"-74\"\n      crs:LuminanceAdjustmentAqua=\"-32\"\n      crs:LuminanceAdjustmentBlue=\"-35\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"205\"\n      crs:SplitToningHighlightSaturation=\"12\"\n      crs:SplitToningBalance=\"+27\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"5\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"1\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+10\"\n      crs:RedHue=\"+11\"\n      crs:RedSaturation=\"+25\"\n      crs:GreenHue=\"+21\"\n      crs:GreenSaturation=\"+6\"\n      crs:BlueHue=\"+4\"\n      crs:BlueSaturation=\"+61\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\"\n      crs:UprightVersion=\"151388160\"\n      crs:UprightCenterMode=\"0\"\n      crs:UprightCenterNormX=\"0.5\"\n      crs:UprightCenterNormY=\"0.5\"\n      crs:UprightFocalMode=\"0\"\n      crs:UprightFocalLength35mm=\"84.909758141\"\n      crs:UprightPreview=\"False\"\n      crs:UprightTransformCount=\"6\"\n      crs:UprightTransform_0=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_1=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_2=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_3=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_4=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>64, 58</rdf:li>\n       <rdf:li>188, 191</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _002.main
//=========================================
//

_002.main = function () {
  _002();
};

_002.main();

// EOF

"_002.jsx"
// EOF
