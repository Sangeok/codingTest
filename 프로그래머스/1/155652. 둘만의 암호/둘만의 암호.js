function solution(s, skip, index) {
    let alphabet = new Array(26).fill(true);
    let result = "";
    
    for(let char of skip) {
        let currentCharNum = char.charCodeAt(0) - 97;
        alphabet[currentCharNum] = false;
    }
    
    for(let char of s) {
        let currentCharNum = char.charCodeAt(0) - 97;
        let count = 0;
        
        while(count < index) {
            if(alphabet[(currentCharNum + 1) % 26]) {
                count++;
                currentCharNum = (currentCharNum + 1) % 26;
            } else {
                currentCharNum = (currentCharNum + 1) % 26;
            }
        }
        
        result = result + String.fromCharCode(currentCharNum + 97);
    }
    
    return result;
}