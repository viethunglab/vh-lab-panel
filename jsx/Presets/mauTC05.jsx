#target photoshop
//
// _05.jsx
//

//
// Generated Mon Mar 14 2022 12:06:58 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 05 ==============
//
function _05() {
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
    desc1.putInteger(cTID('Temp'), -18);
    desc1.putInteger(cTID('Tint'), -5);
    desc1.putDouble(cTID('Ex12'), -0.5);
    desc1.putInteger(cTID('Cr12'), -30);
    desc1.putInteger(cTID('Hi12'), -18);
    desc1.putInteger(cTID('Sh12'), 23);
    desc1.putInteger(cTID('Wh12'), -29);
    desc1.putInteger(cTID('Bk12'), -29);
    desc1.putInteger(cTID('Cl12'), 7);
    desc1.putInteger(cTID('Dhze'), 6);
    desc1.putInteger(cTID('Vibr'), 4);
    desc1.putInteger(cTID('Strt'), -16);
    desc1.putInteger(cTID('PC_S'), 10);
    desc1.putInteger(cTID('PC_D'), 18);
    desc1.putInteger(cTID('PC_L'), 3);
    desc1.putInteger(cTID('PC_H'), -9);
    desc1.putInteger(cTID('PC_1'), 42);
    desc1.putInteger(cTID('PC_2'), 52);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 6);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('HA_R'), 0);
    desc1.putInteger(cTID('HA_O'), 13);
    desc1.putInteger(cTID('HA_Y'), -51);
    desc1.putInteger(cTID('HA_G'), -75);
    desc1.putInteger(cTID('HA_A'), 28);
    desc1.putInteger(cTID('HA_B'), -43);
    desc1.putInteger(cTID('HA_P'), -65);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 3);
    desc1.putInteger(cTID('SA_O'), -36);
    desc1.putInteger(cTID('SA_Y'), -17);
    desc1.putInteger(cTID('SA_G'), -73);
    desc1.putInteger(cTID('SA_A'), -54);
    desc1.putInteger(cTID('SA_B'), -59);
    desc1.putInteger(cTID('SA_P'), 0);
    desc1.putInteger(cTID('SA_M'), 0);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), -33);
    desc1.putInteger(cTID('LA_Y'), 24);
    desc1.putInteger(cTID('LA_G'), -20);
    desc1.putInteger(cTID('LA_A'), -5);
    desc1.putInteger(cTID('LA_B'), -22);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 32);
    desc1.putInteger(cTID('STSS'), 20);
    desc1.putInteger(cTID('STHH'), 221);
    desc1.putInteger(cTID('STHS'), 42);
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
    desc1.putInteger(cTID('GRNA'), 3);
    desc1.putInteger(cTID('GRNS'), 6);
    desc1.putInteger(cTID('GRNF'), 50);
    desc1.putInteger(cTID('PCVA'), -17);
    desc1.putInteger(cTID('PCVM'), 58);
    desc1.putInteger(cTID('PCVF'), 71);
    desc1.putInteger(cTID('PCVR'), -33);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 14);
    desc1.putInteger(cTID('BlkB'), -15);
    desc1.putInteger(cTID('RHue'), -2);
    desc1.putInteger(cTID('RSat'), 3);
    desc1.putInteger(cTID('GHue'), -55);
    desc1.putInteger(cTID('GSat'), -63);
    desc1.putInteger(cTID('BHue'), -53);
    desc1.putInteger(cTID('BSat'), 0);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(1);
    list1.putInteger(28);
    list1.putInteger(45);
    list1.putInteger(47);
    list1.putInteger(129);
    list1.putInteger(113);
    list1.putInteger(180);
    list1.putInteger(190);
    list1.putInteger(253);
    list1.putInteger(239);
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
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"12\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"624E6FC21DE43B438BE23F6F1DA543CC\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">AAA</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-18\"\n      crs:IncrementalTint=\"-5\"\n      crs:Exposure2012=\"-0.50\"\n      crs:Contrast2012=\"-30\"\n      crs:Highlights2012=\"-18\"\n      crs:Shadows2012=\"+23\"\n      crs:Whites2012=\"-29\"\n      crs:Blacks2012=\"-29\"\n      crs:Clarity2012=\"+7\"\n      crs:Dehaze=\"+6\"\n      crs:Vibrance=\"+4\"\n      crs:Saturation=\"-16\"\n      crs:ParametricShadows=\"+10\"\n      crs:ParametricDarks=\"+18\"\n      crs:ParametricLights=\"+3\"\n      crs:ParametricHighlights=\"-9\"\n      crs:ParametricShadowSplit=\"42\"\n      crs:ParametricMidtoneSplit=\"52\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"6\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"+13\"\n      crs:HueAdjustmentYellow=\"-51\"\n      crs:HueAdjustmentGreen=\"-75\"\n      crs:HueAdjustmentAqua=\"+28\"\n      crs:HueAdjustmentBlue=\"-43\"\n      crs:HueAdjustmentPurple=\"-65\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+3\"\n      crs:SaturationAdjustmentOrange=\"-36\"\n      crs:SaturationAdjustmentYellow=\"-17\"\n      crs:SaturationAdjustmentGreen=\"-73\"\n      crs:SaturationAdjustmentAqua=\"-54\"\n      crs:SaturationAdjustmentBlue=\"-59\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"-33\"\n      crs:LuminanceAdjustmentYellow=\"+24\"\n      crs:LuminanceAdjustmentGreen=\"-20\"\n      crs:LuminanceAdjustmentAqua=\"-5\"\n      crs:LuminanceAdjustmentBlue=\"-22\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"32\"\n      crs:SplitToningShadowSaturation=\"20\"\n      crs:SplitToningHighlightHue=\"221\"\n      crs:SplitToningHighlightSaturation=\"42\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"3\"\n      crs:GrainSize=\"6\"\n      crs:GrainFrequency=\"50\"\n      crs:PostCropVignetteAmount=\"-17\"\n      crs:PostCropVignetteMidpoint=\"58\"\n      crs:PostCropVignetteFeather=\"71\"\n      crs:PostCropVignetteRoundness=\"-33\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"14\"\n      crs:ShadowTint=\"-15\"\n      crs:RedHue=\"-2\"\n      crs:RedSaturation=\"+3\"\n      crs:GreenHue=\"-55\"\n      crs:GreenSaturation=\"-63\"\n      crs:BlueHue=\"-53\"\n      crs:BlueSaturation=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>1, 28</rdf:li>\n       <rdf:li>45, 47</rdf:li>\n       <rdf:li>129, 113</rdf:li>\n       <rdf:li>180, 190</rdf:li>\n       <rdf:li>253, 239</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _05.main
//=========================================
//

_05.main = function () {
  _05();
};

_05.main();

// EOF

"_05.jsx"
// EOF
