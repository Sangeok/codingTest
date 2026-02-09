function solution(topping) {
    let leftTopping = new Map();
    let result = 0;
    
    for(let item of topping) {
        let key = item;
        let currentValue = leftTopping.get(key) + 1 || 1;
        leftTopping.set(key, currentValue);
    }
    
    let rightTopping = new Set();
    for(let item of topping) {
        let key = item;
        let leftToppingValue = leftTopping.get(key) - 1;
        rightTopping.add(key);
        
        if(leftToppingValue === 0) {
            leftTopping.delete(key);
        } else {
            leftTopping.set(key, leftToppingValue);
        }
        
        if(rightTopping.size === leftTopping.size) result++;
        
    }
    
    return result;
    
}