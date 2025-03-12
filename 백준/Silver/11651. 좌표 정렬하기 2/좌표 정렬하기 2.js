const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const points = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}

points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

const result = points.map(point => point.join(' ')).join('\n');
console.log(result);