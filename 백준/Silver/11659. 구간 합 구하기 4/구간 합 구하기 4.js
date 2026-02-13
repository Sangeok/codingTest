var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let nMArr = input.shift().split(" ");

let N = nMArr[0];
let M = nMArr[1];

let numArr = input.shift().split(" ").map(Number);
let sum = new Array(N + 1).fill(0);

for (let i = 0; i < numArr.length; i++) {
  sum[i + 1] = sum[i] + numArr[i];
}

const result = [];

for (let i = 0; i < M; i++) {
  let [start, end] = input[i].split(" ").map(Number);

  result.push(sum[end] - sum[start - 1]);
}

console.log(result.join("\n"));
