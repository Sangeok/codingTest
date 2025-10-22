function solution(n, m) {
    return [getGCD(n,m), getLCM(n,m)]
}

// 최소공배수
function getLCM(a,b) {
    return Math.abs(a*b) / getGCD(a,b);
}

// 최대공약수
function getGCD(a,b) {
    while(b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}