var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let result = [];

for (let i = 0; i < N; i++) {
  let M = input.shift();
  let arr = input.splice(0, M);
  let sum = 1;

  let cloth = {};

  for (let i = 0; i < arr.length; i++) {
    const [value, key] = arr[i].trim().split(" ");
    cloth[key] = cloth[key] + 1 || 1;
  }

  for (const type in cloth) {
    sum = sum * (cloth[type] + 1);
  }

  result.push(sum - 1);
}

console.log(result.join(" "));