
function solution(x, n) {
    let arr = [];
    let nowNum = x;
    
    for(let i = 0; i<n; i++) {
        arr.push(nowNum);
        nowNum += x;
    }
    
    return arr;
}