function solution(X, Y) {
    let result = "";
    
    let countX = new Array(10).fill(0);
    let countY = new Array(10).fill(0);
    
    for(let i of X) {
        countX[i]++;
    }
    
    for(let i of Y) {
        countY[i]++;
    }
    
    for(let i = 9; i>=0; i--) {
        let minNum = Math.min(countX[i],countY[i]);
        
        result = result + String(i).repeat(minNum);
    }
    
    if(result.length === 0) {
        return "-1";
    }
    
    if(result[0] === "0") {
        return "0";
    }
    
    return result;

}