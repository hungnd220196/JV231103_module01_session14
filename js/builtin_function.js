//setTimeout cho phép delay chương trình trong 1 khoảng tg và chạy 1 lần duy nhất

// setTimeout(function , time_delay);

// setTimeout(() => {
//   console.log("logger");
// }, 3000);

// // setInterval cho phép chương trình bị delay trong một khoảng thời gian nhất định tuy nhiên nó sẽ chạy liên tục

// // setInterval(function, time_delay)

// const logger = () => {
//   console.log(Math.random());
// };

// setInterval(logger, 1000);

// Xay dung dong ho

// const logger1 = () => {
//   let today = new Date();

//   let hours = today.getHours().toString().padStart(2, "0");
//   let minutes = today.getMinutes().toString().padStart(2, "0");
//   let seconds = today.getSeconds().toString().padStart(2, "0");

//   //Gắn dữ liệu vào trong DOM
//   document.getElementById(
//     "clock"
//   ).innerHTML = `${hours}: ${minutes}:${seconds}`;
//   //   return `${hours}: ${minutes}:${seconds}`;
// };
// setInterval(() => {
//   console.log(logger1());
// }, 1000);

// /**
//  * Kiểm tra định dạng email
//  * @param {*} email Chuỗi email cần kiểm tra
//  * @returns true nếu email đúng định dạng, false nếu email sai định dạng
//  */
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

// if (!validateEmail("hung@gmail.com")) {
//   console.log("Sai dinh dang");
// } else {
//   console.log("Dung dinh dang");
// }

// //xây dựng hàm kiểm tra các trường nhâp vào có để trống không, trừ các giá trị null, undefined, "" thì tất cả giá trị khác đều thỏa mãn
//checkISEmpty (field)

// let field = prompt("mời bạn nhập vào");

// /**
//  * Kiểm tra các trường rỗng
//  * @param {*} field trường cần kiểm tra
//  * @returns true nếu trường đó bị rỗng, false nếu có giá trị
//  * Auth: NDHung (01/12/2023)
//  */
// const checkIsEmpty = (field) => {
//   if (field === null || field === undefined || field === "") {
//     return true;
//   } else {
//     return false;
//   }
// };
// if (checkIsEmpty(field)) {
//   console.log("Email k được để trống");
// } else {
//   console.log("Gửi giá trị");
// }

//bt 4.
// let password = prompt("mời bạn nhập mật khẩu");

// const checkPassword = (password) => {
//   if (password.length < 8) {
//     return false;
//   } else {
//     return true;
//   }
// };
// if (checkPassword(password)) {
//   console.log("đăng ký thành công");
// } else {
//   console.log("password k đủ 8 kí tự");
// }

//bt6
// let string = prompt("mời bạn nhập chuỗi");
// let wordUpper = prompt("chữ muốn in hoa");

// const convert = (string, wordUpper) => {
//   let newString = "";
//   for (i = 0; i < string.length; i++) {
//     if (string[i] === wordUpper) {
//       newString += string[i].toUpperCase();
//     } else {
//       newString += string[i];
//     }
//   }
//   return newString;
// };
// console.log(convert(string, wordUpper));

//bt7

// let temperature = +prompt("mời bạn nhập số cần đổi");
// let fromUnit = prompt("mời bạn nhập đơn vị cần đổi");
// let toUnit = prompt("mời bạn nhập đơn vị cần đổi");

// const convert = (temperature, fromUnit, toUnit) => {
//   if (fromUnit === "f" && toUnit === "c") {
//     return ((temperature - 32) * 5) / 9;
//   } else if (fromUnit === "c" && toUnit === "f") {
//     return (temperature * 9) / 5 + 32;
//   } else {
//     console.log("mời bạn nhập lại");
//   }
// };
// console.log(convert(temperature, fromUnit, toUnit) + "độ", toUnit);

//bt 8.
// let string = prompt("mời bạn nhập chuỗi");

// let word = prompt("mời bạn nhập chữ cần đếm");

// const count = (string, word) => {
//   let newString = [];
//   for (i = 0; i < string.length; i++) {
//     if (string[i] === word) {
//       newString.push(string[i]);
//     }
//   }
//   return newString.length;
// };
// console.log(count(string, word));

//bt9

// let array = [1, 2, 34, 5, 6];

// const maxNumber = (array) => {
//   let max = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };

// console.log(maxNumber(array));

//bt10.

// let number = prompt("mời bạn nhập vào số nguyên");

// const reverseNumber = (number) => {
//   let newNumber = number.split("").reverse().join("");
//   return newNumber;
// };
// console.log(reverseNumber(number));

//bt 11.

// let array = [6,9,4,5,1,6];

// let number = +prompt("mời bạn nhập số ");
// let index = -1
// const findIndex = (array, number) => {
//     for (i=0; i<array.length;i++){
//         if(array[i]===number){
//             index = i;
//             break;
//         }
//     }
//     return index;
// }
// console.log(findIndex(array, number));

//bt 12
let array = [1, 2, 3, 4, 5];
let valueToRemove = 2;

const filter = (valueToRemove, array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== valueToRemove) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(filter(valueToRemove, array));
