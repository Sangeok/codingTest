function solution(topping) {
    let leftTopping = new Map();
    let result = 0;
    
    for(let item of topping) {
        let getTopping = (leftTopping.get(item)) + 1 || 1;
        leftTopping.set(item, getTopping);
    }
    
    let rightTopping = new Set();
    
    for(let currentTopping of topping) {
        let currentLeftTopping = leftTopping.get(currentTopping) - 1;
        rightTopping.add(currentTopping);
        
        if(currentLeftTopping >= 1) {
            leftTopping.set(currentTopping, currentLeftTopping);
        } else {
            leftTopping.delete(currentTopping);
        }
        
        if(leftTopping.size === rightTopping.size) {
            result++
        }    
    }
    
    return result;
    
}