var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();
let arr = input[0].split(" ").map(Number);

let dp = [arr[0]];
let max = arr[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);

  if (dp[i] > max) {
    max = dp[i];
  }
}

console.log(max);
