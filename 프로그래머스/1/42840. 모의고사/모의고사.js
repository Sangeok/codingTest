function solution(answers) {
    let result = [];
    
    const pattern1 = [1,2,3,4,5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score = {
        1 : 0,
        2 : 0,
        3 : 0,
    };
    
    for(let i = 0; i<answers.length; i++) {
        if(pattern1[i % 5] === answers[i]) {
            score[1]++;
        } 
        if(pattern2[i % 8] === answers[i]) {
            score[2]++;
        } 
        if(pattern3[i % 10] === answers[i]) {
            score[3]++;
        }
    }
        
    const maxScore = Math.max(score[1], score[2], score[3]);
        
    if(score[1] === maxScore) {
        result.push(1);
    }
        
    if(score[2] === maxScore) {
        result.push(2);
    }
        
    if(score[3] === maxScore) {
        result.push(3);
    }
        
    return result;
    
}