function solution(numer1, denom1, numer2, denom2) {
    let sumNum;
    let gcd;
    
    if(denom1 === denom2) {
        // 분모가 같다면
        sumNum = numer1 + numer2;
        gcd = getGCD(sumNum, denom1);
        
        return [sumNum/gcd, denom1/gcd];
    }
    else {
        // 분모가 다르다면
        let newNumer1 = numer1 * (getLCM(denom1, denom2)/denom1);
        let newNumer2 = numer2 * (getLCM(denom1, denom2)/denom2);
        
        sumNum = newNumer1 + newNumer2;
        gcd = getGCD(sumNum, getLCM(denom1, denom2))
        
        return [sumNum/gcd, getLCM(denom1, denom2)/gcd];
        
    }
}

// 최대공약수 구하기
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

// 최소 공배수 구하기
function getLCM(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    return (a*b) / getGCD(a,b);
}

