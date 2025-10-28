function solution(keymap, targets) {
    const minPressMap = new Map();
    
    for(let keyString of keymap) {
        for(let i = 0; i<keyString.length; i++) {
            const char = keyString[i];
            const press = i + 1;
            
            const currentMin = minPressMap.get(char) || Infinity;
            
            if(press < currentMin){
                minPressMap.set(char, press);
            }
        }
    }
    
    let result = [];
    for(let target of targets) {
        let sum = 0;
        for(let i = 0; i<target.length; i++) {
            const currentChar = target[i];
            const getMinNum = minPressMap.get(currentChar);
            
            if(getMinNum === undefined) {
                sum = -1;
                break;
            }
            
            sum = sum + getMinNum;
        }
        result.push(sum)
    }
    
    return result;
}