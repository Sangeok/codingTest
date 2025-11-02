function solution(X, Y) {
    let answer = [];
    
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    for(let number of X) {
        countX[Number(number)]++;
    }
    
    for(let number of Y) {
        countY[Number(number)]++;
    }
    
    for(let i = 9; i>=0; i--) {
        const minNum = Math.min(countX[i], countY[i]);
        
        answer.push(String(i).repeat(minNum));
    }
    
    const result = answer.join('');
    
    if(result.length === 0) {
        return "-1";
    }
    
    if(result[0] === "0") {
        return "0";
    }
    
    return result;

}