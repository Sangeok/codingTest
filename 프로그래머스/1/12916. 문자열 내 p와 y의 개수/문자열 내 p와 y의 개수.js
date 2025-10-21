function solution(s){
    let lowerCaseS = s.toLowerCase();
    
    let numP = 0;
    let numY = 0;
    
    for(let i of lowerCaseS) {
        if(i === 'p') numP++;
        else if(i === "y") numY++;
    }
    
    return numP === numY;
}