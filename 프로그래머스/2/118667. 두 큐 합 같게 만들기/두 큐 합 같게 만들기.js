function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
    let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
    let sum = sum1 + sum2;
    
    let target = (sum / 2);
    
    // 짝수가 아니라면 불가능.
    if(sum % 2 !== 0) {
        return -1;
    }
    
    let newArr = [...queue1, ...queue2];
    
    let leftIndex = 0;
    let rightIndex = queue1.length;
    
    let result = 0;
    
    while(leftIndex < rightIndex) {
        if(sum1 === target) {
            return result;
        }
        
        if(sum1 < target) {
            sum1 = sum1 + newArr[rightIndex];
            rightIndex++;
        } else if(sum1 > target) {
            sum1 = sum1 - newArr[leftIndex];
            leftIndex++;
        }
        
        result++;
        
        if(rightIndex >= newArr.length && sum1 < target) break;
    }
    
    return -1;
    
}