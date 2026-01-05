var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let factorial = [1, 1, 2];

for (let i = 3; i <= N; i++) {
  factorial[i] = i * factorial[i - 1];
}

console.log(factorial[N]);
