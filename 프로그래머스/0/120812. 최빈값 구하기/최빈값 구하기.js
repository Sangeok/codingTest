function solution(array) {
    let count = {};
    
    for(let i of array) {
        count[i] = (count[i] || 0) + 1;
    }
    
    const maxNum = Math.max(...Object.values(count));
    
    const maxKey = Object.keys(count).filter((key) => count[key] === maxNum);
    
    return maxKey.length > 1 ? -1 : parseInt(maxKey[0])
    
}