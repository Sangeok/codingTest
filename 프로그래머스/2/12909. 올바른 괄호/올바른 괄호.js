function solution(s){
    let stack = [];
    
    for(let i of s) {
        stack.push(i);
        
        while(stack[stack.length-1] === ")" && stack[stack.length-2] === "(") {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length === 0 ? true : false
}