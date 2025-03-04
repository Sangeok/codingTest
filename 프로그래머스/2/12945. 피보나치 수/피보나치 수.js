function solution(n) {
    if(n === 2) return 1;
    
    let fibo1 = 1;
    let fibo2 = 1;
    
    for(let i = 3; i<=n; i++) {
        let result = (fibo1 + fibo2) % 1234567;
        fibo1 = fibo2;
        fibo2 = result;
    }
    
    return fibo2;
}
