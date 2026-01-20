var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let dp = [0, 1, 2, 3, 5];

for (let i = 5; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[N]);
