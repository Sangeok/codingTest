function solution(n) {
    let nArr = n.toString().split('');
    let nRevserArr = [];
    
    for(let i = nArr.length-1; i>=0; i--) {
        nRevserArr.push(parseInt(nArr[i]));
    }
    
    return nRevserArr;
}