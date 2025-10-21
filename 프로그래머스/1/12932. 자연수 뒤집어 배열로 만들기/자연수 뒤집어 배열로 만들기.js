function solution(n) {
    const reverseArr = n.toString().split('').reverse();
    
    const pasetIntArr = reverseArr.map((n) => parseInt(n));
    
    return pasetIntArr;
}