function solution(answers) {
    let pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    let correctCountArr = [0,0,0];
    for(let i = 0; i<answers.length; i++) {
        for(let j = 0; j<pattern.length; j++) {
            if(answers[i] === pattern[j][i % pattern[j].length]) {
                correctCountArr[j] = correctCountArr[j] + 1;
            }        
        }
    }
    
    let result = [];
    let maxNum = Math.max(...correctCountArr);
    
    for(let i = 0; i<correctCountArr.length; i++) {
        if(correctCountArr[i] === maxNum) {
            result.push(i+1);
        }
    }
    
    return result;
    
    
}