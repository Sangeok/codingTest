var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();
input = input.map(Number);

let dp = [];

dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = input[2] + Math.max(input[0], input[1]);

for (let i = 3; i < N; i++) {
  dp[i] = input[i] + Math.max(input[i - 1] + dp[i - 3], dp[i - 2]);
}

return console.log(dp[N - 1]);