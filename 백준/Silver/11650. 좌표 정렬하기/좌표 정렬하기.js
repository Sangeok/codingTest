var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
var n = Number(input.shift());

const coords = input.map((line) => line.trim().split(" ").map(Number));

coords.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let results = [];
for (let i = 0; i < n; i++) {
  if (coords[i].length < 2) continue;

  results.push(`${coords[i][0]} ${coords[i][1]}`);
}

console.log(results.join("\n"));