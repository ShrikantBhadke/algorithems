let cl = console.log;
let num = [1, 2, 45, 32, 6, 18, 32, 49, 65, 15, 42, 22, 64, 52];

// let oddNum = num.filter((ele) => ele % 2 === 1);
// cl(oddNum);

// function printResult(num) {
//   return demo(num);
// }

// function demo(num) {
//   return multBy10(num);
// }

// function multBy10(num) {
//   return num * 10;
// }

// cl(printResult(100));

function findOddNum(arr) {
  let result = [];

  function helper(inputArr) {
    if (inputArr.length === 0) {
      return;
    }
    if (inputArr[0] % 2 === 1) {
      result.push(inputArr[0]);
    }
    helper(inputArr.slice(1));
  }
  helper(arr);
  return result;
}

cl(num);
cl(findOddNum(num));
