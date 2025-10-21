function solution(n) {
    const newStrNum = n.toString().split("").sort((a,b) => b-a);
    
    return Number(newStrNum.join(''));
}