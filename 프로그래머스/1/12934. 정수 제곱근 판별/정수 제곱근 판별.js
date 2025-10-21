function solution(n) {
    if(isSquare(n)) {
        const sqrtNum = Math.sqrt(n);
        return Math.pow(sqrtNum + 1, 2);
    } else return -1;
}

function isSquare(n) {
    const sqrt = Math.sqrt(n);
    
    return Number.isInteger(sqrt);
}