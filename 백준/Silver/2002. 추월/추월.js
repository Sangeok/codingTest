var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let inArr = input.splice(0, N);
let outArr = input;
let count = 0;

let inObj = {};
for (let i = 0; i < inArr.length; i++) {
  inObj[inArr[i]] = i;
}

for (let i = 0; i < outArr.length; i++) {
  let originValue = inObj[outArr[i]];

  for (let j = i + 1; j < outArr.length; j++) {
    let currentValue = inObj[outArr[j]];

    if (originValue > currentValue) {
      count++;
      break;
    }
  }
}

console.log(count);