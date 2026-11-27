#target photoshop

/**
 * Script Photoshop: TỰ ĐỘNG XẾP ẢNH THẺ TỔNG HỢP THEO BỐ CỤC CHUẨN LAB (MODULAR BLOCK LAYOUT)
 * - Tối ưu hóa layout dựa trên hệ thống Block chuẩn 6.0 x 4.0 cm:
 *   + 1 ảnh 4x6 cm xoay ngang = 1 block (6x4 cm).
 *   + 2 ảnh 3x4 cm đứng = 1 block (mỗi ảnh 3x4 cm).
 *   + 4 ảnh 2x3 cm xoay ngang = 1 block (mỗi ảnh 3x2 cm, xếp 2x2).
 * - Sức chứa chuẩn các khổ giấy:
 *   + Khổ CP2 (12.7 x 17.8 cm): 8 block ảnh thẻ / trang (Tối đa 8 ảnh 4x6, 16 ảnh 3x4, 32 ảnh 2x3) | 1 ảnh nguyên khổ.
 *   + Khổ CP1 (15.2 x 10.0 cm): 4 block ảnh thẻ / trang (Tối đa 4 ảnh 4x6, 8 ảnh 3x4, 16 ảnh 2x3)   | 1 ảnh nguyên khổ.
 *   + Khổ CP3 (15.2 x 21.0 cm): 10 block ảnh thẻ / trang (Tối đa 10 ảnh 4x6, 20 ảnh 3x4, 40 ảnh 2x3) | 2 ảnh nguyên khổ.
 *   + Khổ CP  (12.7 x 8.6 cm):  4 block ảnh thẻ / trang (Tối đa 4 ảnh 4x6, 8 ảnh 3x4, 16 ảnh 2x3)   | 1 ảnh nguyên khổ.
 * - Hỗ trợ tùy chọn sắp xếp Ảnh nguyên khổ: Giữ nguyên khổ gốc và tỷ lệ của file ảnh nguồn (không crop về 15x10).
 * - Khóa tỷ lệ Crop 3:4 tương tác trực quan cho ảnh 3x4 cm chống méo hình.
 * - Đường viền cắt: 1px Inside màu #CCCCCC (RGB 204, 204, 204).
 * - Khoảng cách giữa các ảnh: 0.5 mm (6px ở 300 PPI).
 * - Tùy chọn tự động lưu file kết quả dưới định dạng JPG (01.jpg, 02.jpg...) vào thư mục con theo tên khổ giấy (CP, CP1, CP2, CP3) trong thư mục nguồn và đóng trực tiếp tài liệu Photoshop.
 * - Tự động đóng file ảnh nguồn sau khi xếp xong (không lưu đè).
 */

