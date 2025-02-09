function solution(n) {
    let str = "수";
    for(let i = 1; i<n; i++) {
        if(i % 2 === 0) {
            str = str + "수";
        }
        else {
            str = str + "박";
        }
    }
    
    return str;
}