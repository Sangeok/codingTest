function solution(X, Y) {
    let result = "";
    
    let countX = new Array(10).fill(0);
    let countY = new Array(10).fill(0);
    
    for(let num of X) {
        countX[num]++;
    }
    
    for(let num of Y) {
        countY[num]++;
    }
    
    for(let i = 9; i>=0; i--) {
        let minNum = Math.min(countX[i], countY[i]);
        result = result + String(i).repeat(minNum);
    }
    
    if(result[0] === "0") {
        return "0";
    }
    
    if(result.length === 0) {
        return "-1";
    }
    
    return result;
}