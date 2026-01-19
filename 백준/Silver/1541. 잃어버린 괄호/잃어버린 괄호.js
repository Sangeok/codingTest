var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let splitStr = input.split(/(-)/);
let sum = 0;

let lastOperator = "";

for (let i = 0; i < splitStr.length; i++) {
  let currentStr = splitStr[i];

  if (currentStr === "-") {
    lastOperator = currentStr;
    continue;
  }

  if (!currentStr.includes("+") && lastOperator === "") {
    sum = sum + Number(currentStr);
  } else {
    let newStr = currentStr.split("+");

    let localSum = 0;
    for (let num of newStr) {
      localSum = localSum + Number(num);
    }

    if (lastOperator !== "") {
      sum = sum - localSum;
    } else {
      sum = sum + localSum;
    }
  }
}

console.log(sum);
