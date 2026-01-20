function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for(let i = 0; i<numbers.length; i++) {
        let currentNumber = numbers[i];
        
        while(stack.length > 0 && numbers[stack[stack.length-1]] < currentNumber) {
            let index = stack.pop();
            answer[index] = currentNumber;
        }
        
        stack.push(i)
    }
    
    return answer;
}