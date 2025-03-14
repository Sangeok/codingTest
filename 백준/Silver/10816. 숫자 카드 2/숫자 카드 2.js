const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const strArr = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const checkStrArr = input[3].split(' ').map(Number);

function solution(strArr, checkStrArr) {
  let obj = {};
  let result = [];
  
  for (let str of strArr) {
    obj[str] = (obj[str] || 0) + 1;
  }
  
  for (let checkStr of checkStrArr) {
    let count = obj[checkStr] || 0;
    result.push(count);
  }
  
  return result;
}

const answer = solution(strArr, checkStrArr);
console.log(answer.join(' '));