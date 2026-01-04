var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input.shift());

let setWords = [...new Set(input)];

setWords.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a.localeCompare(b);
});

console.log(setWords.join("\n"));
