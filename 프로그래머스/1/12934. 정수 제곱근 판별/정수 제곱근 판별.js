function solution(n) {
    let sqrtN = Math.sqrt(n);
    let Decimal = isDecimal(sqrtN);
    
    return Decimal === true ? -1 : Math.pow(sqrtN+1,2);
}

function isDecimal(n) {
    return !Number.isInteger(n);
}