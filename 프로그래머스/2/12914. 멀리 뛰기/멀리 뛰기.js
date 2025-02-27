function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    fibo1 = 1;
    fibo2 = 2;
    
    for(let i = 3; i<=n; i++) {
        let result = (fibo1 + fibo2)%1234567;
        
        fibo1 = fibo2;
        fibo2 = result;
    }
    
    return fibo2;
}