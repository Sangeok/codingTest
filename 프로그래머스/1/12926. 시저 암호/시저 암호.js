function solution(s, n) {
    let result = [];
    
    for(let i of s) {
        if(isUpperCase(i)) {
            const charToNum = i.charCodeAt(0) - 65;
            const moveCharAtNum = (charToNum + n) % 26 + 65;
            const numToChar = String.fromCharCode(moveCharAtNum);
            result.push(numToChar);
        } else if (isLowerCase(i)) {
            const charToNum = i.charCodeAt(0) - 97;
            const moveCharAtNum = (charToNum + n) % 26 + 97;
            const numToChar = String.fromCharCode(moveCharAtNum);
            result.push(numToChar);
        } else {
            result.push(" ");
        }
    }
    
    return result.join('')
}

function isUpperCase(char) {
    return /[A-Z]/.test(char);
}

function isLowerCase(char) {
    return /[a-z]/.test(char);
}