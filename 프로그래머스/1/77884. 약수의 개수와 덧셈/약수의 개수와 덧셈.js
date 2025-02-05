function solution(left, right) {
    let sum = 0;
    for(let i = left; i<=right; i++) {
        let getFactorArr = getFactors(i);
        
        if(getFactorArr.length % 2 === 0) {
            sum = sum + i;
        }
        else {
            sum = sum - i;
        }
    }
    
    return sum;
}

// 약수 구하기
function getFactors(n) {
    let result = [];
    
    for(let i = 1; i<=Math.sqrt(n); i++) {
        if(n%i === 0) {
            result.push(i);
            
            let share = n / i;
            if(n % share === 0 && i !== share) {
                result.push(share);
            }
        }
    }
    
    return result.sort((a,b)=>a-b);
    
}