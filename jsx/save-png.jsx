#target photoshop

// Kiểm tra nếu có tài liệu đang mở
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Mở hộp thoại chọn nơi lưu file PNG lần đầu
    var saveFile = File.saveDialog("Lưu file dưới dạng PNG", "*.png");
    
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
            saveFile = File.saveDialog("File trùng tên - Vui lòng chọn tên khác", "*.png");
        }
    }

    // Nếu người dùng đã chọn tệp hợp lệ (và không bấm Hủy bỏ)
    if (saveFile != null) {
        // Tự động kiểm tra & bổ sung đuôi .png nếu người dùng quên không gõ đuôi
        if (!/\.png$/i.test(saveFile.name)) {
            saveFile = new File(saveFile.fullName + ".png");
        }

        // Thiết lập tùy chọn lưu PNG chất lượng cao nhất (Compression = 0)
        var pngSaveOptions = new PNGSaveOptions();
        pngSaveOptions.compression = 0; // Không nén để đạt chất lượng tối đa
        pngSaveOptions.interlaced = false;

        // Tắt cửa sổ dialog gốc của Photoshop để tránh bị hỏi lại Lần 2
        var oldDialogs = app.displayDialogs;
        app.displayDialogs = DialogModes.NO;

        try {
            // Thực hiện lưu tệp bản sao PNG
            doc.saveAs(saveFile, pngSaveOptions, true);
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