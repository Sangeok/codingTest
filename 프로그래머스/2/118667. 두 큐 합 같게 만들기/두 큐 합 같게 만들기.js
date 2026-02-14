function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
    let sum = sum1 + sum2;
    
    let target = sum / 2;
    
    if(sum % 2 !== 0) return -1;
    
    let newArr = [...queue1, ...queue2];
    let left = 0;
    let right = queue1.length;
    
    let limit = queue1.length * 4;
    let count = 0;
    
    while(count <= limit) {
        if(sum1 === target) return count;
        
        if(sum1 > target) {
            sum1 = sum1 - newArr[left];
            left++;
        } else if(sum1 < target) {
            sum1 = sum1 + newArr[right];
            right++;
        }
        
        count++;
        
        if(right > newArr.length && sum1 < target) break;
    }
    
    return -1;
    
}