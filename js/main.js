(function () {
    function e() {
        var b = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION");
        b.extensionId = "Panel Demo";
        a.dispatchEvent(b)
    }

    var a = new CSInterface;
    (function () {
        themeManager.init();
        e();
// Quick Retouch
// 1: Xoay, 2: Contrast, 3: Unsharp Mask, 4: Level, 5: Curves, 6: Saturation

$("#Q1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '1.jsx")') });
$("#Q2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '2.jsx")') });
$("#Q3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '3.jsx")') });
$("#Q4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '4.jsx")') });
$("#Q5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '5.jsx")') });
$("#Q6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '6.jsx")') });
$("#Q7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '7.jsx")') });
$("#Q8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/quick-retouch/"; a.evalScript('$.evalFile("' + b + '8.jsx")') });


// Tools
// 1: Màu nền, 2: Màu môi, 3: VISA, 4: Upscalse, 5: Bóng da, 6: Đều màu da
// 7: Đều sáng da, 8: Nổi khối, 9: Sáng mắt, 10: Nhăn áo, 11: Nhặt mụn mạnh, 12: Nhặt mụn nhẹ
// 13: Đẹp da, 14: Tách tóc, 15: Tạo viền, 16: Đổ nền, 17: Lưu jpg, 18: Auto Contrast, 19: Gắn số, 20: Reset action

$("#T1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '1.jsx")') });
$("#T2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '2.jsx")') });
$("#T3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + 'PassportPhotoPlugin.jsx")') });
$("#T4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '4.jsx")') });
$("#T5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '5.jsx")') });
$("#T6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '6.jsx")') });
$("#T7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '7.jsx")') });
$("#T8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '8.jsx")') });
$("#T9").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '9.jsx")') });
$("#T10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '10.jsx")') });
$("#T11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '11.jsx")') });
$("#T12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '12.jsx")') });
$("#T13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '13.jsx")') });
$("#T14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '14.jsx")') });
$("#T15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '15.jsx")') });
$("#T16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '16.jsx")') });
$("#T17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '17.jsx")') });
$("#T18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '18.jsx")') });
$("#T19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '19.jsx")') });
$("#T20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '20.jsx")') });
$("#T21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + 'Dang_vien.jsx")') });
$("#T22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + '22.jsx")') });
$("#T23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + 'skinfiner.jsx")') });
//Layout
// 1: 8 + 0, 2: 8 + 0 (2 phông), 3: 6 + 4, 4: 5 + 6; 5: 5 + 4 + 4, 6: 4 + 8
// 7: 4 + 8 (2), 8: 2 + 12; 9: 2 + 12 (2), 10: 0 + 16, 11: (CP) 4 + 0, 12: (CP) 1 + 6
// 13: (CP) 0 + 8, 14: Can phạm, 19: 4(2) + 8(2)
$("#L1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '1.jsx")') });
$("#L2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '2.jsx")') });
$("#L3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '3.jsx")') });
$("#L4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '4.jsx")') });
$("#L5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '5.jsx")') });
$("#L6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '6.jsx")') });
$("#L7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '7.jsx")') });
$("#L8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '8.jsx")') });
$("#L9").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '9.jsx")') });
$("#L10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '10.jsx")') });
$("#L11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '11.jsx")') });
$("#L12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '12.jsx")') });
$("#L13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '13.jsx")') });
$("#L14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '14.jsx")') });
$("#L15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '15.jsx")') });
$("#L16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '16.jsx")') });
$("#L17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '17.jsx")') });
$("#L18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '18.jsx")') });
$("#L19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '19.jsx")') });
$("#L20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '20.jsx")') });
$("#L21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/layout/"; a.evalScript('$.evalFile("' + b + '21.jsx")') });
// Data

$("#D1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'congan.jsx")') });
$("#D2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'bodoi.jsx")') });
$("#D3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'somi.jsx")') });
$("#D4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'vest.jsx")') });
$("#D5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'hocsinh.jsx")') });
$("#D6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'aodai.jsx")') });
$("#D7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'huyhieu.jsx")') });
$("#D8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'viethung.jsx")') });
$("#D9").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'dongphuckhac.jsx")') });
$("#D10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/data/"; a.evalScript('$.evalFile("' + b + 'tonghop.jsx")') });



// Function xuất action sang js

$("#temp").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/tools/"; a.evalScript('$.evalFile("' + b + 'actiontojsx.jsx")') });


