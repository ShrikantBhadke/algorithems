let cl = console.log;
let arr = [12, 454, 23, 665, 878, 89, 565, 15, 12, 45];

// function findmaxNumb(arrfind) {
//   return Math.max(...arrfind);
// }
// cl(findmaxNumb(arr));
// ===========================================================
// let maxNum = arr[0];
// arr.forEach((ele) => {
//   if (ele > maxNum) {
//     return (maxNum = ele);
//   }
// });
// cl(maxNum);
// ==================================================================
// function findmaxNumb(arrfind) {
//   let maxNum = arrfind[0];
//   arrfind.forEach((ele) => {
//     if (ele > maxNum) {
//       maxNum = ele;
//     }
//   });
//   return maxNum;
// }

// cl(findmaxNumb(arr));

// ==================================================================

// function findmaxNumb(arrfind) {
//   return arrfind.reduce((prv, curr) => {
//     return prv > curr ? prv : curr;
//   });
// }
// cl(findmaxNumb(arr));

arr = [
  [12, 454, 23],
  [665, 878, 89],
  [565, 15, 12, 45],
];

// function maxNumArray(arrfind) {
//   let NewArr = [];
//   arrfind.forEach((ele) => {
//     NewArr.push(Math.max(...ele));
//   });
//   return NewArr;
// }

// cl(maxNumArray(arr));
// ================================================================

// function maxNumArray(arrfind) {
//   let maped = arrfind.map((ele) => {
//     return Math.max(...ele);
//   });
//   return maped;
// }
// cl(maxNumArray(arr));

// =====================================================================

// function maxNumArray(arrfind) {
//   return arrfind.map((arr) => {
//     return arr.reduce((pre, curr) => {
//       return curr > pre ? curr : pre;
//     });
//   });
// }
// cl(maxNumArray(arr));
// =====================================================================
// function maxNumArray(arrfind) {
//   let NewArr = [];
//   arrfind.forEach((ele) => {
//     let maxNum = ele[0];
//     ele.forEach((val) => {
//       if (val > maxNum) {
//         maxNum = val;
//       }
//     });
//     return NewArr.push(maxNum);
//   });
//   return NewArr;
// }

// cl(maxNumArray(arr));

// ============================================================

function maxNumArray(arrfind) {
  let NewArr = [];
  arrfind.map((ele) => {
    let maxNum = ele[0];
    ele.forEach((a) => {
      if (a > maxNum) {
        maxNum = a;
      }
    });
    return NewArr.push(maxNum);
  });
  return NewArr;
}

cl(maxNumArray(arr));
