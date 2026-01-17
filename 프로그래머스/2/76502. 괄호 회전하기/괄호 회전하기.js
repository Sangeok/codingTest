function solution(s) {
    s = s.split('');
    
    let result = 0;
    let count = s.length;
    
    while(count > 0) {
        if(isValid(s)) {
            result++;
        }
        
        let first = s.shift();
        s.push(first);
        count--;
    }
    
    return result;
}

function isValid(arr) {
    let stack = [];
    let mapping = {
        "}" : "{",
        "]" : "[",
        ")" : "("
    }
    
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] === "{" || arr[i] === "[" || arr[i] === "(") {
            stack.push(arr[i]);
        } else {
            if(stack.length === 0) {
                return false;
            }
            
            let top = stack.pop();
            if(top !== mapping[arr[i]]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}