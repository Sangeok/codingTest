var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();
let newArr = input.map((item) => item.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    let leftUp = 0;
    let rightUp = 0;

    if (j > 0) {
      leftUp = newArr[i - 1][j - 1];
    }

    if (j < i) {
      rightUp = newArr[i - 1][j];
    }

    newArr[i][j] = newArr[i][j] + Math.max(leftUp, rightUp);
  }
}

console.log(Math.max(...newArr[N - 1]));
