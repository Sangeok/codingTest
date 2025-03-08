function solution(n, words) {
    let usedword = new Set();
    
    usedword.add(words[0]);
    
    for(let i = 1; i<words.length; i++) {
        let preWord = words[i-1];
        let nowWord = words[i];
        
        let preWordLastChar = preWord[preWord.length-1];
        let nowWordFirstChar = nowWord[0];
        
        if(usedword.has(nowWord) || preWordLastChar !== nowWordFirstChar) {
            const nowPersonNum = (i%n)+1;
            const nowCount = Math.floor(i/n)+1;
            
            return [nowPersonNum, nowCount];
        }
        
        usedword.add(words[i]);
    }
    
    return [0,0]
    
    
}