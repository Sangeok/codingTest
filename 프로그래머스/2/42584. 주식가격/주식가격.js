function solution(prices) {
    let stack = [];
    let result = new Array(prices.length).fill(0);
    
    for(let i = 0; i<prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
            let index = stack.pop();
            result[index] = i - index;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        let index = stack.pop();
        let calTime = prices.length - 1 - index;
        result[index] = calTime;
    }
    
    return result;
}