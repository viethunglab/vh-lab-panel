#target photoshop
//
// _29.jsx
//

//
// Generated Tue Mar 29 2022 18:35:10 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 29 ==============
//
function _29() {
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
    desc1.putInteger(cTID('Temp'), 7);
    desc1.putInteger(cTID('Tint'), 10);
    desc1.putInteger(cTID('Cr12'), -23);
    desc1.putInteger(cTID('Hi12'), -28);
    desc1.putInteger(cTID('Sh12'), 58);
    desc1.putInteger(cTID('Wh12'), -13);
    desc1.putInteger(cTID('Bk12'), -34);
    desc1.putInteger(cTID('Cl12'), -13);
    desc1.putInteger(cTID('Vibr'), 12);
    desc1.putInteger(cTID('Strt'), -18);
    desc1.putInteger(cTID('PC_S'), -12);
    desc1.putInteger(cTID('PC_D'), 12);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 20);
    desc1.putDouble(cTID('ShpR'), 1.1);
    desc1.putInteger(cTID('ShpD'), 20);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 30);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 48);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 5);
    desc1.putInteger(cTID('HA_O'), -10);
    desc1.putInteger(cTID('HA_Y'), -8);
    desc1.putInteger(cTID('HA_G'), 5);
    desc1.putInteger(cTID('HA_A'), -15);
    desc1.putInteger(cTID('HA_B'), -2);
    desc1.putInteger(cTID('HA_P'), -14);
    desc1.putInteger(cTID('HA_M'), -8);
    desc1.putInteger(cTID('SA_R'), -8);
    desc1.putInteger(cTID('SA_O'), 5);
    desc1.putInteger(cTID('SA_Y'), 10);
    desc1.putInteger(cTID('SA_G'), -5);
    desc1.putInteger(cTID('SA_A'), 2);
    desc1.putInteger(cTID('SA_B'), 0);
    desc1.putInteger(cTID('SA_P'), 4);
    desc1.putInteger(cTID('SA_M'), 2);
    desc1.putInteger(cTID('LA_R'), 7);
    desc1.putInteger(cTID('LA_O'), 12);
    desc1.putInteger(cTID('LA_Y'), -7);
    desc1.putInteger(cTID('LA_G'), 6);
    desc1.putInteger(cTID('LA_A'), -6);
    desc1.putInteger(cTID('LA_B'), 4);
    desc1.putInteger(cTID('LA_P'), 2);
    desc1.putInteger(cTID('LA_M'), -4);
    desc1.putInteger(cTID('STSH'), 10);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 216);
    desc1.putInteger(cTID('STHS'), 18);
    desc1.putInteger(cTID('STB '), -8);
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
    desc1.putInteger(cTID('VigA'), -58);
    desc1.putInteger(cTID('VigM'), 54);
    desc1.putInteger(cTID('DfPA'), 0);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 4);
    desc1.putInteger(cTID('RSat'), -17);
    desc1.putInteger(cTID('GHue'), 5);
    desc1.putInteger(cTID('GSat'), -2);
    desc1.putInteger(cTID('BHue'), -2);
    desc1.putInteger(cTID('BSat'), 10);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(1);
    list1.putInteger(0);
    list1.putInteger(42);
    list1.putInteger(40);
    list1.putInteger(72);
    list1.putInteger(71);
    list1.putInteger(119);
    list1.putInteger(128);
    list1.putInteger(178);
    list1.putInteger(188);
    list1.putInteger(216);
    list1.putInteger(219);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"29\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"8181A583356A564782B5B78097B53D68\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">DHCL</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+7\"\n      crs:IncrementalTint=\"+10\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"-23\"\n      crs:Highlights2012=\"-28\"\n      crs:Shadows2012=\"+58\"\n      crs:Whites2012=\"-13\"\n      crs:Blacks2012=\"-34\"\n      crs:Clarity2012=\"-13\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+12\"\n      crs:Saturation=\"-18\"\n      crs:ParametricShadows=\"-12\"\n      crs:ParametricDarks=\"+12\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"20\"\n      crs:SharpenRadius=\"+1.1\"\n      crs:SharpenDetail=\"20\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"30\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"48\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+5\"\n      crs:HueAdjustmentOrange=\"-10\"\n      crs:HueAdjustmentYellow=\"-8\"\n      crs:HueAdjustmentGreen=\"+5\"\n      crs:HueAdjustmentAqua=\"-15\"\n      crs:HueAdjustmentBlue=\"-2\"\n      crs:HueAdjustmentPurple=\"-14\"\n      crs:HueAdjustmentMagenta=\"-8\"\n      crs:SaturationAdjustmentRed=\"-8\"\n      crs:SaturationAdjustmentOrange=\"+5\"\n      crs:SaturationAdjustmentYellow=\"+10\"\n      crs:SaturationAdjustmentGreen=\"-5\"\n      crs:SaturationAdjustmentAqua=\"+2\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"+4\"\n      crs:SaturationAdjustmentMagenta=\"+2\"\n      crs:LuminanceAdjustmentRed=\"+7\"\n      crs:LuminanceAdjustmentOrange=\"+12\"\n      crs:LuminanceAdjustmentYellow=\"-7\"\n      crs:LuminanceAdjustmentGreen=\"+6\"\n      crs:LuminanceAdjustmentAqua=\"-6\"\n      crs:LuminanceAdjustmentBlue=\"+4\"\n      crs:LuminanceAdjustmentPurple=\"+2\"\n      crs:LuminanceAdjustmentMagenta=\"-4\"\n      crs:SplitToningShadowHue=\"10\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"216\"\n      crs:SplitToningHighlightSaturation=\"18\"\n      crs:SplitToningBalance=\"-8\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"-58\"\n      crs:VignetteMidpoint=\"54\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+4\"\n      crs:RedSaturation=\"-17\"\n      crs:GreenHue=\"+5\"\n      crs:GreenSaturation=\"-2\"\n      crs:BlueHue=\"-2\"\n      crs:BlueSaturation=\"+10\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>1, 0</rdf:li>\n       <rdf:li>42, 40</rdf:li>\n       <rdf:li>72, 71</rdf:li>\n       <rdf:li>119, 128</rdf:li>\n       <rdf:li>178, 188</rdf:li>\n       <rdf:li>216, 219</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _29.main
//=========================================
//

_29.main = function () {
  _29();
};

_29.main();

// EOF

"_29.jsx"
// EOF
