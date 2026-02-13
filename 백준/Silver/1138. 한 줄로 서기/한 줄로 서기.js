var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let arr = input[0].split(" ");
let result = [];

for (let i = N; i > 0; i--) {
  let leftSideNum = arr[i - 1];

  result.splice(leftSideNum, 0, i);
}

console.log(result.join(" "));
