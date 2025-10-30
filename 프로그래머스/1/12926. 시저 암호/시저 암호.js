function solution(s, n) {
    let result = [];
    
    for(let i of s) {
        if(isUpperCase(i)) {
            const num = i.charCodeAt(0) - 65;
            const movedNum = (num + n) % 26;
            result.push(String.fromCharCode(movedNum + 65))
        } else if(isLowerCase(i)) {
            const num = i.charCodeAt(0) - 97;
            const movedNum = (num + n) % 26;
            result.push(String.fromCharCode(movedNum + 97))
        } else {
            result.push(" ");
        }
    }
    
    return result.join('');
}

function isUpperCase(char) {
    return /[A-Z]/.test(char);
}

function isLowerCase(char) {
    return /[a-z]/.test(char);
}