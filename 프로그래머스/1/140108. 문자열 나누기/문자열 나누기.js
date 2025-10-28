function solution(s) {
    let answer = 0;
    
    while(s.length > 0) {
        answer++;
        
        const x = s[0];
        let countX = 0;
        let countNotX = 0;
        
        let foundSplit = false;
        
        for(let i = 0; i<s.length; i++) {
            if(s[i] === x) {
                countX++;
            } else {
                countNotX++;
            }
            
            if(countX === countNotX) {
                s = s.slice(i+1);
                foundSplit = true;
                break;
            }
        }
        
        if (!foundSplit) {
            // 남은 문자열 전체가 마지막 조각입니다.
            // while 루프를 종료시킵니다.
            break; 
        }
    }
    
    return answer;
}