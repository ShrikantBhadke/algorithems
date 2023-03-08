let nums = [-5, -3, -2, -1, 0, 2, 4, 5, 8, 7];

function twoSumZero(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === 0) {
        arr.push([num[i], num[j]]);
      }
    }
  }
  return arr;
}

console.log(twoSumZero(nums));

let arr = [1, 5, -7, 48, 2, 46, 1, 7, 9];
console.log(arr);
arr = arr.sort((a, b) => a - b);
console.log(arr);

function binarySearch(num) {
  let startIndex = 0;
  let lastindex = num.length - 1;
  let add;

  while (startIndex < lastindex) {
    add = num[startIndex] + num[lastindex];
    if (add === 0) {
      return [num[startIndex], num[lastindex]];
    } else if (add > 0) {
      lastindex--;
    } else if (add < 0) {
      startIndex++;
    }
  }
  return "No match Found";
}

console.log(binarySearch(nums));

console.log(binarySearch(arr));
