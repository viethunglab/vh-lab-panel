#target photoshop
//
// _24.jsx
//

//
// Generated Tue Mar 29 2022 18:34:32 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 24 ==============
//
function _24() {
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
    desc1.putInteger(cTID('Temp'), -14);
    desc1.putInteger(cTID('Tint'), 32);
    desc1.putDouble(cTID('Ex12'), -0.25);
    desc1.putInteger(cTID('Cr12'), 33);
    desc1.putInteger(cTID('Hi12'), -49);
    desc1.putInteger(cTID('Sh12'), 65);
    desc1.putInteger(cTID('Wh12'), -41);
    desc1.putInteger(cTID('Bk12'), 19);
    desc1.putInteger(cTID('Cl12'), 33);
    desc1.putInteger(cTID('Vibr'), 23);
    desc1.putInteger(cTID('Strt'), -15);
    desc1.putInteger(cTID('PC_S'), 24);
    desc1.putInteger(cTID('PC_D'), 24);
    desc1.putInteger(cTID('PC_L'), 25);
    desc1.putInteger(cTID('PC_H'), -12);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 13);
    desc1.putDouble(cTID('ShpR'), 1.1);
    desc1.putInteger(cTID('ShpD'), 26);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 24);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 27);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), -19);
    desc1.putInteger(cTID('HA_Y'), 52);
    desc1.putInteger(cTID('HA_G'), 52);
    desc1.putInteger(cTID('HA_A'), 10);
    desc1.putInteger(cTID('HA_B'), 20);
    desc1.putInteger(cTID('HA_P'), -21);
    desc1.putInteger(cTID('HA_M'), 10);
    desc1.putInteger(cTID('SA_R'), 0);
    desc1.putInteger(cTID('SA_O'), 3);
    desc1.putInteger(cTID('SA_Y'), 0);
    desc1.putInteger(cTID('SA_G'), -13);
    desc1.putInteger(cTID('SA_A'), -36);
    desc1.putInteger(cTID('SA_B'), -72);
    desc1.putInteger(cTID('SA_P'), -72);
    desc1.putInteger(cTID('SA_M'), -74);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), -2);
    desc1.putInteger(cTID('LA_G'), 17);
    desc1.putInteger(cTID('LA_A'), 8);
    desc1.putInteger(cTID('LA_B'), 6);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('GRNA'), 2);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('BlkB'), 2);
    desc1.putInteger(cTID('RHue'), 69);
    desc1.putInteger(cTID('RSat'), -3);
    desc1.putInteger(cTID('GHue'), 45);
    desc1.putInteger(cTID('GSat'), -59);
    desc1.putInteger(cTID('BHue'), -24);
    desc1.putInteger(cTID('BSat'), -11);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(31);
    list1.putInteger(62);
    list1.putInteger(51);
    list1.putInteger(128);
    list1.putInteger(128);
    list1.putInteger(192);
    list1.putInteger(202);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"24\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"E494A7B8B179224A8EF2E7DA6709C498\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">DHCL</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-14\"\n      crs:IncrementalTint=\"+32\"\n      crs:Exposure2012=\"-0.25\"\n      crs:Contrast2012=\"+33\"\n      crs:Highlights2012=\"-49\"\n      crs:Shadows2012=\"+65\"\n      crs:Whites2012=\"-41\"\n      crs:Blacks2012=\"+19\"\n      crs:Clarity2012=\"+33\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+23\"\n      crs:Saturation=\"-15\"\n      crs:ParametricShadows=\"+24\"\n      crs:ParametricDarks=\"+24\"\n      crs:ParametricLights=\"+25\"\n      crs:ParametricHighlights=\"-12\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"13\"\n      crs:SharpenRadius=\"+1.1\"\n      crs:SharpenDetail=\"26\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"24\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"27\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"-19\"\n      crs:HueAdjustmentYellow=\"+52\"\n      crs:HueAdjustmentGreen=\"+52\"\n      crs:HueAdjustmentAqua=\"+10\"\n      crs:HueAdjustmentBlue=\"+20\"\n      crs:HueAdjustmentPurple=\"-21\"\n      crs:HueAdjustmentMagenta=\"+10\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"+3\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"-13\"\n      crs:SaturationAdjustmentAqua=\"-36\"\n      crs:SaturationAdjustmentBlue=\"-72\"\n      crs:SaturationAdjustmentPurple=\"-72\"\n      crs:SaturationAdjustmentMagenta=\"-74\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"-2\"\n      crs:LuminanceAdjustmentGreen=\"+17\"\n      crs:LuminanceAdjustmentAqua=\"+8\"\n      crs:LuminanceAdjustmentBlue=\"+6\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"2\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+2\"\n      crs:RedHue=\"+69\"\n      crs:RedSaturation=\"-3\"\n      crs:GreenHue=\"+45\"\n      crs:GreenSaturation=\"-59\"\n      crs:BlueHue=\"-24\"\n      crs:BlueSaturation=\"-11\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 31</rdf:li>\n       <rdf:li>62, 51</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>192, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _24.main
//=========================================
//

_24.main = function () {
  _24();
};

_24.main();

// EOF

"_24.jsx"
// EOF
