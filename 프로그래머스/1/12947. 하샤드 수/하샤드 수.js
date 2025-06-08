function solution(x) {
    return isHarshad(x);
}

function isHarshad(x) {
    let xString = x.toString().split('');
    let sum = 0;
    
    for(let i of xString) {
        sum = sum + parseInt(i);
    }
    
    return x % sum === 0;
}