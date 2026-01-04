function solution(s) {
    let result = [];
    let sArr = s.split(" ");
    
    for(let str of sArr) {
        let nowStr = str.split("");
        
        for(let i = 0; i<nowStr.length; i++) {
            if(i === 0) {
                nowStr[i] = nowStr[i].toUpperCase();
            } else {
                nowStr[i] = nowStr[i].toLowerCase();
            }
        }
        
        result.push(nowStr.join(''));
    }
    
    return result.join(' ')
}