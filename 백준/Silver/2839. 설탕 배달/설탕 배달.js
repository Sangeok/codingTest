// 입력 받기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 문자열을 숫자로 변환
const N = parseInt(input);

function sugarDelivery(N) {
  // 5kg 봉지를 최대한 사용
  let fiveKgBags = Math.floor(N / 5);
  
  // 남은 무게를 3kg 봉지로 채울 수 있는지 확인
  while (fiveKgBags >= 0) {
    const remainingWeight = N - (fiveKgBags * 5);
    
    // 남은 무게가 3kg 봉지로 정확히 나누어 떨어지는지 확인
    if (remainingWeight % 3 === 0) {
      const threeKgBags = remainingWeight / 3;
      return fiveKgBags + threeKgBags;
    }
    
    // 5kg 봉지를 하나 줄이고 다시 시도
    fiveKgBags--;
  }
  
  // 정확히 N kg을 만들 수 없는 경우
  return -1;
}

// 결과 출력
console.log(sugarDelivery(N));
