#target photoshop
//
// _04.jsx
//

//
// Generated Tue Dec 14 2021 23:16:47 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 04 ==============
//
function _04() {
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
    desc1.putInteger(cTID('Temp'), -8);
    desc1.putInteger(cTID('Tint'), 1);
    desc1.putDouble(cTID('Ex12'), -0.05);
    desc1.putInteger(cTID('Cr12'), -26);
    desc1.putInteger(cTID('Hi12'), -36);
    desc1.putInteger(cTID('Sh12'), 10);
    desc1.putInteger(cTID('Wh12'), 21);
    desc1.putInteger(cTID('Bk12'), 40);
    desc1.putInteger(cTID('Cl12'), -1);
    desc1.putInteger(cTID('Dhze'), 30);
    desc1.putInteger(cTID('Vibr'), 37);
    desc1.putInteger(cTID('PC_S'), -36);
    desc1.putInteger(cTID('PC_D'), 15);
    desc1.putInteger(cTID('PC_L'), -8);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 70);
    desc1.putDouble(cTID('ShpR'), 1.5);
    desc1.putInteger(cTID('ShpD'), 20);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 24);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 52);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 14);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), -9);
    desc1.putInteger(cTID('HA_P'), -37);
    desc1.putInteger(cTID('HA_M'), 100);
    desc1.putInteger(cTID('SA_R'), -9);
    desc1.putInteger(cTID('SA_O'), -31);
    desc1.putInteger(cTID('SA_Y'), -58);
    desc1.putInteger(cTID('SA_G'), -48);
    desc1.putInteger(cTID('SA_A'), 0);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), -23);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 20);
    desc1.putInteger(cTID('LA_O'), 15);
    desc1.putInteger(cTID('LA_Y'), 26);
    desc1.putInteger(cTID('LA_G'), 25);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 10);
    desc1.putInteger(cTID('LA_P'), 31);
    desc1.putInteger(cTID('LA_M'), 29);
    desc1.putInteger(cTID('STSH'), 51);
    desc1.putInteger(cTID('STSS'), 18);
    desc1.putInteger(cTID('STHH'), 233);
    desc1.putInteger(cTID('STHS'), 14);
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
    desc1.putInteger(cTID('PerU'), 1);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), 20);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), -10);
    desc1.putInteger(cTID('BSat'), 100);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(11);
    list1.putInteger(0);
    list1.putInteger(63);
    list1.putInteger(63);
    list1.putInteger(113);
    list1.putInteger(114);
    list1.putInteger(183);
    list1.putInteger(184);
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
    desc1.putString(cTID('Upri'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"47.766311703\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"\n   crs:UprightTransform_0=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_1=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_2=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_3=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_4=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n   crs:UprightTransform_5=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('GuUr'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Màu Indoor Cle\"\n     crs:Amount=\"1\"\n     crs:UUID=\"11C2EDF225076DE99866941EF9A7471E\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+2\"\n      crs:IncrementalTint=\"-1\"\n      crs:Exposure2012=\"-0.05\"\n      crs:Contrast2012=\"-26\"\n      crs:Highlights2012=\"-36\"\n      crs:Shadows2012=\"+10\"\n      crs:Whites2012=\"+21\"\n      crs:Blacks2012=\"+40\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-1\"\n      crs:Dehaze=\"+30\"\n      crs:Vibrance=\"+37\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"-36\"\n      crs:ParametricDarks=\"+15\"\n      crs:ParametricLights=\"-8\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"70\"\n      crs:SharpenRadius=\"+1.5\"\n      crs:SharpenDetail=\"20\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"24\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"52\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+14\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"-9\"\n      crs:HueAdjustmentPurple=\"-37\"\n      crs:HueAdjustmentMagenta=\"+100\"\n      crs:SaturationAdjustmentRed=\"-9\"\n      crs:SaturationAdjustmentOrange=\"-31\"\n      crs:SaturationAdjustmentYellow=\"-58\"\n      crs:SaturationAdjustmentGreen=\"-48\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"-23\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+20\"\n      crs:LuminanceAdjustmentOrange=\"+15\"\n      crs:LuminanceAdjustmentYellow=\"+26\"\n      crs:LuminanceAdjustmentGreen=\"+25\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"+10\"\n      crs:LuminanceAdjustmentPurple=\"+31\"\n      crs:LuminanceAdjustmentMagenta=\"+29\"\n      crs:SplitToningShadowHue=\"51\"\n      crs:SplitToningShadowSaturation=\"18\"\n      crs:SplitToningHighlightHue=\"233\"\n      crs:SplitToningHighlightSaturation=\"14\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"1\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"+20\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"-10\"\n      crs:BlueSaturation=\"+100\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:UprightVersion=\"151388160\"\n      crs:UprightCenterMode=\"0\"\n      crs:UprightCenterNormX=\"0.5\"\n      crs:UprightCenterNormY=\"0.5\"\n      crs:UprightFocalMode=\"0\"\n      crs:UprightFocalLength35mm=\"47.766311703\"\n      crs:UprightPreview=\"False\"\n      crs:UprightTransformCount=\"6\"\n      crs:UprightTransform_0=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_1=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_2=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_3=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\"\n      crs:UprightTransform_4=\"1.000000000,0.000000000,0.000000000,0.000000000,1.000000000,0.000000000,0.000000000,0.000000000,1.000000000\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>11, 0</rdf:li>\n       <rdf:li>63, 63</rdf:li>\n       <rdf:li>113, 114</rdf:li>\n       <rdf:li>183, 184</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _04.main
//=========================================
//

_04.main = function () {
  _04();
};

_04.main();

// EOF

"_04.jsx"
// EOF
