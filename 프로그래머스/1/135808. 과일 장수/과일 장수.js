function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => b-a);
    
    for(let i = m-1; i<score.length; i = i + m) {
        result = result + m * score[i];
    }
    
    return result;
}