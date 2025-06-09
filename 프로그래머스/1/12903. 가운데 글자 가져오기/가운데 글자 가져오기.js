function solution(s) {
    let sArr = s.split('');
    
    if(sArr.length % 2 === 0) {
        return sArr[sArr.length/2-1]+sArr[sArr.length/2];
    } else {
        return sArr[Math.floor(sArr.length/2)]
    }
}