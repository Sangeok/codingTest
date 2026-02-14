var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

let numArr = input[0].split(" ").map(Number);
numArr.sort((a, b) => a - b);

let ansLeft = 0;
let ansRight = 0;

let leftIndex = 0;
let rightIndex = numArr.length - 1;

let absAns = Number.MAX_VALUE;

while (leftIndex < rightIndex) {
  let sum = numArr[leftIndex] + numArr[rightIndex];
  let absSum = Math.abs(sum);

  if (absAns > absSum) {
    absAns = absSum;
    ansLeft = numArr[leftIndex];
    ansRight = numArr[rightIndex];
  }

  if (sum < 0) {
    leftIndex++;
  } else if (sum > 0) {
    rightIndex--;
  } else {
    break;
  }
}

console.log(ansLeft + " " + ansRight);
