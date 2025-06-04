function solution(n) {
    let reverseN = n.toString().split('').reverse();
    
    let result = [];
    for(let i of reverseN) {
        result.push(parseInt(i));
    }
    
    return result;
}