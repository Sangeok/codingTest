function solution(a, b) {
    let gcd = getGCD(a,b);
    
    let n = b/gcd;
    
    let primeFactors = getPrimeFactor(n);
    
    console.log(primeFactors)
    
    let isOtherN = primeFactors.find((item) => item !== 2 && item !== 5);
    
    if(isOtherN) {
        console.log(isOtherN);
        return 2;
    }
    else {
        console.log(isOtherN);
        return 1;
    }
    
    
}

function getGCD(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function getPrimeFactor(n) {
    let factors = [];
    
    while(n % 2 === 0) {
        n = n/2;
        factors.push(2);
    }
    
    for(let i = 3; i<=Math.sqrt(n); i = i +2) {
        while(n % i === 0) {
            factors.push(i);
            n = n/i;
        }
        
    }
    if(n>2) factors.push(n);
    
    return [...new Set(factors)];
    
}

function getDivisor(n) {
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