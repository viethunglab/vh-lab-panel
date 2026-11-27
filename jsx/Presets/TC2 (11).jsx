#target photoshop
//
// _11.jsx
//

//
// Generated Fri Feb 04 2022 12:48:34 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 11 ==============
//
function _11() {
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
    desc1.putInteger(cTID('Tint'), 1);
    desc1.putDouble(cTID('Ex12'), 0.75);
    desc1.putInteger(cTID('Cr12'), 81);
    desc1.putInteger(cTID('Hi12'), -63);
    desc1.putInteger(cTID('Sh12'), -8);
    desc1.putInteger(cTID('Wh12'), -48);
    desc1.putInteger(cTID('Bk12'), -9);
    desc1.putInteger(cTID('Cl12'), 7);
    desc1.putInteger(cTID('Vibr'), 12);
    desc1.putInteger(cTID('Strt'), 18);
    desc1.putInteger(cTID('PC_S'), -100);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), -27);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 10);
    desc1.putInteger(cTID('PC_2'), 80);
    desc1.putInteger(cTID('PC_3'), 90);
    desc1.putInteger(cTID('Shrp'), 72);
    desc1.putDouble(cTID('ShpR'), 1.3);
    desc1.putInteger(cTID('ShpD'), 21);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), -6);
    desc1.putInteger(cTID('HA_Y'), -28);
    desc1.putInteger(cTID('HA_G'), -1);
    desc1.putInteger(cTID('HA_A'), 8);
    desc1.putInteger(cTID('HA_B'), -3);
    desc1.putInteger(cTID('HA_P'), 16);
    desc1.putInteger(cTID('HA_M'), 64);
    desc1.putInteger(cTID('SA_R'), 51);
    desc1.putInteger(cTID('SA_O'), -25);
    desc1.putInteger(cTID('SA_Y'), -21);
    desc1.putInteger(cTID('SA_G'), -89);
    desc1.putInteger(cTID('SA_A'), -16);
    desc1.putInteger(cTID('SA_B'), -55);
    desc1.putInteger(cTID('SA_P'), -64);
    desc1.putInteger(cTID('SA_M'), -68);
    desc1.putInteger(cTID('LA_R'), 19);
    desc1.putInteger(cTID('LA_O'), 3);
    desc1.putInteger(cTID('LA_Y'), 2);
    desc1.putInteger(cTID('LA_G'), 14);
    desc1.putInteger(cTID('LA_A'), 41);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 47);
    desc1.putInteger(cTID('LA_M'), 46);
    desc1.putInteger(cTID('STSH'), 233);
    desc1.putInteger(cTID('STSS'), 15);
    desc1.putInteger(cTID('STHH'), 222);
    desc1.putInteger(cTID('STHS'), 35);
    desc1.putInteger(cTID('STB '), -25);
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
    desc1.putInteger(cTID('DPHH'), 60);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('BlkB'), -5);
    desc1.putInteger(cTID('RHue'), 9);
    desc1.putInteger(cTID('RSat'), -100);
    desc1.putInteger(cTID('GHue'), 31);
    desc1.putInteger(cTID('GSat'), 74);
    desc1.putInteger(cTID('BHue'), 15);
    desc1.putInteger(cTID('BSat'), 100);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(6);
    list1.putInteger(67);
    list1.putInteger(68);
    list1.putInteger(187);
    list1.putInteger(193);
    list1.putInteger(254);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(60);
    list2.putInteger(64);
    list2.putInteger(127);
    list2.putInteger(127);
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
    list4.putInteger(6);
    list4.putInteger(67);
    list4.putInteger(74);
    list4.putInteger(127);
    list4.putInteger(127);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM NIGHT 01 \"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"CBD8D9D08FA7C94A9B6E956F9CE4FBC0\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+28\"\n      crs:IncrementalTint=\"+1\"\n      crs:Exposure2012=\"+0.75\"\n      crs:Contrast2012=\"+81\"\n      crs:Highlights2012=\"-63\"\n      crs:Shadows2012=\"-8\"\n      crs:Whites2012=\"-48\"\n      crs:Blacks2012=\"-9\"\n      crs:Clarity2012=\"+7\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+12\"\n      crs:Saturation=\"+18\"\n      crs:ParametricShadows=\"-100\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"-27\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"10\"\n      crs:ParametricMidtoneSplit=\"80\"\n      crs:ParametricHighlightSplit=\"90\"\n      crs:Sharpness=\"72\"\n      crs:SharpenRadius=\"+1.3\"\n      crs:SharpenDetail=\"21\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"-6\"\n      crs:HueAdjustmentYellow=\"-28\"\n      crs:HueAdjustmentGreen=\"-1\"\n      crs:HueAdjustmentAqua=\"+8\"\n      crs:HueAdjustmentBlue=\"-3\"\n      crs:HueAdjustmentPurple=\"+16\"\n      crs:HueAdjustmentMagenta=\"+64\"\n      crs:SaturationAdjustmentRed=\"+51\"\n      crs:SaturationAdjustmentOrange=\"-25\"\n      crs:SaturationAdjustmentYellow=\"-21\"\n      crs:SaturationAdjustmentGreen=\"-89\"\n      crs:SaturationAdjustmentAqua=\"-16\"\n      crs:SaturationAdjustmentBlue=\"-55\"\n      crs:SaturationAdjustmentPurple=\"-64\"\n      crs:SaturationAdjustmentMagenta=\"-68\"\n      crs:LuminanceAdjustmentRed=\"+19\"\n      crs:LuminanceAdjustmentOrange=\"+3\"\n      crs:LuminanceAdjustmentYellow=\"+2\"\n      crs:LuminanceAdjustmentGreen=\"+14\"\n      crs:LuminanceAdjustmentAqua=\"+41\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"+47\"\n      crs:LuminanceAdjustmentMagenta=\"+46\"\n      crs:SplitToningShadowHue=\"233\"\n      crs:SplitToningShadowSaturation=\"15\"\n      crs:SplitToningHighlightHue=\"222\"\n      crs:SplitToningHighlightSaturation=\"35\"\n      crs:SplitToningBalance=\"-25\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"60\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-5\"\n      crs:RedHue=\"+9\"\n      crs:RedSaturation=\"-100\"\n      crs:GreenHue=\"+31\"\n      crs:GreenSaturation=\"+74\"\n      crs:BlueHue=\"+15\"\n      crs:BlueSaturation=\"+100\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (SIGMA 24mm F1.4 DG HSM A015, Canon)\"\n      crs:LensProfileFilename=\"Canon (SIGMA 24mm F1.4 DG HSM A015) - RAW.lcp\"\n      crs:LensProfileDigest=\"AE65D9F04F20DB48560302CA07F73A22\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"0\"\n      crs:LensProfileVignettingScale=\"48\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 6</rdf:li>\n       <rdf:li>67, 68</rdf:li>\n       <rdf:li>187, 193</rdf:li>\n       <rdf:li>254, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>60, 64</rdf:li>\n       <rdf:li>127, 127</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 6</rdf:li>\n       <rdf:li>67, 74</rdf:li>\n       <rdf:li>127, 127</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
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
