function solution(s)
{
    let stack = [];
    
    for(let i = 0; i<s.length; i++) {
        let currentChar = s[i];
        
        if(stack[stack.length -1] === currentChar) {
            stack.pop();
        }
        else {
            stack.push(currentChar);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}