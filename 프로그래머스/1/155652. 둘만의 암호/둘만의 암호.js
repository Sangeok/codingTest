function solution(s, skip, index) {
    let alphabet = new Array(26).fill(true);
    let result = "";
    
    for(let i of skip) {
        const num = i.charCodeAt(0) - 97;
        alphabet[num] = false;
    }
    
    for(let i of s) {
        let currentCharNum = i.charCodeAt(0) - 97;
        let count = 0;
        
        while(count < index) {
            currentCharNum = (currentCharNum + 1) % 26;
            
            if(alphabet[currentCharNum]) {
                count++;
            }
        }
        
        result = result + String.fromCharCode((currentCharNum % 26) + 97);
    }
    
    return result;
}