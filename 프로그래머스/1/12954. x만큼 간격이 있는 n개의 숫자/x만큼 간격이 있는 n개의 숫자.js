
function solution(x, n) {
    let result = [];
    result.push(x);
    
    for(let i = 2; i<=n; i++) {
        let num = result[result.length-1];
        result.push(num + x);
    }
    
    return result;
}