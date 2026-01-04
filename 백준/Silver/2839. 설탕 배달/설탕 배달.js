var N = require("fs").readFileSync("/dev/stdin").toString().trim();
N = Number(N);

let count = 0;

while (true) {
  if (N % 5 === 0) {
    count = count + N / 5;
    break;
  }

  N = N - 3;
  count++;

  if (N < 0) {
    count = -1;
    break;
  }
}

console.log(count);