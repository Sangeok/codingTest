function solution(topping) {
    let leftTopping = new Map();
    let result = 0;
    
    for(let i = 0; i<topping.length; i++) {
        let key = topping[i];
        let currentValue = leftTopping.get(key) + 1 || 1;
        leftTopping.set(key, currentValue);
    }
        
    let rightTopping = new Set();
    
    for(let i = 0; i<topping.length; i++) {
        let key = topping[i];
        let getLeftTopping = leftTopping.get(key) - 1;
        rightTopping.add(key);
        
        if(getLeftTopping === 0) {
            leftTopping.delete(key);
        } else {
            leftTopping.set(key, getLeftTopping);
        }
        
        if(leftTopping.size === rightTopping.size) result++;
    }
    
    return result;
    
}