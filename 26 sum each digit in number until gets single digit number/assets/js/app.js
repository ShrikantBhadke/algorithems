let cl = console.log;

let num = 4523;

function getOneDigit(num) {
  let numStr = num.toString();

  let sum = numStr.split("").reduce((acc, curr) => {
    acc += parseInt(curr);
    return acc;
  }, 0);

  return sum >= 10 ? getOneDigit(sum) : sum;
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

var n = 5678;
sum = n % 9 || 9;

console.log(sum);

function P(n = 0) {
  if (n === 1) {
    return Promise.resolve(1);
  }
  return Promise.reject(0);
}

P(1)
  .then((x) => {
    console.log(x);
    return P(0);
  })
  .then(() => {
    console.log("hello");
  })
  .catch((e) => {
    console.log(e);
  })
  .then(() => {
    console.log("world!");
  });

console.log(true && 10 && true && 45);
