let cl = console.log;

// let str = "I Love Angular";

// const reverseStr = (s) => {
//   return str.split("").reverse().join("");
// };

// let r = reverseStr(str);
// cl(r);
//===============================================================

// let str = "I love javascript";

// const reverseStr = (s) => {
//   let result = "";
//   for (let letter of s) {
//     result = letter + result;
//   }
//   return result;
// };

// let r = reverseStr(str);
// cl(r);

// ===============================================================

let str = "I love javascript";

const reverseStr = (s) => {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};

let r = reverseStr(str);
cl(r);
