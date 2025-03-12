const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const points = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}

// 정렬
points.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

// 출력 형식에 맞게 결과 출력
let result = '';
for (const [x, y] of points) {
  result += `${x} ${y}\n`;
}

console.log(result.trim());