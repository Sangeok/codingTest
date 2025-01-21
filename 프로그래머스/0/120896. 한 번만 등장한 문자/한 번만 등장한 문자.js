function solution(s) {
    const charObj = {};
    
    for(let obj of s) {
        charObj[obj] = (charObj[obj] || 0) + 1;
    }
    
    return s.split('').filter((item) => charObj[item] === 1).sort().join('');
}