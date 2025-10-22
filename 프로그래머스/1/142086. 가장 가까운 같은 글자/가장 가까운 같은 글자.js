function solution(s) {
    let arr = s.split("");
    let obj = {};
    let result = [];
    
    for(let [index,value] of arr.entries()) {
        if(obj[value] !== undefined) {
            const calIndex = index - obj[value];
            result.push(calIndex);
            obj[value] = index;
        } else {
            obj[value] = index;
            result.push(-1);
        }
    }
    
    return result;
    
}