function solution(numbers) {
    let allNumbers = Array.from({length:10}, (v,i) => i);
    
    let sum = 0;
    
    for(let i of allNumbers) {
        if(!(numbers.includes(i))) {
            sum = sum + i;
        }
    }
    
    return sum;
}