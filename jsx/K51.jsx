function Frezze() {
    function Curves() {
        function step1(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putClass(PSClass.AdjustmentLayer);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            var desc3 = new ActionDescriptor();
            desc3.putEnumerated(PSString.presetKind, PSString.presetKindType, PSString.presetKindDefault);
            desc2.putObject(PSKey.Type, PSClass.Curves, desc3);
            desc1.putObject(PSKey.Using, PSClass.AdjustmentLayer, desc2);
            executeAction(PSEvent.Make, desc1, dialogMode);
        }

        function step2(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putString(PSKey.Name, "Burn");
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step3(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            executeAction(PSEvent.Invert, undefined, dialogMode);
        }

        function step4(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Channel, PSClass.Channel, PSEnum.RGB);
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step5(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.AdjustmentLayer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putEnumerated(PSString.presetKind, PSString.presetKindType, PSString.presetKindCustom);
            var list1 = new ActionList();
            var desc3 = new ActionDescriptor();
            var ref2 = new ActionReference();
            ref2.putEnumerated(PSClass.Channel, PSClass.Channel, PSEnum.Composite);
            desc3.putReference(PSClass.Channel, ref2);
            var list2 = new ActionList();
            var desc4 = new ActionDescriptor();
            desc4.putDouble(PSKey.Horizontal, 0);
            desc4.putDouble(PSKey.Vertical, 0);
            list2.putObject(PSClass.Point, desc4);
            var desc5 = new ActionDescriptor();
            desc5.putDouble(PSKey.Horizontal, 165);
            desc5.putDouble(PSKey.Vertical, 125);
            list2.putObject(PSClass.Point, desc5);
            var desc6 = new ActionDescriptor();
            desc6.putDouble(PSKey.Horizontal, 255);
            desc6.putDouble(PSKey.Vertical, 255);
            list2.putObject(PSClass.Point, desc6);
            desc3.putList(PSKey.Curve, list2);
            list1.putObject(PSClass.CurvesAdjustment, desc3);
            desc2.putList(PSKey.Adjustment, list1);
            desc1.putObject(PSKey.To, PSClass.Curves, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step6(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step7(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step8(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step9(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step10(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putClass(PSClass.AdjustmentLayer);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            var desc3 = new ActionDescriptor();
            desc3.putEnumerated(PSString.presetKind, PSString.presetKindType, PSString.presetKindDefault);
            desc2.putObject(PSKey.Type, PSClass.Curves, desc3);
            desc1.putObject(PSKey.Using, PSClass.AdjustmentLayer, desc2);
            executeAction(PSEvent.Make, desc1, dialogMode);
        }

        function step11(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Channel, PSClass.Channel, PSEnum.RGB);
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step12(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putString(PSKey.Name, "Dodge");
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step13(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Channel, PSClass.Channel, PSClass.Mask);
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step14(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            executeAction(PSEvent.Invert, undefined, dialogMode);
        }

        function step15(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Channel, PSClass.Channel, PSEnum.RGB);
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step16(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.AdjustmentLayer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putEnumerated(PSString.presetKind, PSString.presetKindType, PSString.presetKindCustom);
            var list1 = new ActionList();
            var desc3 = new ActionDescriptor();
            var ref2 = new ActionReference();
            ref2.putEnumerated(PSClass.Channel, PSClass.Channel, PSEnum.Composite);
            desc3.putReference(PSClass.Channel, ref2);
            var list2 = new ActionList();
            var desc4 = new ActionDescriptor();
            desc4.putDouble(PSKey.Horizontal, 0);
            desc4.putDouble(PSKey.Vertical, 0);
            list2.putObject(PSClass.Point, desc4);
            var desc5 = new ActionDescriptor();
            desc5.putDouble(PSKey.Horizontal, 85);
            desc5.putDouble(PSKey.Vertical, 125);
            list2.putObject(PSClass.Point, desc5);
            var desc6 = new ActionDescriptor();
            desc6.putDouble(PSKey.Horizontal, 255);
            desc6.putDouble(PSKey.Vertical, 255);
            list2.putObject(PSClass.Point, desc6);
            desc3.putList(PSKey.Curve, list2);
            list1.putObject(PSClass.CurvesAdjustment, desc3);
            desc2.putList(PSKey.Adjustment, list1);
            desc1.putObject(PSKey.To, PSClass.Curves, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step17(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step18(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step19(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step20(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step21(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step22(withDialog, enabled) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putName(PSClass.Layer, "Burn");
            desc1.putReference(PSString.Null, ref1);
            desc1.putEnumerated(PSString.selectionModifier, PSString.selectionModifierType, PSString.addToSelectionContinuous);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
            var idslct = charIDToTypeID("slct");
            var desc1697 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref894 = new ActionReference();
            var idLyr = charIDToTypeID("Lyr ");
            ref894.putName(idLyr, "Burn");
            desc1697.putReference(idnull, ref894);
            var idMkVs = charIDToTypeID("MkVs");
            desc1697.putBoolean(idMkVs, false);
            var idLyrI = charIDToTypeID("LyrI");
            var list503 = new ActionList();
            list503.putInteger(279);
            desc1697.putList(idLyrI, list503);
            executeAction(idslct, desc1697, DialogModes.NO);
            var idslct = charIDToTypeID("slct");
            var desc1698 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref895 = new ActionReference();
            var idLyr = charIDToTypeID("Lyr ");
            ref895.putName(idLyr, "Dodge");
            desc1698.putReference(idnull, ref895);
            var idselectionModifier = stringIDToTypeID("selectionModifier");
            var idselectionModifierType = stringIDToTypeID("selectionModifierType");
            var idaddToSelectionContinuous = stringIDToTypeID("addToSelectionContinuous");
            desc1698.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelectionContinuous);
            var idMkVs = charIDToTypeID("MkVs");
            desc1698.putBoolean(idMkVs, false);
            var idLyrI = charIDToTypeID("LyrI");
            var list504 = new ActionList();
            list504.putInteger(279);
            list504.putInteger(280);
            desc1698.putList(idLyrI, list504);
            executeAction(idslct, desc1698, DialogModes.NO);
            var idMk = charIDToTypeID("Mk  ");
            var desc1699 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref896 = new ActionReference();
            var idlayerSection = stringIDToTypeID("layerSection");
            ref896.putClass(idlayerSection);
            desc1699.putReference(idnull, ref896);
            var idFrom = charIDToTypeID("From");
            var ref897 = new ActionReference();
            var idLyr = charIDToTypeID("Lyr ");
            var idOrdn = charIDToTypeID("Ordn");
            var idTrgt = charIDToTypeID("Trgt");
            ref897.putEnumerated(idLyr, idOrdn, idTrgt);
            desc1699.putReference(idFrom, ref897);
            var idlayerSectionStart = stringIDToTypeID("layerSectionStart");
            desc1699.putInteger(idlayerSectionStart, 281);
            var idlayerSectionEnd = stringIDToTypeID("layerSectionEnd");
            desc1699.putInteger(idlayerSectionEnd, 282);
            var idNm = charIDToTypeID("Nm  ");
            desc1699.putString(idNm, "Group 1");
            executeAction(idMk, desc1699, DialogModes.NO);
        }

        function step23(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step24(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putString(PSKey.Name, "D&B Curves");
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step25(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step26(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step27(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step28(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
        }

        function step29(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putName(PSClass.Layer, "Dodge");
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step30(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putClass(PSClass.PaintbrushTool);
            desc1.putReference(PSString.Null, ref1);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step31(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putEnumerated(PSKey.Color, PSKey.Color, PSEnum.Blue);
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step32(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putEnumerated(PSKey.Color, PSKey.Color, PSEnum.Blue);
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }

        function step33(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putName(PSClass.Layer, "D&B Curves");
            desc1.putReference(PSString.Null, ref1);
            desc1.putBoolean(PSKey.MakeVisible, false);
            executeAction(PSEvent.Select, desc1, dialogMode);
        }

        function step34(enabled, withDialog) {
            if (enabled != undefined && !enabled) {
                return;
            }
            var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
            var desc1 = new ActionDescriptor();
            var ref1 = new ActionReference();
            ref1.putEnumerated(PSClass.Layer, PSType.Ordinal, PSEnum.Target);
            desc1.putReference(PSString.Null, ref1);
            var desc2 = new ActionDescriptor();
            desc2.putEnumerated(PSKey.Color, PSKey.Color, PSEnum.Blue);
            desc1.putObject(PSKey.To, PSClass.Layer, desc2);
            executeAction(PSEvent.Set, desc1, dialogMode);
        }
        step1();
        step2();
        step3();
        step4();
        step5();
        step6();
        step7();
        step8();
        step9();
        step10();
        step11();
        step12();
        step13();
        step14();
        step15();
        step16();
        step17();
        step18();
        step19();
        step20();
        step21();
        step22();
        step23();
        step24();
        step25();
        step26();
        step27();
        step28();
        step29();
        step30();
        step31();
        step32();
        step33();
        step34();
    }
    cTID = function(s) {
        return app.charIDToTypeID(s);
    };
    sTID = function(s) {
        return app.stringIDToTypeID(s);
    };
    Curves.loadSymbols = function() {
        var dbgLevel = $.level;
        $.level = 0;
        try {
            PSConstants;
            return;
        } catch (e) {

        } finally {
            $.level = dbgLevel;
        }
        var needDefs = true;
        $.level = 0;
        try {
            PSClass;
            needDefs = false;
        } catch (e) {

        } finally {
            $.level = dbgLevel;
        }
        if (needDefs) {
            PSClass = function() {

            };
            PSEnum = function() {

            };
            PSEvent = function() {

            };
            PSForm = function() {

            };
            PSKey = function() {

            };
            PSType = function() {

            };
            PSUnit = function() {

            };
            PSString = function() {

            };
        }
        PSClass.AdjustmentLayer = cTID("AdjL");
        PSClass.Channel = cTID("Chnl");
        PSClass.ChannelMatrix = cTID("ChMx");
        PSClass.ChannelMixer = cTID("ChnM");
        PSClass.Curves = cTID("Crvs");
        PSClass.CurvesAdjustment = cTID("CrvA");
        PSClass.HueSatAdjustmentV2 = cTID("Hst2");
        PSClass.HueSaturation = cTID("HStr");
        PSClass.Layer = cTID("Lyr ");
        PSClass.Mask = cTID("Msk ");
        PSClass.PaintbrushTool = cTID("PbTl");
        PSClass.Point = cTID("Pnt ");
        PSEnum.Blue = cTID("Bl  ");
        PSEnum.Composite = cTID("Cmps");
        PSEnum.Luminosity = cTID("Lmns");
        PSEnum.Midtones = cTID("Mdtn");
        PSEnum.RGB = cTID("RGB ");
        PSEnum.RevealAll = cTID("RvlA");
        PSEnum.Target = cTID("Trgt");
        PSEvent.Delete = cTID("Dlt ");
        PSEvent.Hide = cTID("Hd  ");
        PSEvent.Invert = cTID("Invr");
        PSEvent.Make = cTID("Mk  ");
        PSEvent.Select = cTID("slct");
        PSEvent.Set = cTID("setd");
        PSEvent.Show = cTID("Shw ");
        PSKey.Adjustment = cTID("Adjs");
        PSKey.At = cTID("At  ");
        PSKey.Color = cTID("Clr ");
        PSKey.Colorize = cTID("Clrz");
        PSKey.Colors = cTID("Clrs");
        PSKey.Constrain = cTID("Cnst");
        PSKey.Curve = cTID("Crv ");
        PSKey.From = cTID("From");
        PSKey.Gray = cTID("Gry ");
        PSKey.Green = cTID("Grn ");
        PSKey.Horizontal = cTID("Hrzn");
        PSKey.Hue = cTID("H   ");
        PSKey.Lightness = cTID("Lght");
        PSKey.MakeVisible = cTID("MkVs");
        PSKey.Mode = cTID("Md  ");
        PSKey.Monochromatic = cTID("Mnch");
        PSKey.Name = cTID("Nm  ");
        PSKey.New = cTID("Nw  ");
        PSKey.Opacity = cTID("Opct");
        PSKey.Radius = cTID("Rds ");
        PSKey.Red = cTID("Rd  ");
        PSKey.Start = cTID("Strt");
        PSKey.To = cTID("T   ");
        PSKey.Type = cTID("Type");
        PSKey.Using = cTID("Usng");
        PSKey.Vertical = cTID("Vrtc");
        PSString.Null = sTID("null");
        PSString.addToSelectionContinuous = sTID("addToSelectionContinuous");
        PSString.layerGroup = sTID("layerSection");
        PSString.presetKind = sTID("presetKind");
        PSString.presetKindCustom = sTID("presetKindCustom");
        PSString.presetKindDefault = sTID("presetKindDefault");
        PSString.presetKindType = sTID("presetKindType");
        PSString.selectionModifier = sTID("selectionModifier");
        PSString.selectionModifierType = sTID("selectionModifierType");
        PSType.BlendMode = cTID("BlnM");
        PSType.Ordinal = cTID("Ordn");
        PSType.UserMaskOptions = cTID("UsrM");
        PSUnit.Percent = cTID("#Prc");
        PSUnit.Pixels = cTID("#Pxl");
    };
    Curves.loadSymbols();
    Curves.main = function() {
        Curves();
    };
    Curves.main();
}
historyState = "Ultimate Retouch - D&B Curves";
if (app) {
    ErrStrs = {};
    ErrStrs.USER_CANCELED = localize("$$$/ScriptingSupport/Errors/UserCancelled");
    var historyStateNow = -1;
    do {
        historyStateNow++
    } while (app.activeDocument.activeHistoryState != app.activeDocument.historyStates[historyStateNow])
    try {
        app.activeDocument.suspendHistory(historyState, "Frezze()");
    } catch (e) {
        if (e.number != 8007) {
            alert(e + " : " + e.line);
        }
    }
}