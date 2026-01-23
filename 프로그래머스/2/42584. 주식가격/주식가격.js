function solution(prices) {
    let stack = [];
    let answer = new Array(prices.length).fill(0);
    
    for(let i = 0; i<prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
            let index = stack.pop();
            let calTime = i - index;
            answer[index] = calTime;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        let currentIndex = stack.pop();
        let calTime = prices.length - 1 - currentIndex;
        answer[currentIndex] = calTime;
    }
    
    return answer;
    
}