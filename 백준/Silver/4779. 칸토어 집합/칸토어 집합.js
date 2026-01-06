var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((line) => {
  if (!line) return;

  console.log(getCanto(Number(line)));
});

function getCanto(n) {
  if (n === 0) {
    return "-";
  }

  let prevCanto = getCanto(n - 1);

  return prevCanto + " ".repeat(prevCanto.length) + prevCanto;
}
