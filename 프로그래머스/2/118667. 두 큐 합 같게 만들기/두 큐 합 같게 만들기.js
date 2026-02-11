function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
    let target = (sum1 + sum2) / 2;
    
    // 전체 합의 수가 짝수가 아닐 시 애초에 불가능
    if((sum1 + sum2) % 2 !== 0) return -1;
    
    const combined = [...queue1, ...queue2];
    let left = 0;
    let right = queue1.length;
    
    const limit = queue1.length * 4;
    let count = 0;
    
    while(count <= limit) {
        if(sum1 === target) {
            return count;
        }
        
        if(sum1 > target) {
            sum1 = sum1 - combined[left];
            left++;
        } else {
            sum1 = sum1 + combined[right];
            right++;
        }
        
        count++;
        
        if(right > combined.length && sum1 < target) break;
    }
    
    return -1;
}