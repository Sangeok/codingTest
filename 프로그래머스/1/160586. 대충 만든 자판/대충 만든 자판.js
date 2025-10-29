function solution(keymap, targets) {
    const minPress = new Map();
    
    for(let str of keymap) {
        for(let i = 0; i<str.length; i++) {
            const pressNum = i+1;
            const getMinPressNum = minPress.get(str[i]) || Infinity;
            
            if(pressNum < getMinPressNum) {
                minPress.set(str[i], pressNum);
            }
        }
    }
    
    let result = [];
    for(let str of targets) {
        let sum = 0;
        let findTarget = true;
        
        for(let i = 0; i<str.length; i++) {
            const currentChar = str[i];
            const getMinPressNum = minPress.get(currentChar);
            
            if(getMinPressNum === undefined) {
                result.push(-1);
                findTarget = false;
                break;
            }
            
            sum = sum + getMinPressNum;
        }
        if(findTarget) result.push(sum)
    }
    
    return result;
}