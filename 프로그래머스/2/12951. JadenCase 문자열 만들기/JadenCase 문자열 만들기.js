function solution(s) {
    let result = []
    let sArr = s.split(" ");
    
    for(let str of sArr) {
        let strSplit = str.split("");
        for(let i = 0; i<strSplit.length; i++) {
            if(i === 0) {
                strSplit[0] = strSplit[0].toUpperCase();
            } else {
                strSplit[i] = strSplit[i].toLowerCase();
            }
        }
        result.push(strSplit.join(''));
    }
    
    return result.join(' ');
}