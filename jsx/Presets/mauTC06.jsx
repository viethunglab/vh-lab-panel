#target photoshop
//
// _06.jsx
//

//
// Generated Mon Mar 14 2022 12:07:09 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 06 ==============
//
function _06() {
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
    desc1.putInteger(cTID('Temp'), -12);
    desc1.putInteger(cTID('Tint'), -2);
    desc1.putDouble(cTID('Ex12'), -0.4);
    desc1.putInteger(cTID('Cr12'), -19);
    desc1.putInteger(cTID('Hi12'), -18);
    desc1.putInteger(cTID('Sh12'), -17);
    desc1.putInteger(cTID('Wh12'), 18);
    desc1.putInteger(cTID('Bk12'), 1);
    desc1.putInteger(cTID('Cl12'), 14);
    desc1.putInteger(cTID('Dhze'), 7);
    desc1.putInteger(cTID('Vibr'), 26);
    desc1.putInteger(cTID('Strt'), -13);
    desc1.putInteger(cTID('PC_S'), 10);
    desc1.putInteger(cTID('PC_D'), 11);
    desc1.putInteger(cTID('PC_L'), 20);
    desc1.putInteger(cTID('PC_H'), -3);
    desc1.putInteger(cTID('PC_1'), 20);
    desc1.putInteger(cTID('PC_2'), 52);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 6);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 25);
    desc1.putInteger(cTID('HA_Y'), -33);
    desc1.putInteger(cTID('HA_G'), -36);
    desc1.putInteger(cTID('HA_A'), 37);
    desc1.putInteger(cTID('HA_B'), -53);
    desc1.putInteger(cTID('HA_P'), -34);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 3);
    desc1.putInteger(cTID('SA_O'), -1);
    desc1.putInteger(cTID('SA_Y'), -19);
    desc1.putInteger(cTID('SA_G'), -13);
    desc1.putInteger(cTID('SA_A'), -53);
    desc1.putInteger(cTID('SA_B'), -59);
    desc1.putInteger(cTID('SA_P'), 4);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), -42);
    desc1.putInteger(cTID('LA_Y'), -16);
    desc1.putInteger(cTID('LA_G'), -45);
    desc1.putInteger(cTID('LA_A'), -57);
    desc1.putInteger(cTID('LA_B'), -49);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 44);
    desc1.putInteger(cTID('STSS'), 45);
    desc1.putInteger(cTID('STHH'), 243);
    desc1.putInteger(cTID('STHS'), 24);
    desc1.putInteger(cTID('STB '), -11);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('GRNA'), 3);
    desc1.putInteger(cTID('GRNS'), 6);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('PCVA'), -17);
    desc1.putInteger(cTID('PCVM'), 58);
    desc1.putInteger(cTID('PCVF'), 71);
    desc1.putInteger(cTID('PCVR'), -33);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 14);
    desc1.putInteger(cTID('BlkB'), 5);
    desc1.putInteger(cTID('RHue'), -13);
    desc1.putInteger(cTID('RSat'), -9);
    desc1.putInteger(cTID('GHue'), -39);
    desc1.putInteger(cTID('GSat'), -37);
    desc1.putInteger(cTID('BHue'), -52);
    desc1.putInteger(cTID('BSat'), -23);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(22);
    list1.putInteger(66);
    list1.putInteger(70);
    list1.putInteger(126);
    list1.putInteger(137);
    list1.putInteger(166);
    list1.putInteger(184);
    list1.putInteger(250);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"13\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"86CFE3D9DF6EA44BBE99091C22F6B6C4\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">AAA</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-12\"\n      crs:IncrementalTint=\"-2\"\n      crs:Exposure2012=\"-0.40\"\n      crs:Contrast2012=\"-19\"\n      crs:Highlights2012=\"-18\"\n      crs:Shadows2012=\"-17\"\n      crs:Whites2012=\"+18\"\n      crs:Blacks2012=\"+1\"\n      crs:Clarity2012=\"+14\"\n      crs:Dehaze=\"+7\"\n      crs:Vibrance=\"+26\"\n      crs:Saturation=\"-13\"\n      crs:ParametricShadows=\"+10\"\n      crs:ParametricDarks=\"+11\"\n      crs:ParametricLights=\"+20\"\n      crs:ParametricHighlights=\"-3\"\n      crs:ParametricShadowSplit=\"20\"\n      crs:ParametricMidtoneSplit=\"52\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"6\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+25\"\n      crs:HueAdjustmentYellow=\"-33\"\n      crs:HueAdjustmentGreen=\"-36\"\n      crs:HueAdjustmentAqua=\"+37\"\n      crs:HueAdjustmentBlue=\"-53\"\n      crs:HueAdjustmentPurple=\"-34\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+3\"\n      crs:SaturationAdjustmentOrange=\"-1\"\n      crs:SaturationAdjustmentYellow=\"-19\"\n      crs:SaturationAdjustmentGreen=\"-13\"\n      crs:SaturationAdjustmentAqua=\"-53\"\n      crs:SaturationAdjustmentBlue=\"-59\"\n      crs:SaturationAdjustmentPurple=\"+4\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"-42\"\n      crs:LuminanceAdjustmentYellow=\"-16\"\n      crs:LuminanceAdjustmentGreen=\"-45\"\n      crs:LuminanceAdjustmentAqua=\"-57\"\n      crs:LuminanceAdjustmentBlue=\"-49\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"44\"\n      crs:SplitToningShadowSaturation=\"45\"\n      crs:SplitToningHighlightHue=\"243\"\n      crs:SplitToningHighlightSaturation=\"24\"\n      crs:SplitToningBalance=\"-11\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"3\"\n      crs:GrainSize=\"6\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"-17\"\n      crs:PostCropVignetteMidpoint=\"58\"\n      crs:PostCropVignetteFeather=\"71\"\n      crs:PostCropVignetteRoundness=\"-33\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"14\"\n      crs:ShadowTint=\"+5\"\n      crs:RedHue=\"-13\"\n      crs:RedSaturation=\"-9\"\n      crs:GreenHue=\"-39\"\n      crs:GreenSaturation=\"-37\"\n      crs:BlueHue=\"-52\"\n      crs:BlueSaturation=\"-23\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 22</rdf:li>\n       <rdf:li>66, 70</rdf:li>\n       <rdf:li>126, 137</rdf:li>\n       <rdf:li>166, 184</rdf:li>\n       <rdf:li>250, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _06.main
//=========================================
//

_06.main = function () {
  _06();
};

_06.main();

// EOF

"_06.jsx"
// EOF
