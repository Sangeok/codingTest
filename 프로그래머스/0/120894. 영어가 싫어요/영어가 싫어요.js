// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때,
// numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  return parseInt(numbers
    .replace(/one|two|three|four|five|six|seven|eight|nine|zero/g, (match) => {
      switch (match) {
        case "one":
          return "1";
        case "two":
          return "2";
        case "three":
          return "3";
        case "four":
          return "4";
        case "five":
          return "5";
        case "six":
          return "6";
        case "seven":
          return "7";
        case "eight":
          return "8";
        case "nine":
          return "9";
        case "zero":
          return "0";
      }
    }));
}