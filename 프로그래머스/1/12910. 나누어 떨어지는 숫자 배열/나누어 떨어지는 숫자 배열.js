function solution(arr, divisor) {
    let result = [];
    
    for(let i of arr) {
        if(i % divisor === 0) {
            result.push(i);
        }
    }
    
    result.sort((a,b) => a-b);
    
    return result.length > 0 ? result : [-1];
}