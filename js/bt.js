//1. Viết 1 hàm js để tính tổng 2 số
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(6, 9));

// //2. Viết 1 hàm js để nhập vào 1 mảng số nguyên và trả về tổng của các số đó
// let array = [1, 2, 3, 4];
// const sumArray = (array) => {
//   let total = 0;
//   for (i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// };
// console.log(sumArray(array));

//3.Viết 1 hàm js để kiểm tra 1 số có phải số nguyến tố k

// let number = +prompt("mời bạn nhấp số");

// const checkPrime = (number) => {
//   let isPrime = true;
//   if (number <= 1) {
//     console.log(`${number} không là số nguyên tố`);
//     return;
//   }
//   for (i = 2; i < Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} là số nguyên tố`);
//   } else {
//     console.log(`${number} không là số nguyên tố`);
//   }
// };

// checkPrime(number);

//4. Viết 1 hàm JS để đảo ngược 1 chuỗi
// let string = "asdfghjkl";
// const reverse = (string) => {
//   let newreverseString = string.split("").reverse().join("");
//   return newreverseString;
// };

// console.log(reverse(string));

// //bt5 Viết 1 hàm JS nhập vào 1 mảng và các số trả về chỉ chứa số chẵn
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const checkeven = (array) => {
//     let even = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       even.push(array[i]);
//     }
//   }
//   return even;
// };
// console.log(checkeven(array));

//bt6. viết một hàm JS nhận vào 1 chuỗi và trả về số lượng từ trong chuỗi
// let string = "hello world";

// const quantity = (string) => {
//   let quantityword = string.split("").length;

//   return quantityword;
// };
// console.log(quantity(string));

//bt7.viết một hàm JS nhận vào 1 mảng các chuỗi và trả về mảng mới chứa các từ viết hoa.

// let string = "NguyenDucHung";

// const newArray = string.split("");
// const getUppercase = (string) => {
//   const Upperword = [];
//   for (i = 0; i < newArray.length; i++) {
//     word = newArray[i];
//     if (word === word.toUpperCase()) {
//       Upperword.push(word);
//     }
//   }
//   return Upperword;
// };

// console.log(getUppercase(string));

//bt8. viết một hàm JS nhận vào 1 mảng sắp xếp theo thứ tăng dần
// let array = [1, 43, 16, 24, 8];

// const arrange = (array) => {
//   newarray = array.sort((a, b) => a - b);
//   return array;
// };
// console.log(arrange(array));

//bt9. Viết 1 hàm JS nhập vào sô nguyên dương và trả về mảng các số nguyên tố nhỏ hơn nó.

// let number = +prompt("mời bạn nhập số");

// const checkPrime = (number) => {
//   if (number <= 1) {
//     return;
//   }
//   arrayPrime = [];
//   for (let i = 2; i < number; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       arrayPrime.push(i);
//     }
//   }
//   return arrayPrime;
// };
// console.log(checkPrime(number));

let count = 0;

function incrementAndLog() {
  count++;
  console.log("Count: " + count);
}

setInterval(incrementAndLog, 1000); // Mỗi giây, giá trị của biến count tăng lên và được in ra console.

