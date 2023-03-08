let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let len = 2;

function chunckedArray(arr, len) {
  let chunckedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunckedArr.push(arr.slice(i, i + len));
    // i += arr.length;
    i += len;
  }
  return chunckedArr;
}

let r = chunckedArray(arr, len);
console.log(r);
