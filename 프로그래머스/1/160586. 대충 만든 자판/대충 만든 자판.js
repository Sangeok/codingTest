function solution(keymap, targets) {
    let minPressObj = new Map();
    
    for(let str of keymap) {
        for(let i = 0; i<str.length; i++) {
            let currentChar = str[i];
            let press = i+1;
            
            let getMinPress = minPressObj.get(currentChar) || Infinity;
            if(press < getMinPress) {
                minPressObj.set(currentChar, press);
            }
        }
    }
    
    let result = [];
    for(let target of targets) {
        let sum = 0;
        let cantFindMinPress = false;
        
        for(let i = 0; i<target.length; i++) {
            const currentChar = target[i];
            const getMinPress = minPressObj.get(currentChar);
            
            if(getMinPress === undefined) {
                result.push(-1);
                cantFindMinPress = true;
                break;
            }
            
            sum = sum + getMinPress;
        }
        
        if(!cantFindMinPress) {
            result.push(sum);
        }
    }
    
    return result;
}