var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

function getSubStar(n) {
  if (n === 1) {
    return ["*"];
  }

  const subStar = getSubStar(n / 3);

  let result = [];

  // 맨 위
  for (const star of subStar) {
    result.push(star.repeat(3));
  }

  // 중간
  for (const star of subStar) {
    result.push(star + " ".repeat(n / 3) + star);
  }

  // 끝
  for (const star of subStar) {
    result.push(star.repeat(3));
  }

  return result;
}

console.log(getSubStar(n).join("\n"));
