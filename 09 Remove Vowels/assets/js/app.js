let cl = console.log;

// let str = "I Love JavaScript";

// const removeVowels = function (s) {
//   let result = "";
//   for (i = 0; i < s.length; i++) {
//     if ("aeiou".includes(s[i].toLowerCase())) {
//       result += "";
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// };

// let r = removeVowels(str);
// cl(r);

let str = "I Love JavaScript";

const removeVowels = function (s) {
  s = s.replace(/[aeiou]/gi, "");
  return s;
};

let r = removeVowels(str);
cl(r);
