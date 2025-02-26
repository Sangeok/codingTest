function solution(s, n) {
    let lowerAlphabetObj = {};
    let upperAlphabetObj = {};
    
    for(let i = 0; i<26; i++) {
        lowerAlphabetObj[String.fromCharCode(i + 97)] = i;
        upperAlphabetObj[String.fromCharCode(i + 65)] = i;
    }
    
    let sArr = s.split('')
    
    for(let i = 0; i<sArr.length; i++) {
        if(isUpperCase(sArr[i])) {
            // 대문자라면
            let changeNum = (upperAlphabetObj[sArr[i]] + n) % 26;
            let changeChar = String.fromCharCode(changeNum + 65);
            sArr[i] = changeChar;
        }
        else if(isLowerCase(sArr[i])) {
            let changeNum = (lowerAlphabetObj[sArr[i]] + n) % 26;
            let changeChar = String.fromCharCode(changeNum + 97);
            sArr[i] = changeChar;
        }
        else continue;
    }
    
    return sArr.join('');
    
}

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase();
}
    
function isLowerCase(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
}