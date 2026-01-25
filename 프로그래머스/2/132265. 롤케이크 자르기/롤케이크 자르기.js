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
        let key = topping[i];
        
        let leftCurrentValue = leftMap.get(key) - 1;
        rightSet.add(key);
        
        if(leftCurrentValue === 0) {
            leftMap.delete(key);
        } else {
            leftMap.set(key, leftCurrentValue);
        }
        
        
        if(rightSet.size === leftMap.size) result++;
        
    }
    
    return result;
    
}