function solution(number, k) {
    let stack = [];
    let removeNum = k;
    
    let numArr = number.split("")
    for(let i = 0; i<numArr.length; i++) {
        while(stack.length > 0 && removeNum > 0 && stack[stack.length-1] < numArr[i]) {
            stack.pop();
            removeNum--;
        }
        
        stack.push(numArr[i]);
    }
    
    if(removeNum > 0) {
        stack.splice(-removeNum);
    }
    
    return stack.join('')
    
}