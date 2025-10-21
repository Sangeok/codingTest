function solution(n) {
    const factors = getFactors(n);
    
    return factors.reduce((acc,cur) => acc + cur, 0);
}

function getFactors(n) {
    let result = [];
    
    for(let i = 1; i<=Math.sqrt(n); i++) {
        if(n % i === 0) {
            result.push(i);
            
            if(i !== n/i) {
                result.push(n/i);
            }
        }
    }
    
    return result.sort((a,b) => a-b);
}