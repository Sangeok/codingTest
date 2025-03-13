const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const userCard = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const randomCard = input[3].split(' ').map(Number);

function solution(userCard, randomCard) {
  let obj = {};
  let result = [];
  
  for (let card of userCard) {
    obj[card] = 1;
  }
  
  for (let i = 0; i < randomCard.length; i++) {
    if (obj[randomCard[i]] === 1) {
      result.push(1);
    } else result.push(0);
  }
  
  return result.join(' ');
}

console.log(solution(userCard, randomCard));