let cl = console.log;
// const fizzBuzz = function (n) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       answer.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       answer.push("Fizz");
//     } else if (i % 5 === 0) {
//       answer.push("Buzz");
//     } else {
//       answer.push(i);
//     }
//   }
//   return answer;
// };

// let r = fizzBuzz(50);
// cl(r);

const fizzBuzz = function (n) {
  if (n > 30) {
    return;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    cl("FizzBuzz");
  } else if (n % 3 === 0) {
    cl("Fizz");
  } else if (n % 5 === 0) {
    cl("Buzz");
  } else {
    cl(n);
  }
  fizzBuzz(n + 1);
};

fizzBuzz(1);
