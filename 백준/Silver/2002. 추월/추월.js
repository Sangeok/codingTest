var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let cleanInput = input.map((str) => str.trim());

let inArr = cleanInput.splice(0, N);
let outArr = cleanInput;
let result = 0;

let inObj = {};

for (let i = 0; i < inArr.length; i++) {
  inObj[inArr[i]] = i;
}

for (let i = 0; i < outArr.length; i++) {
  let currentCarEntryIdx = inObj[outArr[i]];

  for (let j = i + 1; j < outArr.length; j++) {
    let behindCarEntryIdx = inObj[outArr[j]];
    if (behindCarEntryIdx < currentCarEntryIdx) {
      result++;
      break;
    }
  }
}

console.log(result);