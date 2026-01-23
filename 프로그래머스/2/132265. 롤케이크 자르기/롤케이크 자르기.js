function solution(topping) {
    let leftMap = new Map();
    let result = 0;
    
    for(let i = 0; i<topping.length; i++) {
        let key = topping[i];
        let currentValue = leftMap.get(key) + 1 || 1;
        leftMap.set(key, currentValue);
    }
    
    let rightSet = new Set();
    
    for(let i = 0; i<topping.length; i++) {
        let currentKey = topping[i];
        
        let leftValue = leftMap.get(currentKey) - 1;
        
        if(leftValue === 0) {
            leftMap.delete(currentKey);
        } else {
            leftMap.set(currentKey, leftValue);
        }
        
        rightSet.add(currentKey);
        
        if(leftMap.size === rightSet.size) {
            result++;
        }
    }
    
    return result;
}