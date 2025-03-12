const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  let nStr = n.toString();
  let arr = [];
  
  for (let i = 0; i < n.toString().length; i++) {
    let number = Number(nStr[i]);
    arr.push(number);
  }
  
  arr.sort((a, b) => b - a);
  
  return arr.join("");
}

console.log(solution(Number(input)));