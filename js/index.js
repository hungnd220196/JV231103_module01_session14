// tính tổng các số  trong khoảng 10=>20, 20=>30, 30=>40.
// let total = 0;
// for (i = 10; i <= 20; i++) {
//   total += i;
// }
// console.log(total);

// let total2 = 0;
// for (i = 20; i <= 30; i++) {
//   total2 += i;
// }
// console.log(total2);

// let total3 = 0;
// for (i = 30; i <= 40; i++) {
//   total3 += i;
// }
// console.log(total3);

// => code bị lặp lại nhiều
//khó bảo trì
// => function ra đời giải quyết vấn đề

// Cú pháp khai báo hàm
// function ten_ham(tham_so){
//     logic code
// }

// viết hàm tính tổng số a và b

// function sum(a, b){
// console.log(a+b);
// }
// sum(10,20);

// function sum(a, b) {
//   let total = 0;
//   for (i = a; i <= b; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(sum(20,30));
// console.log(sum(10,30));
// console.log(sum(20,40));

//Viết hàm tính tổng các số trong mảng [10,22,15,30,80,65];

const array = [10, 22, 15, 30, 80, 65];

/**
 * hàm tính tổng các số trong mảng
 * @param {*} array mảng các số cần tính toán
 * @returns tổng các số trong mảng
 * Author: NDH(29/11/2023)
 */
function sum(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sum(array));

// Viết hàm tìm gía trị lớn nhất trong mảng
// let newArray = [3,5,4,7,2];
// let max=newArray.sort();

// console.log(max[max.length-1]);

function maxarray(array) {
  if (array.length === 0) {
    return null;
  }

  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(maxarray(array));

//Viết hàm đảo ngược 1 chuỗi
let newArray = array.reverse();
console.log(newArray);

//viết hàm kiểm tra số chẵn số lẻ

function check(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(`${array[i]} là số chẵn`);
    } else {
      console.log(`${array[i]} là số lẻ`);
    }
  }
}
check(array);
