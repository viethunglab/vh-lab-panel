#target photoshop
//
// 19.jsx
//

//
// Generated Sat Sep 28 2024 12:39:55 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Gắn số ==============
//
function G_ns() {
  // Make
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('TxLr'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Txt '), "108");
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("warpStyle"), sTID("warpStyle"), sTID("warpNone"));
    desc3.putDouble(sTID("warpValue"), 0);
    desc3.putDouble(sTID("warpPerspective"), 0);
    desc3.putDouble(sTID("warpPerspectiveOther"), 0);
    desc3.putEnumerated(sTID("warpRotate"), cTID('Ornt'), cTID('Hrzn'));
    desc2.putObject(cTID('warp'), cTID('warp'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putUnitDouble(cTID('Hrzn'), cTID('#Prc'), 41.4507772020725);
    desc4.putUnitDouble(cTID('Vrtc'), cTID('#Prc'), 94.8960302457467);
    desc2.putObject(cTID('TxtC'), cTID('Pnt '), desc4);
    desc2.putEnumerated(sTID("textGridding"), sTID("textGridding"), cTID('None'));
    desc2.putEnumerated(cTID('Ornt'), cTID('Ornt'), cTID('Hrzn'));
    desc2.putEnumerated(cTID('AntA'), cTID('Annt'), sTID("antiAliasSharp"));
    var desc5 = new ActionDescriptor();
    desc5.putUnitDouble(cTID('Left'), cTID('#Pxl'), -43.747314453125);
    desc5.putUnitDouble(cTID('Top '), cTID('#Pxl'), -48.4754219055176);
    desc5.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 43.747688293457);
    desc5.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 19.1110496520996);
    desc2.putObject(sTID("bounds"), sTID("bounds"), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putUnitDouble(cTID('Left'), cTID('#Pxl'), -38.747314453125);
    desc6.putUnitDouble(cTID('Top '), cTID('#Pxl'), -40);
    desc6.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 41.5826873779297);
    desc6.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 0);
    desc2.putObject(sTID("boundingBox"), sTID("boundingBox"), desc6);
    var list1 = new ActionList();
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(sTID("textType"), sTID("textType"), cTID('Pnt '));
    desc7.putEnumerated(cTID('Ornt'), cTID('Ornt'), cTID('Hrzn'));
    var desc8 = new ActionDescriptor();
    desc8.putDouble(sTID("xx"), 1);
    desc8.putDouble(sTID("xy"), 0);
    desc8.putDouble(sTID("yx"), 0);
    desc8.putDouble(sTID("yy"), 1);
    desc8.putDouble(sTID("tx"), 0);
    desc8.putDouble(sTID("ty"), 0);
    desc7.putObject(cTID('Trnf'), cTID('Trnf'), desc8);
    desc7.putInteger(sTID("rowCount"), 1);
    desc7.putInteger(sTID("columnCount"), 1);
    desc7.putBoolean(sTID("rowMajorOrder"), true);
    desc7.putUnitDouble(sTID("rowGutter"), cTID('#Pxl'), 0);
    desc7.putUnitDouble(sTID("columnGutter"), cTID('#Pxl'), 0);
    desc7.putUnitDouble(cTID('Spcn'), cTID('#Pxl'), 0);
    desc7.putEnumerated(sTID("frameBaselineAlignment"), sTID("frameBaselineAlignment"), sTID("alignByAscent"));
    desc7.putUnitDouble(sTID("firstBaselineMinimum"), cTID('#Pxl'), 0);
    var desc9 = new ActionDescriptor();
    desc9.putDouble(cTID('Hrzn'), 0);
    desc9.putDouble(cTID('Vrtc'), 0);
    desc7.putObject(cTID('base'), cTID('Pnt '), desc9);
    list1.putObject(sTID("textShape"), desc7);
    desc2.putList(sTID("textShape"), list1);
    var list2 = new ActionList();
    var desc10 = new ActionDescriptor();
    desc10.putInteger(cTID('From'), 0);
    desc10.putInteger(cTID('T   '), 4);
    var desc11 = new ActionDescriptor();
    desc11.putBoolean(sTID("styleSheetHasParent"), true);
    desc11.putString(sTID("fontPostScriptName"), "TimesNewRomanPS-BoldMT");
    desc11.putString(cTID('FntN'), "Times New Roman");
    desc11.putString(cTID('FntS'), "Bold");
    desc11.putInteger(cTID('Scrp'), 0);
    desc11.putInteger(cTID('FntT'), 1);
    desc11.putBoolean(sTID("fontAvailable"), true);
    desc11.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 58.3300018310547);
    desc11.putUnitDouble(sTID("impliedFontSize"), cTID('#Pxl'), 58.3300018310547);
    desc11.putDouble(cTID('HrzS'), 100);
    desc11.putDouble(cTID('VrtS'), 100);
    desc11.putBoolean(sTID("syntheticBold"), false);
    desc11.putBoolean(sTID("syntheticItalic"), false);
    desc11.putBoolean(sTID("autoLeading"), true);
    desc11.putInteger(cTID('Trck'), 0);
    desc11.putUnitDouble(cTID('Bsln'), cTID('#Pxl'), 0);
    desc11.putUnitDouble(sTID("impliedBaselineShift"), cTID('#Pxl'), 0);
    desc11.putEnumerated(cTID('AtKr'), cTID('AtKr'), sTID("metricsKern"));
    desc11.putEnumerated(sTID("fontCaps"), sTID("fontCaps"), cTID('Nrml'));
    desc11.putEnumerated(sTID("digitSet"), sTID("digitSet"), sTID("arabicDigits"));
    desc11.putEnumerated(sTID("kashidas"), sTID("kashidas"), sTID("kashidaDefault"));
    desc11.putUnitDouble(sTID("diacXOffset"), cTID('#Pxl'), 0);
    desc11.putUnitDouble(sTID("diacYOffset"), cTID('#Pxl'), 0);
    desc11.putUnitDouble(sTID("markYDistFromBaseline"), cTID('#Pxl'), 0);
    desc11.putEnumerated(sTID("baseline"), sTID("baseline"), cTID('Nrml'));
    desc11.putEnumerated(sTID("otbaseline"), sTID("otbaseline"), cTID('Nrml'));
    desc11.putEnumerated(sTID("strikethrough"), sTID("strikethrough"), sTID("strikethroughOff"));
    desc11.putEnumerated(cTID('Undl'), cTID('Undl'), sTID("underlineOff"));
    desc11.putBoolean(sTID("ligature"), true);
    desc11.putBoolean(sTID("altligature"), false);
    desc11.putBoolean(sTID("contextualLigatures"), true);
    desc11.putBoolean(sTID("fractions"), false);
    desc11.putBoolean(sTID("ordinals"), false);
    desc11.putBoolean(sTID("swash"), false);
    desc11.putBoolean(sTID("titling"), false);
    desc11.putBoolean(sTID("connectionForms"), true);
    desc11.putBoolean(sTID("stylisticAlternates"), false);
    desc11.putInteger(sTID("stylisticSets"), 0);
    desc11.putBoolean(sTID("ornaments"), false);
    desc11.putBoolean(sTID("justificationAlternates"), false);
    desc11.putEnumerated(sTID("figureStyle"), sTID("figureStyle"), cTID('Nrml'));
    desc11.putBoolean(sTID("proportionalMetrics"), false);
    desc11.putBoolean(cTID('kana'), false);
    desc11.putBoolean(sTID("italics"), false);
    desc11.putEnumerated(sTID("baselineDirection"), sTID("baselineDirection"), sTID("withStream"));
    desc11.putEnumerated(sTID("textLanguage"), sTID("textLanguage"), sTID("englishLanguage"));
    desc11.putEnumerated(sTID("japaneseAlternate"), sTID("japaneseAlternate"), sTID("defaultForm"));
    desc11.putDouble(sTID("mojiZume"), 0);
    desc11.putEnumerated(sTID("gridAlignment"), sTID("gridAlignment"), sTID("roman"));
    desc11.putBoolean(sTID("noBreak"), false);
    var desc12 = new ActionDescriptor();
    desc12.putDouble(cTID('Rd  '), 0);
    desc12.putDouble(cTID('Grn '), 0);
    desc12.putDouble(cTID('Bl  '), 0);
    desc11.putObject(cTID('Clr '), sTID("RGBColor"), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Rd  '), 0);
    desc13.putDouble(cTID('Grn '), 0);
    desc13.putDouble(cTID('Bl  '), 0);
    desc11.putObject(sTID("strokeColor"), sTID("RGBColor"), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putString(sTID("fontPostScriptName"), "MyriadPro-Regular");
    desc14.putString(cTID('FntN'), "Myriad Pro");
    desc14.putString(cTID('FntS'), "Regular");
    desc14.putInteger(cTID('Scrp'), 0);
    desc14.putInteger(cTID('FntT'), 0);
    desc14.putBoolean(sTID("fontAvailable"), true);
    desc14.putUnitDouble(cTID('Sz  '), cTID('#Pxl'), 12);
    desc14.putUnitDouble(sTID("impliedFontSize"), cTID('#Pxl'), 12);
    desc14.putDouble(cTID('HrzS'), 100);
    desc14.putDouble(cTID('VrtS'), 100);
    desc14.putBoolean(sTID("syntheticBold"), false);
    desc14.putBoolean(sTID("syntheticItalic"), false);
    desc14.putBoolean(sTID("autoLeading"), true);
    desc14.putInteger(cTID('Trck'), 0);
    desc14.putUnitDouble(cTID('Bsln'), cTID('#Pxl'), 0);
    desc14.putUnitDouble(sTID("impliedBaselineShift"), cTID('#Pxl'), 0);
    desc14.putDouble(sTID("characterRotation"), 0);
    desc14.putEnumerated(cTID('AtKr'), cTID('AtKr'), sTID("metricsKern"));
    desc14.putEnumerated(sTID("fontCaps"), sTID("fontCaps"), cTID('Nrml'));
    desc14.putEnumerated(sTID("digitSet"), sTID("digitSet"), sTID("defaultDigits"));
    desc14.putEnumerated(sTID("dirOverride"), sTID("dirOverride"), sTID("dirOverrideDefault"));
    desc14.putEnumerated(sTID("kashidas"), sTID("kashidas"), sTID("kashidaDefault"));
    desc14.putEnumerated(sTID("diacVPos"), sTID("diacVPos"), sTID("diacVPosOpenType"));
    desc14.putUnitDouble(sTID("diacXOffset"), cTID('#Pxl'), 0);
    desc14.putUnitDouble(sTID("diacYOffset"), cTID('#Pxl'), 0);
    desc14.putUnitDouble(sTID("markYDistFromBaseline"), cTID('#Pxl'), 100);
    desc14.putEnumerated(sTID("baseline"), sTID("baseline"), cTID('Nrml'));
    desc14.putEnumerated(sTID("otbaseline"), sTID("otbaseline"), cTID('Nrml'));
    desc14.putEnumerated(sTID("strikethrough"), sTID("strikethrough"), sTID("strikethroughOff"));
    desc14.putEnumerated(cTID('Undl'), cTID('Undl'), sTID("underlineOff"));
    desc14.putUnitDouble(sTID("underlineOffset"), cTID('#Pxl'), 0);
    desc14.putBoolean(sTID("ligature"), true);
    desc14.putBoolean(sTID("altligature"), false);
    desc14.putBoolean(sTID("contextualLigatures"), false);
    desc14.putBoolean(sTID("alternateLigatures"), false);
    desc14.putBoolean(sTID("oldStyle"), false);
    desc14.putBoolean(sTID("fractions"), false);
    desc14.putBoolean(sTID("ordinals"), false);
    desc14.putBoolean(sTID("swash"), false);
    desc14.putBoolean(sTID("titling"), false);
    desc14.putBoolean(sTID("connectionForms"), false);
    desc14.putBoolean(sTID("stylisticAlternates"), false);
    desc14.putInteger(sTID("stylisticSets"), 0);
    desc14.putBoolean(sTID("ornaments"), false);
    desc14.putBoolean(sTID("justificationAlternates"), false);
    desc14.putEnumerated(sTID("figureStyle"), sTID("figureStyle"), cTID('Nrml'));
    desc14.putBoolean(sTID("proportionalMetrics"), false);
    desc14.putBoolean(cTID('kana'), false);
    desc14.putBoolean(sTID("italics"), false);
    desc14.putBoolean(cTID('ruby'), false);
    desc14.putEnumerated(sTID("baselineDirection"), sTID("baselineDirection"), sTID("rotated"));
    desc14.putEnumerated(sTID("textLanguage"), sTID("textLanguage"), sTID("englishLanguage"));
    desc14.putEnumerated(sTID("japaneseAlternate"), sTID("japaneseAlternate"), sTID("defaultForm"));
    desc14.putDouble(sTID("mojiZume"), 0);
    desc14.putEnumerated(sTID("gridAlignment"), sTID("gridAlignment"), sTID("roman"));
    desc14.putBoolean(sTID("enableWariChu"), false);
    desc14.putInteger(sTID("wariChuCount"), 2);
    desc14.putInteger(sTID("wariChuLineGap"), 0);
    desc14.putDouble(sTID("wariChuScale"), 0.5);
    desc14.putInteger(sTID("wariChuWidow"), 2);
    desc14.putInteger(sTID("wariChuOrphan"), 2);
    desc14.putEnumerated(sTID("wariChuJustification"), sTID("wariChuJustification"), sTID("wariChuAutoJustify"));
    desc14.putInteger(sTID("tcyUpDown"), 0);
    desc14.putInteger(sTID("tcyLeftRight"), 0);
    desc14.putDouble(sTID("leftAki"), -1);
    desc14.putDouble(sTID("rightAki"), -1);
    desc14.putInteger(sTID("jiDori"), 0);
    desc14.putBoolean(sTID("noBreak"), false);
    var desc15 = new ActionDescriptor();
    desc15.putDouble(cTID('Rd  '), 0);
    desc15.putDouble(cTID('Grn '), 0);
    desc15.putDouble(cTID('Bl  '), 0);
    desc14.putObject(cTID('Clr '), sTID("RGBColor"), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putDouble(cTID('Rd  '), 0);
    desc16.putDouble(cTID('Grn '), 0);
    desc16.putDouble(cTID('Bl  '), 0);
    desc14.putObject(sTID("strokeColor"), sTID("RGBColor"), desc16);
    desc14.putBoolean(cTID('Fl  '), true);
    desc14.putBoolean(cTID('Strk'), false);
    desc14.putBoolean(sTID("fillFirst"), true);
    desc14.putBoolean(sTID("fillOverPrint"), false);
    desc14.putBoolean(sTID("strokeOverPrint"), false);
    desc14.putEnumerated(sTID("lineCap"), sTID("lineCap"), sTID("buttCap"));
    desc14.putEnumerated(sTID("lineJoin"), sTID("lineJoin"), sTID("miterJoin"));
    desc14.putUnitDouble(sTID("lineWidth"), cTID('#Pxl'), 1);
    desc14.putUnitDouble(sTID("miterLimit"), cTID('#Pxl'), 4);
    desc14.putDouble(sTID("lineDashoffset"), 0);
    desc11.putObject(sTID("baseParentStyle"), cTID('TxtS'), desc14);
    desc10.putObject(cTID('TxtS'), cTID('TxtS'), desc11);
    list2.putObject(cTID('Txtt'), desc10);
    desc2.putList(cTID('Txtt'), list2);
    var list3 = new ActionList();
    var desc17 = new ActionDescriptor();
    desc17.putInteger(cTID('From'), 0);
    desc17.putInteger(cTID('T   '), 4);
    var desc18 = new ActionDescriptor();
    desc18.putBoolean(sTID("styleSheetHasParent"), true);
    desc18.putEnumerated(cTID('Algn'), cTID('Alg '), cTID('Cntr'));
    desc18.putEnumerated(sTID("burasagari"), sTID("burasagari"), sTID("burasagariStandard"));
    desc18.putBoolean(sTID("textEveryLineComposer"), true);
    desc17.putObject(sTID("paragraphStyle"), sTID("paragraphStyle"), desc18);
    list3.putObject(sTID("paragraphStyleRange"), desc17);
    desc2.putList(sTID("paragraphStyleRange"), list3);
    var list4 = new ActionList();
    desc2.putList(sTID("kerningRange"), list4);
    desc1.putObject(cTID('Usng'), cTID('TxLr'), desc2);
    desc1.putInteger(cTID('LyrI'), 7);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Number");
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Move
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 20);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Background");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(1);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), 255);
    desc4.putDouble(cTID('Grn '), 255);
    desc4.putDouble(cTID('Bl  '), 255);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    var desc5 = new ActionDescriptor();
    desc5.putInteger(sTID("unitValueQuadVersion"), 1);
    desc5.putUnitDouble(cTID('Top '), cTID('#Pxl'), 368);
    desc5.putUnitDouble(cTID('Left'), cTID('#Pxl'), 103);
    desc5.putUnitDouble(cTID('Btom'), cTID('#Pxl'), 422);
    desc5.putUnitDouble(cTID('Rght'), cTID('#Pxl'), 210);
    desc5.putUnitDouble(sTID("topRight"), cTID('#Pxl'), 0);
    desc5.putUnitDouble(sTID("topLeft"), cTID('#Pxl'), 0);
    desc5.putUnitDouble(sTID("bottomLeft"), cTID('#Pxl'), 0);
    desc5.putUnitDouble(sTID("bottomRight"), cTID('#Pxl'), 0);
    desc2.putObject(cTID('Shp '), cTID('Rctn'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putInteger(sTID("strokeStyleVersion"), 2);
    desc6.putBoolean(sTID("strokeEnabled"), true);
    desc6.putBoolean(sTID("fillEnabled"), true);
    desc6.putUnitDouble(sTID("strokeStyleLineWidth"), cTID('#Pxl'), 0.15);
    desc6.putUnitDouble(sTID("strokeStyleLineDashOffset"), cTID('#Pnt'), 0);
    desc6.putDouble(sTID("strokeStyleMiterLimit"), 100);
    desc6.putEnumerated(sTID("strokeStyleLineCapType"), sTID("strokeStyleLineCapType"), sTID("strokeStyleButtCap"));
    desc6.putEnumerated(sTID("strokeStyleLineJoinType"), sTID("strokeStyleLineJoinType"), sTID("strokeStyleMiterJoin"));
    desc6.putEnumerated(sTID("strokeStyleLineAlignment"), sTID("strokeStyleLineAlignment"), sTID("strokeStyleAlignCenter"));
    desc6.putBoolean(sTID("strokeStyleScaleLock"), false);
    desc6.putBoolean(sTID("strokeStyleStrokeAdjust"), false);
    var list1 = new ActionList();
    desc6.putList(sTID("strokeStyleLineDashSet"), list1);
    desc6.putEnumerated(sTID("strokeStyleBlendMode"), cTID('BlnM'), cTID('Nrml'));
    desc6.putUnitDouble(sTID("strokeStyleOpacity"), cTID('#Prc'), 100);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(sTID("redFloat"), -0.0000016205006);
    desc8.putDouble(sTID("greenFloat"), 5.59524039545067e-7);
    desc8.putDouble(sTID("blueFloat"), -6.69675159770122e-7);
    desc7.putObject(cTID('Clr '), sTID("RGBColor"), desc8);
    desc6.putObject(sTID("strokeStyleContent"), sTID("solidColorLayer"), desc7);
    desc6.putDouble(sTID("strokeStyleResolution"), 300);
    desc2.putObject(sTID("strokeStyle"), sTID("strokeStyle"), desc6);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    desc1.putInteger(cTID('LyrI'), 9);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Set
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Path'), cTID('Path'), sTID("vectorMask"));
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('T   '), ref2);
    desc1.putInteger(cTID('Vrsn'), 1);
    desc1.putBoolean(sTID("vectorMaskParams"), true);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Number");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(5);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Align
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSCentersV"));
    desc1.putBoolean(sTID("alignToCanvas"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
  };

  // Align
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSCentersH"));
    desc1.putBoolean(sTID("alignToCanvas"), false);
    executeAction(cTID('Algn'), desc1, dialogMode);
  };

  // Set
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Select
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Rectangle 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(9);
    list1.putInteger(8);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Merge Layers
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Move
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 3);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  step1(true, true);      // Make
  step2();      // Set
  step3();      // Move
  step4();      // Select
  step5();      // Make
  step6();      // Set
  step7();      // Select
  step8();      // Align
  step9();      // Align
  step10();      // Set
  step11();      // Select
  step12();      // Merge Layers
  step13(true, true);      // Move
};



//=========================================
//                    G_ns.main
//=========================================
//

G_ns.main = function () {
  G_ns();
};

G_ns.main();

// EOF

"19.jsx"
// EOF
