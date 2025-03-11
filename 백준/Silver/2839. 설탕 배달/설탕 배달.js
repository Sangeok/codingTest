const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

function test(n) {
  let fiveBags = Math.floor(n / 5);
  let remainN = n % 5;
  
  while (fiveBags >= 0) {
    if (remainN % 3 === 0) {
      let threeBags = remainN / 3;
      return fiveBags + threeBags;
    }
    
    fiveBags--;
    remainN = remainN + 5;
  }
  
  return -1;
}

console.log(test(n));