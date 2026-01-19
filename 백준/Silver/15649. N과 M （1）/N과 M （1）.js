var input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let N = Number(input[0]);
let M = Number(input[1]);

let visited = new Array(N + 1).fill(false);

let output = [];
let result = "";

DFS(0);

console.log(result);

function DFS(depth) {
  if (depth === M) {
    result = result + output.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);
      DFS(depth + 1);
      visited[i] = false;
      output.pop();
    }
  }
}
