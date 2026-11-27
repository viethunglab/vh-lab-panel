#target photoshop
//
// _8.jsx
//

//
// Generated Fri Feb 04 2022 12:44:28 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 8 ==============
//
function _8() {
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
    desc1.putInteger(cTID('Temp'), 15);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), -0.15);
    desc1.putInteger(cTID('Cr12'), 31);
    desc1.putInteger(cTID('Hi12'), -62);
    desc1.putInteger(cTID('Sh12'), 23);
    desc1.putInteger(cTID('Wh12'), -35);
    desc1.putInteger(cTID('Bk12'), 26);
    desc1.putInteger(cTID('Cl12'), 4);
    desc1.putInteger(cTID('Vibr'), 38);
    desc1.putInteger(cTID('PC_S'), 2);
    desc1.putInteger(cTID('PC_D'), 13);
    desc1.putInteger(cTID('PC_L'), -12);
    desc1.putInteger(cTID('PC_H'), -48);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 36);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 10);
    desc1.putInteger(cTID('ShpM'), 10);
    desc1.putInteger(cTID('LNR '), 15);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -8);
    desc1.putInteger(cTID('HA_O'), 9);
    desc1.putInteger(cTID('HA_Y'), 1);
    desc1.putInteger(cTID('HA_G'), 3);
    desc1.putInteger(cTID('HA_A'), 50);
    desc1.putInteger(cTID('HA_B'), 10);
    desc1.putInteger(cTID('HA_P'), -1);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), -3);
    desc1.putInteger(cTID('SA_O'), -1);
    desc1.putInteger(cTID('SA_Y'), -55);
    desc1.putInteger(cTID('SA_G'), -56);
    desc1.putInteger(cTID('SA_A'), -75);
    desc1.putInteger(cTID('SA_B'), -74);
    desc1.putInteger(cTID('SA_P'), -56);
    desc1.putInteger(cTID('SA_M'), -50);
    desc1.putInteger(cTID('LA_R'), -2);
    desc1.putInteger(cTID('LA_O'), 7);
    desc1.putInteger(cTID('LA_Y'), -5);
    desc1.putInteger(cTID('LA_G'), -24);
    desc1.putInteger(cTID('LA_A'), 10);
    desc1.putInteger(cTID('LA_B'), 1);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 225);
    desc1.putInteger(cTID('STSS'), 0);
    desc1.putInteger(cTID('STHH'), 236);
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
    desc1.putInteger(cTID('BlkB'), -6);
    desc1.putInteger(cTID('RHue'), 30);
    desc1.putInteger(cTID('RSat'), -8);
    desc1.putInteger(cTID('GHue'), 69);
    desc1.putInteger(cTID('GSat'), -5);
    desc1.putInteger(cTID('BHue'), -30);
    desc1.putInteger(cTID('BSat'), 47);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(21);
    list1.putInteger(0);
    list1.putInteger(121);
    list1.putInteger(135);
    list1.putInteger(235);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(72);
    list2.putInteger(71);
    list2.putInteger(152);
    list2.putInteger(145);
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
    list4.putInteger(11);
    list4.putInteger(127);
    list4.putInteger(133);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putInteger(cTID('LPSe'), 2);
    desc1.putString(cTID('LPNa'), "");
    desc1.putString(cTID('LPFN'), "");
    desc1.putInteger(cTID('LPiE'), 0);
    desc1.putInteger(cTID('LPDA'), 100);
    desc1.putInteger(cTID('LPVA'), 100);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM màu hồng kong DN\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"6913D04E2C83504E81B8972E7A62CB7C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+15\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"-0.15\"\n      crs:Contrast2012=\"+31\"\n      crs:Highlights2012=\"-62\"\n      crs:Shadows2012=\"+23\"\n      crs:Whites2012=\"-35\"\n      crs:Blacks2012=\"+26\"\n      crs:Clarity2012=\"+4\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+38\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"+2\"\n      crs:ParametricDarks=\"+13\"\n      crs:ParametricLights=\"-12\"\n      crs:ParametricHighlights=\"-48\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"36\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"10\"\n      crs:SharpenEdgeMasking=\"10\"\n      crs:LuminanceSmoothing=\"15\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-8\"\n      crs:HueAdjustmentOrange=\"+9\"\n      crs:HueAdjustmentYellow=\"+1\"\n      crs:HueAdjustmentGreen=\"+3\"\n      crs:HueAdjustmentAqua=\"+50\"\n      crs:HueAdjustmentBlue=\"+10\"\n      crs:HueAdjustmentPurple=\"-1\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"-3\"\n      crs:SaturationAdjustmentOrange=\"-1\"\n      crs:SaturationAdjustmentYellow=\"-55\"\n      crs:SaturationAdjustmentGreen=\"-56\"\n      crs:SaturationAdjustmentAqua=\"-75\"\n      crs:SaturationAdjustmentBlue=\"-74\"\n      crs:SaturationAdjustmentPurple=\"-56\"\n      crs:SaturationAdjustmentMagenta=\"-50\"\n      crs:LuminanceAdjustmentRed=\"-2\"\n      crs:LuminanceAdjustmentOrange=\"+7\"\n      crs:LuminanceAdjustmentYellow=\"-5\"\n      crs:LuminanceAdjustmentGreen=\"-24\"\n      crs:LuminanceAdjustmentAqua=\"+10\"\n      crs:LuminanceAdjustmentBlue=\"+1\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"225\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"236\"\n      crs:SplitToningHighlightSaturation=\"12\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"-6\"\n      crs:RedHue=\"+30\"\n      crs:RedSaturation=\"-8\"\n      crs:GreenHue=\"+69\"\n      crs:GreenSaturation=\"-5\"\n      crs:BlueHue=\"-30\"\n      crs:BlueSaturation=\"+47\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"Custom\"\n      crs:LensProfileName=\"Adobe (SIGMA 35mm F1.4 DG HSM A012, Canon)\"\n      crs:LensProfileFilename=\"Canon (SIGMA 35mm F1.4 DG HSM A012) - RAW.lcp\"\n      crs:LensProfileDigest=\"C7D070A489662E2416331398D0E7E2E1\"\n      crs:LensProfileIsEmbedded=\"False\"\n      crs:LensProfileDistortionScale=\"100\"\n      crs:LensProfileVignettingScale=\"100\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>21, 0</rdf:li>\n       <rdf:li>121, 135</rdf:li>\n       <rdf:li>235, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>72, 71</rdf:li>\n       <rdf:li>152, 145</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 11</rdf:li>\n       <rdf:li>127, 133</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _8.main
//=========================================
//

_8.main = function () {
  _8();
};

_8.main();

// EOF

"_8.jsx"
// EOF