$("#P1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P1.jsx")') });
$("#P2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P2.jsx")') });
$("#P3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P3.jsx")') });
$("#P4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P4.jsx")') });
$("#P5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P5.jsx")') });
$("#P6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P6.jsx")') });
$("#P7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P7.jsx")') });
$("#P8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'P8.jsx")') });


$("#C001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'C001.jsx")') });
$("#C002").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'C002.jsx")') });
$("#C003").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'C003.jsx")') });

$("#C004").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'C004.jsx")') });
$("#C005").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'C005.jsx")') });


$("#AS").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'AS.jsx")') });

$("#PS").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PS.jsx")') });
$("#BV").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'BV.jsx")') });
   
$("#a1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a1.js")') });
$("#a2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a2.js")') });
$("#a3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a3.js")') });
$("#a4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a4.js")') });
$("#a5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a5.js")') });
$("#a6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a6.js")') });
$("#a7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a7.js")') });
$("#a8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a8.js")') });
$("#a9").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a9.js")') });
$("#a10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a10.js")') });
$("#a11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a11.js")') });
$("#a12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a12.js")') });
$("#a13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a13.js")') });
$("#a14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a14.js")') });
$("#a15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a15.js")') });
$("#a16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a16.js")') });
$("#a17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a17.js")') });
$("#a18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a18.js")') });
$("#a19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a19.js")') });
$("#a20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a20.js")') });
$("#a21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a21.js")') });
$("#a22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a22.js")') });
$("#a23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a23.js")') });
$("#a24").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a24.js")') });
$("#a25").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a25.js")') });
$("#a26").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a26.js")') });
$("#a27").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a27.js")') });
$("#a28").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a28.js")') });
$("#a29").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a29.jsx")') });
$("#a999").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a999.jsx")') });

$("#a30").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a30.js")') });
$("#a31").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a31.js")') });
$("#a32").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a32.js")') });

$("#a44").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a44.jsx")') });
$("#a45").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a45.jsx")') });
$("#a46").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a46.jsx")') });
$("#a47").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a47.jsx")') });
$("#a48").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a48.jsx")') });



$("#K1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K1.jsx")') });
$("#K3").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K3.js")') });
$("#K4").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K4.js")') });
$("#K5").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K5.js")') });
$("#K6").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K6.js")') });
$("#K7").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K7.js")') });
$("#K8").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K8.js")') });
$("#K9").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K9.js")') });
$("#K10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K10.js")') });
$("#K11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K11.js")') });
$("#K12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K12.js")') });
$("#K13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K13.js")') });
$("#K14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K14.js")') });
$("#K15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K15.js")') });
$("#K16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K16.js")') });
$("#K17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K17.js")') });
$("#K18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K18.js")') });
$("#K19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K19.js")') });
$("#K20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K20.js")') });
$("#K21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K21.js")') });
$("#K22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K22.js")') });
$("#K23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K23.js")') });
$("#K24").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K24.js")') });
$("#K25").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K25.js")') });
$("#K26").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K26.jsx")') });
$("#K27").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K27.js")') });
$("#K28").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K28.jsx")') });
$("#K29").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K29.jsx")') });
$("#K30").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K30.jsx")') });
$("#K31").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K31.jsx")') });
$("#K32").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K32.jsx")') });
$("#K33").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K33.jsx")') });
$("#K34").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K34.jsx")') });
$("#K35").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K35.jsx")') });
$("#K36").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K36.jsx")') });
$("#K37").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K37.jsx")') });
$("#K38").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K38.jsx")') });
$("#K39").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K39.jsx")') });
$("#K40").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K40.jsx")') });
$("#K41").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K41.jsx")') });
$("#K42").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K42.jsx")') });
$("#K43").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K43.jsx")') });
$("#K44").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K44.jsx")') });
$("#K45").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K45.jsx")') });
$("#K46").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K46.jsx")') });
$("#K47").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K47.jsx")') });
$("#K48").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K48.jsx")') });
$("#K49").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K49.jsx")') });
$("#K50").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K50.jsx")') });
$("#K51").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K51.jsx")') });
$("#K52").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K52.jsx")') });
$("#K53").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K53.jsx")') });
$("#K54").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K54.jsx")') });
$("#K55").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'K55.jsx")') });

$("#a33").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a33.js")') });
$("#a34").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a34.js")') });
$("#a35").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a35.js")') });
$("#a36").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a36.js")') });
$("#a37").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a37.js")') });
$("#a38").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a38.jsx")') });
$("#a39").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a39.jsx")') });
$("#a40").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a40.jsx")') });

$("#a41").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a41.jsx")') });
$("#a42").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a42.jsx")') });
$("#a43").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'a43.jsx")') });

