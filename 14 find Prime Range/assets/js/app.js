let cl = console.log;

// function findPrimeRange(start, end) {
//   let divisibelconunt = 0;
//   let outputArray = [];
//   if (start === 1) {
//     alert("1 is a composite number,enter proper value");
//   }
//   for (let i = start; i <= end; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         divisibelconunt++;
//       }
//     }
//     if (divisibelconunt === 2) {
//       outputArray.push(i);
//     }
//     divisibelconunt = 0;
//   }
//   return outputArray;
// }
// let r = findPrimeRange(2, 5);
// cl(r);

function findPrimeRange(start, end) {
  let divisibleCount = 0;
  let outputarr = [];

  if (start == 1) {
    alert("1 is composite number, please enter proper value");
  }

  for (let i = start; i <= end; i++) {
    for (let j = 1; j <= end; j++) {
      if (i % j === 0) {
        divisibleCount++;
      }
    }
    if (divisibleCount === 2) {
      outputarr.push(i);
    }
    divisibleCount = 0;
  }
  return outputarr;
}

let r = findPrimeRange(2, 200);

console.log(r);
