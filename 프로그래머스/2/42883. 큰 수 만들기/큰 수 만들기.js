function solution(number, k) {
    let stack = [];
    let removeNum = k;
    
    for(let i = 0; i<number.length; i++) {
        let currentNum = number[i];
        
        while(stack.length > 0 && removeNum > 0 && stack[stack.length-1] < currentNum) {
            stack.pop();
            removeNum--;
        }
        
        stack.push(currentNum)
    }
    
    if(removeNum > 0) {
        stack.splice(-removeNum);
    }
    
    return stack.join('')
    
}