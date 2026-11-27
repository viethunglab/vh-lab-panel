#target photoshop
//
// 19.jsx
//

//
// Generated Thu May 05 2022 23:21:47 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== 19 ==============
//
function _19() {
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
    desc1.putInteger(cTID('Cr12'), 70);
    desc1.putInteger(cTID('Hi12'), -70);
    desc1.putInteger(cTID('Sh12'), 15);
    desc1.putInteger(cTID('Wh12'), -75);
    desc1.putInteger(cTID('Bk12'), 70);
    desc1.putInteger(cTID('Cl12'), -5);
    desc1.putInteger(cTID('Strt'), -15);
    desc1.putInteger(cTID('PC_S'), 5);
    desc1.putInteger(cTID('PC_D'), 5);
    desc1.putInteger(cTID('PC_L'), 0);
    desc1.putInteger(cTID('PC_H'), 5);
    desc1.putInteger(cTID('PC_1'), 25);
    desc1.putInteger(cTID('PC_2'), 50);
    desc1.putInteger(cTID('PC_3'), 75);
    desc1.putInteger(cTID('HA_R'), 5);
    desc1.putInteger(cTID('HA_O'), -10);
    desc1.putInteger(cTID('HA_Y'), -10);
    desc1.putInteger(cTID('HA_G'), 20);
    desc1.putInteger(cTID('HA_A'), 20);
    desc1.putInteger(cTID('HA_B'), 10);
    desc1.putInteger(cTID('HA_P'), -10);
    desc1.putInteger(cTID('HA_M'), 15);
    desc1.putInteger(cTID('SA_R'), -15);
    desc1.putInteger(cTID('SA_O'), -5);
    desc1.putInteger(cTID('SA_Y'), -15);
    desc1.putInteger(cTID('SA_G'), -25);
    desc1.putInteger(cTID('SA_A'), -25);
    desc1.putInteger(cTID('SA_B'), -30);
    desc1.putInteger(cTID('SA_P'), -25);
    desc1.putInteger(cTID('SA_M'), -25);
    desc1.putInteger(cTID('LA_R'), 0);
    desc1.putInteger(cTID('LA_O'), 0);
    desc1.putInteger(cTID('LA_Y'), 0);
    desc1.putInteger(cTID('LA_G'), 10);
    desc1.putInteger(cTID('LA_A'), 15);
    desc1.putInteger(cTID('LA_B'), 10);
    desc1.putInteger(cTID('LA_P'), 0);
    desc1.putInteger(cTID('LA_M'), 0);
    desc1.putInteger(cTID('PCVA'), 5);
    desc1.putInteger(cTID('PCVM'), 0);
    desc1.putInteger(cTID('PCVF'), 100);
    desc1.putInteger(cTID('PCVR'), 100);
    desc1.putInteger(cTID('PCVS'), 1);
    desc1.putInteger(cTID('TMMs'), 0);
    desc1.putInteger(cTID('PGTM'), 0);
    var list1 = new ActionList();
    list1.putInteger(0);
    list1.putInteger(56);
    list1.putInteger(55);
    list1.putInteger(77);
    list1.putInteger(147);
    list1.putInteger(141);
    list1.putInteger(255);
    list1.putInteger(255);
    desc1.putList(cTID('Crv '), list1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(0);
    list2.putInteger(232);
    list2.putInteger(255);
    desc1.putList(cTID('CrvR'), list2);
    var list3 = new ActionList();
    list3.putInteger(0);
    list3.putInteger(0);
    list3.putInteger(232);
    list3.putInteger(255);
    desc1.putList(cTID('CrvG'), list3);
    var list4 = new ActionList();
    list4.putInteger(0);
    list4.putInteger(0);
    list4.putInteger(231);
    list4.putInteger(255);
    desc1.putList(cTID('CrvB'), list4);
    desc1.putString(cTID('Pset'), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"19\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"164B1541D8C44D4992CA25538781780C\"\n     crs:SupportsAmount=\"false\">\n    <crs:Group>\n     <rdf:Alt>\n      <rdf:li xml:lang=\"x-default\">mau nhat - new</rdf:li>\n     </rdf:Alt>\n    </crs:Group>\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"13.2\"\n      crs:ProcessVersion=\"11.0\"\n      crs:Contrast2012=\"+70\"\n      crs:Highlights2012=\"-70\"\n      crs:Shadows2012=\"+15\"\n      crs:Whites2012=\"-75\"\n      crs:Blacks2012=\"+70\"\n      crs:Clarity2012=\"-5\"\n      crs:Vibrance=\"0\"\n      crs:Saturation=\"-15\"\n      crs:ParametricShadows=\"+5\"\n      crs:ParametricDarks=\"+5\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"+5\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"0\"\n      crs:HueAdjustmentRed=\"+5\"\n      crs:HueAdjustmentOrange=\"-10\"\n      crs:HueAdjustmentYellow=\"-10\"\n      crs:HueAdjustmentGreen=\"+20\"\n      crs:HueAdjustmentAqua=\"+20\"\n      crs:HueAdjustmentBlue=\"+10\"\n      crs:HueAdjustmentPurple=\"-10\"\n      crs:HueAdjustmentMagenta=\"+15\"\n      crs:SaturationAdjustmentRed=\"-15\"\n      crs:SaturationAdjustmentOrange=\"-5\"\n      crs:SaturationAdjustmentYellow=\"-15\"\n      crs:SaturationAdjustmentGreen=\"-25\"\n      crs:SaturationAdjustmentAqua=\"-25\"\n      crs:SaturationAdjustmentBlue=\"-30\"\n      crs:SaturationAdjustmentPurple=\"-25\"\n      crs:SaturationAdjustmentMagenta=\"-25\"\n      crs:LuminanceAdjustmentRed=\"0\"\n      crs:LuminanceAdjustmentOrange=\"0\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"+10\"\n      crs:LuminanceAdjustmentAqua=\"+15\"\n      crs:LuminanceAdjustmentBlue=\"+10\"\n      crs:LuminanceAdjustmentPurple=\"0\"\n      crs:LuminanceAdjustmentMagenta=\"0\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ColorGradeMidtoneHue=\"0\"\n      crs:ColorGradeMidtoneSat=\"0\"\n      crs:ColorGradeShadowLum=\"0\"\n      crs:ColorGradeMidtoneLum=\"0\"\n      crs:ColorGradeHighlightLum=\"0\"\n      crs:ColorGradeBlending=\"50\"\n      crs:ColorGradeGlobalHue=\"0\"\n      crs:ColorGradeGlobalSat=\"0\"\n      crs:ColorGradeGlobalLum=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:PostCropVignetteAmount=\"+5\"\n      crs:PostCropVignetteMidpoint=\"0\"\n      crs:PostCropVignetteFeather=\"100\"\n      crs:PostCropVignetteRoundness=\"+100\"\n      crs:PostCropVignetteStyle=\"1\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"True\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\">\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 56</rdf:li>\n       <rdf:li>55, 77</rdf:li>\n       <rdf:li>147, 141</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>232, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>232, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>231, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n");
    executeAction(sTID('Adobe Camera Raw Filter'), desc1, dialogMode);
  };

  step1();      // Layer Via Copy
  step2();      // Camera Raw Filter
};



//=========================================
//                    _19.main
//=========================================
//

_19.main = function () {
  _19();
};

_19.main();

// EOF

"19.jsx"
// EOF
