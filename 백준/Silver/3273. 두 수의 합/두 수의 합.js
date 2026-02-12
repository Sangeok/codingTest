var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let num = input[0].split(" ").map(Number);
let X = input[1];
let count = 0;

num.sort((a, b) => a - b);
let left = 0;
let right = num.length - 1;

while (left < right) {
  let leftNum = num[left];
  let rightNum = num[right];

  if (leftNum + rightNum > X) {
    right--;
  } else if (leftNum + rightNum < X) {
    left++;
  } else {
    count++;
    left++;
    right--;
  }
}

console.log(count);
