var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let nmArr = input.shift().split(" ").map(Number);
let N = nmArr[0];
let M = nmArr[1];

let numArr = input.shift().split(" ").map(Number);
let currentSum = 0;
for (let i = 0; i < M; i++) {
  currentSum = currentSum + numArr[i];
}

let maxSum = currentSum;

for (let i = 0; i < N - M; i++) {
  currentSum = currentSum - numArr[i] + numArr[i + M];

  if (maxSum < currentSum) maxSum = currentSum;
}

console.log(maxSum);
