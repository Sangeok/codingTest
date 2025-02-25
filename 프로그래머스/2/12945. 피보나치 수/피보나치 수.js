function solution(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    let fibo1 = 0;
    let fibo2 = 1;
    
    for(let i = 2; i<=n; i++) {
        let result = (fibo1 + fibo2) % 1234567;
        
        fibo1 = fibo2;
        fibo2 = result;
    }
    
    return fibo2;
}