$("#JSX001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX001.jsx")') });
$("#JSX002").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX002.jsx")') });
$("#JSX003").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX003.jsx")') });
$("#JSX004").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX004.jsx")') });
$("#JSX005").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX005.jsx")') });
$("#JSX006").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX006.jsx")') });
$("#JSX007").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX007.jsx")') });
$("#JSX008").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX008.jsx")') });
$("#JSX009").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX009.jsx")') });
$("#JSX010").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX010.jsx")') });
$("#JSX011").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX011.jsx")') });
$("#JSX012").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX012.jsx")') });
$("#JSX013").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX013.jsx")') });
$("#JSX014").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX014.jsx")') });
$("#JSX015").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX015.jsx")') });
$("#JSX016").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX016.jsx")') });
$("#JSX017").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX017.jsx")') });

$("#JSX018").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX018.jsx")') });
$("#JSX019").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX019.jsx")') });
$("#JSX020").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX020.jsx")') });
$("#JSX021").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX021.jsx")') });
$("#JSX022").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX022.jsx")') });
$("#JSX023").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX023.jsx")') });
$("#JSX024").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX024.jsx")') });
$("#JSX025").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX025.jsx")') });
$("#JSX026").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX026.jsx")') });
$("#JSX027").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX027.jsx")') });
$("#JSX028").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX028.jsx")') });

$("#JSX029").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX029.jsx")') });
$("#JSX030").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX030.jsx")') });
$("#JSX031").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX031.jsx")') });
$("#JSX032").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX032.jsx")') });
$("#JSX033").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX033.jsx")') });
$("#JSX034").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX034.jsx")') });
$("#JSX035").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX035.jsx")') });
$("#JSX036").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX036.jsx")') });
$("#JSX037").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX037.jsx")') });
$("#JSX038").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX038.jsx")') });
$("#JSX039").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX039.jsx")') });
$("#JSX040").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'JSX040.jsx")') });




$("#B001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B001.js")') });
$("#B002").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B002.js")') });
$("#B003").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B003.js")') });
$("#B004").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B004.js")') });
$("#B005").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B005.js")') });
$("#B006").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B006.jsx")') });
$("#B007").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B007.jsx")') });
$("#B008").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B008.js")') });
$("#B009").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B009.js")') });
$("#B010").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B010.js")') });
$("#B011").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B011.js")') });
$("#B012").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B012.js")') });
$("#B013").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B013.js")') });
$("#B014").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B014.js")') });
$("#B015").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B015.js")') });
$("#B016").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B016.js")') });
$("#B017").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B017.js")') });
$("#B018").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B018.js")') });
$("#B019").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B019.js")') });
$("#B020").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'B020.js")') });


$("#p001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p001.jsx")') });
$("#p002").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p002.jsx")') });
$("#p003").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p003.jsx")') });
$("#p004").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p004.jsx")') });
$("#p005").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p005.jsx")') });
$("#p006").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p006.jsx")') });
$("#p007").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p007.jsx")') });
$("#p008").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p008.jsx")') });
$("#p009").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p009.jsx")') });
$("#p010").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p010.jsx")') });
$("#p011").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p011.jsx")') });
$("#p012").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p012.jsx")') });
$("#p013").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p013.jsx")') });
$("#p014").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p014.jsx")') });
$("#p015").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p015.jsx")') });
$("#p016").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p016.jsx")') });
$("#p017").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'p017.jsx")') });

$("#RT001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT001.jsx")') });
$("#RT002").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT002.jsx")') });
$("#RT003").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT003.jsx")') });
$("#RT004").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT004.jsx")') });
$("#RT005").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT005.jsx")') });
$("#RT006").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT006.jsx")') });
$("#RT007").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT007.jsx")') });
$("#RT008").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT008.jsx")') });
$("#RT009").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT009.jsx")') });
$("#RT010").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT010.jsx")') });

$("#RT011").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT011.jsx")') });
$("#RT012").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT012.jsx")') });
$("#RT013").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT013.jsx")') });
$("#RT014").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT014.jsx")') });
$("#RT015").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT015.jsx")') });
$("#RT016").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT016.jsx")') });
$("#RT017").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT017.jsx")') });
$("#RT018").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT018.jsx")') });
$("#RT019").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT019.jsx")') });
$("#RT020").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT020.jsx")') });

