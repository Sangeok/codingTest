function solution(prices) {
    let stack = [];
    let answer = new Array(prices.length).fill(0);
    
    for(let i = 0; i<prices.length; i++) {
        while(stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const top = stack.pop();
            answer[top] = i-top;
        }   
        stack.push(i);
    }
    
    while(stack.length) {
        const pop = stack.pop();
        answer[pop] = prices.length - 1 - pop;
    }
    
    return answer;
}