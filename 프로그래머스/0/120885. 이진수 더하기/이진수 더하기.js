function solution(bin1, bin2) {
    let num1 = parseInt(bin1, 2);
    let num2 = parseInt(bin2, 2);
    
    let sum = num1 + num2;
    return sum.toString(2);
}