function solution(s) {
    let sArr = s.split(' ');
    
    let max = Math.max(...sArr).toString();
    let min = Math.min(...sArr).toString();
    
    return min + " " + max;
}