var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let nArr = input[1].split(" ").map(Number);

let M = Number(input[2]);
let mArr = input[3].split(" ").map(Number);

let result = [];
let numObj = {};

for (let num of nArr) {
  numObj[num] = numObj[num] + 1 || 1;
}

for (let num of mArr) {
  result.push(numObj[num] || 0);
}

console.log(result.join(" "));