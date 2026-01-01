var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
var n = Number(input.shift());

const words = input.map((line) => line.trim());

const wordSet = new Set(words);

const newWords = [...wordSet];

newWords.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a.localeCompare(b);
});

console.log(newWords.join("\n"));
