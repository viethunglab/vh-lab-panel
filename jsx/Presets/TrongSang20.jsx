#target photoshop
//
// _20.jsx
//

//
// Generated Tue Dec 14 2021 23:20:16 GMT-0800
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 20 ==============
//
function _20() {
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
    desc1.putInteger(cTID('Temp'), -5);
    desc1.putInteger(cTID('Tint'), 11);
    desc1.putDouble(cTID('Ex12'), 0.2);
    desc1.putInteger(cTID('Sh12'), 57);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Vibr'), 49);
    desc1.putInteger(cTID('Strt'), -17);
    desc1.putInteger(cTID('PC_S'), -18);
    desc1.putInteger(cTID('PC_D'), 20);
    desc1.putInteger(cTID('PC_L'), -5);
    desc1.putInteger(cTID('PC_H'), -22);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('Shrp'), 52);
    desc1.putDouble(cTID('ShpR'), 1);
    desc1.putInteger(cTID('ShpD'), 7);
    desc1.putInteger(cTID('ShpM'), 0);
    desc1.putInteger(cTID('CNR '), 45);
    desc1.putInteger(cTID('CNRD'), 50);
    desc1.putInteger(cTID('CNRS'), 50);
    desc1.putInteger(cTID('HA_R'), 13);
    desc1.putInteger(cTID('HA_O'), 0);
    desc1.putInteger(cTID('HA_Y'), 12);
    desc1.putInteger(cTID('HA_G'), 13);
    desc1.putInteger(cTID('HA_A'), 29);
    desc1.putInteger(cTID('HA_B'), -15);
    desc1.putInteger(cTID('HA_P'), -67);
    desc1.putInteger(cTID('HA_M'), 0);
    desc1.putInteger(cTID('SA_R'), 11);
    desc1.putInteger(cTID('SA_O'), -20);
    desc1.putInteger(cTID('SA_Y'), 6);
    desc1.putInteger(cTID('SA_G'), -69);
    desc1.putInteger(cTID('SA_A'), -2);
    desc1.putInteger(cTID('SA_B'), -23);
    desc1.putInteger(cTID('SA_P'), -20);
    desc1.putInteger(cTID('SA_M'), -31);
    desc1.putInteger(cTID('LA_R'), 10);
    desc1.putInteger(cTID('LA_O'), 35);
    desc1.putInteger(cTID('LA_Y'), 20);
    desc1.putInteger(cTID('LA_G'), 4);
    desc1.putInteger(cTID('LA_A'), -53);
    desc1.putInteger(cTID('LA_B'), -38);
    desc1.putInteger(cTID('LA_P'), 40);
    desc1.putInteger(cTID('LA_M'), 27);
    desc1.putInteger(cTID('STSH'), 52);
    desc1.putInteger(cTID('STSS'), 34);
    desc1.putInteger(cTID('STHH'), 231);
    desc1.putInteger(cTID('STHS'), 7);
    desc1.putInteger(cTID('STB '), 57);
    desc1.putInteger(cTID('CgMH'), 0);
    desc1.putInteger(cTID('CgMS'), 0);
    desc1.putInteger(cTID('CgSL'), 0);
    desc1.putInteger(cTID('CgML'), 0);
    desc1.putInteger(cTID('CgHL'), 0);
    desc1.putInteger(cTID('CgBl'), 100);
    desc1.putInteger(cTID('CgGH'), 0);
    desc1.putInteger(cTID('CgGS'), 0);
    desc1.putInteger(cTID('CgGL'), 0);
    desc1.putInteger(cTID('VigA'), 18);
    desc1.putInteger(cTID('VigM'), 50);
    desc1.putInteger(cTID('PCVA'), -8);
    desc1.putInteger(cTID('PCVM'), 50);
    desc1.putInteger(cTID('PCVF'), 50);
    desc1.putInteger(cTID('PCVR'), 0);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('PCVH'), 0);
    desc1.putInteger(cTID('BlkB'), 0);
    desc1.putInteger(cTID('RHue'), 11);
    desc1.putInteger(cTID('RSat'), -12);
    desc1.putInteger(cTID('GHue'), 62);
    desc1.putInteger(cTID('GSat'), 50);
    desc1.putInteger(cTID('BHue'), 0);
    desc1.putInteger(cTID('BSat'), 80);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    desc1.putInteger(cTID('RGBt'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(9);
    list1.putInteger(70);
    list1.putInteger(69);
    list1.putInteger(151);
    list1.putInteger(156);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(2);
    list2.putInteger(149);
    list2.putInteger(150);
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
    list4.putInteger(15);
    list4.putInteger(49);
    list4.putInteger(64);
    list4.putInteger(113);
    list4.putInteger(118);
    list4.putInteger(193);
    list4.putInteger(197);
    list4.putInteger(244);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"NTStudio_Color_111\"\n     crs:Amount=\"1\"\n     crs:UUID=\"62733DD85CD30D41AC9FEEE35C3F11C8\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">NTStudio_Color</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"14.0\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-5\"\n      crs:IncrementalTint=\"+11\"\n      crs:Exposure2012=\"+0.20\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"0\"\n      crs:Shadows2012=\"+57\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"0\"\n      crs:Texture=\"0\"\n      crs:Clarity2012=\"-5\"\n      crs:Dehaze=\"0\"\n      crs:Vibrance=\"+49\"\n      crs:Saturation=\"-17\"\n      crs:ParametricShadows=\"-18\"\n      crs:ParametricDarks=\"+20\"\n      crs:ParametricLights=\"-5\"\n      crs:ParametricHighlights=\"-22\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:Sharpness=\"52\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"7\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"45\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:HueAdjustmentRed=\"+13\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"+12\"\n      crs:HueAdjustmentGreen=\"+13\"\n      crs:HueAdjustmentAqua=\"+29\"\n      crs:HueAdjustmentBlue=\"-15\"\n      crs:HueAdjustmentPurple=\"-67\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"+11\"\n      crs:SaturationAdjustmentOrange=\"-20\"\n      crs:SaturationAdjustmentYellow=\"+6\"\n      crs:SaturationAdjustmentGreen=\"-69\"\n      crs:SaturationAdjustmentAqua=\"-2\"\n      crs:SaturationAdjustmentBlue=\"-23\"\n      crs:SaturationAdjustmentPurple=\"-20\"\n      crs:SaturationAdjustmentMagenta=\"-31\"\n      crs:LuminanceAdjustmentRed=\"+10\"\n      crs:LuminanceAdjustmentOrange=\"+35\"\n      crs:LuminanceAdjustmentYellow=\"+20\"\n      crs:LuminanceAdjustmentGreen=\"+4\"\n      crs:LuminanceAdjustmentAqua=\"-53\"\n      crs:LuminanceAdjustmentBlue=\"-38\"\n      crs:LuminanceAdjustmentPurple=\"+40\"\n      crs:LuminanceAdjustmentMagenta=\"+27\"\n      crs:SplitToningShadowHue=\"52\"\n      crs:SplitToningShadowSaturation=\"34\"\n      crs:SplitToningHighlightHue=\"231\"\n      crs:SplitToningHighlightSaturation=\"7\"\n      crs:SplitToningBalance=\"+57\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"100\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:VignetteAmount=\"+18\"\n      crs:VignetteMidpoint=\"50\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"-8\"\n      crs:PostCropVignetteMidpoint=\"50\"\n      crs:PostCropVignetteFeather=\"50\"\n      crs:PostCropVignetteRoundness=\"0\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:PostCropVignetteHighlightContrast=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"+11\"\n      crs:RedSaturation=\"-12\"\n      crs:GreenHue=\"+62\"\n      crs:GreenSaturation=\"+50\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+80\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 9</rdf:li>\n       <rdf:li>70, 69</rdf:li>\n       <rdf:li>151, 156</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 2</rdf:li>\n       <rdf:li>149, 150</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 15</rdf:li>\n       <rdf:li>49, 64</rdf:li>\n       <rdf:li>113, 118</rdf:li>\n       <rdf:li>193, 197</rdf:li>\n       <rdf:li>244, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Duplicate
  step2();      // Camera Raw Filter
};



//=========================================
//                    _20.main
//=========================================
//

_20.main = function () {
  _20();
};

_20.main();

// EOF

"_20.jsx"
// EOF
