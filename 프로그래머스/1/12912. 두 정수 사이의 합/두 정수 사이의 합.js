function solution(a, b) {
    let min = a >= b ? b : a;
    let max = a <= b ? b : a;
    let sum = 0;
    
    for(let i = min; i<=max; i++) {
        sum = sum + i;
    }
    
    return sum;
    
}