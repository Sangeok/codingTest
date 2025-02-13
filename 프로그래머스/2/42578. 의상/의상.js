function solution(clothes) {
    let result = 1;
    const obj = {};
    
    clothes.map(([cloth, clothField]) => {
        obj[clothField] = (obj[clothField] + 1 || 1);
    })
    
    for(let value of Object.values(obj)) {
        result = result * (value+1);
    }
    
    return result - 1;
}