function solution(s, skip, index) {
    let alphabet = new Array(26).fill(true);
    let result = "";
    
    for(let skip_char of skip) {
        let skip_charNUm = skip_char.charCodeAt(0) - 97;
        alphabet[skip_charNUm] = false;
    }
    
    for(let s_char of s) {
        let charToNum = s_char.charCodeAt(0) - 97;
        let count = 0;
        
        while(count < index) {
            charToNum = (charToNum + 1) % 26;
            
            if(alphabet[charToNum]) {
                count++;
            }
        }
        result = result + String.fromCharCode((charToNum + 97));
    }
    
    return result;
}