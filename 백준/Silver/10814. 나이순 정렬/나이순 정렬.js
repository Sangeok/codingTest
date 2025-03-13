const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const person = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(' ');
  person.push([parseInt(age), name, i - 1]); // 나이, 이름, 가입순서(인덱스)
}

person.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2]; // 나이가 같으면 가입 순서로 정렬
  }
  return a[0] - b[0]; // 나이 순으로 정렬
});

let result = '';
for (let i = 0; i < N; i++) {
  result += `${person[i][0]} ${person[i][1]}\n`; // 나이와 이름만 출력
}

console.log(result.trim());