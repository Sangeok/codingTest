function solution(numbers) {
    let allNumbers = Array.from({length : 10}, (_, i) => i);
    
    return allNumbers
    .filter((item) => !numbers.includes(item))
    .reduce((acc,cur) => acc + cur, 0);
}