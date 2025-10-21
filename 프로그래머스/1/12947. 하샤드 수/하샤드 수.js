function solution(x) {
    return isHazard(x);
}

function isHazard(n) {
    const sum = String(n).split('').reduce((acc, cur) => acc + Number(cur), 0);
    
    return n % sum === 0;
}