function solution(n) {
    if(isSquare(n)) {
        let x = Math.sqrt(n);
        return Math.pow(x+1,2);
    } else {
        return -1;
    }
}

function isSquare(n) {
    let sqrtN = Math.sqrt(n);
    return Number.isInteger(sqrtN);
}