function solution(n, m) {
    return [getGCD(n,m), getLCM(n,m)];
}

// 최소공배수
function getLCM(n, m) {
    return Math.abs(n * m) / getGCD(n,m);
}

// 최대공약수
function getGCD(n, m) {
    while(m != 0) {
        let temp = m;
        m = n % m;
        n = temp;
    }
    
    return n;
}