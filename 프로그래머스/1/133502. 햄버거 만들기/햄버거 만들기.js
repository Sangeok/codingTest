function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    for(let i = 0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        if(stack.length >= 4 && stack[stack.length-1] === 1) {
            let check1 = stack[stack.length-2] === 3;
            let check2 = stack[stack.length-3] === 2;
            let check3 = stack[stack.length-4] === 1;
            
            if(check1 && check2 && check3) {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                count++;
            }
        }
    }
    
    return count;
}