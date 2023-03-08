let cl = console.log;
// let num = 7;

// function primeNumber(num) {
//   if (num <= 0) {
//     return "The given number should be +ve no.";
//   }
//   if (num > 0 && num <= 2) {
//     return "The given number is Prime Number.";
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `The given Number ${num} is not Prime Number.`;
//     }
//   }
//   return `The given Number ${num} is a Prime Number.`;
// }

// console.log(primeNumber(num));

// function primeNumber(num) {
//   if (num <= 0) {
//     return "The given number should be +ve no.";
//   }
//   if (num > 0 && num <= 2) {
//     return "The given number is Prime Number";
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `The given number ${num} is not Prime Number`;
//     }
//   }
//   return `The given number ${num} is Prime Number`;
// }

// cl(primeNumber(num));

// function primeNumber(num) {
//   if (num <= 0) {
//     return `Please enter positive Number`;
//   }
//   if (num > 0 && num <= 2) {
//     return `The Given number ${num} is Prime Number.`;
//   }
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `The given number ${num} is Not prime number.`;
//     }
//   }
//   return `The Given Number ${num} is Prime Number.`;
// }

// let r = primeNumber(4);
// cl(r);

function primeNumber(num) {
  if (num <= 0) {
    return "Please enter positive Number";
  }
  if (num > 0 && num <= 2) {
    return "The given number is Prime Number";
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return `The given number ${num} is Not prime number.`;
    }
  }
  return ` The Given number ${num} is Prime Number.`;
}

let r = primeNumber(9);

cl(r);
