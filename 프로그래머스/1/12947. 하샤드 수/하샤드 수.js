function solution(x) {
    let xStrArr = String(x).split('');
    let sum = 0;
    xStrArr.forEach((item) => sum = sum + Number(item));
    
    return x % sum === 0 ? true : false;
}