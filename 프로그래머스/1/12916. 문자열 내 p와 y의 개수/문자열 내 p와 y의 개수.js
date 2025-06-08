function solution(s){
    let lowerS = s.toLowerCase();
    
    let countP = 0;
    let countY = 0;
    
    for(let i of lowerS) {
        if(i === 'p') countP++;
        else if(i === 'y') countY++;
    }
    
    return countP === countY ? true : false
}