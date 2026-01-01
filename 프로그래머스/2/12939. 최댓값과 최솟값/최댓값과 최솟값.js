function solution(s) {
    let sStr = s.split(" ");
    
    let max = Math.max(...sStr);
    let min = Math.min(...sStr);
    
    return min + " " + max;
    
}