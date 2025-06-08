function solution(n) {
    let nString = n.toString().split('').sort((a,b) => b - a);
    
    return parseInt(nString.join(''))
}