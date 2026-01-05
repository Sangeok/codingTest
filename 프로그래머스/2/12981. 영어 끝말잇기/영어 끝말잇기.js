function solution(n, words) {
    let currentPerson = 1;
    let beforeWord = "";
    
    let wordObj = {};
    let personObj = {};
    
    for(let i = 1; i<=n; i++) {
        personObj[i] = 1;
    }
    
    for(let word of words) {
        wordObj[word] = (wordObj[word] + 1) || 1;
        
        // 이미 말한 단어일 경우
        if(wordObj[word] > 1) {
            return [currentPerson, personObj[currentPerson]];
        }
        
        // 끝말잇기 규칙 위반인 경우
        if(beforeWord !== "" && (beforeWord.charAt(beforeWord.length-1) !== word.charAt(0))) {
          return [currentPerson, personObj[currentPerson]];
        }

        personObj[currentPerson] = personObj[currentPerson] + 1;
        currentPerson = ((currentPerson + 1) % (n+1)) || 1
        beforeWord = word
    }
    
    return [0,0];
}