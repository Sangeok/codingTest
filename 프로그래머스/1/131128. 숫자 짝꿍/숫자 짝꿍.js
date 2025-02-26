function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);
    
    for(let x of X) {
        countX[x]++;
    }
    
    for(let y of Y) {
        countY[y]++;
    }
    
    let result = '';
    for(let i = 9; i>=0; i--) {
        let minCount = Math.min(countX[i], countY[i]);
        result = result + String(i).repeat(minCount);
    }
    
    if(result === '') {
        return "-1";
    }
    
    if(result[0] === '0') {
        return "0";
    }
    
    return result;
}