const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function test(n) {
  for (let i = 1; i < n; i++) {
    let sum = i;
    let value = i;
    
    while (value > 0) {
      sum = sum + (value % 10);
      value = Math.floor(value / 10);
    }
    
    if (sum === n) return i;
  }
  
  return 0;
}

const n = parseInt(input);
console.log(test(n));