#target photoshop
//
// _006.jsx
//

//
// Generated Sat Dec 04 2021 11:49:24 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 006 ==============
//
function _006() {
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
    desc1.putEnumerated(cTID('WBal'), cTID('WBal'), cTID('Auto'));
    desc1.putInteger(cTID('Temp'), 12);
    desc1.putInteger(cTID('Tint'), -14);
    desc1.putInteger(cTID('AWBV'), 134348800);
    desc1.putDouble(cTID('Ex12'), 0.8);
    desc1.putInteger(cTID('Cr12'), 28);
    desc1.putInteger(cTID('Hi12'), -58);
    desc1.putInteger(cTID('Sh12'), 64);
    desc1.putInteger(cTID('Wh12'), -35);
    desc1.putInteger(cTID('Bk12'), 28);
    desc1.putInteger(cTID('Cl12'), -13);
    desc1.putInteger(cTID('Dhze'), 24);
    desc1.putInteger(cTID('PC_S'), 20);
    desc1.putInteger(cTID('PC_D'), 10);
    desc1.putInteger(cTID('PC_L'), -5);
    desc1.putInteger(cTID('PC_H'), -5);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 122);
    desc1.putDouble(cTID('ShpR'), 1.9);
    desc1.putInteger(cTID('ShpD'), 65);
    desc1.putInteger(cTID('ShpM'), 40);
    desc1.putInteger(cTID('LNR '), 15);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -5);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), -24);
    desc1.putInteger(cTID('HA_G'), -100);
    desc1.putInteger(cTID('HA_A'), -51);
    desc1.putInteger(cTID('HA_B'), -24);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 20);
    desc1.putInteger(cTID('SA_O'), -23);
    desc1.putInteger(cTID('SA_Y'), -35);
    desc1.putInteger(cTID('SA_G'), -100);
    desc1.putInteger(cTID('SA_A'), -67);
    desc1.putInteger(cTID('SA_B'), -24);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 32);
    desc1.putInteger(cTID('LA_Y'), 22);
    desc1.putInteger(cTID('LA_G'), 43);
    desc1.putInteger(cTID('LA_A'), 0);
    desc1.putInteger(cTID('LA_B'), 0);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 227);
    desc1.putInteger(cTID('STSS'), 31);
    desc1.putInteger(cTID('STHH'), 189);
    desc1.putInteger(cTID('STHS'), 7);
    desc1.putInteger(cTID('STB '), 80);
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
    desc1.putInteger(cTID('VigA'), -31);
    desc1.putInteger(cTID('VigM'), 46);
    desc1.putInteger(cTID('DfPA'), 5);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 5);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('GRNA'), 3);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 8);
    desc1.putInteger(cTID('RSat'), 13);
    desc1.putInteger(cTID('GHue'), 16);
    desc1.putInteger(cTID('GSat'), -8);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), -4);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_06\"\n     crs:Amount=\"1\"\n     crs:UUID=\"3EFFAA8089A3D842A92C2FF2917F11FF\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Auto\"\n      crs:Exposure2012=\"+0.80\"\n      crs:Contrast2012=\"+28\"\n      crs:Highlights2012=\"-58\"\n      crs:Shadows2012=\"+64\"\n      crs:Whites2012=\"-35\"\n      crs:Blacks2012=\"+28\"\n      crs:Clarity2012=\"-13\"\n      crs:Dehaze=\"+24\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"0\"\n      crs:ParametricShadows=\"+20\"\n      crs:ParametricDarks=\"+10\"\n      crs:ParametricLights=\"-5\"\n      crs:ParametricHighlights=\"-5\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"122\"\n      crs:SharpenRadius=\"+1.9\"\n      crs:SharpenDetail=\"65\"\n      crs:SharpenEdgeMasking=\"40\"\n      crs:LuminanceSmoothing=\"15\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-5\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-24\"\n      crs:HueAdjustmentGreen=\"-100\"\n      crs:HueAdjustmentAqua=\"-51\"\n      crs:HueAdjustmentBlue=\"-24\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+20\"\n      crs:SaturationAdjustmentOrange=\"-23\"\n      crs:SaturationAdjustmentYellow=\"-35\"\n      crs:SaturationAdjustmentGreen=\"-100\"\n      crs:SaturationAdjustmentAqua=\"-67\"\n      crs:SaturationAdjustmentBlue=\"-24\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"+32\"\n      crs:LuminanceAdjustmentYellow=\"+22\"\n      crs:LuminanceAdjustmentGreen=\"+43\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"0\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"227\"\n      crs:SplitToningShadowSaturation=\"31\"\n      crs:SplitToningHighlightHue=\"189\"\n      crs:SplitToningHighlightSaturation=\"7\"\n      crs:SplitToningBalance=\"+80\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"-31\"\n      crs:VignetteMidpoint=\"46\"\n      crs:DefringePurpleAmount=\"5\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"5\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"3\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+8\"\n      crs:RedSaturation=\"+13\"\n      crs:GreenHue=\"+16\"\n      crs:GreenSaturation=\"-8\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"-4\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _006.main
//=========================================
//

_006.main = function () {
  _006();
};

_006.main();

// EOF

"_006.jsx"
// EOF
