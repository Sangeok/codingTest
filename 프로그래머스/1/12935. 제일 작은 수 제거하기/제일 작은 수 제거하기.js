function solution(arr) {
    if(arr.length === 1) return [-1];
    
    const findMinNum = Math.min(...arr);
    
    return arr.filter((n) => n !== findMinNum)
}