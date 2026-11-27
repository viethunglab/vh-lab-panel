#target photoshop
//
// _016.jsx
//

//
// Generated Thu Dec 09 2021 13:31:47 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 016 ==============
//
function _016() {
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
    desc1.putInteger(cTID('Temp'), -18);
    desc1.putInteger(cTID('Tint'), 11);
    desc1.putDouble(cTID('Ex12'), 0.9);
    desc1.putInteger(cTID('Cr12'), 28);
    desc1.putInteger(cTID('Hi12'), -39);
    desc1.putInteger(cTID('Sh12'), 63);
    desc1.putInteger(cTID('Wh12'), -14);
    desc1.putInteger(cTID('Bk12'), 12);
    desc1.putInteger(cTID('Dhze'), 3);
    desc1.putInteger(cTID('Vibr'), 46);
    desc1.putInteger(cTID('Strt'), -19);
    desc1.putInteger(cTID('PC_S'), -46);
    desc1.putInteger(cTID('PC_D'), -10);
    desc1.putInteger(cTID('PC_L'), 4);
    desc1.putInteger(cTID('PC_H'), -5);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 71);
    desc1.putDouble(cTID('ShpR'), 1.2);
    desc1.putInteger(cTID('ShpD'), 35);
    desc1.putInteger(cTID('ShpM'), 82);
    desc1.putInteger(cTID('LNR '), 3);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 1);
    desc1.putInteger(cTID('HA_Y'), 23);
    desc1.putInteger(cTID('HA_G'), 20);
    desc1.putInteger(cTID('HA_A'), -29);
    desc1.putInteger(cTID('HA_B'), -11);
    desc1.putInteger(cTID('HA_P'), 0);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 26);
    desc1.putInteger(cTID('SA_O'), -17);
    desc1.putInteger(cTID('SA_Y'), -16);
    desc1.putInteger(cTID('SA_G'), -79);
    desc1.putInteger(cTID('SA_A'), -33);
    desc1.putInteger(cTID('SA_B'), -33);
    desc1.putInteger(cTID('SA_P'), -5);
    desc1.putInteger(cTID('SA_M'), -5);
    desc1.putInteger(cTID('LA_R'), 13);
    desc1.putInteger(cTID('LA_O'), 18);
    desc1.putInteger(cTID('LA_Y'), -40);
    desc1.putInteger(cTID('LA_G'), -14);
    desc1.putInteger(cTID('LA_A'), 8);
    desc1.putInteger(cTID('LA_B'), 11);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 233);
    desc1.putInteger(cTID('STSS'), 11);
    desc1.putInteger(cTID('STHH'), 232);
    desc1.putInteger(cTID('STHS'), 7);
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
    desc1.putInteger(cTID('BlkB'), 6);
    desc1.putInteger(cTID('RHue'), 8);
    desc1.putInteger(cTID('RSat'), -25);
    desc1.putInteger(cTID('GHue'), 20);
    desc1.putInteger(cTID('GSat'), 55);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 57);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"Trong treo PN 1\"\n     crs:Amount=\"1\"\n     crs:UUID=\"39B7B4114D2927CC8F85055FF54D54AA\"\n     crs:SupportsAmount=\"false\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+6\"\n      crs:IncrementalTint=\"-3\"\n      crs:Exposure2012=\"+0.90\"\n      crs:Contrast2012=\"+28\"\n      crs:Highlights2012=\"-39\"\n      crs:Shadows2012=\"+63\"\n      crs:Whites2012=\"-14\"\n      crs:Blacks2012=\"+12\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:Dehaze=\"+3\"\n      crs:Vibrance=\"+46\"\n      crs:Saturation=\"-19\"\n      crs:ParametricShadows=\"-46\"\n      crs:ParametricDarks=\"-10\"\n      crs:ParametricLights=\"+4\"\n      crs:ParametricHighlights=\"-5\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"71\"\n      crs:SharpenRadius=\"+1.2\"\n      crs:SharpenDetail=\"35\"\n      crs:SharpenEdgeMasking=\"82\"\n      crs:LuminanceSmoothing=\"3\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+1\"\n      crs:HueAdjustmentYellow=\"+23\"\n      crs:HueAdjustmentGreen=\"+20\"\n      crs:HueAdjustmentAqua=\"-29\"\n      crs:HueAdjustmentBlue=\"-11\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+26\"\n      crs:SaturationAdjustmentOrange=\"-17\"\n      crs:SaturationAdjustmentYellow=\"-16\"\n      crs:SaturationAdjustmentGreen=\"-79\"\n      crs:SaturationAdjustmentAqua=\"-33\"\n      crs:SaturationAdjustmentBlue=\"-33\"\n      crs:SaturationAdjustmentPurple=\"-5\"\n      crs:SaturationAdjustmentMagenta=\"-5\"\n      crs:LuminanceAdjustmentRed=\"+13\"\n      crs:LuminanceAdjustmentOrange=\"+18\"\n      crs:LuminanceAdjustmentYellow=\"-40\"\n      crs:LuminanceAdjustmentGreen=\"-14\"\n      crs:LuminanceAdjustmentAqua=\"+8\"\n      crs:LuminanceAdjustmentBlue=\"+11\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"233\"\n      crs:SplitToningShadowSaturation=\"11\"\n      crs:SplitToningHighlightHue=\"232\"\n      crs:SplitToningHighlightSaturation=\"7\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:ShadowTint=\"+6\"\n      crs:RedHue=\"+8\"\n      crs:RedSaturation=\"-25\"\n      crs:GreenHue=\"+20\"\n      crs:GreenSaturation=\"+55\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+57\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _016.main
//=========================================
//

_016.main = function () {
  _016();
};

_016.main();

// EOF

"_016.jsx"
// EOF
