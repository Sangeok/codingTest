const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function countDistinctSubstrings(str) {
  let setObject = new Set();
  
  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let sliceStr = str.slice(j, j + i);
      setObject.add(sliceStr);
    }
  }
  
  return setObject.size;
}

console.log(countDistinctSubstrings(input));