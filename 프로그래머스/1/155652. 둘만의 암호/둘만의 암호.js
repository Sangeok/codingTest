function solution(s, skip, index) {
    let alphabet = new Array(26).fill(true);
    let result = [];
    
    for(let i of skip) {
        const index = i.charCodeAt(0)-97;
        alphabet[index] = false;
    }
    
    for(let i of s) {
        let currentWordToNum = i.charCodeAt(0)-97;
        let count = 0;
        while(count < index) {
            currentWordToNum = (currentWordToNum + 1) % 26;
            
            if(alphabet[currentWordToNum]) {
                count++
            }
        }
        result.push(String.fromCharCode(currentWordToNum+97));
    }

    return result.join('')
}