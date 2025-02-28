function solution(clothes) {
    let result = 1;
    let clothObj = {};
    
    for(const [k, v] of clothes) {
        clothObj[v] = (clothObj[v] || 0) + 1;
    }
    
    for(let i of Object.values(clothObj)) {
        result = result * (i+1);
    }
    
    return result-1;
    
}


