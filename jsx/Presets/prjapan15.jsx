#target photoshop
//
// prjapan15.jsx
//

//
// Generated Sat Apr 16 2022 19:01:12 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 15 ==============
//
function _15() {
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
    desc1.putInteger(cTID('Temp'), 5);
    desc1.putInteger(cTID('Tint'), -6);
    desc1.putDouble(cTID('Ex12'), 0.11);
    desc1.putInteger(cTID('Cr12'), 18);
    desc1.putInteger(cTID('Hi12'), -60);
    desc1.putInteger(cTID('Sh12'), 10);
    desc1.putInteger(cTID('Wh12'), 19);
    desc1.putInteger(cTID('Bk12'), 45);
    desc1.putInteger(cTID('Cl12'), -8);
    desc1.putInteger(cTID('Vibr'), 17);
    desc1.putInteger(cTID('Strt'), -8);
    desc1.putInteger(cTID('PC_S'), -16);
    desc1.putInteger(cTID('PC_D'), 5);
    desc1.putInteger(cTID('PC_L'), -9);
    desc1.putInteger(cTID('PC_H'), 17);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 26);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 32);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 50);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), -11);
    desc1.putInteger(cTID('HA_O'), 13);
    desc1.putInteger(cTID('HA_Y'), 0);
    desc1.putInteger(cTID('HA_G'), 15);
    desc1.putInteger(cTID('HA_A'), 38);
    desc1.putInteger(cTID('HA_B'), -6);
    desc1.putInteger(cTID('HA_P'), 36);
    desc1.putInteger(cTID('HA_M'), 39);
    desc1.putInteger(cTID('SA_R'), 15);
    desc1.putInteger(cTID('SA_O'), -31);
    desc1.putInteger(cTID('SA_Y'), -34);
    desc1.putInteger(cTID('SA_G'), 0);
    desc1.putInteger(cTID('SA_A'), 5);
    desc1.putInteger(cTID('SA_B'), 42);
    desc1.putInteger(cTID('SA_P'), 11);
    desc1.putInteger(cTID('SA_M'), 33);
    desc1.putInteger(cTID('LA_R'), 10);
    desc1.putInteger(cTID('LA_O'), 11);
    desc1.putInteger(cTID('LA_Y'), 10);
    desc1.putInteger(cTID('LA_G'), 15);
    desc1.putInteger(cTID('LA_A'), -15);
    desc1.putInteger(cTID('LA_B'), -22);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 0);
    desc1.putInteger(cTID('STSS'), 6);
    desc1.putInteger(cTID('STHH'), 253);
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
    desc1.putInteger(cTID('VigA'), 15);
    desc1.putInteger(cTID('VigM'), 50);
    desc1.putInteger(cTID('DfPA'), 8);
    desc1.putInteger(cTID('DPHL'), 30);
    desc1.putInteger(cTID('DPHH'), 70);
    desc1.putInteger(cTID('DfGA'), 0);
    desc1.putInteger(cTID('DPGL'), 40);
    desc1.putInteger(cTID('DPGH'), 60);
    desc1.putInteger(cTID('GRNA'), 9);
    desc1.putInteger(cTID('GRNS'), 25);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('PCVA'), -4);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 0);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), 9);
    desc1.putInteger(cTID('RHue'), 0);
    desc1.putInteger(cTID('RSat'), 6);
    desc1.putInteger(cTID('GHue'), 0);
    desc1.putInteger(cTID('GSat'), 0);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(52);
    list1.putInteger(53);
    list1.putInteger(61);
    list1.putInteger(196);
    list1.putInteger(208);
    list1.putInteger(255);
    list1.putInteger(230);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"15\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"8F00060F5F1F3F4B8AF2F8689454B289\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+5\"\n      crs:IncrementalTint=\"-6\"\n      crs:Exposure2012=\"+0.11\"\n      crs:Contrast2012=\"+18\"\n      crs:Highlights2012=\"-60\"\n      crs:Shadows2012=\"+10\"\n      crs:Whites2012=\"+19\"\n      crs:Blacks2012=\"+45\"\n      crs:Clarity2012=\"-8\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+17\"\n      crs:Saturation=\"-8\"\n      crs:ParametricShadows=\"-16\"\n      crs:ParametricDarks=\"+5\"\n      crs:ParametricLights=\"-9\"\n      crs:ParametricHighlights=\"+17\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"26\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"32\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"50\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"-11\"\n      crs:HueAdjustmentOrange=\"+13\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"+15\"\n      crs:HueAdjustmentAqua=\"+38\"\n      crs:HueAdjustmentBlue=\"-6\"\n      crs:HueAdjustmentPurple=\"+36\"\n      crs:HueAdjustmentMagenta=\"+39\"\n      crs:SaturationAdjustmentRed=\"+15\"\n      crs:SaturationAdjustmentOrange=\"-31\"\n      crs:SaturationAdjustmentYellow=\"-34\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"+5\"\n      crs:SaturationAdjustmentBlue=\"+42\"\n      crs:SaturationAdjustmentPurple=\"+11\"\n      crs:SaturationAdjustmentMagenta=\"+33\"\n      crs:LuminanceAdjustmentRed=\"+10\"\n      crs:LuminanceAdjustmentOrange=\"+11\"\n      crs:LuminanceAdjustmentYellow=\"+10\"\n      crs:LuminanceAdjustmentGreen=\"+15\"\n      crs:LuminanceAdjustmentAqua=\"-15\"\n      crs:LuminanceAdjustmentBlue=\"-22\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"6\"\n      crs:SplitToningHighlightHue=\"253\"\n      crs:SplitToningHighlightSaturation=\"12\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"1\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"+15\"\n      crs:VignetteMidpoint=\"50\"\n      crs:DefringePurpleAmount=\"8\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"9\"\n      crs:GrainSize=\"25\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"-4\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"0\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"+9\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"+6\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 52</rdf:li>\n       <rdf:li>53, 61</rdf:li>\n       <rdf:li>196, 208</rdf:li>\n       <rdf:li>255, 230</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _15.main
//=========================================
//

_15.main = function () {
  _15();
};

_15.main();

// EOF

"prjapan15.jsx"
// EOF
