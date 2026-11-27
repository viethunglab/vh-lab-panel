// ============================================================================
// SCRIPT CROP ẢNH CHÂN DUNG 10x15 CM @ 300 DPI (THANH TRƯỢT TÙY CHỈNH TỶ LỆ)
// Tác giả: Antigravity AI
// Mô tả: Crop file ảnh lớn về khổ 10cm x 15cm @ 300 DPI theo 4 đường Guide:
//       • 2 Guide ngang: ĐỈNH ĐẦU & CẰM.
//       • 2 Guide dọc: VIỀN MẶT TRÁI & VIỀN MẶT PHẢI (không tính tai) để cân giữa.
//       • Thanh trượt (Slider) tùy chỉnh tỷ lệ khuôn mặt từ 30% đến 60% linh hoạt.
//       • 2 chế độ mẫu chuẩn: Người lớn (43%) & Trẻ em (41%).
// ============================================================================

#target photoshop

function main() {
    if (!app.documents.length) {
        alert("Vui lòng mở một bức ảnh trong Photoshop trước khi chạy script!", "Thông báo");
        return;
    }

    var doc = app.activeDocument;

    // Lưu lại cài đặt đơn vị ban đầu của người dùng
    var oldRulerUnits = app.preferences.rulerUnits;
    var oldTypeUnits = app.preferences.typeUnits;

    try {
        // Ép đơn vị đo về PIXELS để tính toán chuẩn xác 100%
        app.preferences.rulerUnits = Units.PIXELS;
        app.preferences.typeUnits = TypeUnits.PIXELS;

        var docW = Number(doc.width.value);
        var docH = Number(doc.height.value);
        var docDPI = Number(doc.resolution);

        // --------------------------------------------------------------------
        // 1. ĐỌC TỌA ĐỘ CÁC ĐƯỜNG GUIDE (2 NGANG VÀ 2 DỌC BẮT BUỘC)
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

        // Kiểm tra xem đã đủ 2 Guide ngang và 2 Guide dọc chưa
        if (hGuides.length < 2 || vGuides.length < 2) {
            var msg = "YÊU CẦU ĐỦ 4 ĐƯỜNG GUIDE ĐỂ CROP 10x15 CM:\n\n";

            if (hGuides.length < 2) {
                msg += "❌ Thiếu Guide ngang: Cần 2 đường ngang (1 đường ở ĐỈNH ĐẦU và 1 đường ở ĐÁY CẰM).\n";
            } else {
                msg += "✅ Guide ngang: Đã có đủ 2 đường.\n";
            }

            if (vGuides.length < 2) {
                msg += "❌ Thiếu Guide dọc: Cần 2 đường dọc ở 2 bên VIỀN MÁ (không tính tai) để cân giữa hình.\n";
            } else {
                msg += "✅ Guide dọc: Đã có đủ 2 đường.\n";
            }

            msg += "\n👉 Hãy kéo đủ 4 đường Guide từ thước kẻ (Ctrl + R) rồi chạy lại script.";
            alert(msg, "Chưa đủ 4 đường Guide");
            return;
        }

        // Sắp xếp các đường Guide theo thứ tự
        hGuides.sort(function(a, b) { return a - b; });
        vGuides.sort(function(a, b) { return a - b; });

        // Đường Guide ngang trên: Đỉnh đầu
        var Y_head = hGuides[0];
        // Đường Guide ngang dưới: Đáy cằm
        var Y_chin = hGuides[hGuides.length - 1];

        var H_face = Y_chin - Y_head;
        if (H_face <= 0) {
            alert("Vị trí đường Guide ngang không hợp lệ! Đường Đỉnh đầu phải ở trên đường Cằm.", "Lỗi");
            return;
        }

        // Hai đường Guide dọc ở viền 2 bên khuôn mặt (không tính tai)
        var X_face_left = vGuides[0];
        var X_face_right = vGuides[vGuides.length - 1];

        if (X_face_right <= X_face_left) {
            alert("Vị trí đường Guide dọc không hợp lệ! Đường viền mặt trái phải nằm bên trái đường viền mặt phải.", "Lỗi");
            return;
        }

        // Cân giữa khuôn hình theo trung điểm của 2 đường viền mặt
        var X_center = (X_face_left + X_face_right) / 2.0;

        // --------------------------------------------------------------------
        // 2. CỬA SỔ TÙY CHỌN & THANH TRƯỢT TỶ LỆ KHUÔN MẶT
        // --------------------------------------------------------------------
        var dlg = new Window("dialog", "Crop Chân Dung 10x15 cm @ 300 DPI");
        dlg.orientation = "column";
        dlg.alignChildren = ["fill", "top"];
        dlg.spacing = 10;
        dlg.margins = 15;

        // Panel chọn đối tượng mẫu
        var pnlTarget = dlg.add("panel", undefined, " Chế độ đối tượng ");
        pnlTarget.orientation = "column";
        pnlTarget.alignChildren = ["left", "top"];
        pnlTarget.margins = 12;

        var rbAdult = pnlTarget.add("radiobutton", undefined, " Người lớn (Mặc định: Khuôn mặt 43% | Đỉnh đầu 13% | Thân áo 44%)");
        var rbChild = pnlTarget.add("radiobutton", undefined, " Trẻ em:             Khuôn mặt 41% | Đỉnh đầu 15% | Thân áo 44%");
        rbAdult.value = true; // Mặc định chọn Người lớn

        // Panel thanh trượt tùy chỉnh tỷ lệ khuôn mặt
        var pnlSlider = dlg.add("panel", undefined, " Thanh trượt điều chỉnh tỷ lệ khuôn mặt ");
        pnlSlider.orientation = "column";
        pnlSlider.alignChildren = ["fill", "top"];
        pnlSlider.margins = 12;
        pnlSlider.spacing = 8;

        var grpControls = pnlSlider.add("group");
        grpControls.orientation = "row";
        grpControls.alignChildren = ["left", "center"];
        grpControls.spacing = 8;

        grpControls.add("statictext", undefined, "Tỷ lệ mặt:");
        var sldFace = grpControls.add("slider", undefined, 43, 30, 60);
        sldFace.preferredSize.width = 200;

        var txtFace = grpControls.add("edittext", undefined, "43");
        txtFace.characters = 4;
        grpControls.add("statictext", undefined, "%");

        // Dòng trạng thái phân bổ tỷ lệ thời gian thực
        var lblRatioDistribution = pnlSlider.add("statictext", undefined, "• Bố cục: Đỉnh đầu 13% | Khuôn mặt 43% | Thân áo 44%");
        lblRatioDistribution.graphics.foregroundColor = lblRatioDistribution.graphics.newPen(dlg.graphics.PenType.SOLID_COLOR, [0, 0.5, 0.8, 1], 1);

        // Panel thông số chẩn đoán
        var pnlDiag = dlg.add("panel", undefined, " Thông số nhận diện thực tế ");
        pnlDiag.orientation = "column";
        pnlDiag.alignChildren = ["left", "top"];
        pnlDiag.margins = 10;

        pnlDiag.add("statictext", undefined, "• Chiều dài khuôn mặt (Đỉnh đầu -> Cằm): " + Math.round(H_face) + " px");
        pnlDiag.add("statictext", undefined, "• Tọa độ: Đỉnh đầu " + Math.round(Y_head) + " px | Cằm " + Math.round(Y_chin) + " px");
        pnlDiag.add("statictext", undefined, "• Trục giữa mặt: " + Math.round(X_center) + " px (Cân giữa 2 viền má)");
        var lblCropSize = pnlDiag.add("statictext", undefined, "• Khung crop dự kiến: ... px");
        pnlDiag.add("statictext", undefined, "• Kích thước đầu ra: 10cm x 15cm @ 300 DPI (1181 x 1772 px)");

        // Hàm cập nhật hiển thị đồng bộ khi thay đổi thanh trượt / radio
        function updateUI(faceVal) {
            var headVal = rbChild.value ? 15 : 13;
            var bodyVal = 100 - headVal - faceVal;

            lblRatioDistribution.text = "• Bố cục: Đỉnh đầu " + headVal + "% | Khuôn mặt " + faceVal + "% | Thân áo " + bodyVal + "%";

            var estH = Math.round(H_face / (faceVal / 100.0));
            var estW = Math.round(estH * (10.0 / 15.0));
            lblCropSize.text = "• Khung crop dự kiến: " + estW + " x " + estH + " px";
        }

        // Sự kiện khi kéo thanh trượt
        sldFace.onChanging = function() {
            var val = Math.round(sldFace.value);
            txtFace.text = String(val);
            updateUI(val);
        };

        // Sự kiện khi nhập số trực tiếp vào ô text
        txtFace.onChange = function() {
            var val = parseInt(txtFace.text, 10);
            if (isNaN(val)) val = 43;
            if (val < 30) val = 30;
            if (val > 60) val = 60;
            txtFace.text = String(val);
            sldFace.value = val;
            updateUI(val);
        };

        // Sự kiện khi chọn Radio Người lớn
        rbAdult.onClick = function() {
            sldFace.value = 43;
            txtFace.text = "43";
            updateUI(43);
        };

        // Sự kiện khi chọn Radio Trẻ em
        rbChild.onClick = function() {
            sldFace.value = 41;
            txtFace.text = "41";
            updateUI(41);
        };

        // Khởi tạo thông số ban đầu
        updateUI(43);

        // Nút bấm
        var grpBtns = dlg.add("group");
        grpBtns.alignment = ["right", "center"];
        var btnCancel = grpBtns.add("button", undefined, "Hủy", {name: "cancel"});
        var btnOk = grpBtns.add("button", undefined, "Crop Ảnh 10x15", {name: "ok"});

        if (dlg.show() !== 1) {
            return; // Người dùng bấm Hủy
        }

        // --------------------------------------------------------------------
        // 3. TÍNH TOÁN THÔNG SỐ CROP THEO TỶ LỆ ĐÃ CHỌN
        // --------------------------------------------------------------------
        var facePercent = parseInt(txtFace.text, 10);
        if (isNaN(facePercent) || facePercent < 20 || facePercent > 80) {
            facePercent = 43;
        }

        var faceRatio = facePercent / 100.0;
        var headspaceRatio = rbChild.value ? 0.15 : 0.13;

        // Chiều cao và Chiều rộng khung crop
        var H_crop = H_face / faceRatio;
        var W_crop = H_crop * (10.0 / 15.0); // Tỷ lệ 10:15 (2:3)

        // Khoảng lùi đỉnh đầu
        var topMargin = H_crop * headspaceRatio;
        var cropTop = Y_head - topMargin;
        var cropBottom = cropTop + H_crop;

        // Tọa độ mép trái & phải căn đối xứng qua trục tâm mặt X_center
        var cropLeft = X_center - (W_crop / 2.0);
        var cropRight = X_center + (W_crop / 2.0);

        // Bỏ vùng chọn nét đứt nếu có
        try { doc.selection.deselect(); } catch (eD) {}

        // Mở khóa Background layer nếu đang bị khóa
        try {
            if (doc.activeLayer.isBackgroundLayer) {
                doc.activeLayer.isBackgroundLayer = false;
            }
        } catch(eBg) {}

        // Mở rộng Canvas nếu vùng crop chờm ra ngoài phạm vi ảnh gốc
        var padLeft = cropLeft < 0 ? Math.abs(cropLeft) : 0;
        var padTop = cropTop < 0 ? Math.abs(cropTop) : 0;
        var padRight = cropRight > docW ? (cropRight - docW) : 0;
        var padBottom = cropBottom > docH ? (cropBottom - docH) : 0;

        if (padLeft > 0 || padTop > 0 || padRight > 0 || padBottom > 0) {
            var newW = docW + padLeft + padRight;
            var newH = docH + padTop + padBottom;
            doc.resizeCanvas(new UnitValue(newW, "px"), new UnitValue(newH, "px"), AnchorPosition.TOPLEFT);
            cropLeft += padLeft;
            cropRight += padLeft;
            cropTop += padTop;
            cropBottom += padTop;
        }

        // --------------------------------------------------------------------
        // 4. THỰC THI CROP & RESIZE VỀ 10x15 CM @ 300 DPI
        // --------------------------------------------------------------------
        var bounds = [
            new UnitValue(cropLeft, "px"),
            new UnitValue(cropTop, "px"),
            new UnitValue(cropRight, "px"),
            new UnitValue(cropBottom, "px")
        ];
        doc.crop(bounds);

        // Resize ảnh về đúng kích thước chuẩn 10cm x 15cm ở độ phân giải 300 DPI
        app.preferences.rulerUnits = Units.CM;
        var targetW = new UnitValue(10, "cm");
        var targetH = new UnitValue(15, "cm");
        var targetDPI = 300;

        doc.resizeImage(targetW, targetH, targetDPI, ResampleMethod.BICUBICSHARPER);

        // Xóa sạch tất cả 4 đường Guide sau khi hoàn thành
        try { doc.guides.removeAll(); } catch (eG) {}

        // Hoàn tất êm ái, không hiện popup thông báo

    } catch (err) {
        alert("Lỗi thực thi Script:\n" + err.message + "\nDòng: " + err.line, "Lỗi");
    } finally {
        // Luôn khôi phục lại cài đặt đơn vị ban đầu của người dùng
        try {
            app.preferences.rulerUnits = oldRulerUnits;
            app.preferences.typeUnits = oldTypeUnits;
        } catch (eFin) {}
    }
}

main();
