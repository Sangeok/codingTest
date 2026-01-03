function solution(s) {
    let count = 0;
    let removeZero = 0;
    
    while(s !== "1") {
        let countZero = s.split("0").length-1;
        removeZero = removeZero + countZero;
        
        s = s.replaceAll("0","").length.toString(2);
        count++;
    }
    
    return [count, removeZero]
}