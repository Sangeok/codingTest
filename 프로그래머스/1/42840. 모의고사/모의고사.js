function solution(answers) {
    let patterns1 = [1,2,3,4,5];
    let patterns2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let patterns3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let countArr = [0,0,0];
    for(let i = 0; i<answers.length; i++) {
        if(patterns1[i % patterns1.length] === answers[i]) {
            countArr[0]++;
        }
        if(patterns2[i % patterns2.length] === answers[i]) {
            countArr[1]++;
        }
        if(patterns3[i % patterns3.length] === answers[i]) {
            countArr[2]++;
        }
    }
    
    let maxNum = Math.max(...countArr);
    
    let result = [];
    for(let i = 0; i<countArr.length; i++) {
        if(countArr[i] === maxNum) {
            result.push(i+1);
        }
    }
    
    return result;
}