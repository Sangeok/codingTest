var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((line) => {
  if (!line) return;

  console.log(getCanto(Number(line)));
});

function getCanto(n) {
  if (n === 0) {
    return "-";
  }

  const prevCanto = getCanto(n - 1);

  const space = " ".repeat(prevCanto.length);

  return prevCanto + space + prevCanto;
}
