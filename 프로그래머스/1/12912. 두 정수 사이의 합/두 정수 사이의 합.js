function solution(a, b) {
    const maxNum = a >= b ? a : b;
    const minNum = a <= b ? a : b;
    
    let sum = 0;
    for(let i = minNum; i<=maxNum; i++) {
        sum = sum + i;
    }
    
    return sum;
    
}