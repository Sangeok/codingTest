function solution(a, b) {
    let maxN = a >= b ? a : b;
    let minN = a < b ? a : b;
    
    let result = 0;
    for(let i = minN; i<=maxN; i++) {
        result = result + i;
    }
    
    return result;
    
}