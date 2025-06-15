function solution(numbers) {
    let result = new Set();
    for(let i = 0; i<numbers.length; i++) {
        for(let k = i+1; k<numbers.length; k++) {
            let sum = numbers[i] + numbers[k];
            result.add(sum);
        }
    }
    
    return [...result].sort((a,b) => a-b);
}