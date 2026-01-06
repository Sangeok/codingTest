function solution(s) {
    let result = [];
    let sArr = s.split(" ");
    
    for(let str of sArr) {
        let currentStrArr = str.split("");
        for(let i = 0; i<currentStrArr.length; i++) {
            if(i === 0) {
                currentStrArr[i] = currentStrArr[i].toUpperCase();
            } else {
                currentStrArr[i] = currentStrArr[i].toLowerCase();
            }
        }
        result.push(currentStrArr.join(''));
    }
    
    return result.join(" ")
    
}