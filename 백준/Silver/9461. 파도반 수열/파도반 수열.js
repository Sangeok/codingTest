var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();
let dp = [0, 1, 1, 1];

input.forEach((item) => {
  for (let i = 4; i <= Number(item); i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  console.log(dp[Number(item)]);
});
