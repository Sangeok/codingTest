var input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let N = Number(input[0]);
let M = Number(input[1]);

let visit = new Array(N + 1).fill(false);
let output = [];
let result = "";

dfs(0, []);
console.log(result);

function dfs(depth) {
  if (depth === M) {
    result = result + output.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visit[i]) {
      visit[i] = true;
      output.push(i);
      dfs(depth + 1);
      visit[i] = false;
      output.pop();
    }
  }
}
