#target photoshop
//
// Eyes_DramaticLashes.jsx
//

//
// Generated Mon May 24 2021 18:25:47 GMT+0700
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== Eyes: Dramatic Lashes ==============
//
function Eyes_DramaticLashes() {
  // Stop
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();

  };

  // Make
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Dramatic Lashes | Darken Lashes");
    desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Merge Visible
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('Dplc'), true);
    executeAction(sTID('mergeVisible'), desc1, dialogMode);
  };

  // High Pass
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 8);
    executeAction(sTID('highPass'), desc1, dialogMode);
  };

  // Gaussian Blur
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 2);
    executeAction(sTID('gaussianBlur'), desc1, dialogMode);
  };

  // Fade
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('SftL'));
    executeAction(cTID('Fade'), desc1, dialogMode);
  };

  // Desaturate
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('Dstt'), undefined, dialogMode);
  };

  // Curves
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
    var list1 = new ActionList();
    var desc2 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Cmps'));
    desc2.putReference(cTID('Chnl'), ref1);
    var list2 = new ActionList();
    list2.putInteger(0);
    list2.putInteger(1);
    list2.putInteger(2);
    list2.putInteger(3);
    list2.putInteger(4);
    list2.putInteger(5);
    list2.putInteger(6);
    list2.putInteger(7);
    list2.putInteger(8);
    list2.putInteger(9);
    list2.putInteger(10);
    list2.putInteger(11);
    list2.putInteger(12);
    list2.putInteger(13);
    list2.putInteger(14);
    list2.putInteger(15);
    list2.putInteger(16);
    list2.putInteger(17);
    list2.putInteger(18);
    list2.putInteger(19);
    list2.putInteger(20);
    list2.putInteger(21);
    list2.putInteger(22);
    list2.putInteger(23);
    list2.putInteger(24);
    list2.putInteger(25);
    list2.putInteger(26);
    list2.putInteger(27);
    list2.putInteger(28);
    list2.putInteger(29);
    list2.putInteger(30);
    list2.putInteger(31);
    list2.putInteger(32);
    list2.putInteger(33);
    list2.putInteger(34);
    list2.putInteger(35);
    list2.putInteger(36);
    list2.putInteger(37);
    list2.putInteger(38);
    list2.putInteger(39);
    list2.putInteger(40);
    list2.putInteger(41);
    list2.putInteger(42);
    list2.putInteger(43);
    list2.putInteger(44);
    list2.putInteger(45);
    list2.putInteger(46);
    list2.putInteger(47);
    list2.putInteger(48);
    list2.putInteger(49);
    list2.putInteger(50);
    list2.putInteger(51);
    list2.putInteger(52);
    list2.putInteger(53);
    list2.putInteger(54);
    list2.putInteger(55);
    list2.putInteger(56);
    list2.putInteger(57);
    list2.putInteger(58);
    list2.putInteger(59);
    list2.putInteger(60);
    list2.putInteger(61);
    list2.putInteger(62);
    list2.putInteger(63);
    list2.putInteger(64);
    list2.putInteger(65);
    list2.putInteger(66);
    list2.putInteger(67);
    list2.putInteger(68);
    list2.putInteger(69);
    list2.putInteger(70);
    list2.putInteger(71);
    list2.putInteger(72);
    list2.putInteger(73);
    list2.putInteger(74);
    list2.putInteger(75);
    list2.putInteger(76);
    list2.putInteger(77);
    list2.putInteger(78);
    list2.putInteger(79);
    list2.putInteger(80);
    list2.putInteger(81);
    list2.putInteger(82);
    list2.putInteger(83);
    list2.putInteger(84);
    list2.putInteger(85);
    list2.putInteger(86);
    list2.putInteger(87);
    list2.putInteger(88);
    list2.putInteger(89);
    list2.putInteger(90);
    list2.putInteger(91);
    list2.putInteger(92);
    list2.putInteger(93);
    list2.putInteger(94);
    list2.putInteger(95);
    list2.putInteger(96);
    list2.putInteger(97);
    list2.putInteger(98);
    list2.putInteger(99);
    list2.putInteger(100);
    list2.putInteger(101);
    list2.putInteger(102);
    list2.putInteger(103);
    list2.putInteger(104);
    list2.putInteger(105);
    list2.putInteger(106);
    list2.putInteger(107);
    list2.putInteger(108);
    list2.putInteger(109);
    list2.putInteger(110);
    list2.putInteger(111);
    list2.putInteger(112);
    list2.putInteger(113);
    list2.putInteger(114);
    list2.putInteger(115);
    list2.putInteger(116);
    list2.putInteger(117);
    list2.putInteger(118);
    list2.putInteger(119);
    list2.putInteger(120);
    list2.putInteger(121);
    list2.putInteger(122);
    list2.putInteger(123);
    list2.putInteger(124);
    list2.putInteger(125);
    list2.putInteger(126);
    list2.putInteger(127);
    list2.putInteger(128);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    list2.putInteger(129);
    desc2.putList(cTID('Mpng'), list2);
    list1.putObject(cTID('CrvA'), desc2);
    desc1.putList(cTID('Adjs'), list1);
    executeAction(cTID('Crvs'), desc1, dialogMode);
  };

  // Layer Via Copy
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Move
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 1);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Set
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Layers
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Layer Via Copy
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Move
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 0);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), -1);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Set
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Merge Layers
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Layer Via Copy
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Set
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Move
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), -1);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 0);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Merge Layers
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Layer Via Copy
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('copyToLayer'), undefined, dialogMode);
  };

  // Set
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Drkn'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Move
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Hrzn'), cTID('#Pxl'), 1);
    desc2.putUnitDouble(cTID('Vrtc'), cTID('#Pxl'), 1);
    desc1.putObject(cTID('T   '), cTID('Ofst'), desc2);
    executeAction(cTID('move'), desc1, dialogMode);
  };

  // Merge Layers
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('mergeLayersNew'), desc1, dialogMode);
  };

  // Set
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Ovrl'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Make
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "TEMP - Nothing");
    desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Dramatic Lashes | Darken Lashes");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Make
  function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "Dramatic Lashes");
    desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Delete
  function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "TEMP - Nothing");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Make
  function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putClass(cTID('Nw  '), cTID('Chnl'));
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
    desc1.putReference(cTID('At  '), ref1);
    desc1.putEnumerated(cTID('Usng'), cTID('UsrM'), cTID('HdAl'));
    executeAction(cTID('Mk  '), desc1, dialogMode);
  };

  // Select
  function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('PbTl'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Reset
  function step32(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Clr '), cTID('Clrs'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Rset'), desc1, dialogMode);
  };

  // Set
  function step33(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 50);
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  step1(true, true);      // Stop
  step2();      // Make
  step3();      // Merge Visible
  step4();      // High Pass
  step5();      // Gaussian Blur
  step6();      // Fade
  step7();      // Desaturate
  step8();      // Curves
  step9();      // Layer Via Copy
  step10();      // Move
  step11();      // Set
  step12();      // Merge Layers
  step13();      // Layer Via Copy
  step14();      // Move
  step15();      // Set
  step16();      // Merge Layers
  step17();      // Layer Via Copy
  step18();      // Set
  step19(true, true);      // Move
  step20(true, true);      // Merge Layers
  step21();      // Layer Via Copy
  step22();      // Set
  step23();      // Move
  step24();      // Merge Layers
  step25();      // Set
  step26();      // Make
  step27();      // Select
  step28();      // Make
  step29();      // Delete
  step30();      // Make
  step31();      // Select
  step32();      // Reset
  step33();      // Set
};



//=========================================
//                    Eyes_DramaticLashes.main
//=========================================
//

Eyes_DramaticLashes.main = function () {
  Eyes_DramaticLashes();
};

Eyes_DramaticLashes.main();

// EOF

"Eyes_DramaticLashes.jsx"
// EOF
