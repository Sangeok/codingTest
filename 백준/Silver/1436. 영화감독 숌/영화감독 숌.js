const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

function solution(n) {
  let count = 0;
  let init = 666;
  
  while (true) {
    if (init.toString().includes("666")) {
      count = count + 1;
    }
    
    if (n === count) {
      return init;
    }
    
    init = init + 1;
  }
}

console.log(solution(n));