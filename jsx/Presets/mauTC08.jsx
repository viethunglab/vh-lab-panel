#target photoshop
//
// _08.jsx
//

//
// Generated Mon Mar 14 2022 12:07:28 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 08 ==============
//
function _08() {
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
    desc1.putInteger(cTID('Temp'), -1);
    desc1.putInteger(cTID('Tint'), -17);
    desc1.putDouble(cTID('Ex12'), -0.6);
    desc1.putInteger(cTID('Cr12'), -4);
    desc1.putInteger(cTID('Hi12'), -16);
    desc1.putInteger(cTID('Sh12'), 18);
    desc1.putInteger(cTID('Wh12'), -24);
    desc1.putInteger(cTID('Bk12'), 22);
    desc1.putInteger(cTID('Cl12'), 13);
    desc1.putInteger(cTID('Dhze'), -2);
    desc1.putInteger(cTID('Vibr'), 5);
    desc1.putInteger(cTID('Strt'), -1);
    desc1.putInteger(cTID('PC_S'), -33);
    desc1.putInteger(cTID('PC_D'), 31);
    desc1.putInteger(cTID('PC_L'), -14);
    desc1.putInteger(cTID('PC_H'), -40);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 59);
    desc1.putDouble(cTID('ShpR'), 0.5);
    desc1.putInteger(cTID('ShpD'), 56);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 10);
    desc1.putInteger(cTID('LNRD'), 56);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 38);
    desc1.putInteger(cTID('CNRS'), 59);
    desc1.putInteger(cTID('HA_R'), 15);
    desc1.putInteger(cTID('HA_O'), -39);
    desc1.putInteger(cTID('HA_Y'), -63);
    desc1.putInteger(cTID('HA_G'), 100);
    desc1.putInteger(cTID('HA_A'), 81);
    desc1.putInteger(cTID('HA_B'), -39);
    desc1.putInteger(cTID('HA_P'), -57);
    desc1.putInteger(cTID('HA_M'), -3);
    desc1.putInteger(cTID('SA_R'), 12);
    desc1.putInteger(cTID('SA_O'), -13);
    desc1.putInteger(cTID('SA_Y'), -40);
    desc1.putInteger(cTID('SA_G'), -35);
    desc1.putInteger(cTID('SA_A'), -51);
    desc1.putInteger(cTID('SA_B'), -58);
    desc1.putInteger(cTID('SA_P'), -27);
    desc1.putInteger(cTID('SA_M'), -26);
    desc1.putInteger(cTID('LA_R'), -21);
    desc1.putInteger(cTID('LA_O'), -16);
    desc1.putInteger(cTID('LA_Y'), -28);
    desc1.putInteger(cTID('LA_G'), 14);
    desc1.putInteger(cTID('LA_A'), -23);
    desc1.putInteger(cTID('LA_B'), 8);
    desc1.putInteger(cTID('LA_P'), 10);
    desc1.putInteger(cTID('LA_M'), 3);
    desc1.putInteger(cTID('STSH'), 216);
    desc1.putInteger(cTID('STSS'), 7);
    desc1.putInteger(cTID('STHH'), 189);
    desc1.putInteger(cTID('STHS'), 35);
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
    desc1.putInteger(cTID('GRNA'), 6);
    desc1.putInteger(cTID('GRNS'), 19);
    desc1.putInteger(cTID('GRNF'), 45);
    desc1.putInteger(cTID('PCVA'), -30);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 46);
    desc1.putInteger(cTID('BlkB'), -60);
    desc1.putInteger(cTID('RHue'), 40);
    desc1.putInteger(cTID('RSat'), -33);
    desc1.putInteger(cTID('GHue'), -79);
    desc1.putInteger(cTID('GSat'), -11);
    desc1.putInteger(cTID('BHue'), -68);
    desc1.putInteger(cTID('BSat'), 28);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(21);
    list1.putInteger(64);
    list1.putInteger(71);
    list1.putInteger(107);
    list1.putInteger(110);
    list1.putInteger(180);
    list1.putInteger(196);
    list1.putInteger(243);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"15\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"7057BD560533F54DB5BF9752157C5BE0\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">AAA</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-1\"\n      crs:IncrementalTint=\"-17\"\n      crs:Exposure2012=\"-0.60\"\n      crs:Contrast2012=\"-4\"\n      crs:Highlights2012=\"-16\"\n      crs:Shadows2012=\"+18\"\n      crs:Whites2012=\"-24\"\n      crs:Blacks2012=\"+22\"\n      crs:Clarity2012=\"+13\"\n      crs:Dehaze=\"-2\"\n      crs:Vibrance=\"+5\"\n      crs:Saturation=\"-1\"\n      crs:ParametricShadows=\"-33\"\n      crs:ParametricDarks=\"+31\"\n      crs:ParametricLights=\"-14\"\n      crs:ParametricHighlights=\"-40\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"59\"\n      crs:SharpenRadius=\"+0.5\"\n      crs:SharpenDetail=\"56\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"10\"\n      crs:LuminanceNoiseReductionDetail=\"56\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"38\"\n      crs:ColorNoiseReductionSmoothness=\"59\"\n      crs:HueAdjustmentRed=\"+15\"\n      crs:HueAdjustmentOrange=\"-39\"\n      crs:HueAdjustmentYellow=\"-63\"\n      crs:HueAdjustmentGreen=\"+100\"\n      crs:HueAdjustmentAqua=\"+81\"\n      crs:HueAdjustmentBlue=\"-39\"\n      crs:HueAdjustmentPurple=\"-57\"\n      crs:HueAdjustmentMagenta=\"-3\"\n      crs:SaturationAdjustmentRed=\"+12\"\n      crs:SaturationAdjustmentOrange=\"-13\"\n      crs:SaturationAdjustmentYellow=\"-40\"\n      crs:SaturationAdjustmentGreen=\"-35\"\n      crs:SaturationAdjustmentAqua=\"-51\"\n      crs:SaturationAdjustmentBlue=\"-58\"\n      crs:SaturationAdjustmentPurple=\"-27\"\n      crs:SaturationAdjustmentMagenta=\"-26\"\n      crs:LuminanceAdjustmentRed=\"-21\"\n      crs:LuminanceAdjustmentOrange=\"-16\"\n      crs:LuminanceAdjustmentYellow=\"-28\"\n      crs:LuminanceAdjustmentGreen=\"+14\"\n      crs:LuminanceAdjustmentAqua=\"-23\"\n      crs:LuminanceAdjustmentBlue=\"+8\"\n      crs:LuminanceAdjustmentPurple=\"+10\"\n      crs:LuminanceAdjustmentMagenta=\"+3\"\n      crs:SplitToningShadowHue=\"216\"\n      crs:SplitToningShadowSaturation=\"7\"\n      crs:SplitToningHighlightHue=\"189\"\n      crs:SplitToningHighlightSaturation=\"35\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"6\"\n      crs:GrainSize=\"19\"\n      crs:GrainFrequency=\"45\"\n      crs:PostCropVignetteAmount=\"-30\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"46\"\n      crs:ShadowTint=\"-60\"\n      crs:RedHue=\"+40\"\n      crs:RedSaturation=\"-33\"\n      crs:GreenHue=\"-79\"\n      crs:GreenSaturation=\"-11\"\n      crs:BlueHue=\"-68\"\n      crs:BlueSaturation=\"+28\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 21</rdf:li>\n       <rdf:li>64, 71</rdf:li>\n       <rdf:li>107, 110</rdf:li>\n       <rdf:li>180, 196</rdf:li>\n       <rdf:li>243, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _08.main
//=========================================
//

_08.main = function () {
  _08();
};

_08.main();

// EOF

"_08.jsx"
// EOF
