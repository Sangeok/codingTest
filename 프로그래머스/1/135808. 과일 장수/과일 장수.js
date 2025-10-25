function solution(k, m, score) {
    let sum = 0;
    score.sort((a,b) => b-a);
    
    for(let i = 0; i<score.length; i = i+m) {
        if(i+m > score.length) break;
        let newArr = score.slice(i, i+m);
        
        const minNum = Math.min(...newArr);
        sum = sum + newArr.length * minNum
    }
    
    return sum;
}