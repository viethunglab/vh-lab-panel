#target photoshop
//
// _7.jsx
//

//
// Generated Fri Feb 04 2022 12:43:36 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 7 ==============
//
function _7() {
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
    desc1.putInteger(cTID('Temp'), 19);
    desc1.putInteger(cTID('Tint'), 21);
    desc1.putDouble(cTID('Ex12'), -0.25);
    desc1.putInteger(cTID('Cr12'), -56);
    desc1.putInteger(cTID('Hi12'), -21);
    desc1.putInteger(cTID('Sh12'), 30);
    desc1.putInteger(cTID('Wh12'), -19);
    desc1.putInteger(cTID('Bk12'), 69);
    desc1.putInteger(cTID('Cl12'), -6);
    desc1.putInteger(cTID('Dhze'), 4);
    desc1.putInteger(cTID('Vibr'), 29);
    desc1.putInteger(cTID('Strt'), 6);
    desc1.putInteger(cTID('PC_S'), 0);
    desc1.putInteger(cTID('PC_D'), 0);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 0);
    desc1.putInteger(cTID('PC_1'), 14);
    desc1.putInteger(cTID('PC_2'), 60);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 36);
    desc1.putDouble(cTID('ShpR'), 1.2);
    desc1.putInteger(cTID('ShpD'), 25);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('LNR '), 12);
    desc1.putInteger(cTID('LNRD'), 50);
    desc1.putInteger(cTID('LNRC'), 0);
    desc1.putInteger(cTID('CNR '), 25);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 5);
    desc1.putInteger(cTID('HA_O'), 12);
    desc1.putInteger(cTID('HA_Y'), 12);
    desc1.putInteger(cTID('HA_G'), -53);
    desc1.putInteger(cTID('HA_A'), -64);
    desc1.putInteger(cTID('HA_B'), 5);
    desc1.putInteger(cTID('HA_P'), 4);
    desc1.putInteger(cTID('HA_M'), 25);
    desc1.putInteger(cTID('SA_R'), 45);
    desc1.putInteger(cTID('SA_O'), -13);
    desc1.putInteger(cTID('SA_Y'), -48);
    desc1.putInteger(cTID('SA_G'), -43);
    desc1.putInteger(cTID('SA_A'), -43);
    desc1.putInteger(cTID('SA_B'), -51);
    desc1.putInteger(cTID('SA_P'), -33);
    desc1.putInteger(cTID('SA_M'), -20);
    desc1.putInteger(cTID('LA_R'), 9);
    desc1.putInteger(cTID('LA_O'), 5);
    desc1.putInteger(cTID('LA_Y'), -7);
    desc1.putInteger(cTID('LA_G'), -31);
    desc1.putInteger(cTID('LA_A'), 33);
    desc1.putInteger(cTID('LA_B'), 48);
    desc1.putInteger(cTID('LA_P'), -22);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('STSH'), 219);
    desc1.putInteger(cTID('STSS'), 15);
    desc1.putInteger(cTID('STHH'), 195);
    desc1.putInteger(cTID('STHS'), 28);
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
    desc1.putInteger(cTID('PCVA'), -14);
    desc1.putInteger(cTID('PCVM'), 26);
    desc1.putInteger(cTID('PCVF'), 100);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 8);
    desc1.putInteger(cTID('RSat'), -27);
    desc1.putInteger(cTID('GHue'), 51);
    desc1.putInteger(cTID('GSat'), -51);
    desc1.putInteger(cTID('BHue'), -9);
    desc1.putInteger(cTID('BSat'), 67);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(3);
    list1.putInteger(0);
    list1.putInteger(83);
    list1.putInteger(75);
    list1.putInteger(168);
    list1.putInteger(169);
    list1.putInteger(255);
    list1.putInteger(249);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(45);
    list2.putInteger(19);
    list2.putInteger(78);
    list2.putInteger(60);
    list2.putInteger(113);
    list2.putInteger(123);
    list2.putInteger(178);
    list2.putInteger(203);
    list2.putInteger(255);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(43);
    list3.putInteger(22);
    list3.putInteger(70);
    list3.putInteger(53);
    list3.putInteger(112);
    list3.putInteger(122);
    list3.putInteger(180);
    list3.putInteger(202);
    list3.putInteger(255);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(43);
    list4.putInteger(22);
    list4.putInteger(113);
    list4.putInteger(123);
    list4.putInteger(178);
    list4.putInteger(203);
    list4.putInteger(255);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"TM hàn xanh\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"6C67C9DC8FB1514F9D17497511555DB5\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">Màu 2021</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"+19\"\n      crs:IncrementalTint=\"+21\"\n      crs:Exposure2012=\"-0.25\"\n      crs:Contrast2012=\"-56\"\n      crs:Highlights2012=\"-21\"\n      crs:Shadows2012=\"+30\"\n      crs:Whites2012=\"-19\"\n      crs:Blacks2012=\"+69\"\n      crs:Clarity2012=\"-6\"\n      crs:Dehaze=\"+4\"\n      crs:Vibrance=\"+29\"\n      crs:Saturation=\"+6\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"14\"\n      crs:ParametricMidtoneSplit=\"60\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"36\"\n      crs:SharpenRadius=\"+1.2\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"12\"\n      crs:LuminanceNoiseReductionDetail=\"50\"\n      crs:LuminanceNoiseReductionContrast=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+5\"\n      crs:HueAdjustmentOrange=\"+12\"\n      crs:HueAdjustmentYellow=\"+12\"\n      crs:HueAdjustmentGreen=\"-53\"\n      crs:HueAdjustmentAqua=\"-64\"\n      crs:HueAdjustmentBlue=\"+5\"\n      crs:HueAdjustmentPurple=\"+4\"\n      crs:HueAdjustmentMagenta=\"+25\"\n      crs:SaturationAdjustmentRed=\"+45\"\n      crs:SaturationAdjustmentOrange=\"-13\"\n      crs:SaturationAdjustmentYellow=\"-48\"\n      crs:SaturationAdjustmentGreen=\"-43\"\n      crs:SaturationAdjustmentAqua=\"-43\"\n      crs:SaturationAdjustmentBlue=\"-51\"\n      crs:SaturationAdjustmentPurple=\"-33\"\n      crs:SaturationAdjustmentMagenta=\"-20\"\n      crs:LuminanceAdjustmentRed=\"+9\"\n      crs:LuminanceAdjustmentOrange=\"+5\"\n      crs:LuminanceAdjustmentYellow=\"-7\"\n      crs:LuminanceAdjustmentGreen=\"-31\"\n      crs:LuminanceAdjustmentAqua=\"+33\"\n      crs:LuminanceAdjustmentBlue=\"+48\"\n      crs:LuminanceAdjustmentPurple=\"-22\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"219\"\n      crs:SplitToningShadowSaturation=\"15\"\n      crs:SplitToningHighlightHue=\"195\"\n      crs:SplitToningHighlightSaturation=\"28\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:PerspectiveUpright=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveX=\"0.00\"\n      crs:PerspectiveY=\"0.00\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-14\"\n      crs:PostCropVignetteMidpoint=\"26\"\n      crs:PostCropVignetteFeather=\"100\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+8\"\n      crs:RedSaturation=\"-27\"\n      crs:GreenHue=\"+51\"\n      crs:GreenSaturation=\"-51\"\n      crs:BlueHue=\"-9\"\n      crs:BlueSaturation=\"+67\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>3, 0</rdf:li>\n       <rdf:li>83, 75</rdf:li>\n       <rdf:li>168, 169</rdf:li>\n       <rdf:li>255, 249</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>45, 19</rdf:li>\n       <rdf:li>78, 60</rdf:li>\n       <rdf:li>113, 123</rdf:li>\n       <rdf:li>178, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 22</rdf:li>\n       <rdf:li>70, 53</rdf:li>\n       <rdf:li>112, 122</rdf:li>\n       <rdf:li>180, 202</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>43, 22</rdf:li>\n       <rdf:li>113, 123</rdf:li>\n       <rdf:li>178, 203</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _7.main
//=========================================
//

_7.main = function () {
  _7();
};

_7.main();

// EOF

"_7.jsx"
// EOF
