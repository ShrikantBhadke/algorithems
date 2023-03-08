// ==========FizzBuzz Algo================

// consition
// 1 if num is divisibal by 5 and 3 then show FizzBuzz
// 2 if num is divisibal by 5 then show Fizz
// 3 if num is divisibal by 3 then show Buzz

function fizzbuzz(num) {
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
      } else if (i % 5 === 0) {
        console.log("Fizz");
      } else if (i % 3 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("please enter valid number");
  }
}

fizzbuzz(30);

// ====================Two Sum Target======================

// let arr = [2, 5, 7, 6, 3, 4, 8, 2, 4, 8, 5, 13];
let arr = [2, 7, 8, 2, -8, -12, -7, 8, 13];
let target = 15;

function twuSumTarget(arr, target) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let startIndex = 0;
  let lastIndex = arr.length - 1;
  let add;

  while (startIndex < lastIndex) {
    add = arr[startIndex] + arr[lastIndex];

    if (add === target) {
      return [arr[startIndex], arr[lastIndex]];
    } else if (add < 0) {
      lastIndex--;
    } else if (add > 0) {
      startIndex++;
    }
  }
}

console.log(twuSumTarget(arr, target));

// =======================Chuncked array================================

arr = [2, 7, 8, 2, -8, -12, -7, 8, 13];
let len = 2;

function chunckedArray(arr, len) {
  let i = 0;
  let chunchedArr = [];
  while (i < arr.length) {
    chunchedArr.push(arr.slice(i, i + len));

    i = i + len;
  }
  return chunchedArr;
}

console.log(chunckedArray(arr, len));
// ========================CountVowels=========================================

let str = "absurnmsalaja";

function getCountOfVowels(str) {
  let count = 0;
  for (let letter of str) {
    if ("aeiou".toLowerCase().includes(letter.toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(getCountOfVowels(str));