$("#RT021").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT021.jsx")') });
$("#RT022").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT022.jsx")') });
$("#RT023").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT023.jsx")') });
$("#RT024").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT024.jsx")') });
$("#RT025").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT025.jsx")') });
$("#RT026").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT026.jsx")') });
$("#RT027").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT027.jsx")') });
$("#RT028").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT028.jsx")') });
$("#RT029").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT029.jsx")') });
$("#RT030").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT030.jsx")') });

$("#RT031").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT031.jsx")') });
$("#RT032").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT032.jsx")') });
$("#RT033").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'save-jpg.jsx")') });
$("#RT034").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT034.jsx")') });
$("#RT035").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT035.jsx")') });
$("#RT036").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT036.jsx")') });
$("#RT037").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT037.jsx")') });
$("#RT038").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT038.jsx")') });
$("#RT039").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT039.jsx")') });
$("#RT040").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT040.jsx")') });

$("#RT041").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT041.jsx")') });
$("#RT042").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT042.jsx")') });
$("#RT043").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT043.jsx")') });
$("#RT044").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT044.jsx")') });
$("#RT045").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT045.jsx")') });
$("#RT046").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT046.jsx")') });
$("#RT047").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT047.jsx")') });

$("#RT048").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT048.jsx")') });
$("#RT049").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT049.jsx")') });

$("#RT050").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT050.jsx")') });
$("#RT051").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'save-png.jsx")') });
$("#RT052").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT052.jsx")') });
$("#RT053").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT053.jsx")') });
$("#RT054").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT054.jsx")') });
$("#RT055").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT055.jsx")') });
$("#RT056").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT056.jsx")') });
$("#RT057").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT057.jsx")') });
$("#RT058").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT058.jsx")') });
$("#RT059").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT059.jsx")') });
$("#RT060").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT060.jsx")') });
$("#RT061").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT061.jsx")') });
$("#RT062").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT062.jsx")') });
$("#RT063").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT063.jsx")') });
$("#RT064").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT064.jsx")') });
$("#RT065").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT065.jsx")') });
$("#RT066").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT066.jsx")') });
$("#RT067").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT067.jsx")') });
$("#RT068").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT068.jsx")') });
$("#RT069").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT069.jsx")') });
$("#RT070").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT070.jsx")') });
$("#RT071").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT071.jsx")') });
$("#RT072").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT072.jsx")') });
$("#RT073").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT073.jsx")') });
$("#RT074").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT074.jsx")') });
$("#RT075").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT075.jsx")') });
$("#RT076").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'RT076.jsx")') });

$("#D01").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D01.jsx")') });
$("#D02").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D02.jsx")') });
$("#D03").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D03.jsx")') });
$("#D04").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D04.jsx")') });
$("#D05").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D05.jsx")') });
$("#D06").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D06.jsx")') });
$("#D07").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D07.jsx")') });
$("#D08").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D08.jsx")') });
$("#D09").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D09.jsx")') });
$("#D10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D10.jsx")') });

$("#D11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D11.jsx")') });
$("#D12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D12.jsx")') });
$("#D13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D13.jsx")') });
$("#D14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D14.jsx")') });
$("#D15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D15.jsx")') });
$("#D16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D16.jsx")') });
$("#D17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D17.jsx")') });
$("#D18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D18.jsx")') });
$("#D19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D19.jsx")') });
$("#D20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D20.jsx")') });

$("#D21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D21.jsx")') });
$("#D22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D22.jsx")') });
$("#D23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D23.jsx")') });
$("#D24").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D24.jsx")') });
$("#D25").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D25.jsx")') });
$("#D26").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D26.jsx")') });
$("#D27").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D27.jsx")') });
$("#D28").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D28.jsx")') });
$("#D29").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D29.jsx")') });
$("#D30").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D30.jsx")') });

$("#D31").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D31.jsx")') });
$("#D32").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D32.jsx")') });
$("#D33").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D33.jsx")') });
$("#D34").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D34.jsx")') });
$("#D35").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D35.jsx")') });
$("#D36").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D36.jsx")') });
$("#D37").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D37.jsx")') });
$("#D38").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D38.jsx")') });
$("#D39").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D39.jsx")') });
$("#D40").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'D40.jsx")') });
$("#D41").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'crop_10x15.jsx")') });

$("#v01").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v01.jsx")') });
$("#v02").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v02.jsx")') });
$("#v03").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v03.jsx")') });
$("#v04").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v04.jsx")') });
$("#v05").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v05.jsx")') });
$("#v06").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v06.jsx")') });
$("#v07").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v07.jsx")') });
$("#v08").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v08.jsx")') });
$("#v09").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v09.jsx")') });
$("#v10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v10.jsx")') });
$("#v11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v11.jsx")') });
$("#v12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v12.jsx")') });


