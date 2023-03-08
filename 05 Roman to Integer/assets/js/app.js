let cl = console.log;

// function romanToInt(string) {
//   const values = new Map([
//     ["I", 1],
//     ["V", 5],
//     ["X", 10],
//     ["L", 50],
//     ["C", 100],
//     ["D", 500],
//     ["M", 1000],
//   ]);

//   let result = 0,
//     current,
//     previous = 0;
//   for (const char of string.split("").reverse()) {
//     current = values.get(char);
//     if (current >= previous) {
//       result += current;
//     } else {
//       result -= current;
//     }
//     previous = current;
//   }
//   return result;
// }

// console.log(romanToInt("IX"));

var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];
    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  return result;
};

console.log(romanToInt("IV"));
