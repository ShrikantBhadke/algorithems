let cl = console.log;

// let arr = [8, 7, 11, 15, 2];
// let resultval = 9;

// var twoSum = function (num, target) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum(arr, resultval));

// let arr = [8, 7, 11, 2, 15];
// let resultval = 9;

// let twoSum = (num, target) => {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         cl([i, j]);
//       }
//     }
//   }
// };

// twoSum(arr, resultval);

// let arr = [8, 7, 11, 2, 15];
// let resultval = 9;

// const towsum = (num, target) => {
//   const map = new Map();
//   cl(map);
//   let augend;
//   for (i = 0; i < num.length; i++) {
//     augend = target - num[i];
//     // cl(augend);
//     if (map.has(augend)) {
//       return [map.get(augend), i];
//     }
//     map.set(num[i], i);
//   }
// };

// let r = towsum(arr, resultval);

// cl(r);

// let arr = [8, 7, 11, 2, 15];
// let resultval = 9;

// const twoSum = (nums, target) => {
//   let storage = {};
//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) {
//       cl(storage[num]);
//       return [storage[num], index];
//     }
//     cl(storage);
//     storage[target - num] = index;
//   }
// };

// let r = twoSum(arr, resultval);
// cl(r);

let arr = [8, 7, 11, 15, 2, 45, 84, 32, 2, 9];
let resultVal = 9;

const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    cl(storage[num]);
    if (storage[num] !== undefined) {
      return [storage[num], index];
    }
    storage[target - num] = index;
  }
};

let r = twoSum(arr, resultVal);
cl(r);
