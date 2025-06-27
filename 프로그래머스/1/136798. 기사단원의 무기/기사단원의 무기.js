function solution(number, limit, power) {
    let obj = {};
    let result = 0;
    
    for(let i = 1; i<=number; i++) {
        let attackNum = getDivisorNum(i);
        if(attackNum > limit) {
            obj[i] = power;
        } else {
            obj[i] = attackNum;
        }
    }
    
    for(let num of Object.values(obj)) {
        result = result + num;
    }
    
    return result;
}

function getDivisorNum(n) {
    let result = [];
    for(let i = 1; i<=Math.sqrt(n); i++) {
        if(n % i === 0) {
            result.push(i);
            if(i !== n / i) {
                result.push(n/i);
            }
        }
    }
    
    return result.length;
}