(function () {
    var DPI = 300;

    if (app.documents.length === 0) {
        alert("Không có tài liệu nào đang mở trong Photoshop!\nVui lòng mở các file ảnh thẻ trước khi chạy script.");
        return;
    }

    // Xác định thư mục nguồn từ file ảnh đang mở
    function getActiveSourceFolder() {
        var folder = null;
        try {
            if (app.documents.length > 0) {
                try {
                    var actDoc = app.activeDocument;
                    if (actDoc) {
                        var pAct = null;
                        try { pAct = actDoc.path; } catch (eAct1) {}
                        if (!pAct) {
                            try { pAct = actDoc.fullName.parent; } catch (eAct2) {}
                        }
                        if (pAct && Folder(pAct).exists) {
                            folder = Folder(pAct);
                        }
                    }
                } catch (eAct) {}

                if (!folder || !folder.exists) {
                    for (var d = 0; d < app.documents.length; d++) {
                        try {
                            var doc = app.documents[d];
                            var p = null;
                            try { p = doc.path; } catch (ePath) {}
                            if (!p) {
                                try { p = doc.fullName.parent; } catch (eFull) {}
                            }
                            if (p && Folder(p).exists) {
                                folder = Folder(p);
                                break;
                            }
                        } catch (errDoc) {}
                    }
                }
            }
        } catch (e) {
            folder = null;
        }
        if (!folder || !folder.exists) {
            folder = Folder.desktop;
        }
        return folder;
    }

    var sourceBaseFolder = getActiveSourceFolder();
    var customBaseFolder = null;

    // CƠ CHẾ GHI NHỚ THIẾT LẬP TRƯỚC ĐÓ (SETTINGS STORAGE)
    var SCRIPT_ID = "XepAnhThe";
    var CONFIG_FOLDER = new Folder(Folder.userData + "/VietHungLabs");
    var CONFIG_FILE = new File(CONFIG_FOLDER.fsName + "/" + SCRIPT_ID + "_Config.json");

    function loadSavedConfig() {
        try {
            if (CONFIG_FILE.exists && CONFIG_FILE.open("r")) {
                CONFIG_FILE.encoding = "UTF-8";
                var str = CONFIG_FILE.read();
                CONFIG_FILE.close();
                if (str && str.length > 2) {
                    return eval("(" + str + ")");
                }
            }
        } catch (e) {}
        return null;
    }

    function saveCurrentConfig(cfg) {
        try {
            if (!CONFIG_FOLDER.exists) {
                CONFIG_FOLDER.create();
            }
            if (CONFIG_FILE.open("w")) {
                CONFIG_FILE.encoding = "UTF-8";
                var parts = [];
                for (var k in cfg) {
                    if (cfg.hasOwnProperty(k)) {
                        var val = cfg[k];
                        if (typeof val === "string") {
                            parts.push('  "' + k + '": "' + val.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"');
                        } else if (typeof val === "boolean" || typeof val === "number") {
                            parts.push('  "' + k + '": ' + val);
                        }
                    }
                }
                var jsonStr = "{\n" + parts.join(",\n") + "\n}";
                CONFIG_FILE.write(jsonStr);
                CONFIG_FILE.close();
            }
        } catch (e) {}
    }

    var savedCfg = loadSavedConfig();

    var initFull_Val   = savedCfg ? !!savedCfg.cbFull : false;
    var initFull_Qty   = savedCfg ? (savedCfg.qtyFull || "1") : "1";

    // Mặc định: 4x6 (1 ảnh) và 3x4 (6 ảnh)
    var init4x6_Val    = savedCfg ? !!savedCfg.cb4x6 : true;
    var init4x6_Qty    = savedCfg ? (savedCfg.qty4x6 || "1") : "1";

    var init3x4_Val    = savedCfg ? !!savedCfg.cb3x4 : true;
    var init3x4_Qty    = savedCfg ? (savedCfg.qty3x4 || "6") : "6";

    var initCrop3x4    = savedCfg ? (savedCfg.cbCropInteractive !== false) : true;

    var init2x3_Val    = savedCfg ? !!savedCfg.cb2x3 : false;
    var init2x3_Qty    = savedCfg ? (savedCfg.qty2x3 || "2") : "2";

    var initPaper      = savedCfg ? (savedCfg.paper || "CP2") : "CP2";
    var initAutoSave   = savedCfg ? !!savedCfg.cbAutoSave : false;

    // 1. GIAO DIỆN CHỌN LOẠI ẢNH & SỐ LƯỢNG & KHỔ GIẤY
    var win = new Window("dialog", "TỰ ĐỘNG XẾP ẢNH THẺ (BỐ CỤC LAB TỐI ƯU)");
    win.orientation = "column";
    win.alignChildren = ["fill", "top"];
    win.spacing = 12;
    win.margins = 16;

    // Panel 1: Loại ảnh và số lượng
    var panelTypes = win.add("panel", undefined, " 1. Chọn loại ảnh thẻ & Số lượng (cho mỗi file ảnh nguồn) ");
    panelTypes.orientation = "column";
    panelTypes.alignChildren = ["fill", "top"];
    panelTypes.spacing = 10;
    panelTypes.margins = 14;

    // Hàng 0: Ảnh nguyên khổ (Giữ nguyên kích thước/tỷ lệ của file ảnh nguồn)
    var gFull = panelTypes.add("group");
    gFull.orientation = "row";
    gFull.alignChildren = ["left", "center"];
    var cbFull = gFull.add("checkbox", undefined, " Ảnh nguyên khổ");
    cbFull.preferredSize.width = 150;
    cbFull.value = initFull_Val;
    gFull.add("statictext", undefined, "Số lượng:");
    var txtQtyFull = gFull.add("edittext", undefined, "" + initFull_Qty);
    txtQtyFull.characters = 4;
    gFull.add("statictext", undefined, "ảnh / file  (Giữ nguyên khổ ảnh nguồn)");

    // Hàng 1: Ảnh 4x6 cm (Mặc định: 1 ảnh)
    var g4x6 = panelTypes.add("group");
    g4x6.orientation = "row";
    g4x6.alignChildren = ["left", "center"];
    var cb4x6 = g4x6.add("checkbox", undefined, " Ảnh 4x6 cm");
    cb4x6.preferredSize.width = 150;
    cb4x6.value = init4x6_Val;
    g4x6.add("statictext", undefined, "Số lượng:");
    var txtQty4x6 = g4x6.add("edittext", undefined, "" + init4x6_Qty);
    txtQty4x6.characters = 4;
    g4x6.add("statictext", undefined, "ảnh / file  (1 block / ảnh)");

    // Hàng 2: Ảnh 3x4 cm (Mặc định: 6 ảnh)
    var g3x4 = panelTypes.add("group");
    g3x4.orientation = "row";
    g3x4.alignChildren = ["left", "center"];
    var cb3x4 = g3x4.add("checkbox", undefined, " Ảnh 3x4 cm");
    cb3x4.preferredSize.width = 150;
    cb3x4.value = init3x4_Val;
    g3x4.add("statictext", undefined, "Số lượng:");
    var txtQty3x4 = g3x4.add("edittext", undefined, "" + init3x4_Qty);
    txtQty3x4.characters = 4;
    g3x4.add("statictext", undefined, "ảnh / file  (2 ảnh = 1 block)");

    // Tùy chọn Crop cho ảnh 3x4 cm
    var gCropOption = panelTypes.add("group");
    gCropOption.orientation = "row";
    gCropOption.alignChildren = ["left", "center"];
    gCropOption.margins = [24, 0, 0, 0];
    var cbCropInteractive = gCropOption.add("checkbox", undefined, "Hiện công cụ Crop căn chỉnh khung hình 3:4 (tránh méo mặt)");
    cbCropInteractive.value = initCrop3x4;
    cbCropInteractive.enabled = cb3x4.value;

    // Hàng 3: Ảnh 2x3 cm
    var g2x3 = panelTypes.add("group");
    g2x3.orientation = "row";
    g2x3.alignChildren = ["left", "center"];
    var cb2x3 = g2x3.add("checkbox", undefined, " Ảnh 2x3 cm");
    cb2x3.preferredSize.width = 150;
    cb2x3.value = init2x3_Val;
    g2x3.add("statictext", undefined, "Số lượng:");
    var txtQty2x3 = g2x3.add("edittext", undefined, "" + init2x3_Qty);
    txtQty2x3.characters = 4;
    g2x3.add("statictext", undefined, "ảnh / file  (4 ảnh = 1 block)");

    // Panel 2: Khổ giấy thành phẩm (2 cột: CP, CP1 / CP2, CP3)
    var panelPaper = win.add("panel", undefined, " 2. Chọn khổ giấy thành phẩm ");
    panelPaper.orientation = "column";
    panelPaper.alignChildren = ["fill", "top"];
    panelPaper.spacing = 8;
    panelPaper.margins = 12;

    // Hàng 1: CP (trái), CP1 (phải)
    var rowPaper1 = panelPaper.add("group");
    rowPaper1.orientation = "row";
    rowPaper1.alignChildren = ["left", "center"];
    rowPaper1.spacing = 15;

    var rbCP  = rowPaper1.add("radiobutton", undefined, "Khổ CP  (12.7 x 8.6 cm)  — 4 block");
    rbCP.preferredSize.width = 240;
    var rbCP1 = rowPaper1.add("radiobutton", undefined, "Khổ CP1 (15.2 x 10.0 cm) — 4 block");
    rbCP1.preferredSize.width = 240;

    // Hàng 2: CP2 (trái), CP3 (phải)
    var rowPaper2 = panelPaper.add("group");
    rowPaper2.orientation = "row";
    rowPaper2.alignChildren = ["left", "center"];
    rowPaper2.spacing = 15;

    var rbCP2 = rowPaper2.add("radiobutton", undefined, "Khổ CP2 (12.7 x 17.8 cm) — 8 block");
    rbCP2.preferredSize.width = 240;
    var rbCP3 = rowPaper2.add("radiobutton", undefined, "Khổ CP3 (15.2 x 21.0 cm) — 10 block");
    rbCP3.preferredSize.width = 240;

    rbCP.value  = (initPaper === "CP");
    rbCP1.value = (initPaper === "CP1");
    rbCP2.value = (initPaper === "CP2");
    rbCP3.value = (initPaper === "CP3");
    if (!rbCP.value && !rbCP1.value && !rbCP2.value && !rbCP3.value) {
        rbCP2.value = true;
    }

    function getSelectedPaper() {
        if (rbCP.value) {
            return { name: "CP",  wCm: 12.7, hCm: 8.6,  cols: 2, rows: 2, blocks: 4 };
        } else if (rbCP1.value) {
            return { name: "CP1", wCm: 15.2, hCm: 10.0, cols: 2, rows: 2, blocks: 4 };
        } else if (rbCP3.value) {
            return { name: "CP3", wCm: 15.2, hCm: 21.0, cols: 2, rows: 5, blocks: 10 };
        } else {
            return { name: "CP2", wCm: 12.7, hCm: 17.8, cols: 2, rows: 4, blocks: 8 };
        }
    }

    // Hàm tự động điều chỉnh đường dẫn thư mục lưu ảnh theo khổ giấy hiện tại
    function updateSavePath() {
        if (typeof txtFolderPath === "undefined") return;
        if (!sourceBaseFolder || !sourceBaseFolder.exists) {
            sourceBaseFolder = getActiveSourceFolder();
        }
        var base = (customBaseFolder && customBaseFolder.exists) ? customBaseFolder : sourceBaseFolder;
        var curPaper = getSelectedPaper();
        txtFolderPath.text = Folder(base.fsName + "/" + curPaper.name).fsName;
        updateSummary();
    }

    function selectPaper(selectedRb) {
        rbCP.value  = (selectedRb === rbCP);
        rbCP1.value = (selectedRb === rbCP1);
        rbCP2.value = (selectedRb === rbCP2);
        rbCP3.value = (selectedRb === rbCP3);
        // Tự động điều chỉnh đường dẫn lưu ảnh khi chọn khổ giấy mới
        updateSavePath();
    }

    // Panel 3: Tùy chọn tự động lưu JPG & Đóng tài liệu
    var panelSave = win.add("panel", undefined, " 3. Tùy chọn tự động lưu JPG & Đóng tài liệu ");
    panelSave.orientation = "column";
    panelSave.alignChildren = ["fill", "top"];
    panelSave.spacing = 8;
    panelSave.margins = 12;

    var cbAutoSave = panelSave.add("checkbox", undefined, " Tự động lưu file kết quả đuôi JPG (01.jpg, 02.jpg...) và đóng tài liệu");
    cbAutoSave.value = initAutoSave;

    var gFolder = panelSave.add("group");
    gFolder.orientation = "row";
    gFolder.alignChildren = ["left", "center"];
    gFolder.spacing = 8;

    gFolder.add("statictext", undefined, "Thư mục lưu:");
    var txtFolderPath = gFolder.add("edittext", undefined, "");
    txtFolderPath.preferredSize.width = 280;
    txtFolderPath.enabled = cbAutoSave.value;

    // Thiết lập đường dẫn ban đầu theo khổ giấy đang chọn
    var initialBase = (customBaseFolder && customBaseFolder.exists) ? customBaseFolder : sourceBaseFolder;
    txtFolderPath.text = Folder(initialBase.fsName + "/" + getSelectedPaper().name).fsName;

    var btnBrowseFolder = gFolder.add("button", undefined, "Chọn Thư Mục...");
    btnBrowseFolder.enabled = cbAutoSave.value;

    btnBrowseFolder.onClick = function () {
        var startF = (customBaseFolder && customBaseFolder.exists) ? customBaseFolder : sourceBaseFolder;
        var f = Folder.selectDialog("Chọn thư mục lưu file kết quả", startF);
        if (f) {
            var fNameUpper = f.name.toUpperCase();
            if (fNameUpper === "CP" || fNameUpper === "CP1" || fNameUpper === "CP2" || fNameUpper === "CP3") {
                customBaseFolder = f.parent;
            } else {
                customBaseFolder = f;
            }
            updateSavePath();
        }
    };

    txtFolderPath.onChanging = function () {
        updateSummary();
    };

    cbAutoSave.onClick = function () {
        txtFolderPath.enabled = cbAutoSave.value;
        btnBrowseFolder.enabled = cbAutoSave.value;
        if (cbAutoSave.value) {
            // Tự động điều chỉnh đường dẫn thư mục lưu ảnh theo khổ giấy hiện tại khi chọn chức năng tự lưu
            updateSavePath();
        } else {
            updateSummary();
        }
    };

    // Panel 4: Khung tóm tắt cấu hình
    var panelInfo = win.add("panel", undefined, " Tóm tắt cấu hình ");
    panelInfo.orientation = "column";
    panelInfo.alignChildren = ["left", "top"];
    panelInfo.margins = 12;

    var txtInfo = panelInfo.add("statictext", undefined, "", { multiline: true });
    txtInfo.size = [500, 95];

    function updateSummary() {
        txtQtyFull.enabled = cbFull.value;
        txtQty4x6.enabled = cb4x6.value;
        txtQty3x4.enabled = cb3x4.value;
        cbCropInteractive.enabled = cb3x4.value;
        txtQty2x3.enabled = cb2x3.value;

        var parts = [];
        var totalBlocksPerFile = 0;
        if (cbFull.value) {
            var qF = parseInt(txtQtyFull.text, 10) || 0;
            parts.push(qF + " ảnh nguyên khổ");
        }
        if (cb4x6.value) {
            var q4 = parseInt(txtQty4x6.text, 10) || 0;
            parts.push(q4 + " ảnh 4x6cm");
            totalBlocksPerFile += q4;
        }
        if (cb3x4.value) {
            var q3 = parseInt(txtQty3x4.text, 10) || 0;
            parts.push(q3 + " ảnh 3x4cm");
            totalBlocksPerFile += Math.ceil(q3 / 2);
        }
        if (cb2x3.value) {
            var q2 = parseInt(txtQty2x3.text, 10) || 0;
            parts.push(q2 + " ảnh 2x3cm");
            totalBlocksPerFile += Math.ceil(q2 / 4);
        }

        var paper = getSelectedPaper();
        var paperCap = paper.blocks;
        var paperStr = paper.name + " (" + paper.wCm + " x " + paper.hCm + " cm)";
        var capNote = "";
        if (paper.name === "CP1") {
            capNote = "Tối ưu 2D (Tối đa 4 ảnh 4x6, hoặc 11 ảnh 3x4, hoặc 21 ảnh 2x3, hoặc 2 ảnh 4x6 + 6 ảnh 3x4 / trang).";
        } else if (paper.name === "CP3") {
            capNote = "Tối ưu 2D (Tối đa 10 ảnh 4x6, hoặc 25 ảnh 3x4, hoặc 50 ảnh 2x3 / trang).";
        } else {
            capNote = paperCap + " block (Tối đa " + paperCap + " ảnh 4x6, hoặc " + (paperCap * 2) + " ảnh 3x4, hoặc " + (paperCap * 4) + " ảnh 2x3).";
        }

        var canvasW_px = Math.round((paper.wCm / 2.54) * DPI);
        var canvasH_px = Math.round((paper.hCm / 2.54) * DPI);
        var fullPerSheet = 1;
        if (app.documents.length > 0) {
            var sampleDoc = app.documents[0];
            var sW = getPxValue(sampleDoc.width);
            var sH = getPxValue(sampleDoc.height);
            var gap = Math.round((0.05 / 2.54) * DPI);
            var cap0 = Math.floor((canvasW_px + gap) / (sW + gap)) * Math.floor((canvasH_px + gap) / (sH + gap));
            var capRot = Math.floor((canvasW_px + gap) / (sH + gap)) * Math.floor((canvasH_px + gap) / (sW + gap));
            fullPerSheet = Math.max(cap0, capRot);
            if (fullPerSheet === 0) fullPerSheet = 1;
        }

        var saveStatus = cbAutoSave.value ? ("BẬT (Lưu 01.jpg, 02.jpg... vào '" + (Folder(txtFolderPath.text).name || txtFolderPath.text) + "')") : "TẮT (Giữ mở tài liệu kết quả)";

        if (parts.length === 0) {
            txtInfo.text = "⚠️ Vui lòng chọn ít nhất một loại ảnh cần in!";
        } else {
            var totalFilesCount = app.documents.length;
            txtInfo.text = "• Yêu cầu: " + parts.join(" + ") + " cho mỗi file ảnh nguồn.\n" +
                           "• Sức chứa khổ " + paperStr + ":\n" +
                           "   - Ảnh thẻ: " + capNote + "\n" +
                           "   - Ảnh nguyên khổ: Tối ưu ~" + fullPerSheet + " ảnh / trang (tính toán tự động theo cỡ ảnh nguồn).\n" +
                           "• Tự động lưu JPG: " + saveStatus + ".\n" +
                           "• Đang mở: " + totalFilesCount + " file ảnh nguồn trong Photoshop.";
        }
    }

    cbFull.onClick = updateSummary;
    cb2x3.onClick = updateSummary;
    cb3x4.onClick = updateSummary;
    cbCropInteractive.onClick = updateSummary;
    cb4x6.onClick = updateSummary;
    rbCP.onClick  = function () { selectPaper(rbCP); };
    rbCP1.onClick = function () { selectPaper(rbCP1); };
    rbCP2.onClick = function () { selectPaper(rbCP2); };
    rbCP3.onClick = function () { selectPaper(rbCP3); };
    txtQtyFull.onChanging = updateSummary;
    txtQty2x3.onChanging = updateSummary;
    txtQty3x4.onChanging = updateSummary;
    txtQty4x6.onChanging = updateSummary;

    updateSummary();

    // Nhóm nút bấm
    var groupBtns = win.add("group");
    groupBtns.orientation = "row";
    groupBtns.alignment = ["center", "center"];
    groupBtns.spacing = 15;

    var btnOK = groupBtns.add("button", undefined, "Bắt Đầu Xếp", { name: "ok" });
    var btnCancel = groupBtns.add("button", undefined, "Hủy Bỏ", { name: "cancel" });

    var isOK = false;
    btnOK.onClick = function () {
        if (!cb2x3.value && !cb3x4.value && !cb4x6.value && !cbFull.value) {
            alert("Vui lòng chọn ít nhất một loại ảnh cần in!");
            return;
        }

        var qFull = parseInt(txtQtyFull.text, 10);
        var q2 = parseInt(txtQty2x3.text, 10);
        var q3 = parseInt(txtQty3x4.text, 10);
        var q4 = parseInt(txtQty4x6.text, 10);

        if (cbFull.value && (isNaN(qFull) || qFull <= 0)) {
            alert("Số lượng ảnh nguyên khổ phải là số nguyên dương lớn hơn 0!");
            return;
        }
        if (cb2x3.value && (isNaN(q2) || q2 <= 0)) {
            alert("Số lượng ảnh 2x3 cm phải là số nguyên dương lớn hơn 0!");
            return;
        }
        if (cb3x4.value && (isNaN(q3) || q3 <= 0)) {
            alert("Số lượng ảnh 3x4 cm phải là số nguyên dương lớn hơn 0!");
            return;
        }
        if (cb4x6.value && (isNaN(q4) || q4 <= 0)) {
            alert("Số lượng ảnh 4x6 cm phải là số nguyên dương lớn hơn 0!");
            return;
        }

        if (cbAutoSave.value) {
            if (!txtFolderPath.text || txtFolderPath.text.replace(/\s+/g, "") === "") {
                alert("Vui lòng chỉ định đường dẫn thư mục lưu cho tùy chọn tự động lưu JPG!");
                return;
            }
            var targetFolder = new Folder(txtFolderPath.text);
            if (!targetFolder.exists) {
                var isCreated = targetFolder.create();
                if (!isCreated && !targetFolder.exists) {
                    alert("Không thể tự động tạo thư mục lưu:\n" + targetFolder.fsName + "\nVui lòng kiểm tra lại quyền ghi hoặc bấm 'Chọn Thư Mục...' để chọn nơi lưu khác.");
                    return;
                }
            }
        }

        // Ghi nhớ thiết lập trước đó
        saveCurrentConfig({
            cbFull: cbFull.value,
            qtyFull: txtQtyFull.text,
            cb4x6: cb4x6.value,
            qty4x6: txtQty4x6.text,
            cb3x4: cb3x4.value,
            qty3x4: txtQty3x4.text,
            cbCropInteractive: cbCropInteractive.value,
            cb2x3: cb2x3.value,
            qty2x3: txtQty2x3.text,
            paper: getSelectedPaper().name,
            cbAutoSave: cbAutoSave.value
        });

        isOK = true;
        win.close();
    };

    btnCancel.onClick = function () {
        isOK = false;
        win.close();
    };

    updateSummary();
    win.show();

    if (!isOK) {
        return; // Người dùng ấn Hủy bỏ
    }

    // 2. THU THẬP DANH SÁCH FILE NGUỒN TRƯỚC KHI TẠO CANVAS
    var openDocsList = [];
    for (var d = 0; d < app.documents.length; d++) {
        openDocsList.push(app.documents[d]);
    }
    var totalFiles = openDocsList.length;

    // 3. THÔNG SỐ VẬT LÝ BLOCK CHUẨN Ở 300 PPI
    var GAP_PX = Math.round((0.05 / 2.54) * DPI); // 6 px (0.5 mm)

    // Block chuẩn: 6.0 cm rộng x 4.0 cm cao
    var BLOCK_W = Math.round((6.0 / 2.54) * DPI); // 709 px
    var BLOCK_H = Math.round((4.0 / 2.54) * DPI); // 472 px

    // Chiều rộng nửa block (cho 3x4 và 2x3): 3.0 cm
    var HALF_W = Math.round((3.0 / 2.54) * DPI);  // 354 px

    // Chiều cao ảnh 2x3 cm xoay ngang: 2.0 cm
    var PHOTO_2x3_H = Math.round((2.0 / 2.54) * DPI); // 236 px

    // Kích thước chuẩn của từng loại ảnh thẻ ở 300 PPI (chiều đứng gốc)
    var W_4x6 = Math.round((4.0 / 2.54) * DPI); // 472 px
    var H_4x6 = Math.round((6.0 / 2.54) * DPI); // 709 px
    var W_3x4 = Math.round((3.0 / 2.54) * DPI); // 354 px
    var H_3x4 = Math.round((4.0 / 2.54) * DPI); // 472 px
    var W_2x3 = Math.round((2.0 / 2.54) * DPI); // 236 px
    var H_2x3 = Math.round((3.0 / 2.54) * DPI); // 354 px

    // Thu thập danh sách yêu cầu theo từng file nguồn
    // Quy tắc ưu tiên: Xếp toàn bộ các size ảnh (4x6, 3x4, 2x3) của từng file nguồn xong trước
    // khi chuyển sang file nguồn tiếp theo, giúp nhóm trọn vẹn ảnh của từng người/file cạnh nhau.
    var reqFull_Qty = cbFull.value ? parseInt(txtQtyFull.text, 10) : 0;
    var req4x6_Qty  = cb4x6.value  ? parseInt(txtQty4x6.text, 10) : 0;
    var req3x4_Qty  = cb3x4.value  ? parseInt(txtQty3x4.text, 10) : 0;
    var req2x3_Qty  = cb2x3.value  ? parseInt(txtQty2x3.text, 10) : 0;

    var itemsFull = [];
    var items4x6  = [];
    var items3x4  = [];
    var items2x3  = [];
    var cardItems = [];

    var itemId = 0;
    for (var f = 0; f < totalFiles; f++) {
        for (var qF = 0; qF < reqFull_Qty; qF++) {
            itemsFull.push({ id: itemId++, fileIndex: f, type: "full" });
        }
        for (var q4 = 0; q4 < req4x6_Qty; q4++) {
            var it4 = { id: itemId++, fileIndex: f, type: "4x6", w: W_4x6, h: H_4x6 };
            items4x6.push(it4);
            cardItems.push(it4);
        }
        for (var q3 = 0; q3 < req3x4_Qty; q3++) {
            var it3 = { id: itemId++, fileIndex: f, type: "3x4", w: W_3x4, h: H_3x4 };
            items3x4.push(it3);
            cardItems.push(it3);
        }
        for (var q2 = 0; q2 < req2x3_Qty; q2++) {
            var it2 = { id: itemId++, fileIndex: f, type: "2x3", w: W_2x3, h: H_2x3 };
            items2x3.push(it2);
            cardItems.push(it2);
        }
    }

    // 4. THÔNG SỐ KHỔ GIẤY THÀNH PHẨM
    var paper = getSelectedPaper();
    var paperName = paper.name;

    var canvasW = Math.round((paper.wCm / 2.54) * DPI);
    var canvasH = Math.round((paper.hCm / 2.54) * DPI);

    // 5. THUẬT TOÁN TỐI ƯU SẮP XẾP ẢNH THẺ 2D (MAXRECTS BIN PACKING CÓ XOAY HƯỚNG)
    // Tự động thử nghiệm nhiều chiến lược đặt ảnh và hướng xoay (đứng/ngang) cho từng trang
    // để đạt mật độ chứa tối đa (VD: CP1 chứa được 2 ảnh 4x6 + 6 ảnh 3x4), đồng thời ưu tiên
    // đồng nhất hướng cắt thẳng hàng và căn giữa toàn bộ cụm ảnh trên khổ giấy.
    function packCardMaxRects(binW, binH, itemsList, heuristic, rotPolicy) {
        var freeRects = [{ x: 0, y: 0, w: binW + GAP_PX, h: binH + GAP_PX }];
        var placed = [];
        var unplaced = [];

        for (var i = 0; i < itemsList.length; i++) {
            var it = itemsList[i];
            var rw = it.w + GAP_PX;
            var rh = it.h + GAP_PX;
            var bestScore1 = 1e15;
            var bestScore2 = 1e15;
            var bestScore3 = 1e15;
            var bestNode = null;

            var rots = [false, true];
            if (rotPolicy && typeof rotPolicy[it.type] === "boolean") {
                rots = [rotPolicy[it.type], !rotPolicy[it.type]];
            }

            for (var j = 0; j < freeRects.length; j++) {
                var fr = freeRects[j];
                for (var rIdx = 0; rIdx < rots.length; rIdx++) {
                    var rot = rots[rIdx];
                    var w = rot ? rh : rw;
                    var h = rot ? rw : rh;
                    if (rot && rw === rh) continue;

                    if (fr.w >= w && fr.h >= h) {
                        var s1, s2;
                        var s3 = rIdx;
                        if (heuristic === "BSSF") {
                            s1 = Math.min(fr.w - w, fr.h - h);
                            s2 = Math.max(fr.w - w, fr.h - h);
                        } else if (heuristic === "BAF") {
                            s1 = fr.w * fr.h - w * h;
                            s2 = Math.min(fr.w - w, fr.h - h);
                        } else if (heuristic === "BL") {
                            s1 = fr.y;
                            s2 = fr.x;
                        } else { // LF (Left-First)
                            s1 = fr.x;
                            s2 = fr.y;
                        }

                        if (s1 < bestScore1 ||
                            (s1 === bestScore1 && s2 < bestScore2) ||
                            (s1 === bestScore1 && s2 === bestScore2 && s3 < bestScore3)) {
                            bestNode = { x: fr.x, y: fr.y, w: w, h: h, rot: rot };
                            bestScore1 = s1;
                            bestScore2 = s2;
                            bestScore3 = s3;
                        }
                    }
                }
            }

            if (!bestNode) {
                unplaced.push(it);
                continue;
            }

            placed.push({
                item: it,
                x: bestNode.x,
                y: bestNode.y,
                w: bestNode.w - GAP_PX,
                h: bestNode.h - GAP_PX,
                rot: bestNode.rot
            });

            // Chia nhỏ vùng trống còn lại (MaxRects split)
            var newRects = [];
            for (var j2 = 0; j2 < freeRects.length; j2++) {
                var fr2 = freeRects[j2];
                if (bestNode.x >= fr2.x + fr2.w || bestNode.x + bestNode.w <= fr2.x ||
                    bestNode.y >= fr2.y + fr2.h || bestNode.y + bestNode.h <= fr2.y) {
                    newRects.push(fr2);
                } else {
                    if (bestNode.y > fr2.y && bestNode.y < fr2.y + fr2.h) {
                        newRects.push({ x: fr2.x, y: fr2.y, w: fr2.w, h: bestNode.y - fr2.y });
                    }
                    if (bestNode.y + bestNode.h < fr2.y + fr2.h) {
                        newRects.push({ x: fr2.x, y: bestNode.y + bestNode.h, w: fr2.w, h: fr2.y + fr2.h - (bestNode.y + bestNode.h) });
                    }
                    if (bestNode.x > fr2.x && bestNode.x < fr2.x + fr2.w) {
                        newRects.push({ x: fr2.x, y: fr2.y, w: bestNode.x - fr2.x, h: fr2.h });
                    }
                    if (bestNode.x + bestNode.w < fr2.x + fr2.w) {
                        newRects.push({ x: bestNode.x + bestNode.w, y: fr2.y, w: fr2.x + fr2.w - (bestNode.x + bestNode.w), h: fr2.h });
                    }
                }
            }

            // Loại bỏ các vùng trống bị bao hàm hoàn toàn bởi vùng khác
            freeRects = [];
            for (var a = 0; a < newRects.length; a++) {
                var contained = false;
                for (var b = 0; b < newRects.length; b++) {
                    if (a !== b &&
                        newRects[a].x >= newRects[b].x &&
                        newRects[a].y >= newRects[b].y &&
                        newRects[a].x + newRects[a].w <= newRects[b].x + newRects[b].w &&
                        newRects[a].y + newRects[a].h <= newRects[b].y + newRects[b].h) {
                        contained = true;
                        break;
                    }
                }
                if (!contained) {
                    freeRects.push(newRects[a]);
                }
            }
        }

        return { placed: placed, unplaced: unplaced };
    }

    function packBestCardPage(binW, binH, itemsList) {
        var heuristics = ["BSSF", "BL", "LF", "BAF"];
        var policies = [
            { "4x6": true,  "3x4": false, "2x3": true  },
            { "4x6": false, "3x4": true,  "2x3": false },
            { "4x6": false, "3x4": false, "2x3": false },
            { "4x6": true,  "3x4": true,  "2x3": true  }
        ];

        var best = null;
        for (var hIdx = 0; hIdx < heuristics.length; hIdx++) {
            for (var pIdx = 0; pIdx < policies.length; pIdx++) {
                var res = packCardMaxRects(binW, binH, itemsList, heuristics[hIdx], policies[pIdx]);

                var rotChanges = 0;
                var typeRot = {};
                var maxX = 0, maxY = 0;
                for (var k = 0; k < res.placed.length; k++) {
                    var pl = res.placed[k];
                    var tName = pl.item.type;
                    if (typeof typeRot[tName] === "undefined") {
                        typeRot[tName] = pl.rot;
                    } else if (typeRot[tName] !== pl.rot) {
                        rotChanges++;
                    }
                    if (pl.x + pl.w > maxX) maxX = pl.x + pl.w;
                    if (pl.y + pl.h > maxY) maxY = pl.y + pl.h;
                }
                var area = maxX * maxY;

                if (!best ||
                    res.placed.length > best.placed.length ||
                    (res.placed.length === best.placed.length && rotChanges < best.rotChanges) ||
                    (res.placed.length === best.placed.length && rotChanges === best.rotChanges && area < best.area)) {
                    best = {
                        placed: res.placed,
                        unplaced: res.unplaced,
                        rotChanges: rotChanges,
                        area: area,
                        maxX: maxX,
                        maxY: maxY
                    };
                }
            }
        }
        return best;
    }

    // 6. THIẾT LẬP MAP TỌA ĐỘ VÀ KÍCH THƯỚC CHO TỪNG ẢNH
    // Map: itemId -> { pageIndex, left, top, w, h, needRotate }
    var placementMap = {};

    // 6.1. Xếp ảnh thẻ vào từng trang theo thuật toán 2D tối ưu
    var cardPages = [];
    var remainingCardItems = cardItems;
    while (remainingCardItems.length > 0) {
        var bestPage = packBestCardPage(canvasW, canvasH, remainingCardItems);
        if (!bestPage || bestPage.placed.length === 0) {
            break;
        }
        cardPages.push(bestPage);
        remainingCardItems = bestPage.unplaced;
    }

    var cardSheets = cardPages.length;

    for (var cpIdx = 0; cpIdx < cardPages.length; cpIdx++) {
        var cPage = cardPages[cpIdx];
        var minCX = canvasW, minCY = canvasH, maxCX = 0, maxCY = 0;
        for (var pi = 0; pi < cPage.placed.length; pi++) {
            var plItem = cPage.placed[pi];
            if (plItem.x < minCX) minCX = plItem.x;
            if (plItem.y < minCY) minCY = plItem.y;
            if (plItem.x + plItem.w > maxCX) maxCX = plItem.x + plItem.w;
            if (plItem.y + plItem.h > maxCY) maxCY = plItem.y + plItem.h;
        }
        var cUsedW = maxCX - minCX;
        var cUsedH = maxCY - minCY;
        var cShiftX = Math.floor((canvasW - cUsedW) / 2) - minCX;
        var cShiftY = Math.floor((canvasH - cUsedH) / 2) - minCY;

        for (var pi2 = 0; pi2 < cPage.placed.length; pi2++) {
            var pObj = cPage.placed[pi2];
            placementMap[pObj.item.id] = {
                pageIndex: cpIdx,
                left: pObj.x + cShiftX,
                top: pObj.y + cShiftY,
                w: pObj.w,
                h: pObj.h,
                needRotate: pObj.rot
            };
        }
    }

    // 6.2. Thuật toán tối ưu sắp xếp ảnh nguyên khổ (Shelf/Row Packing có tự động tính toán xoay hướng và căn giữa trang)
    var fullPages = []; // Mỗi trang: { items: [], minX, minY, maxX, maxY }
    var curFullPage = null;
    var curFullX = 0, curFullY = 0, curRowH = 0;

    function startNewFullPage() {
        curFullPage = { items: [], minX: 999999, minY: 999999, maxX: 0, maxY: 0 };
        fullPages.push(curFullPage);
        curFullX = 0;
        curFullY = 0;
        curRowH = 0;
    }

    for (var fIdx = 0; fIdx < itemsFull.length; fIdx++) {
        var itF = itemsFull[fIdx];
        var doc = openDocsList[itF.fileIndex];
        var docW = getPxValue(doc.width);
        var docH = getPxValue(doc.height);

        // Tính sức chứa của khổ giấy in cho 2 hướng xoay
        var cap0 = Math.floor((canvasW + GAP_PX) / (docW + GAP_PX)) * Math.floor((canvasH + GAP_PX) / (docH + GAP_PX));
        var capRot = Math.floor((canvasW + GAP_PX) / (docH + GAP_PX)) * Math.floor((canvasH + GAP_PX) / (docW + GAP_PX));

        var needRotate = false;
        var w = docW;
        var h = docH;

        // Chọn xoay 90 độ nếu:
        // 1. Không xoay không vừa giấy (cap0 == 0) nhưng xoay thì vừa (capRot > 0)
        // 2. Hoặc xoay giúp xếp được NHIỀU ảnh hơn trên mỗi tờ giấy (capRot > cap0)
        if ((cap0 === 0 && capRot > 0) || (capRot > cap0)) {
            needRotate = true;
            w = docH;
            h = docW;
        }

        // Nếu cả 2 hướng đều vượt quá trang giấy (ảnh nguồn quá lớn):
        // Thu nhỏ theo đúng tỷ lệ để vừa trọn 1 trang (bảo toàn 100% tỷ lệ gốc không crop)
        if (w > canvasW || h > canvasH) {
            var scale = Math.min(canvasW / w, canvasH / h);
            w = Math.round(w * scale);
            h = Math.round(h * scale);
        }

        if (!curFullPage) {
            startNewFullPage();
        }

        // Kiểm tra xem có vừa vào hàng hiện tại trên trang không
        if (curFullX > 0 && curFullX + w > canvasW) {
            // Xuống hàng mới
            curFullX = 0;
            curFullY += curRowH + GAP_PX;
            curRowH = 0;
        }

        // Kiểm tra xem có vừa vào trang hiện tại không
        if (curFullY + h > canvasH && curFullPage.items.length > 0) {
            // Mở trang mới
            startNewFullPage();
        }

        curFullPage.items.push({
            id: itF.id,
            w: w,
            h: h,
            x: curFullX,
            y: curFullY,
            needRotate: needRotate
        });

        if (curFullX < curFullPage.minX) curFullPage.minX = curFullX;
        if (curFullY < curFullPage.minY) curFullPage.minY = curFullY;
        if (curFullX + w > curFullPage.maxX) curFullPage.maxX = curFullX + w;
        if (curFullY + h > curFullPage.maxY) curFullPage.maxY = curFullY + h;

        curFullX += w + GAP_PX;
        if (h > curRowH) curRowH = h;
    }

    // Căn giữa toàn bộ cụm ảnh thành phẩm trên từng trang ảnh nguyên khổ
    for (var pIdx = 0; pIdx < fullPages.length; pIdx++) {
        var pg = fullPages[pIdx];
        var contentW = pg.maxX - pg.minX;
        var contentH = pg.maxY - pg.minY;
        var shiftX = Math.floor((canvasW - contentW) / 2) - pg.minX;
        var shiftY = Math.floor((canvasH - contentH) / 2) - pg.minY;

        for (var itm = 0; itm < pg.items.length; itm++) {
            var pi = pg.items[itm];
            placementMap[pi.id] = {
                pageIndex: cardSheets + pIdx,
                left: pi.x + shiftX,
                top: pi.y + shiftY,
                w: pi.w,
                h: pi.h,
                needRotate: pi.needRotate
            };
        }
    }

    var fullSheets = fullPages.length;
    var totalSheets = cardSheets + fullSheets;
    if (totalSheets === 0) totalSheets = 1;

    // 7. THỰC THI TRONG PHOTOSHOP
    app.displayDialogs = DialogModes.NO;

    var strokeColor = new SolidColor();
    strokeColor.rgb.red = 204;
    strokeColor.rgb.green = 204;
    strokeColor.rgb.blue = 204;

    try {
        // Tạo các trang canvas thành phẩm
        var canvasDocs = [];
        // Trang ảnh thẻ
        for (var p = 0; p < cardSheets; p++) {
            var docTitle = "AnhThe_" + paperName + "_Trang_" + (p + 1);
            var newCanvas = app.documents.add(
                UnitValue(canvasW, "px"),
                UnitValue(canvasH, "px"),
                DPI,
                docTitle,
                NewDocumentMode.RGB,
                DocumentFill.WHITE
            );
            canvasDocs.push(newCanvas);
        }
        // Trang ảnh nguyên khổ
        for (var s = 0; s < fullSheets; s++) {
            var docTitle = "AnhNguyenKho_" + paperName + "_Trang_" + (s + 1);
            var newCanvas = app.documents.add(
                UnitValue(canvasW, "px"),
                UnitValue(canvasH, "px"),
                DPI,
                docTitle,
                NewDocumentMode.RGB,
                DocumentFill.WHITE
            );
            canvasDocs.push(newCanvas);
        }

        // Xử lý từng file ảnh nguồn
        for (var fIdx = 0; fIdx < totalFiles; fIdx++) {
            var srcDoc = openDocsList[fIdx];
            app.activeDocument = srcDoc;

            var origHistoryState = srcDoc.activeHistoryState;

            // Xử lý ảnh nguyên khổ (Giữ nguyên khổ ảnh nguồn, không crop)
            if (reqFull_Qty > 0) {
                var targetFull = [];
                for (var aF = 0; aF < itemsFull.length; aF++) {
                    if (itemsFull[aF].fileIndex === fIdx) {
                        targetFull.push(placementMap[itemsFull[aF].id]);
                    }
                }

                if (targetFull.length > 0) {
                    app.activeDocument = srcDoc;
                    srcDoc.activeHistoryState = origHistoryState;

                    var targetW = targetFull[0].w;
                    var targetH = targetFull[0].h;
                    var needRot = targetFull[0].needRotate;

                    // Chuẩn hóa resolution về 300 DPI nếu file nguồn có DPI khác
                    if (Math.round(srcDoc.resolution) !== DPI) {
                        srcDoc.resizeImage(srcDoc.width, srcDoc.height, DPI, ResampleMethod.BICUBICSHARPER);
                    }

                    // Xoay ảnh nếu cần để khớp hướng trang
                    if (needRot) {
                        srcDoc.rotateCanvas(270);
                    }

                    var curW = getPxValue(srcDoc.width);
                    var curH = getPxValue(srcDoc.height);

                    // Chỉ thu nhỏ tỷ lệ nếu kích thước vượt quá khổ giấy, không bao giờ ép méo tỷ lệ
                    if (curW !== targetW || curH !== targetH) {
                        srcDoc.resizeImage(
                            UnitValue(targetW, "px"),
                            UnitValue(targetH, "px"),
                            DPI,
                            ResampleMethod.BICUBICSHARPER
                        );
                    }

                    srcDoc.selection.selectAll();
                    srcDoc.selection.copy();

                    pasteAndStrokeItems(targetFull);
                }
            }

            // Xử lý ảnh 4x6 cm, 3x4 cm, 2x3 cm (tự động xoay theo hướng tối ưu của thuật toán 2D)
            if (req4x6_Qty > 0) {
                placeCardPhotoGroup(srcDoc, origHistoryState, items4x6, fIdx, W_4x6, H_4x6, false);
            }
            if (req3x4_Qty > 0) {
                placeCardPhotoGroup(srcDoc, origHistoryState, items3x4, fIdx, W_3x4, H_3x4, true);
            }
            if (req2x3_Qty > 0) {
                placeCardPhotoGroup(srcDoc, origHistoryState, items2x3, fIdx, W_2x3, H_2x3, false);
            }

            // Đóng file nguồn không lưu đè
            srcDoc.close(SaveOptions.DONOTSAVECHANGES);
        }

        // Tự động lưu file kết quả đuôi JPG (01.jpg, 02.jpg...) và đóng tài liệu nếu được bật
        var savedFilesList = [];
        var saveFolder = null;
        if (cbAutoSave.value) {
            saveFolder = new Folder(txtFolderPath.text);
            if (!saveFolder.exists) {
                saveFolder.create();
            }

            var jpgOptions = new JPEGSaveOptions();
            jpgOptions.antiAlias = true;
            jpgOptions.embedColorProfile = true;
            jpgOptions.formatOptions = FormatOptions.STANDARDBASELINE;
            jpgOptions.quality = 12;

            for (var c = 0; c < canvasDocs.length; c++) {
                var cDoc = canvasDocs[c];
                app.activeDocument = cDoc;

                var fileIndex = c + 1;
                var numStr = (fileIndex < 10) ? ("0" + fileIndex) : ("" + fileIndex);
                var saveFile = new File(saveFolder.fsName + "/" + numStr + ".jpg");

                if (saveFile.exists) {
                    saveFile.remove();
                }

                cDoc.saveAs(saveFile, jpgOptions, true, Extension.LOWERCASE);
                savedFilesList.push(saveFile.name);

                cDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }

        var totalImagesCount = items4x6.length + items3x4.length + items2x3.length + itemsFull.length;
        var summaryMsg = "HOÀN TẤT XẾP " + (cbAutoSave.value ? "& LƯU ẢNH TỰ ĐỘNG" : "ẢNH TỐI ƯU") + "!\n";
        summaryMsg += "• Đã xếp thành công " + totalImagesCount + " ảnh từ " + totalFiles + " file ảnh nguồn:\n";
        if (cardItems.length > 0) {
            summaryMsg += "  + Ảnh thẻ: " + cardItems.length + " ảnh -> " + cardSheets + " trang " + paperName + ".\n";
        }
        if (itemsFull.length > 0) {
            summaryMsg += "  + Ảnh nguyên khổ: " + itemsFull.length + " ảnh -> " + fullSheets + " trang " + paperName + ".\n";
        }
        if (cbAutoSave.value) {
            summaryMsg += "• Đã tự động lưu " + savedFilesList.length + " file (" + savedFilesList.join(", ") + ") vào thư mục:\n  " + saveFolder.fsName + "\n";
            summaryMsg += "• Đã tự động đóng trực tiếp toàn bộ tài liệu trong Photoshop.";
        } else {
            summaryMsg += "• Tổng số trang thành phẩm: " + totalSheets + " trang " + paperName + ".";
        }
        alert(summaryMsg);

    } catch (e) {
        alert("Có lỗi xảy ra trong quá trình xử lý: " + e.toString());
    } finally {
        app.displayDialogs = DialogModes.ALL;
    }

    function placeCardPhotoGroup(srcDoc, origHistoryState, itemsList, fIdx, targetW, targetH, needCrop3x4) {
        var targetsNormal = [];
        var targetsRot = [];
        for (var i = 0; i < itemsList.length; i++) {
            if (itemsList[i].fileIndex === fIdx) {
                var pl = placementMap[itemsList[i].id];
                if (pl) {
                    if (pl.needRotate) {
                        targetsRot.push(pl);
                    } else {
                        targetsNormal.push(pl);
                    }
                }
            }
        }
        if (targetsNormal.length === 0 && targetsRot.length === 0) return;

        app.activeDocument = srcDoc;
        srcDoc.activeHistoryState = origHistoryState;

        if (needCrop3x4) {
            cropTo3x4(srcDoc, cbCropInteractive.value);
        }

        srcDoc.resizeImage(
            UnitValue(targetW, "px"),
            UnitValue(targetH, "px"),
            DPI,
            ResampleMethod.BICUBICSHARPER
        );

        if (targetsNormal.length > 0) {
            srcDoc.selection.selectAll();
            srcDoc.selection.copy();
            pasteAndStrokeItems(targetsNormal);
        }

        if (targetsRot.length > 0) {
            app.activeDocument = srcDoc;
            srcDoc.rotateCanvas(270);
            srcDoc.selection.selectAll();
            srcDoc.selection.copy();
            pasteAndStrokeItems(targetsRot);
        }
    }

    function pasteAndStrokeItems(targets) {
        for (var t = 0; t < targets.length; t++) {
            var pl = targets[t];
            var targetCanvas = canvasDocs[pl.pageIndex];

            app.activeDocument = targetCanvas;
            var pastedLayer = targetCanvas.paste();

            var bounds = pastedLayer.bounds;
            var currentLeft = getPxValue(bounds[0]);
            var currentTop = getPxValue(bounds[1]);

            var deltaX = pl.left - currentLeft;
            var deltaY = pl.top - currentTop;

            pastedLayer.translate(UnitValue(deltaX, "px"), UnitValue(deltaY, "px"));

            // Vẽ viền mảnh 1px Inside màu #CCCCCC
            targetCanvas.selection.select([
                [pl.left, pl.top],
                [pl.left + pl.w, pl.top],
                [pl.left + pl.w, pl.top + pl.h],
                [pl.left, pl.top + pl.h]
            ]);
            targetCanvas.selection.stroke(
                strokeColor,
                1,
                StrokeLocation.INSIDE,
                ColorBlendMode.NORMAL,
                100,
                false
            );
            targetCanvas.selection.deselect();
        }
    }

    /**
     * Cắt ảnh về tỷ lệ chuẩn 3:4 (Chiều rộng 354px, chiều cao 472px ở 300 PPI)
     */
    function cropTo3x4(doc, interactive) {
        app.activeDocument = doc;

        var docW = getPxValue(doc.width);
        var docH = getPxValue(doc.height);

        var cropW = docW;
        var cropH = Math.round(docW * (4.0 / 3.0));

        if (cropH > docH) {
            cropH = docH;
            cropW = Math.round(docH * (3.0 / 4.0));
        }

        var left = Math.round((docW - cropW) / 2);
        var top = Math.round((docH - cropH) / 2);
        var right = left + cropW;
        var bottom = top + cropH;

        var desc = new ActionDescriptor();
        var boxDesc = new ActionDescriptor();
        boxDesc.putUnitDouble(charIDToTypeID("Top "), charIDToTypeID("#Pxl"), top);
        boxDesc.putUnitDouble(charIDToTypeID("Left"), charIDToTypeID("#Pxl"), left);
        boxDesc.putUnitDouble(charIDToTypeID("Btom"), charIDToTypeID("#Pxl"), bottom);
        boxDesc.putUnitDouble(charIDToTypeID("Rght"), charIDToTypeID("#Pxl"), right);
        desc.putObject(charIDToTypeID("T   "), charIDToTypeID("Rct1"), boxDesc);
        desc.putUnitDouble(charIDToTypeID("Angl"), charIDToTypeID("#Ang"), 0);

        desc.putUnitDouble(charIDToTypeID("Wdth"), charIDToTypeID("#Pxl"), 354);
        desc.putUnitDouble(charIDToTypeID("Hght"), charIDToTypeID("#Pxl"), 472);
        desc.putUnitDouble(charIDToTypeID("Rslt"), charIDToTypeID("#Rsl"), 300);
        desc.putBoolean(stringIDToTypeID("delete"), true);

        if (interactive) {
            var prevDialogs = app.displayDialogs;
            app.displayDialogs = DialogModes.ALL;
            try {
                executeAction(charIDToTypeID("Crop"), desc, DialogModes.ALL);
            } catch (e) {
                executeAction(charIDToTypeID("Crop"), desc, DialogModes.NO);
            } finally {
                app.displayDialogs = prevDialogs;
            }
        } else {
            executeAction(charIDToTypeID("Crop"), desc, DialogModes.NO);
        }
    }

    function getPxValue(val) {
        if (typeof val === "object" && typeof val.as === "function") {
            return Math.round(val.as("px"));
        }
        if (typeof val === "object" && typeof val.value === "number") {
            return Math.round(val.value);
        }
        return Math.round(Number(val));
    }
})();
