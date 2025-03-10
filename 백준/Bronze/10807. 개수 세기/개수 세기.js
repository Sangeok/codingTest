const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 n 값을 가져옵니다
const n = parseInt(input[0]);

// 두 번째 줄에서 n개의 정수를 배열로 변환합니다
const array = input[1].split(' ').map(Number);

// 세 번째 줄에서 찾고자 하는 숫자를 가져옵니다
const number = parseInt(input[2]);

// 결과 변수 초기화
let result = 0;

// 배열을 순회하며 찾고자 하는 숫자와 일치하는 요소 개수를 셉니다
for (let i = 0; i < n; i++) {
    if (array[i] === number) {
        result++;
    }
}

// 결과 출력
console.log(result);