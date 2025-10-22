function solution(s, n) {
    let result = [];
    
    for(let i of s) {
        if(i === " ") {
            result.push(" ");
            continue;   
        }
        
        if(isUpperCase(i)) {
            const num = (i.charCodeAt(0) - 65 + n) % 26;
            const numToStr = String.fromCharCode(num+65);
            result.push(numToStr);
        } else if(isLowerCase(i)) {
            const num = (i.charCodeAt(0) - 97 + n) % 26; 
            const numToStr = String.fromCharCode(num+97);
            result.push(numToStr);
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