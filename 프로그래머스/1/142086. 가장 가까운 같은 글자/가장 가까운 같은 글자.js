function solution(s) {
    let obj = {};
    let result = [];
    
    for(let [index, char] of [...s].entries()) {
        if(obj[char] !== undefined) {
            let num = index - obj[char];
            result.push(num);
            obj[char] = index;
        } else {
            result.push(-1);
            obj[char] = index;
        }
    }
    
    return result;
    
}