function solution(X, Y) {
    let result = [];
    
    let countX = new Array(10).fill(0);
    let countY = new Array(10).fill(0);
    
    for(let number of X) {
        countX[number]++;
    }
    
    for(let number of Y) {
        countY[number]++;
    }
    
    for(let i = 9; i>=0; i--) {
        const minNum = Math.min(countX[i], countY[i]);
        if(minNum !== 0) {
            result.push(String(i).repeat(minNum));
        }
    }
    
    if(result.length === 0) {
        return "-1";
    }
    
    if(result.join('')[0] === "0") {
        return "0"
    }
    
    return result.join('')

}