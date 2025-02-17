function solution(nums) {
    let count = 0;
    
    for(let i = 0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            for(let k = j+1; k<nums.length; k++) {
                if(isPrime(nums[i]+nums[j]+nums[k])) {
                    count++;        
                }
            }
        }
    }
    
    return count;
    
    
}

function isPrime(n) {
    if(n < 2) return false;
    
    if(n === 2) return true;
    
    if(n % 2 === 0) return false;
    
    for(let i = 3; i<=Math.sqrt(n); i++) {
        if(n%i === 0) {
            return false;
        }
    }
    
    return true;
    
}