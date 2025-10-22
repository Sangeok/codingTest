function solution(t, p) {
    let count = 0;
    
    for(let i = 0; i<=t.length-p.length; i++) {
        const tSlice = t.slice(i, i+p.length);
        console.log(tSlice)
        if(tSlice <= p) count++;
    }
    return count;
}