var input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function getKanto(n) {
  if (n === 0) return "-";

  let beforeKanto = getKanto(n - 1);

  return beforeKanto + " ".repeat(Math.pow(3, n - 1)) + beforeKanto;
}

input.forEach((n) => {
  n = Number(n);
  if (n !== 0 && !n) return;

  console.log(getKanto(n));
});