function solution(k, score) {
    let legend = [];
    let result = [];
    
    for(let i of score) {
        legend.push(i);
        
        legend.sort((a,b) => b-a);

        
        if(legend.length <= k) {
            result.push(legend[legend.length-1]);
        } else {
            legend.pop();
            result.push(legend[legend.length-1]);
        }
    }
    
    return result;
}