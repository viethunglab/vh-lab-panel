#target photoshop
//
// TuyenChon14.jsx
//

//
// Generated Tue Jan 11 2022 14:08:53 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 14 ==============
//
function _14() {
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
    desc1.putInteger(cTID('Temp'), -2);
    desc1.putInteger(cTID('Tint'), 17);
    desc1.putDouble(cTID('Ex12'), 0.35);
    desc1.putInteger(cTID('Cr12'), -10);
    desc1.putInteger(cTID('Hi12'), -67);
    desc1.putInteger(cTID('Sh12'), 39);
    desc1.putInteger(cTID('Wh12'), -89);
    desc1.putInteger(cTID('Bk12'), 23);
    desc1.putInteger(cTID('Dhze'), -11);
    desc1.putInteger(cTID('Vibr'), 75);
    desc1.putInteger(cTID('Strt'), -2);
    desc1.putInteger(cTID('PC_S'), 5);
    desc1.putInteger(cTID('PC_D'), 32);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 63);
    desc1.putDouble(cTID('ShpR'), 1.6);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 33);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -19);
    desc1.putInteger(cTID('HA_O'), 17);
    desc1.putInteger(cTID('HA_Y'), 26);
    desc1.putInteger(cTID('HA_G'), 23);
    desc1.putInteger(cTID('HA_A'), 3);
    desc1.putInteger(cTID('HA_B'), 15);
    desc1.putInteger(cTID('HA_P'), 4);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), -30);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), 3);
    desc1.putInteger(cTID('SA_A'), -36);
    desc1.putInteger(cTID('SA_B'), -40);
    desc1.putInteger(cTID('SA_P'), -25);
    desc1.putInteger(cTID('SA_M'), -20);
    desc1.putInteger(cTID('LA_R'), 57);
    desc1.putInteger(cTID('LA_O'), 13);
    desc1.putInteger(cTID('LA_Y'), -10);
    desc1.putInteger(cTID('LA_G'), -80);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 80);
    desc1.putInteger(cTID('LA_P'), 23);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 218);
    desc1.putInteger(cTID('STHS'), 3);
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
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 20);
    desc1.putInteger(cTID('RSat'), 12);
    desc1.putInteger(cTID('GHue'), 34);
    desc1.putInteger(cTID('GSat'), -25);
    desc1.putInteger(cTID('BHue'), -18);
    desc1.putInteger(cTID('BSat'), -10);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(0);
    list1.putInteger(34);
    list1.putInteger(44);
    list1.putInteger(123);
    list1.putInteger(127);
    list1.putInteger(255);
    list1.putInteger(251);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(44);
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
    list3.putInteger(49);
    list3.putInteger(27);
    list3.putInteger(112);
    list3.putInteger(122);
    list3.putInteger(180);
    list3.putInteger(202);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(51);
    list4.putInteger(26);
    list4.putInteger(113);
    list4.putInteger(123);
    list4.putInteger(178);
    list4.putInteger(203);
    list4.putInteger(249);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"14\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"CFA0ED95AAFF1143AFC21EA615A93F54\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NT</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-2\"\n      crs:IncrementalTint=\"+17\"\n      crs:Exposure2012=\"+0.35\"\n      crs:Contrast2012=\"-10\"\n      crs:Highlights2012=\"-67\"\n      crs:Shadows2012=\"+39\"\n      crs:Whites2012=\"-89\"\n      crs:Blacks2012=\"+23\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"-11\"\n      crs:Vibrance=\"+75\"\n      crs:Saturation=\"-2\"\n      crs:ParametricShadows=\"+5\"\n      crs:ParametricDarks=\"+32\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"63\"\n      crs:SharpenRadius=\"+1.6\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"33\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-19\"\n      crs:HueAdjustmentOrange=\"+17\"\n      crs:HueAdjustmentYellow=\"+26\"\n      crs:HueAdjustmentGreen=\"+23\"\n      crs:HueAdjustmentAqua=\"+3\"\n      crs:HueAdjustmentBlue=\"+15\"\n      crs:HueAdjustmentPurple=\"+4\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"-30\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"+3\"\n      crs:SaturationAdjustmentAqua=\"-36\"\n      crs:SaturationAdjustmentBlue=\"-40\"\n      crs:SaturationAdjustmentPurple=\"-25\"\n      crs:SaturationAdjustmentMagenta=\"-20\"\n      crs:LuminanceAdjustmentRed=\"+57\"\n      crs:LuminanceAdjustmentOrange=\"+13\"\n      crs:LuminanceAdjustmentYellow=\"-10\"\n      crs:LuminanceAdjustmentGreen=\"-80\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"+80\"\n      crs:LuminanceAdjustmentPurple=\"+23\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"218\"\n      crs:SplitToningHighlightSaturation=\"3\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+20\"\n      crs:RedSaturation=\"+12\"\n      crs:GreenHue=\"+34\"\n      crs:GreenSaturation=\"-25\"\n      crs:BlueHue=\"-18\"\n      crs:BlueSaturation=\"-10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>34, 44</rdf:li>\n       <rdf:li>123, 127</rdf:li>\n       <rdf:li>255, 251</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>44, 22</rdf:li>\n       <rdf:li>113, 123</rdf:li>\n       <rdf:li>178, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>49, 27</rdf:li>\n       <rdf:li>112, 122</rdf:li>\n       <rdf:li>180, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>51, 26</rdf:li>\n       <rdf:li>113, 123</rdf:li>\n       <rdf:li>178, 203</rdf:li>\n       <rdf:li>249, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _14.main
//=========================================
//

_14.main = function () {
  _14();
};

_14.main();

// EOF

"TuyenChon14.jsx"
// EOF
