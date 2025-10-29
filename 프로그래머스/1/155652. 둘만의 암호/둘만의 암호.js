function solution(s, skip, index) {
    let alphabet = new Array(26).fill(true);
    let result = "";
    
    for(let i of skip) {
        const index = i.charCodeAt(0) - 97;
        alphabet[index] = false;
    }
    
    for(let i of s) {
        let count = 0;
        let currentCharIndex = i.charCodeAt(0) - 97;
        
        while(count < index) {
            currentCharIndex = (currentCharIndex + 1) % 26;
            
            if(alphabet[currentCharIndex]) {
                count++;
            }
        }
        result = result + String.fromCharCode(currentCharIndex+97);
    }
    
    return result;
}