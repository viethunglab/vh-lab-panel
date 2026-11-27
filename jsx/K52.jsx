function Frezze() {
    if (ScriptUI.environment.keyboardState.shiftKey) {
        var idMk = charIDToTypeID("Mk  ");
        var desc17 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref14 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref14.putClass(idLyr);
        desc17.putReference(idnull, ref14);
        executeAction(idMk, desc17, DialogModes.NO);
        var idsetd = charIDToTypeID("setd");
        var desc18 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref15 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref15.putEnumerated(idLyr, idOrdn, idTrgt);
        desc18.putReference(idnull, ref15);
        var idT = charIDToTypeID("T   ");
        var desc19 = new ActionDescriptor();
        var idClr = charIDToTypeID("Clr ");
        var idClr = charIDToTypeID("Clr ");
        var idBl = charIDToTypeID("Bl  ");
        desc19.putEnumerated(idClr, idClr, idBl);
        var idLyr = charIDToTypeID("Lyr ");
        desc18.putObject(idT, idLyr, desc19);
        executeAction(idsetd, desc18, DialogModes.NO);
        var idsetd = charIDToTypeID("setd");
        var desc20 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref16 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref16.putEnumerated(idLyr, idOrdn, idTrgt);
        desc20.putReference(idnull, ref16);
        var idT = charIDToTypeID("T   ");
        var desc21 = new ActionDescriptor();
        var idNm = charIDToTypeID("Nm  ");
        desc21.putString(idNm, "Blank Overlay");
        var idLyr = charIDToTypeID("Lyr ");
        desc20.putObject(idT, idLyr, desc21);
        executeAction(idsetd, desc20, DialogModes.NO);
        var idsetd = charIDToTypeID("setd");
        var desc22 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref17 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref17.putEnumerated(idLyr, idOrdn, idTrgt);
        desc22.putReference(idnull, ref17);
        var idT = charIDToTypeID("T   ");
        var desc23 = new ActionDescriptor();
        var idMd = charIDToTypeID("Md  ");
        var idBlnM = charIDToTypeID("BlnM");
        var idOvrl = charIDToTypeID("Ovrl");
        desc23.putEnumerated(idMd, idBlnM, idOvrl);
        var idLyr = charIDToTypeID("Lyr ");
        desc22.putObject(idT, idLyr, desc23);
        executeAction(idsetd, desc22, DialogModes.NO);
    } else {
        function Overlay() {
            function step1(enabled, withDialog) {
                if (enabled != undefined && !enabled) {
                    return;
                }
                var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
                var desc1 = new ActionDescriptor();
                var ref1 = new ActionReference();
                ref1.putClass(PSClass.Layer);
                desc1.putReference(PSString.Null, ref1);
                var desc2 = new ActionDescriptor();
                desc2.putString(PSKey.Name, "D&B Overlay");
                desc2.putEnumerated(PSKey.Mode, PSType.BlendMode, PSEnum.Overlay);
                desc2.putBoolean(PSKey.FillNeutral, true);
                desc1.putObject(PSKey.Using, PSClass.Layer, desc2);
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
                desc2.putEnumerated(PSKey.Color, PSKey.Color, PSEnum.Blue);
                desc1.putObject(PSKey.To, PSClass.Layer, desc2);
                executeAction(PSEvent.Set, desc1, dialogMode);
            }
            step1();
            step2();
        }
        cTID = function(s) {
            return app.charIDToTypeID(s);
        };
        sTID = function(s) {
            return app.stringIDToTypeID(s);
        };
        Overlay.loadSymbols = function() {
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
            PSClass.Layer = cTID("Lyr ");
            PSEnum.Blue = cTID("Bl  ");
            PSEnum.Overlay = cTID("Ovrl");
            PSEnum.SoftLight = cTID("SftL");
            PSEnum.Target = cTID("Trgt");
            PSEvent.Make = cTID("Mk  ");
            PSEvent.Set = cTID("setd");
            PSKey.Color = cTID("Clr ");
            PSKey.FillNeutral = cTID("FlNt");
            PSKey.Mode = cTID("Md  ");
            PSKey.Name = cTID("Nm  ");
            PSKey.To = cTID("T   ");
            PSKey.Using = cTID("Usng");
            PSString.Null = sTID("null");
            PSType.BlendMode = cTID("BlnM");
            PSType.Ordinal = cTID("Ordn");
        };
        Overlay.loadSymbols();
        Overlay.main = function() {
            Overlay();
        };
        Overlay.main();
    }
}
historyState = "Ultimate Retouch - D&B Overlay";
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