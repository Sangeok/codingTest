function solution(keymap, targets) {
    const minPress = new Map();
    
    for(let str of keymap) {
        for(let j = 0; j<str.length; j++) {
            const pressNum = j+1;
            const currentChar = str[j];
            
            const getMinPress = minPress.get(currentChar) || Infinity;
            
            if(pressNum < getMinPress) {
                minPress.set(currentChar, pressNum);
            }
        }
    }
    
    let result = [];
    for(let target of targets) {
        let sum = 0;
        let noHaveChar = false;
        
        for(let j = 0; j<target.length; j++) {
            const currentChar = target[j];
            
            const getMinPress = minPress.get(currentChar);
            
            if(getMinPress === undefined) {
                result.push(-1);
                noHaveChar = true;
                break;
            }
            
            sum = sum + getMinPress;
        }
        
        if(!noHaveChar) {
            result.push(sum);
            noHaveChar = false;
        }
    }
    
    return result;
}