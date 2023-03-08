function fib(n) {
  let val = [0, 1];

  for (let i = 2; i < n; i++) {
    val[i] = val[i - 1] + val[i - 2];
  }
  return val;
}

cl(fib(9));


// 0 1 1 2 