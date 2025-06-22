function solution(k, score) {
    let result = [];
    let goodSinger = [];
    
    for(let i = 0; i<score.length; i++) {
        let nowScore = score[i];
        
        goodSinger.push(nowScore);
        goodSinger.sort((a,b) => b-a);
        
        if(goodSinger.length > k) goodSinger.pop();
        
        result.push(goodSinger[goodSinger.length-1]);
    }
    
    return result;
}