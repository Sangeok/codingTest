function solution(s) {
    let stack = [];
    
    for(let char of s) {
        stack.push(char);
        
        while(stack.length >= 2 && (stack[stack.length-1] === stack[stack.length-2])) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length > 0 ? 0 : 1
}