$("#v13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v13.jsx")') });
$("#v14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'v14.jsx")') });


$("#SB").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'SB.jsx")') });

$("#H01").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H01.jsx")') });
$("#H02").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H02.jsx")') });
$("#H03").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H03.jsx")') });
$("#H04").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H04.jsx")') });
$("#H05").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H05.jsx")') });
$("#H06").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H06.jsx")') });
$("#H07").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H07.jsx")') });
$("#H08").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H08.jsx")') });
$("#H09").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H09.jsx")') });

$("#H10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H10.jsx")') });
$("#H11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H11.jsx")') });
$("#H12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H12.jsx")') });
$("#H13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H13.jsx")') });
$("#H14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H14.jsx")') });
$("#H15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H15.jsx")') });
$("#H16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H16.jsx")') });
$("#H17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H17.jsx")') });
$("#H18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H18.jsx")') });
$("#H19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H19.jsx")') });
$("#H20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H20.jsx")') });
$("#H21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H21.jsx")') });
$("#H22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H22.jsx")') });
$("#H23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H23.jsx")') });
$("#H24").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H24.jsx")') });
$("#H25").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H25.jsx")') });
$("#H26").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H26.jsx")') });
$("#H27").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H27.jsx")') });
$("#H28").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H28.jsx")') });
$("#H29").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H29.jsx")') });

$("#H30").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H30.jsx")') });
$("#H31").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H31.jsx")') });
$("#H32").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H32.jsx")') });
$("#H33").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H33.jsx")') });
$("#H34").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H34.jsx")') });
$("#H35").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H35.jsx")') });
$("#H36").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H36.jsx")') });
$("#H37").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H37.jsx")') });
$("#H38").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H38.jsx")') });
$("#H39").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H39.jsx")') });

$("#H40").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H40.jsx")') });
$("#H41").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H41.jsx")') });
$("#H42").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H42.jsx")') });
$("#H43").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H43.jsx")') });
$("#H44").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H44.jsx")') });
$("#H45").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H45.jsx")') });
$("#H46").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H46.jsx")') });
$("#H47").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H47.jsx")') });
$("#H48").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H48.jsx")') });
$("#H49").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H49.jsx")') });

$("#H50").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H50.jsx")') });
$("#H51").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H51.jsx")') });
$("#H52").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H52.jsx")') });
$("#H53").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H53.jsx")') });
$("#H54").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H54.jsx")') });
$("#H55").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H55.jsx")') });
$("#H56").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H56.jsx")') });
$("#H57").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H57.jsx")') });
$("#H58").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H58.jsx")') });
$("#H59").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H59.jsx")') });
$("#H60").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'H60.jsx")') });











$("#PLP01").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP01.jsx")') });
$("#PLP02").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP02.jsx")') });
$("#PLP03").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP03.jsx")') });
$("#PLP04").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP04.jsx")') });
$("#PLP05").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP05.jsx")') });
$("#PLP06").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP06.jsx")') });
$("#PLP07").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP07.jsx")') });
$("#PLP08").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP08.jsx")') });
$("#PLP09").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP09.jsx")') });
$("#PLP10").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP10.jsx")') });

$("#PLP11").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP11.jsx")') });
$("#PLP12").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP12.jsx")') });
$("#PLP13").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP13.jsx")') });
$("#PLP14").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP14.jsx")') });
$("#PLP15").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP15.jsx")') });
$("#PLP16").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP16.jsx")') });
$("#PLP17").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP17.jsx")') });
$("#PLP18").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP18.jsx")') });
$("#PLP19").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP19.jsx")') });
$("#PLP20").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP20.jsx")') });
$("#PLP21").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP21.jsx")') });
$("#PLP22").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP22.jsx")') });
$("#PLP23").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP23.jsx")') });
$("#PLP24").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP24.jsx")') });
$("#PLP25").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP25.jsx")') });
$("#PLP26").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP26.jsx")') });
$("#PLP27").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP27.jsx")') });
$("#PLP28").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP28.jsx")') });
$("#PLP29").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'PLP29.jsx")') });




$("#cameraraw").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'cameraraw.jsx")') });

$("#AC1").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'AC1.jsx")') });
$("#AC2").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'AC2.jsx")') });


$("#CF001").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; CF001.evalScript('$.evalFile("' + b + 'a28.js")') });

$("#100").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + '100.js")') });
$("#XLHL").click(function () { var b = a.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; a.evalScript('$.evalFile("' + b + 'XLHL.jsx")') });




        
    })()
})();
