function solution(n) {
    let isPrime = new Array(n+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for(let i = 2; i*i <=n; i++) {
        if(isPrime[i]) {
            for(let j = i * i; j<=n; j=j+i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(x => x === true).length;
}