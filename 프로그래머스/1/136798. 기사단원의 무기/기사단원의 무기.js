function solution(number, limit, power) {
    let member = [0];
    
    for(let i = 1; i<=number; i++) {
        let factorsLength = getFactors(i);
        if(factorsLength > limit) {
            member.push(power);
            continue;
        }
        member.push(factorsLength);
    }
    
    const sum = member.reduce((cur, acc) => cur + acc, 0);
    
    return sum;
}

function getFactors(n) {
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