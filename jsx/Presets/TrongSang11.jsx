#target photoshop
//
// _11.jsx
//

//
// Generated Tue Dec 14 2021 23:18:13 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 11 ==============
//
function _11() {
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
    desc1.putInteger(cTID('Temp'), 1);
    desc1.putInteger(cTID('Tint'), 21);
    desc1.putDouble(cTID('Ex12'), 0.56);
    desc1.putInteger(cTID('Cr12'), 23);
    desc1.putInteger(cTID('Hi12'), -57);
    desc1.putInteger(cTID('Sh12'), 79);
    desc1.putInteger(cTID('Wh12'), -66);
    desc1.putInteger(cTID('Bk12'), 51);
    desc1.putInteger(cTID('Vibr'), 54);
    desc1.putInteger(cTID('Strt'), -10);
    desc1.putInteger(cTID('PC_S'), -32);
    desc1.putInteger(cTID('PC_D'), 22);
    desc1.putInteger(cTID('PC_L'), -9);
    desc1.putInteger(cTID('PC_H'), -33);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 96);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 30);
    desc1.putInteger(cTID('HA_O'), -26);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 0);
    desc1.putInteger(cTID('HA_A'), 0);
    desc1.putInteger(cTID('HA_B'), 0);
    desc1.putInteger(cTID('HA_P'), -100);
    desc1.putInteger(cTID('HA_M'), 100);
    desc1.putInteger(cTID('SA_R'), -28);
    desc1.putInteger(cTID('SA_O'), -51);
    desc1.putInteger(cTID('SA_Y'), -14);
    desc1.putInteger(cTID('SA_G'), -100);
    desc1.putInteger(cTID('SA_A'), -100);
    desc1.putInteger(cTID('SA_B'), -100);
    desc1.putInteger(cTID('SA_P'), -100);
    desc1.putInteger(cTID('SA_M'), 7);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 13);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), 0);
    desc1.putInteger(cTID('LA_A'), 20);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 1);
    desc1.putInteger(cTID('LA_M'), -3);
    desc1.putInteger(cTID('STSH'), 37);
    desc1.putInteger(cTID('STSS'), 22);
    desc1.putInteger(cTID('STHH'), 215);
    desc1.putInteger(cTID('STHS'), 12);
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
    desc1.putInteger(cTID('LPEn'), 1);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), -7);
    desc1.putInteger(cTID('RSat'), 0);
    desc1.putInteger(cTID('GHue'), -27);
    desc1.putInteger(cTID('GSat'), 5);
    desc1.putInteger(cTID('BHue'), -5);
    desc1.putInteger(cTID('BSat'), -10);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(43);
    list1.putInteger(29);
    list1.putInteger(32);
    list1.putInteger(84);
    list1.putInteger(75);
    list1.putInteger(135);
    list1.putInteger(137);
    list1.putInteger(202);
    list1.putInteger(201);
    list1.putInteger(255);
    list1.putInteger(251);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(38);
    list2.putInteger(8);
    list2.putInteger(71);
    list2.putInteger(43);
    list2.putInteger(98);
    list2.putInteger(88);
    list2.putInteger(144);
    list2.putInteger(166);
    list2.putInteger(197);
    list2.putInteger(220);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(28);
    list3.putInteger(12);
    list3.putInteger(63);
    list3.putInteger(38);
    list3.putInteger(92);
    list3.putInteger(82);
    list3.putInteger(146);
    list3.putInteger(163);
    list3.putInteger(183);
    list3.putInteger(204);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(25);
    list4.putInteger(41);
    list4.putInteger(87);
    list4.putInteger(83);
    list4.putInteger(149);
    list4.putInteger(170);
    list4.putInteger(200);
    list4.putInteger(220);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 0);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Màu Phóng Sự Cưới TQ - 08\"\n     crs:Amount=\"1\"\n     crs:UUID=\"70AC393BE73B0B46B1400FA864FED224\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+1\"\n      crs:IncrementalTint=\"+21\"\n      crs:Exposure2012=\"+0.56\"\n      crs:Contrast2012=\"+23\"\n      crs:Highlights2012=\"-57\"\n      crs:Shadows2012=\"+79\"\n      crs:Whites2012=\"-66\"\n      crs:Blacks2012=\"+51\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+54\"\n      crs:Saturation=\"-10\"\n      crs:ParametricShadows=\"-32\"\n      crs:ParametricDarks=\"+22\"\n      crs:ParametricLights=\"-9\"\n      crs:ParametricHighlights=\"-33\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"96\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+30\"\n      crs:HueAdjustmentOrange=\"-26\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"-100\"\n      crs:HueAdjustmentMagenta=\"+100\"\n      crs:SaturationAdjustmentRed=\"-28\"\n      crs:SaturationAdjustmentOrange=\"-51\"\n      crs:SaturationAdjustmentYellow=\"-14\"\n      crs:SaturationAdjustmentGreen=\"-100\"\n      crs:SaturationAdjustmentAqua=\"-100\"\n      crs:SaturationAdjustmentBlue=\"-100\"\n      crs:SaturationAdjustmentPurple=\"-100\"\n      crs:SaturationAdjustmentMagenta=\"+7\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+13\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"+20\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"+1\"\n      crs:LuminanceAdjustmentMagenta=\"-3\"\n      crs:SplitToningShadowHue=\"37\"\n      crs:SplitToningShadowSaturation=\"22\"\n      crs:SplitToningHighlightHue=\"215\"\n      crs:SplitToningHighlightSaturation=\"12\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"-7\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"-27\"\n      crs:GreenSaturation=\"+5\"\n      crs:BlueHue=\"-5\"\n      crs:BlueSaturation=\"-10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 43</rdf:li>\n       <rdf:li>29, 32</rdf:li>\n       <rdf:li>84, 75</rdf:li>\n       <rdf:li>135, 137</rdf:li>\n       <rdf:li>202, 201</rdf:li>\n       <rdf:li>255, 251</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>38, 8</rdf:li>\n       <rdf:li>71, 43</rdf:li>\n       <rdf:li>98, 88</rdf:li>\n       <rdf:li>144, 166</rdf:li>\n       <rdf:li>197, 220</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>28, 12</rdf:li>\n       <rdf:li>63, 38</rdf:li>\n       <rdf:li>92, 82</rdf:li>\n       <rdf:li>146, 163</rdf:li>\n       <rdf:li>183, 204</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>25, 41</rdf:li>\n       <rdf:li>87, 83</rdf:li>\n       <rdf:li>149, 170</rdf:li>\n       <rdf:li>200, 220</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _11.main
//=========================================
//

_11.main = function () {
  _11();
};

_11.main();

// EOF

"_11.jsx"
// EOF
