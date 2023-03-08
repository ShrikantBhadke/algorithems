// function printPrimeNum(min, max) {
//   if (min > max) {
//     for (let i = min; i <= max; i++) {
//       if (max % i === 0) {
//         return i;
//       }
//     }
//   } else {
//     alert(`Please Enter positive number.`);
//   }
// }

// let r = printPrimeNum(1, 50);

// console.log(r);

// function getPrimes(max) {
//   var sieve = [],
//     i,
//     j,
//     primes = [];
//   for (i = 2; i <= max; ++i) {
//     if (!sieve[i]) {
//       // i has not been marked -- it is prime
//       primes.push(i);
//       for (j = i << 1; j <= max; j += i) {
//         sieve[j] = true;
//       }
//     }
//   }
//   return primes;
// }

// let r = getPrimes(50);

// console.log(r);

function getPrime(m, n) {
  let factor;
  for (let i = m; i < n; i++) {
    factor = 0;
    for (let j = 1; j <= n; j++) {
      if (i % j == 0) {
        factor++;
      }
    }
    if (factor == 2) console.log(i);
  }
}
getPrime(50, 100);
// console.log(r);
