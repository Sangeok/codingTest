function solution(n) {
    let quotient = n;
    let result = [];
    let count = 2;
    
    while(quotient !== 1) {
        if(quotient % count === 0) {
            quotient = quotient/count;
            if(!result.includes(count)) result.push(count);
        } else {
            count++;
        }
    }
    
    return result;
    
    
}