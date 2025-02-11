function solution(s){
    let sArr = s.split('');
    let pNum = 0;
    let yNum = 0;
    
    for(let i = 0; i<sArr.length; i++) {
        if(sArr[i].toLowerCase() === "p") {
            pNum++;
        }
        else if(sArr[i].toLowerCase() === "y") {
            yNum++;   
        }
    }
    
    return pNum === yNum ? true : false;
}