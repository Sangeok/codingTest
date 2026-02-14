var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
let M = Number(input.shift());

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = new Array(N + 1).fill(false);
let count = 0;
visited[1] = true;

function DFS(num) {
  for (let item of graph[num]) {
    if (!visited[item]) {
      visited[item] = true;
      count++;
      DFS(item);
    }
  }
}

DFS(1);

console.log(count);
