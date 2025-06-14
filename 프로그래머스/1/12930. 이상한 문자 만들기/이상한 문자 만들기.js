function solution(s) {
    s = s.split(' ');
    let str = "";
    for(let t of s) {
        for(let [index, char] of [...t].entries()) {
            if(index % 2 === 0) {
                str = str + char.toUpperCase();
            }
            else str = str + char.toLowerCase();
        }
        str = str + " ";
    }
    
    return str.slice(0,-1);
}