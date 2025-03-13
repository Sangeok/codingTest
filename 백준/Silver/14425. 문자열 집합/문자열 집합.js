const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

// 집합 S 구성
const strArr = [];
for (let i = 1; i <= N; i++) {
  strArr.push(input[i]);
}

// 검사할 문자열 배열
const checkStrArr = [];
for (let i = N + 1; i <= N + M; i++) {
  checkStrArr.push(input[i]);
}

// solution 함수 적용
function solution(strArr, checkStrArr) {
  let obj = {};
  let result = 0;
  
  for (let str of strArr) {
    obj[str] = 1;
  }
  
  for (let checkStr of checkStrArr) {
    if (obj[checkStr] === 1) {
      result++;
    }
  }
  
  return result;
}

console.log(solution(strArr, checkStrArr));