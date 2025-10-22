function solution(d, budget) {
    let count = 0;
    
    d.sort((a,b) => a-b);
    
    for(let i of d) {
        if(budget >= i) {
            budget = budget - i;
            count++;
        }
    }
    
    return count;
}