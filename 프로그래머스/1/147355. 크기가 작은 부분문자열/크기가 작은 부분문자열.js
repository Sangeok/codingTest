function solution(t, p) {
    let result = [];
    for(let i = 0; i<t.length-p.length+1; i++) {
        let tNum = parseInt(t.slice(i,i+p.length));
        if(parseInt(p) >= tNum) {
            result.push(tNum);
        }
    }
    
    return result.length;
}