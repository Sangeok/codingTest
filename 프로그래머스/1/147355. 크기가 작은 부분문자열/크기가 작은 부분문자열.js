function solution(t, p) {
    let pLength = p.split('').length;
    let pNum = parseInt(p);
    let count = 0;
    
    for(let i = 0; i<t.split('').length-pLength+1; i++) {
        let newT = parseInt(t.slice(i,i+pLength));
        if(newT <= pNum) {
            count++;
        }
    }
    
    return count;
    
}