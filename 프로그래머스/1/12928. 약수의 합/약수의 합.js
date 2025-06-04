function solution(n) {
    let factors = getFactors(n);
    let sum = 0;
    for(let n of factors) {
        sum = sum + n;
    }

    return sum;
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