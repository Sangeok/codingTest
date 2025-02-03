function solution(arr, divisor) {
    let result = [];
    
    for(let i of arr) {
        if(i % divisor === 0) {
            result.push(i);        
        }
    }
    
    return result.length > 0 ? result.sort((a,b) => a-b)  : [-1];
}