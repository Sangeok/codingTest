function solution(s) {
    let sSize = s.length;
    
    const isEven = sSize % 2 === 0;
    
    if(isEven) {
        let num1 = Math.floor(sSize / 2)-1;
        let num2 = num1 + 1;
        
        return s[num1] + s[num2];
    } else {
        let num = Math.floor(sSize / 2);
        return s[num];
    }
}