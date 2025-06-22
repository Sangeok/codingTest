function solution(k, score) {
    let result = [];
    let goodSinger = [];
    
    for(let i = 0; i<score.length; i++) {
        if(i <= k-1) {
            goodSinger.push(score[i]);
            let minScore = Math.min(...goodSinger);
            result.push(minScore);
        } else {
            let minScore = Math.min(...goodSinger);
            let currentScore = score[i];
            
            if(currentScore > minScore) {
                // 오늘 가수가 명예의 전당에 있던 가수보다 점수가 높은 경우
                let minIndex = goodSinger.indexOf(minScore);
                goodSinger[minIndex] = currentScore;
                
                minScore = Math.min(...goodSinger);
                result.push(minScore);
            }
            else {
                // 기존 명예의 전당에 있던 가수의 점수가 더 높은 경우
                result.push(minScore);
            }
        }
    }
    
    return result;
}