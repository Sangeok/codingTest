function solution(n) {
    let fib = [0,1,2];
    
    for(let i = 3; i<=n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % 1234567;
    }
    
    return fib[n];
}