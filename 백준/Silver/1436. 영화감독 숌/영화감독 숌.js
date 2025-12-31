var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);

console.log(soltuion(a));

function soltuion(num) {
  let count = 0;
  let currentNum = 666;

  while (true) {
    if (String(currentNum).includes("666")) {
      count++;
    }

    if (num === count) {
      return currentNum;
    }

    currentNum++;
  }
}
