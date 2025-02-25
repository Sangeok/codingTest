function solution(n) {
    let count = 0;
    
    for(let k = 1; k<=n; k++) {
        let number = n - (k * (k-1) / 2);
        
        if(number / k >= 1 && number % k === 0) { 
            count++;
        }
    }
    
    return count;
}