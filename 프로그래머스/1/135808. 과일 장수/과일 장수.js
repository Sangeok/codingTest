function solution(k, m, score) {
    score.sort((a,b) => b-a);
    
    let sum = 0;
    for(let i = 0; i<score.length; i = i+m) {
        let newArr = score.slice(i,i+m);
        if(newArr.length !== m) continue;
    
        let p = Math.min(...newArr);
        sum = sum + p * newArr.length;
    }
    
    return sum;
}