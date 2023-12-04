//trong js thông thường có 3 loại function:
// 1.declaration function
// 2. Expression function
//3. Arrow function
//4. generation function

// 1.declaration function

//Cú pháp function ten_function(tham_so){//logic code}
//Chú ý function declaration có cơ chế hosting
// phạm vi sử dụng biến: những biến được khai báo với từ khóa let,const trong function thì phạm vi sue dụng chỉ trong khối block function
// nếu khai báo function loại này mà trùng tên nhau thì lấy giá trị của hàm được khai báo sau

// Xây dựng 1 hàm tính tổng a và b
// function sum (a, b){
//     //logic code
//     return a+b ;
// }
// console.log(sum(1,3));

//2. Expression function

// let ten_ham=function(tham_so){
//     //logic code
// }
// chú ý k có cơ chế hosting
//var có thể khai báo lại và lấy kết quả sau cùng.

let subtraction = function (a, b) {
  return a + b;
};
console.log(subtraction(4, 5));

//3. Arrow function

//Cú pháp: tu_khoa_khai_bao ten_ham = (tham_so) => {logic code}
// không có cơ chế hosting.
// khuyến cáo : nên khai báo với từ khóa const, không nên sử dụng var.
// khi sử dụng hàm thì yêu cầu phải bắt try-catch cho hàm để tránh việc dừng đột ngột.
// khi chương trình thành công thì nó lọt vào try
// khi cso lỗi thì lọt vào catch
// khi thành công hay thất bài  thì mặc định nó lọt vào finally

/**
 * Thực hiện nhân 2 số
 * @param {*} a số thứ 1
 * @param {*} b số thứ 2
 * @returns kết quả của phép nhân 2 số
 * Auth: NDH( 30/11/2023)
 */
// const multiplication = (a, b) => {
//   return a * b;
// };

// console.log(multiplication(2,3));

// Đối tượng Date => phải sưaar dụng từ khóa new để tạo đối tượng

//1. lấy ra thời gian hiện tại trên máy
let today = new Date();

console.log(today);

//lấy ra ngày ,tháng , năm , h,, phút , s, mili giây

let day = today.getDate();
console.log("ngày", day);

let month = today.getMonth() + 1;
console.log("tháng", month);

let year = today.getFullYear();
console.log("năm", year);

let hours = today.getHours();
console.log("giờ", hours);

let minutes = today.getMinutes();
console.log("phút", minutes);

let seconds = today.getSeconds();
console.log("giây", seconds);

let miliSeconds = today.getMilliseconds();
console.log("mili giây", miliSeconds);

// định dạng chuỗi thời gian
//1. định dạng ngày /tháng/năm
let formatDMY = `${day}/ ${month}/${year}`;

console.log("định dạng ngày tháng năm: ", formatDMY);

//viết hàm format thời gian dựa vào 1 chuỗi thời gian đã cho
// 11/10/2023 8:06:13 SA

let time = "Fri Dec 01 2023 08:58:40 GMT+0700 (Giờ Đông Dương)";

/**
 * Format định dạng thời gian: ngày /tháng/năm
 * @param {*} timeString : Chuỗi thời gian cần định dạng
 * @returns Chuỗi định dang ngày/tháng/năm
 * auth: NDHUNG(01/12/2023)
 */
const formatDate = (timeString) => {
  //lấy ra thời gian hiện tại bằng đối tượng new Date () và truyền vào nó chuỗi tg cần format
  let today = new Date(timeString);

  // lấy ra ngày của chuỗi cần định dạng
  let day = today.getDate();
  //lấy ra thangs của chuỗi
  let month = today.getMonth() + 1;
  //lấy ra năm của chuỗi
  let year = today.getFullYear();

  return `${day}/ ${month}/${year}`;
};
console.log(formatDate(time));


// Chuyển đổi thời gian hiện tại theo quy chuẩn ISO và cắt chuỗi theo định dạng năm/ tháng / ngày
let formatToLocal = new Date().toISOString().split("T")[0];
console.log("formatlocal", formatToLocal);
