// ============================================================================
// SCRIPT CROP ẢNH THẺ (3x4 & 4x6) THEO TỶ LỆ KHUÔN MẶT (CHẨN ĐOÁN & CROP 600 DPI)
// Tác giả: Antigravity AI
// Mô tả: Hỗ trợ tùy chọn kích thước khung ảnh 3x4 cm hoặc 4x6 cm ở độ phân giải 600 DPI.
// ============================================================================

#target photoshop

function main() {
    if (!app.documents.length) {
        alert("Vui lòng mở một bức ảnh trong Photoshop trước khi chạy script!", "Lỗi");
        return;
    }

    var doc = app.activeDocument;

    // Lưu lại thiết lập đơn vị cũ của Photoshop
    var oldRulerUnits = app.preferences.rulerUnits;
    var oldTypeUnits = app.preferences.typeUnits;

    try {
        // Ép đơn vị đo về PIXELS để tính toán chính xác
        app.preferences.rulerUnits = Units.PIXELS;
        app.preferences.typeUnits = TypeUnits.PIXELS;

        var docW = Number(doc.width.value);
        var docH = Number(doc.height.value);
        var docDPI = Number(doc.resolution);

        var Y_head = -1;
        var Y_chin = -1;
        var X_center = docW / 2.0;
        var methodUsed = "";

        // --------------------------------------------------------------------
        // 1. ĐỌC TỌA ĐỘ GUIDE (THƯỚC KẺ NGANG & DỌC)
        // --------------------------------------------------------------------
        var hGuides = [];
        var vGuides = [];

        for (var i = 0; i < doc.guides.length; i++) {
            var g = doc.guides[i];
            var dirStr = String(g.direction);
            var val = Number(g.coordinate.value);

            if (dirStr.indexOf("HORIZONTAL") !== -1 || g.direction == Direction.HORIZONTAL) {
                hGuides.push(val);
            } else if (dirStr.indexOf("VERTICAL") !== -1 || g.direction == Direction.VERTICAL) {
                vGuides.push(val);
            }
        }

        // Sắp xếp các đường Guide ngang từ trên xuống
        hGuides.sort(function(a, b) { return a - b; });

        if (hGuides.length >= 2) {
            Y_head = hGuides[0];
            Y_chin = hGuides[hGuides.length - 1];

            if (vGuides.length > 0) {
                X_center = vGuides[0];
            }
            methodUsed = "2 Đường Guide (Thước căn)";
        } else {
            // ----------------------------------------------------------------
            // 2. PHƯƠNG ÁN DỰ PHÒNG: LẤY VÙNG CHỌN (SELECTION M)
            // ----------------------------------------------------------------
            try {
                var selBounds = doc.selection.bounds;
                Y_head = Number(selBounds[1].value);
                Y_chin = Number(selBounds[3].value);
                var selLeft = Number(selBounds[0].value);
                var selRight = Number(selBounds[2].value);
                X_center = (selLeft + selRight) / 2.0;
                methodUsed = "Vùng chọn (Rectangular Marquee)";
            } catch (eSel) {}
        }

        // Cảnh báo nếu chưa xác định được Đỉnh đầu và Cằm
        if (Y_head < 0 || Y_chin < 0 || Y_chin <= Y_head) {
            alert(
                "CHƯA XÁC ĐỊNH ĐƯỢC VỊ TRÍ ĐỈNH ĐẦU VÀ CẰM!\n\n" +
                "Vui lòng kéo 2 đường Guide ngang (Ctrl + R):\n" +
                "  • Đường 1: Đặt tại ĐỈNH ĐẦU\n" +
                "  • Đường 2: Đặt tại CẰM\n\n" +
                "Sau đó chạy lại script này.",
                "Hướng dẫn"
            );
            return;
        }

        var H_face = Y_chin - Y_head;

        // --------------------------------------------------------------------
        // 3. GIAO DIỆN CẤU HÌNH KÍCH THƯỚC & TỶ LỆ (3x4 và 4x6 @ 600 DPI)
        // --------------------------------------------------------------------
        var dlg = new Window("dialog", "Cấu hình Crop Ảnh Thẻ (3x4 & 4x6)");
        dlg.orientation = "column";
        dlg.alignChildren = ["fill", "top"];
        dlg.spacing = 10;
        dlg.margins = 15;

        // Bảng thông tin chẩn đoán
        var pnlDiag = dlg.add("panel", undefined, " Thông số nhận diện thực tế ");
        pnlDiag.orientation = "column";
        pnlDiag.alignChildren = ["left", "top"];
        pnlDiag.margins = 10;

        pnlDiag.add("statictext", undefined, "• Nhận diện bằng: " + methodUsed);
        pnlDiag.add("statictext", undefined, "• Ảnh gốc: " + Math.round(docW) + " x " + Math.round(docH) + " px (" + Math.round(docDPI) + " DPI)");
        pnlDiag.add("statictext", undefined, "• Đỉnh đầu: " + Math.round(Y_head) + " px | Cằm: " + Math.round(Y_chin) + " px");
        pnlDiag.add("statictext", undefined, "• Độ dài mặt: " + Math.round(H_face) + " px");

        // KHUNG CHỌN KÍCH THƯỚC ẢNH (3x4 hoặc 4x6)
        var pnlPhotoSize = dlg.add("panel", undefined, " Kích thước khung ảnh thẻ đầu ra ");
        pnlPhotoSize.orientation = "column";
        pnlPhotoSize.alignChildren = ["left", "top"];
        pnlPhotoSize.margins = 10;

        var rbSize34 = pnlPhotoSize.add("radiobutton", undefined, " Ảnh 3x4 cm (Đầu ra: 3cm x 4cm @ 600 DPI -> 709 x 945 px)");
        var rbSize46 = pnlPhotoSize.add("radiobutton", undefined, " Ảnh 4x6 cm (Đầu ra: 4cm x 6cm @ 600 DPI -> 945 x 1417 px)");
        rbSize34.value = true; // Mặc định chọn 3x4

        // Chọn tỷ lệ chiều cao khuôn mặt
        var pnlRatio = dlg.add("panel", undefined, " Tỷ lệ chiều cao khuôn mặt (Đỉnh đầu -> Cằm) ");
        pnlRatio.orientation = "column";
        pnlRatio.alignChildren = ["left", "top"];
        pnlRatio.margins = 10;

        var rbRatio23 = pnlRatio.add("radiobutton", undefined, " 2/3 (66.7%) chiều cao khung hình (Mặc định chuẩn ảnh thẻ/hộ chiếu)");
        var rbRatio75 = pnlRatio.add("radiobutton", undefined, " 75% chiều cao khung hình (Chuẩn Visa)");
        var rbRatio80 = pnlRatio.add("radiobutton", undefined, " 80% chiều cao khung hình (Chuẩn Visa đặc thù)");
        rbRatio23.value = true;

        // Lề trên
        var pnlMargin = dlg.add("panel", undefined, " Lề trên đỉnh đầu ");
        pnlMargin.orientation = "row";
        pnlMargin.alignChildren = ["left", "center"];
        pnlMargin.margins = 10;
        pnlMargin.add("statictext", undefined, "Khoảng lùi lề trên:");
        var txtMargin = pnlMargin.add("edittext", undefined, "10");
        txtMargin.characters = 5;
        pnlMargin.add("statictext", undefined, "%");

        var chkClearGuides = dlg.add("checkbox", undefined, " Xóa các đường Guide sau khi crop");
        chkClearGuides.value = true;

        var grpBtns = dlg.add("group");
        grpBtns.alignment = ["right", "center"];
        var btnCancel = grpBtns.add("button", undefined, "Hủy", {name: "cancel"});
        var btnOk = grpBtns.add("button", undefined, "Crop Ảnh", {name: "ok"});

        if (dlg.show() !== 1) {
            return;
        }

        // Tùy chọn kích thước khung ảnh (3x4 hay 4x6)
        var targetCmW = 3;
        var targetCmH = 4;
        var aspectWtoH = 3.0 / 4.0;
        var sizeLabel = "3x4 cm";

        if (rbSize46.value) {
            targetCmW = 4;
            targetCmH = 6;
            aspectWtoH = 4.0 / 6.0;
            sizeLabel = "4x6 cm";
        }

        // Tỷ lệ khuôn mặt đã chọn
        var faceRatio = 2.0 / 3.0;
        if (rbRatio75.value) faceRatio = 0.75;
        if (rbRatio80.value) faceRatio = 0.80;

        var marginPercent = parseFloat(txtMargin.text) / 100.0;
        if (isNaN(marginPercent) || marginPercent < 0) marginPercent = 0.10;

        // --------------------------------------------------------------------
        // 4. THỰC THI CROP & RESIZE VỀ KÍCH THƯỚC CHỌN @ 600 DPI
        // --------------------------------------------------------------------
        var H_crop = H_face / faceRatio;
        var W_crop = H_crop * aspectWtoH;

        var topMargin = H_crop * marginPercent;
        var cropTop = Y_head - topMargin;
        var cropBottom = cropTop + H_crop;
        var cropLeft = X_center - (W_crop / 2.0);
        var cropRight = X_center + (W_crop / 2.0);

        // Giới hạn vùng crop trong phạm vi canvas
        if (cropLeft < 0) cropLeft = 0;
        if (cropTop < 0) cropTop = 0;
        if (cropRight > docW) cropRight = docW;
        if (cropBottom > docH) cropBottom = docH;

        // Bỏ vùng chọn nét đứt nếu có
        try { doc.selection.deselect(); } catch (eD) {}

        // Mở khóa Background layer nếu cần
        try {
            if (doc.activeLayer.isBackgroundLayer) {
                doc.activeLayer.isBackgroundLayer = false;
            }
        } catch(eBg) {}

        // BƯỚC 4.1: CROP ẢNH THEO KHUNG TÍNH TOÁN
        var bounds = [
            new UnitValue(cropLeft, "px"),
            new UnitValue(cropTop, "px"),
            new UnitValue(cropRight, "px"),
            new UnitValue(cropBottom, "px")
        ];
        doc.crop(bounds);

        // BƯỚC 4.2: RESIZE VỀ KÍCH THƯỚC MỤC TIÊU (3x4cm HOẶC 4x6cm) @ 600 DPI
        app.preferences.rulerUnits = Units.CM;
        var targetW = new UnitValue(targetCmW, "cm");
        var targetH = new UnitValue(targetCmH, "cm");
        var targetDPI = 600;

        doc.resizeImage(targetW, targetH, targetDPI, ResampleMethod.BICUBICSHARPER);

        // BƯỚC 4.3: XÓA ĐƯỜNG GUIDE NẾU ĐƯỢC CHỌN
        if (chkClearGuides.value) {
            try { doc.guides.removeAll(); } catch (eG) {}
        }

    } catch (err) {
        alert("Lỗi thực thi Script:\n" + err.message + "\nDòng: " + err.line, "Lỗi");
    } finally {
        // Khôi phục cài đặt đơn vị ban đầu của người dùng
        try {
            app.preferences.rulerUnits = oldRulerUnits;
            app.preferences.typeUnits = oldTypeUnits;
        } catch (eFin) {}
    }
}

main();
