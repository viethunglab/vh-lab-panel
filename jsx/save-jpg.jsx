#target photoshop

// Kiểm tra nếu có tài liệu đang mở
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Mở hộp thoại chọn nơi lưu file JPG lần đầu
    var saveFile = File.saveDialog("Lưu file dưới dạng JPG", "*.jpg");
    
    // VÒNG LẶP KIỂM TRA TRÙNG TÊN FILE
    while (saveFile != null && saveFile.exists) {
        var overwrite = confirm(
            "⚠️ CẢNH BÁO TỒN TẠI FILE TRÙNG TÊN!\n\n" +
            "File \"" + saveFile.name + "\" đã tồn tại trong thư mục chọn.\n\n" +
            "• Bấm [Yes / Có]: Đồng ý GHI ĐÈ lên file cũ.\n" +
            "• Bấm [No / Không]: Chọn đổi tên file khác."
        );
        
        if (overwrite) {
            // Người dùng xác nhận đồng ý ghi đè -> Thoát vòng lặp để lưu
            break;
        } else {
            // Người dùng không muốn ghi đè -> Mở lại cửa sổ chọn tên mới
            saveFile = File.saveDialog("File trùng tên - Vui lòng chọn tên khác", "*.jpg");
        }
    }

    // Nếu người dùng đã chọn tệp hợp lệ (và không bấm Hủy bỏ)
    if (saveFile != null) {
        // Tự động kiểm tra & bổ sung đuôi .jpg nếu người dùng quên không gõ đuôi
        if (!/\.(jpg|jpeg)$/i.test(saveFile.name)) {
            saveFile = new File(saveFile.fullName + ".jpg");
        }

        // Thiết lập tùy chọn lưu JPG chất lượng cao nhất (12)
        var jpgSaveOptions = new JPEGSaveOptions();
        jpgSaveOptions.quality = 12;

        // Tắt cửa sổ dialog gốc của Photoshop để tránh bị hỏi lại Lần 2
        var oldDialogs = app.displayDialogs;
        app.displayDialogs = DialogModes.NO;

        try {
            // Thực hiện lưu tệp bản sao JPG
            doc.saveAs(saveFile, jpgSaveOptions, true);
        } catch (e) {
            alert("Lỗi trong quá trình lưu file: " + e.toString());
        } finally {
            // Khôi phục lại trạng thái dialog ban đầu
            app.displayDialogs = oldDialogs;
        }
    }
} else {
    alert("Không có tài liệu nào đang mở.");
}