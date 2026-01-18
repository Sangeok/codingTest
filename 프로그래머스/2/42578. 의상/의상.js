function solution(clothes) {
    let obj = {};
    let result = 1;
    
    for(let i = 0; i<clothes.length; i++) {
        let key = clothes[i][1];
        
        obj[key] = (obj[key] + 1) || 1
    }
    
    for(let [key, value] of Object.entries(obj)) {
        result = result * (value + 1);
    }
    
    return result - 1;
    
}