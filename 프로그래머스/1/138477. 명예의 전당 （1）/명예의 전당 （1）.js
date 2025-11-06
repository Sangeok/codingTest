function solution(k, score) {
    let legend = [];
    let result = [];
    
    for(let num of score) {
        legend.push(num);
        
        legend.sort((a,b) => b-a);
        
        if(legend.length > k) {
            legend.pop();
            result.push(legend[legend.length-1]);
        } else {
            result.push(legend[legend.length-1]);
        }
    }
    
    return result;
}