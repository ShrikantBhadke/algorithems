let cl = console.log;
// let z = 212;
// const isPalindrome = function (x) {
//   if (x < 0 || (x % 10 == 0 && x != 0)) {  
//     return false;
//   }
//   let t = 0;
//   while (x > t) {
//     t = t * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return t == x || x == Math.floor(t / 10);
// };

// let r = isPalindrome(z);
// cl(r);

// let z = 212;

// const isPalindrome = function (x) {
//   var reverse = 0;
//   var copy = x;

//   while (copy > 0) {
//     const digit = copy % 10;
//     reverse = reverse * 10 + digit;
//     copy = ~~(copy / 10); // Math.floor(copy/10);
//   }
//   return reverse == x;
// };

// let r = isPalindrome(z);
// cl(r);

// let inputval = 12521;

// const isPalindrome = function (x) {
//   x = x.toString();
//   for (var i = 0; i < x.length; i++) {
//     if (x.charAt(i) !== x.charAt(x.length - 1 - i)) {
//       return false;
//     }
//   }
//   return true;
// };

// let r = isPalindrome(inputval);
// cl(r);

// function isPalindrome(str) {
//   return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
// }

// let r = isPalindrome("madam");
// cl(r);




let inputval = 12521;

const isPalindrome = function (x) {
  x = x.toString();
  for (var i = 0; i < x.length; i++) {
    if (x.charAt(i) === x.charAt(x.length - 1 - i)) {
      return true;
    }
  }
  return false;
};

let r = isPalindrome(inputval);
cl(r);