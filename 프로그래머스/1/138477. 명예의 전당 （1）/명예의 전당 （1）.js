function solution(k, score) {
    let legend = [];
    let result = [];
    
    for(let i = 0; i<score.length; i++) {
        const nowSinger = score[i];
        const beforeLegend = legend[0] || 0;
        
        if(i < k) {
            legend.push(nowSinger);
            
            const minNum = Math.min(...legend);
            result.push(minNum);
        }
        else {
            legend.push(nowSinger);
            
            legend.sort((a,b) => a - b);
            
            const newArr = [...legend].splice(legend.length-k,legend.length);
            const minNum = Math.min(...newArr);
            result.push(minNum);
        }
        
    }
    
    return result;
}