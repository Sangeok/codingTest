function solution(topping) {
    let leftMap = new Map();
    let result = 0;
    
    topping.forEach((item) => {
        let value = (leftMap.get(item) + 1) || 1;
        leftMap.set(item, value)
    })
    
    let rightSet = new Set();
    
    for(let currentTopping of topping) {
        rightSet.add(currentTopping);
        
        let leftToppingSize = leftMap.get(currentTopping);
        
        if(leftToppingSize === 1) {
            leftMap.delete(currentTopping)
        } else {
            leftMap.set(currentTopping, leftToppingSize-1);
        }
        
        if(leftMap.size === rightSet.size) result++;
    }
    
    return result;
}