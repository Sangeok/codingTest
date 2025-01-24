function solution(score) {
  let averageArr = [];
  for (let i = 0; i < score.length; i++) {
    let average = (score[i][0] + score[i][1]) / 2;
    averageArr.push(average);
  }

  let averageSortArr = [...averageArr].sort((a, b) => b - a);

  const newArr = averageArr.map((item) => averageSortArr.indexOf(item) + 1);

  return newArr;
}

