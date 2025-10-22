function solution(numbers) {
    const set = new Set();
    
    for(let i = 0; i<numbers.length; i++) {
        for(let k = i+1; k<numbers.length; k++) {
            set.add(numbers[i] + numbers[k]);
        }
    }
    
    return Array.from(set).sort((a,b) => a - b);
}