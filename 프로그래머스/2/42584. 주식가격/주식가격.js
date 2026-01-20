function solution(prices) {
    let stack = [];
    let answer = new Array(prices.length).fill(0);
    
    
    for(let i = 0; i<prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
            let pop = stack.pop();
            answer[pop] = i - pop;
        }
        
        stack.push(i);
    }
    
    while(stack.length > 0) {
        let shift = stack.shift();
        let calTime = prices.length - 1 - shift;
        answer[shift] = calTime;
    }
    
    return answer;
    
}