function solution(numbers) {
    let result = [];
    let sum = 0;
    
    for(let i = 0; i<numbers.length; i++) {
        for(let j = i+1; j<numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            result.push(sum);
        }
    }
    
    return [...new Set(result)].sort((a,b) => a-b);
}