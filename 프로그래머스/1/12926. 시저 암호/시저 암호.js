function solution(s, n) {
    let lowerChar = [];
    let upperChar = [];
    let str = "";
    
    for(let i = 0; i<26; i++) {
        lowerChar.push(String.fromCharCode(i + 97));
        upperChar.push(String.fromCharCode(i + 65));
    }
    
    
    for(let i of s) {
        let moveChar;
        
        if(i === " "){
            str = str + " ";
        }
        else if(i === i.toUpperCase()) {
            let charNum = ((i.charCodeAt(0)+n) % 65) % 26;
            str = str + upperChar[charNum];
        }
        else if(i === i.toLowerCase()) {
            let charNum = ((i.charCodeAt(0)+n) % 97) % 26;
            str = str + lowerChar[charNum];
        }
    }
    
    return str;
    
}