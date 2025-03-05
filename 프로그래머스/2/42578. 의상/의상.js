function solution(clothes) {
    let result = 1;
    let obj = {};
    
    for(const [v,k] of clothes) {
        obj[k] = (obj[k] || 0) + 1;
    }
    
    for(let value of Object.values(obj)) {
        result = result * (value+1);
    }
    
    return result - 1;
    
}


