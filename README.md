# VH Lab Panel (UXP)

Plugin UXP cho Photoshop của Viet Hung Labs, đóng gói dạng `.ccx`. Đây là bản chuyển đổi từ panel CEP cũ. Mã nguồn bản CEP vẫn giữ nguyên trên nhánh `cep-legacy-v3.1`.

- Yêu cầu Photoshop 2023 (v24.0) trở lên.
- Panel gồm 3 tab: **TOOLS**, **XẾP ẢNH**, **GHÉP ÁO**.

## Cấu trúc

```
plugin/                 ← thư mục plugin (UDT nạp và đóng gói thư mục này)
  manifest.json         manifest v5; quyền localFileSystem=fullAccess, launchProcess
  index.html            giao diện 3 tab và các hộp thoại
  main.js               danh sách nút → lệnh
  css/style.css
  icons/
  js/core.js            executeAsModal + batchPlay, gộp History, báo lỗi
  js/files.js           đọc/ghi file, token cho batchPlay
  js/steps.js           TỰ SINH: lệnh batchPlay chuyển từ script JSX cũ
  js/features/
    save.js             JPG, PNG, Lưu jpg
    crop.js             Crop 10x15, Đảng viên (crop thẻ 3x4/4x6)
    xepanh.js           Nhiều người (xếp ảnh thẻ tự động)
    gallery.js          GHÉP ÁO
    external.js         VISA (mở Passport Photo Plugin)
tools/
  am2batchplay.js       bộ chuyển script Action Manager → batchPlay
  build_steps.js        sinh plugin/js/steps.js
```

## Chạy thử

1. Cài **UXP Developer Tool** (UDT) từ Creative Cloud Desktop. Mở Photoshop.
2. Trong UDT, bấm **Add Plugin** rồi chọn `plugin/manifest.json`.
3. Ở plugin vừa thêm, bấm **••• → Load**. Panel hiện trong menu **Plugins → VH Lab Panel**.
4. Khi sửa code, bấm **••• → Reload**. Muốn xem log và lỗi, chọn **Debug**.

## Đóng gói và cài đặt .ccx

1. Trong UDT, bấm **••• → Package** rồi chọn thư mục lưu. UDT sẽ tạo ra file `com.viethunglabs.vhlabpanel_PS.ccx`.
2. Trên máy dùng: nhấp đúp file `.ccx`. Creative Cloud Desktop sẽ cài plugin vào Photoshop.
3. Bản CEP cũ và bản UXP có thể cài song song. Gỡ bản CEP khi bản UXP đã chạy ổn.

## Sinh lại `js/steps.js`

Chỉ cần làm việc này khi sửa bộ chuyển hoặc script gốc. Script JSX gốc nằm trên nhánh `cep-legacy-v3.1`:

```
git worktree add ../vh-lab-panel-cep cep-legacy-v3.1
node tools/build_steps.js ../vh-lab-panel-cep/jsx plugin/js/steps.js
```

Lệnh mới ghi bằng Photoshop (Actions panel → *Copy As JavaScript*) có thể dán thẳng vào `steps.js`, hoặc đặt thành một file riêng trong `js/features/`.

## Nút và nguồn gốc

| Tab | Nút | Bản UXP |
|---|---|---|
| TOOLS | C-Raw, Gộp, Q1–Q8, T1–T23 (trừ các nút ghi bên dưới), Tăng nét 2, Ám vàng/đỏ/tím | Tự chuyển từ JSX (`steps.js`) |
| TOOLS | JPG, PNG, Lưu jpg | `save.js` |
| TOOLS | Crop, Đảng viên | `crop.js` |
| TOOLS | VISA | `external.js` |
| XẾP ẢNH | 20 bố cục cố định | Tự chuyển từ JSX. Action trong bộ "Tool" được nhúng thẳng vào lệnh |
| XẾP ẢNH | Nhiều người | `xepanh.js`, giữ nguyên thuật toán xếp |
| GHÉP ÁO | 10 nhóm | `gallery.js`, đọc thư mục DATA |

## Thay đổi và sửa lỗi so với bản CEP

- Bỏ khoảng 1.300 file không dùng: preset, script cũ, các tab TAB4/TAB5/index2/index3, file `.rar`, bản sao. Bỏ hẳn các nhóm nút đã comment.
- Bỏ nút **Reset action** (script rỗng) và **Xuất js** (dùng *Copy As JavaScript* của Photoshop thay thế).
- Các bố cục XẾP ẢNH không cần nạp bộ action "Tool" nữa. Các bước *Màu nền*, *Tạo viền*, *Flatten* được nhúng thẳng vào lệnh.
- Các bố cục (CP) 1+6, (CP) 0+8, Can phạm, Can phạm 2, 4x(1+2) và 4x(2+0) không cần preset tài liệu "CP"/"CP2" trên máy nữa. Kích thước được ghi thẳng: CP = 12,7 x 8,6 cm, CP2 = 12,7 x 17,8 cm, 300 PPI.
- **Lưu jpg** trước đây ghi cứng vào `/d/TRINH GIA/HANG NGAY/2024/09/15/01/NAME.jpg`. Nay nút này gộp lớp rồi hỏi nơi lưu.
- **Crop 10x15**: sửa lỗi mở rộng canvas khi khung crop vượt mép trái hoặc mép trên.
- **GHÉP ÁO**: thư mục dữ liệu không còn ghi cứng trong 10 file. Mặc định là `D:\TRINH GIA\TU LIEU LAM ANH\PANEL\DATA`, đổi được ở tab GHÉP ÁO.
- Một lần bấm nút ở tab TOOLS chỉ tạo một bước History. Khi lệnh bị lỗi hoặc bị huỷ, ảnh được trả lại trạng thái trước khi bấm.
- **VISA**: báo rõ khi chưa cài Passport Photo Plugin.
- Thống nhất link Facebook: hieuanhviethung.

## Còn chờ

- **Tăng nét 1** (`K38.jsx`): file gốc là JSXBIN đã bị làm rối mã nên không đọc được. Để làm lại nút này, cần ghi lại các bước khi chạy nó trong bản CEP (Actions panel → Record → *Copy As JavaScript*).

## Danh sách kiểm thử

- [ ] Panel hiện đủ 3 tab và giao diện theo theme sáng/tối của Photoshop.
- [ ] TOOLS: từng nút cho kết quả giống bản CEP trên cùng một ảnh mẫu.
- [ ] Đẹp da (Portraiture) và SkinFiner: kiểm tra plugin có nhận đúng thiết lập đã lưu. Nếu không nhận, plugin sẽ mở hộp thoại của filter.
- [ ] Màu nền, và các bố cục XẾP ẢNH có bước Màu nền: hộp chọn màu có hiện như bản cũ.
- [ ] XẾP ẢNH: 20 bố cục cố định, đặc biệt Can phạm, Can phạm 2, 4x(1+2) và 4x(2+0) (các bố cục này có đóng tài liệu).
- [ ] Nhiều người: chạy với 2–3 ảnh, khổ CP2, bật và tắt tự lưu JPG.
- [ ] Crop 10x15 và Đảng viên: chạy với guide và với vùng chọn.
- [ ] GHÉP ÁO: mở cả 10 nhóm, bấm một mẫu PNG và một mẫu PSD.
- [ ] JPG, PNG, Lưu jpg, VISA.
