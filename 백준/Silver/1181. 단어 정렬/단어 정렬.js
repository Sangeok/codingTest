const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const words = [];

for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}

function solution(words) {
  let removeDupWords = [...new Set(words)];

  removeDupWords.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  return removeDupWords;
}

const result = solution(words);
console.log(result.join('\n'));